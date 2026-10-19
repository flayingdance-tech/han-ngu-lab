"""Offline, cached Mandarin A podcasts; staged drafts are never public build assets."""
import os
os.environ.update(HF_HUB_OFFLINE='1', TRANSFORMERS_OFFLINE='1', HF_HUB_DISABLE_TELEMETRY='1')
import hashlib
import json
import subprocess
from pathlib import Path
from datetime import datetime, timezone
import numpy as np
import soundfile as sf
import torch
from scipy.ndimage import uniform_filter1d
from filelock import FileLock
from kokoro import KModel, KPipeline
from voice_io import atomic_replace
from voice_pronunciation import install_lexicon

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT/'.local/podcasts'
MODEL = ROOT/'.local/kokoro-model'
OUT = WORK/'rendered'
OUT.mkdir(parents=True, exist_ok=True)
RATE = 24000
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
MUSIC_SHA = '9c35f03fd6a747baed3f6a7e0a39fe43483f174ad80aaad73cc18e8472c50641'
assert sha(WORK/'almost-in-f.mp3') == MUSIC_SHA, 'Music source changed'
assert sha(MODEL/'kokoro-v1_1-zh.pth') == 'b1d8410fa44dfb5c15471fd6c4225ea6b4e9ac7fa03c98e8bea47a9928476e2b'
episodes = json.loads((ROOT/'content/podcasts.json').read_text(encoding='utf-8'))
profile = {'voiceId':'hnl-kokoro-zf001-v1', 'speakerSha256':sha(MODEL/'voices/zf_001.pt'),
           'rendererSha256':sha(Path(__file__)), 'musicSha256':MUSIC_SHA,
           'precision':'float32', 'speed':1, 'pitchChanged':False,
           'lexicon':{'有空':['you3','kong4'],'长时间':['chang2','shi2','jian1']}}
fingerprint = hashlib.sha256(json.dumps(profile,sort_keys=True).encode()).hexdigest()

def run(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],check=True,capture_output=True)

