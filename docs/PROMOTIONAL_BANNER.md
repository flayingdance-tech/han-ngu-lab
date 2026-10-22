# PROMO-01 — Banner quảng bá trang chủ

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
