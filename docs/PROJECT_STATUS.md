## MAIL-01 / D-047 — 2026-10-21T00:35:12.4760766+07:00

- Tích hợp cục bộ hoàn tất: Nodemailer10.1.7 runtime, SMTP Sydney587 requireTLS/certificate validation; biến SMTP_USERNAME/SMTP_PASSWORD/SMTP_FROM_EMAIL chỉ server. Production cấu hình sai chặn trước mở DB; preview không gửi thư.
- server/email.ts, server/index.ts, server/app.ts: verify/reset và API resend-verification, giữ token30phút/1lần, CSRF/giới hạn auth; lỗi SMTP503 đã bỏ nguyên nhân thô. Không đổi UI/giáo trình/audio/podcast/DB học viên.
- Lint exit0; test31/31 (6email); typecheck/build/smoke exit0; production audit0vulnerabilities; stagedGitleaks exit0. Báo cáo docs/reports/ses-smtp-integration.json. Typecheck lỗi lần đầu do Next khai báo ProcessEnv.NODE_ENV bắt buộc; đã dùng input Record<string,string|undefined> và chạy lại đạt. next-env build sinh lại đã trả về nội dung trước build.
- Runbook docs/SES_SMTP_LIGHTSAIL.md hướng dẫn Git pull --ff-only, env root600, systemd/Node24, DB đúng đường và kiểm gửi thật. Không cloud/credential/gửi thật, không push; phải chờ chủ dự án xác nhận trước push. SES sandbox/SMTP auth/HTTPS/Lightsail chưa kiểm chứng thực tế.
## GitHub Private đã xuất bản — 2026-10-20T16:29:50.6317986+07:00

- D-046/PUB-01: chủ dự án xác nhận; origin đúng flayingdance-tech/han-ngu-lab Private, nhánh main. Đã push97e562f8e663384313c03d9530f8c3af7b0897c2 cùng lịch sử, không force/xóa/rewrite; SHA GitHub khớp.
- Actions39400869176 success toàn bộ kiểm tra. URL https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39400869176. Nhánh local master theo dõi origin/main.
- Checkpoint tài liệu sẽ push riêng rồi xác minh CI mới. Không AWS/Public; .local/database/media riêng vẫn giữ local theo ignore, không phải bản backup cloud toàn dự án. Các mục chờ xác nhận push ở checkpoint cũ đã bị D-046 thay thế.

# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-20T15:47:30.7933947+07:00, Asia/Bangkok (+07). Workspace D:\Hán Ngữ Lab.

Mốc triển khai đổi tên: f42e345. Các kiểm tra và sao lưu D-043 đã hoàn tất.

Mốc audit/safe fixes:9200c03; quét secret sau commit đạt, web200/API preview còn hoạt động.

## Hiện hành: PUB-01/D-045 — chờ xác nhận push GitHub

- GCM xác thực GitHub account flayingdance-tech; repo https://github.com/flayingdance-tech/han-ngu-lab đã tồn tại, Private và chưa có commit, default main, có quyền push. Chưa cấu hình remote/chưa push; không tạo thêm repo.
- Đã đọc audit, final secrets scan đạt và local source sạch trước checkpoint. Chỉ sau câu xác nhận trực tiếp mới được push master:main (không force), xác minh Private và kiểm Actions. Không AWS; không yêu cầu password/token qua chat.

## DEP-01/D-044 — pre-GitHub audit đã hoàn tất (trạng thái tại thời điểm audit)

- Đọc PRE_GITHUB_AUDIT.md, docs/DEPLOYMENT.md và docs/reports/pre-github-security.json trước publish. Private GitHub: source có thể chuẩn bị với WARNING dev advisories; full production AWS: FAIL vì thiếu email adapter/API HTTPS/DB persistent/proxy và đường podcast production. Chưa remote/push/deploy/AWS Console.
- Gitleaks history/candidate đã rà2false-positive công khai/fixture, không credential thật; không private DB/env/key bị track. Full npm audit5high dev (braces chưa có patched release), production0. Không force downgrade framework.
- Sửa token link dùng fragment + xử lý hashchange trong trang, no-referrer, HTTPS origin,413, runtime tsx và chặn mở schema DB mới hơn. Unit25/25, auth-browser1/1 (không chạy lại responsive/content/media), typecheck/lint/build/smoke composition/test email và runtime-only npm ci đạt.
- Thêm amplify.yml static WEB/out, customHttp.yml headers, CI chỉ validate/pin SHA/checksum, README/env/ignore; chưa chạy CI Linux/cloud. Không có render/ASR/E2E/build còn chạy. Tài khoản/DB thật không dùng cho test; media/học liệu/thiết kế giữ nguyên; chỉ sửa phần code bảo mật và cấu hình triển khai.

## Podcast Hán Ngữ Lab theo D-041/D-042/D-043

