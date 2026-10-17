'use client';
import type { Lesson } from '../../lib/domain';
import { reviewContent } from '../../lib/editorial';

export function RevisionPreview({ lesson, revisionId, onClose }: { lesson: Lesson; revisionId: string; onClose: () => void }) {
  const issues=reviewContent([lesson]);
  return <section className="card editor" aria-label="Nội dung phiên bản để duyệt">
    <button className="text-button" onClick={onClose}>Đóng nội dung xem duyệt</button>
    <p className="tiny muted">Phiên bản: {revisionId}</p>
    <h2>{lesson.title}</h2><p>{lesson.subtitle}</p>
    <div className="notice">Bản xem dành cho ban biên tập, bao gồm đáp án. Việc mở bản xem không tự xác nhận chất lượng hay xuất bản bài.</div>
    {issues.length>0&&<div className="notice"><strong>Các mục cần rà soát ({issues.length})</strong><ul>{issues.map((issue,i)=><li key={i}>{issue.message} <span className="tiny muted">({issue.path})</span></li>)}</ul></div>}
    <h3>Mục tiêu</h3><ul>{lesson.objectives.map((item,i)=><li key={i}>{item}</li>)}</ul>
    <p style={{whiteSpace:'pre-wrap'}}>{lesson.introduction}</p>
    <h3>Từ vựng</h3>{lesson.vocabulary.map(w=><article className="editor-row" key={w.id}>
      <strong lang="zh-CN">{w.hanzi}</strong><p>{w.pinyin} · {w.meaning}</p>
      <p lang="zh-CN">{w.example}</p><p>{w.examplePinyin}</p><p>{w.exampleMeaning}</p>
    </article>)}
    <h3>Ngữ pháp</h3>{lesson.grammar.map((g,i)=><article className="editor-row" key={i}><h4>{g.title}</h4><p>{g.explanation}</p><p lang="zh-CN">{g.example}</p><p>{g.translation}</p></article>)}
    <h3>Hội thoại</h3>{lesson.dialogue.map((d,i)=><article key={i}><strong>{d.speaker}</strong><p lang="zh-CN">{d.hanzi}</p><p>{d.pinyin}</p><p>{d.meaning}</p></article>)}
    <h3>Bài tập và lời giải</h3>{lesson.exercises.map((q,i)=><article className="editor-row" key={q.id}>
      <h4>{i+1}. {q.prompt}</h4><p className="tiny muted">{q.id} · {q.type}</p>
      {'options' in q&&<ul>{q.options.map((o,n)=><li key={n}>{o}</li>)}</ul>}
      <p><strong>Đáp án:</strong> {q.answer}</p>{q.type==='input'&&q.alternatives.length>0&&<p>Chấp nhận thêm: {q.alternatives.join(' / ')}</p>}<p>{q.explanation}</p>
    </article>)}
    <h3>Tổng kết</h3><p>{lesson.summary}</p><p>Nguồn / giấy phép: {lesson.provenance}</p><p>Chuẩn ánh xạ: {lesson.standard}</p>
  </section>;
}
