import test from 'node:test';
import assert from 'node:assert/strict';
import { audioKey, audioManifestSchema } from '../lib/audio-catalog';

test('audio identity retains tone and reading distinctions while normalizing Unicode', () => {
  assert.equal(audioKey(' 你好 ', 'ni\u030c ha\u030co'), audioKey('你好','nǐ hǎo'));
  assert.notEqual(audioKey('行','xíng'), audioKey('行','háng'));
  assert.notEqual(audioKey('吗','ma'), audioKey('吗','mǎ'));
});

test('manifest refuses external URLs, path traversal, another voice and invented review status', () => {
  const base = { version:1, voiceId:'hnl-original-v1', label:'Hán Ngữ Lab', engine:'VoiceStudio', generatedAt:'2026-10-18', entries:{
    [audioKey('你好','nǐ hǎo')]:{text:'你好',pinyin:'nǐ hǎo',normal:'/audio/hnl-original-v1/0123456789abcdef01234567.mp3',slow:'/audio/hnl-original-v1/0123456789abcdef01234567-slow.mp3',review:'unreviewed'},
  }};
  assert.equal(audioManifestSchema.safeParse(base).success,true);
  for(const path of ['https://example.com/voice.mp3','/audio/../secret.mp3','//example.com/voice.mp3']) {
    const invalid=structuredClone(base); Object.values(invalid.entries)[0].normal=path;
    assert.equal(audioManifestSchema.safeParse(invalid).success,false);
  }
  assert.equal(audioManifestSchema.safeParse({...base,voiceId:'another-voice'}).success,false);
  const invalid=structuredClone(base); Object.values(invalid.entries)[0].review='AI-approved';
  assert.equal(audioManifestSchema.safeParse(invalid).success,false);
});

test('playback cancels stale loads, uses one voice, handles media errors and blocks unreviewed production audio', async () => {
  const originalFetch=globalThis.fetch, originalAudio=globalThis.Audio;
  let resolveManifest!:(r:Response)=>void;
  let played=0;
  const media:FakeAudio[]=[];
  class FakeAudio extends EventTarget {
    preload=''; paused=false;
    constructor(public src:string){super();media.push(this);}
    play(){played++;return Promise.resolve();}
    pause(){this.paused=true;}
    removeAttribute(){this.src='';}
    load(){}
  }
  globalThis.Audio=FakeAudio as unknown as typeof Audio;
  globalThis.fetch=()=>new Promise(resolve=>{resolveManifest=resolve;});
  const {speak,stopSpeech,speechCancelled}=await import('../lib/audio');
  const item={text:'你好',pinyin:'nǐ hǎo',normal:'/audio/hnl-original-v1/0123456789abcdef01234567.mp3',slow:'/audio/hnl-original-v1/0123456789abcdef01234567-slow.mp3',review:'unreviewed'};
  try {
    const stale=speak(item.text,item.pinyin,false,true);
    const staleCheck=assert.rejects(stale,speechCancelled);
    stopSpeech();
    resolveManifest(new Response(JSON.stringify({version:1,voiceId:'hnl-original-v1',label:'HNL',engine:'VoiceStudio',generatedAt:'2026-10-18',entries:{[audioKey(item.text,item.pinyin)]:item}})));
    await staleCheck; assert.equal(played,0);
    await assert.rejects(speak(item.text,item.pinyin),/chờ duyệt/);
    await assert.rejects(speak('未知','wèizhī',false,true),/đang được chuẩn bị/);
    const first=speak(item.text,item.pinyin,false,true);
    const firstCheck=assert.rejects(first,speechCancelled);
    await new Promise(resolve=>setTimeout(resolve,0));
    const second=speak(item.text,item.pinyin,true,true);
    const secondCheck=assert.rejects(second,/kiểm tra kết nối/);
    await new Promise(resolve=>setTimeout(resolve,0));
    assert.equal(media[0].paused,true);
    assert.equal(media[1].src,item.slow);
    media[1].dispatchEvent(new Event('error'));
    await Promise.all([firstCheck,secondCheck]);
    const third=speak(item.text,item.pinyin,false,true);
    await new Promise(resolve=>setTimeout(resolve,0));
    media[2].dispatchEvent(new Event('ended')); await third;
    const now = Date.now;
    try {
      Date.now = () => now() + 120_000;
      globalThis.fetch = async () => new Response(JSON.stringify({version:1,voiceId:'hnl-original-v1',label:'HNL',engine:'VoiceStudio',generatedAt:'2026-10-18',disabledReason:'Âm đọc tạm dừng vì chất lượng chưa đạt.',entries:{[audioKey(item.text,item.pinyin)]:item}}));
      const before = played;
      await assert.rejects(speak(item.text,item.pinyin,false,true),/chất lượng chưa đạt/);
      await assert.rejects(speak(item.text,item.pinyin,true,false),/chất lượng chưa đạt/);
      assert.equal(played,before, 'rejected audio must not play, including preview');
    } finally { Date.now = now; }
  } finally {stopSpeech();globalThis.fetch=originalFetch;globalThis.Audio=originalAudio;}
});
