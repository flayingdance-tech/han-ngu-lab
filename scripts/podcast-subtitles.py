"""Restore tri-language captions without synthesizing or touching any media file."""
import argparse
import hashlib
import json
import re
from datetime import datetime,timezone
from pathlib import Path
from filelock import FileLock
from voice_io import atomic_replace
from podcast_subtitles_core import timed_captions

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
read=lambda path:json.loads(path.read_text(encoding='utf-8-sig'))
sha=lambda path:hashlib.sha256(path.read_bytes()).hexdigest()
parser=argparse.ArgumentParser()
parser.add_argument('--refresh-pinyin',action='store_true')
parser.add_argument('--no-apply',action='store_true')
args=parser.parse_args()
source=ROOT/'content/podcast-subtitles.json'
if args.refresh_pinyin:
    from pypinyin import lazy_pinyin,Style,load_phrases_dict
    load_phrases_dict({
        '学得':[['xué'],['de']], '睡得':[['shuì'],['de']], '活得':[['huó'],['de']],
        '觉得':[['jué'],['de']], '记得':[['jì'],['de']], '看得见':[['kàn'],['de'],['jiàn']],
        '薄薄':[['báo'],['báo']], '铺了':[['pū'],['le']], '还好吗':[['hái'],['hǎo'],['ma']],
        '水滴石穿':[['shuǐ'],['dī'],['shí'],['chuān']],
        '静夜思':[['jìng'],['yè'],['sī']], '屋檐':[['wū'],['yán']],
        '轻轻地':[['qīng'],['qīng'],['de']], '慢慢地':[['màn'],['màn'],['de']],
        '一滴一滴地':[['yī'],['dī'],['yī'],['dī'],['de']],
        '一点一点地':[['yī'],['diǎn'],['yī'],['diǎn'],['de']],
        '自然地':[['zì'],['rán'],['de']], '懒懒地':[['lǎn'],['lǎn'],['de']],
        '认真地':[['rèn'],['zhēn'],['de']],
    })
    translations=read(ROOT/'content/podcast-subtitles.vi.json')
    captions={'version':1,'review':'unreviewed','pinyinConvention':'Dictionary tones, with neutral grammatical particles; spoken tone sandhi may differ','episodes':{}}
    for episode in read(ROOT/'content/podcast-radio.json'):
        if episode.get('sourceReport'):
            texts=[s['text'] for s in read(ROOT/episode['sourceReport'])['segments']]
        else:
            texts=episode['segments']
        translation=translations[episode['id']]
        text_hash=hashlib.sha256(''.join(texts).encode()).hexdigest()
        assert translation['sourceTextSha256']==text_hash,'Vietnamese text needs review after script changes'
        assert len(texts)==len(translation['vi'])
        rows=[]
        for text,vi in zip(texts,translation['vi']):
            pinyin=' '.join(lazy_pinyin(text,style=Style.TONE,errors=lambda chars:list(chars)))
            pinyin=re.sub(r'\s+([，。！？、；：])',r'\1',pinyin)
            rows.append({'zh':text,'pinyin':pinyin,'vi':vi})
        captions['episodes'][episode['id']]={'sourceTextSha256':text_hash,'segments':rows}
    source.write_text(json.dumps(captions,ensure_ascii=False,indent=2),encoding='utf-8')
if args.no_apply:
    print('Authored subtitle source ready; catalog unchanged',flush=True)
    raise SystemExit(0)
with FileLock(str(WORK/'render.lock'),timeout=1):
    catalog_path=WORK/'rendered/catalog.json'
    catalog=read(catalog_path)
    subtitles=read(source)['episodes']
    before={a['url']:sha(WORK/'rendered'/Path(a['url']).name) for e in catalog['episodes'] for a in e['assets'].values()}
    count=0
    for episode in catalog['episodes']:
        entry=subtitles[episode['id']]
        assert entry['sourceTextSha256']==episode['production']['textSha256']
        episode['segments']=timed_captions(entry['segments'],episode['production']['segments'],episode['duration'])
        count+=len(episode['segments'])
    backup=WORK/f"catalog-before-subtitles-{datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')}.json"
    backup.write_bytes(catalog_path.read_bytes())
    catalog['generatedAt']=datetime.now(timezone.utc).isoformat()
    temp=catalog_path.with_suffix('.tmp.json')
    temp.write_text(json.dumps(catalog,ensure_ascii=False,indent=2),encoding='utf-8')
    atomic_replace(temp,catalog_path)
    after={a['url']:sha(WORK/'rendered'/Path(a['url']).name) for e in catalog['episodes'] for a in e['assets'].values()}
    assert before==after,'Media changed during subtitle publication'
    report={'episodes':len(catalog['episodes']),'subtitleSegments':count,'audioUnchanged':True,'assetSha256':after,'previousCatalog':str(backup),'humanReviewed':False}
    (WORK/'subtitles-update.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps({'episodes':len(catalog['episodes']),'subtitleSegments':count,'audioUnchanged':True}),flush=True)
