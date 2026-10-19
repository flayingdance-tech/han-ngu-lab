# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-19T08:11:37+07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Mốc mới nhất: podcast local đã có thể nghe

- D-029 / POD-01: 3 tập công sở, 30 đoạn, 6 MP3 (có nhạc / chỉ giọng), giọng A offline. Thời lượng 59.45s / 59.65s / 57.375s. Không phát sinh API trả phí.
- UI tab Podcast: transcript Hán/Pinyin/Việt, bấm câu để seek, tốc độ 0.8/1/1.1 giữ pitch, bật/tắt nhạc giữ vị trí, retry lỗi mạng, dừng khi đổi tập/rời trang; tối dùng nữ lo-fi.
- Nhạc Almost in F — Kevin MacLeod, CC BY 4.0, tải trực tiếp trang chính thức; credit UI/metadata MP3, nguồn/hash/license ở PODCAST_RUNBOOK. Nhạc đã giảm âm, lọc dải cao, duck theo lời, fade đầu/cuối.
- Nội dung và audio **unreviewed**. File nằm `.local/podcasts/rendered`, API chỉ phục vụ trong local preview; live chặn danh mục và media. Không có podcast draft trong public/out.
- QA 6 MP3: LUFS -22.53 đến -22.80; true peak cao nhất -2.97dBTP, không clipping theo kiểm tra số. ASR 3 tập không thấy mất nguyên câu; có chữ đồng âm/gần âm, chưa duyệt ngữ âm bằng người.
- Typecheck/lint đạt; unit/API20/20; E2E audio+podcast10/10 desktop/mobile (1.6m); build đạt. Xem `.local/podcasts/*log`, `docs/reports/podcast-inventory.json`.
- Backup và restore hash **19/19 file**: `.local/podcast-backups/2026-10-19T01-09-10.153Z` và `.local/podcast-restore-check/2026-10-19T01-09-10.153Z`. Gồm media, kịch bản, nhạc/license, renderer/helpers; không model/runtime/DB đầy đủ, chưa ngoài máy.
- Sổ lỗi và cách phòng ngừa: `docs/ERRORS_AND_FIXES.md`. Đã sửa lỗi Strict Mode xóa src, Express chặn dot-directory, parser thống kê FFmpeg, watcher cũ và locator E2E trùng.
- Không cần render lại. Source `content/podcasts.json`; runtime/renderer/runbook đã lưu. Bước tiếp là quy trình duyệt/xuất bản và mở rộng nội dung theo backlog, không tự nâng trạng thái approved.

## Mốc hiện tại: mẫu A đã thay bộ giọng lỗi

- D-028: chủ dự án chọn mẫu A (Kokoro zf_001) ngày19/10/2026. Website local dùng hnl-kokoro-zf001-v1,145 mục/290 MP3 thường-chậm,3,666,688bytes; không API tạo giọng trả phí, không giọng thiết bị, không chỉnh pitch/formant.
- AUDIO-08 DONE về thay thế và tích hợp kỹ thuật; mọi clip vẫn unreviewed. Chọn âm sắc không tương đương duyệt ngữ âm toàn bộ giáo trình. AUDIO-07 còn TODO.
- Offline CPU FP32, speed1.0, bản chậm atempo0.8. Model pin01e7505bd6a7a2ac4975463114c3a7650a9f7218; SHA256b1d8410f... theo model card. Runtime .local/kokoro-venv, model .local/kokoro-model.
- scripts/voice_pronunciation.py căn95 cụm (94 mục từ + 还书) theo Pinyin. Mục từ giữ lexical tone và biến điệu thanh3; câu dùng frontend có tone sandhi/erhua. Regression 打算 giữsuàn4, 谢谢 giữxie5, 你好变调ni2, 还要/还书 phân biệt.
- V2 profile f01aa4136b3673244590e4e98d93542d89e931c5fa0869f78b8580ce8789cb3c.1 clip sửa sau đối chiếu,144 giữ nguyên khi phoneme/model/speaker/speed/encoding khớp. Metadata docs/reports/audio-pronunciation.json; inventory docs/reports/audio-inventory.json.
- Bộ OmniVoice trước bị chủ dự án nghe và từ chối vì méo/sai/không ra âm (D-027).580 MP3 cũ/không còn tham chiếu đã chuyển vào .local/voice-retired/20261019T001158148707Z, SHA256 kiểm tra sau từng lần chuyển; không xóa file.
- Bộ preset v1 trước sửa 打算 ở .local/voice-kokoro-v1; bản cuối .local/voice-kokoro. Không chạy lại v1 để ghi vào website.

