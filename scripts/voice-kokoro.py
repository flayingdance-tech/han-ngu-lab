"""Render a resumable, isolated Mandarin bank. Publishing is a separate action."""
import hashlib
import argparse
import json
import os
import subprocess
import time
import shutil
from datetime import datetime, timezone
from pathlib import Path
from voice_io import atomic_replace
from voice_pronunciation import curriculum_lexicon, install_lexicon, word_phonemes

os.environ.update(HF_HUB_OFFLINE='1', TRANSFORMERS_OFFLINE='1', HF_HUB_DISABLE_TELEMETRY='1')
import numpy as np
import soundfile as sf
import torch
from filelock import FileLock
from kokoro import KModel, KPipeline

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--reuse-cache', help='Explicit previous bank directory; reuse only identical phonemes')
args = parser.parse_args()
VOICE = 'hnl-kokoro-zf001-v1'
MODEL = ROOT/'.local/kokoro-model'
WORK = ROOT/'.local/voice-kokoro'
OUT = WORK/'public/audio'/VOICE
OUT.mkdir(parents=True, exist_ok=True)
targets = json.loads((ROOT/'.local/voice/targets.json').read_text(encoding='utf-8'))
lexicon = curriculum_lexicon(targets['targets'])
sha = lambda path: hashlib.sha256(path.read_bytes()).hexdigest()
model_sha = sha(MODEL/'kokoro-v1_1-zh.pth')
if model_sha != 'b1d8410fa44dfb5c15471fd6c4225ea6b4e9ac7fa03c98e8bea47a9928476e2b':
    raise ValueError('Unexpected model checksum')
profile = {'voiceId':VOICE, 'engine':'Kokoro-82M-v1.1-zh', 'speaker':'zf_001',
           'revision':'01e7505bd6a7a2ac4975463114c3a7650a9f7218',
           'modelSha256':model_sha,'speakerSha256':sha(MODEL/'voices/zf_001.pt'),
           'pronunciationCodeSha256':sha(ROOT/'scripts/voice_pronunciation.py'),
           'speed':1.0,'precision':'float32','sampleRate':24000,
           'pitchChanged':False,'humanReviewed':False,'lexicon':lexicon,
           'encoding':'mp3-q2;gain-max2-peak0.707;slow-atempo0.8;pad120-180ms'}
fingerprint = hashlib.sha256(json.dumps(profile,sort_keys=True,ensure_ascii=False).encode()).hexdigest()
profile['fingerprint'] = fingerprint
manifest_path = OUT.parent/'manifest.json'
manifest = {'version':1,'voiceId':VOICE,'label':'Giọng Mandarin A · bản thử nghiệm',
            'engine':'Kokoro-82M-v1.1-zh / zf_001 (offline CPU FP32)',
            'profileFingerprint':fingerprint,'generatedAt':datetime.now(timezone.utc).isoformat(),
            'entries':{}}
if manifest_path.exists():
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    if manifest.get('profileFingerprint') != fingerprint:
        raise ValueError('Profile changed; keep the previous bank and use a new workspace/voice ID')
WORK.joinpath('profile.json').write_text(json.dumps(profile,ensure_ascii=False,indent=2),encoding='utf-8')
model = pipeline = None
generated = recovered = reused = 0
previous = ROOT/args.reuse_cache if args.reuse_cache else None
previous_manifest = json.loads((previous/'public/audio/manifest.json').read_text(encoding='utf-8')) if previous else None
if previous_manifest and previous_manifest['voiceId'] != VOICE:
    raise ValueError('Cache reuse requires the same speaker/engine voice ID')
