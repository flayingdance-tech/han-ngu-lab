# SES SMTP và cập nhật Lightsail

Ngày 21/10/2026 (+07). Đây là runbook chuẩn bị, chưa thực thi trên Lightsail, chưa xác minh credentials hoặc gửi thư thật. Không tạo tài nguyên AWS. Chỉ push sau xác nhận mới của chủ dự án.

Cập nhật MAIL-02: đọc [bản sửa xác minh/Caddy](AUTH_EMAIL_RECOVERY.md) trước triển khai. SES Sydney đã được đọc trực tiếp trong Console và vẫn Sandbox (200 email/ngày, 1/giây). Tình trạng Lightsail/HTTPS/gửi thử thật do chủ dự án cung cấp; phiên sửa này không ghi lên máy chủ.

## Cấu hình đã tích hợp

- `server/index.ts` tạo adapter trước khi mở database khi `LOCAL_PREVIEW=false` hoặc `NODE_ENV=production`. Thiếu cấu hình hợp lệ thì tiến trình từ chối khởi động. Preview loopback vẫn chỉ mô phỏng mail.
- Nodemailer kết nối cố định `email-smtp.ap-southeast-2.amazonaws.com:587`, `secure:false`, `requireTLS:true`, TLS tối thiểu 1.2, kiểm chứng chỉ; không fallback plaintext. Không dùng Gmail SMTP hay AWS SDK/access key.
- Chỉ ba biến server: `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL`; `APP_ORIGIN` phải là origin HTTPS công khai chính xác, không dấu `/` cuối. From là địa chỉ đã Verified trong SES Sydney, không phải SMTP username.
- Không tự kiểm SMTP khi khởi động; guard chỉ kiểm cấu hình. Gửi thành công tới SMTP không đảm bảo đến inbox. Phải nghiệm thu gửi thật sau cấu hình.
- Plain text tiếng Việt/UTF-8, tên Hán Ngữ Lab; link `/#verify=...` hoặc `/#reset=...`, hạn 30 phút, dùng một lần. Không log link, body, recipient, SMTP conversation hoặc nguyên nhân lỗi chứa dữ liệu nhạy cảm.
- Giữ CSRF/origin/header, cookie Secure, auth limiter 20 yêu cầu/15 phút/IP và API limiter 180/phút/IP trong production. Bổ sung cooldown60giây và5yêu cầu/giờ/email băm, dùng chung register/resend/forgot kể cả địa chỉ không tồn tại. Chỉ tin một hop loopback Caddy, không `trust proxy=true`; limiter ở RAM và reset sau restart. Xác minh IP thật theo runbook mới trước triển khai sau CDN.
- Timeout kết nối/chào 10 giây, socket idle 20 giây, không tự retry vì có thể gửi trùng. Gửi thật tuần tự, cách thời điểm bắt đầu ít nhất1.1giây; tối đa20tác vụ chờ trong RAM. HTTP trả chung trước SMTP để không dò existence qua thời gian/lỗi gửi. Chỉ quá tải toàn cục mới trả503 chung; SMTP lỗi chỉ log mã cố định an toàn. Tài khoản chưa xác minh vẫn tồn tại; dùng gửi lại sau khi sửa cấu hình.

| API (JSON, POST) | Dữ liệu | Hành vi |
|---|---|---|
| `/api/auth/register` | email, name, password, adult=true, acceptedTerms=true | Tạo tài khoản và gửi xác minh |
| `/api/auth/resend-verification` | email | Chỉ gửi cho tài khoản active chưa verified; xoay token, link cũ vô hiệu |
| `/api/auth/forgot` | email | Gửi link reset nếu email có trong hệ thống |
| `/api/auth/verify` | token | Xác minh một lần |
| `/api/auth/reset` | token, password | Đổi mật khẩu và thu hồi session |

POST phải có `Origin` đúng `APP_ORIGIN`, `Content-Type: application/json`, `X-HNL-Client: web`. Production không trả `devLink`. Register luôn201 cho dữ liệu hợp lệ dù email đã có (không sửa password/tài khoản cũ), resend/forgot trả200 chung; lỗi SMTP riêng từng địa chỉ không đổi body/status công khai. Nút gửi lại đã có trong màn đăng nhập và đăng ký; giữ email và hiển thị thời gian chờ. Đây là tiếp nhận yêu cầu, không xác nhận thư đã tới inbox.

## Trước khi cập nhật

