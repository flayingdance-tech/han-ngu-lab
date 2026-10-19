"""Reference-backed radio draft. Private output; never changes the published bank."""
import os
os.environ.update(HF_HUB_OFFLINE='1', TRANSFORMERS_OFFLINE='1', HF_HUB_DISABLE_TELEMETRY='1')
import hashlib
import json
import subprocess
from pathlib import Path
from datetime import date
import numpy as np
import soundfile as sf
import torch
from scipy.ndimage import uniform_filter1d

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '.local/podcasts/radio-pilot'
OUT.mkdir(parents=True, exist_ok=True)
SPEC = json.loads((ROOT / 'content/radio-pilot.json').read_text(encoding='utf-8'))
SOURCE = Path('D:/FDown.vn_Tai_video_Facebook_MP3_34ee.mp4')
RATE = 24000

def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],check=True,capture_output=True)

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def main():
    assert date.fromisoformat(SPEC['date']).weekday() == 0
    for segment in SPEC['segments']:
        if segment.get('practice'):
            assert 4 <= sum('\u4e00' <= c <= '\u9fff' for c in segment['text']) <= 8
    torch.set_num_threads(2)
    torch.manual_seed(20261019)
    bed_path = OUT/'reference-instrumental.wav'
    source_sha = sha(SOURCE)
    provenance = OUT/'music-provenance.json'
    if not bed_path.exists() or not provenance.exists() or json.loads(provenance.read_text(encoding='utf-8'))['sourceSha256'] != source_sha:
        from demucs.apply import apply_model
        from demucs.pretrained import get_model
        torch.hub.set_dir(str(ROOT/'.local/audio-preview/models/hub'))
        decoded = OUT/'source-stereo.wav'
        ff('-i',SOURCE,'-vn','-ar',44100,'-ac',2,decoded)
        audio, sr = sf.read(decoded,dtype='float32',always_2d=True)
        model = get_model('htdemucs').cpu().eval()
        mixture = torch.from_numpy(audio.T.copy())
        mean, std = mixture.mean(0).mean(), mixture.mean(0).std()
        assert std > 1e-8
        with torch.inference_mode():
            stems = apply_model(model,((mixture-mean)/std)[None],device='cpu',shifts=1,split=True,overlap=.25,progress=False)[0]
        stems = stems * std + mean
        instrumental = sum(stems[i] for i,name in enumerate(model.sources) if name != 'vocals')
        sf.write(bed_path,instrumental.T.numpy(),sr,subtype='FLOAT')
        provenance.write_text(json.dumps({'sourceSha256':source_sha,'sourceFile':str(SOURCE),'method':'htdemucs non-vocal stems, original stereo 44.1kHz','rights':SPEC['musicRights'],'sha256':sha(bed_path)},ensure_ascii=False,indent=2),encoding='utf-8')
        del model, stems
    print('Reference instrumental ready',flush=True)
    from kokoro import KModel, KPipeline
    model_dir = ROOT/'.local/kokoro-model'
    model = KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',config=str(model_dir/'config.json'),model=str(model_dir/'kokoro-v1_1-zh.pth')).eval()
    pipeline = KPipeline(lang_code='z',repo_id='hexgrad/Kokoro-82M-v1.1-zh',model=model,en_callable=lambda text:'')
    chunks=[np.zeros(RATE*3,dtype='float32')]
    timeline=[]
    for i,segment in enumerate(SPEC['segments']):
        phones=pipeline.g2p(segment['text'])[0]
        assert phones and len(phones)<400 and '❓' not in phones
        key=hashlib.sha256(f"radio-v1|zf001|{segment['speed']}|{phones}".encode()).hexdigest()
        cache=OUT/f'{key}.wav'
        if not cache.exists():
            results=list(pipeline.generate_from_tokens(phones,voice=str(model_dir/'voices/zf_001.pt'),speed=segment['speed']))
            assert ''.join(r.phonemes for r in results)==phones
            wave=np.concatenate([r.audio.numpy() for r in results])
            sf.write(cache,wave,RATE,subtype='FLOAT')
        wave,sr=sf.read(cache,dtype='float32')
        assert sr==RATE and np.isfinite(wave).all() and len(wave)>RATE*.2
        # Trim only padding at the edges; preserve internal phrasing and breathing.
        active=np.flatnonzero(np.abs(wave)>.004)
        assert len(active)
        wave=wave[max(0,active[0]-int(.07*RATE)):min(len(wave),active[-1]+int(.12*RATE))]
        start=sum(map(len,chunks))/RATE
        timeline.append({**segment,'start':start,'end':start+len(wave)/RATE})
        chunks.extend([wave,np.zeros(int(segment['pause']*RATE),dtype='float32')])
        print(f'Speech {i+1}/{len(SPEC["segments"])}',flush=True)
    chunks.append(np.zeros(RATE*4,dtype='float32'))
    voice=np.concatenate(chunks)
    active=voice[np.abs(voice)>.015]
    voice*=min(.7/np.max(np.abs(voice)),.12/np.sqrt(np.mean(active**2)))
    n=len(voice)
    assert 60<=n/RATE<=120, f'Duration outside request: {n/RATE}'
    raw=ff('-i',bed_path,'-ar',RATE,'-ac',2,'-f','f32le','pipe:1').stdout
    music=np.frombuffer(raw,dtype='<f4').reshape(-1,2).copy()
    music*=min(.035/max(np.sqrt(np.mean(music**2)),1e-6),.2/max(np.max(np.abs(music)),1e-6))
    overlap=RATE*3
    weights=np.linspace(0,1,overlap)[:,None]
    loop=music.copy()
    while len(loop)<n:
        loop=np.concatenate([loop[:-overlap],loop[-overlap:]*(1-weights)+music[:overlap]*weights,music[overlap:]])
    bed=loop[:n].copy()
    env=uniform_filter1d(np.abs(voice),size=int(RATE*.15))
    duck=uniform_filter1d(np.where(env>.009,.5,1.),size=int(RATE*.65))
    bed*=duck[:,None]
    bed[:RATE*2]*=np.linspace(0,1,RATE*2)[:,None]
    bed[-RATE*4:]*=np.linspace(1,0,RATE*4)[:,None]
    mixed=voice[:,None]+bed
    sf.write(OUT/'pilot-mix.wav',mixed,RATE,subtype='FLOAT')
    sf.write(OUT/'pilot-voice.wav',voice,RATE,subtype='FLOAT')
    report={'review':'unreviewed','duration':n/RATE,'voice':'Kokoro zf_001','pitchChanged':False,'segments':timeline,'assets':{}}
    for kind in ('mix','voice'):
        dest=OUT/f'pilot-{kind}.mp3'
        ff('-i',OUT/f'pilot-{kind}.wav','-af','loudnorm=I=-19:TP=-1.5:LRA=9','-ar',RATE,'-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata',f'title={SPEC["title"]}',dest)
        stats=subprocess.run(['ffmpeg','-hide_banner','-i',str(dest),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
        loudness=json.JSONDecoder().raw_decode(stats.stderr[stats.stderr.rfind('{'):])[0]
        assert float(loudness['input_tp']) < -1
        report['assets'][kind]={'file':str(dest),'sha256':sha(dest),'loudness':loudness}
    (OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'PILOT READY: {n/RATE:.2f}s',flush=True)

if __name__=='__main__':
    main()
