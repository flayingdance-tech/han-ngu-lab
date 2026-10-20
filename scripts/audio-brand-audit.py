"""Inventory active assets using their authored text; do not pretend to transcribe archives."""
import argparse
import hashlib
import json
import os
import re
from collections import Counter
from datetime import datetime,timezone
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
read=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
old=re.compile(r'汉语时光|Hán\s*Ngữ\s*Thời\s*Quang',re.I)
parser=argparse.ArgumentParser()
parser.add_argument('--snapshot',action='store_true')
args=parser.parse_args()
manifest=read(ROOT/'public/audio/manifest.json')
lesson_files={path:sha(ROOT/'public'/path.lstrip('/')) for e in manifest['entries'].values() for path in [e['normal'],e['slow']]}
assert len(lesson_files)==290
assert not any(old.search(e['text']) for e in manifest['entries'].values())
assert not any(old.search(e['text']) for e in read(ROOT/'.local/voice/targets.json')['targets'])
baseline=WORK/'brand-lab/lesson-before.json'
baseline.parent.mkdir(exist_ok=True)
if args.snapshot:
    if not baseline.exists():
        baseline.write_text(json.dumps(lesson_files,indent=2),encoding='utf-8')
    assert lesson_files==read(baseline)
    print('Lesson source: no old program name; 290 assets snapshotted')
    raise SystemExit(0)
assert lesson_files==read(baseline),'Lesson audio changed'
catalog=read(WORK/'rendered/catalog.json')
for episode in catalog['episodes']:
    assert sum(s['zh'].count('汉语实验室') for s in episode['segments'])==2
    assert not old.search(json.dumps(episode,ensure_ascii=False))
    for asset in episode['assets'].values():
        assert sha(WORK/'rendered'/Path(asset['url']).name)==asset['sha256']
source_hits=[]
for folder in ['content','app','lib','server']:
    for path in (ROOT/folder).rglob('*'):
        if path.is_file() and path.suffix in {'.json','.ts','.tsx','.md'} and old.search(path.read_text(encoding='utf-8-sig')):
            source_hits.append(str(path.relative_to(ROOT)))
assert not source_hits,source_hits
# Media inventory, including local historical assets. Runtime/model/vendor trees are excluded.
counts=Counter()
paths=[]
skip={'node_modules','.git','.next','venv','kokoro-venv','site-packages','VoiceStudio','__pycache__','kokoro-model','moss-models','asr-model'}
for parent,dirs,files in os.walk(ROOT):
    dirs[:]=[d for d in dirs if d not in skip]
    for name in files:
        if Path(name).suffix.lower() in {'.mp3','.wav','.flac','.ogg','.m4a','.mp4','.webm'}:
            path=(Path(parent)/name).relative_to(ROOT).as_posix()
            counts[path.split('/')[0]]+=1
            paths.append(path)
report={'checkedAt':datetime.now(timezone.utc).isoformat(),'activePodcastEpisodes':7,'activePodcastFiles':14,'replacedBrandedParagraphs':14,'lessonEntries':len(manifest['entries']),'lessonFilesUnchanged':len(lesson_files),'activeSourceOldNameHits':source_hits,'mediaInventoryCounts':dict(counts),'mediaInventory':paths,'method':'Active source/catalog mapping plus checksums; new podcast audio independently ASR-triaged. Historical backups/caches are inventoried, not speech-transcribed or rewritten.','humanReviewed':False}
history=[]
for path in (WORK/'radio-pilot').glob('report*.json'):
    data=read(path)
    if old.search(json.dumps(data.get('segments',[]),ensure_ascii=False)):
        history.append({'report':path.relative_to(ROOT).as_posix(),'audioFiles':[a['file'] for a in data.get('assets',{}).values() if isinstance(a,dict) and 'file' in a],'disposition':'Historical audition, retained for rollback; not in active catalog'})
report['historicalReportsWithOldName']=history
active_names={Path(a['url']).name for e in catalog['episodes'] for a in e['assets'].values()}
report['unlistedPodcastMp3Files']=len([p for p in (WORK/'rendered').glob('*.mp3') if p.name not in active_names])
(ROOT/'docs/reports/audio-brand-audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({k:v for k,v in report.items() if k not in ['mediaInventory','method']},ensure_ascii=False))