1. Chờ chủ dự án duyệt push và CI GitHub thành công, ghi SHA được duyệt. Không pull khi thay đổi còn chỉ ở máy Windows.
2. Theo chủ dự án, SES Sydney/Gmail/IAM và Node24 trên Ubuntu đã sẵn sàng; cần kiểm trực tiếp trên máy chủ khi triển khai. SES nếu còn sandbox thì người nhận cũng phải Verified (hoặc mailbox simulator). Credentials SMTP phụ thuộc region, khác AWS access keys và mật khẩu Gmail.
3. Kiểm service đang chạy, `WorkingDirectory`, `User`, Node executable và đường DB thực tế bằng cấu hình service riêng trên máy. Không chia sẻ output environment/credential. Nếu không phải user `ubuntu` hoặc Node ở nvm thì điều chỉnh mẫu bên dưới.
4. Xác định DB đang chứa dữ liệu học viên. Giữ nguyên đường DB và thư mục media hiện tại, ngoài checkout nếu đã có. Không tạo DB trống để thay DB thật, không chạy seed/admin/restore trong cập nhật SMTP. Dừng nếu chưa xác định đúng DB.
5. Lưu SHA cũ (`git rev-parse HEAD`), bản cấu hình systemd cũ và backup DB nhất quán bằng quy trình backup hiện có. Không chỉ copy file `.sqlite` đang WAL hoạt động. Có thể dùng `npm run backup -- export <file.enc>` với `DATABASE_PATH` đúng và `HNL_BACKUP_PASSWORD` đã đặt riêng an toàn; không đưa password vào CLI/history. Kiểm khả năng restore ở đích mới, không đè DB đang chạy. Không chạy lệnh backup từ bộ env chưa được nạp đúng.

## Biến môi trường chỉ ở máy chủ

Tạo tệp riêng ngoài checkout, root sở hữu mode600. Nhập credentials bằng trình soạn thảo trong phiên SSH riêng; không gửi qua chat, không `echo`, không chụp màn hình, không dùng `systemctl show ... Environment` hoặc bật SMTP debug.

```bash
sudo install -d -m 700 /etc/han-ngu-lab
# Chỉ tạo nếu chưa có; không ghi đè tệp đang sử dụng.
sudo test -e /etc/han-ngu-lab/api.env || sudo install -m 600 /dev/null /etc/han-ngu-lab/api.env
sudoedit /etc/han-ngu-lab/api.env
sudo chown root:root /etc/han-ngu-lab/api.env
sudo chmod 600 /etc/han-ngu-lab/api.env
```

Nội dung mẫu bên dưới phải thay tại máy chủ; không copy placeholder rồi cho là đã cấu hình. `DATABASE_PATH` ví dụ phải thay bằng DB thực tế đã xác minh. `EnvironmentFile` dùng cú pháp systemd, không phải shell: không có `export`, không nội suy `$VAR`; giá trị cần trích dẫn dùng dấu nháy theo systemd, không sửa nội dung credential.

```ini
NODE_ENV=production
LOCAL_PREVIEW=false
HOST=127.0.0.1
PORT=3001
APP_ORIGIN=https://YOUR_VERIFIED_PUBLIC_HOST
DATABASE_PATH=/var/lib/han-ngu-lab/hanngulab.sqlite
SMTP_USERNAME="ENTER_PRIVATELY_ON_SERVER"
SMTP_PASSWORD="ENTER_PRIVATELY_ON_SERVER"
SMTP_FROM_EMAIL=YOUR_VERIFIED_SES_SENDER
AI_ENABLED=false
```

API không tự đọc `.env`. Không thêm bất cứ SMTP biến nào vào `NEXT_PUBLIC_*`, frontend, GitHub Actions hoặc lệnh build. Không cần credentials khi lint/test/build. Không dùng `source api.env` để thử mail vì shell/systemd có cách diễn giải khác nhau.

## Mẫu systemd

Nếu đã có service, cập nhật service đó; không tạo thêm tiến trình cạnh tranh port3001. Mẫu `/etc/systemd/system/han-ngu-lab.service`, thay đường Node bằng `readlink -f "$(command -v node)"` sau khi xác minh phiên bản24. Node cài bằng nvm cũng cần đường tuyệt đối, systemd không chạy shell profile.

```ini
[Unit]
Description=Han Ngu Lab Express API
After=network-online.target
Wants=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=3

[Service]
Type=simple
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/han-ngu-lab
EnvironmentFile=/etc/han-ngu-lab/api.env
ExecStart=/ABSOLUTE/PATH/TO/node --import tsx server/index.ts
Restart=on-failure
RestartSec=5
TimeoutStopSec=30
KillSignal=SIGTERM
UMask=0077
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
# Thay bằng thư mục DB/media ghi được đã xác minh; thư mục phải tồn tại.
ReadWritePaths=/var/lib/han-ngu-lab

[Install]
WantedBy=multi-user.target
```

