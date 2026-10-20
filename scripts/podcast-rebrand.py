"""Replace branded radio paragraphs, preserving other narration PCM and the fixed bed."""
import os
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',HF_HUB_DISABLE_TELEMETRY='1')
import hashlib
import json
import re
import shutil
import subprocess
from datetime import datetime,timezone
from pathlib import Path
import numpy as np
import soundfile as sf
from filelock import FileLock
from voice_io import atomic_replace
from podcast_subtitles_core import timed_captions

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
STAGE=WORK/'brand-lab'
BEFORE=STAGE/'before'
RATE=24000
GAIN=10**(1.3/20)
OLD='汉语时光'
NEW='汉语实验室'
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
dump=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2),encoding='utf-8')
voice_filter='highpass=f=65,equalizer=f=180:t=q:w=0.8:g=0.6,equalizer=f=350:t=q:w=0.8:g=-1,equalizer=f=2800:t=q:w=0.8:g=0.8'
model_dir=ROOT/'.local/kokoro-model'
pipeline=None

def ff(*args):
    return subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*map(str,args)],capture_output=True,check=True)

def synth(text,speed):
    global pipeline
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
    wave,sr=sf.read(cache,dtype='float32')
    assert sr==RATE and np.isfinite(wave).all()
    active=np.flatnonzero(np.abs(wave)>.004)
    wave=wave[max(0,active[0]-int(.07*RATE)):min(len(wave),active[-1]+int(.12*RATE))]
    dry=STAGE/'dry.wav'
    sf.write(dry,wave,RATE,subtype='FLOAT')
    return np.frombuffer(ff('-i',dry,'-af',voice_filter,'-ar',RATE,'-ac',1,'-f','f32le','pipe:1').stdout,dtype='<f4').copy()

