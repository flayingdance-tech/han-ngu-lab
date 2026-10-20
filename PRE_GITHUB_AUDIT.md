# PRE-GITHUB DEPLOYMENT AUDIT — Hán Ngữ Lab

Ngày20/10/2026, Asia/Bangkok (+07). Root D:\Hán Ngữ Lab. Baseline5421706,35commit reachable. Người thực hiện: Codex. Chưa push GitHub; chưa tạo/sửa hạ tầng AWS hoặc nâng Paid Plan.

**Kết luận:** mã nguồn có thể chuẩn bị đưa lên **private GitHub với WARNING đã nêu**, nhưng **FAIL đối với triển khai công khai toàn bộ ứng dụng lên AWS Amplify ngay bây giờ**. Build frontend thành công không triển khai được Express/SQLite/email. Chưa có remote/repository để xác minh visibility; private:true trong package.json chỉ là cờ npm.

## Phạm vi

Đã kiểm cấu trúc, secrets/Git history, build, auth/authorization, backend/database, production config, Amplify và chi phí. Không audit lại giáo trình/HSK/đáp án, chất lượng/quyền media hoặc responsive UI đã được chủ dự án duyệt; không thay audio, podcast, ảnh hay thiết kế. Chỉ đọc những đường phục vụ dữ liệu/media cần thiết để xác định phụ thuộc triển khai. Unit chuẩn vẫn chạy theo yêu cầu chất lượng mã; không thay thế nghiệm thu sản phẩm đã có.

## 1. Kết quả theo nhóm yêu cầu

| Nhóm | Trạng thái | Kết quả |
|---|---|---|
| Cấu trúc dự án | PASS | Next16.4.2/React19.3.1/TS6, Node24.15.0/npm11.12.1; npm lockfile; frontend static và API Express5 tách riêng |
| GitHub security | PASS | Gitleaks history đã rà false-positive; hygiene không có DB/env/private key bị track; ignore đã gia cố. Không phát hiện credential thật trong phạm vi quét |
| Production build | WARNING | Lint/typecheck/unit/build đạt; composition smoke đạt với transport test. Entry production thật vẫn bị chặn thiếu adapter email |
| Auth và authorization | WARNING | Session/role/CSRF/isolation/reset được test; đã sửa rủi ro token URL. Email thật/TLS/proxy/rate limit qua edge chưa có bằng chứng |
| Database/backend | FAIL | SQLite hiện local; chưa có API host/volume/database persistent độc lập máy dev hoặc lịch backup ngoài máy đang chạy |
| Amplify compatibility | FAIL | Static WEB/out đã chuẩn bị. Compute SSR chưa công bố Next16; Express/SQLite không được đưa vào build container như backend lâu dài |
| Public website config | FAIL | Chưa có API HTTPS, proxy /api, email thật, phục vụ podcast production và quy trình chuyển trạng thái published trên đích mới |
| Chi phí/vận hành AWS | WARNING | Có kịch bản dự toán và kế hoạch bảo vệ; account/credit/region/eligibility/quota chưa kiểm Console |
| Chuẩn bị GitHub | WARNING | Có README/env/ignore/buildspec/CI; workflow chỉ validate, chưa chạy trên GitHub Linux; chưa tạo repo private hoặc branch protection |
| Báo cáo và bàn giao | PASS | Báo cáo này, docs/DEPLOYMENT.md và checkpoint công việc; giới hạn kiểm chứng được nêu rõ |

## 2. Bảo mật Git và credentials

