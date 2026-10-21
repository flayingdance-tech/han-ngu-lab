# Hán Ngữ Lab — báo cáo khôi phục production

Checkpoint: 2026-10-21, Asia/Bangkok (+07). **Đang thực hiện; chưa nghiệm thu hoàn tất.**

## Hiện trạng đã xác minh

- GitHub: `flayingdance-tech/han-ngu-lab`, Private, `origin/main` và local cùng `099c26e07cc07778607af4b06798698001b033a0` trước bản sửa. Không force push. `amplify.yml` giữ `baseDirectory: .next`.
- Amplify URL: https://main.d12mghkvifkghp.amplifyapp.com . Console đã xác minh app `d12mghkvifkghp` ở **Sydney, ap-southeast-2**, khác vùng Singapore được ghi trong yêu cầu. Không di chuyển hạ tầng.
- Lightsail `han-ngu-lab-api`: Sydney, 2 GB RAM / 2 vCPU / 60 GB SSD, Static IPv4 `54.253.61.113`, đang chạy. API service `han-ngu-lab-api`, user `ubuntu`, working directory `/home/ubuntu/han-ngu-lab`, Node `v24.22.0`, Git `099c26e`.
- API chỉ lắng nghe `127.0.0.1:3001`; Caddy `reverse_proxy 127.0.0.1:3001`. Không mở cổng API ra Internet. SMTP environment được giữ ở `/etc/han-ngu-lab/api.env`, không đọc giá trị hoặc thay credentials.
- Kiểm tra HTTPS qua Amplify và trực tiếp Caddy: root 200, health 200 `live`, catalog 200 với 0 bài, podcast 404. Root không yêu cầu mật khẩu hosting; không cần tắt bảo vệ nào. Student authentication vẫn giữ nguyên.

## Nguyên nhân thiếu nội dung

1. Seed chỉ nhập cho local preview; production SQLite chưa có lessons/revisions. Không có migration chuyển học liệu sang production.
2. API podcast trước đây trả 404 cho toàn bộ chế độ live. 14 MP3/catalog nằm trong `.local/` bị Git bỏ qua, chưa được đưa lên máy chủ.
3. Bài học, audio và podcast hiện đều chưa được duyệt chuyên môn. Production chặn nội dung chưa xuất bản; đây là trạng thái thật, không được tự đổi thành đã duyệt.

| Nội dung | Nguồn chuẩn local | Production trước thay đổi |
|---|---:|---:|
| Bài học | 16: nhập môn 3, HSK 1: 4, HSK 2: 3, HSK 3: 3, HSK 4: 3 | 0 |
| Câu hỏi | 80 | 0 |
| Mục từ vựng | 94 | 0 |
| Audio bài học | 145 mục / 290 MP3 | Chưa kiểm hết file public thực tế |
| Podcast | 7 tập / 14 MP3 / 43 đoạn phụ đề | API 404; chưa có manifest live |
| Tài khoản | Không dùng local làm nguồn chuyển dữ liệu | 3 |
| Attempts / progress | Không dùng local làm nguồn chuyển dữ liệu | 0 / 0 |

Local SQLite có 22 lessons/42 revisions, gồm lịch sử và fixture kiểm thử; **không phải 22 bài học chuẩn**. Chỉ importer nguồn `content/lessons.ts` được dùng. Bộ 16 bài chưa phải giáo trình HSK 4 hoàn chỉnh; chưa có HSK 5–6.

## Bản sửa

- Import dry-run mặc định, chạy lại không tạo trùng, revision bất biến, không ghi đè xuất bản của biên tập viên. Transaction kiểm fingerprint toàn bộ bảng tài khoản/phiên/token/tiến độ/SRS trước và sau; khác biệt sẽ rollback.
- `--apply` đòi backup cùng DB, checksum đúng, vừa được giải mã/restore/integrity check trong 15 phút. Không tạo hoặc thay thế production DB.
- Release policy mặc định **chưa cho phép beta công khai**. Có thể cho phép rõ danh sách ID với nhãn chưa duyệt sau quyết định chủ dự án; không giả mạo `humanReviewed`.
- Podcast live theo manifest riêng, whitelist tên file, SHA256, chặn symlink, hỗ trợ Range. Không lộ authoring profile/production metadata. File giọng/nhạc không tái tổng hợp hay chỉnh âm.
- Có bộ chuẩn bị asset phát hành theo quyền nhạc đã xác nhận; chưa chạy khi quyết định còn chờ.
- `scripts/deploy-production.sh`: preflight repo/SHA/fast-forward/service/env permissions, backup WAL-safe mã hóa, restore test, nhập riêng học liệu, kiểm health, daily timer, rollback code không thay DB. Cần nghiệm thu trên Ubuntu; Bash syntax test không chứng minh đã chạy production.

## Sao lưu

- Node SQLite online backup bao gồm WAL; AES-256-GCM, key 32 byte riêng, file/directory private. Giải mã file đã lưu sang SQLite riêng, chạy integrity/foreign-key check và đối chiếu inventory.
- Retention 14 ngày, chỉ dọn cặp backup do công cụ tạo và checksum hợp lệ sau khi backup mới đã được nghiệm thu.
- Test WAL synthetic giữ cả users/sessions thành công. **Chưa tuyên bố đã tạo backup production hoặc bật timer** cho đến có kết quả máy chủ.
- Sao lưu ngoài VM/AWS và cất key riêng chưa hoàn tất. Mất VM và cả key/backup cùng lúc vẫn có thể mất dữ liệu; không coi backup cùng đĩa là offsite.

