import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { openDatabase, transaction } from '../server/database';
import { roles } from '../lib/domain';
const args = Object.fromEntries(process.argv.slice(2).map(x => { const i=x.indexOf('='); return [x.slice(0,i),x.slice(i+1)]; }));
const email=z.email().parse(args['--email']).toLowerCase(), role=z.enum(roles).parse(args['--role']);
const db=openDatabase(process.env.DATABASE_PATH??'.local/hanngulab.sqlite');
try {
  const user=db.prepare('SELECT id,verified FROM users WHERE email=?').get(email) as {id:string;verified:number}|undefined;
  if(!user?.verified)throw new Error('Tài khoản phải tồn tại và đã xác minh email. Không tạo mật khẩu quản trị mặc định.');
  transaction(db,()=>{
    db.prepare('UPDATE users SET role=? WHERE id=?').run(role,user.id);
    db.prepare('DELETE FROM sessions WHERE user_id=?').run(user.id);
    db.prepare('INSERT INTO audit VALUES (?,?,?,?,?,?)').run(randomUUID(),'local-operator','role.grant',user.id,JSON.stringify({role}),Date.now());
  });
  console.log(`Đã cấp vai trò ${role}. Tài khoản cần đăng nhập lại.`);
}finally{db.close();}
