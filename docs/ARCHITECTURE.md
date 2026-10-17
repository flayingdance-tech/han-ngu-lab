# Kiến trúc triển khai — mốc local đầu tiên

Khởi công 16/10/2026. Frontend Next.js/React/TypeScript, xuất tĩnh; API Node.js tách biệt; schema Zod dùng chung. Một repository có app/, lib/, server/, content/, scripts/, tests/.

SQLite trên Node 24 là adapter local để kiểm thử dữ liệu thật, không cần Docker hoặc tài khoản cloud. Không dùng SQLite trên đĩa Lambda như cơ sở dữ liệu production. Auth local dùng hash mật khẩu, session server và cookie HttpOnly; xác minh email được mô phỏng rõ ràng trong LOCAL_PREVIEW. Production bị chặn cho tới khi có adapter email/auth và kho dữ liệu được kiểm chứng.

Chọn giao diện sáng, xanh ngọc/kem, typography chữ Hán lớn, sidebar desktop và điều hướng mobile. Dashboard ưu tiên một hành động học tiếp. Không dùng số liệu người học giả để quảng cáo.

API chỉ trả revision published (hoặc sample được gắn nhãn trong local preview), không trả đáp án trước nộp. Kết quả nộp gắn revision, idempotency key và user; transaction cập nhật attempt/progress/review đồng thời. CMS tách author và reviewer, sửa bằng revision mới, rollback không xóa lịch sử học.

Cloud đích ưu tiên AWS sau khi có quyền và xác minh credit. Chưa có AWS CLI hoặc Docker trong PATH ở thời điểm khảo sát. Chuẩn bị adapter cloud sau khi luồng domain và kiểm thử local ổn định; không coi localhost là đã deploy.

Backup mã hóa có schema version; giữ mapping user và lesson ổn định. Thử restore local là một bước kiểm chứng, không đồng nghĩa đã chuyển thành công nhà cung cấp cloud.
