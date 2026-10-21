# Khắc phục đăng ký, xác minh và Caddy — MAIL-02

Cập nhật REC-07, 21/10/2026: website/API chính tại **https://54-253-61-113.sslip.io/** (hostname tạm). Amplify cũ redirect302, API cũ retired410; không còn external rewrite làm ingress. Xem [kết quả và rollback REC-07](REC07_DIRECT_INGRESS_RESULT.md). Các ghi chú chưa nghiệm thu IP/SES bên dưới là lịch sử đã được thay thế.


Ngày21/10/2026, Asia/Bangkok (+07). Bản sửa cục bộ, chưa push và chưa cập nhật backend. Không cần xóa tài khoản cũ, reset SQLite hoặc đổi SMTP credentials.

## Nguyên nhân đã xác minh

- Mã cũ thiếu nút gửi lại dù API đã có; register409 và lỗi SMTP503 theo từng recipient làm lộ email tồn tại. Chưa có cooldown theo địa chỉ.
- Express mặc định không tin proxy nhưng Caddy gửi X-Forwarded-For, phù hợp lỗi ERR_ERL_UNEXPECTED_X_FORWARDED_FOR mà chủ dự án báo. Code mới chỉ tin socket127.0.0.1/::1/IPv4-mapped127.0.0.1 ở hop0. Không tin toàn bộ loopback subnet, không tin true hoặc mọi hop.
- Đã đọc AWS Console SES Account dashboard Sydney trong phiên này: **Sandbox**, Healthy, quota200/24giờ, max1email/giây. Không sửa account/IAM/quota. SMTP auth thành công không cho phép gửi tới mọi Gmail; sandbox yêu cầu cả sender và recipient Verified tại đúng region (hoặc SES simulator).

## Hành vi mới

1. Màn đăng nhập/đăng ký có **Gửi lại email xác minh**. Chỉ nhập email; giữ email khi chuyển màn, countdown và khóa nút gửi, không đòi đăng ký lại hoặc xóa tài khoản. Có thể đăng nhập khi đã xác minh.
2. Register mới/trùng đều201 với cùng body chung cho dữ liệu hợp lệ. Hash password ở cả hai trường hợp; tài khoản/password/consent cũ được giữ nguyên. Đăng ký lại không tự xoay link tài khoản cũ; dùng nút gửi lại.
3. Resend và forgot luôn trả200 tiếp nhận chung nếu không chạm giới hạn, dù email không tồn tại/đã verified/suspended hoặc SMTP thất bại. Chỉ resend tài khoản active chưa verified; reset không bỏ bước verify. Không xác nhận riêng một địa chỉ đã được gửi thành công, vì điều đó cho phép dò tài khoản.
4. Mỗi địa chỉ chuẩn hóa và băm: cách yêu cầu60giây, tối đa5yêu cầu/giờ dùng chung ba endpoint, áp dụng cả email không tồn tại. API/auth IP limits180/phút và20/15phút vẫn giữ. 429 có Retry-After; 503 chỉ phản ánh quá tải dịch vụ chung. Lỗi mạng/503 hiển thị rõ thông báo thử lại.
5. Gửi ngoài thời gian phản hồi HTTP, tối đa20tác vụ trong RAM; thực gửi tuần tự cách ít nhất1.1giây giữa các lần bắt đầu. Không tự retry SMTP. Hạn mức này cho một process, không phải giới hạn chung nhiều replica hoặc tất cả công cụ cùng dùng SES.
6. Tác vụ có thể mất khi crash/restart; không có durable outbox. SIGTERM thông thường đợi mail đang chờ trước đóng DB, vẫn chịu TimeoutStopSec của systemd. Người dùng có thể xin lại sau cooldown. Không quảng cáo bảo đảm đến inbox.
7. SMTP chỉ log một mã cố định: identity_unverified/authentication_failed/throttled/connection_failed/delivery_failed (capacity_reached khi chạm giới hạn tác vụ). Không lưu raw provider response/cause/email/token/password trong log. Token vẫn SHA trong DB,30phút/một lần; cấp link mới thay link cũ. Nếu gửi link mới lỗi, yêu cầu lại sau khi cấu hình được khắc phục.

