# HÁN NGỮ LAB — BÁO CÁO ĐƯA DỰ ÁN TỪ OFFLINE LÊN AWS

**Ngày tổng hợp:** 22/10/2026, UTC+07. **Phạm vi:** quá trình triển khai 20–22/10/2026, lỗi thực tế và cách tránh lặp lại. Đây là hồ sơ tái sử dụng cho Codex, không phải lần kiểm tra AWS mới.

## 1. Kiến trúc cuối đã nghiệm thu — lấy làm điểm xuất phát

`Người dùng → HTTPS/Caddy trên Lightsail → frontend tĩnh + /api → Express → SQLite`

| Thành phần | Cấu hình đã dùng |
|---|---|
| Website | https://hanngulab.duckdns.org |
| GitHub | `flayingdance-tech/han-ngu-lab`, Private, nhánh `main`; local `master` theo dõi `origin/main` |
| Lightsail | IP tĩnh `54.253.61.113`; Node.js 24; Caddy 2.11.7 khi nghiệm thu |
| Frontend | Bản export tĩnh, phục vụ qua `/srv/han-ngu-lab/current` |
| Backend | Repo `/home/ubuntu/han-ngu-lab`; Express `127.0.0.1:3001`; service `han-ngu-lab-api` |
| Database | `/var/lib/han-ngu-lab/hanngulab.sqlite`, tách khỏi thư mục release |
| Secrets | `/etc/han-ngu-lab/api.env`; chỉ trên server, không đưa vào frontend/Git/chat |
| Email | SES Sydney `ap-southeast-2`, SMTP 587, STARTTLS bắt buộc; đã được cấp Production |
| Amplify | Giữ dự phòng và redirect 302; bảo toàn `amplify.yml` với `baseDirectory: .next` |

**Phân biệt quan trọng:** artifact Amplify đã nghiệm thu là `.next`; frontend tĩnh phục vụ trên Lightsail lấy từ `out`. Không đổi hai cấu hình này cho nhau theo suy đoán. Website hiện có 16 bài, 7 podcast, 304 MP3, vẫn là beta chưa duyệt, chưa đủ HSK 4.

## 2. Từng giai đoạn, lỗi và cách xử lý

### Giai đoạn 1 — Chuẩn bị source và đưa lên GitHub Private

- **Đã làm:** đọc audit có sẵn, loại secrets/DB/cache khỏi Git, xác minh tài khoản và repo Private, commit/push lên `main`, chờ CI.
- **Cản trở:** remote đã sửa `amplify.yml`, khác lịch sử local; ghi đè sẽ làm mất cấu hình build đang hoạt động.
- **Đã sửa:** fetch, hợp nhất an toàn, giữ `.next`, chạy lại kiểm tra liên quan, không force push.
- **Lần sau:** kiểm remote/branch/diff và phạm vi đã duyệt trước push; không kiểm toán lại các phần đã nghiệm thu nếu chúng không đổi.

### Giai đoạn 2 — Đưa frontend lên Amplify

- **Đã làm:** kết nối repo Private, build/deploy và đối chiếu commit trên AWS.
- **Cản trở:** thành công frontend bị nhầm với hoàn tất cả hệ thống. Express, SQLite và email không tự hoạt động chỉ vì Amplify build thành công.
- **Đã sửa:** tách nghiệm thu frontend/backend; giữ cấu hình Amplify thực tế đã chạy. Không tự đổi framework hoặc giả định Express chạy trong artifact frontend.
- **Lần sau:** chốt nơi chạy từng thành phần trước tạo cấu hình cloud; kiểm API/auth trên chính URL thật, không chỉ nhìn trang chủ.

### Giai đoạn 3 — Chuẩn hóa backend trên Lightsail và HTTPS

- **Đã làm:** Node.js 24, Express qua systemd, Caddy HTTPS; DB nằm ngoài checkout/release, API chỉ nghe loopback.
- **Cản trở:** production guard chặn khi thiếu email adapter; Git SSH từ VM có lúc báo `Permission denied (publickey)`.
- **Đã sửa:** nối mailer thật, không bật preview để né guard. Khi Git pull chưa xác thực được, chuyển Git bundle đã kiểm SHA 256/prerequisite/commit và chỉ fast-forward.
- **Lần sau:** kiểm Node/runtime, env, quyền kết nối repo và đường dẫn DB trước deploy. `git pull --ff-only` chỉ dùng khi Git auth đã hoạt động; không reset source hoặc tạo lạiDB để chữa lỗi.

### Giai đoạn 4 — SMTP, đăng ký và xác minh email

