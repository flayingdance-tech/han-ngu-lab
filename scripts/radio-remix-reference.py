"""V4 private audition: retain slow V3 narration and restore the reference music."""
import hashlib
import json
import subprocess
from pathlib import Path
import numpy as np
import soundfile as sf
from scipy.ndimage import uniform_filter1d

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.local/podcasts/radio-pilot'
RATE=24000
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
previous=json.loads((OUT/'report-v3.json').read_text(encoding='utf-8'))
provenance=json.loads((OUT/'music-provenance.json').read_text(encoding='utf-8'))
source=OUT/'reference-instrumental.wav'
assert sha(source)==provenance['sha256']
voice_path=OUT/'pilot-v3-voice.wav'
voice_hash=sha(voice_path)
voice,sr=sf.read(voice_path,dtype='float32')
assert sr==RATE and voice.ndim==1 and abs(len(voice)/RATE-previous['duration'])<.001
assert sha(Path(previous['assets']['voice']['file']))==previous['assets']['voice']['sha256']
raw=subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(source),'-ar',str(RATE),'-ac','2','-f','f32le','pipe:1'],check=True,capture_output=True).stdout
music=np.frombuffer(raw,dtype='<f4').reshape(-1,2).copy()
music*=min(.035/max(np.sqrt(np.mean(music**2)),1e-6),.2/max(np.max(np.abs(music)),1e-6))
overlap=RATE*3
phase=np.linspace(0,np.pi/2,overlap)[:,None]
loop=music.copy()
loop_count=0
while len(loop)<len(voice):
    loop=np.concatenate([loop[:-overlap],loop[-overlap:]*np.cos(phase)+music[:overlap]*np.sin(phase),music[overlap:]])
    loop_count+=1
bed=loop[:len(voice)].copy()
rms=np.sqrt(np.maximum(uniform_filter1d(np.mean(bed**2,axis=1),size=RATE*2),1e-10))
bed*=uniform_filter1d(np.clip(.010/rms,.15,3.),size=RATE*3)[:,None]
for _ in range(8):
    rms=np.sqrt(np.maximum(uniform_filter1d(np.mean(bed**2,axis=1),size=RATE),1e-10))
    bed*=np.clip(.010/rms,.5,2.)[:,None]
levels=[float(20*np.log10(max(np.sqrt(np.mean(bed[i:i+RATE*3]**2)),1e-8))) for i in range(RATE*4,len(bed)-RATE*7,RATE)]
assert max(levels)-min(levels)<2., 'Unstable reference music level'
bed[:RATE*2]*=np.linspace(0,1,RATE*2)[:,None]
bed[-RATE*4:]*=np.linspace(1,0,RATE*4)[:,None]
mixed=voice[:,None]+bed
assert np.isfinite(mixed).all() and np.max(np.abs(mixed))<.85
sf.write(OUT/'pilot-v4-mix.wav',mixed,RATE,subtype='FLOAT')
sf.write(OUT/'pilot-v4-music.wav',bed,RATE,subtype='FLOAT')
dest=OUT/'pilot-v4-mix.mp3'
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(OUT/'pilot-v4-mix.wav'),'-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata','title=Chào tuần mới — mẫu v4','-metadata','comment=Music restored from user-provided reference; usage rights confirmed by project owner. Slow Mandarin A narration unchanged from V3. Private unreviewed audition.',str(dest)],check=True)
stats=subprocess.run(['ffmpeg','-hide_banner','-i',str(dest),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
loudness=json.JSONDecoder().raw_decode(stats.stderr[stats.stderr.rfind('{'):])[0]
assert float(loudness['input_tp']) < -1
assert sha(voice_path)==voice_hash
report={**previous,'revision':'v4','music':{'title':'Nhạc nền video tham chiếu của chủ dự án','provenance':provenance},'musicLoopCount':loop_count,'musicWindowDbRange':max(levels)-min(levels),'speechDucking':False,'masterGain':1.,'voiceWaveSha256':voice_hash,'voiceUnchangedFrom':'v3','assets':{'voice':previous['assets']['voice'],'mix':{'file':str(dest),'sha256':sha(dest),'loudness':loudness}}}
(OUT/'report-v4.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'duration':report['duration'],'musicWindowDbRange':report['musicWindowDbRange'],'loudness':loudness,'file':str(dest)},ensure_ascii=False),flush=True)