- Gitleaks8.30.1 tải từ release chính thức, binary được so checksum; quét git --log-opts=--all với redaction100%. History ban đầu có1finding generic-api-key ở lib/podcast-listening.ts, commit9feac85c, line5: là namespace localStorage công khai, không phải credential. Đã đối chiếu object lịch sử và giới hạn ngoại lệ theo đúng giá trị/path.
- Snapshot source chuẩn bị commit có thêm1finding là token giả cố định trong tests/e2e/auth-security.spec.ts. Ngoại lệ chỉ áp dụng đúng giá trị fixture và đúng file; không bỏ qua toàn bộ tests hoặc tắt rule generic-api-key.
- Hygiene trên35commit/1009reachable blobs:415text được kiểm bổ sung,594binary không diễn giải bằng text scan; không path DB/.env/private-key/artifact bị track trong lịch sử. 8credential-like literals đều fixture tests, không email cá nhân ngoài domain ví dụ trong text scan. Không đọc/công bố giá trị secret từ .env/DB người dùng.
- Quét không phải chứng minh tuyệt đối không có mọi dạng secret trong binary/ngoài repository. Không phát hiện credential thật để yêu cầu rotate ở lần này. Nếu xuất hiện exposure trong lần sau: thu hồi/rotate trước, sau đó làm sạch history có phối hợp; chỉ thêm .gitignore không xóa exposure cũ.
- .gitignore bổ sung DB/WAL/SHM ở mọi thư mục, khóa riêng/certificate bundle, .aws/.ssh, backup mã hóa/dump/state và cache npm. .env.example được giữ, giá trị thật không đưa vào repo/frontend.
- git fsck --full exit0; có dangling objects và một temporary object leftover được count-objects cảnh báo, không thấy corruption reachable. Không prune/reset/rewrite history.

## 3. Lỗ hổng/rủi ro đã xác nhận và xử lý

| ID | Mức / trạng thái | Phát hiện và xử lý |
|---|---|---|
| SEC-01 | Medium / FIXED | Link verify/reset mới chứa token trong query, có thể lọt access log/referrer. Chuyển sang fragment, client nhận cả fragment mới/query cũ rồi xóa URL; đặt no-referrer. Kiểm browser xác nhận token fragment không xuất hiện trong request URL |
| SEC-02 | Medium / FIXED | Kiểm production origin chỉ dùng startsWith, nhận origin sai cấu trúc. Kiểm URL HTTPS chính xác, không path/query/credentials; fail closed khi không hợp lệ |
| SEC-03 | Low / FIXED | JSON quá1MB có thể bị trả500 chung. Trả413 với thông báo hữu hạn; không stack/body log |
| SEC-04 | Deployment / FIXED | npm start cần tsx nhưng tsx từng là devDependency. Chuyển sang dependency runtime, pin4.23.15; npm ci --omit=dev trong thư mục cô lập và import/start tới production guard đạt |
| SEC-05 | Data safety / FIXED | openDatabase luôn ghi user_version=1, có thể hạ version DB mới hơn. Thêm guard từ chối schema>1 trước bootstrap, test xác nhận không đổi version2 |
| SEC-06 | High, dev toolchain / WARNING | npm audit full báo5package nodes trong chuỗi ESLint→fast-glob→micromatch→braces; cùng advisory GHSA-vfj7-8cjw-p6xm. Không có patched version được advisory công bố ngày kiểm tra. npm đề xuất hạ major eslint-config-next; không áp dụng audit fix --force |
| SEC-07 | Defence-in-depth / WARNING | CSP đang disabled; cần policy phù hợp static Next/inline bootstrap trước public. Rate limits in-memory/IP cần xác minh proxy/IP thật và mô hình một/nhiều instance. Register409 có thể tiết lộ tài khoản tồn tại, dù login/forgot đã giới hạn và không trả secret |

Không thay đổi version package khác khi chuyển tsx, không tái cấu trúc auth/provider, không dựng lại UI. Các cảnh báo dev không được coi là5lỗ hổng runtime riêng. npm audit --omit=dev trả0finding; không suy ra mọi mã ứng dụng đã an toàn tuyệt đối.

Nguồn advisory: [GitHub-reviewed CVE-2026-93687](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).

## 4. Auth, quyền và database

Mật khẩu scrypt với salt ngẫu nhiên/timing-safe compare; session/verify/reset token ngẫu nhiên và chỉ lưu digest, có hạn dùng. Cookie production HttpOnly/Secure/SameSite=Strict; logout/reset/đổi role thu hồi session tương ứng. Đăng ký không nhận role, admin kiểm currentUser+role ở server. Request ghi có Origin+X-HNL-Client+JSON; API không cache; SQL dùng prepared parameters cho đầu vào người dùng.

