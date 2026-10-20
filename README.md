# Hán Ngữ Lab — 汉语实验室

Website học tiếng Trung dành cho người Việt từ18tuổi. Đây là repo frontend/API hiện có; không tự triển khai AWS khi clone hoặc chạy CI.

## Kiến trúc và runtime

- Node.js24 (đã kiểm với24.15.0), npm11, package-lock.json. Dùng npm ci để cài đúng lockfile.
- Next.js16.4.2 / React19.3.1 / TypeScript6: frontend client, output export vào out/.
- Express5 chạy riêng: auth, CMS, dữ liệu người học, tiến độ và các API. npm start chạy API, không phải next start.
- SQLite qua node:sqlite trên đĩa bền vững; database/tài khoản/backup không thuộc Git.
- Âm thanh được tạo offline thành file dùng lại; không cần model TTS trên máy chủ web. Không tự tạo lại media khi build.

## Chạy local trên Windows

```powershell
Set-Location -LiteralPath 'D:\Hán Ngữ Lab'
npm.cmd ci
npm.cmd run dev
```

Web http://localhost:3000/, API loopback3001, DB .local/hanngulab.sqlite. Preview chỉ bind loopback. Email local được mô phỏng bằng liên kết trong form; không gửi email thật. Không đưa preview lên Internet.

.env.example mô tả biến được API đọc từ môi trường process. API không tự load .env; cấu hình bằng môi trường shell/process manager. Next.js có cơ chế đọc .env riêng. Không ghi AWS key hoặc mật khẩu vào biến NEXT_PUBLIC_*.

Production email đã có adapter Amazon SES SMTP Sydney/587 với STARTTLS bắt buộc. Cấu hình server bằng `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL` và `APP_ORIGIN` HTTPS; thiếu cấu hình sẽ bị chặn khởi động. Xem [runbook SES/Lightsail](docs/SES_SMTP_LIGHTSAIL.md) để cập nhật qua Git pull/systemd và nghiệm thu gửi thật. Preview vẫn mô phỏng email; kiểm thử dùng transport giả lập, không cần credential.

## Kiểm tra kỹ thuật

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd run smoke:production
```

Smoke production dùng DB tạm và email transport kiểm thử, không gửi mail. Nó kiểm tra HTTP listener, auth/private paths và việc entry production từ chối khi thiếu email thật; không thay thế nghiệm thu TLS/AWS. Không chạy build đồng thời Playwright vì dùng chung .next.

Để xem bản export local trên một origin, dùng cổng khác nếu API dev3001 đang chạy:

```powershell
$env:APP_ORIGIN='http://127.0.0.1:3002'
$env:PORT='3002'
npm.cmd start
```

Đây vẫn là local preview khi NODE_ENV không phải production; không phải cách chạy production công khai.

## Quản trị và dữ liệu

Không có admin/password mặc định hoặc tự đăng ký admin. Tài khoản đã xác minh được người vận hành cấp role qua CLI:

```powershell
npm.cmd run admin -- --email=editor@example.test --role=editor
```

Đổi role hủy session của tài khoản đó. Quyền kiểm tra ở server. Xem docs/CMS_GUIDE.md.

Backup DB mã hóa dùng HNL_BACKUP_PASSWORD từ môi trường, không truyền password qua đối số lệnh. Xem docs/RESTORE_RUNBOOK.md. Khôi phục vào DB mới, không ghi đè tài khoản/tiến độ hiện có; session cũ không được khôi phục.

## GitHub và AWS

Repo đích phải private. Chưa cấu hình remote/push; workflow .github/workflows/validate.yml chỉ kiểm tra, không deploy và không dùng AWS credentials. Quét secret dùng .gitleaks.toml, không bỏ kiểm tra toàn bộ file test.

amplify.yml chuẩn bị frontend tĩnh với artifact out/, yêu cầu Amplify platform WEB. Không dùng nó để chạy Express hoặc lưu SQLite trong build/Lambda. Không chuyển sang WEB_COMPUTE chỉ vì framework là Next.js.

Adapter SES SMTP đã nối vào server/index.ts; còn cần cấu hình riêng và nghiệm thu gửi thật trên máy chủ. API HTTPS/database persistent/reverse proxy /api chưa được kiểm chứng từ phiên này. Không bỏ guard hoặc bật LOCAL_PREVIEW để vượt các điểm chặn này.

Đọc PRE_GITHUB_AUDIT.md và docs/DEPLOYMENT.md trước xuất bản/triển khai. Không chạy npm audit fix --force để tự hạ major version. Chi phí/credit AWS cần kiểm tra trong Console; báo động ngân sách không phải giới hạn chi tuyệt đối.

Hồ sơ tiếp tục: docs/PROJECT_STATUS.md, docs/NEXT_STEPS.md và docs/WORK_LOG.md. Phạm vi pre-GitHub không kiểm tra lại học liệu, chất lượng media hay responsive UI đã được chủ dự án duyệt.