## Cập nhật sau khi chủ dự án duyệt push

1. Chờ commit/CI đã duyệt; giữ `amplify.yml` **baseDirectory:.next**. Frontend auto-deploy không tự cập nhật backend Lightsail. Runbook này không yêu cầu tạo thêm tài nguyên AWS.
2. Trên Lightsail, kiểm branch/main, origin, tree sạch và SHA hiện hành. Giữ DATABASE_PATH đúng database cũ và env hiện hành. Backup theo [runbook SES](SES_SMTP_LIGHTSAIL.md); không copy SQLite đang WAL một cách thiếu nhất quán. Không chạy seed/admin/reset/restore vào DB đang dùng.
3. Dùng `git pull --ff-only origin main`, đối chiếu SHA đã duyệt. Nếu diverged/conflict, dừng; không reset --hard/force. Trong cửa sổ bảo trì, dừng service hiện có, npm ci --include=dev, lint/test/build/typecheck/smoke theo runbook SES, rồi restart đúng service bằng systemd. Không echo/cat tệp env ra biên bản và không đổi credentials nếu không cần.
4. HOST phải127.0.0.1 (hoặc loopback tương đương), Caddy upstream127.0.0.1:3001; code mới từ chối bind public. Không mở port3001 ra Internet. Caddy mặc định bỏ X-Forwarded-For từ client và tự tạo header upstream; giữ cơ chế chống spoof đó.
5. Nếu đường thật là Amplify/CloudFront → Caddy → Express, **chưa có Caddyfile thực tế trong repo để xác minh IP cuối**. Không tự bật trusted_proxies toàn mạng hoặc tin header client. Cần cấu hình Caddy chỉ tin CDN/proxy CIDR đã xác minh và xuất một IP client đã chuẩn hóa; Express chỉ tin đúng một hop Caddy. Nếu chưa có trust chain được xác minh, limiter có thể gộp theo IP CDN. Kiểm tra với hai client thật và header giả trước nghiệm thu; không nới limiter để che lỗi.
6. Caddyfile nếu cần điều chỉnh phải được kiểm riêng (không tự ghi đè): `sudo caddy validate --config /etc/caddy/Caddyfile`. Bản sửa mã này không sửa cấu hình Caddy/cloud đang chạy.
7. Không request production access, thêm verified identity hay thay policy từ phiên này. Khi vẫn Sandbox, dùng recipient đã Verified Sydney để nghiệm thu. Để nhận đăng ký Gmail bất kỳ cần AWS cấp production access; bản sửa ứng dụng không vượt được giới hạn này.

## Nghiệm thu sau cập nhật

- HTTPS health mode live; tài khoản cũ đúng password nhưng chưa verified thấy hướng dẫn và nút resend. Gửi lại, nhận thư ở recipient đã Verified, mở link mới, login được cùng ID/password, link cũ và link dùng lại bị từ chối.
- Thử forgot/reset, xác nhận session cũ bị thu hồi và reset không tự verify. Token hết30phút bị từ chối. Không dùng dữ liệu học viên thật để thử đổi mật khẩu.
- Địa chỉ không có/verified/suspended phải có cùng phản hồi public và cooldown. Lỗi SMTP không tạo khác biệt body/status; log chỉ có mã cố định. Không soạn report chứa token hay địa chỉ thật.
- Kiểm 429/Retry-After và IP hai client qua Caddy; không còn ERR_ERL_UNEXPECTED_X_FORWARDED_FOR hoặc cảnh báo trust proxy=true. Kiểm header giả không đổi IP đã xác minh. Kiểm deploy backend và frontend cùng phiên bản API phản hồi chung.

Nguồn chính thức: [AWS SES sandbox/SMTP errors](https://docs.aws.amazon.com/ses/latest/dg/troubleshoot-smtp.html), [Express trust proxy](https://expressjs.com/en/guide/behind-proxies.html), [Caddy reverse_proxy forwarded headers](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy). Không coi kết quả kiểm thử giả lập là bằng chứng gửi thật sau cập nhật.
