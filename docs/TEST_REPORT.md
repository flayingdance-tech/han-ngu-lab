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
