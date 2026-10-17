# Nhật ký công việc và bằng chứng

## 2026-10-16 — Asia/Bangkok — chuẩn bị dự án

Yêu cầu: đọc gói prompt, nêu nhận xét/ý tưởng, tạo chỉ dẫn ≤150 dòng và hồ sơ bàn giao; chờ cùng chốt trước khi xây.

### Đã thực hiện

- `Get-Location`, liệt kê root và kiểm tra `.codegraph/`: đúng D:\Hán Ngữ Lab, ban đầu trống, không có chỉ mục.
- Đọc ZIP bằng System.IO.Compression: 49.698 byte; 4 mục Markdown/TXT, không có source ứng dụng.
- Kiểm tra tên entry trước khi trích xuất; chỉ ghi file mới vào docs/references; giữ nguyên bản gốc.
- Đọc master chính, PRD và AWS blueprint; phát hiện xung đột phạm vi, nền tảng, đường dẫn và quyền tự thực hiện.
- Thử web bjtlab.me: không truy cập được; tìm kiếm không có kết quả; mở IAB bị timeout/reset. Chưa quan sát UI.
- Đọc skill Sites để tham khảo quy trình; chưa tạo Site, dùng starter, chọn hosting hoặc xuất bản.
- Kiểm tra nguồn chính thức Next.js static export, AWS Free Tier, DynamoDB modeling, Supabase RLS và HSK.
- Tạo AGENTS.md, REVIEW_PROPOSAL, DECISIONS, TASKS, PROJECT_STATUS, NEXT_STEPS và nhật ký này.

### Kết quả kiểm tra

- PowerShell kiểm tra AGENTS.md: 81 dòng, đạt giới hạn 150 dòng.
- SHA-256 từng entry ZIP đối chiếu file trích xuất: cả 4 file MATCH, giữ nguyên nội dung.
- Test-Path kiểm tra đủ 6 tài liệu quản lý dự án: đạt; lệnh xác minh exit code 0.
- Không chạy build/test ứng dụng: chưa có mã ứng dụng và chưa chốt bắt đầu.
- Không tạo tài nguyên cloud hoặc khởi tạo dự án phần mềm.

### Chưa làm / điều cần bàn giao

- Chưa được chủ dự án chốt bản phát hành, ngân sách và nền tảng.
- Chưa có nguồn duyệt học liệu hoặc đối tượng tuổi được xác nhận.
- Chưa xác minh tài khoản AWS, runtime, dependency, domain hoặc giá dịch vụ theo cấu hình.
- Tiếp tục từ NEXT_STEPS.md; không thực thi lệnh khởi công trong tài liệu gốc.

## 2026-10-16 — cập nhật sau phản hồi chủ dự án

- Chốt đầy đủ nhập môn–HSK 4, hỗ trợ sửa/import giáo trình HSK 1–6 về sau; AI không bắt buộc.
- Chốt 150 USD tổng 6 tháng gồm credit; ưu tiên không tiền trả thêm. Chủ dự án báo 200 USD credit, Free Plan còn 5 tháng 20 ngày; chưa xác minh Console.
- Yêu cầu độ tuổi ban đầu đổi thành mọi tuổi rồi được chủ dự án chốt lại 18+; trạng thái cuối 18+.
- Người duyệt có sau; nghiên cứu kiểm tra bằng code, Gemini free tier và Bedrock, giữ phân biệt AI góp ý với duyệt chuyên môn.
- Đọc nguồn chính thức Gemini pricing/rate limits/terms, AWS Free Tier/Bedrock, Cloudflare D1/Workers/Pages.
- Tạo PRODUCT_SPEC và COST_AND_PORTABILITY_PROPOSAL; cập nhật AGENTS, DECISIONS, STATUS, TASKS, NEXT_STEPS, đánh dấu đề xuất cũ đã bị thay thế.
- Chưa khởi tạo ứng dụng, chạy test app, tạo tài nguyên, dùng API trả phí hoặc lập automation.
- Xác minh PowerShell: AGENTS.md 86 dòng (≤150), đủ 7 tài liệu được kiểm tra; đối chiếu phạm vi HSK 4, tuổi 18+ và trần 150 USD trong chỉ dẫn/đặc tả/quyết định. Exit code 0.

## 2026-10-16 đến 2026-10-17 — khởi công và tiếp tục mã

