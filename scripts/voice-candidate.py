"""Generate isolated Mandarin audition files; never changes the website manifest."""
import json
import argparse
import os
import subprocess
import time
from pathlib import Path

os.environ['HF_HUB_OFFLINE'] = '1'
os.environ['HF_HUB_DISABLE_TELEMETRY'] = '1'
os.environ['TRANSFORMERS_OFFLINE'] = '1'
import numpy as np
import soundfile as sf
import torch
from kokoro import KModel, KPipeline

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--isolated', action='store_true', help='Test separate short-word generation')
args = parser.parse_args()
MODEL = ROOT / '.local/kokoro-model'
OUT = ROOT / '.local/voice-candidates/kokoro-zh'
if args.isolated:
    OUT = OUT / 'isolated'
OUT.mkdir(parents=True, exist_ok=True)
torch.set_num_threads(2)
torch.manual_seed(20261018)
texts = [
    '你好！欢迎来到汉语实验室。今天我们一起练习中文。',
    '谢谢你的帮助。姐姐正在准备明天的会议。请认真听，然后跟我读。',
    '今天天气怎么样？虽然有点儿冷，但是很舒服。',
    '我在银行工作。这个办法行不行？我还要还书。',
    '妈妈，麻烦，马路，骂人。',
    '你好。谢谢。姐姐。准备。认真。',
]
model = KModel(repo_id='hexgrad/Kokoro-82M-v1.1-zh',
               config=str(MODEL/'config.json'), model=str(MODEL/'kokoro-v1_1-zh.pth')).eval()
pipeline = KPipeline(lang_code='z', repo_id='hexgrad/Kokoro-82M-v1.1-zh', model=model,
                     en_callable=lambda text: '')
# The default frontend misreads 还书 as hai2 shu1. Keep the written text and
# supply a phrase-level pronunciation, without globally changing 还 (hai2/huan2).
import jieba
from pypinyin import load_phrases_dict
jieba.add_word('还书', freq=100000, tag='v')
load_phrases_dict({'还书': [['huán'], ['shū']]})
polyphones, _ = pipeline.g2p(texts[3])
if 'ㄏ万2ㄕㄨ1' not in polyphones:
    raise ValueError(f'Pronunciation override for 还书 failed: {polyphones}')
if args.isolated:
    texts = ['你', '过', '谢谢', '姐姐', '准备', '认真']
report = {'engine':'Kokoro-82M-v1.1-zh', 'revision':'01e7505bd6a7a2ac4975463114c3a7650a9f7218',
          'humanReviewed':False, 'speed':1.0, 'pitchChanged':False,
          'pronunciationOverrides':{'还书':'huán shū'}, 'samples':[]}
for voice in ['zf_001', 'zf_002']:
    combined = []
    for index, text in enumerate(texts):
        path = OUT/f'{voice}-{index+1:02}.wav'
        started = time.monotonic()
        results = list(pipeline(text, voice=str(MODEL/'voices'/f'{voice}.pt'), speed=1.0))
        wave = np.concatenate([r.audio.numpy() for r in results])
        if not np.isfinite(wave).all() or len(wave)<4800 or np.max(np.abs(wave)) >= 1:
            raise ValueError(f'Invalid waveform: {voice} / {text}')
        sf.write(path, wave, 24000, subtype='PCM_16')
        combined.extend([wave,np.zeros(12000,dtype=np.float32)])
        item = {'voice':voice,'text':text,'path':str(path),'seconds':len(wave)/24000,
                'renderSeconds':round(time.monotonic()-started,2),
                'phonemes':[r.phonemes for r in results]}
        report['samples'].append(item)
        (OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
        print(json.dumps(item,ensure_ascii=False),flush=True)
    sf.write(OUT/f'{voice}-audition.wav',np.concatenate(combined),24000,subtype='PCM_16')
    subprocess.run(['ffmpeg','-v','error','-y','-i',str(OUT/f'{voice}-audition.wav'),
                    '-c:a','libmp3lame','-q:a','2',str(OUT/f'{voice}-audition.mp3')],check=True)