Kiểm thử gồm role injection,401/403, CSRF, session hết hạn/thu hồi, một user không đọc dữ liệu user khác, reset một lần và cookie production. Không có admin/password mặc định. Email test không xuất devLink ở production; transport thật vẫn chưa nối vào server/index.ts. Cần sender/delivery/retry/resend verification trước mở đăng ký thật, không thay bằng no-op để báo PASS.

DB là SQLite WAL qua node:sqlite, schema1 bootstrap; chưa có migration sang database khác. DATABASE_PATH có cấu hình nhưng chưa có persistent service trên AWS. Backup logical transaction mã hóa AES-256-GCM/scrypt; restore vào DB mới, kiểm schema/FK/published pointer và loại session/token. Tests restore dùng dữ liệu synthetic, không vận hành backup ngoài máy hoặc chuyển dữ liệu người học thật trong audit này.

## 5. Kết quả lệnh và giới hạn production

Logs đầy đủ trong .local/pre-github-audit (được Git bỏ qua; không upload log auth/raw data).

| Kiểm tra | Kết quả |
|---|---|
| npm run typecheck | PASS |
| npm run lint và lint phần thay cuối | PASS |
| npm test sau sửa cuối | PASS25/25 |
| Playwright auth-security, desktop | PASS1/1; chỉ kiểm token link mới/cũ, không chạy lại responsive/content/media acceptance |
| npm run build | PASS; out/, static route / và404 |
| npm run smoke:production | PASS có giới hạn: production composition, listener thật loopback, test email, DB tạm; root200/private401/404 |
| server/index.ts với NODE_ENV=production | BLOCKED như thiết kế: thiếu email adapter, không tự bật preview |
| npm ci --offline --omit=dev --ignore-scripts ở thư mục cô lập | PASS103packages; tsx/import API đạt, tới đúng guard production |
| npm audit --omit=dev --json | PASS0finding |
| npm audit --json | WARNING/exit1,5high dev toolchain, chưa có fix an toàn từ advisory |
| YAML buildspec/workflow/static headers và quyền read-only | PASS cú pháp/local policy; chưa chạy GitHub/Amplify |
| Git fsck | PASS exit0; ghi nhận dangling/temporary leftovers |

Smoke không xác nhận SES/TLS/CloudFront/cookie forwarding ngoài Internet. CI Linux/cloud build chưa chạy; máy hiện tại Windows. Không chạy lại ASR/render/audio audit hoặc acceptance UI/học liệu đã duyệt.

## 6. Đánh giá Amplify và các dịch vụ cần có

amplify.yml là cấu hình **frontend tĩnh** dùng platform WEB, baseDirectory out. Next16.4.2 hiện không nằm trong dải SSR12–15 được tài liệu AWS Hosting Compute công bố. Không hạ Next để che việc thiếu backend. Static export không có API Express và rewrite localhost development không đi theo artifact.

Cần Node API host có HTTPS + đĩa SQLite persistent, dịch vụ email thật (SES là ứng viên, chưa tích hợp), cơ chế phục vụ podcast production và backup ngoài AWS. Phương án ít thay đổi là một VM Node nhỏ + SQLite trên volume, frontend ở Amplify; đây là đề xuất, chưa provision/chưa kiểm Free Plan eligibility. Không chuyển sang DynamoDB/RDS/Cognito như một thay đổi âm thầm của audit.

Client /api relative/cookie same-origin đòi reverse proxy đúng. Chưa có URL API để điền hoặc test POST/Origin/custom header/Cookie/Set-Cookie/Range206 qua domain thật; không nhận là đã xong CORS/proxy/HTTPS. Dữ liệu đã được owner duyệt vẫn cần chuyển trạng thái xuất bản/đóng gói trên hệ thống production; audit này không đánh giá lại chất lượng/quyền nội dung.

