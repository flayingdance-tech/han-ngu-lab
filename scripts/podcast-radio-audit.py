"""Independent persisted-WAV checks for fixed music and the selected voice boost."""
import hashlib
import json
from pathlib import Path
import numpy as np
import soundfile as sf

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'.local/podcasts'
catalog=json.loads((WORK/'rendered/catalog.json').read_text(encoding='utf-8'))
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
    if episode['id']=='radio-weekstart-v1':
        source,source_rate=sf.read(WORK/'radio-pilot/pilot-v9-voice.wav',dtype='float32')
        assert source_rate==rate
        diff=float(np.max(np.abs(voice-source*(10**(1.3/20)))))
        assert diff<1e-7,diff
        item['selectedVoiceUnchangedExceptGain']=True
        item['voiceBoostMaxError']=diff
    report['episodes'].append(item)
assert len(report['episodes'])==7
dest=ROOT/'docs/reports/podcast-radio-integrity.json'
dest.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'episodes':len(report['episodes']),'musicChanged':False,'selectedVoiceUnchangedExceptGain':True}),flush=True)
