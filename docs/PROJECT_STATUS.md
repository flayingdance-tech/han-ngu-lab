# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-18 20:09 +07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Công việc đang chạy

- AUDIO-06 IN_PROGRESS: 124/145 đoạn đã có đủ MP3 thường/chậm, mục tiêu 290 file. Tiếp tục cùng master và fingerprint sau khi tiến trình cũ dừng ở 72; không tạo lại mục đã đủ.
- Producer launcher PID588/Python con PID6488. Finalizer launcher PID13792/con PID13632 chờ producer. Kiểm tra PID thực trước khi thao tác; không khởi động trùng. Log: .local/voice/render-final.log, render-final.err, finalize-final.log, finalize-final.err.
- Finalizer phải audit đủ 145, kiểm tra cache/decode/ASR, archive prototype, backup/restore, build và đối chiếu static export. Chưa có finalize-report.json thành công ở checkpoint này.
- Commit tích hợp mã: f7cf56e. Asset đang tạo chưa commit. Có lock và manifest nguyên tử để tiếp tục sau gián đoạn.
- Không có .codegraph/ ở lần kiểm tra; không tự index.

## Giọng và bằng chứng hiện có

- Chủ dự án đã xác nhận đầy đủ quyền giọng và chọn bản chỉ tách nhạc, không chỉnh pitch/formant. Master .local/audio-preview/vocals.wav; reference 4.11 giây, metadata/hash trong .local/voice/reference.json.
- Native engine OmniVoice từ VoiceStudio source pinned, chạy CPU offline. Không cài full desktop GUI/backend; không API có phí và không fallback giọng thiết bị. Website chỉ phát MP3 cùng origin.
- Đã thay luồng từ vựng trong bài, hội thoại và sổ từ vựng. Lỗi thiếu file/mạng có thông báo và thử lại; đổi trang dừng audio. Giữ nguyên CSS/theme.
- Unit/integration 18/18; typecheck/lint đạt. 14 ca E2E audio/learning/theme desktop/mobile đã đạt qua sửa fixture và chạy lại; chi tiết WORK_LOG. Chưa có build cuối audio.
- Backup/restore thực tại 19:38: 72 entries, 151 file khớp SHA256; .local/voice-backups/2026-10-18T12-38-21-134Z và voice-restore-check cùng timestamp. Đây là backup cùng máy, chưa ngoài máy/AWS; chưa đủ corpus cuối.
- Tất cả audio tổng hợp unreviewed, chỉ phát trong preview. ASR từ ngắn có nhận nhầm/bỏ sót; F0 bốn thanh chưa rõ. Không tuyên bố đúng phát âm. Pinyin phân biệt key nhưng chưa điều khiển trực tiếp model. MOSS prototype có dấu hiệu thiếu cuối câu, chưa thay engine chính.
- Hướng dẫn tái tạo/sao lưu: VOICE_RUNBOOK. Không đưa source reference/prompt/model vào public hoặc Git.

## Trạng thái sản phẩm còn lại

- UI-07 DONE: dark giữ nữ lo-fi study-night.webp, chỉ ẩn trẻ chibi; light giữ nguyên. Theme 4/4, lint/build đạt mốc UI. UI-04 sát bố cục collage đã triển khai; UI-05 cần asset gốc riêng nếu muốn trùng hoàn toàn ảnh.
- Backend local: Express/SQLite, auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/rollback/import JSON và editor, backup AES-GCM. Nút đăng xuất đã kiểm thử. Giữ tài khoản/DB trong .local, không reset.
- 16 bài draft, 94 word IDs, 80 câu hỏi, 39 ví dụ; chưa đủ giáo trình HSK4 hoặc duyệt chuyên môn. Không tự publish. Podcast chưa có thư viện hoàn chỉnh.
- Cloud chưa truy cập/tạo tài nguyên/deploy; preview dev phải kiểm tra listener rồi khởi động lại sau build nếu đã dừng. Production còn cần HTTPS/email. Backup ngoài AWS và diễn tập migration chưa thực hiện.
- Phạm vi giữ: nhập môn–HSK4, miễn phí 18+, AI tùy chọn, thay giáo trình/mở rộng HSK5–6; tối đa 150 USD/6 tháng gồm credit, không tiền trả thêm. Credit 200 USD/hạn còn 5 tháng 20 ngày là thông tin chủ dự án cung cấp, chưa kiểm tra Console.
- Dependency audit mốc trước có 5 high trong dev ESLint/braces; cần rà trước release. Chưa hoàn thành toàn dự án. Bước tiếp: NEXT_STEPS; lịch sử và bằng chứng chi tiết: WORK_LOG/TEST_REPORT.
