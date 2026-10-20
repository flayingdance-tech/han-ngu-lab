# Bước tiếp theo

Checkpoint 2026-10-20T15:47:30.7933947+07:00, Asia/Bangkok (+07). Đọc PROJECT_STATUS và WORK_LOG trước.

0.1 PUB-01 đã được xác nhận D-046 và push97e562f lên main Private https://github.com/flayingdance-tech/han-ngu-lab; Actions39400869176 success. Local master theo dõi origin/main. Checkpoint tài liệu sẽ push riêng và kiểm CI mới; nếu lỗi phải báo nguyên nhân/phương án trước push thêm. Không AWS/Public/force.
0. DEP-01/D-044 xong: đọc PRE_GITHUB_AUDIT.md/DEPLOYMENT. Không push GitHub hoặc tạo AWS resources khi chưa có yêu cầu. Bước sau là private repo visibility/remote, plan/credit/eligibility, email adapter, API HTTPS+DB persistent+backup ngoài máy+proxy /api và publication dữ liệu. Không bỏ production guard, không audit lại3phần owner đã duyệt. Dev advisory braces chưa có fix; CI chỉ validate và không có AWS secrets.
1. POD-06/D-043 đã đổi tên thành Hán Ngữ Lab / 汉语实验室 trên7tập/14MP3 và phụ đề: cùng giọngA,29đoạn PCM và nềnv8 giữ nguyên. Không làm mẫu/hỏi chốt lại; chỉ đổi preset/nhạc khi chủ dự án yêu cầu mới. Không render lại hoặc chạy renderer lo-fi/hội thoại cũ. Sửa riêng phụ đề: đọc runbook, dùng podcast:subtitles và kiểm hash âm thanh.
2. Nếu cần đổi nguồn hoặc thêm tập: đọc PODCAST_RUNBOOK; dùng content/podcast-radio.json và podcast-radio-music.json, npm run podcast:render. Giữ base WAV/report hiện hành ở brand-lab và PCM nền pinned; mẫu WAVv9 là lịch sử. kiểm hash/cache/checkpoint trước. ASR raw có thể bịa chữ ở outro, phải chạy podcast-asr-review.py và giữ unreviewed.
3. POD-02: quy trình duyệt chuyên môn, CMS reviewer/publication và xác minh quyền nhạc cho phát hành công khai. Không tự approved chỉ vì owner chọn âm sắc hoặc ASR/schema đạt.
4. AUDIO-07: người có chuyên môn rà chữ/Pinyin/thanh điệu/đa âm/độ tự nhiên. BộA145mục/290MP3 vẫn nguyên; không quay lại OmniVoice hoặc thêm nhạc vào bài/từ vựng.
5. Hoàn thiện CMS CSV/media/audit/users, hết phiên/lỗi mạng, giữ revision đã xuất bản và tiến độ. Tiếp tục ma trận/học liệu nhập môn–HSK4, hỗ trợ thay giáo trình/mở HSK5–6;16bài hiện tại còn draft.
6. Cloud/email/HTTPS cần quyền truy cập/cấu hình tài khoản; kiểm số dư/hạn thật và chi phí sau credit trước triển khai. Không mua/nâng gói/chi thêm. Local hoạt động không đồng nghĩa đã phát hành Internet.
7. Backup mới70file podcast đã restore/hash khớp cùng máy (STATUS có đường dẫn); còn offsite và migration toàn bộ user/progress/content/media/auth/email. Runtime/model và DB không nằm đủ trong backup podcast.
8. Giữ UI sáng; tối các tab khác giữ nữ lo-fi, chỉ ẩn trẻ chibi. D-042 khôi phục phụ đề 3 ngôn ngữ, podcast vẫn không ảnh. UI-05 cần asset gốc riêng nếu đòi trùng pixel collage.
9. D-043 logs brand-* ghi typecheck/lint/unit22/E2E10/build/QA/ASR7tập/backup70file; ASR phải khớp SHA mix hiện hành. Bộ bài học290SHA và export không đổi. Không có tác vụ render/ASR/build còn chạy tại checkpoint. Kiểm PID web/API thật trước restart, không dump auth stdout.
