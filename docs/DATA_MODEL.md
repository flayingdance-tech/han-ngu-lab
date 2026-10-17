# Mô hình dữ liệu v1

- users: ID nội bộ, email unique, password hash, role, verified, status, profile và timezone.
- sessions: hash token, user, hạn; không lưu token thô; logout/reset thu hồi session.
- tokens: hash token xác minh/reset, loại và hạn, dùng một lần.
- lessons: ID ổn định và published_revision_id; draft không thay pointer published.
- revisions: nội dung JSON đã validate, lesson ID, tác giả, trạng thái, reviewer, thời điểm.
- attempts: user + idempotency key unique, revision, câu trả lời, điểm và phản hồi; server chấm.
- progress: user + lesson unique, completed revision, best score, timestamp.
- reviews: user + vocab unique, due, interval, repetitions; review_events chống gửi trùng.
- audit: append-only actor/action/target/date/details, không chứa secret.

Lưu thời điểm UTC. Các route người dùng suy user từ session, không nhận userId tùy ý. Role nhạy cảm đọc lại từ DB mỗi request. Revision và các reference được giữ khi import hoặc rollback.
