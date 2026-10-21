import { audioKey, audioManifestSchema, type AudioManifest } from './audio-catalog';

let manifest: Promise<AudioManifest> | undefined;
let manifestExpires = 0;
let active: { audio: HTMLAudioElement; cancel: () => void } | undefined;
let generation = 0;
const cancelled = () => new DOMException('Playback cancelled', 'AbortError');
export const speechCancelled = (error: unknown) => error instanceof DOMException && error.name === 'AbortError';

export function stopSpeech() {
  generation++;
  if (active) {
    const previous = active;
    active = undefined;
    previous.cancel(); previous.audio.pause(); previous.audio.removeAttribute('src'); previous.audio.load();
  }
}

async function loadManifest() {
  if (!manifest || Date.now() > manifestExpires) {
    manifestExpires = Infinity;
    manifest = fetch('/api/audio/manifest.json', { cache: 'no-store' }).then(async response => {
      if (!response.ok) throw new Error('Chưa tải được bộ âm đọc. Vui lòng thử lại.');
      const parsed = audioManifestSchema.safeParse(await response.json());
      if (!parsed.success) throw new Error('Bộ âm đọc chưa sẵn sàng. Vui lòng thử lại sau.');
      manifestExpires = Date.now() + 60_000;
      return parsed.data;
    }).catch(error => { manifest = undefined; manifestExpires = 0; throw error; });
  }
  return manifest;
}

// Playback only: synthesis and all provider credentials stay outside the website.
export async function speak(text: string, pinyin: string, slow = false, preview = false): Promise<void> {
  stopSpeech();
  const request = generation;
  const catalog = await loadManifest();
  if (request !== generation) throw cancelled();
  if (catalog.disabledReason) throw new Error(catalog.disabledReason);
  const key = audioKey(text, pinyin);
  const entry = Object.hasOwn(catalog.entries, key) ? catalog.entries[key] : undefined;
  if (!entry) throw new Error('Âm đọc này đang được chuẩn bị. Bạn có thể tiếp tục học và thử lại sau.');
  if (entry.review !== 'approved' && !preview && !catalog.betaRelease) throw new Error('Âm đọc này đang chờ duyệt phát âm.');
  const audio = new Audio(slow ? entry.slow : entry.normal);
  audio.preload = 'auto';
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      audio.removeEventListener('ended', ended); audio.removeEventListener('error', failed);
      if (active?.audio === audio) active = undefined;
      if (error) reject(error); else resolve();
    };
    const ended = () => finish();
    const failed = () => finish(new Error('Chưa phát được âm thanh. Hãy kiểm tra kết nối rồi bấm nghe lại.'));
    audio.addEventListener('ended', ended, { once: true });
    audio.addEventListener('error', failed, { once: true });
    active = { audio, cancel: () => finish(cancelled()) };
    void audio.play().catch(() => request !== generation ? finish(cancelled()) : failed());
  });
}
