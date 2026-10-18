# Bước tiếp theo

Checkpoint 2026-10-18 20:09 +07:00. Quyết định mới nhất thay các đề xuất cũ; lịch sử nằm trong WORK_LOG và DECISIONS.

1. AUDIO-06 đang chạy tiếp từ 124/145 đoạn. Đọc đầu PROJECT_STATUS, kiểm tra process thực và `.local/voice/render-final.log`, `finalize-final.log`, hai file `.err`. Không khởi động producer trùng. Finalizer chỉ thành công khi có `finalize-report.json` mới và đầy đủ bằng chứng.
2. Hoàn tất 145 âm thường +145 âm chậm; audit độ phủ, decode, kiểm tra tín hiệu, thử cache không tái tạo, backup/restore SHA256, build và đối chiếu static export. Chưa có kết quả cuối ở checkpoint này.
3. Dùng đúng bản chỉ tách nhạc đã chốt, không pitch/formant shift. Quyền giọng đã xác nhận; không hỏi lại. VoiceStudio native engine và model đã tải cục bộ, không phải desktop GUI đã cài. Không dùng API trả phí hoặc fallback giọng thiết bị.
4. Giữ audio tổng hợp ở unreviewed; chỉ cho phát trong bài preview. Nghe duyệt tiếng Trung, nhất là bốn thanh và chữ đa âm, trước xuất bản. ASR/F0 không thay thế người duyệt. MOSS thử riêng có dấu hiệu thiếu cuối câu; chưa thay bộ OmniVoice đang sản xuất.
5. Cập nhật TEST_REPORT, STATUS, TASKS và WORK_LOG sau kết quả thực; kiểm tra diff rồi commit mốc. Không ghi secret hoặc profile giọng riêng vào Git/public.
6. Giữ giao diện sáng hiện có; tối dùng nữ lo-fi, chỉ ẩn trẻ chibi. UI-05 vẫn cần asset gốc riêng nếu yêu cầu trùng hoàn toàn collage.
7. Phần dự án còn thiếu: CMS CSV/media, giao diện reviewer/publication, audit/users và kiểm tra phiên hết hạn/lỗi mạng. Podcast là phần tiếp theo, chưa có thư viện podcast hoàn chỉnh.
8. Hoàn thiện ma trận nhập môn–HSK4 theo chuẩn xác định và quy trình duyệt. 16 bài hiện tại là draft, chưa phải giáo trình HSK4 hoàn chỉnh; không tự publish.
9. Cloud/email và dự toán tải cần quyền truy cập tài khoản; chưa tạo tài nguyên/deploy. Giữ trần 150 USD/6 tháng gồm credit, không tiền trả thêm, tuổi 18+, AI tùy chọn.
10. Backup ngoài AWS và diễn tập migration user/progress/content/media/auth/email còn phải thực hiện. Backup/restore trên cùng máy không chứng minh đã có bản ngoài máy/cloud.
