# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

- Checkpoint: 2026-10-18 19:35 +07:00. AUDIO-06 IN_PROGRESS: đã có 72/145 đoạn (mỗi đoạn thường/chậm). Sau gián đoạn, renderer cũ PID6328 không còn; đã tiếp tục bằng launcher PID10224, Python con PID13924; finalizer launcher PID13136, con PID14852. Log ở .local/voice/*-resume.log và *-resume.err. Chưa có finalize-report.json thành công; không chạy thêm producer trùng.
- UI-07 DONE: dark khôi phục nữ lo-fi study-night.webp, chỉ ẩn trẻ chibi; light giữ nguyên. Thay cách hiểu ảnh nền ở UI-06.
- Workspace: D:\Hán Ngữ Lab. Đã được giao triển khai, không hỏi lại lệnh bắt đầu.
- Mốc UI-04: bố cục/tỉ lệ sát collage đã triển khai. Home banner ~3:1 + 3 thẻ ngang, header gọn/cảnh nền, bé trai sidebar desktop lớn, review scene, StudyActivity dùng dữ liệu thật. Chưa trùng hoàn toàn ảnh gốc; UI-05 phụ thuộc bộ asset riêng lẻ.
- File chính: app/themes.css, app/components/ThemeToggle.tsx, ChineseText.tsx, LessonPlayer.tsx, app/page.tsx, app/layout.tsx; thêm app/reference-ui.css, StudyActivity.tsx; assets/prompt trong DESIGN_ASSETS.md, REFERENCE_UI_PROMPTS.json.
- Xác minh UI-04: typecheck/lint 25412 đạt, lint cuối đạt; build 64823 exit 0. E2E 29130 10/10; sau chỉnh sidebar, theme 29815 4/4. Đã xem desktop/mobile sáng/tối, lịch tháng/đổi tháng và sáu asset trong out/images.
- Lỗi đã sửa: fixture CMS trùng tên giữa các lượt (UUID); tên accessible radio khi tách chữ Hán; dấu câu bị giãn trong flex. Đã xem ảnh desktop/mobile sáng/tối và bài học.
- Preview loopback http://localhost:3000/ và ảnh WebP trả HTTP 200. Giữ server hiện hành; kiểm tra port/process trước chạy mới, không giả định session cũ còn sống.
- UI-07: theme 56696 đạt 4/4, build 26032 exit 0 (gồm TypeScript), lint test exit 0; đã xem dark home desktop. Diff CSS chỉ đổi biến ảnh dark và comment.
- Không còn build/test đang chạy. Không có .codegraph/ tại lần kiểm tra, không tự index.
- Backend hiện có: Express, SQLite local; auth email mô phỏng, role, chấm server/idempotency, progress/SRS, CMS revision/rollback/import JSON, backup AES-GCM.
- CMS-EDIT-01: DONE; soạn choice/input/order, alternatives, Pinyin ví dụ, thứ tự; 2 CMS E2E đạt.
- FIX-01: DONE; nút Đăng xuất rõ chữ tại header, E2E logout/reload/401 đạt.
- Unit/integration mốc trước: 15/15; lượt UI không đổi backend nên không chạy lại. Chi tiết TEST_REPORT.
- Học liệu: 16 bài draft, 94 word IDs, 80 câu hỏi; đã bổ sung 39 ví dụ. Chưa đủ giáo trình HSK4, chưa ánh xạ chuẩn đầy đủ hoặc duyệt chuyên môn độc lập. Không tự publish.
- Seed thêm revision sample khi nguồn đổi, không ghi đè lịch sử hoặc published pointer. Giữ .local/ và tài khoản người dùng.
- Backup local đã thử restore vào DB mới, kiểm tra sai mật khẩu/thiếu bảng/pointer hỏng/DB không trống. Chưa có backup ngoài AWS hoặc diễn tập cloud migration.
- Cloud: chưa truy cập tài khoản, chưa tạo tài nguyên/deploy. Production còn cần HTTPS/email.
- Phạm vi giữ nguyên: nhập môn–hết HSK4, miễn phí 18+, AI tùy chọn, thay giáo trình/mở rộng HSK5–6, backup di chuyển.
- Ngân sách tối đa 150 USD/6 tháng gồm credit, không tiền trả thêm. 200 USD credit và hạn 5 tháng 20 ngày là thông tin chủ dự án cung cấp 16/10, chưa kiểm tra Console.
- Dependency audit mốc trước: 5 high trong dev ESLint/braces, cần kiểm tra lại trước release.
- Bước tiếp: NEXT_STEPS. Chưa hoàn thành toàn dự án; không quảng cáo độ phủ học liệu/triển khai vượt bằng chứng.
- Xác minh UI-06: typecheck/lint 14722 exit 0; build cuối 21044 exit 0. Theme lượt đầu 3 đạt/1 lỗi do CSS specificity; đã sửa, ca đó chạy lại 50383 đạt. Đã xem dark review desktop và home mobile. Không còn test/build cần chờ.

- 2026-10-18 +07:00 AUDIO-01: khảo sát VoiceStudio/podcast xong; mới đánh giá khả thi, chưa xử lý MP4 hoặc thay audio. AUDIO-02 còn quyền giọng và thử chất lượng; WORK_LOG.

- AUDIO-02 IN_PROGRESS 2026-10-18 +07:00: chủ dự án xác nhận full quyền giọng; đang chuẩn bị mẫu tách nhạc và chỉnh nhẹ, chưa nhân bản. Venv/session và lệnh ở WORK_LOG; scripts/audio_preview.py tái lập pipeline.


- AUDIO-03 DONE 2026-10-18 15:25 +07:00: 3 mẫu MP3 24.5s tại .local/audio-preview; model htdemucs CPU, 42.95s pipeline, ffprobe/decode/loudness và pip check đạt. Chờ đánh giá nghe; chưa clone/TTS hoặc thay audio web. Không có tiến trình cần chờ.

- AUDIO-04 DONE 2026-10-18 15:30 +07:00: mẫu trẻ nhẹ 06 (+0.75 cung)/vừa 04 (+1 cung), mỗi bản 24.5s trong .local/audio-preview; encode/decode/duration/peak đạt. Chờ đánh giá nghe; chưa áp dụng website hoặc clone.

- AUDIO-05 2026-10-18 +07:00: file vocals mới đã kiểm tra metadata/peak; chưa nghe/duyệt ngữ âm, chưa chốt master. Đề xuất thử clone nguồn không chỉnh pitch/formant và duyệt tiếng Trung; chi tiết WORK_LOG.

- AUDIO-06 IN_PROGRESS 2026-10-18 16:19 +07:00: pipeline clone thật đã xuất mẫu; phiên sản xuất hiện 12229/PID 16772 (INT8/ref4.11s) đang chạy, không khởi động trùng. Mục tiêu 145 âm thường +145 chậm. Mã frontend đã chuyển file giọng riêng, chưa đủ corpus; chưa nghiệm thu. Unit/integration 29471 đạt 18/18, typecheck/lint 7110 đạt; cần build, audit, E2E cuối khi render/code ổn định. Xem WORK_LOG/VOICE_RUNBOOK.

- AUDIO-06 checkpoint 16:38 +07:00: 40746/PID6328 đang render137 clip còn lại (sau8đãcó), không chạy bản thứhai. 14ca E2E44018 đạt13/14; lỗifixturemobile navtrùng, đãscopetheonavigation; rerun54092 đạt1/1. Tổng14cađạtquasửa/chạylại. Unit18/18, typecheck/lint51053 đạt. Finalizerđangchờrenderđểaudit, QA, cache-no-op, archiveprototypevàbackup/build/exportcheck; chưa coi cácbướcnàyđãđạt.