def measure(path):
    proc = subprocess.run(['ffmpeg','-hide_banner','-i',str(path),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
    data = json.JSONDecoder().raw_decode(proc.stderr[proc.stderr.rfind('{'):])[0]
    raw = run('-i',path,'-f','f32le','-ar',RATE,'-ac',1,'pipe:1').stdout
    samples = np.frombuffer(raw,dtype='<f4')
    assert np.isfinite(samples).all() and np.max(np.abs(samples)) < .99
    assert -26 < float(data['input_i']) < -14, data
    assert float(data['input_tp']) < -1, data
    return {'seconds':len(samples)/RATE,'peak':float(np.max(np.abs(samples))),
            'lufs':float(data['input_i']),'truePeakDb':float(data['input_tp']),'sha256':sha(path)}

with FileLock(str(WORK/'render.lock'),timeout=1):
    music_raw = run('-i',WORK/'almost-in-f.mp3','-t',600,'-af','lowpass=f=2400','-ar',RATE,'-ac',1,'-f','f32le','pipe:1').stdout
    music = np.frombuffer(music_raw,dtype='<f4').copy()
    music *= .012 / max(float(np.sqrt(np.mean(music**2))), .00001)
    torch.set_num_threads(2)
    torch.manual_seed(20261018)
    pipeline = KPipeline(lang_code='z',repo_id='hexgrad/Kokoro-82M-v1.1-zh',model=False,en_callable=lambda text:'')
    install_lexicon(profile['lexicon'])
    model = None
    catalog = {'version':1,'profile':profile,'generatedAt':datetime.now(timezone.utc).isoformat(),
               'music':{'title':'Almost in F','author':'Kevin MacLeod','license':'CC BY 4.0',
                        'source':'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100394',
                        'licenseUrl':'https://creativecommons.org/licenses/by/4.0/',
                        'changes':'Trích đoạn, lọc dải cao, giảm âm lượng, tự hạ nền khi có lời và fade đầu/cuối.'},'episodes':[]}
    for number,episode in enumerate(episodes):
        chunks=[np.zeros(RATE*2,dtype='float32')]
        segments=[]
        for index,segment in enumerate(episode['segments']):
            text=segment['zh']
            if any(c.isascii() and c.isalpha() for c in text):
                raise ValueError('English text requires an explicit frontend')
            phones=pipeline.g2p(text)[0]
            assert phones and len(phones)<400 and '❓' not in phones, text
            key=hashlib.sha256(f'{fingerprint}|{phones}'.encode()).hexdigest()
            wav=WORK/f'{key}.wav'
            if not wav.exists():
                if model is None:
                    model=KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',config=str(MODEL/'config.json'),model=str(MODEL/'kokoro-v1_1-zh.pth')).eval()
                    pipeline.model=model
                results=list(pipeline.generate_from_tokens(phones,voice=str(MODEL/'voices/zf_001.pt'),speed=1))
                assert ''.join(r.phonemes for r in results)==phones, 'Truncated phonemes'
                wave=np.concatenate([r.audio.numpy() for r in results])
                assert np.isfinite(wave).all() and .5 < len(wave)/RATE < 30 and np.max(np.abs(wave))<1
                temp=wav.with_suffix('.tmp.wav')
                sf.write(temp,wave,RATE,subtype='FLOAT')
                atomic_replace(temp,wav)
            wave,sr=sf.read(wav,dtype='float32')
            assert sr==RATE
            start=sum(map(len,chunks))/RATE
            segments.append({**segment,'start':round(start,3),'end':round(start+len(wave)/RATE,3),'phonemes':phones})
            chunks.extend([wave,np.zeros(int(RATE*segment.get('pause',1.1)),dtype='float32')])
            print(f"{episode['id']} {index+1}/{len(episode['segments'])}",flush=True)
        chunks.append(np.zeros(RATE*2,dtype='float32'))
        speech=np.concatenate(chunks)
        active=speech[np.abs(speech)>.015]
        speech *= min(.75/float(np.max(np.abs(speech))), .11/float(np.sqrt(np.mean(active**2))))
        n=len(speech)
        offset=number*RATE*120
        bed=np.resize(music[offset:],n).copy()
        envelope=uniform_filter1d(np.abs(speech),size=int(RATE*.1))
        duck=uniform_filter1d(np.where(envelope>.012,.3,1.),size=int(RATE*.4))
        bed*=duck
        fade=int(RATE*2)
        bed[:fade]*=np.linspace(0,1,fade)
        bed[-fade:]*=np.linspace(1,0,fade)
        assert np.max(np.abs(speech+bed))<.9
        episode_out={k:v for k,v in episode.items() if k!='segments'}
        episode_out.update(review='unreviewed',voiceId=profile['voiceId'],segments=segments,duration=round(n/RATE,3),assets={})
        for kind,wave in [('voice',speech),('mix',speech+bed)]:
            source=WORK/f"{episode['id']}-{kind}.wav"
            sf.write(source,wave,RATE,subtype='FLOAT')
            filename=f"{episode['id']}-{fingerprint[:12]}-{kind}.mp3"
            dest=OUT/filename
            temp=dest.with_suffix('.tmp.mp3')
            run('-i',source,'-c:a','libmp3lame','-b:a','128k','-metadata','artist=Hán Ngữ Lab; music: Kevin MacLeod',
                '-metadata','comment=Music: Almost in F by Kevin MacLeod, incompetech.com, CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ ; excerpt, filtered, ducked and mixed with narration.',temp)
            qa=measure(temp)
            atomic_replace(temp,dest)
            episode_out['assets'][kind]={'url':f'/api/podcasts/media/{filename}',**qa}
        catalog['episodes'].append(episode_out)
        print(f"QA passed {episode['id']}: {episode_out['duration']} seconds",flush=True)
    temp=OUT/'catalog.tmp.json'
    temp.write_text(json.dumps(catalog,ensure_ascii=False,indent=2),encoding='utf-8')
    atomic_replace(temp,OUT/'catalog.json')
    print('Published local draft catalog atomically. No human review claimed.',flush=True)
