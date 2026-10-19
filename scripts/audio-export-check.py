"""Verify exported audio bytes and exclude private voice/runtime artifacts."""
import hashlib
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
public, exported = root/'public', root/'out'
manifest = json.loads((public/'audio/manifest.json').read_text(encoding='utf-8'))
assert manifest == json.loads((exported/'audio/manifest.json').read_text(encoding='utf-8'))
assert not manifest.get('disabledReason')
paths = [entry[kind].lstrip('/') for entry in manifest['entries'].values() for kind in ('normal','slow')]
for path in paths:
    assert hashlib.sha256((public/path).read_bytes()).digest() == hashlib.sha256((exported/path).read_bytes()).digest(), path
files = list((exported/'audio').rglob('*.mp3'))
targets = json.loads((root/'.local/voice/targets.json').read_text(encoding='utf-8'))
assert set(manifest['entries'])=={item['key'] for item in targets['targets']}
assert len(files)==len(paths)==2*len(manifest['entries'])
# Public design assets such as images/reference-roadmap.webp are intentional.
private_names = {'reference.json','profile.json','reference.wav','master-vocals.wav'}
leaks = [str(p.relative_to(exported)) for p in exported.rglob('*') if p.is_file() and
         (p.suffix in {'.wav','.pt','.pth','.safetensors','.sqlite'} or
          p.name in private_names or p.name.startswith(('.env','prompt-')))]
assert not leaks, leaks
report = {'voiceId':manifest['voiceId'],'entries':len(manifest['entries']),
          'files':len(files),'sha256Match':True,'privateLeaks':leaks,
          'humanReviewed':False,'deployed':False}
(root/'.local/voice-kokoro/export-check.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report))
