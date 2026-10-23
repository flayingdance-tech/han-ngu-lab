# PROMO-01 — Banner quảng bá trang chủ

**KẾT QUẢ CUỐI — 23/10/2026 01:03 UTC+07:** Đã triển khai commit `17db6d4a95d8e5ae6bfe61696ebc3d2aec965e5a` trên GitHub Private/main và Lightsail. [CI39827539770 SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39827539770). Bản sửa tương phản tối đã hoàn tất, không còn chờ CI/deploy. Các mốc28a5599 bên dưới là lịch sử đợt1.

Ngày: 23/10/2026, UTC+07. Phạm vi: frontend trang chủ; không đổi backend, hạ tầng hoặc dữ liệu.

## Thay đổi

- Ảnh chủ dự án cung cấp giữ nguyên toàn cảnh và khuôn mặt. PNG phẳng không có lớp nhân vật tách rời; chuyển động độc lập chỉ áp dụng cho vòng tròn và họa tiết CSS tạo thêm.
- `PromoBanner.tsx` + `promo-banner.css`: bố cục đỏ/trắng, điện thoại xếp ảnh trước nội dung; tối có bảng màu tương ứng. Giữ nguyên hero cũ, bài học và điều hướng.
- CTA mở đăng ký bằng `initialMode` của AuthPanel; đóng form rồi đăng nhập vẫn mở đúng chế độ. Người đã đăng nhập đi tới lộ trình.
- CSS entrance/float nhẹ, nút tạm dừng và `prefers-reduced-motion`. Không thêm thư viện, âm thanh tự chạy hoặc popup tự mở.
- WebP responsive 640/960/1440: 48.146 / 83.394 / 137.188 byte so với PNG gốc 1.899.229 byte. Ảnh đầu trang tải eager/high priority; chỉ một biến thể được trình duyệt chọn, không preload trùng.

## Xác minh cục bộ

- `npm run lint`, `npm test` (51/51), `npm run build`, `npm run typecheck`, `npm run smoke:production`: đạt.
- Playwright riêng trên bản export `out`, cổng 3100; không đụng dev server khác đang chạy tại cổng 3000. Fixture chỉ giả lập đọc catalog/me, không gửi mail hoặc ghi production DB.
- Test banner: mở đăng ký, đóng Escape/trả focus, đăng nhập mặc định, click ảnh, xem bài học; responsive desktop/tablet/mobile, không tràn ngang, target CTA tối thiểu 44px, focus nhìn thấy, dừng hiệu ứng, giảm chuyển động, chỉ tải một WebP dưới 150 KB.
- Bằng chứng và ảnh kiểm tra riêng: `.local/promo-20261023/`.
- Lỗi bộ chạy test lần đầu: cwd mặc định theo thư mục config dẫn tới lặp đường dẫn `.local`. Đã đặt cwd đúng repo; không thay ứng dụng để làm test qua.

- Lỗi responsive phát hiện tại 820px: hero cũ có aspect-ratio + min-height suy ra chiều rộng 973px. Đặt width:100%/min-width:0 riêng trang chủ, giữ nội dung/ảnh; banner mới xếp một cột ở ≤1050px. Không che overflow để lách kiểm thử.

## Triển khai và rollback

1. Fetch, xác nhận GitHub Private/main và Amplify `.next` không đổi; quét secret; push không force, chờ CI.
2. Sao lưu SQLite mã hóa bằng service hiện hữu; chụp config riêng root700, env600, symlink cũ, digest 14 bảng và hash MP3.
3. Chuyển bundle Git + tar chỉ `out` bằng SSH đã ghim host key; kiểm SHA256, đường dẫn archive và commit. Máy chủ FF-only, không npm install/import dữ liệu/restart API.
4. Tạo release tĩnh root-owned, đổi symlink nguyên tử. Nếu gate critical lỗi, tự đưa symlink về release trước; tuyệt đối không rollback SQLite.
5. Kiểm production thực, đối chiếu config/14 bảng/MP3; giữ release trước. Đồng bộ backup mã hóa ngoài VM bằng quy trình hiện hữu.

Kết quả production, SHA và CI sẽ ghi ở mục nghiệm thu khi đã thực hiện; các bước trên chưa phải tuyên bố hoàn tất triển khai.

## Nghiệm thu production — 23/10/2026, 00:53 UTC+07 (sau đó xác minh trình duyệt)

