# Kiểm thử

- Unit: schema, đáp án/chuẩn hóa Unicode, lịch SRS và định dạng export.
- Integration dùng DB thật tạm thời: auth, role, session expired/revoked, A/B isolation, grade/idempotency, CMS workflow/rollback, import validation.
- Backup: roundtrip mã hóa và restore vào DB trống; sai mật khẩu phải thất bại; không ghi đè DB có sẵn.
- E2E: đăng ký local preview rõ nhãn, xác minh, học, nộp bài, ôn, logout/login; CMS với tài khoản riêng; 390px và desktop.
- Tooling: typecheck, lint, test, build; báo đúng kiểm tra chưa thực hiện.
- Cloud: chưa thể chạy khi chưa có môi trường; không thay bằng mock rồi báo production đạt.