- POD-06 DONE kỹ thuật local: toàn bộ7tập/14MP3 hiện hành dùng tên Hán Ngữ Lab / 汉语实验室 trong lời mở và lời kết; đã tạo lại14đoạn chứa tên. Nguồn/43đoạn phụ đề/Pinyin/nghĩa Việt đồng bộ, không còn tên cũ trong content/app/lib/server.
- Cùng giọngA Kokoro zf_001, model/speaker SHA pinned, tốc độ/EQ như trước; không đổi pitch/formant. 29đoạn khác sao chép nguyên PCM từ baseline, audit độc lập so từng đoạn đạt.
- Toàn bộ nền piano v8 giữ nguyên PCM/âm lượng/nhịp/cao độ/điểm nối/thời lượng87.060s. SHA bbcd3e0f2d936b8cc6ce5d4597a4dd44cff130a4fb5e6612179439028548878b; residual mix<1e-7 trên7tập. Không đổi nhạc để vừa lời mới.
- Nguồn content/podcast-radio.json tham chiếu base WAV/report mới trong .local/podcasts/brand-lab; sourceVoice/sourceReport khớp script. Mẫu v9 gốc và baseline trước đổi chỉ dùng đối chiếu, không ghi đè tên mới.
- Tên cũ còn trong mẫu/cache/backup lịch sử, không được catalog phục vụ. URL MP3 cũ404, mới206; API bỏ production/profile. Không xóa lịch sử để làm mất khả năng khôi phục.
- UI giữ chữ Hán lớn/Pinyin/nghĩa Việt, highlight và tự cuộn theo đoạn, bấm để nghe lại, ẩn nghĩa Việt, seek/tốc độ/nhạc riêng/yêu thích/resume/lặp. ID tập và lịch sử nghe không đổi. Sáng giữ pastel; tối các tab khác giữ nữ lo-fi/ẩn chibi.
- Ngày phát thanh19–25/10/2026,7chủ đề soạn sẵn; chưa tự sinh vô hạn. Nội dung vẫn unreviewed; nhạc owner-supplied/owner-provided-unverified, chưa xác minh phát hành công khai. Local preview phát được; live API còn chặn draft.

## Kiểm tra và sao lưu D-043

- Typecheck/lint/unit22/22/E2E10/10 desktop-mobile/cả hai theme/build đều đạt. Lần cuối typecheck và lint phần thay đổi cũng exit0; next-env đã về .next/dev/types. Logs .local/podcasts/brand-*.log.
- 14MP3 qua decode/peak/LUFS/hash QA; audit source giọng/nền và29đoạn PCM đạt. docs/reports/podcast-radio-integrity.json; .local/podcasts/brand-update.json.
- ASR trên7mix mới nhận tên mới2lần/tập, không tên cũ trong cửa sổ lời đọc, không flag thiếu nội dung. Coverage đoạn thấp nhất.878; còn nhầm chữ và bịa câu trên outro nhạc. Report buộc SHA của mix hiện hành; không dùng ASR làm phụ đề hay duyệt thanh điệu/cảm xúc.
- Bộ bài học145mục/290MP3 không có tên cũ trong nguồn;290SHA giữ nguyên, export290file khớp/privateLeaks0. Inventory active304file và danh mục media toàn workspace (bỏ runtime/model/vendor) tại docs/reports/audio-brand-audit.json. Không tuyên bố đã nghe/ASR mọi file lịch sử.
- Backup/restore70file SHA khớp: .local/podcast-backups/2026-10-20T01-48-01.028Z và .local/podcast-restore-check/2026-10-20T01-48-01.028Z. Gồm nguồn mới/preset/renderer, baseline WAV, base/report mới, catalog/14MP3, ASR/QA/runbook. Cùng máy; không offsite/model/runtime/DB đầy đủ.
- Bản trước đổi tên backup/restore39file tại2026-10-20T01-33-08.816Z. Không xóa tài nguyên cũ.

## Vận hành và tiếp tục

- Web http://localhost:3000/, API3001; root200/catalog7/Range206, URL âm cũ404, không lộ production/profile. Chưa triển khai Internet.
- API launcher10644/web11608; listener con có thể đổi, kiểm port/PID trước restart. Logs subtitles-api.log/.err và subtitles-web.log/.err; không dump stdout auth/email mô phỏng.
- Không còn render/ASR/test/build cần chờ. Không chạy lại rebrand hoặc renderer hội thoại/lo-fi cũ khi không có yêu cầu nguồn mới. Chỉ sửa phụ đề: đọc PODCAST_RUNBOOK và dùng script metadata.
- Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. .codegraph/ không có, không tự index.

## Phạm vi dự án còn lại

- D-028 giọngA145mục/290MP3 thường-chậm, file offline, không browser TTS/API trả phí. AUDIO-07/POD-02 còn duyệt chuyên môn/CMS publication/quyền phát hành; không quay lại OmniVoice.
- 16bài draft/94word IDs/80câu hỏi/39ví dụ chưa đủ HSK4 và chưa duyệt. Còn CMS CSV/media/audit/users và kiểm tra vận hành phù hợp; không quảng cáo hoàn thành giáo trình.
- Cloud/email/HTTPS, backup ngoài máy/AWS và migration toàn bộ chưa hoàn tất. Ngân sách150USD/6tháng gồm credit, không chi thêm; thông tin AWS chưa kiểm Console. Website miễn phí18+, AI tùy chọn; chưa hoàn thành toàn dự án.
