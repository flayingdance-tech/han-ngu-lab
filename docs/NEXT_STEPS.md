# Bước tiếp theo

Checkpoint 2026-10-20T08:13:28.5011329+07:00, Asia/Bangkok (+07). Đọc PROJECT_STATUS và WORK_LOG trước.

1. Podcast radio đã áp dụng D-041: giọngv9 +1.3dB, nguyên nềnv8,7tập/14MP3. Không làm mẫu/hỏi chốt lại; chỉ đổi preset/nhạc khi chủ dự án yêu cầu mới. Không render lại hoặc chạy renderer lo-fi/hội thoại cũ. Sửa riêng phụ đề: đọc runbook, dùng podcast:subtitles và kiểm hash âm thanh.
2. Nếu cần đổi nguồn hoặc thêm tập: đọc PODCAST_RUNBOOK; dùng content/podcast-radio.json và podcast-radio-music.json, npm run podcast:render. Giữ WAVv9 và PCM nền pinned; kiểm hash/cache/checkpoint trước. ASR raw có thể bịa chữ ở outro, phải chạy podcast-asr-review.py và giữ unreviewed.
3. POD-02: quy trình duyệt chuyên môn, CMS reviewer/publication và xác minh quyền nhạc cho phát hành công khai. Không tự approved chỉ vì owner chọn âm sắc hoặc ASR/schema đạt.
4. AUDIO-07: người có chuyên môn rà chữ/Pinyin/thanh điệu/đa âm/độ tự nhiên. BộA145mục/290MP3 vẫn nguyên; không quay lại OmniVoice hoặc thêm nhạc vào bài/từ vựng.
5. Hoàn thiện CMS CSV/media/audit/users, hết phiên/lỗi mạng, giữ revision đã xuất bản và tiến độ. Tiếp tục ma trận/học liệu nhập môn–HSK4, hỗ trợ thay giáo trình/mở HSK5–6;16bài hiện tại còn draft.
6. Cloud/email/HTTPS cần quyền truy cập/cấu hình tài khoản; kiểm số dư/hạn thật và chi phí sau credit trước triển khai. Không mua/nâng gói/chi thêm. Local hoạt động không đồng nghĩa đã phát hành Internet.
7. Backup mới39file podcast đã restore/hash khớp cùng máy (STATUS có đường dẫn); còn offsite và migration toàn bộ user/progress/content/media/auth/email. Runtime/model và DB không nằm đủ trong backup podcast.
8. Giữ UI sáng; tối các tab khác giữ nữ lo-fi, chỉ ẩn trẻ chibi. D-042 khôi phục phụ đề 3 ngôn ngữ, podcast vẫn không ảnh. UI-05 cần asset gốc riêng nếu đòi trùng pixel collage.
9. D-042 logs subtitles-* ghi typecheck/lint/unit22/E2E10/build/QA/backup39file; D-041 radio-* giữ bằng chứng ASR/export trước đó. Không có tác vụ render/ASR/build còn chạy tại checkpoint. Kiểm PID web/API thật trước restart, không dump auth stdout.
