"""Move unreferenced MP3s into a private archive; never delete audio."""
import hashlib
import json
import shutil
from datetime import datetime, timezone
from pathlib import Path

root = Path(__file__).resolve().parents[1]
public = (root/'public/audio').resolve()
archive = (root/'.local/voice-retired'/datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')).resolve()
manifest = json.loads((public/'manifest.json').read_text(encoding='utf-8'))
targets = json.loads((root/'.local/voice/targets.json').read_text(encoding='utf-8'))
if manifest.get('disabledReason') or set(manifest['entries'])!={item['key'] for item in targets['targets']}:
    raise ValueError('Only retire old assets after the complete replacement is active')
referenced = {(root/'public'/item[kind].lstrip('/')).resolve()
              for item in manifest['entries'].values() for kind in ('normal','slow')}
if not all(p.is_relative_to(public) and p.is_file() for p in referenced):
    raise ValueError('Invalid/missing active audio')
inventory = []
for source in public.rglob('*.mp3'):
    source = source.resolve()
    if source in referenced:
        continue
    target = (archive/source.relative_to(public)).resolve()
    if not source.is_relative_to(public) or not target.is_relative_to(archive) or not archive.is_relative_to(root/'.local'):
        raise ValueError('Archive path outside intended workspace')
    if target.exists():
        raise ValueError('Refusing to overwrite an archive')
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    target.parent.mkdir(parents=True,exist_ok=True)
    shutil.move(str(source),str(target))
    if hashlib.sha256(target.read_bytes()).hexdigest()!=digest:
        raise ValueError('Archive hash mismatch')
    inventory.append({'file':str(target.relative_to(archive)),'sha256':digest})
archive.mkdir(parents=True,exist_ok=True)
(archive/'inventory.json').write_text(json.dumps(inventory,indent=2),encoding='utf-8')
print(json.dumps({'archive':str(archive),'moved':len(inventory),'activeFiles':len(referenced)}))
