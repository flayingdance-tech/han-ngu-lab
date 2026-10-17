# Hán Ngữ Lab — phạm vi sản phẩm đã thống nhất

Cập nhật: 2026-10-16, Asia/Bangkok. Yêu cầu kinh doanh và khởi công đã chốt; kiến trúc local ở ARCHITECTURE.md, cloud chưa xác minh tài khoản.

## 1. Đối tượng và mô hình

- Website công khai cho người Việt từ 18 tuổi trở lên; miễn phí giai đoạn hiện tại.
- Cung cấp Public, Learner và Admin CMS; nhiều tài khoản với dữ liệu riêng.
- Để khả năng thêm gói/quyền truy cập trong thiết kế, không triển khai thanh toán ở phạm vi hiện tại.
- Onboarding có xác nhận đủ 18 tuổi và điều kiện sử dụng; không thu giấy tờ tùy thân mặc định.
- AI là tùy chọn; học bài, luyện tập, tiến độ và ôn tập hoạt động khi AI tắt/hết quota.

## 2. Giáo trình và định nghĩa hoàn chỉnh

- Hoàn chỉnh từ nhập môn (HSK 0 là nhãn nội bộ) đến hết HSK 4, không chỉ bài mẫu.
- Trước soạn hàng loạt, lập ma trận mục tiêu, chuẩn HSK/phiên bản, từ vựng, ngữ pháp, kỹ năng, bài và bài kiểm tra.
- Đề xuất dùng đề cương HSK 3.0 làm đích ánh xạ; đây chưa phải quyết định chuẩn cuối của chủ dự án.
- Không dùng số từ hoặc số bài của chuẩn cũ để tuyên bố hoàn chỉnh chuẩn mới.
- Mỗi bài có mục tiêu, điều kiện học trước, nội dung gốc, Pinyin, nghĩa Việt, ví dụ, luyện tập, lời giải và audio khi bài yêu cầu nghe.
- Tất cả mục tiêu trong ma trận phạm vi phải có bài học và đánh giá tương ứng; báo cáo độ phủ thực tế.
- Hoàn chỉnh về nội dung và được chuyên gia độc lập duyệt là hai trạng thái riêng.
- Không được ghi đã duyệt độc lập khi chưa có người duyệt; ghi rõ tình trạng từng revision.
- Người kiểm tra/duyệt sẽ được chủ dự án bổ sung sau. Không biến phụ thuộc này thành yêu cầu người dùng tự viết code hay điều phối kỹ thuật.
- Chính sách xuất bản thử nghiệm trước khi có người duyệt cần thống nhất trước public launch; không tự xuất bản hàng loạt chỉ vì AI đánh giá đạt.

## 3. Thay giáo trình và mở rộng HSK 1–6

- CMS chỉnh sửa toàn bộ cấu trúc khóa/cấp/unit/bài và thư viện từ/ngữ pháp.
- Import/export CSV/JSON có schema, bản xem trước, kiểm tra lỗi, thống kê thêm/sửa và khôi phục được.
- Chủ dự án có thể thay giáo trình khi có nội dung HSK 1–6; HSK 5–6 được hỗ trợ về cấu trúc, chưa nằm trong khối lượng soạn ban đầu.
- Lesson ID và user ID nội bộ ổn định, không phụ thuộc slug, tên bài hoặc thứ tự.
- Khi thay bài, có mapping bài cũ→mới; giữ lịch sử đã học và version nội dung đã dùng khi chấm.
- Nếu nội dung thay đáng kể, hiển thị phần cần bổ sung theo quy tắc rõ ràng; không tự xóa tiến độ cũ.

## 4. Luồng học và quản trị bắt buộc

