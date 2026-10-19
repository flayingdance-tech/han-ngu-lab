"""Private V7: splice piano continuously at original tempo; retain full narration."""
import hashlib
import json
import subprocess
from pathlib import Path
import numpy as np
import soundfile as sf
from scipy.ndimage import uniform_filter1d

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.local/podcasts/radio-pilot'
SOURCE=Path('D:/海来阿木 - 不如见一面 (钢琴版) - (320 Kbps).mp3')
RATE=24000
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],check=True,capture_output=True)
def decode(path,filters):
    return np.frombuffer(ff('-i',path,'-vn','-af',filters,'-ar',RATE,'-ac',2,'-f','f32le','pipe:1').stdout,dtype='<f4').reshape(-1,2).copy()

previous=json.loads((OUT/'report-v3.json').read_text(encoding='utf-8'))
voice_filter='highpass=f=65,equalizer=f=300:t=q:w=0.8:g=-1.5,equalizer=f=2800:t=q:w=0.8:g=1.2,highshelf=f=6500:g=0.8,pan=stereo|c0=c0|c1=c0'
voice=decode(OUT/'pilot-v3-voice.wav',voice_filter)
timeline=previous['segments']
music_filter='highpass=f=35,equalizer=f=2400:t=q:w=0.7:g=-2'
music=decode(SOURCE,music_filter)
def join(left,right):
    overlap=RATE*2
    a,b=left[-overlap:],right[:overlap]
    phase=np.linspace(0,np.pi/2,overlap)[:,None]
    c,s=np.cos(phase),np.sin(phase)
    rho=float(np.sum(a*b)/max(np.sqrt(np.sum(a*a)*np.sum(b*b)),1e-9))
    # Compensate correlated sustained piano notes to avoid a crossfade swell.
    scale=np.sqrt(1+2*np.clip(rho,0,1)*c*s)
    seam=(a*c+b*s)/scale
    return np.concatenate([left[:-overlap],seam,right[overlap:]])
# Insert a musical passage, then continue the original ending. No tempo stretch.
music=join(join(music[:RATE*55],music[RATE*35:RATE*49]),music[RATE*55:])
assert len(music)>=len(voice), 'Spliced music must cover the full narration'
bed=music[:len(voice)].copy()
target=.040
bed*=target/max(float(np.sqrt(np.mean(bed**2))),1e-6)
# Modest music-only leveling retains the piano dynamics and never follows speech.
env=np.sqrt(np.maximum(uniform_filter1d(np.mean(bed**2,axis=1),size=RATE*3),1e-10))
bed*=uniform_filter1d(np.clip(target/env,.8,1.3),size=RATE*3)[:,None]
bed[:RATE*2]*=np.linspace(0,1,RATE*2)[:,None]
bed[-RATE*4:]*=np.linspace(1,0,RATE*4)[:,None]
mix=voice+bed
gain=min(1.,.78/max(float(np.max(np.abs(mix))),1e-6))
mix*=gain
assert np.isfinite(mix).all()
sf.write(OUT/'pilot-v7-mix.wav',mix,RATE,subtype='FLOAT')
sf.write(OUT/'pilot-v7-voice.wav',voice*gain,RATE,subtype='FLOAT')
sf.write(OUT/'pilot-v7-music.wav',bed*gain,RATE,subtype='FLOAT')
dest=OUT/'pilot-v7-mix.mp3'
ff('-i',OUT/'pilot-v7-mix.wav','-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata','title=Hán Ngữ Lab — piano ghép nối liên tục','-metadata','comment=Private audition; user-supplied piano spliced at original tempo and pitch with two crossfades. Full slow light-EQ Mandarin narration retained.',dest)
voice_dest=OUT/'pilot-v7-voice.mp3'
ff('-i',OUT/'pilot-v7-voice.wav','-c:a','libmp3lame','-b:a','192k',voice_dest)
stats=subprocess.run(['ffmpeg','-hide_banner','-i',str(dest),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
loudness=json.JSONDecoder().raw_decode(stats.stderr[stats.stderr.rfind('{'):])[0]
assert float(loudness['input_tp']) < -1
active=np.sqrt(np.mean(voice**2,axis=1))>.015
balance=float(20*np.log10(np.sqrt(np.mean(bed[active]**2))/np.sqrt(np.mean(voice[active]**2))))
report={**previous,'revision':'v7','duration':len(mix)/RATE,'segments':timeline,'music':{'sourceFile':str(SOURCE),'sha256':sha(SOURCE),'musicFilter':music_filter,'tempo':1.,'pitchChanged':False,'edit':{'insertAtSourceSecond':55,'insertSourceSeconds':[35,49],'crossfadeSeconds':2,'outputSeconds':len(mix)/RATE},'rights':'User-provided file for private audition; no public distribution license verified'},'voiceFilter':voice_filter,'musicLoopCount':1,'speechDucking':False,'masterGain':gain,'musicToActiveVoiceRmsDb':balance,'assets':{'voice':{'file':str(voice_dest),'sha256':sha(voice_dest)},'mix':{'file':str(dest),'sha256':sha(dest),'loudness':loudness}}}
(OUT/'report-v7.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'duration':len(mix)/RATE,'musicToVoiceDb':balance,'loudness':loudness},ensure_ascii=False),flush=True)