Không chép nguyên `/ABSOLUTE/PATH/TO/node`. Nếu DB hiện ở `/home/ubuntu/.../.local`, `ReadWritePaths` phải trỏ đúng thư mục đó (SQLite cần ghi cả WAL/SHM). Không tự di chuyển DB trong thay đổi SMTP. Chỉ user ứng dụng được ghi DB. App bind loopback, HTTPS/reverse proxy có sẵn phải tiếp tục hoạt động; không mở public port3001 hay tắt TLS/CSRF.

## Git pull và triển khai trong cửa sổ bảo trì

Chạy với user sở hữu checkout. Tên service mẫu cần khớp service thực tế. Dừng nếu có lỗi ở từng bước, không tiếp tục restart khi build thất bại. `git pull --ff-only` không ghi đè thay đổi và không force; nếu working tree bẩn hoặc branch khác `main`, điều tra riêng thay vì reset.

```bash
cd ~/han-ngu-lab
node --version
git status --short
git branch --show-current
git remote get-url origin
# Xác minh tree sạch, main, và origin là flayingdance-tech/han-ngu-lab Private.
git rev-parse HEAD
git pull --ff-only origin main
git rev-parse HEAD
# Đối chiếu SHA với commit/CI đã được duyệt; không tiếp tục nếu khác.
```

Sau backup và ghi SHA cũ, dừng service trong thời gian cài/build để không thay `node_modules/out` dưới tiến trình đang chạy. Không đụng database.

```bash
sudo systemctl stop han-ngu-lab
npm ci --include=dev
npm run lint
npm test
npm run build
npm run typecheck
npm run smoke:production
sudo systemd-analyze verify /etc/systemd/system/han-ngu-lab.service
sudo systemctl daemon-reload
sudo systemctl start han-ngu-lab
sudo systemctl is-active han-ngu-lab
curl --fail http://127.0.0.1:3001/api/health
```

Kỳ vọng health `mode:live`; không bật preview nếu cấu hình email lỗi. Chỉ `enable` service nếu đó là chủ đích vận hành đã được xác nhận. Giữ hiện trạng reverse proxy/HTTPS, không cấu hình Amplify trong thay đổi này.

## Nghiệm thu gửi thật và xử lý lỗi

- Dùng một tài khoản thử do chủ dự án kiểm soát, qua HTTPS public origin thực tế; không dùng dữ liệu học viên có sẵn. Kiểm tra đăng ký nhận thư, gửi lại (API mới, dùng REST client riêng nếu UI chưa có), link cũ bị từ chối, link mới xác minh, forgot/reset và session cũ bị thu hồi. Không chép link chứa token vào log/biên bản.
- Nếu SES sandbox, xác minh người nhận tại Sydney trước thử. Kiểm inbox/spam; From phải đúng Verified identity. Không tự xin production access, nâng quota hoặc thay policy như một phần deploy này.
- HTTP503 chung cho quá tải: chờ Retry-After. Khi đã tiếp nhận nhưng chưa nhận thư, kiểm log mã an toàn `identity_unverified`/`authentication_failed`/`throttled`/`connection_failed`/`delivery_failed`, region/From/sandbox/IAM/outbound587 và metrics SES. Không bật debug/log credential. Lỗi554identity chưa verified không tự chứng minh chỉ người nhận sai; xem cả From và region. Dashboard phiên này xác nhận Sandbox.
- Kết nối TLS có thể thử không cần credential: `openssl s_client -starttls smtp -connect email-smtp.ap-southeast-2.amazonaws.com:587 -servername email-smtp.ap-southeast-2.amazonaws.com -verify_return_error`. Lệnh chỉ kiểm TLS, không chứng minh auth/gửi thư.
- HTTP429: chờ Retry-After; UI giữ cooldown khi đổi màn hình. Chỉ có tác vụ chờ trong RAM, chưa hàng đợi/retry bền vững; crash/restart có thể mất tác vụ chưa gửi, người dùng xin lại liên kết. Shutdown thông thường đợi drain; không coi đây là bảo đảm giao thư.
- Khi cài/build/start lỗi: giữ service dừng nếu chưa có artifact hợp lệ; phục hồi release/SHA và cấu hình service đã lưu qua quy trình rollback hiện có, không `git reset --hard`, không force push, không restore DB cho thay đổi chỉ SMTP. Bản trước adapter có production guard chặn email nên không coi rollback đó là production hoạt động đầy đủ.

Nguồn: [AWS SES STARTTLS/ports](https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html), [SES sandbox](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html), [Nodemailer requireTLS và certificate validation](https://nodemailer.com/smtp). Kết quả test giả lập không chứng minh SES thật đã gửi hoặc inbox đã nhận.