- **Đã làm:** Nodemailer→SES Sydney 587/STARTTLS; xác minh, gửi lại và đặt lại mật khẩu.
- **Cản trở:** SMTP/quyền gửi chưa sẵn sàng; tài khoản tạo trước đó chưa xác minh, giao diện thiếu nút gửi lại; SES Sandbox chặn Gmail chưa xác minh.
- **Đã sửa:** credentials đọc từ env server, kiểm quyền `ses:SendRawEmail`; thêm resend/cooldown/chống dò email và bảo toàn tài khoản cũ. Không gửi được thư không đồng nghĩa phải xóa user.
- **Lần sau:** phân biệt 3 lớp: kết nốiSMTP, quyền gửi/identity đúng region, Sandbox/Production. SMTP accepted chưa chứng minh người dùng đã nhận thư; kiểm email thật, token một lần và thu hồi phiên sau reset.

### Giai đoạn 5 — Quyền Admin, học liệu và media production

- **Đã làm:** cấp Admin cho tài khoản đã xác minh sau khi được duyệt; nhập/xuất bản 16 bài, bộ A và 7 podcast theo quyền phát hành đã xác nhận.
- **Cản trở:** đăng nhập thành công chưa có nghĩa có quyền CMS; nội dung chạy ở local nhưng draft/media trong `.local` không tự được public.
- **Đã sửa:** cấp đúng role ở server, không sửarole ở trình duyệt; có release policy/catalog riêng, nhãn “Bản thử nghiệm — Chưa duyệt”, tài nguyên phát hành ở `public/audio` và `media/podcasts`.
- **Lần sau:** nghiệm thu riêng bốn việc: đăng nhập, quyền CMS, trạng thái xuất bản, file phát được/Range 206. GiữID/revision/tiến độ; không render lại giọng/nhạc để chữa lỗi deploy.

### Giai đoạn 6 — Thoát SES Sandbox và hoàn thiện backup

- **Cản trở email:** Console báo thiếu domain identity, khóa nút xin Production; CloudShell bị chặn xác minh tài khoản.
- **Đã sửa:** dùng AWS CLI phiên đăng nhập tạm và SESv 2 `put-account-details` với quyền đã có, khai thông tin thực tế. AWS duyệt `GRANTED` ngày 21/10; đã kiểm bounce/complaint. Không mua domain/nâng gói chỉ để mở nút.
- **Cản trở backup:** bản sao cùng máy hoặc chỉ source/media không bảo vệ đủ dữ liệu học viên khi mấtserver.
- **Đã sửa:** backup SQLite nhất quán với WAL, mã hóa, timer trên VM; đồng bộ ra Windows ngoài AWS, khóa tách riêng, thử giải mã/restore/integrity/FK. Windows Task cần máy bật, đăng nhập và có Internet.
- **Lần sau:** chuẩn bị quyềnConsole/CLI, trạng thái SES và backup/restore ngay từ đầu; không coi tạo ticket hoặc chạy tiến trình backup là đã thành công.

### Giai đoạn 7 — REC-07: IP thật và giới hạn truy cập

- **Cản trở:** Express báo `ERR_ERL_UNEXPECTED_X_FORWARDED_FOR`. Sau khi sửa hop Caddy, chuỗi Amplify→external rewrite→Caddy vẫn làm IP/bucket bị gộp hoặc thay đổi.
- **Đường thử không giải quyết được:** chỉ tin CIDR CloudFront; peer thật lại là proxy trung gian ngoài danh tính đó. Không mở rộng thành tin toàn AWS hoặc nhận IP tùy ý từ header.
- **Đã sửa sau phê duyệt:** đưa frontend vàAPI về cùng Lightsail; Caddy ghi đè XFF bằng TCP peer, bỏ headerIP giả; Express chỉ tin hop 0 loopback. Thêm bảo vệ theo email/tài khoản; kiểm hai mạng thật và header giả trước/sau cutover.
- **Lần sau:** giữ kiến trúc trực tiếp đã nghiệm thu, không quay lại rewrite 200 làm ingress; API Amplify cũ phải tới 410, không tạo đường vòng né limiter. Không bật lại timer tin CIDR CloudFront cho kiến trúc hiện hành.

### Giai đoạn 8 — Chuyển từ sslip.io sang DuckDNS

- **Đã làm:** xác minhDNS, dựng hostname mới song song, để Caddy cấpTLS; kiểm trước khi chuyển.
- **Cản trở:** đổi domain ảnh hưởng origin/cookie/CSRF, link xác minh/reset và URL cũ; chuyển quá sớm có thể làm mất đường đăng nhập.
- **Đã sửa:** stage bằng hai origin chính xác, sau nghiệm thu chỉ giữ `APP_ORIGIN=https://hanngulab.duckdns.org`; cập nhật canonical, kiểm mail thật; URL sslip/Amplify chuyển 302 giữ URI/fragment, API cũ chuyển 302 tới 410. Người dùng đăng nhập lại vì cookie khác domain.
- **Lần sau:** chốt domain sớm; kiểm DNS/TLS và auth trước cutover; giữ snapshot/config/release cũ. Rollback cấu hình không phục hồi đè SQLite.

## 3. Lỗi kỹ thuật nhỏ từng làm chậm tiến độ

