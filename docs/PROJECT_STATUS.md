# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-18 20:24 +07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Mốc giọng đọc vừa hoàn tất

- AUDIO-06 DONE về tích hợp kỹ thuật: 145 đoạn, 290 MP3 thường/chậm, đủ các nút nghe hiện có trong 16 bài preview, hội thoại và sổ từ vựng. Không đồng nghĩa đã nghiệm thu phát âm hoặc hoàn thành HSK4.
- Giọng đã chốt: bản chỉ tách nhạc, không đổi pitch/formant; quyền dùng/nhân bản đã được chủ dự án xác nhận. Master .local/audio-preview/vocals.wav; reference 4.11 giây, metadata/hash tại .local/voice/reference.json.
- Native OmniVoice từ VoiceStudio source pinned, CPU offline; website phát MP3 cùng origin, không API tạo giọng có phí hoặc giọng thiết bị thay thế. Không cài full desktop GUI/backend VoiceStudio.
- Finalizer .local/voice/finalize-report.json thành công lúc 20:22:49 +07:00: 145 entries/290 files, build và static export đạt, 12 prototype đã chuyển vào private, không reference/model/prompt trong out. Render/finalizer đã kết thúc; không chạy lại nếu không có thay đổi.
- Backup/restore thực: .local/voice-backups/2026-10-18T13-21-20-771Z và .local/voice-restore-check cùng timestamp, 297 file khớp SHA256. Có master/profile riêng; không chứa DB/model/runtime/WAV cache. Đây là backup cùng máy, chưa ngoài máy/AWS.
- Signal QA: decode toàn bộ 290 MP3; tần số mono 24 kHz, dữ liệu hữu hạn, mức đỉnh, thời lượng và tỷ lệ chậm/thường đạt ngưỡng kỹ thuật; issues 0. Inventory public: docs/reports/audio-inventory.json. Cache no-op: generated0/pending0/cacheHittrue.
- ASR 8 mẫu có nhiều từ/câu ngắn nhận sai hoặc trống; F0 bốn thanh trước đó chưa rõ. Mọi audio vẫn unreviewed và chỉ phát trong preview. AUDIO-02 còn đánh giá nghe; AUDIO-07 TODO duyệt chuyên môn. Không gọi kết quả ASR là kiểm định thanh điệu.
- Pinyin phân biệt key nhưng chưa điều khiển trực tiếp phát âm model. MOSS prototype có dấu hiệu thiếu cuối câu, chưa thay engine chính. Hướng dẫn: VOICE_RUNBOOK.

## Kiểm thử và vận hành local

- Unit/integration 18/18; typecheck/lint đạt mốc mã tích hợp. Audio E2E mới 32319 đạt 4/4 desktop/mobile không retry; learning/theme mốc trước 14 ca đã đạt qua sửa/chạy lại. Python file-lock regression 2/2; phục hồi WAV thật 35192 và từ chối đổi profile với manifest SHA256 giữ nguyên đều đạt. Xem TEST_REPORT/WORK_LOG để biết các lượt lỗi trước.
- Đã sửa Windows WinError5 bằng atomic replace có retry hữu hạn, lưu cả batch WAV trước encode và phục hồi WAV cùng fingerprint. Mã mốc f7cf56e, 9fe0a0d; bộ asset cuối theo Git log. Không xóa/reset dữ liệu để sửa.
- Preview http://localhost:3000/; sau build trang/API catalog/MP3 thường và chậm đều HTTP200 lúc20:23. API listener 10460, web 1472 (launcher3296/2988); phải kiểm tra PID/listener trước khi khởi động lại. Không dump log auth; .local/dev-*-resume.log/.err.
- Không có .codegraph/ ở lần kiểm tra, không tự index. AGENTS 96 dòng. Giữ .local/ và tài khoản/DB. Model/reference/prompt không vào Git/public; chỉ audio tổng hợp và manifest được commit.
- pip check runtime đạt; npm audit --omit=dev hiện 0 vulnerability. Cảnh báo 5 high trong dev mốc cũ chưa rà lại; không kết luận toàn hệ thống đã an toàn.

## Phần dự án còn lại

- UI-07 DONE: tối giữ nữ lo-fi study-night.webp, chỉ ẩn trẻ chibi; sáng giữ nguyên. UI-05 cần asset gốc riêng nếu muốn trùng hoàn toàn collage.
- Backend local: Express/SQLite, auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/rollback/import JSON và editor, backup AES-GCM; nút đăng xuất đã kiểm thử.
- 16 bài draft, 94 word IDs, 80 câu hỏi, 39 ví dụ: chưa đủ giáo trình HSK4 hoặc duyệt chuyên môn. Podcast chưa có thư viện hoàn chỉnh. Không tự publish.
- Cloud chưa truy cập/tạo tài nguyên/deploy; production còn cần HTTPS/email. Backup ngoài AWS và diễn tập migration chưa thực hiện. Bản local không chứng minh các việc này.
- Phạm vi: nhập môn–HSK4, miễn phí 18+, AI tùy chọn, thay giáo trình/mở rộng HSK5–6; tối đa 150 USD/6 tháng gồm credit, không tiền trả thêm. Credit 200 USD/hạn còn 5 tháng 20 ngày là chủ dự án cung cấp, chưa kiểm tra Console.
- Chưa hoàn thành toàn dự án. Bước tiếp: NEXT_STEPS; lịch sử và bằng chứng: WORK_LOG/TEST_REPORT.
