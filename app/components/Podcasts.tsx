'use client';
import { useEffect, useRef, useState } from 'react';
import { Headphones, Play, Music2 } from 'lucide-react';
import { api } from '../../lib/client';
import { stopSpeech } from '../../lib/audio';
import { podcastCatalogSchema, type PodcastCatalog, type Podcast } from '../../lib/podcast';

const clock=(n:number)=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
export function Podcasts(){
  const [catalog,setCatalog]=useState<PodcastCatalog|null>(null),[error,setError]=useState(''),[selected,setSelected]=useState(''),[attempt,setAttempt]=useState(0);
  useEffect(()=>{let alive=true;api('/podcasts').then(data=>{if(alive){setCatalog(podcastCatalogSchema.parse(data));setError('');}}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[attempt]);
  const episode=catalog?.episodes.find(e=>e.id===selected)??catalog?.episodes[0];
  return <section className="podcast-space"><div className="podcast-heading"><span className="eyebrow"><Headphones size={17}/> NGHE MỘT CHÚT, HIỂU THÊM MỘT CHÚT</span><h1>Góc podcast.</h1><p>Tiếng Trung trong những cuộc trò chuyện mỗi ngày.</p></div>
    <p className="notice compact">Giọng Mandarin A · Bản thử nghiệm, nội dung và phát âm đang chờ duyệt chuyên môn. Các vai hội thoại dùng cùng một giọng đọc.</p>
    {error?<p role="alert" className="notice error">{error} <button className="text-button" onClick={()=>setAttempt(n=>n+1)}>Thử lại</button></p>:!catalog?<p role="status">Đang mở thư viện podcast…</p>:null}
    {catalog&&<div className="podcast-grid"><div className="podcast-library" aria-label="Danh sách podcast">{catalog.episodes.map((e,i)=><button key={e.id} className={`podcast-card ${episode?.id===e.id?'selected':''}`} aria-pressed={episode?.id===e.id} onClick={()=>setSelected(e.id)}><span className="eyebrow">TẬP {String(i+1).padStart(2,'0')} · {clock(e.duration)}</span><h2>{e.title}</h2><p>{e.description}</p><span className="podcast-card-meta">{e.level}<Play size={18}/></span></button>)}</div>{episode&&<PodcastPlayer key={episode.id} episode={episode}/>}</div>}
    {catalog&&<p className="podcast-credit"><Music2 size={16}/> Nhạc: <a href={catalog.music.source} target="_blank" rel="noreferrer">{catalog.music.title} — {catalog.music.author}</a> · <a href={catalog.music.licenseUrl} target="_blank" rel="noreferrer">CC BY 4.0</a>. {catalog.music.changes}</p>}
  </section>;
}

function PodcastPlayer({episode}:{episode:Podcast}){
  const audio=useRef<HTMLAudioElement>(null),pending=useRef<{time:number;play:boolean}|null>(null);
  const [music,setMusic]=useState(true),[speed,setSpeed]=useState(1),[time,setTime]=useState(0),[error,setError]=useState(''),[translation,setTranslation]=useState(true);
  useEffect(()=>{stopSpeech();const element=audio.current;return()=>{element?.pause();};},[]);
  const current=episode.segments.findIndex(s=>time>=s.start&&time<s.end);
  function play(){stopSpeech();setError('');void audio.current?.play().catch(()=>setError('Chưa phát được âm thanh. Hãy kiểm tra kết nối rồi bấm Thử lại âm thanh.'));}
  function changeMusic(){const a=audio.current;if(a){pending.current={time:a.currentTime,play:!a.paused};a.pause();}setError('');setMusic(v=>!v);}
  function loaded(){const a=audio.current;if(!a)return;a.playbackRate=speed;a.preservesPitch=true;if(pending.current){const p=pending.current;pending.current=null;a.currentTime=Math.min(p.time,Math.max(0,a.duration-.05));if(p.play)play();}}
  function jump(start:number){const a=audio.current;if(!a)return;if(a.readyState===0){pending.current={time:start,play:true};a.load();}else{a.currentTime=start;play();}}
  return <article className="card podcast-player"><span className="eyebrow">{episode.topic}</span><h2>{episode.title}</h2><p className="muted">Nghe hội thoại, dừng lại và nói theo trong khoảng nghỉ.</p>
    <audio ref={audio} aria-label={`Nghe podcast ${episode.title}`} controls preload="metadata" src={music?episode.assets.mix.url:episode.assets.voice.url} onLoadedMetadata={loaded} onPlay={()=>{stopSpeech();setError('');}} onTimeUpdate={()=>setTime(audio.current?.currentTime??0)} onError={()=>setError('Chưa tải được âm thanh. Kiểm tra kết nối rồi thử lại.')} />
    <div className="podcast-options"><label><input type="checkbox" checked={music} onChange={changeMusic}/>Nhạc nền nhẹ</label><label>Tốc độ <select aria-label="Tốc độ podcast" value={speed} onChange={e=>{const value=Number(e.target.value);setSpeed(value);if(audio.current){audio.current.playbackRate=value;audio.current.preservesPitch=true;}}}>{[.8,1,1.1].map(s=><option key={s} value={s}>{s}×</option>)}</select></label><label><input type="checkbox" checked={translation} onChange={e=>setTranslation(e.target.checked)}/>Hiện nghĩa Việt</label></div>
    {error&&<p className="notice error" role="alert">{error} <button className="text-button" onClick={()=>{if(audio.current){pending.current={time,play:true};audio.current.load();setError('');}}}>Thử lại âm thanh</button></p>}
    <p className="podcast-tip">{episode.tip}</p><h3>Lời thoại · bấm vào câu để nghe</h3><ol className="podcast-transcript">{episode.segments.map((s,i)=><li key={i} className={current===i?'current':''}><button onClick={()=>jump(s.start)} aria-label={`Nghe đoạn ${i+1}: ${s.zh}`} aria-current={current===i?'true':undefined}><span className="transcript-meta">{clock(s.start)} · {s.speaker}</span><span className="transcript-hanzi" lang="zh-CN">{s.zh}</span><span className="transcript-pinyin">{s.pinyin}</span>{translation&&<span className="transcript-meaning">{s.vi}</span>}</button></li>)}</ol>
  </article>;
}