| Lỗi | Cách tránh lần sau |
|---|---|
| Caddy không đọc config rollback quyền 600 | Config không chứa secret dùng 644; env/key vẫn 600. Validate trước reload. |
| Health báo connection refused ngay sau restart | Chờ/retry có thời hạn; không kết luận lỗi trước khi API kịp khởi động. |
| Dừng lại transient unit đã dừng khiến script báo lỗi | Kiểm trạng thái, xử lý thao tác lặp an toàn; không nuốt lỗi khác. |
| Rollback chỉ xử lý một phía | Controller phải bao gồm cả routing Amplify và config server; không đụng DB. |
| Bundle tạo ref HEAD nhưng lại fetch master | Xem `git bundle list-heads`, fetch đúng ref; kiểm hash/ancestor trước áp dụng. |
| Kiểm partition key sai header | Key nằm trong `RateLimit-Policy`, dạng `pk=:...:`; không sửa limiter để làm test qua. |
| So canonical bằng chuỗi khác slash cuối | Kiểm URL đã chuẩn hóa; Next từng xuất canonical không slash cuối. |
| Lặp build/test chỉ vì sửa báo cáo | Theo dõi SHA và mốc đã đạt; chỉ chạy lại khi code/config hoặc điều kiện nghiệm thu thay đổi. |

## 4. Trình tự chuẩn cho lần cập nhật tiếp theo

1. Đọc `START_HERE.md`, trạng thái mới nhất và runbook đúng mốc; đối chiếu Git/process thực tế. Không lấy checkpoint cũ “chưa triển khai” làm hiện trạng.
2. Kiểm quyền truy cập, domain, kiến trúc, env cần có, DB/media/backup và phạm vi được phép. Chỉ hỏi điều kiện thiết yếu còn thiếu.
3. Fetch, so remote, giữ lịch sử và cấu hình đang hoạt động; quét secrets. Không upload `.env`, key, DB hoặc model Python vào frontend.
4. Kiểm mã thay đổi một lượt: lint/test, build, typecheck và production smoke phù hợp; chờ CI đúng SHA. Không gộp render audio vào build web.
5. Backup và kiểm restore vào DB riêng; lưu config, release pointer và routing để rollback.
6. Deploy release mới song song; kiểmhealth, auth/CSRF/cookie, SES, CMS, lesson/podcast/Range và dữ liệu qua restart. Thay routing phải kiểm hai mạng/header giả.
7. Chỉ cutover khi gates đạt; kiểm URL cũ, link email, API không bypass và backup. Lỗi nghiêm trọng thì rollback config/code, không DB.
8. Ghi SHA, URL, kết quảCI/kiểm thực tế và việc còn thiếu; thu hồi fixture/probe, giữ bản rollback.

**Lưu ý hiện tại:** cache `out` và `.next` đã dọn ngày 22/10, cần build lại khi thật sự phát hành. Một số helper triển khai một lần/model thử cũ đã dọn; không chạy lại harness lịch sử như script cập nhật hằng ngày.

## 5. Đoạn giao việc để gửi Codex lần sau

> Làm việc tại D:\Hán Ngữ Lab. Đọc AGENTS.md, docs/START_HERE.md và docs/AWS_DEPLOYMENT_REPORT.md; dùng chúng làm hồ sơ, rồi xác minh trạng thái thực tế. Giữ kiến trúc DuckDNS→Caddy/Lightsail→Express/SQLite, SES Sydney, GitHub Private và Amplify rollback. Hãy lập danh sách điều kiện triển khai còn thiếu rồi thực hiện trong phạm vi tôi cho phép; không kiểm tra/render lại phần đã nghiệm thu nếu không thay đổi. Bảo toàn DB, media, credentials, lịch sửGit và backup; không mua/nâng dịch vụ hoặc đổi kiến trúc khi chưa được duyệt. Chỉ push/cutover khi đã có quyền, backup và kiểm thử phù hợp; lỗi nghiêm trọng phải rollback không đèDB. Báo ngắn gọn URL, SHA, CI, kiểm production và blocker; không nhận thành công chỉ từ build hoặc /health.

## 6. Hồ sơ đối chiếu

- [Bắt đầu từ đây](START_HERE.md) và [quyết định đã chốt](DECISIONS.md): hiện trạng/phạm vi.
- [Khắc phục email](AUTH_EMAIL_RECOVERY.md), [SES Production đã được cấp](SES_PRODUCTION_REQUEST.md): nguyên nhân và nghiệm thu email.
- [Kết quả REC-07](REC07_DIRECT_INGRESS_RESULT.md), [chuyển DuckDNS](DOMAIN_MIGRATION.md): kiến trúc cuối, bằng chứng và rollback đúng mốc.
- [Báo cáo production](../PRODUCTION_FINAL_REPORT.md): diễn biến đầy đủ; đọc timestamp vì có nhiều checkpoint cũ.

Các đề xuất đầu kỳ trong DEPLOYMENT.md và cấu hình proxyCIDR cũ là lịch sử; không dùng chúng ghi đè kiến trúc cuối. Khi áp dụng cho website khác, phải kiểm runtime, database, hosting và quyền dịch vụ của website đó trước.