- **DONE**: feature commit `28a55991e9b610b414636241ffed4f35038534ae`; Private/main khớp. [GitHub Actions 39826279916: SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39826279916), gồm secret scan, dependency audit, lint, 51 tests, build, typecheck, smoke.
- Bản cuối: 6/6 E2E đạt ở 1440×1000, 820×1180, 390×844; kiểm ảnh light/dark bằng mắt, đăng ký/focus/keyboard/pause/reduced-motion, không tràn ngang. Hero cũ cho tự tăng chiều cao ở tablet để không cắt nút học.
- Website thật hiển thị banner và nút mở đúng form đăng ký ở desktop/mobile; ảnh mobile dùng WebP640, đã tải đủ, scrollWidth = viewport375px sau scrollbar. Không nhập thông tin hoặc tạo thêm tài khoản/gửi mail trên production.
- HTTP200 cho homepage và cả3WebP; SHA256 khớp artifact. health ok,16bài,7podcast,Range206/1024byte; API me/admin trả401 khi ẩn danh.
- Bằng chứng: `.local/promo-20261023/production-desktop.png`, `production-mobile.png`, `production-http.json`, `deploy.log`, `e2e-release.log`, `ci-status.log`.
- Release `/srv/han-ngu-lab/releases/28a55991e9b610b414636241ffed4f35038534ae/site`. Đã thực sự chuyển về release3b39c11 và kiểm HTML cũ, rồi chuyển lại release mới và kiểm HTML/banner/health. Trap tự rollback nếu gate critical thất bại.
- Caddy và env nguyên byte; API PID47006 giữ nguyên, không restart. SQLite14bảng không mất/sửa hàng cũ, integrity/FK đạt; toàn bộ304MP3 SHA giữ nguyên. Các chức năng backend/SES/CMS không đổi; không tuyên bố vừa kiểm lại gửi SES hoặc đăng nhập Admin thật.
- Snapshot riêng root700: `/var/backups/han-ngu-lab-ops/promo-20261023`. Backup mã hóa `20261022T173620Z-a009b76f.sqlite.enc` đã sync ngoàiVM/giải mã/restoreverified; giữ mọi release, dữ liệu, credentials và tài nguyên AWS.
- Khôi phục frontend khi cần: tạo symlink tạm root-owned trỏ `/srv/han-ngu-lab/releases/3b39c116bbcc9e455fb14f5d45090d9df936fb59/site`, rồi `mv -Tf` sang `/srv/han-ngu-lab/current`; kiểm homepage/health. Không restore SQLite, không đổi Caddy/env. Đường dẫn cũ còn tồn tại và đã thử thành công trong lần triển khai này.
- Hiệu năng xác minh: chỉ một WebP được chọn và dưới150KB; ảnh có kích thước định trước, không thêm dependency/motion JS. Đây không phải báo cáo Lighthouse hoặc Core Web Vitals thực địa.
- Checkpoint nghiệm thu cuối lưu local; không push tài liệu chỉ để kích hoạt lại pipeline. Mã banner đã trên GitHub và production.

## Phát hiện cuối về khả năng đọc

Nút pause khi hover ở theme tối dùng nền sáng kế thừa, làm giảm tương phản chữ. Bản sửa17db6d4 dùng nền tối riêng và có test tỷ lệ màu computed tối thiểu4,5:1 ở cả3viewport. Local build/typecheck/lint/6E2E/secret đạt; CI39827539770 đang chạy, chưa chuyển release bản sửa này. Bản banner28a5599 vẫn hoạt động trênproduction trong lúc chờ.

## Nghiệm thu cuối — 17db6d4

- 6/6 E2E bản cuối đạt, gồm contrast hover tối≥4,5:1; scopedlint/build/typecheck/secret đạt. CI39827539770 chạy đủ51tests và mọi gate thành công.
- Release `/srv/han-ngu-lab/releases/17db6d4a95d8e5ae6bfe61696ebc3d2aec965e5a/site`; rollback thực về28a5599 và chuyển lại đã đạt. Snapshot riêng `/var/backups/han-ngu-lab-ops/promo-20261023-a11y`, giữ cả snapshot và release cũ.
- HTML HTTP khớp byte bản build cuối;3WebP SHA đúng,16bài7podcast/Range206/admin401 vẫn đạt. 290MP3 học đối chiếu hash với release3b39c11 nguyên +14MP3podcast snapshot nguyên =304; manifest âm đọc giống hệt. Caddy/env/API PID47006/14bảng SQLite không đổi.
- Ảnh production cuối: `.local/promo-20261023/production-desktop.png`; mobile đã xác minh trước CSS hover-only. Bằng chứng bổ sung: `deploy-a11y.log`, `ci-a11y.log`, `final-http.log`, `final-server-a11y.log`, `all-audio-verification.log`, `e2e-a11y.log`.
- Không lặp gửi mail/đăng ký/Admin thật cho thay đổi CSS này. Checkpoint cuối lưu local; source commit đã push và triển khai, không kích hoạt pipeline lần nữa chỉ để lưu tài liệu nghiệm thu.
