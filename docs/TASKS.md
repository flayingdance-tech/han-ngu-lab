# Bảng công việc

Cập nhật: 2026-10-17, Asia/Bangkok.
Trạng thái: TODO / IN_PROGRESS / BLOCKED / DONE. Phạm vi đã chốt; nghiệm thu trọn dự án còn các mục chưa xong.

| ID | Việc | Trạng thái | Điều kiện xong / bằng chứng |
|---|---|---|---|
| PRE-01 | Xác nhận workspace và nội dung ZIP | DONE | Đúng root, ban đầu trống; ZIP có 4 file |
| PRE-02 | Đọc, bảo toàn tài liệu gốc | DONE | docs/references; master chính + toàn bộ PRD/blueprint đã đọc |
| PRE-03 | Đối chiếu mâu thuẫn và đề xuất | DONE | REVIEW_PROPOSAL.md |
| PRE-04 | Tạo chỉ dẫn tối đa 150 dòng | DONE | AGENTS.md; kết quả kiểm tra trong WORK_LOG |
| PRE-05 | Tạo sổ bàn giao và quy trình tiếp tục | DONE | STATUS, TASKS, DECISIONS, NEXT_STEPS, WORK_LOG |
| PRE-06 | Kiểm tra tài liệu chính thức liên quan | DONE | Nguồn Next.js, AWS, Supabase, HSK trong REVIEW_PROPOSAL |
| PRE-07 | Khảo sát trực quan bjtlab.me | BLOCKED | Công cụ web không truy cập được, trình duyệt timeout; chưa đánh giá UI |
| DEC-01 | Chốt phạm vi, nội dung, AI | DONE | PRODUCT_SPEC, D-008/D-013: HSK 4 đầy đủ, AI tùy chọn |
| DEC-02 | Chốt ngân sách, đối tượng và thời điểm duyệt | DONE | D-009/D-010/D-011: 150 USD gồm credit, 18+, người duyệt có sau |
| DEC-03 | Chốt khởi công, kiến trúc và quyền triển khai | IN_PROGRESS | Đã chốt bắt đầu; kiến trúc local ghi ARCHITECTURE, cloud chưa xác minh |
| PRE-08 | Cập nhật phương án chi phí/AI/di chuyển | DONE | COST_AND_PORTABILITY_PROPOSAL; nguồn chính thức đã đọc |
| CONTENT-01 | Lập ma trận độ phủ nhập môn–HSK 4 theo chuẩn xác định | IN_PROGRESS | Có inventory/audit 16 bài; chưa có ma trận đầy đủ chuẩn HSK |
| OPS-00 | Kiểm tra hạn Free Plan, credit và dịch vụ khả dụng | TODO | Hiện chỉ có thông tin chủ dự án, chưa kiểm tra Console |
| DEV-01 | Khảo sát runtime, Git, lập đặc tả và kiến trúc cuối | IN_PROGRESS | Runtime đã biết, tài liệu local đã có; cloud chưa chốt theo tài khoản |
| DEV-02 | Khởi tạo source, thiết kế giao diện, pipeline | IN_PROGRESS | Source local đã qua build/lint/E2E; pipeline release/cloud chưa có |
| DEV-03 | Auth, phân quyền, API, dữ liệu | IN_PROGRESS | API local qua integration; email local mô phỏng, production email chưa cấu hình |
| DEV-04 | CMS, revision, media, import/export | IN_PROGRESS | Có workflow/JSON/bản xem duyệt và cảnh báo biên tập; media/CSV chưa hoàn thiện |
| DEV-05 | Học bài, chấm điểm, tiến độ, SRS | IN_PROGRESS | Luồng học/lưu tiến độ qua E2E desktop/mobile; chưa nghiệm thu mọi lỗi mạng/phiên |
| DEV-06 | Soạn và kiểm duyệt học liệu | IN_PROGRESS | Có 16 bài thử nghiệm, chưa đủ HSK 4 hoặc duyệt độc lập |
| DEV-07 | AI và tính năng mở rộng nếu được chọn | TODO | Phạm vi quyết định; quota, chất lượng và chi phí kiểm thử |
| OPS-01 | Dự toán, xác minh tài khoản, cấp quyền | TODO | Số liệu thực tế; không suy từ ZIP |
| OPS-02 | Staging, E2E, bảo mật, backup/restore | IN_PROGRESS | 6 E2E local đạt, backup roundtrip đạt; staging/cloud chưa có |
| OPS-04 | Diễn tập chuyển nhà cung cấp | TODO | Restore ngoài AWS giữ user/progress/media; auth/email hoạt động; kế hoạch trước hết hạn |
| OPS-03 | Phát hành trong phạm vi được cấp | TODO | URL, smoke test, giám sát và vận hành được xác minh |
| END-01 | Nghiệm thu và bàn giao | TODO | Đủ tiêu chí đã chốt, không còn thiếu mục bắt buộc |
| FIX-01 | Đăng xuất dễ tìm desktop/mobile | DONE | Nút header, 2 E2E xác minh logout + /me 401 + reload |
| CMS-EDIT-01 | Soạn đủ 3 loại bài tập, alternatives, Pinyin ví dụ, thứ tự | DONE | 2 CMS E2E, typecheck, lint và build đạt ngày 18/10 |
| UI-02 | Pastel theo ảnh, chữ Trung lớn, theme tối lo-fi | DONE | Typecheck/lint/build đạt; 2 theme E2E, 8 ca học/CMS đạt qua chạy lại; xem TEST_REPORT/DESIGN_ASSETS |
| UI-03 | Minh họa chibi riêng cho bốn tab học | DONE | 4 WebP alpha, 10/10 E2E học/theme/chibi; typecheck/lint/build đạt; screenshot desktop/mobile sáng/tối |
| UI-04 | Bố cục/tỉ lệ và minh họa sát collage gốc | DONE | Home 3 thẻ/banner ~3:1, header gọn/scenery, dữ liệu lịch thật; 10 E2E + 4 theme cuối, typecheck/lint/build đạt |
| UI-05 | Dùng đúng minh họa gốc trùng hoàn toàn mẫu | BLOCKED | Cần bộ asset gốc riêng lẻ; hiện chỉ có collage 821x461, bản tái dựng không trùng pixel |
| UI-06 | Bỏ chibi khỏi dark | DONE | Ẩn mascot/header/sidebar, hero góc học trống; 4 ca theme đạt qua sửa và chạy lại; typecheck/lint/build đạt |
