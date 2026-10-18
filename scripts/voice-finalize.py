"""Wait for the local renderer, then verify, back up and build; never deploys."""
import argparse
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
import psutil
from filelock import FileLock
import atexit

root = Path(__file__).resolve().parents[1]
finalize_lock = FileLock(str(root/'.local/voice/finalize.lock'), timeout=0)
finalize_lock.acquire()
atexit.register(finalize_lock.release)
parser = argparse.ArgumentParser()
parser.add_argument('--wait-pid', type=int)
args = parser.parse_args()
if args.wait_pid:
    try:
        process = psutil.Process(args.wait_pid)
        if not any(Path(part).name == 'voice-render.py' for part in process.cmdline()):
            raise RuntimeError('Refusing to wait on an unrelated process')
        count = -1
        while True:
            manifest_path = root/'public/audio/manifest.json'
            if manifest_path.exists():
                current = len(json.loads(manifest_path.read_text(encoding='utf-8'))['entries'])
                if current != count:
                    count = current
                    print(f'Render progress: {count} clips', flush=True)
            try:
                status = process.wait(timeout=20)
                if status not in (0, None):
                    raise RuntimeError(f'Renderer exited with {status}; verification stopped')
                break
            except psutil.TimeoutExpired:
                pass
    except psutil.NoSuchProcess:
        pass  # Coverage audit below still has to pass; no assumption of success.


def run(command):
    print('STAGE: '+' '.join(command), flush=True)
    subprocess.run(command, cwd=root, check=True)


run(['node', 'node_modules/tsx/dist/cli.mjs', 'scripts/audio-audit.ts'])
run([sys.executable, '-X', 'utf8', 'scripts/voice-render.py', '--allow-preview', '--int8', '--batch-size', '8'])
run([sys.executable, '-X', 'utf8', 'scripts/voice-qa.py', '--asr-samples', '8'])

# Archive only unused generated MP3s, keeping earlier prototypes recoverable.
manifest = json.loads((root/'public/audio/manifest.json').read_text(encoding='utf-8'))
used = {Path(item[kind]).name for item in manifest['entries'].values() for kind in ('normal', 'slow')}
folder = (root/'public/audio/hnl-original-v1').resolve()
archive = (root/'.local/voice/previous-renders'/datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')).resolve()
if not folder.is_relative_to(root.resolve()) or not archive.is_relative_to(root.resolve()):
    raise ValueError('Archive paths must stay within the project workspace')
archived = []
for file in folder.iterdir():
    if file.name in used or not re.fullmatch(r'[a-f0-9]{24}(?:-slow)?\.mp3', file.name):
        continue
    source, destination = file.resolve(), archive/file.name
    if source.parent != folder or destination.resolve().parent != archive:
        raise ValueError('Unsafe archive path')
    archive.mkdir(parents=True, exist_ok=True)
    source.rename(destination)
    archived.append(file.name)
print(f'Archived {len(archived)} unused prototypes privately', flush=True)
if list((root/'public/audio').rglob('*.tmp.*')):
    raise RuntimeError('Temporary audio files remain; do not export a partial write')
run(['node', 'node_modules/tsx/dist/cli.mjs', 'scripts/audio-backup.ts'])
run(['node', 'node_modules/next/dist/bin/next', 'build', '--webpack'])

# The static export must include every referenced audio file, and no reference/model.
if (root/'out/audio/manifest.json').read_bytes() != (root/'public/audio/manifest.json').read_bytes():
    raise RuntimeError('Exported audio manifest differs from the checked source')
for item in manifest['entries'].values():
    for kind in ('normal', 'slow'):
        relative = item[kind].lstrip('/')
        public_file, exported = root/'public'/relative, root/'out'/relative
        if not exported.is_file() or exported.read_bytes() != public_file.read_bytes():
            raise RuntimeError(f'Static export is incomplete: {relative}')
if any(file.name in ('reference.wav', 'reference.json', 'master-vocals.wav') or file.suffix in ('.pt', '.safetensors') for file in (root/'out').rglob('*')):
    raise RuntimeError('Private model/reference leaked into static export')
report = {'entries':len(manifest['entries']), 'files':len(used), 'archivedPrototypes':len(archived),
          'backupRoundtrip':True,'build':True,'exportVerified':True,'deployed':False,'humanReviewed':False,
          'finishedAt':datetime.now(timezone.utc).isoformat()}
(root/'.local/voice/finalize-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report,indent=2),flush=True)