- Tài khoản, xác minh email, đăng nhập/khôi phục, hồ sơ, mục tiêu và tiếp tục học.
- Lesson engine, từ vựng, ngữ pháp, hội thoại/nghe, bài tập, chấm server, tiến độ và lịch ôn SRS.
- Sổ lỗi và giải thích; dashboard tập trung bài tiếp theo, bài đến hạn và tiến bộ thực.
- CMS nháp→gửi duyệt→yêu cầu sửa/phê duyệt→xuất bản→lưu trữ; audit, revision và rollback.
- Phân quyền server; cách ly hai học viên; chống nộp trùng; bảo vệ bản nháp và đáp án kín.
- Desktop/mobile, UTF-8/Pinyin, bàn phím, loading/error/retry và lỗi phiên đăng nhập.
- Xuất dữ liệu tài khoản, quy trình xóa, backup và phục hồi theo kiến trúc cuối.

## 5. AI hỗ trợ rà soát, không bắt buộc

- Ưu tiên kiểm tra tự động không tốn API: trường thiếu, Pinyin sai định dạng, tham chiếu hỏng, câu hỏi thiếu đáp án, trùng bài/từ và mapping chưa phủ.
- Những kiểm tra trên không chứng minh ngữ nghĩa/phát âm đúng; AI hoặc reviewer rà soát nội dung thêm.
- AI nhận bài học, rubric và nguồn đã cho phép; tạo báo cáo lỗi/gợi ý, không có quyền tự publish.
- Lưu provider/model, revision đã rà, thời điểm và kết quả để người duyệt xem lại.
- API key ở server, giới hạn lượt và token, cache theo revision để không trả phí kiểm lại nội dung không đổi.
- Không gửi dữ liệu người học, bí mật hoặc học liệu bảo mật cho API miễn phí sử dụng đầu vào để cải thiện sản phẩm.
- Nếu không tìm được dịch vụ đáp ứng điều kiện, giữ cơ chế rà soát nội bộ và hàng đợi duyệt, không coi AI là điều kiện chặn website.

## 6. Ngân sách và tính di chuyển

- Trần dự toán 150 USD cho cả 6 tháng, tính cả credit; yêu cầu mới nhất là không phát sinh tiền trả thêm.
- Chủ dự án báo còn 200 USD credit và Free Plan còn 5 tháng 20 ngày; cần xác minh hạn chính xác và hạn riêng credit.
- AWS không bắt buộc nhưng được ưu tiên tận dụng credit hợp lệ; không tự nâng Paid Plan hoặc mua dịch vụ ngoài phạm vi.
- Không coi 200 USD credit là tiền có thể dùng thanh toán nhà cung cấp khác.
- Backup ngoài tài khoản AWS, định dạng dữ liệu độc lập, giữ media và có thử khôi phục sang môi trường khác.
- Kế hoạch 6 tháng cần chuyển sớm trước hết hạn nếu AWS không còn phù hợp; không đợi tài khoản ngừng rồi mới xuất dữ liệu.
- Nhiều người dùng không đồng nghĩa tải vô hạn: cần công bố tải đã đo, quota, giới hạn và hành vi khi quá tải.

## 7. Nghiệm thu và các điểm kỹ thuật còn thiết kế

- Luồng đăng ký→học→nộp bài→ôn→đăng nhập lại giữ tiến độ phải chạy thật.
- Hai người học không đọc/sửa dữ liệu nhau; kiểm thử luồng CMS và rollback không mất tiến độ.
- Báo cáo độ phủ toàn bộ nhập môn–HSK 4 và tình trạng kiểm duyệt; không dùng tiêu đề/outline làm bài hoàn chỉnh.
- Import giáo trình mới giữ dữ liệu cũ; backup và migration phải được diễn tập, không chỉ viết hướng dẫn.
- Build, test, URL và kết quả triển khai phải có bằng chứng; không gắn “đã vận hành 6 tháng” lúc mới ra mắt.
- Chưa chọn runtime/DB/hosting cuối, tải mục tiêu, nguồn audio hoặc ngày mở public.
- Sáu tháng là thời gian vận hành mong muốn; ngày bắt đầu kỳ vận hành cần ghi khi thống nhất lịch phát hành.
