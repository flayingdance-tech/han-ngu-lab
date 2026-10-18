"""Decode every delivered clip; optional ASR flags for reviewer attention, never approval."""
import argparse
import json
from pathlib import Path
import numpy as np
import soundfile as sf

parser = argparse.ArgumentParser()
parser.add_argument('--asr-samples', type=int, default=0)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root/'public/audio/manifest.json').read_text(encoding='utf-8'))
checks, issues = [], []
for key, entry in manifest['entries'].items():
    durations = []
    for kind in ('normal', 'slow'):
        path = root/'public'/entry[kind].lstrip('/')
        wave, rate = sf.read(path, dtype='float32')
        duration, peak = len(wave)/rate, float(np.max(np.abs(wave)))
        if rate != 24000 or wave.ndim != 1 or not np.isfinite(wave).all() or duration < .2 or not 1e-5 < peak < 1:
            issues.append({'key': key, 'kind': kind, 'problem': 'invalid/empty/clipped audio'})
        durations.append(duration)
        checks.append({'path': entry[kind], 'seconds': duration, 'rate': rate, 'peak': peak})
    if not 1.15 <= durations[1]/durations[0] <= 1.35:
        issues.append({'key': key, 'problem': 'unexpected slow/normal duration ratio'})
report = {'voiceId':manifest['voiceId'], 'entries':len(manifest['entries']), 'files':checks,
          'issues':issues, 'humanReviewed':False, 'asrIsToneAssessment':False}
if args.asr_samples:
    from faster_whisper import WhisperModel
    from scipy.signal import resample_poly
    model = WhisperModel(str(root/'.local/audio-preview/asr-model'), device='cpu', compute_type='int8', cpu_threads=2)
    samples = list(manifest['entries'].values())
    # Include a range of words and sentences. This is triage, not pronunciation grading.
    samples = sorted(samples,key=lambda x:len(x['text']))
    indices = sorted(set(round(i*(len(samples)-1)/max(1,args.asr_samples-1)) for i in range(args.asr_samples)))
    report['asrSamples'] = []
    for index in indices:
        item = samples[index]
        wave, _ = sf.read(root/'public'/item['normal'].lstrip('/'),dtype='float32')
        segments, _ = model.transcribe(resample_poly(wave,2,3).astype('float32'),language='zh',beam_size=5,
                                       initial_prompt='以下是普通话简体中文学习内容。')
        text = ''.join(s.text for s in segments).strip()
        report['asrSamples'].append({'expected':item['text'],'pinyin':item['pinyin'],'recognized':text,'review':'pending'})
path = root/'.local/voice/signal-qa.json'
path.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'entries':report['entries'],'files':len(checks),'issues':issues,'asrSamples':report.get('asrSamples',[])},ensure_ascii=False,indent=2))
if issues:
    raise SystemExit(1)