def qa(path):
    p=subprocess.run(['ffmpeg','-hide_banner','-i',str(path),'-af','loudnorm=print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
    metrics=json.JSONDecoder().raw_decode(p.stderr[p.stderr.rfind('{'):])[0]
    samples=np.frombuffer(ff('-i',path,'-ar',RATE,'-ac',2,'-f','f32le','pipe:1').stdout,dtype='<f4')
    assert np.isfinite(samples).all() and np.max(np.abs(samples))<.99
    assert -26<float(metrics['input_i'])<-14 and float(metrics['input_tp'])<-1,metrics
    return {'seconds':len(samples)/(RATE*2),'peak':float(np.max(np.abs(samples))),'lufs':float(metrics['input_i']),'truePeakDb':float(metrics['input_tp']),'sha256':sha(path)}

with FileLock(str(WORK/'render.lock'),timeout=1):
    STAGE.mkdir(exist_ok=True)
    BEFORE.mkdir(exist_ok=True)
    catalog_path=WORK/'rendered/catalog.json'
    if not (BEFORE/'catalog.json').exists():
        initial=read(catalog_path)
        for e in initial['episodes']:
            shutil.copy2(WORK/f"{e['id']}-voice.wav",BEFORE/f"{e['id']}-voice.wav")
        for name in ['podcast-radio.json','radio-storyteller.json','podcast-subtitles.json','podcast-subtitles.vi.json']:
            shutil.copy2(ROOT/'content'/name,BEFORE/name)
        shutil.copy2(catalog_path,BEFORE/'catalog.json')
    catalog=read(BEFORE/'catalog.json')
    assert len(catalog['episodes'])==7
    config=read(ROOT/'content/podcast-radio-music.json')
    bed,sr=sf.read(ROOT/config['localFile'],dtype='float32',always_2d=True)
    assert sr==RATE and sha(ROOT/config['localFile'])==config['sha256']
    profile=catalog['profile']
    assert sha(model_dir/'kokoro-v1_1-zh.pth')==profile['modelSha256']
    assert sha(model_dir/'voices/zf_001.pt')==profile['speakerSha256']
    source=read(BEFORE/'podcast-radio.json')
    assert len(source)==len(catalog['episodes'])
    translations=read(BEFORE/'podcast-subtitles.vi.json')
    proof={'checkedAt':datetime.now(timezone.utc).isoformat(),'oldName':OLD,'newName':NEW,'voiceId':'hnl-kokoro-zf001-v1','musicPcmSha256':config['sha256'],'musicChanged':False,'pitchChanged':False,'humanReviewed':False,'episodes':[]}
    for episode,definition in zip(catalog['episodes'],source):
        assert episode['id']==definition['id']
        original,sr=sf.read(BEFORE/f"{episode['id']}-voice.wav",dtype='float32')
        assert sr==RATE and len(original)==len(bed)
        old_timeline=episode['production']['segments']
        chunks=[]
        timeline=[]
        cursor=0
        changed=[]
        unchanged=[]
        for i,segment in enumerate(old_timeline):
            left,right=round(segment['start']*RATE),round(segment['end']*RATE)
            chunks.append(original[cursor:left].copy())
            old=original[left:right]
            text=segment['text'].replace(OLD,NEW)
            start=sum(map(len,chunks))
            if text!=segment['text']:
                wave=synth(text,segment['speed'])
                a=old[np.abs(old)>.015]
                b=wave[np.abs(wave)>.015]
                scale=min(float(np.sqrt(np.mean(a*a))/np.sqrt(np.mean(b*b))),float(np.max(np.abs(old))/np.max(np.abs(wave))))
                wave*=scale
                changed.append({'index':i,'oldText':segment['text'],'newText':text,'speed':segment['speed'],'gainMatchedToOldSegment':scale})
            else:
                wave=old.copy()
                unchanged.append({'index':i,'oldStartSample':left,'newStartSample':start,'samples':len(wave),'sha256':hashlib.sha256(wave.tobytes()).hexdigest()})
            chunks.append(wave)
            timeline.append({**segment,'text':text,'start':start/RATE,'end':(start+len(wave))/RATE})
            cursor=right
        voice=np.concatenate(chunks)
        assert len(voice)<len(bed)-RATE,'New narration does not fit fixed music; do not stretch or change music'
        voice=np.pad(voice,(0,len(bed)-len(voice)))
        mixed=voice[:,None]+bed
        assert np.max(np.abs(mixed))<.9
        assert len(changed)==2
        for item in unchanged:
            actual=voice[item['newStartSample']:item['newStartSample']+item['samples']]
            assert hashlib.sha256(actual.tobytes()).hexdigest()==item['sha256']
        residual=float(np.max(np.abs(mixed-voice[:,None]-bed)))
        assert residual<1e-7
        base=voice/GAIN
        base_path=STAGE/f"{episode['id']}-base.wav"
        report_path=STAGE/f"{episode['id']}-source.json"
        sf.write(base_path,base,RATE,subtype='FLOAT')
        dump(report_path,{'segments':timeline,'musicPcmSha256':config['sha256'],'review':'unreviewed','voice':'Kokoro zf_001','brandUpdate':True})
        definition.update(segments=[s['text'] for s in timeline],sourceVoice=base_path.relative_to(ROOT).as_posix(),sourceReport=report_path.relative_to(ROOT).as_posix())
        text_hash=hashlib.sha256(''.join(s['text'] for s in timeline).encode()).hexdigest()
        translations[episode['id']]['sourceTextSha256']=text_hash
        translations[episode['id']]['vi']=[re.sub(r'Hán\s*Ngữ\s*Thời\s*Quang','Hán Ngữ Lab',s,flags=re.I) for s in translations[episode['id']]['vi']]
        episode['production'].update(segments=timeline,textSha256=text_hash,sourceVoiceSha256=sha(base_path),baseVoicePcmSha256=hashlib.sha256(base.tobytes()).hexdigest(),brandUpdate=True)
        episode['assets']={}
        fingerprint=hashlib.sha256(voice.tobytes()+config['sha256'].encode()).hexdigest()[:12]
        for kind,wave in [('voice',voice),('mix',mixed)]:
            wav=STAGE/f"{episode['id']}-{kind}.wav"
            sf.write(wav,wave,RATE,subtype='FLOAT')
            dest=WORK/'rendered'/f"{episode['id']}-{fingerprint}-{kind}.mp3"
            temp=dest.with_suffix('.tmp.mp3')
            ff('-i',wav,'-c:a','libmp3lame','-b:a','192k','-metadata','artist=Hán Ngữ Lab','-metadata',f"title={episode['title']}",'-metadata','comment=Brand name updated with same Kokoro zf_001 voice; selected piano PCM unchanged.',temp)
            metrics=qa(temp)
            atomic_replace(temp,dest)
            episode['assets'][kind]={'url':f'/api/podcasts/media/{dest.name}',**metrics}
        proof['episodes'].append({'id':episode['id'],'changedSegments':changed,'unchangedPcmSegments':unchanged,'musicResidualMaxError':residual,'narrationEnd':timeline[-1]['end'],'newAudioSha256':{k:a['sha256'] for k,a in episode['assets'].items()}})
        dump(STAGE/'progress.json',{'completed':[e['id'] for e in proof['episodes']],'total':len(source)})
        print(f"QA rebrand {episode['id']}: changed={len(changed)}, preserved={len(unchanged)} end={timeline[-1]['end']:.2f}s",flush=True)
    # Activate text and audio only after all fourteen encoded files pass QA.
    dump(ROOT/'content/podcast-radio.json',source)
    dump(ROOT/'content/podcast-subtitles.vi.json',translations)
    for name in ['radio-storyteller.json','radio-pilot.json']:
        path=ROOT/'content'/name
        path.write_text(path.read_text(encoding='utf-8-sig').replace(OLD,NEW),encoding='utf-8')
    path=ROOT/'docs/RADIO_PILOT_SCRIPT.md'
    path.write_text(path.read_text(encoding='utf-8-sig').replace(OLD,NEW),encoding='utf-8')
    subprocess.run([os.sys.executable,'-B','-X','utf8',str(ROOT/'scripts/podcast-subtitles.py'),'--refresh-pinyin','--no-apply'],cwd=ROOT,check=True)
    captions=read(ROOT/'content/podcast-subtitles.json')['episodes']
    profile['presetSha256']=sha(ROOT/'content/radio-storyteller.json')
    for episode in catalog['episodes']:
        episode['segments']=timed_captions(captions[episode['id']]['segments'],episode['production']['segments'],episode['duration'])
        for kind in ['voice','mix']:
            shutil.copy2(STAGE/f"{episode['id']}-{kind}.wav",WORK/f"{episode['id']}-{kind}.wav")
    catalog['generatedAt']=datetime.now(timezone.utc).isoformat()
    temp=catalog_path.with_suffix('.brand.tmp.json')
    dump(temp,catalog)
    dump(WORK/'brand-update.json',proof)
    atomic_replace(temp,catalog_path)
    dump(WORK/'render-summary.json',{'format':'radio','episodes':len(catalog['episodes']),'audioFiles':len(catalog['episodes'])*2,'generatedSegments':sum(len(e['changedSegments']) for e in proof['episodes']),'preservedNarrationSegments':sum(len(e['unchangedPcmSegments']) for e in proof['episodes']),'voiceGainDb':1.3,'musicPcmSha256':config['sha256'],'method':'Brand paragraphs replaced with same voice; other narration PCM preserved','humanReviewed':False})
    print('Activated 7 rebranded podcasts; same voice, fixed music and other narration PCM preserved',flush=True)
