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

Đã hoàn tất chuyển production sau staging và diễn tập rollback. Xem bằng chứng DOMAIN-01 DONE bên dưới; trạng thái cũ trong lịch sử công việc là checkpoint theo thời gian.

Lỗi kiểm thử tránh lặp: RateLimit partition key nằm trong header RateLimit-Policy dạng pk=:...:, không nằm trong RateLimit. Đã sửa bộ kiểm chứng riêng; không sửa rate limiter ứng dụng để làm test qua.

Nguồn: [Caddy Automatic HTTPS](https://caddyserver.com/docs/automatic-https), [RFC9110 Location/fragment](https://www.rfc-editor.org/rfc/rfc9110.html#section-10.2.2).

## DOMAIN-01 DONE — DuckDNS production — 2026-10-21T22:35:07.5066009+07:00

- Website chính: **https://hanngulab.duckdns.org/**. DNS A qua1.1.1.1 đúng54.253.61.113; TLS Let's Encrypt YE2/SAN đúng, hạn19/01/2027, Caddy tự gia hạn. Không thêm tài nguyên trả phí, CDN, DNS proxy hoặc quyền IAM.
- Frontend release **3b39c116bbcc9e455fb14f5d45090d9df936fb59**; [CI39625805868 SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39625805868). Lint,51/51tests,build,typecheck,smoke đều đạt; Gitleaks0finding. amplify.yml giữ baseDirectory:.next. Commit bàn giao tiếp theo chỉ sửa tài liệu.
- Đã staging hai hostname trước chuyển. APP_ORIGIN nay chỉ DuckDNS, bỏ APP_STAGING_ORIGIN; mọi biến khác gồm SMTP giữ nguyên byte. Đăng ký/SES thật/xác minh/reset một lần/login/cookie Secure,HttpOnly,Strict/CSRF/AdminCMS và tiến độ qua restart đều đạt. SES gửi đúng link DuckDNS; không ghi email/token/password vào log.
- 16bài/80câu,145âmA,7podcast/43đoạn;304MP3 khớpSHA gốc. 14podcast và cặp audio thường/chậm Range206. Mobile390×844 không tràn ngang; podcast phát hết87.06s, ready4/errornull. Không sửa UI, giọng, nhạc hoặc học liệu.
- REC07 vẫn DONE: ghi đè XFF bằng TCP peer, xóa headerIP không tin cậy; Express chỉ tin hop0 loopback. Hai mạng Windows/AWS trước và sau cutover có clienthash và partition key rate-limit khác nhau; headergiả không đổi danh tính, chỉ1forwardedhop. Bằng chứng cuối22:30(+07): Windows d87c827817b834e2a6f407ac/AWS dd9f5c07479bb481865e11fe. Probe đã gỡ và dừng.
- sslip/Amplify chuyển302 tới DuckDNS, giữ URI; APIcũ302 tới endpoint410 cố định, không proxyExpress. POST từ origincũ/giả403. Browser kiểm cả2host: #reset mở form mới, #verify tới verifier mới; fragment được consume/xóa. Caddy khớp template; Amplify rules readback đúng, giữ headers/platform/resources. Bản rollback Amplify gần nhất đọc được: Deployment11 SUCCEED, SHA b9d8463; không ép build khi chỉ đổi302.
- Đã thử rollback cấu hình trước cutover: sslip200/Duck302 về sslip, rồi restage. Không restore SQLite; session/progress vẫn còn. Digest toàn bộ hàng gốc14bảng, integrity/FK đạt. Snapshot rootprivate /var/backups/han-ngu-lab-ops/domain-duck-20261021; giữ releasecũ và snapshot rules riêng. Fixture kiểm tra đã hạ quyền/disabled/thu hồi session-token; không xóa tài khoản cũ.
- Backup sau cleanup **20261021T153300Z-fa88e3dc.sqlite.enc**, SHA256 **05c284866c31ba32b92a3ca10386ab19628302afd9218a2b53645ca62b05160b**; serviceSUCCESS/exit0. Sync ngoài máy chủ22:33(+07), giải mã/restore/integrity/FK/inventory đạt. Timer và WindowsScheduledTask cũ giữ nguyên; PC cần bật/login/Internet.
- Lỗi chuẩn bị đã chặn trước cutover: bundle tạo refHEAD phải fetchHEAD; Next chuẩn hóa canonical bỏ slash cuối; partition key nằm trong RateLimit-Policy dạng pk=:...:. Đã sửa helper riêng, không giảm bảo mật để vượt test. Tài liệu chi tiết docs/DOMAIN_MIGRATION.md.
- Còn giới hạn vận hành: hostname miễn phí phụ thuộc DuckDNS, một VM, limiterRAM reset khi restart/NAT dùng chung; cần theo dõi credit/traffic. Nhãn beta chưa duyệt giữ nguyên, không cam kết hoàn chỉnhHSK4. Không đổi SES/IAM/SMTP/database/media.
