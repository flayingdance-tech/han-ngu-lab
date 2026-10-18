"""Prepare a short, unpitched reference from the owner's selected separated recording."""
import hashlib
import argparse
import json
import subprocess
from pathlib import Path
import soundfile as sf
from faster_whisper import WhisperModel

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--max-seconds', type=float, default=4.2)
args = parser.parse_args()
workspace = root / '.local' / 'voice'
workspace.mkdir(parents=True, exist_ok=True)
source = root / '.local' / 'audio-preview' / 'vocals.wav'
model = WhisperModel(str(root / '.local' / 'audio-preview' / 'asr-model'),
                     device='cpu', compute_type='int8', cpu_threads=4)
asr_input = workspace / 'asr-input.wav'
subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(source),
                '-ar', '16000', '-ac', '1', str(asr_input)], check=True)
samples, _ = sf.read(asr_input, dtype='float32')
segments, info = model.transcribe(samples, beam_size=5, word_timestamps=True)
segments = list(segments)
transcript = {'language': info.language, 'probability': info.language_probability,
              'segments': [{'start': s.start, 'end': s.end, 'text': s.text,
                            'words': [{'start': w.start, 'end': w.end, 'word': w.word} for w in (s.words or [])]}
                           for s in segments], 'humanReviewed': False}
(workspace / 'asr-reference.json').write_text(json.dumps(transcript, ensure_ascii=False, indent=2), encoding='utf-8')
words = [w for segment in segments for w in (segment.words or []) if w.end <= args.max_seconds]
while words and words[-1].word[-1] not in ',，。.!！?？;；':
    words.pop()
if not words:
    raise ValueError('No usable reference words; inspect ASR result before rendering')
start, end = max(0, words[0].start - 0.12), words[-1].end + 0.15
target = workspace / 'reference.wav'
subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', str(start), '-i', str(source),
                '-t', str(end-start), '-ac', '1', '-ar', '24000', '-c:a', 'pcm_s16le', str(target)], check=True)
profile = {'voiceId': 'hnl-original-v1', 'text': ''.join(w.word for w in words).strip(),
           'language': info.language, 'start': start, 'end': end,
           'sourceSha256': hashlib.sha256(source.read_bytes()).hexdigest(),
           'sha256': hashlib.sha256(target.read_bytes()).hexdigest(),
           'pitchChanged': False, 'humanReviewed': False, 'permission': 'owner-confirmed'}
(workspace / 'reference.json').write_text(json.dumps(profile, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(profile, ensure_ascii=False, indent=2), flush=True)
