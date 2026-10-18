'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function StudyActivity({attempts,timezone}:{attempts:{createdAt:number}[];timezone:string}){
  const [offset,setOffset]=useState(0);
  const dates=new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'});
  const parts=dates.formatToParts(new Date());
  const get=(type:string)=>Number(parts.find(p=>p.type===type)?.value);
  const today=new Date(Date.UTC(get('year'),get('month')-1,get('day')));
  const month=new Date(Date.UTC(today.getUTCFullYear(),today.getUTCMonth()+offset,1));
  const counts=new Map<string,number>();
  for(const a of attempts){const key=dates.format(a.createdAt);counts.set(key,(counts.get(key)??0)+1);}
  const key=(d:Date)=>d.toISOString().slice(0,10);
  const leading=(month.getUTCDay()+6)%7;
  const days=new Date(Date.UTC(month.getUTCFullYear(),month.getUTCMonth()+1,0)).getUTCDate();
  const week=Array.from({length:7},(_,i)=>{const d=new Date(today);d.setUTCDate(d.getUTCDate()-6+i);return {date:d,count:counts.get(key(d))??0};});
  const max=Math.max(1,...week.map(d=>d.count));
  return <section className="activity-section"><div className="section-title"><h2>Lịch sử luyện tập</h2><span className="tiny muted">Dữ liệu từ các lượt làm bài gần nhất</span></div><div className="activity-grid"><section className="card activity-calendar" aria-label="Lịch luyện tập"><div className="calendar-heading"><button className="icon-button" aria-label="Tháng trước" onClick={()=>setOffset(n=>n-1)}><ChevronLeft size={18}/></button><strong>{new Intl.DateTimeFormat('vi',{month:'long',year:'numeric',timeZone:'UTC'}).format(month)}</strong><button className="icon-button" aria-label="Tháng sau" onClick={()=>setOffset(n=>n+1)}><ChevronRight size={18}/></button></div><div className="calendar-grid">{['T2','T3','T4','T5','T6','T7','CN'].map(d=><span className="weekday" key={d}>{d}</span>)}{Array.from({length:leading},(_,i)=><span key={`blank-${i}`} aria-hidden="true"/>)}{Array.from({length:days},(_,i)=>{const d=new Date(Date.UTC(month.getUTCFullYear(),month.getUTCMonth(),i+1));const count=counts.get(key(d))??0;return <span key={i} className={`activity-day ${count?'studied':''} ${key(d)===key(today)?'today':''}`} title={`${i+1}: ${count} lượt làm bài`} aria-label={`${dates.format(d)}: ${count} lượt làm bài`}>{i+1}</span>;})}</div><p className="tiny muted"><span className="activity-key"/>Ngày có luyện tập</p></section><section className="card activity-week" aria-label="Luyện tập trong bảy ngày"><span className="tiny muted">NHỊP HỌC CỦA BẠN</span><h3>7 ngày, từng bước nhỏ.</h3><p className="muted"><strong>{week.reduce((sum,d)=>sum+d.count,0)}</strong> lượt luyện tập</p><div className="week-bars">{week.map(d=><div key={key(d.date)}><span className="week-bar" style={{height:d.count?`${Math.max(8,d.count/max*100)}%`:'3px'}} title={`${d.count} lượt`}/><small>{new Intl.DateTimeFormat('vi',{weekday:'short',timeZone:'UTC'}).format(d.date)}</small></div>)}</div></section></div></section>;
}
