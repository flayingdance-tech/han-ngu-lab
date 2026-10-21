# Vận hành bản thử nghiệm công khai

Quyết định D-052/D-053, ngày 21/10/2026 (+07): chủ dự án cho phép 16 bài hiện có, bộ âm A (145 mục/290 MP3) và 7 podcast (14 MP3), xác nhận quyền đã kiểm tra trước đó. Không kiểm tra lại quyền, không đổi nhạc/giọng hoặc tái tạo file.

Tất cả nội dung chưa được người có chuyên môn độc lập duyệt phải mang nhãn **Bản thử nghiệm — Chưa duyệt**. Không tuyên bố hoàn chỉnh HSK 4 hoặc bảo đảm độ chính xác giáo dục. `content/release-policy.json` là quyết định phát hành, không phải biên bản duyệt chuyên môn.

## Quản trị

- Bài học: Admin → Giáo trình & kiểm duyệt. Xem nội dung/đáp án; Soạn phiên bản mới → Gửi duyệt → người khác phê duyệt → Xuất bản. Thu hồi bỏ con trỏ hiển thị; Khôi phục trả về phiên bản cũ. Không xóa tiến độ/revision.
- Âm đọc/podcast: mở **Quản lý âm đọc & podcast**, chọn loại/tìm kiếm. **Xem / sửa / duyệt** có trình nghe riêng cho nhân sự đã đăng nhập, kể cả khi thu hồi. JSON âm đọc chỉ sửa nhãn/ghi chú; podcast sửa thông tin/phụ đề, giữ nguyên ID, giọng, file và thời lượng. Lưu tạo bản nháp mới, không thay phiên bản đang phát.
- Người duyệt phải khác tác giả, ghi chú rà soát tối thiểu 10 ký tự. Gửi duyệt → Phê duyệt → Xuất bản là các bước riêng. Thu hồi và Khôi phục có audit; beta khôi phục vẫn chưa duyệt, không giả mạo reviewer.
- Import chạy lại bỏ qua media đã có và không tái công khai bài beta đã thu hồi. Revision và file gốc được giữ nguyên. Thay file âm thanh cần quy trình import mới, không đổi đường dẫn file bất biến.
- `/api/audio/manifest.json` chỉ trả các âm đọc đang xuất bản; trình nghe có cache tối đa 60 giây. Podcast catalog và MP3 công khai theo con trỏ xuất bản. Bản MP3 bài học nằm ở đường dẫn tĩnh bất biến để tương thích phát hành trước; thu hồi chặn tra cứu/phát mới trong ứng dụng, **không xóa bản đã tải hoặc chặn đường dẫn tĩnh mà người dùng đã biết**. Khi cần gỡ tài nguyên pháp lý hoàn toàn, phải phối hợp gỡ asset/cache; không coi thu hồi CMS là cơ chế bảo mật file tĩnh.
- Bản nháp, ghi chú và lịch sử chỉ ở API staff. Không công khai database, đáp án kín, user, session, token hoặc dữ liệu tác giả nội bộ.

## Triển khai và khôi phục

1. GitHub Private main, CI đạt; giữ nguyên `amplify.yml` `baseDirectory: .next`.
2. Trên Lightsail dùng `bash scripts/deploy-production.sh FULL_SHA [VERIFIED_GIT_BUNDLE]`. Bundle là phương án thay fetch khi VM chưa có GitHub authentication; xác minh SHA256 ngoài băng, bundle HEAD và ancestry. Không thêm token/deploy key, không force/reset.
3. Script backup SQLite online (gồm WAL), mã hóa AES-256-GCM, giải mã sang DB riêng và kiểm integrity/FK/inventory **trước** stop service/import. Backup quá 15 phút hoặc sai checksum không được importer chấp nhận.
4. Schema media là hai bảng bổ sung tương thích v1, không đổi/xóa bảng người học. Import lesson và media là hai transaction idempotent; nếu bước media lỗi, giữ dữ liệu đã nhập, khắc phục và chạy lại sau backup mới. Không thay SQLite bằng DB local.
5. Root timer hằng ngày lúc 03:15 UTC, lệch ngẫu nhiên tối đa 30 phút, retention 14 ngày. Mã backup JS root-owned, không chạy npm package do ubuntu có thể sửa trong timer root. Chạy thử `sudo systemctl start han-ngu-lab-backup.service`; kiểm kết quả và timer.
6. Key `/etc/han-ngu-lab/backup.key` riêng root600. Copy bản `.sqlite.enc` + manifest ra ngoài AWS và cất key ở thư mục/vault riêng. Windows hiện dùng `.local/production-recovery/offsite/archives` và `keys`, ACL giới hạn người dùng hiện tại và SYSTEM, đã có rehearsal giải mã/đối chiếu. Không đưa các thư mục này vào Git hoặc chat. **Offsite hiện là bản copy thủ công, chưa đồng bộ tự động mỗi ngày**; cần lấy bản mới sau thay đổi quan trọng và trước hết hạn Free Plan.
7. Giữ cả Git/media và backup DB để chuyển nền tảng. DB mã hóa đầy đủ gồm phiên/token nên phải bảo vệ như credential; export JSON quản trị không bao gồm phiên/token. Restore chỉ vào DB mới riêng, thử health/content/user counts trước chuyển lưu lượng, không ghi đè DB đang hoạt động.

## Lỗi đã gặp và cách tránh lặp

- VM `git fetch` báo `Permission denied (publickey)`: dừng trước sửa service/DB; dùng Git bundle đã xác minh qua SSH hiện có. Không tắt host-key check hoặc chép token vào URL.
- Backup từ thư mục tạm bị `Top-level await ... cjs`: thêm `package.json` `type: module` vào đúng thư mục chứa source trích xuất; có regression test chạy ngoài repo. Windows `--import` cần `file:` URL, dùng `pathToFileURL` trong test.
- Private SSH key bị OpenSSH từ chối do ACL rộng: thu hẹp ACL, không in/đọc nội dung khóa và không tạo access mới. Host ED25519 phải đối chiếu Console trước pin.
- Playwright nạp JSON bằng ESM không có import attribute: fixture đọc JSON bằng `readFileSync` + parse schema. Chỉ dùng SQLite synthetic ở cấu hình test riêng; không mở DB local người dùng.
- Không render lại giọng/nhạc khi sửa metadata/phụ đề. Asset SHA256 phải giữ nguyên và xác minh với file phục vụ thật.

SES vẫn Sandbox cho đến AWS chấp thuận. Không bỏ xác minh email/production guard để vượt chặn; không quảng cáo đăng ký cho mọi Gmail khi chưa hoàn thành bước này. Chi tiết `SES_PRODUCTION_REQUEST.md` và `AUTH_EMAIL_RECOVERY.md`.

## Chạy lại kiểm thử UI an toàn

Dùng `npx playwright test --config playwright.recovery.config.ts`. Cấu hình này không tái dùng server đang mở, chỉ dùng SQLite synthetic `.local/pre-github-audit/synthetic-auth-ui.sqlite`; media CMS test chỉ chạy khi có cờ cách ly do cấu hình đặt. Nếu port3000 đang được sử dụng, dừng với lỗi thay vì gắn nhầm DB. Không chạy CMS fixture cũ với DB người dùng. Bộ phát hành đã kiểm18/18 desktop/mobile; runner bàn giao mới kiểm riêng CMS2/2 đạt.