report = {'voiceId':VOICE,'profileFingerprint':fingerprint,'humanReviewed':False,'clips':[]}
started = time.monotonic()
with FileLock(str(WORK/'render.lock'),timeout=1):
    for item in targets['targets']:
        identity = hashlib.sha256(f"{fingerprint}|{item['key']}".encode()).hexdigest()[:24]
        record = WORK/f'{identity}.json'
        wav = WORK/f'{identity}.wav'
        entry = manifest['entries'].get(item['key'])
        if entry and all((WORK/'public'/entry[k].lstrip('/')).exists() for k in ('normal','slow')) and record.exists():
            report['clips'].append(json.loads(record.read_text(encoding='utf-8')))
            continue
        if entry and entry['review'] == 'approved':
            raise ValueError('Approved clip missing; restore it from backup')
        if pipeline is None:
            pipeline = KPipeline(lang_code='z',repo_id='hexgrad/Kokoro-82M-v1.1-zh',
                                 model=False,en_callable=lambda text:'')
            install_lexicon(lexicon)
        phones = word_phonemes(pipeline.g2p.frontend,item['text']) if item['text'] in lexicon else pipeline.g2p(item['text'])[0]
        copied = False
        if previous_manifest and item['key'] in previous_manifest['entries']:
            old = previous_manifest['entries'][item['key']]
            old_id = Path(old['normal']).stem
            metadata = json.loads((previous/f'{old_id}.json').read_text(encoding='utf-8'))
            old_profile = json.loads((previous/'profile.json').read_text(encoding='utf-8'))
            same_engine = all(old_profile[k]==profile[k] for k in ('modelSha256','speakerSha256','speed','precision','encoding'))
            if same_engine and metadata['phonemes']==phones:
                shutil.copyfile(previous/f'{old_id}.wav',wav)
                shutil.copyfile(previous/f'{old_id}.json',record)
                for kind,suffix in (('normal',''),('slow','-slow')):
                    shutil.copyfile(previous/'public'/old[kind].lstrip('/'),OUT/f'{identity}{suffix}.mp3')
                copied = True
                reused += 1
        if not wav.exists() or not record.exists():
            if model is None:
                torch.set_num_threads(2)
                torch.manual_seed(20261018)
                model = KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',config=str(MODEL/'config.json'),
                               model=str(MODEL/'kokoro-v1_1-zh.pth')).eval()
                pipeline.model = model
            results = list(pipeline.generate_from_tokens(phones,voice=str(MODEL/'voices/zf_001.pt'),speed=1.0))
            phones = ''.join(r.phonemes for r in results)
            if '❓' in phones or not phones:
                raise ValueError(f"Unsupported pronunciation: {item['text']}")
            wave = np.concatenate([r.audio.numpy() for r in results])
            peak = float(np.max(np.abs(wave)))
            if not np.isfinite(wave).all() or len(wave)<4800 or not 0.01<peak<1:
                raise ValueError(f"Invalid waveform: {item['text']}")
            details = {'text':item['text'],'pinyin':item['pinyin'],'phonemes':phones,
                       'nativeSeconds':len(wave)/24000,'nativePeak':peak,'humanReviewed':False}
            wave = np.concatenate([np.zeros(2880),wave,np.zeros(4320)]).astype('float32')
            temporary = wav.with_suffix('.tmp.wav')
            sf.write(temporary,wave,24000,subtype='PCM_16')
            atomic_replace(temporary,wav)
            record.write_text(json.dumps(details,ensure_ascii=False,indent=2),encoding='utf-8')
            generated += 1
        elif not copied:
            recovered += 1
        wave, rate = sf.read(wav,dtype='float32')
        if rate!=24000 or wave.ndim!=1 or not np.isfinite(wave).all():
            raise ValueError(f'Invalid cache: {wav.name}')
        gain = min(2,0.707/max(float(np.max(np.abs(wave))),1e-9))
        for suffix, filters in (('',f'volume={gain}'),('-slow',f'atempo=0.8,volume={gain}')):
            if copied:
                continue
            target = OUT/f'{identity}{suffix}.mp3'
            temporary = target.with_suffix('.tmp.mp3')
            subprocess.run(['ffmpeg','-v','error','-y','-i',str(wav),'-af',filters,
                            '-c:a','libmp3lame','-q:a','2',str(temporary)],check=True)
            atomic_replace(temporary,target)
        manifest['entries'][item['key']] = {'text':item['text'],'pinyin':item['pinyin'],
            'normal':f'/audio/{VOICE}/{identity}.mp3','slow':f'/audio/{VOICE}/{identity}-slow.mp3',
            'review':'unreviewed'}
        temporary = manifest_path.with_suffix('.tmp.json')
        temporary.write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
        atomic_replace(temporary,manifest_path)
        report['clips'].append(json.loads(record.read_text(encoding='utf-8')))
        print(f"{len(manifest['entries'])}/{len(targets['targets'])}: {item['text']}",flush=True)
    report.update(generated=generated,recovered=recovered,reusedIdenticalPhonemes=reused,entries=len(manifest['entries']),
                  seconds=round(time.monotonic()-started,2),apiCalls=0)
    report_name = 'cache-check.json' if not (generated or recovered or reused) else 'render-report.json'
    WORK.joinpath(report_name).write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps({k:v for k,v in report.items() if k!='clips'}),flush=True)
