## MAIL-02 / D-049 — bản sửa cục bộ đã hoàn tất — 2026-10-21T10:21:14.3269697+07:00

- CodeGraph dùng trước để đọc AuthPanel/client/app/email và quan hệ callers. AuthPanel có resend/cooldown, giữ email và xử lý429/503; API generic register201/resend-forgot200 kể cả SMTP lỗi, bảo toàn tài khoản/password cũ. Kiểm tra credentials đúng mới báo login chưa verified.
- Cooldown60giây/5yêu cầu mỗi giờ theo hash email dùng chung ba endpoint, kể cả địa chỉ không tồn tại; auth/API IP limits giữ20/15phút và180/phút. Gửi tối đa20tác vụ RAM, tuần tự1.1giây; chỉ log mã cố định. SIGTERM drain trước đóng DB; không durable outbox/multi-replica limits.
- Express chỉ trust hop0 ở127.0.0.1/::1/IPv4-mapped127.0.0.1; API chỉ bind loopback. Test headergiả không né limiter, haiIP thật không gộp, không ERR_ERL_UNEXPECTED_X_FORWARDED_FOR. Caddyfile/chain Amplify→Caddy thực chưa đối chiếu, cần nghiệm thu IP trước rollout; không trust tất cả CDN.
- Đã đọc SES Sydney Console: Sandbox/Healthy/200email24h/1emailgiây. Chưa gửi thử hoặc thaycloud/IAM/quota. Gmail người nhận chưa verified vẫn bị chặn cho đến khi AWS cấp production access.
- Lint/full và lint2test mới exit0; unit39/39; E2E6/6 desktop/mobile; typecheck/build/smoke exit0; stagedGitleaks0finding. E2E lượt đầu4/6 do test đòi nút quay lại trong khi app đã chuyển login; sửa test, full rerun6/6, không sửa app để né test. E2E dùng SQLite synthetic riêng, unit DBmemory; không xóa/reset/chạm DB học viên.
- Giữ amplify.yml baseDirectory:.next nguyên remote; frontendbuild không render lại media. Source/report/runbook docs/AUTH_EMAIL_RECOVERY.md và docs/reports/auth-email-recovery.json. Chưa push/deploy/backend email thật; chỉ sau xác nhận mới push. .codegraph untracked của chủ dự án giữ nguyên, không stage. Không còn test/build cần chờ.
## PUB-02 / D-048 — kết quả hoàn tất — 2026-10-21T00:43:30.9812594+07:00

- Push an toàn master:main lên flayingdance-tech/han-ngu-lab Private thành công. Commit cuối e12d719b76bf373d7f0418a4f19c5836833d1d5b; merge9a2acec giữ57f3a3b và remote1b23772, không force/xóa/rewrite/conflict. amplify.yml khớp nguyên remote baseDirectory:.next.
- GitHub Actions39468035970 SUCCESS cho đúng e12d719: secrets/dependencies/lint/test31/build/typecheck/production smoke đều đạt. URL https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39468035970. Retest local sau merge cũng đạt; private/remoteSHA đã xác minh.
- Sau khi chủ dự án tự đăng nhập AWS Console, đọc Amplify Sydney app d12mghkvifkghp/main: Deployment3 cho đúng e12d719 đã Deployed / SUCCEED, build2phút16giây, deploy9giây, tổng2phút26giây. Domain https://main.d12mghkvifkghp.amplifyapp.com . Chỉ đọc Console, không nhấn redeploy/chỉnh config/tạo resources.
- Chưa triển khai backend Lightsail, chưa đưa SMTP credentials lên server, chưa gửi thử email thật, không sửa database. Hosting frontend thành công không xác nhận luồng SMTP/backend thật hoạt động.
- Bản ghi kết quả này lưu cục bộ chưa commit/push để giữ commit phát hành e12d719 và tránh kích hoạt thêm build chỉ cho biên bản. Không còn CI/deploy cần chờ. Bằng chứng máy .local/pre-github-audit/github-push-verification.json; screenshot/AX Console xác nhận Deployed. Lượt sau không push các checkpoint kết quả trước khi có phạm vi mới phù hợp.
## D-048 — push SES đã được phê duyệt — 2026-10-21T00:39:38.5050715+07:00

- Chủ dự án xác nhận push57f3a3b lên Private main; yêu cầu fetch/merge an toàn, giữ nguyên amplify.yml baseDirectory:.next từ GitHub, không force/xóa; dừng nếu conflict hoặc cần sửa cấu hình Amplify. Chỉ theo dõi auto-deploy nếu được kích hoạt, không deploy Lightsail/SMTP credentials/DB/tài nguyên AWS.
- Fetch origin/main nhận1b23772 (chỉ amplify.yml out→.next). Merge9a2acec giữ hai parent57f3a3b và1b23772, không conflict; git diff origin/main -- amplify.yml rỗng. Lần merge đầu thiếu identity nên chưa thực hiện; lặp với identity Codex cục bộ theo lệnh thành công, không đổi global config.
- Sau merge: lint/test31/31/build/typecheck/smoke exit0. Logs .local/pre-github-audit/ses-merge-*.log. Gitleaks toàn lịch sử reachable exit0; không track populated env/credentialCSV/privateDB/key. next-env sinh tự động đã về nội dung trước build. Không chạm UI/media/DB.
- Đang push commit checkpoint kế tiếp sau xác minh Private và remote chưa đổi, rồi chờ CI. AWS CLI không có trong PATH; GitHub chưa có Amplify check/deployment; Console mở tới màn đăng nhập. Đã yêu cầu chủ dự án tự đăng nhập riêng để đọc Amplify, không yêu cầu secret trong chat. Không khẳng định auto-deploy đã kích hoạt/thành công.
## Ưu tiên MAIL-01 — 2026-10-21T00:35:12.4760766+07:00

