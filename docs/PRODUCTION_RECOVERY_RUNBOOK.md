# Khôi phục nội dung và triển khai

Không dùng database local để thay DB production. Không bật `LOCAL_PREVIEW`, không đổi SMTP credentials hoặc `amplify.yml`.

## Script duy nhất trên Lightsail

`scripts/deploy-production.sh` chạy bằng user `ubuntu`, nhận **full SHA đã qua CI**. Đúng checkout `/home/ubuntu/han-ngu-lab`, nhánh `main`, origin Private đã xác minh. Script chỉ fast-forward, dừng nếu có tracked changes, remote khác SHA, cấu hình Amplify khác hoặc DB/service/env khác dự kiến.

Khi bản script chưa có ở checkout cũ: fetch `origin/main`, lấy script từ chính SHA đã xác minh vào file `mktemp`, rồi chạy `bash <file-tạm> <FULL_SHA>`. Không tải script từ URL lạ; không copy placeholder SHA rồi chạy. Đối chiếu CI trước khi thực hiện.

Quy trình: backup online WAL → mã hóa → giải mã sang file riêng → integrity/foreign-key/inventory check → stop API → git fast-forward → cài dependency production → import trong transaction → start API → live health → timer backup. Không cần build Next.js trên VM 2 GB; frontend build ở CI/Amplify.

Importer chỉ thêm nguồn `content/lessons.ts`, mặc định draft, không sao chép fixtures, accounts hoặc progress. Mọi bảng người dùng được fingerprint trong cùng transaction; lệch sẽ rollback. Chạy lại không tạo trùng. Chỉ các ID được owner cho phép trong `content/release-policy.json` mới được phục vụ beta; nhãn chưa duyệt giữ nguyên.

## Backup

- Encrypted DB và manifest: `/var/backups/han-ngu-lab`, mode700/600; full DB chứa cả password hash/session/token, không được Git hoặc public.
- Key: `/etc/han-ngu-lab/backup.key`, đúng32byte, mode600; **không in key**, không chat hoặc commit. Cất key ở nơi an toàn riêng với backup.
- Root-owned runtime: `/usr/local/lib/han-ngu-lab-backup`, tránh root timer nạp npm packages do user ứng dụng ghi được.
- Timer `han-ngu-lab-backup.timer`: hằng ngày03:15UTC, trễ ngẫu nhiên tối đa30phút; tương ứng10:15–10:45 UTC+07. Retention14ngày, Persistent=true.
- `sudo systemctl start han-ngu-lab-backup.service` tạo một backup và tự kiểm restore; `sudo systemctl list-timers han-ngu-lab-backup.timer --no-pager` xem lịch. Chỉ xem kết quả metadata; không dump env hoặc DB rows.
- Copy **encrypted backups** ra khỏi VM/AWS và lưu key riêng. Nhiệm vụ chưa coi offsite hoàn tất khi mới có bản trên cùng đĩa. Không upload key/DB qua dịch vụ chưa được chủ dự án cấp quyền.

## Rollback

Script lưu SHA cũ; nếu sau thay mã gặp lỗi thì cố gắng chuyển checkout sang detached SHA cũ, cài lại dependency và start service. Không xóa lịch sử `main`, không reset/force, không restore đè database. Những draft/revision thêm vào có thể giữ nguyên, user data không bị thay. Nếu rollback cũng thất bại, báo SHA cũ và kiểm health trước thao tác tiếp.

Không xóa `-wal`/`-shm`, không copy file SQLite đang chạy bằng `cp`, không dùng DB test làm bản restore. Phục hồi dữ liệu thật là thao tác riêng cần quyết định của chủ dự án; bản backup được thử restore sang file riêng là bằng chứng đọc được, không tự chứng minh đã diễn tập chuyển nền tảng hoàn chỉnh.

## Nghiệm thu

Đối chiếu SHA, service active, loopback3001, healthlive, số liệu DB trước/sau, catalog/lesson đã cho phép, podcast metadata không lộ authoring, MP3checksum+Range206, auth401/CSRF và học liệu không lộ đáp án. Test thật có người dùng phải dùng tài khoản do chủ dự án kiểm soát; không lấy password cũ hoặc reset học viên để thử.

Nếu release policy còn chờ, kết quả đúng là **16 draft trong CMS và catalog public rỗng**; không báo đã khôi phục học công khai. Nhạc piano chưa rõ quyền không được public, không tự đổi giọng/nhạc để lách.
