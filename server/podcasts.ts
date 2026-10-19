import { existsSync, readFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import type { Express } from 'express';
import { podcastCatalogSchema } from '../lib/podcast';

// Draft media lives outside public/out. Both metadata and bytes require preview mode.
export function mountPodcasts(app:Express,localPreview:boolean,directory=resolve('.local/podcasts/rendered')){
  function catalog(){
    const file=resolve(directory,'catalog.json');
    return existsSync(file)?podcastCatalogSchema.parse(JSON.parse(readFileSync(file,'utf8'))):null;
  }
  app.get('/api/podcasts',(_req,res)=>{
    if(!localPreview){res.status(404).json({error:'Podcast đang được chuẩn bị để duyệt.'});return;}
    const data=catalog();
    if(!data){res.status(503).json({error:'Các tập podcast đang được chuẩn bị. Vui lòng thử lại sau.'});return;}
    res.setHeader('Cache-Control','no-store');res.json(data);
  });
  app.get('/api/podcasts/media/:filename',(req,res)=>{
    if(!localPreview){res.status(404).end();return;}
    const filename=req.params.filename as string;
    if(!/^[a-z0-9-]+-(voice|mix)\.mp3$/.test(filename)){res.status(404).end();return;}
    const data=catalog();
    const asset=data?.episodes.flatMap(e=>Object.values(e.assets)).find(a=>basename(a.url)===filename);
    if(!asset){res.status(404).end();return;}
    res.setHeader('Cache-Control','private, no-cache');
    // Only a catalog-whitelisted file is served; the private parent is a dot-directory.
    res.sendFile(resolve(directory,filename),{dotfiles:'allow'});
  });
}
