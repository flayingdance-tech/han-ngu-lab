# Hướng dẫn CMS local

1. Tạo tài khoản editor và reviewer độc lập, xác minh, cấp role bằng CLI vận hành.
2. Editor đăng nhập → Quản trị nội dung → Tạo bài mới hoặc Soạn phiên bản mới từ bài có sẵn.
3. Điền metadata, mục tiêu, dẫn nhập, từ vựng, ngữ pháp, hội thoại, ít nhất ba câu hỏi có đáp án/lời giải, tổng kết và nguồn.
4. Lưu tạo revision draft. Published pointer cũ không thay đổi; không ghi đè lịch sử.
5. Gửi duyệt. Reviewer dùng “Xem nội dung & đáp án” để kiểm tra đúng revision, nguồn và lời giải; tác giả không tự phê duyệt dù là admin.
6. Reviewer trả lại để sửa hoặc phê duyệt rồi xuất bản. Bản nháp không xuất hiện ở API học viên.
7. Thu hồi bài đang xuất bản hoặc khôi phục revision từng xuất bản; không xóa tiến độ cũ.
8. Nhập JSON: chọn file → API kiểm tra → xem số bài mới/phiên bản mới → xác nhận. Tất cả thành draft.
9. Xuất giáo trình lấy revision gần nhất từng bài. CSV, quản lý media và UI nhật ký/người dùng còn đang phát triển.

`humanReviewed` trong nội dung không được cho phép tự nâng bằng payload import. Chỉ nhãn kiểm duyệt chuyên môn có bằng chứng mới được dùng; hiện các seed là chưa duyệt. Các bài sample chỉ hiện ở LOCAL_PREVIEW, không tự xuất bản khi chuyển sang production.
