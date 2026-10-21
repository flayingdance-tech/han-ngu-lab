# Chuyển hostname sang DuckDNS

Canonical mới: **https://hanngulab.duckdns.org/**, Lightsail hiện có 54.253.61.113. Không thêm tài nguyên AWS/dịch vụ trả phí; giữ nguyên Amplify làm rollback. Tên DuckDNS phụ thuộc nhà cung cấp miễn phí, cần theo dõi quyền sở hữu/DNS; không cam kết SLA.

## Cấu hình và ranh giới tin cậy

- Caddy 2.11.7 tự cấp/gia hạn TLS khi A/AAAA đúng và cổng 80/443 truy cập được. Không DNS proxy, không DuckDNS token/DNS challenge plugin.
- Stage: hai hostname cùng frontend/API, APP_ORIGIN sslip.io cũ và APP_STAGING_ORIGIN DuckDNS chính xác. Sau gates: APP_ORIGIN DuckDNS; bỏ APP_STAGING_ORIGIN.
- SMTP/SES sender và mọi biến khác giữ nguyên byte. Thư xác minh/reset lấy origin từ request đã qua allowlist, dùng fragment, không query token; cookie Secure/HttpOnly/SameSite=Strict không có Domain, cần đăng nhập lại trên hostname mới.
- Caddyfile.production phục vụ DuckDNS trực tiếp. XFF luôn bị ghi đè bằng TCP peer, xóa các header IP khác; Express chỉ tin hop0 loopback, API không mở public. Không trusted_proxies toàn AWS/CDN.
- sslip.io dùng 302 DuckDNS + URI; /api và /api/* đi 302 tới endpoint 410 cố định, không forward Express. Amplify áp dụng cùng quy tắc302. Không cache redirect; Referrer-Policy no-referrer. Location không fragment nên trình duyệt kế thừa fragment của email cũ; kiểm tra thực tế cả verify/reset.
- Canonical HTML trỏ DuckDNS; API/client vẫn same-origin. amplify.yml giữ baseDirectory: .next.

## Quy trình đã chuẩn bị và rollback

1. Snapshot root700 tại /var/backups/han-ngu-lab-ops/domain-duck-20261021: env600, Caddy, GitHEAD, public symlink, digest các hàng SQLite. Chạy backup mã hóa và kiểm restore trước thay đổi; không xuất rawDB vào repo/public.
2. Caddy stage hai host, validate/reload; restart API sau set đúng hai origin. Xác minh TLS thật, health, auth/SES/CMS, nội dung/Range, hai mạng và header giả. Không redirect sớm.
3. Build chỉ metadata, kiểm lint/tests/typecheck/build/smoke, quét secret; triển khai public static release riêng, giữ release cũ. Cutover có trap rollback config khi lỗi critical.
4. Sau gates đổi env canonical, Caddy final; cập nhật đúng customRules Amplify qua CLI temporary session. Snapshot rules trước và đối chiếu sau; giữ customHeaders/resources. Kiểm actual302/410, email fragments, hai mạng lại sau cutover.
5. Rollback cấu hình trên server: sudo bash /var/backups/han-ngu-lab-ops/domain-duck-20261021/domain.sh rollback. Phục hồi APP_ORIGIN cũ, frontend symlink cũ, sslip full site và DuckDNS302 về sslip. Không restore/đổi/truncate SQLite. Đối chiếu health + các hàng gốc vẫn hiện diện.
6. Nếu đã đổi Amplify: phục hồi customRules từ snapshot riêng amplify-before.json; không khôi phục kiểu rewrite200/API bypass. Không cần sửa IAM/SES/SMTP.
7. Thử rollback có kiểm soát trước cutover rồi restage; kiểm progress/session SQLite qua restart. Sau cutover gỡ probe, thu hồi quyền/session/token fixture kiểm tra riêng, backup mới và sync offsite đã mã hóa. Không xóa tài khoản hoặc dữ liệu người dùng cũ.

## Bằng chứng triển khai

Đang thực hiện. Trạng thái cuối và SHA/CI được ghi trong PROJECT_STATUS, NEXT_STEPS, TASKS, WORK_LOG và báo cáo production. Không coi bước chuẩn bị là nghiệm thu.

Stage đã xác minh: DNS1.1.1.1 đúngIP; HTTPS200/healthlive; SES thật gửi/nhận verify và reset trên DuckDNS, token một lần, phiên cũ hết hiệu lực sau reset; cookie bảo mật/CSRF; CMS16bài152media, progress/idempotency. 304MP3 khớpSHA, 14podcastRange206, 7tập43đoạn phụ đề. Hai mạng Windows và AWS cho IP/bucket khác nhau, header giả không đổi identity. Chưa cutover ở checkpoint này.

Lỗi kiểm thử tránh lặp: RateLimit partition key nằm trong header RateLimit-Policy dạng pk=:...:, không nằm trong RateLimit. Đã sửa bộ kiểm chứng riêng; không sửa rate limiter ứng dụng để làm test qua.

Nguồn: [Caddy Automatic HTTPS](https://caddyserver.com/docs/automatic-https), [RFC9110 Location/fragment](https://www.rfc-editor.org/rfc/rfc9110.html#section-10.2.2).
