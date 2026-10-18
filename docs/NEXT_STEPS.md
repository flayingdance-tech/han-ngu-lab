# Bước tiếp theo

Checkpoint 2026-10-18 20:24 +07:00. Lịch sử: WORK_LOG và DECISIONS.

1. AUDIO-06 tích hợp kỹ thuật đã xong:145 đoạn/290 MP3, build/export, signal QA, cache và backup/restore đạt. Không chạy lại render/finalizer đã hoàn tất. Đọc STATUS, kiểm tra Git/process và giữ DB/account trước khi làm tiếp.
2. Ưu tiên AUDIO-07: quy trình người có chuyên môn nghe duyệt chữ Hán/Pinyin, bốn thanh, chữ đa âm và độ tự nhiên. ASR8 mẫu còn nhận sai/bỏ trống, không được đổi unreviewed thành approved dựa vào ASR/F0. Chưa xuất bản audio như tài liệu phát âm chuẩn.
3. Dùng đúng nguồn chỉ tách nhạc đã chốt, quyền đã xác nhận; không hỏi lại. Thử profile/engine khác ở workspace riêng, không ghi đè manifest đang phát. VOICE_RUNBOOK có lệnh và giới hạn; không API có phí/fallback giọng thiết bị.
4. Hoàn thiện thư viện podcast học theo chủ đề ở trạng thái draft, sau khi có quy trình giọng đạt. Hiện chưa có mục podcast hoàn chỉnh; không quảng cáo đã có.
5. Phần CMS còn thiếu: CSV/media, giao diện reviewer/publication, audit/users, kiểm tra phiên hết hạn/lỗi mạng. Giữ revision đã xuất bản và tiến độ người học.
6. Hoàn thiện ma trận nhập môn–HSK4 theo chuẩn xác định và quy trình duyệt.16 bài hiện tại là draft, chưa phải giáo trình HSK4 đầy đủ; không tự publish.
7. Giữ giao diện sáng hiện có; tối dùng nữ lo-fi, chỉ ẩn trẻ chibi. UI-05 cần asset gốc riêng nếu yêu cầu trùng hoàn toàn collage.
8. Cloud/email và dự toán tải cần quyền truy cập tài khoản; chưa tạo tài nguyên/deploy. Trần150 USD/6 tháng gồm credit, không tiền trả thêm,18+, AI tùy chọn. Rà cả dependency dev trước release; production audit hiện0 không thay thế kiểm thử bảo mật.
9. Backup ngoài AWS và diễn tập migration user/progress/content/media/auth/email còn phải thực hiện. Snapshot297 file giọng hiện có ở cùng máy; không phải bản ngoài máy. Giữ private profile ngoài web server.
10. Sau mỗi mốc cập nhật STATUS/TASKS/NEXT_STEPS/WORK_LOG theo kết quả thực. Không ghi secret và không coi cả dự án đã hoàn thành khi còn các mục trên.
