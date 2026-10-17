# Hán Ngữ Lab — 汉语实验室

Website học tiếng Trung cho người Việt từ 18 tuổi. Phạm vi đích nhập môn–HSK 4; hiện là bản local đang phát triển, chưa có giáo trình đầy đủ hoặc triển khai production.

## Chạy trên Windows

Node.js 24+ và npm. Từ PowerShell:

```powershell
Set-Location -LiteralPath 'D:\Hán Ngữ Lab'
npm.cmd ci
npm.cmd run dev
```

Mở http://localhost:3000. API chạy loopback cổng 3001. SQLite lưu tại `.local/hanngulab.sqlite` (không đưa lên Git). Bản local hiển thị liên kết xác minh/khôi phục ngay trong form, **không gửi email thật**. Chỉ tạo tài khoản thử nghiệm.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run content:check
npm.cmd run build
npm.cmd run test:e2e
```

`npm run build` xuất frontend vào `out/`; API riêng xử lý auth, CMS và chấm điểm. Để kiểm tra bản build trên một origin:

```powershell
$env:APP_ORIGIN='http://127.0.0.1:3001'
npm.cmd start
```

## Quyền biên tập

Đăng ký, xác minh một tài khoản local trước. Người vận hành có quyền máy chủ cấp role bằng CLI; không có nút đăng ký admin hoặc mật khẩu admin mặc định:

```powershell
npm.cmd run admin -- --email=editor@example.test --role=editor
```

Role: learner/editor/reviewer/admin/super_admin. Đăng nhập lại sau đổi role. Dùng tài khoản reviewer khác tác giả để phê duyệt/xuất bản. Hướng dẫn tại `docs/CMS_GUIDE.md`.

## Trạng thái thật

- Có source frontend/API/SQLite, bài thử nghiệm và bộ kiểm thử; xem báo cáo test để biết phần đã chạy thực tế.
- Học liệu seed chưa duyệt chuyên môn và chưa phủ HSK 4; không công bố là giáo trình hoàn chỉnh.
- Audio hiện dùng TTS thiết bị khi có giọng tiếng Trung, chưa có bộ audio được duyệt.
- Production bị chặn khi chưa có HTTPS và email adapter; SQLite local không được đưa vào đĩa tạm Lambda.
- Chưa có AWS credentials hoặc xác minh credit/expiry; chưa triển khai hoặc kích hoạt AI.
- Backup mã hóa và restore được cung cấp bằng CLI; cần đích ngoài AWS và lịch chạy thật để thành backup vận hành.

Đọc `docs/PROJECT_STATUS.md` và `docs/NEXT_STEPS.md` trước khi tiếp tục phát triển.