1. Code SES SMTP/test/runbook đã hoàn tất cục bộ, chưa push. Phải xin xác nhận trực tiếp mới trước push lên Private main. Không tự deploy Lightsail/AWS từ checkpoint này.
2. Sau duyệt push: kiểm CI, rồi chỉ khi được giao triển khai mới áp dụng docs/SES_SMTP_LIGHTSAIL.md, credentials nhập riêng tại máy chủ; giữ nguyên DB/path/service/media. Nghiệm thu gửi thư thật còn chưa thực hiện; kiểm sandbox Sydney trước khi nhận người dùng thật.
3. GitHub commit645035a đã push và Actions39401095500 success (thay checkpoint pending bên dưới).

# Bước tiếp theo

Checkpoint 2026-10-20T15:47:30.7933947+07:00, Asia/Bangkok (+07). Đọc PROJECT_STATUS và WORK_LOG trước.

0.1 PUB-01 đã được xác nhận D-046 và push97e562f lên main Private https://github.com/flayingdance-tech/han-ngu-lab; Actions39400869176 success. Local master theo dõi origin/main. Checkpoint tài liệu sẽ push riêng và kiểm CI mới; nếu lỗi phải báo nguyên nhân/phương án trước push thêm. Không AWS/Public/force.
0. DEP-01/D-044 xong: đọc PRE_GITHUB_AUDIT.md/DEPLOYMENT. Không push GitHub hoặc tạo AWS resources khi chưa có yêu cầu. Bước sau là private repo visibility/remote, plan/credit/eligibility, email adapter, API HTTPS+DB persistent+backup ngoài máy+proxy /api và publication dữ liệu. Không bỏ production guard, không audit lại3phần owner đã duyệt. Dev advisory braces chưa có fix; CI chỉ validate và không có AWS secrets.
1. POD-06/D-043 đã đổi tên thành Hán Ngữ Lab / 汉语实验室 trên7tập/14MP3 và phụ đề: cùng giọngA,29đoạn PCM và nềnv8 giữ nguyên. Không làm mẫu/hỏi chốt lại; chỉ đổi preset/nhạc khi chủ dự án yêu cầu mới. Không render lại hoặc chạy renderer lo-fi/hội thoại cũ. Sửa riêng phụ đề: đọc runbook, dùng podcast:subtitles và kiểm hash âm thanh.
2. Nếu cần đổi nguồn hoặc thêm tập: đọc PODCAST_RUNBOOK; dùng content/podcast-radio.json và podcast-radio-music.json, npm run podcast:render. Giữ base WAV/report hiện hành ở brand-lab và PCM nền pinned; mẫu WAVv9 là lịch sử. kiểm hash/cache/checkpoint trước. ASR raw có thể bịa chữ ở outro, phải chạy podcast-asr-review.py và giữ unreviewed.
3. POD-02: quy trình duyệt chuyên môn, CMS reviewer/publication và xác minh quyền nhạc cho phát hành công khai. Không tự approved chỉ vì owner chọn âm sắc hoặc ASR/schema đạt.
4. AUDIO-07: người có chuyên môn rà chữ/Pinyin/thanh điệu/đa âm/độ tự nhiên. BộA145mục/290MP3 vẫn nguyên; không quay lại OmniVoice hoặc thêm nhạc vào bài/từ vựng.
5. Hoàn thiện CMS CSV/media/audit/users, hết phiên/lỗi mạng, giữ revision đã xuất bản và tiến độ. Tiếp tục ma trận/học liệu nhập môn–HSK4, hỗ trợ thay giáo trình/mở HSK5–6;16bài hiện tại còn draft.
6. Cloud/email/HTTPS cần quyền truy cập/cấu hình tài khoản; kiểm số dư/hạn thật và chi phí sau credit trước triển khai. Không mua/nâng gói/chi thêm. Local hoạt động không đồng nghĩa đã phát hành Internet.
7. Backup mới70file podcast đã restore/hash khớp cùng máy (STATUS có đường dẫn); còn offsite và migration toàn bộ user/progress/content/media/auth/email. Runtime/model và DB không nằm đủ trong backup podcast.
8. Giữ UI sáng; tối các tab khác giữ nữ lo-fi, chỉ ẩn trẻ chibi. D-042 khôi phục phụ đề 3 ngôn ngữ, podcast vẫn không ảnh. UI-05 cần asset gốc riêng nếu đòi trùng pixel collage.
9. D-043 logs brand-* ghi typecheck/lint/unit22/E2E10/build/QA/ASR7tập/backup70file; ASR phải khớp SHA mix hiện hành. Bộ bài học290SHA và export không đổi. Không có tác vụ render/ASR/build còn chạy tại checkpoint. Kiểm PID web/API thật trước restart, không dump auth stdout.
