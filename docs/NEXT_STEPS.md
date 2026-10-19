POD-04 v7 2026-10-19T22:03:19.1731098+07:00 — Mẫu private pilot-v7-mix.mp3,87.060s; piano chủ dự án cắt-ghép nối liên tục,nguyên nhịp/cao độ,giữ đủ7đoạn giọng chậm EQ. Nền nổi hơn,balance -5.57dB so với giọng active,true peak -3.58dBTP. ASR final-mix exit0,nhận đủ nội dung,đồng âm 他/她/的/地/在/再; không thay duyệt nghe. V5 kéo nhịp/V6 cắt lời đã bị thay thế theo D-038. Chờ nghe/chốt trước áp dụng web. Tạo lại bằng scripts/radio-user-piano.py.

Mẫu EQ thanh nhẹ (2026-10-19T21:48:29.8968579+07:00): pilot-v4-bright-mix.mp3,giảm300Hz1.5dB/tăng2800Hz1.2dB/highshelf6500Hz0.8dB; không pitch/tốc độ; nềnv4 nguyên stereo. -22.62LUFS/-4.07dBTP. Chờ chủ dự án so sánh, chưa đổi lựa chọn giọng hay web. Recipe+QA nằm cạnh file.

POD-04 v4 2026-10-19T21:45:53.6503584+07:00 — Mẫu mới pilot-v4-mix.mp3,87.060s: khôi phục nền video tham chiếu theo D-035; giữ nguyên WAV giọng chậm v3 (SHA lưu report). Bỏ Dreams Become Real khỏi lựa chọn hiện hành. Nền range1.386dB,không duck,mix -21.96LUFS/true peak -4.36dBTP. Nguồn24giây có nối nền, không hứa không lặp. D-033: chờ chủ dự án nghe/chốt, chưa sửa web/full. Tạo lại mẫu hiện hành bằng scripts/radio-remix-reference.py; radio-pilot.py là phương án v3 đã bị từ chối.

# Bước tiếp theo

Checkpoint 2026-10-19T12:41:57+07:00. Đọc PROJECT_STATUS và WORK_LOG trước khi tiếp tục.

1. Mẫu A đã thay xong145 mục,290MP3. Không render lại hoặc quay về OmniVoice. Kiểm tra manifest active hnl-kokoro-zf001-v1 và cache trước khi bổ sung học liệu. D-028 đã chọn giọng, không hỏi lại.
2. AUDIO-07: hoàn thiện quy trình người có chuyên môn duyệt chữ Hán/Pinyin/thanh điệu/đa âm/độ tự nhiên; mọi clip vẫn unreviewed. ASR/F0/schema không thay thế người duyệt.
3. Hoàn thiện CMS: reviewer/publication, CSV/media, audit/users, hết phiên và lỗi mạng. Giữ revision bài đã xuất bản bất biến và tiến độ người học.
4. POD-03 đã xong kỹ thuật nghe hằng ngày: 7 tập/70 đoạn/14MP3, lo-fi Watching Rain Together (Pamela Yuen CC BY4.0), resume/yêu thích/tìm/lặp/liên tục/tải lời thoại. Không render lại hoặc chọn lại nhạc/giọng. POD-02 còn duyệt chuyên môn và CMS xuất bản. Đọc PODCAST_RUNBOOK/ERRORS_AND_FIXES; backup mới33file ở STATUS.
5. Hoàn thiện ma trận và học liệu nhập môn–HSK4 theo chuẩn đã xác định, hỗ trợ thay giáo trình/mở HSK5–6.16 bài hiện tại là draft.
6. Giữ UI sáng hiện có; tối giữ nữ lo-fi và chỉ ẩn trẻ chibi. Asset trùng pixel collage cần nguồn riêng (UI-05).
7. Cloud/email/HTTPS và dự toán tải cần quyền truy cập tài khoản. Không tạo dịch vụ trả phí hoặc vượt150USD/6 tháng gồm credit; kiểm tra hạn credit thật trước triển khai.
8. Backup bộ giọng đã restore295file cùng máy, chưa ngoài máy. Còn backup ngoài AWS và diễn tập migration toàn bộ user/progress/content/media/auth/email. Rà dev dependencies trước release.
9. Tiếp tục cập nhật STATUS/TASKS/NEXT_STEPS/WORK_LOG theo bằng chứng thực; không coi toàn dự án hoàn thành.
