# SES, proxy và backup ngoài AWS — 21/10/2026

## Backup tự động ngoài AWS

- Giữ VM timer `han-ngu-lab-backup.timer`, online WAL-safe, AES-256-GCM, retention14 ngày, giải mã/integrity/FK/inventory vào DB riêng mỗi lần. Không overwrite production.
- Root exporter `/usr/local/lib/han-ngu-lab-backup/export-offsite.mjs` chỉ xuất archive mã hóa+manifest verified, tuổi tối đa48giờ; không đọc/xuất key. Thư mục tạm700/file600, dọn đúng cặp sau chuyển.
- Windows `scripts/sync-offsite-backup.ps1`: SSH pin, SCP archive/manifest, SHA256, decrypt và integrity/FK/inventory thực trước success. Không ghi đè backup khác hash. Key riêng, ACL chỉ user+SYSTEM, không vào Git.
- Config riêng `.local/production-recovery/offsite/automation/config.json`; trạng thái `last-sync.json` cạnh config. Không đưa populated config/key/archive vào Git hoặc chat.
- Scheduled Task **HanNguLab-OffsiteBackup**: 11:00 (+07) mỗi ngày và AtLogOn; Interactive/Limited, StartWhenAvailable, không mật khẩu Windows, cửa sổ ẩn. Đã chạy bằng Scheduler, **LastTaskResult0**, offsite restore verified lúc19:34 (+07).
- Bản thật `20261021T121209Z-c98f5243.sqlite.enc`, SHA256 `fba7220b28cd37c35493e3342165327c08d87ea4c2d9b8df83688a5842aba32f`; giải mã/integrity/FK/inventory ngoài AWS đạt. Không đè database.
- PC phải bật, user đăng nhập và có Internet. Không đảm bảo offsite24/7 khi PC tắt; VM backup độc lập. Chưa tự xóa backup ngoài AWS, theo dõi dung lượng.
- Kiểm: `Get-ScheduledTaskInfo -TaskName HanNguLab-OffsiteBackup`; chạy lại `Start-ScheduledTask -TaskName HanNguLab-OffsiteBackup`. Lỗi ghi successfalse; không coi chạy process là đã backup.
- `node scripts/verify-offsite-backup.mjs <archive> <manifest> <key-riêng>` chỉ kiểm vào SQLite riêng và dọn plaintext. Không dùng để ghi đè DB đang chạy. Cấu hình gồm Host, IdentityFile, KnownHostsFile, KeyFile, ArchiveDirectory, NodeExecutable; chỉ Host cố định ubuntu@54.253.61.113, các đường dẫn riêng do operator quản lý.

## Proxy: chống giả mạo đạt, IP qua Amplify chưa đạt

- Express giữ trust hop0 loopback, bind127.0.0.1:3001. Caddy nâng2.6.2→**2.11.7**, official Linuxamd64 SHA256 `727b91701a392de6ebc5027509f548bf39979e5216340d0faed8fa5e69c84f8b`. Không đổi cert storage/SMTP/DB.
- Binary mới `/usr/local/bin/caddy`; giữ `/usr/bin/caddy` cũ. Drop-in `/etc/systemd/system/caddy.service.d/hnl-version.conf`; template `docs/deploy/Caddyfile.production`.
- Chỉ trust **CLOUDFRONT_ORIGIN_FACING**, strict phải→trái. Caddy xuất một XFF chuẩn hóa và bỏ Forwarded/X-Real-IP; không tin tất cả AWS hoặc header đầu trái.
- `han-ngu-lab-proxy-ranges.timer` chạy02:45UTC+random15phút mỗi ngày, native root-owned script, không root npm. Candidate validate/reload, lỗi quay lại include cũ. Fetch lỗi giữ tối đa7ngày; quá hạn bỏ trust remote và báo lỗi. Nghiệm thu87CIDR (49IPv4/38IPv6); service và timer thực chạy đạt.
- Probe tạm health-only/nonce/loopback3101, HMAC IP bằng key RAM, không log địa chỉ thật. Windows và VM là hai nguồn thật. Direct API: fake XFF/Forwarded/X-Real-IP không thay bucket. Qua Amplify: chain có viewer+CloudFront nhưng **peer tới Caddy không thuộc CloudFront origin ranges**. Bucket vẫn là proxy trung gian, có thể đổi giữa request; limit20/15phút có thể gộp người dùng. Không tuyên bố đã sửa IP thật từ health200 hay test synthetic.
- Đã gỡ probe khỏi Caddy, stop unit; không để endpoint IP/hash thường trực. Để hoàn tất cần relay xác thực giữa Amplify và origin (ví dụ SSR ký IP, secret server-only), hoặc ingress có danh tính proxy xác minh được. Custom rewrite hiện chưa có authenticated origin header đã nghiệm thu. Không mở trust toàn AWS để lách; chưa thêm relay/WAF/domain/paid service. Đổi đường API/auth cần triển khai và nghiệm thu riêng.

## Quay lui Caddy

Backup root-private `/var/backups/han-ngu-lab-ops/caddy-20261021T123941Z/Caddyfile`. Khi cần: dừng timer refresh, chép cấu hình cũ về `/etc/caddy/Caddyfile`, bỏ đúng drop-in `hnl-version.conf`, daemon-reload/restart Caddy, kiểm HTTPS/health. Không xóa cert storage, DB hoặc backup. Đã validate trước restart và kiểm health/service sau nâng cấp.

Nguồn: [Caddy strict proxy](https://caddyserver.com/docs/caddyfile/options#trusted-proxies), [Caddy2.11.7](https://github.com/caddyserver/caddy/releases/tag/v2.11.7), [CloudFront XFF](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html), [AWS ranges](https://ip-ranges.amazonaws.com/ip-ranges.json).
