"""Separate narration triage from known ASR inventions over instrumental outros."""
import json
import re
from difflib import SequenceMatcher
from pathlib import Path
import numpy as np
import soundfile as sf

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
catalog=json.loads((WORK/'rendered/catalog.json').read_text(encoding='utf-8'))
raw=json.loads((WORK/'radio-asr-triage.json').read_text(encoding='utf-8'))
assert len(raw['episodes'])==len(catalog['episodes'])==7,'ASR batch is incomplete'
normalize=lambda text:''.join(re.findall(r'[\u4e00-\u9fff]',text))
report={'humanReviewed':False,'purpose':'Triage only; character coverage is not tone or emotional quality approval','episodes':[]}
for episode in catalog['episodes']:
    recognition=next(e for e in raw['episodes'] if e['id']==episode['id'])
    script=episode['production']['segments']
    end=script[-1]['end']
    wave,rate=sf.read(WORK/f"{episode['id']}-voice.wav",dtype='float32')
    tail=wave[min(len(wave),int((end+1)*rate)):]
    tail_peak=float(np.max(np.abs(tail))) if len(tail) else 0.
    assert tail_peak<1e-5,'Unexpected generated speech in the outro'
    within=[s for s in recognition['recognized'] if s['start']<end+.5]
    outside=[s for s in recognition['recognized'] if s['start']>=end+.5]
    paragraphs=[normalize(s['text']) for s in script]
    expected=''.join(paragraphs)
    actual=normalize(''.join(s['text'] for s in within))
    matcher=SequenceMatcher(None,expected,actual,autojunk=False)
    blocks=matcher.get_matching_blocks()
    coverage=[]
    offset=0
    for paragraph in paragraphs:
        stop=offset+len(paragraph)
        matched=sum(max(0,min(stop,b.a+b.size)-max(offset,b.a)) for b in blocks)
        coverage.append(matched/max(1,len(paragraph)))
        offset=stop
    report['episodes'].append({'id':episode['id'],'narrationEnd':end,'voiceOutroPeak':tail_peak,'narrationCharacterSimilarity':matcher.ratio(),'paragraphCharacterCoverage':coverage,'requiresMissingContentCheck':any(c<.65 for c in coverage),'musicOnlyAsrText':outside,'outOfBoundsAsrTiming':any(s['end']>episode['duration']+.2 for s in recognition['recognized'])})
dest=WORK/'radio-asr-reviewed.json'
dest.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
for item in report['episodes']:
    print(f"{item['id']}: similarity={item['narrationCharacterSimilarity']:.3f}, min paragraph={min(item['paragraphCharacterCoverage']):.3f}, music-only ASR={len(item['musicOnlyAsrText'])}, missing-content flag={item['requiresMissingContentCheck']}",flush=True)
assert not any(item['requiresMissingContentCheck'] for item in report['episodes']),'Inspect flagged narration before completion'
