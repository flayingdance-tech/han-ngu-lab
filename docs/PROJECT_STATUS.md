# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-19T07:16:36+07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Mốc hiện tại: mẫu A đã thay bộ giọng lỗi

- D-028: chủ dự án chọn mẫu A (Kokoro zf_001) ngày19/10/2026. Website local dùng hnl-kokoro-zf001-v1,145 mục/290 MP3 thường-chậm,3,666,688bytes; không API tạo giọng trả phí, không giọng thiết bị, không chỉnh pitch/formant.
- AUDIO-08 DONE về thay thế và tích hợp kỹ thuật; mọi clip vẫn unreviewed. Chọn âm sắc không tương đương duyệt ngữ âm toàn bộ giáo trình. AUDIO-07 còn TODO.
- Offline CPU FP32, speed1.0, bản chậm atempo0.8. Model pin01e7505bd6a7a2ac4975463114c3a7650a9f7218; SHA256b1d8410f... theo model card. Runtime .local/kokoro-venv, model .local/kokoro-model.
- scripts/voice_pronunciation.py căn95 cụm (94 mục từ + 还书) theo Pinyin. Mục từ giữ lexical tone và biến điệu thanh3; câu dùng frontend có tone sandhi/erhua. Regression 打算 giữsuàn4, 谢谢 giữxie5, 你好变调ni2, 还要/还书 phân biệt.
- V2 profile f01aa4136b3673244590e4e98d93542d89e931c5fa0869f78b8580ce8789cb3c.1 clip sửa sau đối chiếu,144 giữ nguyên khi phoneme/model/speaker/speed/encoding khớp. Metadata docs/reports/audio-pronunciation.json; inventory docs/reports/audio-inventory.json.
- Bộ OmniVoice trước bị chủ dự án nghe và từ chối vì méo/sai/không ra âm (D-027).580 MP3 cũ/không còn tham chiếu đã chuyển vào .local/voice-retired/20261019T001158148707Z, SHA256 kiểm tra sau từng lần chuyển; không xóa file.
- Bộ preset v1 trước sửa 打算 ở .local/voice-kokoro-v1; bản cuối .local/voice-kokoro. Không chạy lại v1 để ghi vào website.

## Bằng chứng kiểm thử

- Typecheck/lint đạt; unit18/18, pronunciation Python3/3, audio E2E6/6 desktop/mobile (1.2m), kiểm tra thường/chậm, dừng khi chuyển tab, lỗi mạng/retry, chặn bộ bị từ chối.
- QA v2 decode/hash290file issues0. ASR16 là v1; chỉ 打算 thay ở v2 và ASR riêng nhận lại đúng 打算. Các âm đơn/từ khác có sai nhận dạng, không coi ASR là kiểm định thanh điệu. Chưa có duyệt chuyên môn.
- Build Next thành công; export145entries/290MP3, SHA256 khớp public, không reference giọng/model/prompt/DB. Ảnh thiết kế reference-*.webp là asset công khai hợp lệ; phép kiểm tra tên rộng ban đầu đã được sửa để không nhầm chúng với reference giọng.
- Cache no-op generated0/recovered0/reused0,total145,0.05s sau khởi tạo; không nạp model. cache-check.json riêng, không ghi đè render-report.
- Backup/restore bộ cuối: .local/voice-backups/2026-10-19T00-11-01-948Z và .local/voice-restore-check cùng timestamp,295file khớp SHA256; gồm MP3/manifest/metadata/targets, không model/runtime hoặc DB. Đây là cùng máy, chưa backup ngoài máy/AWS.
- Backup trước switch bộ cũ: timestamp2026-10-19T00-01-34-646Z,297file khớp, có master/reference riêng. Không đưa private profile vào web/Git.

## Vận hành local và dữ liệu

- Preview http://localhost:3000/, API3001; HTTP200 sau build. API launcher13088/listener10660; web launcher15056/listener3516. Kiểm tra PID/port thật trước khởi động lại. Log .local/dev-*-kokoro.log/.err; không dump stdout auth.
- Không còn renderer chạy; không tự chạy lại render/QA dài đã hoàn tất. npm run audio:render có cache, audio:publish yêu cầu đủ stage + hash QA, audio:backup phù hợp voice hiện hành. VOICE_RUNBOOK có quy trình.
- .codegraph/ không có ở lần kiểm tra; không tự index. Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. Chỉ thay audio và thông báo tên giọng; không đổi layout sáng/tối.
- UI tối giữ nữ lo-fi, ẩn trẻ chibi; sáng giữ thiết kế hiện có. UI-05 còn cần asset gốc riêng nếu yêu cầu trùng pixel collage.

## Công việc dự án còn lại

- 16 bài draft/94 word IDs/80 câu hỏi/39 ví dụ: chưa đủ giáo trình HSK4, chưa duyệt chuyên môn. Nội dung AI không tự publish.
- Backend local Express/SQLite có auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/import JSON/rollback/editor, backup AES-GCM. CMS còn thiếu CSV/media/reviewer/publication/audit/users, kiểm tra phiên hết hạn/lỗi mạng.
- Podcast chưa có thư viện hoàn chỉnh; dùng giọng A cho bước tạo draft tiếp theo. Không quảng cáo tính năng chưa làm.
- Cloud/email/HTTPS chưa cấu hình/deploy; backup ngoài AWS và diễn tập migration chưa làm. Budget150 USD/6 tháng gồm credit, không chi thêm; credit200 USD/hạn là chủ dự án báo, chưa xác minh Console. Website miễn phí18+, AI tùy chọn.
- Production npm audit mốc trước0 vulnerability; dev5high cũ chưa rà lại, không coi hệ thống đã kiểm toán an toàn. Chưa hoàn thành toàn dự án.
