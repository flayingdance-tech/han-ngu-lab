"""Publish the selected radio preset to the private local catalog atomically."""
import os
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',HF_HUB_DISABLE_TELEMETRY='1')
import hashlib
import json
import subprocess
from pathlib import Path
from datetime import date,datetime,timezone
import numpy as np
import soundfile as sf
from filelock import FileLock
from voice_io import atomic_replace
from podcast_subtitles_core import timed_captions

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
OUT=WORK/'rendered'
OUT.mkdir(parents=True,exist_ok=True)
RATE=24000
GAIN_DB=1.3
GAIN=10**(GAIN_DB/20)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
episodes=read(ROOT/'content/podcast-radio.json')
music_config=read(ROOT/'content/podcast-radio-music.json')
preset=read(ROOT/'content/radio-storyteller.json')
subtitles=read(ROOT/'content/podcast-subtitles.json')['episodes']
music_file=ROOT/music_config['localFile']
assert sha(music_file)==music_config['sha256']
bed,sr=sf.read(music_file,dtype='float32',always_2d=True)
assert sr==RATE and bed.shape[1]==2 and 60<len(bed)/RATE<120
assert len({e['id'] for e in episodes})==len(episodes)
voice_filter='highpass=f=65,equalizer=f=180:t=q:w=0.8:g=0.6,equalizer=f=350:t=q:w=0.8:g=-1,equalizer=f=2800:t=q:w=0.8:g=0.8'
model_dir=ROOT/'.local/kokoro-model'
assert sha(model_dir/'kokoro-v1_1-zh.pth')=='b1d8410fa44dfb5c15471fd6c4225ea6b4e9ac7fa03c98e8bea47a9928476e2b'
profile={'voiceId':'hnl-kokoro-zf001-v1','modelSha256':sha(model_dir/'kokoro-v1_1-zh.pth'),'speakerSha256':sha(model_dir/'voices/zf_001.pt'),'presetSha256':sha(ROOT/'content/radio-storyteller.json'),'musicPcmSha256':sha(music_file),'voiceGainDb':GAIN_DB,'pitchChanged':False,'musicChanged':False,'filter':voice_filter}
fingerprint=hashlib.sha256(json.dumps(profile,sort_keys=True).encode()+Path(__file__).read_bytes()+(ROOT/'content/podcast-radio.json').read_bytes()).hexdigest()
def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],capture_output=True,check=True)
def qa(path):
    p=subprocess.run(['ffmpeg','-hide_banner','-i',str(path),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
    metrics=json.JSONDecoder().raw_decode(p.stderr[p.stderr.rfind('{'):])[0]
    raw=ff('-i',path,'-ar',RATE,'-ac',2,'-f','f32le','pipe:1').stdout
    samples=np.frombuffer(raw,dtype='<f4')
    assert np.isfinite(samples).all() and np.max(np.abs(samples))<.99
    assert -26<float(metrics['input_i'])<-14 and float(metrics['input_tp'])<-1,metrics
    return {'seconds':len(samples)/(RATE*2),'peak':float(np.max(np.abs(samples))),'lufs':float(metrics['input_i']),'truePeakDb':float(metrics['input_tp']),'sha256':sha(path)}

pipeline=None
generated=0
def synthesize(text,speed):
    global pipeline,generated
    if pipeline is None:
        import torch
        from kokoro import KModel,KPipeline
        torch.set_num_threads(2)
        torch.manual_seed(20261019)
        model=KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',config=str(model_dir/'config.json'),model=str(model_dir/'kokoro-v1_1-zh.pth')).eval()
        pipeline=KPipeline(lang_code='z',repo_id='hexgrad/Kokoro-82M-v1.1-zh',model=model,en_callable=lambda text:'')
    phones=pipeline.g2p(text)[0]
    assert phones and len(phones)<400 and '❓' not in phones
    key=hashlib.sha256(f'radio-v1|zf001|{speed}|{phones}'.encode()).hexdigest()
    cache=WORK/'radio-pilot'/f'{key}.wav'
    if not cache.exists():
        result=list(pipeline.generate_from_tokens(phones,voice=str(model_dir/'voices/zf_001.pt'),speed=speed))
        assert ''.join(r.phonemes for r in result)==phones
        sf.write(cache,np.concatenate([r.audio.numpy() for r in result]),RATE,subtype='FLOAT')
        generated+=1
    wave,sr=sf.read(cache,dtype='float32')
    assert sr==RATE and np.isfinite(wave).all()
    active=np.flatnonzero(np.abs(wave)>.004)
    assert len(active)
    return wave[max(0,active[0]-int(.07*RATE)):min(len(wave),active[-1]+int(.12*RATE))]

with FileLock(str(WORK/'render.lock'),timeout=1):
    public_music={k:v for k,v in music_config.items() if k not in ('localFile','sha256','originalFile')}
    catalog={'version':1,'generatedAt':datetime.now(timezone.utc).isoformat(),'profile':profile,'music':public_music,'episodes':[]}
    source_text_hashes=set()
    for episode in episodes:
        timeline=[]
        if episode.get('sourceVoice'):
            voice,sr=sf.read(ROOT/episode['sourceVoice'],dtype='float32')
            assert sr==RATE and voice.ndim==1 and len(voice)==len(bed)
            source=read(ROOT/episode['sourceReport'])
            timeline=source['segments']
            assert source['musicPcmSha256']==profile['musicPcmSha256']
            source_voice_sha=sha(ROOT/episode['sourceVoice'])
        else:
            chunks=[np.zeros(RATE*3,dtype='float32')]
            for i,text in enumerate(episode['segments']):
                settings=preset['segments'][-1] if i==len(episode['segments'])-1 else preset['segments'][i]
                wave=synthesize(text,settings['speed'])
                start=sum(map(len,chunks))/RATE
                timeline.append({'text':text,'speed':settings['speed'],'start':start,'end':start+len(wave)/RATE})
                chunks.extend([wave,np.zeros(int(settings['pause']*RATE),dtype='float32')])
                print(f"{episode['id']} {i+1}/{len(episode['segments'])}",flush=True)
            voice=np.concatenate(chunks)
            assert len(voice)<len(bed)-RATE*2, f"Narration too long: {episode['id']} {len(voice)/RATE:.2f}s; shorten script, keep music fixed"
            voice=np.pad(voice,(0,len(bed)-len(voice)))
            active=voice[np.abs(voice)>.015]
            voice*=min(.6/np.max(np.abs(voice)),.105/np.sqrt(np.mean(active**2)))
            dry=WORK/'radio-dry.wav'
            sf.write(dry,voice,RATE,subtype='FLOAT')
            raw=ff('-i',dry,'-af',voice_filter,'-ar',RATE,'-ac',1,'-f','f32le','pipe:1').stdout
            voice=np.frombuffer(raw,dtype='<f4').copy()
            base_gain=1.
            while np.max(np.abs(voice[:,None]*base_gain+bed))>.78:
                base_gain*=.98
            voice*=base_gain
            source_voice_sha=None
        text=''.join(s['text'] for s in timeline)
        text_hash=hashlib.sha256(text.encode()).hexdigest()
        assert text_hash not in source_text_hashes,'Repeated episode'
        source_text_hashes.add(text_hash)
        weekday=date.fromisoformat(episode['broadcastDate']).weekday()
        assert f"星期{'一二三四五六日'[weekday]}" in text,'Incorrect weekday'
        base_voice=voice.copy()
        voice*=GAIN
        mixed=voice[:,None]+bed
        assert np.isfinite(mixed).all() and np.max(np.abs(mixed))<.9,episode['id']
        assert np.max(np.abs(mixed-voice[:,None]-bed))<1e-7,'Music changed'
        result={k:v for k,v in episode.items() if k not in ('segments','sourceVoice','sourceReport')}
        result.update(format='radio',tip='Một khoảng lặng để nghe tiếng Trung, thư giãn và tiếp tục ngày mới.',review='unreviewed',voiceId=profile['voiceId'],duration=len(bed)/RATE,segments=[],assets={},production={'segments':timeline,'textSha256':text_hash,'musicPcmSha256':profile['musicPcmSha256'],'voiceGainDb':GAIN_DB,'sourceVoiceSha256':source_voice_sha,'baseVoicePcmSha256':hashlib.sha256(base_voice.tobytes()).hexdigest()})
        for kind,wave in [('voice',voice),('mix',mixed)]:
            wav=WORK/f"{episode['id']}-{kind}.wav"
            sf.write(wav,wave,RATE,subtype='FLOAT')
            filename=f"{episode['id']}-{fingerprint[:12]}-{kind}.mp3"
            dest=OUT/filename
            temp=dest.with_suffix('.tmp.mp3')
            ff('-i',wav,'-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata',f"title={episode['title']}",'-metadata','comment=Selected radio narration, voice gain +1.3dB; original selected piano bed unchanged. Owner-supplied music, local unreviewed content.',temp)
            metrics=qa(temp)
            atomic_replace(temp,dest)
            result['assets'][kind]={'url':f'/api/podcasts/media/{filename}',**metrics}
        catalog['episodes'].append(result)
        caption_source=subtitles[episode['id']]
        assert caption_source['sourceTextSha256']==text_hash,'Stale subtitles; update authored source'
        result['segments']=timed_captions(caption_source['segments'],timeline,result['duration'])
        # Checkpoint is not served by the API; only the completed catalog is activated.
        (WORK/'radio-render-progress.json').write_text(json.dumps({'completed':[e['id'] for e in catalog['episodes']],'total':len(episodes),'generatedSegments':generated},indent=2),encoding='utf-8')
        print(f"QA passed {episode['id']}",flush=True)
    assert sha(music_file)==profile['musicPcmSha256']
    temp=OUT/'catalog.tmp.json'
    temp.write_text(json.dumps(catalog,ensure_ascii=False,indent=2),encoding='utf-8')
    atomic_replace(temp,OUT/'catalog.json')
    (WORK/'render-summary.json').write_text(json.dumps({'format':'radio','episodes':len(episodes),'audioFiles':len(episodes)*2,'generatedSegments':generated,'voiceGainDb':GAIN_DB,'musicPcmSha256':profile['musicPcmSha256'],'renderFingerprint':fingerprint,'humanReviewed':False},indent=2),encoding='utf-8')
    print('Activated full radio catalog atomically',flush=True)
