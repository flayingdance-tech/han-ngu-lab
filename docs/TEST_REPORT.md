# Báo cáo kiểm thử — bản local

Ngày: 2026-10-17, Asia/Bangkok. Đây là mốc kỹ thuật local, chưa phải nghiệm thu phát hành.

| Kiểm tra | Lệnh / bằng chứng | Kết quả |
|---|---|---|
| TypeScript | `node node_modules/typescript/bin/tsc --noEmit --incremental false` | Exit 0 |
| Lint toàn ứng dụng | `node node_modules/eslint/bin/eslint.js app server lib scripts tests` | Exit 0 |
| Lint phần mới và content | ESLint cho app/page, RevisionPreview, editorial, content, seed, backup, app, tests | Exit 0 |
| Build | `node node_modules/next/dist/bin/next build --webpack` | Exit 0, export `/` và `/_not-found` |
| Unit/integration | `node --import tsx --test tests/domain.test.ts tests/editorial.test.ts tests/integration.test.ts` | 15 đạt, 0 lỗi |
| Trình duyệt | `node node_modules/@playwright/test/cli.js test` | 6 đạt, 0 lỗi; Edge desktop 1440×1000, mobile giả lập 390×844 |
| Audit học liệu | `node --import tsx scripts/content-check.ts --report` | 16 bài/94 word IDs/80 câu hỏi; 32 mục cần duyệt/ánh xạ |

## Các hành vi đã kiểm tra

- Xác nhận tuổi/điều khoản, chống tự cấp role, email một lần, đăng nhập/đăng xuất/reset và thu hồi session.
- Chấm điểm ở server, nộp trùng, cách ly tiến độ/lịch ôn/xuất dữ liệu hai tài khoản.
- CSRF, phiên hết hạn, SRS chống replay đổi rating.
- Editor không tự duyệt, bản nháp riêng tư, xuất bản/rollback/import giữ tiến độ.
- Backup AES-GCM: restore vào DB mới; sai mật khẩu, thiếu bảng, pointer revision hỏng và DB không trống bị từ chối. Lỗi restore rollback toàn bộ.
- Seed cập nhật bằng revision mới, không ghi đè revision cũ và không tự xuất bản.
- Desktop/mobile: đăng ký→xác minh→đăng nhập→học đạt→reload còn tiến độ; tìm/lọc/mở bài không cần tài khoản; focus trap và Escape.
- Đã xem ảnh giao diện desktop/mobile trong `test-results/dashboard-*.png`; không tràn ngang theo assertion.

## Lỗi đã tìm và sửa trong lượt này

- React Strict Mode khởi tạo hai lần gửi token xác minh dùng một lần hai lần: dùng chung promise giữa các lần effect.
- Test chọn nút đăng nhập sidebar ngoài viewport: chọn nút header; thêm cuộn sidebar cho màn hình thấp và ẩn điều hướng mobile đóng khỏi focus.
- Ví dụ fallback không chứa từ đang học: thay bằng 39 ví dụ riêng; chuẩn hóa ID có khoảng trắng khi tra ví dụ.
- Restore trước đây chấp nhận thiếu bảng: kiểm tra đủ bảng và con trỏ published trước commit.

## Giới hạn chưa được nghiệm thu

- Không phải kiểm thử trên điện thoại thật; chưa đủ browser/assistive technology, tải đồng thời, mất mạng hoặc CMS qua browser.
- Email đang mô phỏng; chưa có hạ tầng, TLS, email production hoặc URL public. Chưa kiểm tra credit/hạn AWS thực tế.
- Chưa backup ngoài AWS hoặc diễn tập chuyển nhà cung cấp.
- Học liệu chưa đủ HSK4, chưa có audio thu âm, chưa duyệt chuyên môn; audit cấu trúc không chứng minh đúng ngôn ngữ.
- Dependency audit trước đó có 5 high thuộc chuỗi ESLint/braces. Advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Chưa có bản vá ở lần kiểm tra; không tuyên bố hết lỗ hổng.
- CMS media/CSV, phần quản lý người dùng/audit và quy trình xử lý xóa tài khoản còn thiếu.

Chạy local tests cần quyền loopback của môi trường; EACCES trong lượt sandbox đầu không được tính là test ứng dụng đạt.

## Bổ sung 18/10/2026 +07:00

- FIX-01: hai ca desktop/mobile mở rộng kiểm tra logout header, /api/me 401, reload vẫn đăng xuất đã đạt ngày 17/10. Build vướng EPERM ở lượt đó; lượt có quyền 29726 và build mã CMS cuối 93856 đều exit 0 ngày 18/10.
- CMS: `node node_modules/@playwright/test/cli.js test tests/e2e/cms.spec.ts` — 2/2 đạt. Editor đổi choice→input, lưu alternatives/Pinyin ví dụ/thứ tự bài; tạo đúng revision draft mới, giữ bản cũ và humanReviewed=false.
- Test CMS tạo tài khoản/bài draft tổng hợp riêng. Không dùng tài khoản hoặc mật khẩu do người dùng nhập.
- Chưa kiểm tra toàn workflow reviewer/publish bằng browser; integration trước đó bao phủ phân quyền server.

