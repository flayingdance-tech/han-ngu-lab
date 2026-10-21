import { existsSync, readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import type { Express } from 'express';
import { podcastCatalogSchema } from '../lib/podcast';
import type { ReleasePolicy } from './content-release';

// Production media must have a separate release manifest; local drafts stay private.
export function mountPodcasts(app:Express,localPreview:boolean,directory=resolve(localPreview?'.local/podcasts/rendered':'media/podcasts'),policy?:ReleasePolicy){
  const checked = new Map<string, { size:number;mtime:number;ctime:number;sha:string }>();
  function catalog(){
    const file=resolve(directory,'catalog.json');
    if(!existsSync(file))return null;
    const data=podcastCatalogSchema.parse(JSON.parse(readFileSync(file,'utf8')));
    if(localPreview)return data;
    if(data.music.license==='owner-supplied'&&!(policy?.betaPublicationApproved&&policy.approvedAt&&policy.musicDistribution==='owner-authorized'))return null;
    const episodes=data.episodes.filter(e=>e.review==='approved'||policy?.betaPublicationApproved&&policy.approvedAt&&policy.podcastIds.includes(e.id));
    return episodes.length?{...data,episodes}:null;
  }
  app.get('/api/podcasts',(_req,res)=>{
    const data=catalog();
    if(!data){res.status(localPreview?503:404).json({error:'Podcast đang được chuẩn bị để duyệt.'});return;}
    res.setHeader('Cache-Control','no-store');res.json(data);
  });
  app.get('/api/podcasts/media/:filename',(req,res)=>{
    const filename=req.params.filename as string;
    if(!/^[a-z0-9-]+-(voice|mix)\.mp3$/.test(filename)){res.status(404).end();return;}
    const data=catalog();
    const asset=data?.episodes.flatMap(e=>Object.values(e.assets)).find(a=>basename(a.url)===filename);
    if(!asset){res.status(404).end();return;}
    const file=resolve(directory,filename);
    if(!existsSync(file)||lstatSync(file).isSymbolicLink()||!lstatSync(file).isFile()||dirname(realpathSync(file))!==realpathSync(directory)){res.status(404).end();return;}
    if(!localPreview){
      const stat=lstatSync(file),cached=checked.get(file);
      const fingerprint=cached&&cached.size===stat.size&&cached.mtime===stat.mtimeMs&&cached.ctime===stat.ctimeMs?cached.sha:createHash('sha256').update(readFileSync(file)).digest('hex');
      checked.set(file,{size:stat.size,mtime:stat.mtimeMs,ctime:stat.ctimeMs,sha:fingerprint});
      if(fingerprint!==asset.sha256){res.status(503).end();return;}
    }
    res.setHeader('Cache-Control','private, no-cache');
    // Only a catalog-whitelisted file is served; the private parent is a dot-directory.
    res.sendFile(resolve(directory,filename),{dotfiles:'allow'});
  });
}
