# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

- Checkpoint: 2026-10-17 14:08 +07:00 (Asia/Bangkok).
- Workspace: `D:\Hán Ngữ Lab`. Đã chốt khởi công; không hỏi lại lệnh bắt đầu.
- Phạm vi: nhập môn đến hết HSK 4; miễn phí, 18+, AI tùy chọn, CMS thay giáo trình/mở rộng HSK 5–6, backup di chuyển.
- Ngân sách: tối đa 150 USD/6 tháng gồm credit, không tiền trả thêm. 200 USD credit và 5 tháng 20 ngày Free Plan là thông tin chủ dự án cung cấp 16/10, chưa kiểm tra Console.
- Source: Next frontend, Express API, SQLite local; auth email mô phỏng, role, chấm server/idempotency, progress/SRS, CMS revision/rollback/import JSON, backup AES-GCM.
- Đã xác minh: 6/6 E2E desktop/mobile (đăng ký→xác minh→học→reload giữ tiến độ; lộ trình; focus bàn phím). Đã xem screenshot hai kích thước.
- Unit/integration: 15/15 đạt sau sửa ID ví dụ; typecheck, lint toàn ứng dụng/lint phần mới và build cuối đều exit 0. Xem TEST_REPORT.md.

- Học liệu: 16 bài draft, 94 word IDs, 80 câu hỏi; bổ sung 39 ví dụ. Audit cấu trúc không còn thiếu ví dụ/Pinyin/nghĩa; 16 bài chờ ánh xạ chuẩn và 16 chờ duyệt người thật. Chưa đủ giáo trình HSK 4.
- Lưu ý: nội dung có chữ Hán/Pinyin/nguồn không đồng nghĩa được chuyên gia xác nhận đúng; không tự publish.
- Seed mới bổ sung revision sample khi nguồn đổi, không ghi đè revision cũ, không đụng published pointer. Tiến độ học giữ lịch sử cũ.
- Đã sửa lỗi Strict Mode gửi xác minh email hai lần; dùng chung promise, token server vẫn single-use.
- CMS có bản xem đầy đủ đáp án và cảnh báo biên tập. Media, CSV, UI quản lý người dùng/audit và kiểm thử CMS qua browser còn thiếu.
- Backup: đã restore thật sang DB mới trong test; từ chối sai mật khẩu, thiếu bảng, con trỏ xuất bản hỏng và DB không trống. Chưa có bản backup ngoài AWS hoặc diễn tập cloud migration.
- Cloud: chưa truy cập tài khoản, chưa tạo tài nguyên, chưa deploy, chưa dùng AI trả phí. Production fail-closed nếu thiếu HTTPS/email.
- Dependency audit: 5 high trong chuỗi dev ESLint/braces, advisory GHSA-vfj7-8cjw-p6xm chưa có bản vá ở lần kiểm tra; không tự downgrade framework. Cần kiểm tra lại trước release.
- Git đã init; chưa commit tại lúc viết checkpoint. Không có `.codegraph/`, không tự index.
- Tiến trình: preview loopback 92988 đang chạy cổng 3000/API3001. Build 19113, lint 35974/94185, E2E 84231 và toàn bộ tests đã kết thúc đạt. Preview HTTP 200 sau restart; không chạy thêm server nếu cổng đang dùng.
- Không còn bindings Node REPL cũ. Kiểm tra native sessions và port trước chạy lặp.
- Bằng chứng: `docs/TEST_REPORT.md`, `docs/reports/content-audit.json`, `docs/WORK_LOG.md`.
- Bước tiếp: `docs/NEXT_STEPS.md`; không đánh dấu dự án hoàn thành khi thiếu HSK4/cloud/media/duyệt.
