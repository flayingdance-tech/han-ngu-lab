# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-19T12:41:57+07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Mốc mới nhất: lo-fi chill và podcast nghe hằng ngày

- D-030/POD-03: theo quyết định cuối, dùng lo-fi chill học tập. Watching Rain Together — Pamela Yuen, CC BY4.0; nguồn FMA + trang quyền tác giả, cấu hình `content/podcast-music.json`. Không dùng guzheng hoặc Almost in F trong mix hiện hành.
- 7 tập/70 đoạn/14 MP3: 3 tập công sở cũ và 4 tập mới (đồ uống, hỏi đường, tiến độ, cuối tuần), mỗi tập khoảng1phút. Giọng A offline, không đổi pitch/formant, không phí API.
- 3 MP3 chỉ giọng cũ giữ nguyên SHA; 30 WAV cũ tái dùng,39 đoạn mới sinh và1 đoạn dùng cache lặp. Tách fingerprint synthesis/mix để đổi nhạc không sinh lại giọng. `render-summary.json` và `lofi/bank-diff.json` có bằng chứng.
- Nhạc lo-fi loop crossfade2s, low-pass3kHz, duck30% khi có lời, fade đầu/cuối. Credit UI/metadata mix/lời thoại tải, nguồn/hash/license trong PODCAST_RUNBOOK và backup. Không đăng nhạc lên dịch vụ phân phối/Content ID.
- UI: nhớ tập/vị trí/tùy chọn trên thiết bị, yêu thích/tìm kiếm, ±10s, từ đầu, lặp một tập/nghe liên tục, tải transcript có credit; mobile danh sách vuốt ngang; dark giữ nữ lo-fi. LocalStorage schema/clamp/fallback, không đồng bộ tài khoản.
- Tất cả unreviewed. File private `.local/podcasts/rendered`; API live vẫn chặn danh mục/media, không podcast draft trong public/out. POD-02 (duyệt chuyên môn/CMS xuất bản) còn TODO.
- QA14MP3 đạt; mix -22.71..-22.56LUFS, true peak mix cao nhất -3.05dBTP. ASR7tập không thấy mất nguyên câu khi đối chiếu, có chữ đồng âm/gần âm; không chứng nhận thanh điệu.
- Typecheck/lint/unit21/21; E2E audio+podcast14/14 desktop/mobile,2.2m; build exit0. Export bank bài học145mục/290MP3 hash khớp,no privateLeaks. Log `.local/podcasts/lofi/`, inventory `docs/reports/podcast-inventory.json`.
- Backup/restore33file SHA khớp: `.local/podcast-backups/2026-10-19T05-41-04.088Z` và `.local/podcast-restore-check/2026-10-19T05-41-04.088Z`. Gồm14MP3,catalog,kịch bản/cấu hình,nhạc/license,renderer/helpers,QA/ASR; chưa offsite, không model/runtime/DB đầy đủ.
- Backup trước đổi lo-fi timestamp2026-10-19T05-29-18.416Z giữ19file; không xóa file cũ. Catalog chỉ tham chiếu bộ mới; file cũ không tham chiếu không được route phục vụ.
- Sổ lỗi `docs/ERRORS_AND_FIXES.md`, runbook `docs/PODCAST_RUNBOOK.md`. Không render lại hoặc chọn lại nhạc/giọng nếu không có yêu cầu mới. Bước tiếp: quy trình người duyệt/xuất bản, không tự approved.

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

- Preview http://localhost:3000/, API3001; HTTP200 sau build podcast. API launcher11404, listener gần nhất16032 (watch có thể đổi); web launcher14680/listener14116. Kiểm tra PID/port thật trước khởi động lại. API log `.local/podcasts/lofi/api.log/.err`; web `.local/podcasts/lofi/web.log/.err`; không dump stdout auth.
- Không còn renderer chạy; không tự chạy lại render/QA dài đã hoàn tất. npm run audio:render có cache, audio:publish yêu cầu đủ stage + hash QA, audio:backup phù hợp voice hiện hành. VOICE_RUNBOOK có quy trình.
- .codegraph/ không có ở lần kiểm tra; không tự index. Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. Podcast là module mới; không thay bộ âm bài học hoặc thiết kế các tab cũ.
- UI tối giữ nữ lo-fi, ẩn trẻ chibi; sáng giữ thiết kế hiện có. UI-05 còn cần asset gốc riêng nếu yêu cầu trùng pixel collage.

## Công việc dự án còn lại

- 16 bài draft/94 word IDs/80 câu hỏi/39 ví dụ: chưa đủ giáo trình HSK4, chưa duyệt chuyên môn. Nội dung AI không tự publish.
- Backend local Express/SQLite có auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/import JSON/rollback/editor, backup AES-GCM. CMS còn thiếu CSV/media/reviewer/publication/audit/users, kiểm tra phiên hết hạn/lỗi mạng.
- Podcast có 7 tập local; chưa có CMS duyệt/xuất bản podcast, chưa duyệt chuyên môn và chưa phát hành công khai. Không quảng cáo độ phủ nội dung vượt 7 tập đã có.
- Cloud/email/HTTPS chưa cấu hình/deploy; backup ngoài AWS và diễn tập migration chưa làm. Budget150 USD/6 tháng gồm credit, không chi thêm; credit200 USD/hạn là chủ dự án báo, chưa xác minh Console. Website miễn phí18+, AI tùy chọn.
- Production npm audit mốc trước0 vulnerability; dev5high cũ chưa rà lại, không coi hệ thống đã kiểm toán an toàn. Chưa hoàn thành toàn dự án.
