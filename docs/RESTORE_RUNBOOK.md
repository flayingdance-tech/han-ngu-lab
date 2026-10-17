# Backup và khôi phục local

Định dạng backup v1: JSON dữ liệu được mã hóa AES-256-GCM, khóa dẫn xuất bằng scrypt với salt ngẫu nhiên. Không xuất session/token xác minh để tránh tái sử dụng phiên. Có password hash, vì vậy backup vẫn là dữ liệu nhạy cảm.

Thiết lập `HNL_BACKUP_PASSWORD` bằng cách quản lý secret phù hợp, không commit hoặc gửi vào chat. CLI không chấp nhận mật khẩu dưới dạng đối số.

```powershell
npm.cmd run backup -- export .local/backup.hnl
npm.cmd run backup -- restore .local/backup.hnl .local/restored.sqlite
```

Export không ghi đè file có sẵn. Restore chỉ vào DB mới và kiểm tra cấu trúc/reference trong transaction. Sau restore, người dùng đăng nhập lại; user ID và tiến độ được giữ.

Để diễn tập: xuất → restore sang file khác → chạy API với DATABASE_PATH trỏ file mới trên cổng riêng → kiểm tra learner A/B, CMS, kết quả và lịch ôn. So sánh số lượng dữ liệu. Không thay database đang chạy cho đến khi kiểm tra xong.

Mã hiện chưa có upload media, vì vậy backup này chỉ bao gồm database. Khi bổ sung media cần manifest/checksum và bản sao audio/file riêng. Chưa có lịch backup tự động hoặc nơi lưu ngoài AWS; restore local không chứng minh đã migration nhà cung cấp.
