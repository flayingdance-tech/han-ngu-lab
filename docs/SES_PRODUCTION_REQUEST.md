# SES Sydney — chuẩn bị xin production access

Trạng thái: **chưa nộp**. Yêu cầu chỉ cho email giao dịch, không marketing. Không gửi SMTP credentials hoặc danh sách tài khoản cho AWS support.

Console Sydney ngày 21/10/2026: Sandbox200email/24h,1/s,Healthy; email identity Verified, feedback forwarding Enabled, account suppression Enabled cho Bounce and complaints. Trang Get set up báo **Domain verification needed / No domain identities found**, nút Request production access disabled. Đây là chặn thực tế của phiên Console, chưa mua domain/nâng gói. Chưa thử nhận feedback tại mailbox.

## Điều kiện trước khi nộp

- Đọc SES Sydney Console xác minh Sandbox/quota, verified identity và feedback forwarding đang bật, mailbox nhận bounce/complaint thực sự truy cập được.
- Gửi thử tới SES mailbox simulator (success, bounce, complaint), xác nhận feedback đến đúng mailbox mà không đưa token/mật khẩu vào log. Không thử bằng địa chỉ người học thật.
- Có người nhận trách nhiệm theo dõi thông báo mỗi ngày; hard bounce/complaint phải được xử lý trước khi gửi tiếp. Chỉ SMTP “gửi thành công” không chứng minh xử lý bounce.
- Nếu chưa có suppression workflow, chưa đánh dấu xác nhận “I have a process for handling bounces and complaints”. Không tự nhận phần mềm đã xử lý tự động.
- Kiểm tra DKIM/identity theo hướng dẫn AWS; không mua domain hoặc tạo SNS/WAF/tài nguyên tính phí để vượt bước này khi chưa được chấp thuận.

## Nội dung dự thảo cho AWS

Website: https://main.d12mghkvifkghp.amplifyapp.com

Mail type: Transactional.

> Hán Ngữ Lab is a free Chinese-learning website for adults. We intend to send account verification, verification-link resend, and password-reset emails only in response to user actions. We do not purchase mailing lists and do not send marketing campaigns. Public responses do not reveal whether an address is registered. Requests are rate-limited by IP and recipient hash; delivery is serialized to respect the current SES sending rate. Authentication credentials and account tokens are not logged.

Chỉ bổ sung mô tả feedback sau khi thực hiện được và có bằng chứng. Không nộp bản có placeholder hoặc cam kết vận hành chưa có thật. Form có xác nhận ràng buộc phải chuyển chủ dự án tự xác nhận nếu chính sách trình duyệt yêu cầu.

## Sau khi được AWS duyệt

- Đọc lại production-access/quota trong đúng `ap-southeast-2`; không suy ra đã duyệt chỉ vì ticket tạo thành công.
- Test một tài khoản do chủ dự án kiểm soát: đăng ký, resend/cooldown, verify một lần, login, logout, forgot/reset, session cũ vô hiệu. Không chép URL chứa token vào báo cáo.
- Theo dõi SES reputation/bounce/complaint và ngừng gửi khi có vấn đề. Nếu AWS từ chối, lưu lý do, giữ sandbox, không đổi IAM hoặc nâng gói để lách.

Nguồn chính thức: https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html ; https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html ; https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html .
