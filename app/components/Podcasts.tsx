'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Headphones, Play, Music2, Heart, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import { api } from '../../lib/client';
import { stopSpeech } from '../../lib/audio';
import { podcastCatalogSchema, type PodcastCatalog, type Podcast } from '../../lib/podcast';
import { emptyListening, listeningKey, readListening, resumePosition, type Listening } from '../../lib/podcast-listening';
const clock=(n:number)=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
export function Podcasts(){
  const [catalog,setCatalog]=useState<PodcastCatalog|null>(null),[error,setError]=useState(''),[selected,setSelected]=useState(''),[attempt,setAttempt]=useState(0);
  const [memory,setMemory]=useState<Listening>(emptyListening),[query,setQuery]=useState(''),[onlyFavorites,setOnlyFavorites]=useState(false),[autoplay,setAutoplay]=useState(false),[storageWarning,setStorageWarning]=useState(false);
  const memoryRef=useRef<Listening>(emptyListening());
  const update=useCallback((change:(previous:Listening)=>Listening)=>{const next=change(memoryRef.current);memoryRef.current=next;setMemory(next);try{localStorage.setItem(listeningKey,JSON.stringify(next));}catch{setStorageWarning(true);}},[]);
  useEffect(()=>{let alive=true;api('/podcasts').then(data=>{if(!alive)return;const parsed=podcastCatalogSchema.parse(data);let saved=emptyListening();try{saved=readListening(localStorage.getItem(listeningKey));}catch{setStorageWarning(true);}memoryRef.current=saved;setMemory(saved);setSelected(saved.lastEpisode);setCatalog(parsed);setError('');}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[attempt]);
  const episode=catalog?.episodes.find(e=>e.id===selected)??catalog?.episodes[0];
  const index=catalog?.episodes.findIndex(e=>e.id===episode?.id)??0;
  const filtered=catalog?.episodes.filter(e=>(!onlyFavorites||memory.favorites.includes(e.id))&&`${e.title} ${e.description} ${e.topic}`.toLocaleLowerCase('vi').includes(query.trim().toLocaleLowerCase('vi')))??[];
  const completed=catalog?.episodes.filter(e=>memory.positions[e.id]?.completed).length??0;
  function select(id:string,play=false){setAutoplay(play);setSelected(id);update(s=>({...s,lastEpisode:id}));}
  function advance(direction:number,play=false){if(!catalog)return;const next=catalog.episodes[(index+direction+catalog.episodes.length)%catalog.episodes.length];select(next.id,play);}
  const onProgress=useCallback((id:string,seconds:number,duration:number,finished=false)=>{update(s=>({...s,positions:{...s.positions,[id]:{seconds,duration,completed:finished||s.positions[id]?.completed===true}}}));},[update]);
  return <section className="podcast-space"><div className="podcast-heading"><span className="eyebrow"><Headphones size={17}/> HÁN NGỮ RADIO</span><h1>Góc podcast.</h1><p>Nghe tiếng Trung chậm rãi vào buổi sáng hoặc trước khi ngủ.</p></div>
    <p className="notice compact">Bản thử nghiệm — Chưa duyệt · Giọng kể Mandarin A · Nội dung và phát âm đang chờ duyệt chuyên môn.</p>
    {error?<p role="alert" className="notice error">{error} <button className="text-button" onClick={()=>setAttempt(n=>n+1)}>Thử lại</button></p>:!catalog?<p role="status">Đang mở thư viện podcast…</p>:null}
    {catalog&&<><div className="podcast-daily"><div><strong>{catalog.episodes.length} tập cho nhịp nghe mỗi ngày</strong><p>Đã nghe hết {completed}/{catalog.episodes.length} tập · Vị trí và yêu thích lưu trên thiết bị này.</p></div><button className="button secondary" onClick={()=>select((catalog.episodes.find(e=>!memory.positions[e.id]?.completed)??catalog.episodes[0]).id)}>Gợi ý tập nghe<Play size={16}/></button></div>
      {storageWarning&&<p role="status" className="notice compact">Trình duyệt đang chặn lưu trữ. Bạn vẫn nghe được; vị trí nghe sẽ chỉ giữ trong lượt mở trang này.</p>}
      <div className="podcast-toolbar"><label className="search-input"><input aria-label="Tìm podcast" placeholder="Tìm chủ đề, tên tập…" value={query} onChange={e=>setQuery(e.target.value)}/></label><label><input type="checkbox" checked={onlyFavorites} onChange={e=>setOnlyFavorites(e.target.checked)}/>Chỉ tập yêu thích</label><span className="tiny muted">{filtered.length} tập</span></div>
      <div className="podcast-grid"><div className="podcast-library" aria-label="Danh sách podcast">{filtered.map(e=><button key={e.id} className={`podcast-card ${episode?.id===e.id?'selected':''}`} aria-pressed={episode?.id===e.id} onClick={()=>select(e.id)}><span className="eyebrow">TẬP {String(catalog.episodes.indexOf(e)+1).padStart(2,'0')} · {clock(e.duration)}{memory.positions[e.id]?.completed?' · ĐÃ NGHE':''}</span><h2>{e.title}</h2><p>{e.description}</p><span className="tiny">{e.review==="approved"?"Đã duyệt":"Bản thử nghiệm — Chưa duyệt"}</span><span className="podcast-card-meta">{e.level}{memory.favorites.includes(e.id)?<Heart size={18} fill="currentColor"/>:<Play size={18}/>}</span></button>)}{!filtered.length&&<p className="muted">Chưa có tập phù hợp. Thử đổi từ khóa hoặc bỏ lọc yêu thích.</p>}</div>
      {episode&&<PodcastPlayer key={episode.id} episode={episode} musicAvailable={catalog.music.license!=='none'} memory={memory} autoplay={autoplay} favorite={memory.favorites.includes(episode.id)} update={update} onProgress={onProgress} onFavorite={()=>update(s=>({...s,favorites:s.favorites.includes(episode.id)?s.favorites.filter(id=>id!==episode.id):[...s.favorites,episode.id]}))} onPrevious={()=>advance(-1)} onNext={()=>advance(1)} onEnded={()=>{if(memoryRef.current.mode==='all')advance(1,true);}}/>}</div>
      <p className="podcast-credit"><Music2 size={16}/> Nhạc: {catalog.music.source?<a href={catalog.music.source} target="_blank" rel="noreferrer">{catalog.music.title}</a>:catalog.music.title} — {catalog.music.author}{catalog.music.license==='CC BY 4.0'&&<> · <a href={catalog.music.licenseUrl} target="_blank" rel="noreferrer">CC BY 4.0</a></>}. {catalog.music.changes}</p></>}
  </section>;
}
type PlayerProps={episode:Podcast;musicAvailable:boolean;memory:Listening;autoplay:boolean;favorite:boolean;update:(change:(s:Listening)=>Listening)=>void;onProgress:(id:string,time:number,duration:number,finished?:boolean)=>void;onFavorite:()=>void;onPrevious:()=>void;onNext:()=>void;onEnded:()=>void};
function PodcastPlayer({episode,musicAvailable,memory,autoplay,favorite,update,onProgress,onFavorite,onPrevious,onNext,onEnded}:PlayerProps){
  const audio=useRef<HTMLAudioElement>(null),pending=useRef<{time:number;play:boolean}|null>({time:resumePosition(memory,episode.id,episode.duration),play:autoplay}),savedAt=useRef(-10);
  const [time,setTime]=useState(0),[error,setError]=useState('');
  const {speed,mode,translation}=memory;
  const music=musicAvailable&&memory.music;
  const transcript=useRef<HTMLOListElement>(null);
  const [follow,setFollow]=useState(true);
  const current=episode.segments.findIndex(s=>time>=s.start&&time<s.end);
  useEffect(()=>{
    const list=transcript.current,row=list?.children[current] as HTMLElement|undefined;
    if(!follow||!list||!row)return;
    const top=row.getBoundingClientRect().top-list.getBoundingClientRect().top+list.scrollTop-12;
    list.scrollTo({top,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  },[current,follow]);
  useEffect(()=>{stopSpeech();const element=audio.current;return()=>{if(element){element.pause();if(element.currentTime>0)onProgress(episode.id,Math.min(element.currentTime,episode.duration),episode.duration);}};},[episode.id,episode.duration,onProgress]);
  function play(){stopSpeech();setError('');void audio.current?.play().catch(()=>setError('Chưa phát được âm thanh. Bấm nghe lại để tiếp tục.'));}
  function changeMusic(){const a=audio.current;if(a){pending.current=pending.current??{time:a.currentTime,play:!a.paused};a.pause();}setError('');update(s=>({...s,music:!s.music}));}
  function loaded(){const a=audio.current;if(!a)return;a.playbackRate=speed;a.preservesPitch=true;if(pending.current){const p=pending.current;pending.current=null;a.currentTime=Math.min(p.time,Math.max(0,a.duration-.05));setTime(a.currentTime);if(p.play)play();}}
  function jump(start:number){const a=audio.current;if(!a)return;const target=Math.max(0,Math.min(start,episode.duration-.05));if(a.readyState===0){pending.current={time:target,play:true};a.load();}else{a.currentTime=target;setTime(target);play();}}
  function progress(force=false){const a=audio.current;if(!a||a.readyState===0)return;const t=Math.min(a.currentTime,episode.duration);setTime(t);if(force||Math.abs(t-savedAt.current)>=2){savedAt.current=t;onProgress(episode.id,t,episode.duration);}}
  return <article className="card podcast-player"><span className="eyebrow">{episode.topic}</span><h2>{episode.title}</h2><p className="muted">Thả lỏng, lắng nghe và để câu chuyện chậm rãi đi cùng bạn.</p>{episode.broadcastDate&&<p className="tiny muted">Ngày phát thanh: <time dateTime={episode.broadcastDate}>{episode.broadcastDate.split('-').reverse().join('/')}</time></p>}
    <div className="podcast-player-bar"><audio ref={audio} aria-label={`Nghe podcast ${episode.title}`} controls preload="metadata" src={music?episode.assets.mix.url:episode.assets.voice.url} onLoadedMetadata={loaded} onPlay={()=>{stopSpeech();setError('');update(s=>s.lastEpisode===episode.id?s:{...s,lastEpisode:episode.id});}} onTimeUpdate={()=>progress()} onPause={()=>progress(true)} onSeeked={()=>progress(true)} onEnded={()=>{onProgress(episode.id,episode.duration,episode.duration,true);if(mode==='one')jump(0);else onEnded();}} onError={()=>setError('Chưa tải được âm thanh. Kiểm tra kết nối rồi thử lại.')} />
    <div className="podcast-transport"><button className="icon-button" aria-label="Tập trước" onClick={onPrevious}><SkipBack size={19}/></button><button className="text-button" onClick={()=>jump(time-10)}>−10 giây</button><button className="text-button" onClick={()=>jump(0)}><RotateCcw size={15}/>Từ đầu</button><button className="text-button" onClick={()=>jump(time+10)}>+10 giây</button><button className="icon-button" aria-label="Tập tiếp theo" onClick={onNext}><SkipForward size={19}/></button></div></div>
    <div className="podcast-options"><label><input type="checkbox" checked={music} disabled={!musicAvailable} onChange={changeMusic}/>{musicAvailable?'Nhạc piano':'Bản chỉ giọng đọc'}</label><label>Tốc độ <select aria-label="Tốc độ podcast" value={speed} onChange={e=>{const value=Number(e.target.value) as Listening['speed'];update(s=>({...s,speed:value}));if(audio.current){audio.current.playbackRate=value;audio.current.preservesPitch=true;}}}>{[.8,1,1.1].map(s=><option key={s} value={s}>{s}×</option>)}</select></label><label>Phát lại <select aria-label="Chế độ phát podcast" value={mode} onChange={e=>update(s=>({...s,mode:e.target.value as Listening['mode']}))}><option value="off">Dừng khi hết tập</option><option value="one">Lặp tập này</option><option value="all">Nghe liên tục</option></select></label></div>
    {error&&<p className="notice error" role="alert">{error} <button className="text-button" onClick={()=>{if(audio.current){pending.current={time,play:true};audio.current.load();setError('');}}}>Thử lại âm thanh</button></p>}
    <div className="podcast-actions"><button className="button secondary" aria-pressed={favorite} onClick={onFavorite}><Heart size={17} fill={favorite?'currentColor':'none'}/>{favorite?'Đã yêu thích':'Yêu thích'}</button></div>
    {episode.segments.length>0&&<section aria-label="Phụ đề podcast">
      <h3>Chữ Hán · Pinyin · Nghĩa Việt</h3>
      <div className="podcast-options"><label><input type="checkbox" checked={translation} onChange={()=>update(s=>({...s,translation:!s.translation}))}/>Hiện nghĩa Việt</label><label><input type="checkbox" checked={follow} onChange={e=>setFollow(e.target.checked)}/>Tự cuộn phụ đề</label></div>
      <p className="tiny muted">Bấm vào một đoạn để nghe lại. Phụ đề sáng theo đoạn đang đọc.</p>
      <ol ref={transcript} className="podcast-transcript" aria-label="Các đoạn phụ đề">{episode.segments.map((s,i)=><li key={s.start} className={current===i?'current':undefined}><button aria-label={`Nghe đoạn ${i+1}: ${s.zh}`} aria-current={current===i?'true':undefined} onClick={()=>jump(s.start)}><span className="transcript-meta">{clock(s.start)} · {s.speaker}</span><span className="transcript-hanzi" lang="zh-CN">{s.zh}</span><span className="transcript-pinyin" lang="zh-Latn">{s.pinyin}</span>{translation&&<span className="transcript-meaning" lang="vi">{s.vi}</span>}</button></li>)}</ol>
    </section>}
    <p className="podcast-tip">{episode.tip}</p>
  </article>;
}
