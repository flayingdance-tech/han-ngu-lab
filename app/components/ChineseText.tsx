export function ChineseText({text}:{text:string}){
  return <>{text.split(/([\p{Script=Han}]+)/u).map((part,i)=>/\p{Script=Han}/u.test(part)?<span key={i} className="zh-inline" lang="zh-CN">{part}</span>:part)}</>;
}
