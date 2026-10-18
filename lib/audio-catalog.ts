import { z } from 'zod';

export const projectVoiceId = 'hnl-original-v1';
export const audioKey = (text: string, pinyin: string) => `${text.normalize('NFC').trim()}\u241f${pinyin.normalize('NFC').trim()}`;
const audioPath = z.string().regex(/^\/audio\/hnl-original-v1\/[a-f0-9]{24}(?:-slow)?\.mp3$/);
export const audioManifestSchema = z.object({
  version: z.literal(1), voiceId: z.literal(projectVoiceId),
  label: z.string().min(1), engine: z.string().min(1), generatedAt: z.string(),
  entries: z.record(z.string(), z.object({
    text: z.string(), pinyin: z.string(), normal: audioPath, slow: audioPath,
    review: z.enum(['unreviewed', 'approved']),
  })),
});
export type AudioManifest = z.infer<typeof audioManifestSchema>;
