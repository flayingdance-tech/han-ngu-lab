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
MUSIC = json.loads((ROOT/'content/radio-pilot-music.json').read_text(encoding='utf-8-sig'))
RATE = 24000
REVISION = 'v3'

def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],check=True,capture_output=True)

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def main():
    assert date.fromisoformat(SPEC['date']).weekday() == 0
    assert all('practice' not in segment for segment in SPEC['segments'])
    assert len({segment['text'] for segment in SPEC['segments']}) == len(SPEC['segments'])
    assert '今天的小短语' not in ''.join(s['text'] for s in SPEC['segments'])
    torch.set_num_threads(2)
    torch.manual_seed(20261019)
    bed_path = ROOT/MUSIC['localFile']
    assert sha(bed_path)==MUSIC['sha256'], 'Music hash mismatch'
    print('Full-length licensed music ready; no separation or looping',flush=True)
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
    voice*=min(.65/np.max(np.abs(voice)),.10/np.sqrt(np.mean(active**2)))
    n=len(voice)
    assert 60<=n/RATE<=120, f'Duration outside request: {n/RATE}'
    raw=ff('-ss',MUSIC['offsetSeconds'],'-i',bed_path,'-t',n/RATE,'-ar',RATE,'-ac',2,'-f','f32le','pipe:1').stdout
    music=np.frombuffer(raw,dtype='<f4').reshape(-1,2).copy()
    music*=min(.035/max(np.sqrt(np.mean(music**2)),1e-6),.2/max(np.max(np.abs(music)),1e-6))
    assert len(music)>=n, 'Music must cover the episode without repeating'
    bed=music[:n].copy()
    # Slow, music-only leveling. Never modulate the bed from speech activity.
    rms=np.sqrt(np.maximum(uniform_filter1d(np.mean(bed**2,axis=1),size=RATE*2),1e-10))
    leveling=uniform_filter1d(np.clip(.010/rms,.15,3.),size=RATE*3)
    bed*=leveling[:,None]
    # Level music independently; do not add noise, reverb or speech-triggered gain.
    for _ in range(8):
        rms=np.sqrt(np.maximum(uniform_filter1d(np.mean(bed**2,axis=1),size=RATE),1e-10))
        correction=np.clip(.010/rms,.5,2.)
        bed*=correction[:,None]
    def window_db(wave):
        return [float(20*np.log10(max(np.sqrt(np.mean(wave[i:i+RATE*3]**2)),1e-8))) for i in range(RATE*4,len(wave)-RATE*7,RATE)]
    music_levels=window_db(bed)
    print(f'Music window range: {max(music_levels)-min(music_levels):.3f} dB',flush=True)
    assert max(music_levels)-min(music_levels)<2., 'Music level still varies by over 2 dB'
    bed[:RATE*2]*=np.linspace(0,1,RATE*2)[:,None]
    bed[-RATE*4:]*=np.linspace(1,0,RATE*4)[:,None]
    mixed=voice[:,None]+bed
    # One fixed gain for the whole episode: no dynamic loudnorm pumping the bed.
    gain=min(1.,.72/max(float(np.max(np.abs(mixed))),1e-6))
    sf.write(OUT/f'pilot-{REVISION}-mix.wav',mixed*gain,RATE,subtype='FLOAT')
    sf.write(OUT/f'pilot-{REVISION}-voice.wav',voice*gain,RATE,subtype='FLOAT')
    sf.write(OUT/f'pilot-{REVISION}-music.wav',bed*gain,RATE,subtype='FLOAT')
    report={'revision':REVISION,'review':'unreviewed','duration':n/RATE,'voice':'Kokoro zf_001','pitchChanged':False,'speechDucking':False,'musicLoopCount':0,'music':MUSIC,'masterGain':gain,'musicWindowDbRange':max(music_levels)-min(music_levels),'segments':timeline,'assets':{}}
    for kind in ('mix','voice'):
        dest=OUT/f'pilot-{REVISION}-{kind}.mp3'
        credit=f"Music: {MUSIC['title']} by {MUSIC['author']} (incompetech.com), {MUSIC['license']}, {MUSIC['licenseUrl']}. {MUSIC['changes']}"
        ff('-i',OUT/f'pilot-{REVISION}-{kind}.wav','-ar',RATE,'-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata',f'title={SPEC["title"]}','-metadata',f'comment={credit if kind=="mix" else "Mandarin A, slow radio audition"}',dest)
        stats=subprocess.run(['ffmpeg','-hide_banner','-i',str(dest),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
        loudness=json.JSONDecoder().raw_decode(stats.stderr[stats.stderr.rfind('{'):])[0]
        assert float(loudness['input_tp']) < -1
        report['assets'][kind]={'file':str(dest),'sha256':sha(dest),'loudness':loudness}
    (OUT/f'report-{REVISION}.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'PILOT READY: {n/RATE:.2f}s',flush=True)

if __name__=='__main__':
    main()
