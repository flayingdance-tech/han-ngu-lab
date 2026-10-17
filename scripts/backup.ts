import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { openDatabase } from '../server/database';
import { exportDatabase, restoreDatabase, encryptBackup, decryptBackup } from '../server/backup';
const [action,file,target]=process.argv.slice(2);
const passphrase=process.env.HNL_BACKUP_PASSWORD;
if(!passphrase||passphrase.length<16)throw new Error('Cần HNL_BACKUP_PASSWORD (ít nhất 16 ký tự), không truyền mật khẩu qua đối số lệnh.');
if(!file||!['export','restore'].includes(action))throw new Error('Dùng: npm run backup -- export <file> hoặc restore <file> <db-moi>.');
if(action==='export'){
  const source=process.env.DATABASE_PATH??'.local/hanngulab.sqlite';
  if(!existsSync(source))throw new Error('Không tìm thấy database nguồn.');
  const db=openDatabase(source);
  try{const output=resolve(file);mkdirSync(dirname(output),{recursive:true});writeFileSync(output,encryptBackup(exportDatabase(db),passphrase),{flag:'wx',mode:0o600});console.log('Đã tạo backup mã hóa. Hãy lưu bản này ngoài nhà cung cấp đang chạy.');}finally{db.close();}
}else{
  if(!target||existsSync(target))throw new Error('Đích restore phải là file database mới chưa tồn tại.');
  const data=decryptBackup(readFileSync(resolve(file),'utf8'),passphrase);
  const db=openDatabase(resolve(target));
  try{restoreDatabase(db,data);console.log('Đã restore database. Session cũ không được khôi phục; cần đăng nhập lại.');}finally{db.close();}
}
