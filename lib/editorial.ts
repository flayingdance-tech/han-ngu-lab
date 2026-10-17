import type { Lesson } from './domain';

export type EditorialIssue = { lessonId: string; path: string; code: string; message: string };
// These checks identify missing evidence, not linguistic correctness or human approval.
export function reviewContent(lessons: Lesson[]): EditorialIssue[] {
  const issues: EditorialIssue[] = [];
  const ids = new Set<string>();
  for (const lesson of lessons) {
    const add = (path: string, code: string, message: string) => issues.push({ lessonId: lesson.id, path, code, message });
    if (ids.has(lesson.id)) add('id','duplicate-lesson','ID bài bị trùng.');
    ids.add(lesson.id);
    if (!lesson.humanReviewed) add('humanReviewed','human-review-pending','Chưa có xác nhận duyệt chuyên môn.');
    if (lesson.standard.includes('DRAFT') || lesson.standard.includes('chưa xác minh')) add('standard','mapping-pending','Chưa có ánh xạ chuẩn HSK được xác minh.');
    lesson.vocabulary.forEach((w,i)=>{
      if (!w.example) add(`vocabulary.${i}.example`,'example-missing',`Cần ví dụ cho ${w.hanzi}.`);
      else {
        if (!w.example.includes(w.hanzi)) add(`vocabulary.${i}.example`,'example-word-mismatch',`Ví dụ chưa chứa ${w.hanzi}; cần kiểm tra thủ công.`);
        if (!w.examplePinyin) add(`vocabulary.${i}.examplePinyin`,'example-pinyin-missing',`Thiếu Pinyin ví dụ cho ${w.hanzi}.`);
        if (!w.exampleMeaning) add(`vocabulary.${i}.exampleMeaning`,'example-meaning-missing',`Thiếu nghĩa ví dụ cho ${w.hanzi}.`);
      }
    });
  }
  return issues;
}