- Lint các file CMS/test và typecheck chạy chung session 59411: exit 0, không diagnostics.

## 2026-10-18 +07:00 — UI pastel / dark lo-fi

- Typecheck: node node_modules/typescript/bin/tsc --noEmit --incremental false — exit 0.
- Lint cuối: node node_modules/eslint/bin/eslint.js app tests/e2e/theme.spec.ts tests/e2e/cms.spec.ts — exit 0 (61475).
- Build cuối: node node_modules/next/dist/bin/next build --webpack — exit 0, static export và TypeScript đạt (91120).
- E2E đầy đủ lần đầu: node node_modules/@playwright/test/cli.js test — 7 đạt, 3 lỗi. Hai lỗi fixture CMS trùng tên cũ, một lỗi locator radio do tên accessible bị tách ở dấu câu.
- Sau sửa: node node_modules/@playwright/test/cli.js test --last-failed — 3/3 đạt (8411). Tổng 10 ca khác nhau đã đạt qua các lượt; không coi lượt đầu là sạch.
- Sau chỉnh mobile minh họa và bọc chữ đáp án: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 2/2 đạt (25857).
- Theme tests xác minh chuyển sáng/tối, lưu sau reload, cỡ chữ computed cho từ vựng/Pinyin/ví dụ/hội thoại/đáp án và không tràn ngang ở 1440px/390px.
- Đã xem trực quan ảnh home sáng/tối desktop/mobile, bài học tối mobile và quiz sáng desktop. Ảnh hiện ở test-results/*home*, *lesson*, *quiz* (không commit).
- HTTP localhost:3000 và /images/study-night.webp trả 200.
- Backend không thay đổi: không chạy lại 15 unit/integration đã đạt mốc trước. Chưa kiểm tra mọi trình duyệt/thiết bị thật hoặc triển khai cloud.

## 2026-10-18 +07:00 — UI-03: chibi riêng từng tab

- Typecheck/lint: node node_modules/typescript/bin/tsc --noEmit --incremental false; node node_modules/eslint/bin/eslint.js app/page.tsx tests/e2e/theme.spec.ts — không có lỗi, exit 0 (12495).
- Build: node node_modules/next/dist/bin/next build --webpack — exit 0 (12957), bốn asset đã có trong out/images.
- Browser: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — 10/10 đạt (27956), không retry.
- Ca chibi duyệt bốn tab ở light/dark, desktop 1440px/mobile 390px: asset HTTP thành công, heading hiển thị, ảnh và chữ không đè nhau, không tràn ngang. Ca học/auth/logout/theme/cỡ chữ tiếp tục đạt.
- Đã xem screenshot roadmap-light-desktop, vocab-dark-desktop, review-light-mobile, progress-dark-mobile; screenshot đầy đủ từng tab ở test-results/chibi-*.png (không commit).
- Bốn PNG nguồn có alpha; WebP 640px giữ alpha, tổng 414.076 byte. HTTP asset trên preview trả 200.
- Backend/CMS không thay đổi; lượt này không chạy lại unit/integration hoặc CMS E2E của mốc trước. Chưa kiểm tra mọi thiết bị thật hoặc cloud.

## 2026-10-18 +07:00 — UI-04: sát bố cục collage

- Typecheck và lint ứng dụng: node node_modules/typescript/bin/tsc --noEmit --incremental false; node node_modules/eslint/bin/eslint.js app/page.tsx app/layout.tsx app/components/StudyActivity.tsx — exit 0 (25412).
- Lint cuối gồm test: node node_modules/eslint/bin/eslint.js app/page.tsx app/layout.tsx app/components/StudyActivity.tsx tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — exit 0.
- Build: node node_modules/next/dist/bin/next build --webpack — exit 0 (64823), đủ 6 reference WebP trong out/images.
- E2E: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — 10/10 đạt (29130), gồm lịch hiển thị ngày luyện tập thật, đổi tháng trước/sau, học/lưu tiến độ/logout.
- Sau chỉnh vị trí bé trai sidebar: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 4/4 đạt (29815), desktop/mobile, sáng/tối, chữ Trung, ảnh không đè chữ, không tràn ngang.
- Đã xem home desktop/mobile, roadmap/review desktop, progress desktop/mobile, các theme. Ảnh progress giữ ở .local/qa/ui-04; ảnh khác test-results/ (không commit). HTTP preview 200.
- Chỉ so khớp trực quan với collage, không có đo lường pixel chứng minh giống hoàn toàn. UI-05 phụ thuộc asset gốc tách riêng; bộ ảnh đang dùng là tái dựng qua ImageGen với reference thật.
- Backend không đổi. Không chạy lại unit/integration hoặc CMS E2E trong lượt này; chưa kiểm tra mọi thiết bị thật/cloud.
