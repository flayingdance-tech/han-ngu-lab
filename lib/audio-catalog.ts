import { z } from 'zod';

export const projectVoiceId = 'hnl-kokoro-zf001-v1';
export const audioKey = (text: string, pinyin: string) => `${text.normalize('NFC').trim()}\u241f${pinyin.normalize('NFC').trim()}`;
const audioPath = z.string().regex(/^\/audio\/(?:hnl-original-v1|hnl-kokoro-zf001-v1)\/[a-f0-9]{24}(?:-slow)?\.mp3$/);
export const audioManifestSchema = z.object({
  version: z.literal(1), voiceId: z.enum(['hnl-original-v1', projectVoiceId]),
  label: z.string().min(1), engine: z.string().min(1), generatedAt: z.string(),
  disabledReason: z.string().min(1).optional(),
  entries: z.record(z.string(), z.object({
    text: z.string(), pinyin: z.string(), normal: audioPath, slow: audioPath,
    review: z.enum(['unreviewed', 'approved']),
  })),
}).superRefine((manifest, context) => {
  for (const [key, entry] of Object.entries(manifest.entries)) {
    for (const kind of ['normal', 'slow'] as const) {
      if (!entry[kind].startsWith(`/audio/${manifest.voiceId}/`)) {
        context.addIssue({code:'custom',path:['entries',key,kind],message:'Audio must belong to the manifest voice'});
      }
    }
  }
});
export type AudioManifest = z.infer<typeof audioManifestSchema>;
