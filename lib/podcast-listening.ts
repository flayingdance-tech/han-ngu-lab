import { z } from 'zod';
const position=z.object({seconds:z.number().finite().min(0).max(36000),duration:z.number().finite().positive().max(36000),completed:z.boolean()});
const preferences=z.object({version:z.literal(1),lastEpisode:z.string().max(120),positions:z.record(z.string().regex(/^[a-z0-9-]{1,120}$/),position),favorites:z.array(z.string().regex(/^[a-z0-9-]{1,120}$/)).max(100),speed:z.union([z.literal(.8),z.literal(1),z.literal(1.1)]),music:z.boolean(),translation:z.boolean(),mode:z.enum(['off','one','all'])});
export type Listening=z.infer<typeof preferences>;
export const listeningKey='hnl-podcasts-v1';
export function emptyListening():Listening{return {version:1,lastEpisode:'',positions:{},favorites:[],speed:1,music:true,translation:true,mode:'off'};}
export function readListening(value:string|null):Listening{
  try{const parsed=preferences.safeParse(JSON.parse(value??'null'));if(!parsed.success||Object.keys(parsed.data.positions).length>100)return emptyListening();return {...parsed.data,positions:Object.fromEntries(Object.entries(parsed.data.positions).map(([id,p])=>[id,{...p,seconds:Math.min(p.seconds,p.duration)}]))};}catch{return emptyListening();}
}
export function resumePosition(memory:Listening,id:string,duration:number){const p=Object.hasOwn(memory.positions,id)?memory.positions[id]:undefined;return !p||p.completed||p.seconds>=duration-1?0:Math.min(p.seconds,duration-1);}
