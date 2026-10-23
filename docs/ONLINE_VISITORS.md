# ONLINE-01 — Số người đang online, chỉ Admin

## Sử dụng

Đăng nhập tài khoản Admin hoặc Super Admin → **Quản trị nội dung** → thẻ **Đang online** ở đầu CMS.

Con số ước tính số trình duyệt gửi tín hiệu trong **2 phút gần nhất**, gồm cả khách chưa đăng nhập và chính người quản trị. Trang đang hiển thị gửi heartbeat mỗi30giây; thẻ quản trị cập nhật mỗi15giây. Các tab dùng chung cookie không được tính thêm. Khi ẩn/đóng tab, tín hiệu dừng và phiên tự hết hạn; không phụ thuộc unload hoặc đăng xuất.

Đây không phải số người duy nhất tuyệt đối: trình duyệt/thiết bị khác tính riêng, bot có thể gửi yêu cầu và cookie bị chặn có thể làm số liệu sai lệch. Bộ đếm trở về0 khi API khởi động lại và nhận tín hiệu mới trong tối đa khoảng2phút. Không có thống kê lịch sử.

## Quyền và dữ liệu

- GET `/api/admin/online`: kiểm session còn hạn, tài khoản active, verified và role admin/super_admin ở server. Không tin role/header/query do client gửi. Editor/reviewer/learner không xem được, dù gọi API trực tiếp.
- Dữ liệu trả về chỉ gồm tổng số, mốc thời gian, cửa sổ và tần suất cập nhật. Cache-Control private,no-store; không trả ID, email, địa chỉ IP hoặc danh sách người xem.
- POST `/api/presence/heartbeat`: body rỗng, cùng origin, JSON + X-HNL-Client theo CSRF hiện hành. Chỉ server tạo cookie ngẫu nhiên; server lưu digest và thời điểm cuối trong RAM, không ghi SQLite.
- Cookie HttpOnly, Secure trên production, SameSite Strict, path `/api/presence`, hết hạn120giây và được gia hạn khi heartbeat. Không dùng fingerprint hoặc dịch vụ analytics bên ngoài.
- Giữ global rate limit và trust proxy REC07 hiện hữu. Chống tạo cookie mới liên tục:20phiên mới/phút/IP; phiên đã biết vẫn heartbeat được. Retry-After60s và client tự lùi nhịp khi lỗi.
- Map giới hạn10.000phiên, dọn phiên hết hạn khi đọc/ghi. Khi đầy trả503, không làm tăng bộ nhớ vô hạn. Giới hạn này bảo vệ máy chủ, không phải cam kết tải đồng thời.
- UI chỉ xuất hiện trong CMS cho Admin/Super Admin; khi lỗi hoặc hết quyền hiển thị dấu“—”, không báo0 giả. Tab ẩn không tiếp tục poll.

## Mã thay đổi

- `server/presence.ts`, nối trong `server/app.ts`: bộ đếm và hai endpoint.
- `lib/presence.ts`: kiểu dữ liệu và hằng số dùng chung.
- `VisitorPresence.tsx`, `OnlineVisitors.tsx`, `online-visitors.css`, gắn trong Home/CMS/layout.
- Mục Thông tin & quyền riêng tư bổ sung mô tả cookie đếm online.
- `tests/presence.test.ts`: phân quyền, session hết hạn/hạ quyền, TTL/dedup, memory cap, input/CSRF, cookie, chống spam và không ghi SQLite.
- `tests/e2e/online-visitors.spec.ts`: Admin đọc/poll/lỗi/phục hồi, Editor không có thẻ/API call, khách gửi đúng nhịp và dừng khi tab ẩn; desktop/mobile.

## Kiểm thử và triển khai

- 56/56 kiểm thử unit/integration, build/typecheck và6/6E2E đạt; lint/smoke đang hoàn tất. Bằng chứng riêng `.local/online-20261023/`. Fixture E2E chỉ giả lập API đọc; phân quyền thật được kiểm bằng Express + SQLite bộ nhớ riêng.
- Windows đang có dev server của dự án khác trên3000; preview static dùng3100 riêng, không dừng server của chủ dự án.
- Lỗi test đã sửa: fixture restart cần cùng đồng hồ giả; limiter phụ tắt standard headers nên thêm Retry-After rõ ràng trong handler429. Không giảm CSRF hoặc phân quyền để vượt test.
- Trước triển khai: backup mã hóa/restore bằng service hiện hữu; snapshot env/Caddy/symlink/GitHEAD/digestSQLite/hashmedia rootprivate. Chỉ dùng các dependency đã cài; không đổi schema, npm deps, SES, Caddy, IAM hoặc hạ tầng.
- Deploy cả API và static bằng Git FF-only + bundle/asset SHA256, kiểm CI Private/main trước cutover. Backend cần restart ngắn để nạp module mới; health có retry. Không chạy import học liệu hoặc restore SQLite.
- Nếu critical gate lỗi: phục hồi symlink trước, chuyển code về commit trước theo trạng thái detached được ghi lại và restart API, giữ nhánh main/lịch sử; tuyệt đối không phục hồi đè database.
- Production chỉ kiểm heartbeat/cookie/CSRF/HTTP401, media/health; không tạo tài khoản Admin hoặc cấp thêm quyền để thử. Không tuyên bố đã mở thẻ bằng tài khoản Admin thật nếu chưa có phiên đăng nhập sẵn.

Kết quả CI/production và SHA cuối sẽ cập nhật sau khi thực hiện. Các bước triển khai trên chưa phải chứng cứ đã triển khai.
