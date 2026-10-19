"""Decode actual draft MP3s; ASR is diagnostic, never a human listening review."""
import json
import subprocess
from pathlib import Path
import numpy as np
from faster_whisper import WhisperModel

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.local/podcasts/radio-pilot'
report=json.loads((OUT/'report.json').read_text(encoding='utf-8'))
model=WhisperModel(str(ROOT/'.local/audio-preview/asr-model'),device='cpu',compute_type='int8',cpu_threads=2)
result={'humanReviewed':False,'purpose':'Independent ASR triage of final mix; does not judge music or emotion','recognized':[]}
asset=OUT/'pilot-mix.mp3'
raw=subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(asset),'-af','pan=mono|c0=0.5*c0+0.5*c1','-ar','16000','-f','f32le','pipe:1'],capture_output=True,check=True).stdout
wave=np.frombuffer(raw,dtype='<f4').copy()
assert np.isfinite(wave).all() and np.max(np.abs(wave))<.99
assert 60<=len(wave)/16000<=120
segments,_=model.transcribe(wave,language='zh',beam_size=5,initial_prompt='以下是普通话广播。')
for segment in segments:
    item={'start':segment.start,'end':segment.end,'text':segment.text}
    result['recognized'].append(item)
    print(segment.text,flush=True)
result['expected']=''.join(s['text'] for s in report['segments'])
(OUT/'asr-triage.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
