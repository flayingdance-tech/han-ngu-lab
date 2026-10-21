import { createHash, randomUUID } from 'node:crypto';
import { readFileSync, existsSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, dirname, basename, relative, isAbsolute } from 'node:path';
import type { Express, Request } from 'express';
import { z } from 'zod';
import { audioEntrySchema as recordingSchema, audioManifestSchema, type AudioManifest } from '../lib/audio-catalog';
import { podcastSchema, type PodcastCatalog } from '../lib/podcast';
import { transaction, type Database } from './database';
import { betaNotice, type ReleasePolicy } from './content-release';
import type { Role } from '../lib/domain';
import { ensureMediaSchema } from './media-schema';
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
const audioEntrySchema = z.object({ key:z.string(), label:z.string().min(1).max(200), note:z.string().max(2000), entry:recordingSchema }).strict();
type Row = {id:string;item_id:string;kind:string;content:string;status:string;author_id:string;reviewer_id:string|null;review_note:string;published_revision_id:string|null};

export function seedMedia(db: Database, manifest: AudioManifest, catalog: PodcastCatalog | null, policy: ReleasePolicy) {
  ensureMediaSchema(db);
  const items = Object.entries(manifest.entries).map(([key,entry])=>({id:`audio-${hash(key).slice(0,24)}`,kind:'audio',content:{key,label:entry.text,note:'',entry}})) as {id:string;kind:string;content:unknown}[];
  for(const episode of catalog?.episodes ?? []) items.push({id:episode.id,kind:'podcast',content:episode});
  let added=0;
  for(const item of items){
    if(db.prepare('SELECT id FROM media_items WHERE id=?').get(item.id))continue; // Never re-publish a withdrawn item.
    const beta=policy.betaPublicationApproved && policy.approvedAt && (item.kind==='audio'?policy.lessonIds.length>0:policy.podcastIds.includes(item.id)&&policy.musicDistribution==='owner-authorized');
    const id=`media-${hash(`${item.id}:${JSON.stringify(item.content)}`).slice(0,32)}`;
    db.prepare('INSERT INTO media_items VALUES(?,?,?)').run(item.id,item.kind,beta?id:null);
    db.prepare('INSERT INTO media_revisions VALUES(?,?,?,?,?,?,?,?)').run(id,item.id,JSON.stringify(item.content),beta?'beta':'draft',`system-release:${policy.id}`,null,'Quyền phân phối do chủ dự án xác nhận D-053; chưa duyệt chuyên môn.',Date.now());
    added++;
  }
  return {items:items.length,added};
}
function active(db:Database,kind:string){return db.prepare('SELECT r.* FROM media_items i JOIN media_revisions r ON r.id=i.published_revision_id AND r.item_id=i.id WHERE i.kind=?').all(kind) as unknown as Row[];}
export function releasedAudio(db:Database,base:AudioManifest,policy?:ReleasePolicy):AudioManifest {
  const entries:AudioManifest['entries']={};
  for(const row of active(db,'audio')){
    if(row.status!=='published'&&!(row.status==='beta'&&policy?.betaPublicationApproved&&policy.lessonIds.length&&row.author_id===`system-release:${policy.id}`))continue;
    const item=audioEntrySchema.parse(JSON.parse(row.content));entries[item.key]={...item.entry,review:row.status==='published'?'approved':'unreviewed'};
  }
  return {...base,entries,...(policy?.betaPublicationApproved&&policy.approvedAt?{betaRelease:{approvedAt:policy.approvedAt,notice:betaNotice}}:{})};
}
export function releasedPodcasts(db:Database,base:PodcastCatalog,policy?:ReleasePolicy):PodcastCatalog|null {
  const episodes=active(db,'podcast').filter(r=>r.status==='published'||r.status==='beta'&&policy?.betaPublicationApproved&&policy.podcastIds.includes(r.item_id)&&r.author_id===`system-release:${policy.id}`).map(r=>({...podcastSchema.parse(JSON.parse(r.content)),review:r.status==='published'?'approved' as const:'unreviewed' as const}));
  return episodes.length?{...base,episodes}:null;
}
export function mountMediaEditorial(app:Express,db:Database,options:{localPreview:boolean;releasePolicy?:ReleasePolicy;podcastDirectory?:string},privileged:(req:Request,roles:Role[])=>{id:string;role:Role},audit:(actor:string,action:string,target:string,details?:string)=>void,assert:(condition:unknown,status:number,message:string)=>asserts condition){
  const staff:Role[]=['editor','reviewer','admin','super_admin'],reviewers:Role[]=['reviewer','admin','super_admin'];
  app.get('/api/audio/manifest.json',(_req,res)=>{
    const base=audioManifestSchema.parse(JSON.parse(readFileSync('public/audio/manifest.json','utf8')));
    res.json(options.localPreview?base:releasedAudio(db,base,options.releasePolicy));
  });
  app.get('/api/admin/media',(req,res)=>{privileged(req,staff);res.json({revisions:db.prepare('SELECT r.*,i.kind,i.published_revision_id FROM media_revisions r JOIN media_items i ON i.id=r.item_id ORDER BY r.created_at DESC,r.rowid DESC').all().map(r=>({...r,content:JSON.parse(String(r.content))}))});});
  const get=(id:string)=>db.prepare('SELECT r.*,i.kind,i.published_revision_id FROM media_revisions r JOIN media_items i ON i.id=r.item_id WHERE r.id=?').get(id) as Row|undefined;
  app.get('/api/admin/media/:id/preview/:variant',(req,res)=>{
    privileged(req,staff);const r=get(String(req.params.id));assert(r,404,'Không tìm thấy nội dung.');
    const input=JSON.parse(r.content),variant=String(req.params.variant);let file:string,root:string,expected:string|undefined;
    if(r.kind==='audio'){
      const audio=audioEntrySchema.parse(input);assert(['normal','slow'].includes(variant),404,'Không tìm thấy âm đọc.');
      root=resolve('public/audio');file=resolve('public',audio.entry[variant as 'normal'|'slow'].slice(1));
    }else{
      const episode=podcastSchema.parse(input);assert(['voice','mix'].includes(variant),404,'Không tìm thấy podcast.');
      const asset=episode.assets[variant as 'voice'|'mix'];root=resolve(options.podcastDirectory??(options.localPreview?'.local/podcasts/rendered':'media/podcasts'));file=resolve(root,basename(asset.url));expected=asset.sha256;
    }
    assert(existsSync(file)&&lstatSync(file).isFile()&&!lstatSync(file).isSymbolicLink(),404,'Tài nguyên không khả dụng.');
    const child=relative(realpathSync(root),realpathSync(file));assert(child&&!child.startsWith('..')&&!isAbsolute(child),404,'Tài nguyên không khả dụng.');
    if(r.kind==='podcast')assert(dirname(realpathSync(file))===realpathSync(root)&&createHash('sha256').update(readFileSync(file)).digest('hex')===expected,503,'Checksum tài nguyên không khớp.');
    res.setHeader('Cache-Control','private, no-store');res.sendFile(file,{dotfiles:'allow'});
  });
  app.post('/api/admin/media/:id/edit',(req,res)=>{
    const u=privileged(req,['editor','admin','super_admin']),old=get(String(req.params.id));assert(old,404,'Không tìm thấy nội dung.');
    const source=JSON.parse(old.content),content=old.kind==='audio'?audioEntrySchema.parse(req.body):podcastSchema.parse(req.body);
    // Editing never substitutes audio, speaker, IDs or timing; new audio requires a separate import.
    const fixed=(value:typeof source)=>old.kind==='audio'?{key:value.key,entry:value.entry}:{id:value.id,voiceId:value.voiceId,assets:value.assets,duration:value.duration};
    assert(JSON.stringify(fixed(content))===JSON.stringify(fixed(source)),400,'Giữ nguyên ID, giọng và file âm thanh; chỉ sửa thông tin hoặc phụ đề.');
    const id=randomUUID();transaction(db,()=>{db.prepare('INSERT INTO media_revisions VALUES(?,?,?,?,?,?,?,?)').run(id,old.item_id,JSON.stringify(content),'draft',u.id,null,'',Date.now());audit(u.id,'media.edit',id,old.item_id);});res.status(201).json({revisionId:id});
  });
  app.post('/api/admin/media/:id/transition',(req,res)=>{
    const u=privileged(req,staff),input=z.object({action:z.enum(['submit','request-changes','approve','publish','unpublish','rollback']),note:z.string().max(2000).default('')}).strict().parse(req.body),r=get(String(req.params.id));assert(r,404,'Không tìm thấy phiên bản.');
    const reviewer=reviewers.includes(u.role);let status=r.status;
    if(input.action==='submit'){assert(r.status==='draft'&&(u.id===r.author_id||['admin','super_admin'].includes(u.role)),403,'Không thể gửi duyệt.');status='in_review';}
    if(input.action==='request-changes'){assert(reviewer&&r.status==='in_review',403,'Không thể yêu cầu sửa.');status='draft';}
    if(input.action==='approve'){assert(reviewer&&r.status==='in_review'&&r.author_id!==u.id&&input.note.trim().length>=10,403,'Cần người duyệt khác tác giả và ghi chú rà soát phát âm/nội dung.');status='approved';}
    if(input.action==='publish'){assert(reviewer&&r.status==='approved'&&r.reviewer_id&&r.author_id!==u.id,403,'Nội dung cần được người khác phê duyệt.');status='published';}
    if(input.action==='unpublish'){assert(reviewer&&r.published_revision_id===r.id&&['beta','published'].includes(r.status),409,'Phiên bản không đang xuất bản.');status=r.status==='beta'?'beta_archived':'archived';}
    if(input.action==='rollback'){
      const beta=['beta','beta_archived'].includes(r.status)&&r.author_id===`system-release:${options.releasePolicy?.id}`&&options.releasePolicy?.betaPublicationApproved&&(r.kind==='audio'?options.releasePolicy.lessonIds.length>0:options.releasePolicy.podcastIds.includes(r.item_id)&&options.releasePolicy.musicDistribution==='owner-authorized');
      assert(reviewer&&(beta||['published','archived'].includes(r.status)&&r.reviewer_id),409,'Chỉ khôi phục bản beta được phép hoặc bản từng xuất bản đã duyệt.');status=beta?'beta':'published';
    }
    transaction(db,()=>{
      db.prepare('UPDATE media_revisions SET status=?,reviewer_id=?,review_note=? WHERE id=?').run(status,input.action==='approve'?u.id:r.reviewer_id,input.action==='approve'?input.note:r.review_note,r.id);
      if(['publish','rollback'].includes(input.action))db.prepare('UPDATE media_items SET published_revision_id=? WHERE id=?').run(r.id,r.item_id);
      if(input.action==='unpublish')db.prepare('UPDATE media_items SET published_revision_id=NULL WHERE id=? AND published_revision_id=?').run(r.item_id,r.id);
      audit(u.id,`media.${input.action}`,r.id); // Review text never goes into generic logs.
    });res.json({status});
  });
}
