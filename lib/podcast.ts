import { z } from 'zod';

const asset = z.object({
  url: z.string().regex(/^\/api\/podcasts\/media\/[a-z0-9-]+-(voice|mix)\.mp3$/),
  seconds: z.number().positive(), sha256: z.string().regex(/^[a-f0-9]{64}$/),
  lufs: z.number(), truePeakDb: z.number().max(-1), peak: z.number().min(0).max(.99),
});
export const podcastSchema = z.object({
  id:z.string().regex(/^[a-z0-9-]+$/), title:z.string(), topic:z.string(), level:z.string(),
  description:z.string(), tip:z.string(), review:z.enum(['unreviewed','approved']),
  voiceId:z.literal('hnl-kokoro-zf001-v1'), duration:z.number().positive(),
  segments:z.array(z.object({zh:z.string().min(1),pinyin:z.string().min(1),vi:z.string().min(1),speaker:z.string(),start:z.number().nonnegative(),end:z.number().positive()})).min(1),
  assets:z.object({voice:asset,mix:asset}),
}).superRefine((episode,ctx)=>{
  for(const [i,s] of episode.segments.entries()){
    if(s.end<=s.start||s.end>episode.duration||i>0&&s.start<episode.segments[i-1].end)ctx.addIssue({code:'custom',message:'Transcript timestamps overlap or exceed audio',path:['segments',i]});
  }
  if(Math.abs(episode.assets.voice.seconds-episode.assets.mix.seconds)>.1||Math.abs(episode.duration-episode.assets.voice.seconds)>.1)ctx.addIssue({code:'custom',message:'Voice and mix must share a timeline'});
});
export const podcastCatalogSchema=z.object({version:z.literal(1),generatedAt:z.string(),music:z.object({title:z.string(),author:z.string(),artistUrl:z.url().optional(),genre:z.string().optional(),license:z.literal('CC BY 4.0'),source:z.url(),licenseUrl:z.literal('https://creativecommons.org/licenses/by/4.0/'),changes:z.string()}),episodes:z.array(podcastSchema)});
export type Podcast=z.infer<typeof podcastSchema>;
export type PodcastCatalog=z.infer<typeof podcastCatalogSchema>;
