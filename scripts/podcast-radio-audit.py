"""Independent persisted-WAV checks for fixed music and the selected voice boost."""
import hashlib
import json
from pathlib import Path
import numpy as np
import soundfile as sf

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
catalog=json.loads((WORK/'rendered/catalog.json').read_text(encoding='utf-8'))
definitions={e['id']:e for e in json.loads((ROOT/'content/podcast-radio.json').read_text(encoding='utf-8-sig'))}
config=json.loads((ROOT/'content/podcast-radio-music.json').read_text(encoding='utf-8-sig'))
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
music_file=ROOT/config['localFile']
assert sha(music_file)==config['sha256']
bed,rate=sf.read(music_file,dtype='float32',always_2d=True)
report={'format':'radio','musicPcmSha256':sha(music_file),'musicChanged':False,'voiceGainDb':1.3,'episodes':[],'humanReviewed':False}
for episode in catalog['episodes']:
    assert episode['format']=='radio' and len(episode['segments'])==len(episode['production']['segments'])
    assert all(c['zh']==s['text'] and c['pinyin'] and c['vi'] for c,s in zip(episode['segments'],episode['production']['segments']))
    voice,sr=sf.read(WORK/f"{episode['id']}-voice.wav",dtype='float32')
    mix,mr=sf.read(WORK/f"{episode['id']}-mix.wav",dtype='float32',always_2d=True)
    assert sr==mr==rate==24000 and len(voice)==len(bed) and mix.shape==bed.shape
    error=float(np.max(np.abs(mix-voice[:,None]-bed)))
    assert error<1e-7,(episode['id'],error)
    assert episode['production']['musicPcmSha256']==sha(music_file)
    item={'id':episode['id'],'musicResidualMaxError':error,'duration':len(voice)/rate,'audio':[]}
    for kind,asset in episode['assets'].items():
        path=WORK/'rendered'/Path(asset['url']).name
        assert sha(path)==asset['sha256']
        item['audio'].append({'kind':kind,'sha256':sha(path),'lufs':asset['lufs'],'truePeakDb':asset['truePeakDb']})
    if definitions[episode['id']].get('sourceVoice'):
        source_path=ROOT/definitions[episode['id']]['sourceVoice']
        assert sha(source_path)==episode['production']['sourceVoiceSha256']
        source,source_rate=sf.read(source_path,dtype='float32')
        assert source_rate==rate
        diff=float(np.max(np.abs(voice-source*(10**(1.3/20)))))
        assert diff<1e-7,diff
        item['preservedBaseVoiceMatchesGain']=True
        item['voiceBoostMaxError']=diff
    if episode['production'].get('brandUpdate'):
        before=WORK/'brand-lab/before'
        previous=next(e for e in json.loads((before/'catalog.json').read_text(encoding='utf-8'))['episodes'] if e['id']==episode['id'])
        old,sr=sf.read(before/f"{episode['id']}-voice.wav",dtype='float32')
        assert sr==rate
        assert catalog['profile']['modelSha256']==json.loads((before/'catalog.json').read_text(encoding='utf-8'))['profile']['modelSha256']
        assert catalog['profile']['speakerSha256']==json.loads((before/'catalog.json').read_text(encoding='utf-8'))['profile']['speakerSha256']
        preserved=0
        replaced=0
        for a,b in zip(previous['production']['segments'],episode['production']['segments']):
            assert a['text'].replace('汉语时光','汉语实验室')==b['text'] and a['speed']==b['speed']
            if a['text']==b['text']:
                left=old[round(a['start']*rate):round(a['end']*rate)]
                right=voice[round(b['start']*rate):round(b['end']*rate)]
                assert np.array_equal(left,right),'Unrelated narration changed'
                preserved+=1
            else:
                replaced+=1
        assert replaced==2
        item.update(replacedBrandedParagraphs=replaced,unchangedNarrationPcmSegments=preserved,modelAndSpeakerUnchanged=True)
    report['episodes'].append(item)
assert len(report['episodes'])==7
dest=ROOT/'docs/reports/podcast-radio-integrity.json'
dest.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'episodes':len(report['episodes']),'musicChanged':False,'preservedBaseVoiceMatchesGain':True}),flush=True)