## Bằng chứng mốc bộ giọng A trước podcast

- Typecheck/lint đạt; unit18/18, pronunciation Python3/3, audio E2E6/6 desktop/mobile (1.2m), kiểm tra thường/chậm, dừng khi chuyển tab, lỗi mạng/retry, chặn bộ bị từ chối.
- QA v2 decode/hash290file issues0. ASR16 là v1; chỉ 打算 thay ở v2 và ASR riêng nhận lại đúng 打算. Các âm đơn/từ khác có sai nhận dạng, không coi ASR là kiểm định thanh điệu. Chưa có duyệt chuyên môn.
- Build Next thành công; export145entries/290MP3, SHA256 khớp public, không reference giọng/model/prompt/DB. Ảnh thiết kế reference-*.webp là asset công khai hợp lệ; phép kiểm tra tên rộng ban đầu đã được sửa để không nhầm chúng với reference giọng.
- Cache no-op generated0/recovered0/reused0,total145,0.05s sau khởi tạo; không nạp model. cache-check.json riêng, không ghi đè render-report.
- Backup/restore bộ cuối: .local/voice-backups/2026-10-19T00-11-01-948Z và .local/voice-restore-check cùng timestamp,295file khớp SHA256; gồm MP3/manifest/metadata/targets, không model/runtime hoặc DB. Đây là cùng máy, chưa backup ngoài máy/AWS.
- Backup trước switch bộ cũ: timestamp2026-10-19T00-01-34-646Z,297file khớp, có master/reference riêng. Không đưa private profile vào web/Git.

## Vận hành local và dữ liệu

- Preview http://localhost:3000/, API3001; HTTP200 sau build podcast. API launcher8028, listener gần nhất4712 (watch có thể đổi); web launcher15056/listener3516. Kiểm tra PID/port thật trước khởi động lại. API log `.local/podcasts/api.log/.err`; web `.local/dev-web-kokoro.log/.err`; không dump stdout auth.
- Không còn renderer chạy; không tự chạy lại render/QA dài đã hoàn tất. npm run audio:render có cache, audio:publish yêu cầu đủ stage + hash QA, audio:backup phù hợp voice hiện hành. VOICE_RUNBOOK có quy trình.
- .codegraph/ không có ở lần kiểm tra; không tự index. Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. Podcast là module mới; không thay bộ âm bài học hoặc thiết kế các tab cũ.
- UI tối giữ nữ lo-fi, ẩn trẻ chibi; sáng giữ thiết kế hiện có. UI-05 còn cần asset gốc riêng nếu yêu cầu trùng pixel collage.

## Công việc dự án còn lại

- 16 bài draft/94 word IDs/80 câu hỏi/39 ví dụ: chưa đủ giáo trình HSK4, chưa duyệt chuyên môn. Nội dung AI không tự publish.
- Backend local Express/SQLite có auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/import JSON/rollback/editor, backup AES-GCM. CMS còn thiếu CSV/media/reviewer/publication/audit/users, kiểm tra phiên hết hạn/lỗi mạng.
- Podcast có 3 tập local; chưa có CMS duyệt/xuất bản podcast, chưa duyệt chuyên môn và chưa phát hành công khai. Không quảng cáo độ phủ nội dung vượt 3 tập đã có.
- Cloud/email/HTTPS chưa cấu hình/deploy; backup ngoài AWS và diễn tập migration chưa làm. Budget150 USD/6 tháng gồm credit, không chi thêm; credit200 USD/hạn là chủ dự án báo, chưa xác minh Console. Website miễn phí18+, AI tùy chọn.
- Production npm audit mốc trước0 vulnerability; dev5high cũ chưa rà lại, không coi hệ thống đã kiểm toán an toàn. Chưa hoàn thành toàn dự án.