Nguồn: [AWS Next support](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-amplify-support.html), [AWS build settings](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html), [AWS Hosting FAQ](https://github.com/aws-amplify/amplify-hosting/blob/main/FAQ.md), [AWS proxy examples](https://docs.aws.amazon.com/amplify/latest/userguide/redirect-rewrite-examples.html). Chi tiết cấu hình và IAM tối thiểu tại docs/DEPLOYMENT.md.

## 7. Chi phí và an toàn vận hành

Dự toán, không phải hóa đơn: Amplify standard0.01USD/phút build,0.023USD/GB-tháng storage và0.15USD/GB transfer ngoài ưu đãi. Kịch bản100phút build+10GB transfer+1GB storage là2.523USD/tháng Hosting;100GB transfer riêng đã15USD. Ứng viên Lightsail1GB publicIPv4 có mức docs7USD/tháng, cần kiểm region/eligibility.

Giả định ít tải, tổng khoảng10–20USD/tháng (60–120USD/6tháng) gồm backend nhỏ/hosting/mail/backup-log nhỏ; không bảo đảm150USD nếu tải, egress, thuế hoặc service tăng. Không xác nhận200USD credit/expiry thật; chưa vào Console. Không tự nâng Paid Plan hoặc tạo resource tính phí.

Free Plan kết thúc khi hết kỳ/credits theo điều kiện account và có nguy cơ đóng/mất truy cập dữ liệu. Cần backup ngoài AWS và diễn tập trước hạn. Budget alerts50/80/100% không phải hard cap; cần hạn mức build/egress, log retention và giám sát backup/API/mail/disk. Không mặc định bật NAT Gateway/RDS/WAF/autoscaling/AI runtime hoặc mua domain. GitHub Actions private có quota theo gói, chưa kiểm tài khoản.

Nguồn: [Amplify pricing](https://aws.amazon.com/amplify/pricing/), [Lightsail bundles](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html), [AWS Free Plan](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html).

## 8. Những file chuẩn bị/cập nhật

.gitignore, .env.example, .nvmrc, .gitleaks.toml, README.md, amplify.yml, customHttp.yml, .github/workflows/validate.yml, docs/DEPLOYMENT.md; sửa nhỏ server/app.ts, server/database.ts, app/page.tsx, package/lock và test bảo mật liên quan. Workflow pin SHA của actions và checksum Gitleaks, contents:read/persist-credentials:false, không có lệnh deploy hoặc AWS credentials. customHttp.yml chuẩn bị no-referrer/nosniff/SAMEORIGIN cho static host, chưa thực thi trên AWS; không dùng nó thay CSP đã kiểm chứng. Các file học liệu/audio/ảnh/thiết kế không đổi.

## 9. Điểm chặn trước triển khai

1. Xác minh tài khoản AWS thật: plan/credit/hạn/region/quota/chi phí. Không tự chuyển Paid Plan để vượt hạn chế.
2. Nối email thật vào entry và kiểm delivery/resend; giữ production guard cho tới khi xong.
3. Có API HTTPS, persistence SQLite/backup ngoài máy/restore trên máy mới; không lưu user DB vào Amplify build/Lambda tạm.
4. Có proxy /api cùng origin và cookie/CSRF/rate limit/Range đã kiểm trên domain thật.
5. Có dữ liệu/catalog/media production đã xuất bản và được đóng gói đúng; không mở LOCAL_PREVIEW trên Internet.
6. Cloud build/staging, header/CSP phù hợp, monitoring và diễn tập chuyển nền tảng trước hết Free Plan.

**Giai đoạn tiếp theo:** được phép chuẩn bị source private GitHub với các WARNING đã báo, nhưng chỉ push/tạo repo khi chủ dự án yêu cầu. Chưa đủ điều kiện triển khai public toàn bộ ứng dụng. Không yêu cầu audit lại ba phần sản phẩm đã duyệt để thay cho các điểm chặn kỹ thuật này.
