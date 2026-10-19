import { z } from 'zod';

const asset = z.object({
  url: z.string().regex(/^\/api\/podcasts\/media\/[a-z0-9-]+-(voice|mix)\.mp3$/),
  seconds: z.number().positive(), sha256: z.string().regex(/^[a-f0-9]{64}$/),
  lufs: z.number(), truePeakDb: z.number().max(-1), peak: z.number().min(0).max(.99),
});
export const podcastSchema = z.object({
  id:z.string().regex(/^[a-z0-9-]+$/), title:z.string(), topic:z.string(), level:z.string(),
  description:z.string(), tip:z.string(), review:z.enum(['unreviewed','approved']),
  format:z.enum(['dialogue','radio']).default('dialogue'), broadcastDate:z.iso.date().optional(),
  voiceId:z.literal('hnl-kokoro-zf001-v1'), duration:z.number().positive(),
  segments:z.array(z.object({zh:z.string().min(1),pinyin:z.string().min(1),vi:z.string().min(1),speaker:z.string(),start:z.number().nonnegative(),end:z.number().positive()})).default([]),
  assets:z.object({voice:asset,mix:asset}),
}).superRefine((episode,ctx)=>{
  if(episode.format==='radio'&&episode.segments.length)ctx.addIssue({code:'custom',message:'Radio playback is audio-only',path:['segments']});
  if(episode.format==='dialogue'&&!episode.segments.length)ctx.addIssue({code:'custom',message:'Dialogue requires a timeline',path:['segments']});
  for(const [i,s] of episode.segments.entries()){
    if(s.end<=s.start||s.end>episode.duration||i>0&&s.start<episode.segments[i-1].end)ctx.addIssue({code:'custom',message:'Transcript timestamps overlap or exceed audio',path:['segments',i]});
  }
  if(Math.abs(episode.assets.voice.seconds-episode.assets.mix.seconds)>.1||Math.abs(episode.duration-episode.assets.voice.seconds)>.1)ctx.addIssue({code:'custom',message:'Voice and mix must share a timeline'});
});
const musicInfo=z.object({title:z.string(),author:z.string(),artistUrl:z.url().optional(),genre:z.string().optional(),changes:z.string()});
const musicSchema=z.union([
  musicInfo.extend({license:z.literal('CC BY 4.0'),source:z.url(),licenseUrl:z.literal('https://creativecommons.org/licenses/by/4.0/')}),
  musicInfo.extend({license:z.literal('owner-supplied'),rightsStatus:z.literal('owner-provided-unverified'),source:z.url().optional(),licenseUrl:z.never().optional()}),
]);
export const podcastCatalogSchema=z.object({version:z.literal(1),generatedAt:z.string(),music:musicSchema,episodes:z.array(podcastSchema).min(1)});
export type Podcast=z.infer<typeof podcastSchema>;
export type PodcastCatalog=z.infer<typeof podcastCatalogSchema>;
