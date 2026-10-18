"""ASR triage of audition WAVs. This is not listening or pronunciation approval."""
import json
import argparse
from pathlib import Path
import numpy as np
import soundfile as sf
from scipy.signal import resample_poly
from faster_whisper import WhisperModel

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--isolated', action='store_true')
args = parser.parse_args()
folder = root/'.local/voice-candidates/kokoro-zh'
if args.isolated:
    folder = folder/'isolated'
report = json.loads((folder/'report.json').read_text(encoding='utf-8'))
model = WhisperModel(str(root/'.local/audio-preview/asr-model'), device='cpu',
                     compute_type='int8', cpu_threads=2)
for item in report['samples']:
    wave, rate = sf.read(item['path'],dtype='float32')
    assert rate == 24000 and wave.ndim == 1 and np.isfinite(wave).all()
    segments, _ = model.transcribe(resample_poly(wave,2,3).astype('float32'), language='zh',
                                   beam_size=5, condition_on_previous_text=False,
                                   initial_prompt='以下是普通话简体中文学习内容。')
    item['recognized'] = ''.join(s.text for s in segments).strip()
    item['peak'] = float(np.max(np.abs(wave)))
    print(json.dumps({'voice':item['voice'],'expected':item['text'],
                      'recognized':item['recognized']},ensure_ascii=False),flush=True)
    (folder/'asr-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
