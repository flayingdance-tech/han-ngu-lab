"""Narration-only audition. V8 music PCM is immutable throughout this render."""
import os
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',HF_HUB_DISABLE_TELEMETRY='1')
import hashlib
import json
import subprocess
from pathlib import Path
import numpy as np
import soundfile as sf
import torch
from kokoro import KModel,KPipeline

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.local/podcasts/radio-pilot'
MODEL=ROOT/'.local/kokoro-model'
SPEC=json.loads((ROOT/'content/radio-storyteller.json').read_text(encoding='utf-8'))
BASE=json.loads((OUT/'report-v8.json').read_text(encoding='utf-8'))
RATE=24000
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
music_path=OUT/'pilot-v8-music.wav'
music_hash=sha(music_path)
bed,sr=sf.read(music_path,dtype='float32',always_2d=True)
assert sr==RATE and bed.shape[1]==2
torch.set_num_threads(2)
torch.manual_seed(20261019)
model=KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',config=str(MODEL/'config.json'),model=str(MODEL/'kokoro-v1_1-zh.pth')).eval()
pipe=KPipeline(lang_code='z',repo_id='hexgrad/Kokoro-82M-v1.1-zh',model=model,en_callable=lambda text:'')
chunks=[np.zeros(RATE*3,dtype='float32')]
timeline=[]
for i,s in enumerate(SPEC['segments']):
    phones=pipe.g2p(s['text'])[0]
    assert phones and len(phones)<400 and '❓' not in phones
    key=hashlib.sha256(f"radio-v1|zf001|{s['speed']}|{phones}".encode()).hexdigest()
    cache=OUT/f'{key}.wav'
    if not cache.exists():
        results=list(pipe.generate_from_tokens(phones,voice=str(MODEL/'voices/zf_001.pt'),speed=s['speed']))
        assert ''.join(r.phonemes for r in results)==phones
        sf.write(cache,np.concatenate([r.audio.numpy() for r in results]),RATE,subtype='FLOAT')
    wave,sr=sf.read(cache,dtype='float32')
    assert sr==RATE and np.isfinite(wave).all()
    active=np.flatnonzero(np.abs(wave)>.004)
    assert len(active)
    wave=wave[max(0,active[0]-int(.07*RATE)):min(len(wave),active[-1]+int(.12*RATE))]
    start=sum(map(len,chunks))/RATE
    timeline.append({**s,'start':start,'end':start+len(wave)/RATE})
    chunks.extend([wave,np.zeros(int(s['pause']*RATE),dtype='float32')])
    print(f'Narration {i+1}/7',flush=True)
voice=np.concatenate(chunks)
assert len(voice)<len(bed)-RATE*2, 'Narration would overrun fixed music; revise phrasing, never alter music'
voice=np.pad(voice,(0,len(bed)-len(voice)))
active=voice[np.abs(voice)>.015]
voice*=min(.6/np.max(np.abs(voice)),.105/np.sqrt(np.mean(active**2)))
sf.write(OUT/'storyteller-dry.wav',voice,RATE,subtype='FLOAT')
filters='highpass=f=65,equalizer=f=180:t=q:w=0.8:g=0.6,equalizer=f=350:t=q:w=0.8:g=-1,equalizer=f=2800:t=q:w=0.8:g=0.8'
def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],capture_output=True,check=True)
raw=ff('-i',OUT/'storyteller-dry.wav','-af',filters,'-ar',RATE,'-ac',1,'-f','f32le','pipe:1').stdout
voice=np.frombuffer(raw,dtype='<f4').copy()
assert len(voice)==len(bed)
voice_gain=1.
while np.max(np.abs(voice[:,None]*voice_gain+bed))>.78:
    voice_gain*=.98
voice*=voice_gain
mix=voice[:,None]+bed
assert np.isfinite(mix).all()
assert sha(music_path)==music_hash
# Test the actual unencoded mix residual against the untouched music samples.
assert np.max(np.abs((mix-voice[:,None])-bed))<1e-7
sf.write(OUT/'pilot-v9-mix.wav',mix,RATE,subtype='FLOAT')
sf.write(OUT/'pilot-v9-voice.wav',voice,RATE,subtype='FLOAT')
report={**BASE,'revision':'v9','segments':timeline,'voiceFilter':filters,'voiceGain':voice_gain,'pitchChanged':False,'musicUnchangedFrom':'v8','musicPcmSha256':music_hash,'narrationEnd':timeline[-1]['end'],'direction':SPEC['direction'],'assets':{}}
report.pop('musicToActiveVoiceRmsDb',None)
for kind in ('mix','voice'):
    dest=OUT/f'pilot-v9-{kind}.mp3'
    ff('-i',OUT/f'pilot-v9-{kind}.wav','-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata','title=Hán Ngữ Lab — giọng kể radio','-metadata','comment=Private narration audition; V8 music PCM unchanged. Kokoro zf_001, varied narration pacing, no pitch/formant edits.',dest)
    p=subprocess.run(['ffmpeg','-hide_banner','-i',str(dest),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
    metrics=json.JSONDecoder().raw_decode(p.stderr[p.stderr.rfind('{'):])[0]
    assert float(metrics['input_tp']) < -1
    report['assets'][kind]={'file':str(dest),'sha256':sha(dest),'loudness':metrics}
(OUT/'report-v9.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(f"READY {len(mix)/RATE:.2f}s; narration ends {timeline[-1]['end']:.2f}s; V8 music unchanged",flush=True)