## Xác thực và bảo mật

- Giữ production guard SMTP/HTTPS, CSRF, cookie secure/HttpOnly, xác minh email, cooldown/chống dò email, giới hạn IP và email.
- Unit test bao phủ register/resend/verify/login/logout/reset/expired token/permissions/cách ly user/idempotent progress. SMTP giả lập; **không chứng minh hộp thư thật nhận thư**.
- Express chỉ tin hop Caddy loopback gần nhất. Qua Amplify, IP mà Caddy nhận có thể là proxy upstream; chưa nghiệm thu phân biệt nhiều client thật. Không bật trust mọi proxy hoặc tin header tự khai.
- Ubuntu báo 95 updates, 69 security updates và restart required. Chưa tự nâng Ubuntu major hoặc reboot trong nhiệm vụ khôi phục; cần cửa sổ bảo trì sau backup.

## SES

- Sydney Console đã đọc trong lượt này: Sandbox, Healthy, 200 email/24h, 1 email/giây, đã dùng 3/200 lượt. Sandbox chặn người nhận chưa verified.
- Identity email đã Verified; email feedback forwarding **Enabled**; account suppression **Enabled, Bounce and complaints**, danh sách hiện 0 địa chỉ. Không có SNS topic; không tạo thêm.
- Nút **Request production access bị disabled**, trang Get set up báo **Domain verification needed / No domain identities found**. Không thể nộp từ Console hiện tại; không mua domain hoặc nâng gói. Dự thảo transactional và điều kiện kiểm thử trong `docs/SES_PRODUCTION_REQUEST.md`; chưa xác nhận mailbox đã nhận feedback thử nghiệm.
- Hướng dẫn: https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html .

## Chi phí và rủi ro

- Lightsail bundle 2 GB dual-stack theo bảng giá công khai: khoảng **12 USD/tháng, 72 USD/6 tháng**, chưa bao gồm Amplify/SES/transfer vượt quota/thuế. Nguồn: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html .
- Amplify build chuẩn 0.01 USD/phút, transfer/storage/SSR tính riêng; không bật WAF, không tạo tài nguyên trả phí mới. Nguồn: https://aws.amazon.com/amplify/pricing/ .
- AWS Settings/Credits đã xác minh: tổng credit remaining **200 USD**, estimated remaining **197.84 USD**, estimated used **2.16 USD**, finalized used 0 USD. Có 100 USD Free Tier và 5 khoản Explore AWS 20 USD. Credit hết hạn **13/10/2027**; Billing ghi **Free Plan còn 176 ngày, đến 13/04/2027**, là hai mốc khác nhau. Amount due **0 USD**, project month-to-date **2.16 USD**, toàn bộ hiện được credit chi trả. Không nâng gói. Số ước tính cập nhật khoảng 24 giờ, chưa phải hóa đơn cuối cùng; điều kiện dịch vụ áp dụng cần xem từng credit. Cần chuyển nền tảng/backup ngoài AWS trước khi Free Plan kết thúc; không bảo đảm chi phí bằng 0 hoặc tải không giới hạn.
- `sslip.io` là DNS thử nghiệm phụ thuộc nhà cung cấp ngoài; IP/DNS/HTTPS thay đổi có thể ảnh hưởng API và email links. Chưa mua domain.

## Kiểm thử và phát hành

- Đã chạy: unit **45/45**, lint và typecheck đạt. E2E desktop/mobile **26/28** lượt đầu; hai kiểm tra focus dùng tên nút cuối cũ, cập nhật đúng nút resend rồi chạy lại **2/2 đạt**. Không đổi app để né kiểm tra. Các luồng học/đăng nhập/âm thanh/phụ đề/seek đều dùng DB synthetic riêng, không DB người học. Bash `-n` đạt. CLI integration test chặn thiếu/stale/checksum sai backup, apply và chạy lại không tạo trùng sau restore thật.
- Production build và smoke composition đạt. Build đầu phát hiện type literal của fixture policy trong test, đã parse bằng schema; build lại đạt. Production dependency audit0vulnerability, Gitleaks reachable history0finding. Staged scan và CI/Amplify/backend rollout sẽ cập nhật sau.
- Chưa commit/push các thay đổi khôi phục. Không có dữ liệu người dùng, credential hoặc `.codegraph/` được stage.

## Phụ thuộc cần chốt

1. Chủ dự án quyết định công khai bản beta chưa duyệt hay chỉ nhập draft vào CMS.
2. Quyền phân phối công khai bản piano `不如见一面` chưa được xác minh. Giữ nguyên bản local; không tự đổi nhạc, công khai nhạc hoặc bỏ nhạc khi chưa có lựa chọn.
3. SES production cần quy trình bounce/complaint đúng thực tế và AWS phê duyệt; không nâng gói/mở rộng quyền để vượt chặn.

Tài liệu này sẽ cập nhật theo kết quả thực tế; các dòng “chưa” không phải hạng mục hoàn tất.
