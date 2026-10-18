'use client';
import type { Exercise } from '../../lib/domain';

export function ExerciseEditor({question,onChange,onRemove}:{question:Exercise;onChange:(q:Exercise)=>void;onRemove:()=>void}) {
  function changeType(type:Exercise['type']) {
    const base={id:question.id,prompt:question.prompt,answer:question.answer,explanation:question.explanation};
    if(type==='input')onChange({...base,type,alternatives:question.type==='input'?question.alternatives:[]});
    else onChange({...base,type,options:'options' in question?question.options:['','']});
  }
  return <fieldset className="editor-row"><legend>Câu hỏi {question.id}</legend>
    <label>ID<input value={question.id} onChange={e=>onChange({...question,id:e.target.value})}/></label>
    <label>Loại bài tập<select value={question.type} onChange={e=>changeType(e.target.value as Exercise['type'])}><option value="choice">Chọn đáp án</option><option value="input">Nhập đáp án</option><option value="order">Sắp xếp câu</option></select></label>
    <label>Câu hỏi<textarea value={question.prompt} onChange={e=>onChange({...question,prompt:e.target.value})}/></label>
    {'options' in question&&<label>{question.type==='order'?'Các mảnh câu (mỗi dòng một mục)':'Lựa chọn (mỗi dòng một mục)'}<textarea value={question.options.join('\n')} onChange={e=>onChange({...question,options:e.target.value.split('\n')})}/></label>}
    <label>Đáp án<input value={question.answer} onChange={e=>onChange({...question,answer:e.target.value})}/></label>
    {question.type==='input'&&<label>Đáp án khác được chấp nhận (mỗi dòng một mục)<textarea value={question.alternatives.join('\n')} onChange={e=>onChange({...question,alternatives:e.target.value?e.target.value.split('\n'):[]})}/></label>}
    <label>Giải thích<textarea value={question.explanation} onChange={e=>onChange({...question,explanation:e.target.value})}/></label>
    <button className="text-button danger" type="button" onClick={onRemove}>Xóa câu hỏi</button>
  </fieldset>;
}