- Người dùng chốt bắt đầu, sau đó yêu cầu tiếp tục; không còn chặn bởi bước xin khởi công.
- Cài dependency với quyền mạng được cấp; Node 24.15.0, npm 11.12.1. Install thành công, npm báo 5 high vulnerabilities ở lần cuối; audit cần xác minh.
- Tạo frontend Next/React, Express API, SQLite local, auth, bảo vệ CSRF, role, grade/idempotency, SRS, CMS revision, import/export JSON và backup AES-GCM.
- Soạn 16 bài local preview có nội dung ở các cấp 0–4; chưa phải giáo trình hoàn chỉnh HSK 4.
- Thêm unit/integration tests và scripts admin/backup; README và runbooks.
- Lượt typecheck đầu báo TS2775 ở assertion arrow; sửa thành function declaration. Đồng thời chỉ cho archive revision đã published để không khôi phục nhầm bài chưa xuất bản.
- Ngày 17/10 lệnh shell phản hồi chậm; theo dõi tiến trình thay vì coi thiếu output là đạt. Một lượt test qua Node REPL bị giới hạn 25 giây sau khi 4 domain tests in đạt; chưa ghi nhận toàn suite thành công.
- Đang chờ typecheck/integration/lint/audit, chưa có kết quả E2E/build hoặc triển khai. Hồ sơ hiện phản ánh trạng thái đang làm.

## 2026-10-17 — mốc trước checkpoint 14:08 +07:00 — xác minh runtime và CMS

- Unit/integration: `node --import tsx --test tests/domain.test.ts tests/integration.test.ts`: 11 đạt, 0 lỗi; chạy được sau cấp quyền loopback. Có thử mã hóa/restore thật sang SQLite mới, chưa phải backup ngoài AWS.
- `node node_modules/next/dist/bin/next build --webpack`: exit 0, static export `/` và `/_not-found`. Build trước bổ sung RevisionPreview; cần build lại mã cuối.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false`: exit 0 sau thay đổi CMS/AuthPanel.
- `node node_modules/eslint/bin/eslint.js app server lib scripts tests`: exit 0 lần đầu; đang xác minh lại phần mới.
- Content check: 16 bài, 94 word IDs, 80 câu hỏi, 0 bài humanReviewed, chưa đủ HSK4. Bỏ ví dụ từ vựng fallback không chứa từ để không dạy ngữ cảnh sai; khoảng trống cần biên tập.
- Thêm RevisionPreview cho reviewer xem đủ nội dung/đáp án; focus trap, Escape và trả focus cho AuthPanel.
- E2E desktop lộ trình/tìm/mở bài đạt. Ca đăng nhập timeout ở nút sidebar; đổi selector sang header cho cả mobile/desktop, chờ xác minh lại. Không coi cả suite đạt.
- Tắt Next agentRules để giữ chỉ dẫn cố định do chủ dự án quản lý, theo docs bundled của phiên bản đang cài.
- Audit 5 high thuộc chuỗi công cụ lint/braces, advisory GHSA-vfj7-8cjw-p6xm chưa có bản vá; không hạ Next/eslint-config tùy tiện.

## 2026-10-17 14:08 +07:00 — mốc local đã kiểm chứng

- Sửa Strict Mode xác minh email bị gửi hai lần; token server vẫn dùng một lần. 6/6 Playwright trên Edge desktop/mobile đạt, gồm đăng ký/học/reload, lộ trình và keyboard focus.
- Bổ sung 39 ví dụ tự soạn; chuẩn hóa ID trước tra ví dụ. `content-check --report`: 16 bài, 94 word IDs, 80 câu hỏi; 0 thiếu ví dụ, 16 chờ mapping, 16 chờ human review. Không đủ HSK4.
- Seed append revision sample khi nguồn đổi, giữ bản cũ/published pointer; thêm test chống tạo lặp.
- Backup từ chối thiếu bảng và published pointer không hợp lệ; test rollback không để dữ liệu dở.
- Toàn bộ 15 unit/integration/editorial tests đạt; typecheck, lint và build cuối exit 0. TEST_REPORT.md ghi lệnh và giới hạn.
- Xem screenshot desktop/mobile, không tràn ngang; chưa kiểm thử thiết bị thật/CMS browser/load test.
- Preview cũ dừng, khởi động mới session 92988 với Next `-H 127.0.0.1`, API loopback. Sau restart HTTP 200.
- Không tạo cloud, không gửi email thật, không thêm phí. Các thiếu sót còn lại đã ghi NEXT_STEPS/TASKS.
