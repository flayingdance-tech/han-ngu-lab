# Hán Ngữ Lab — từ offline lên AWS

Ghi chép theo hồ sơ triển khai20–22/10/2026; không phải lần kiểm tra production mới.

**Quá trình:** Chạy local → kiểm bảo mật → GitHub Private → Amplify cho frontend → Lightsail cho Express/SQLite → SES gửi email → chuyển cả web/API sang Lightsail → gắn DuckDNS và HTTPS.

| Lỗi/vướng mắc | Cách xử lý đã áp dụng |
|---|---|
| Local/remote khác commit, cấu hình Amplify không khớp | Fetch/hợp nhất an toàn, giữ `baseDirectory: .next`, không force push. |
| Frontend lên mạng nhưng backend chưa đồng bộ | Triển khai API riêng trên Lightsail bằng systemd, Caddy phục vụ HTTPS. |
| Email không gửi được | Nodemailer + SES Sydney, port587 STARTTLS, quyền `ses:SendRawEmail`, credentials chỉ nằm trong env server. |
| SES Sandbox hạn chế người nhận; nút xin Production bị khóa | Nộp yêu cầu bằng SESv2 CLI/API chính thức; AWS đã cấp Production. |
| Tài khoản chưa xác minh không đăng nhập được, thiếu nút gửi lại | Thêm gửi lại xác minh, cooldown/chống dò email; giữ tài khoản cũ. |
| CMS không có quyền hoặc nội dung chưa được xuất bản | Cấp Admin cho tài khoản đã xác minh; xuất bản16bài/7podcast dưới nhãn beta chưa duyệt. |
| Express báo X-Forwarded-For; Amplify rewrite làm sai IP thật | Sau khi được duyệt, đưa web/API về cùng Lightsail; Caddy lấy TCP IP, ghi đè header giả; kiểm chứng hai mạng. |
| Đổi domain có nguy cơ hỏng đăng nhập/link email | Stage DuckDNS trước, đổi APP_ORIGIN/canonical, giữ cookie/CSRF, chuyển URLcũ302 và kiểm fragment xác minh/reset. |
| Caddy không đọc được config; kiểm health quá sớm khi restart | Caddyfile644, env600; chờ/retry health; lỗi nghiêm trọng thì rollback cấu hình. |

**Bảo toàn dữ liệu:** SQLite ở đường dẫn cố định; backup mã hóa tự động + bản ngoài AWS + thử khôi phục. Rollback code/cấu hình không phục hồi đè SQLite cũ.

**Kết quả đã nghiệm thu:** https://hanngulab.duckdns.org —16bài,7podcast,304MP3; GitHub Private, CI đạt. Amplify giữ dự phòng. Học liệu vẫn beta chưa duyệt, chưa hoàn chỉnhHSK4.

Bản báo cáo theo từng giai đoạn và checklist cho Codex: [AWS_DEPLOYMENT_REPORT.md](AWS_DEPLOYMENT_REPORT.md).
