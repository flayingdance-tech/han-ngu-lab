import { seedLessons } from '../content/lessons';
import { lessonSchema } from '../lib/domain';
import { reviewContent } from '../lib/editorial';
import { writeFileSync, mkdirSync } from 'node:fs';
for (const lesson of seedLessons) lessonSchema.parse(lesson);
console.log(JSON.stringify({ lessons: seedLessons.length, levels: [...new Set(seedLessons.map(x => x.level))], uniqueVocabulary: new Set(seedLessons.flatMap(x => x.vocabulary.map(w => w.id))).size, questions: seedLessons.reduce((n,l) => n+l.exercises.length, 0), humanReviewed: seedLessons.filter(x => x.humanReviewed).length, fullHSK4Coverage: false }, null, 2));
const issues=reviewContent(seedLessons);
if(process.argv.includes('--report')){
  mkdirSync('docs/reports',{recursive:true});
  writeFileSync('docs/reports/content-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'Local draft inventory; not a complete HSK coverage matrix',fullHSK4Coverage:false,lessons:seedLessons.map(l=>({id:l.id,level:l.level,title:l.title,objectives:l.objectives,words:l.vocabulary.length,questions:l.exercises.length,humanReviewed:l.humanReviewed})),issues},null,2));
}
console.log(JSON.stringify({editorialIssues:issues.length,byCode:Object.fromEntries([...new Set(issues.map(i=>i.code))].map(code=>[code,issues.filter(i=>i.code===code).length]))},null,2));
