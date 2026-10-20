"""Independent ASR triage of encoded podcasts, never human pronunciation approval."""
import json
import hashlib
import subprocess
from pathlib import Path
import numpy as np
from faster_whisper import WhisperModel

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
catalog=json.loads((WORK/'rendered/catalog.json').read_text(encoding='utf-8'))
model=WhisperModel(str(ROOT/'.local/audio-preview/asr-model'),device='cpu',compute_type='int8',cpu_threads=2)
report={'humanReviewed':False,'purpose':'ASR triage only; homophones and tone errors need human review','episodes':[]}
for episode in catalog['episodes']:
    asset=WORK/'rendered'/Path(episode['assets']['mix']['url']).name
    raw=subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(asset),'-af','pan=mono|c0=0.5*c0+0.5*c1','-ar','16000','-f','f32le','pipe:1'],check=True,capture_output=True).stdout
    segments,_=model.transcribe(np.frombuffer(raw,dtype='<f4').copy(),language='zh',beam_size=5,initial_prompt='以下是普通话简体中文学习内容。')
    actual=[{'start':s.start,'end':s.end,'text':s.text} for s in segments]
    expected=' '.join(s['text'] for s in episode['production']['segments']) if episode.get('format')=='radio' else ' '.join(s['zh'] for s in episode['segments'])
    report['episodes'].append({'id':episode['id'],'assetSha256':hashlib.sha256(asset.read_bytes()).hexdigest(),'expected':expected,'recognized':actual})
    (WORK/'radio-asr-triage.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(episode['id'],''.join(s['text'] for s in actual),flush=True)
