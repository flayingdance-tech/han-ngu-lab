# Bảng công việc

## PROMO-01 IN_PROGRESS — 2026-10-23T00:33:38.8367558+07:00

Đã thêm PromoBanner, CSS giảm chuyển động, CTA mở đăng ký và 3 WebP tối ưu. Giữ hero/học liệu cũ. Tiếp: kiểm thử responsive/build/secret, Private GitHub CI, backup và static release Lightsail có rollback; chưa triển khai. Bằng chứng .local/promo-20261023. Không đổi backend/Caddy/SMTP/SQLite.

## CLEAN-01 — dọn file hoàn tất, còn giới hạn bổ sung — 2026-10-22T15:14:25.9381210+07:00

Đã xóa22.370file/6,470GiB local và19file/30,53MiB staging server theo allowlist;383file bảo vệ/304MP3/12ảnh vàSQLite nguyên hash/digest,365file backup giữ lại đã kiểm hash. npm run podcast:check7tập14MP3 đạt; productionhealth16bài7podcastRange206đạt. Không sửa logic/restart/push/deploy, không xóa DB/credential/CodeGraph/Git/offsite/rollback. Bộ duyệt tự động chặn bước dọn bổ sung script cũ và thư mục trống (blocked by policy), nên giữ nguyên. Bàn giao docs/START_HERE.md; báo cáo docs/CLEANUP_2026-10-22.md; bằng chứng .local/cleanup-20261022. Chuẩn bị xử lý xóa chat bước cuối; chưa ghi đã xóa khi chưa có kết quả.


## CLEAN-01 IN_PROGRESS — 2026-10-22T15:06:17.9379655+07:00

Chủ dự án yêu cầu dọn file phát sinh/ảnh/âm thanh không dùng và chat. Đã đối chiếu CodeGraph, catalogs/CMS local và checksum; plan riêng .local/cleanup-20261022/plan.json khoảng6GiB. Giữ nguyên304MP3 hiện hành, ảnh UI đang dùng, nguồn/PCM/nhạc/modelKokoro/ASR, SQLite/local+production, credentials/offsite và2backupmedia365file đã kiểm hash. Chỉ xóa modelclone/MOSS không dùng, cache/build/test, mẫu thất bại, media ngoài catalog/CMS và snapshotmedia trùng; .codegraph/.git/node_modules không đụng. Pending docs/domain checkpoint đang có được giữ. Tiếp: xóa theo allowlist/absolute-path preflight, kiểm hash+DB+media/source refs, dọn stagingserver có chứng cứ nếu an toàn, viết bàn giao ngắn cho chat mới. Không push/deploy source ở mốc dọn.


## DOMAIN-01 — bàn giao đã đồng bộ — 2026-10-21T22:38:29.3502816+07:00

- FinalHEAD **eb18b321cd4f3a820591a91acc537a8cfc473dff** khớp local/GitHub Private main/Lightsail; [CI39627082548 SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39627082548). Frontend release3b39c11 giữ nguyên sau nghiệm thu; commit cuối chỉ tài liệu, VM cập nhật FF-only, không restart/import/test lặp.
- Canonical https://hanngulab.duckdns.org/ hoạt động; sslip/Amplify302, APIcũ410; REC07 hai mạng đã đạt sau cutover, probe dừng/gỡ. SMTP/non-origin env byte nguyên, Caddy khớp template, services active; mọi hàng gốc14bảng còn nguyên/integrity/FK đạt.
- Backup20261021T153300Z-fa88e3dc.sqlite.enc đã sync/restore offsite22:33(+07). Fixture/password/token tạm đã thu hồi/dọn riêng; AWSCLI đã logout. Không còn công việc triển khai/test/CI đang chờ.
- Hồ sơ chính docs/DOMAIN_MIGRATION.md đã trên PrivateGit và VM. Checkpoint kết quả cuối này lưu cục bộ, không push chỉ để kích hoạt CI/build thêm. .codegraph của chủ dự án vẫn untracked, không stage/chỉnh.
- Công việc ngoài phạm vi migration: theo dõi DNS/DuckDNS, tải và credit, backupPC, duyệt chuyên môn học liệu; không coi migration là hoàn chỉnhHSK4.

## DOMAIN-01 DONE — DuckDNS production — 2026-10-21T22:35:07.5066009+07:00

- Website chính: **https://hanngulab.duckdns.org/**. DNS A qua1.1.1.1 đúng54.253.61.113; TLS Let's Encrypt YE2/SAN đúng, hạn19/01/2027, Caddy tự gia hạn. Không thêm tài nguyên trả phí, CDN, DNS proxy hoặc quyền IAM.
- Frontend release **3b39c116bbcc9e455fb14f5d45090d9df936fb59**; [CI39625805868 SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39625805868). Lint,51/51tests,build,typecheck,smoke đều đạt; Gitleaks0finding. amplify.yml giữ baseDirectory:.next. Commit bàn giao tiếp theo chỉ sửa tài liệu.
- Đã staging hai hostname trước chuyển. APP_ORIGIN nay chỉ DuckDNS, bỏ APP_STAGING_ORIGIN; mọi biến khác gồm SMTP giữ nguyên byte. Đăng ký/SES thật/xác minh/reset một lần/login/cookie Secure,HttpOnly,Strict/CSRF/AdminCMS và tiến độ qua restart đều đạt. SES gửi đúng link DuckDNS; không ghi email/token/password vào log.
- 16bài/80câu,145âmA,7podcast/43đoạn;304MP3 khớpSHA gốc. 14podcast và cặp audio thường/chậm Range206. Mobile390×844 không tràn ngang; podcast phát hết87.06s, ready4/errornull. Không sửa UI, giọng, nhạc hoặc học liệu.
- REC07 vẫn DONE: ghi đè XFF bằng TCP peer, xóa headerIP không tin cậy; Express chỉ tin hop0 loopback. Hai mạng Windows/AWS trước và sau cutover có clienthash và partition key rate-limit khác nhau; headergiả không đổi danh tính, chỉ1forwardedhop. Bằng chứng cuối22:30(+07): Windows d87c827817b834e2a6f407ac/AWS dd9f5c07479bb481865e11fe. Probe đã gỡ và dừng.
- sslip/Amplify chuyển302 tới DuckDNS, giữ URI; APIcũ302 tới endpoint410 cố định, không proxyExpress. POST từ origincũ/giả403. Browser kiểm cả2host: #reset mở form mới, #verify tới verifier mới; fragment được consume/xóa. Caddy khớp template; Amplify rules readback đúng, giữ headers/platform/resources. Bản rollback Amplify gần nhất đọc được: Deployment11 SUCCEED, SHA b9d8463; không ép build khi chỉ đổi302.
- Đã thử rollback cấu hình trước cutover: sslip200/Duck302 về sslip, rồi restage. Không restore SQLite; session/progress vẫn còn. Digest toàn bộ hàng gốc14bảng, integrity/FK đạt. Snapshot rootprivate /var/backups/han-ngu-lab-ops/domain-duck-20261021; giữ releasecũ và snapshot rules riêng. Fixture kiểm tra đã hạ quyền/disabled/thu hồi session-token; không xóa tài khoản cũ.
- Backup sau cleanup **20261021T153300Z-fa88e3dc.sqlite.enc**, SHA256 **05c284866c31ba32b92a3ca10386ab19628302afd9218a2b53645ca62b05160b**; serviceSUCCESS/exit0. Sync ngoài máy chủ22:33(+07), giải mã/restore/integrity/FK/inventory đạt. Timer và WindowsScheduledTask cũ giữ nguyên; PC cần bật/login/Internet.
- Lỗi chuẩn bị đã chặn trước cutover: bundle tạo refHEAD phải fetchHEAD; Next chuẩn hóa canonical bỏ slash cuối; partition key nằm trong RateLimit-Policy dạng pk=:...:. Đã sửa helper riêng, không giảm bảo mật để vượt test. Tài liệu chi tiết docs/DOMAIN_MIGRATION.md.
- Còn giới hạn vận hành: hostname miễn phí phụ thuộc DuckDNS, một VM, limiterRAM reset khi restart/NAT dùng chung; cần theo dõi credit/traffic. Nhãn beta chưa duyệt giữ nguyên, không cam kết hoàn chỉnhHSK4. Không đổi SES/IAM/SMTP/database/media.
## DOMAIN-01 — staging — 2026-10-21T22:25:41.9290910+07:00

Owner phê duyệt chuyển DuckDNS cùngLightsail; DNS/TLS/health đạt, staged2origin/CaddyTCPonly; SESverify/reset/cookie/CSRF/CMS/progress và304MP3SHA/Range đạt; Windows+AWS distinctIP/buckets/forged ignored. Local51tests/lint/build/typecheck/smokePASS. Chưa cutover, giữsslip/Amplify nhưcũ. Rootprivate rollback domain-duck-20261021, tài liệu docs/DOMAIN_MIGRATION.md. Tiếp: browsermobile/CMS, thửrollback/restage, deploycanonicalstatic, cutover302+postgates+backup+PrivateCI. KhôngthaySQLite/SMTP/IAM/media.


Cập nhật: 2026-10-20, Asia/Bangkok.
Trạng thái: TODO / IN_PROGRESS / BLOCKED / DONE. Phạm vi đã chốt; nghiệm thu trọn dự án còn các mục chưa xong.

| ID | Việc | Trạng thái | Điều kiện xong / bằng chứng |
|---|---|---|---|
| PRE-01 | Xác nhận workspace và nội dung ZIP | DONE | Đúng root, ban đầu trống; ZIP có 4 file |
| PRE-02 | Đọc, bảo toàn tài liệu gốc | DONE | docs/references; master chính + toàn bộ PRD/blueprint đã đọc |
| PRE-03 | Đối chiếu mâu thuẫn và đề xuất | DONE | REVIEW_PROPOSAL.md |
| PRE-04 | Tạo chỉ dẫn tối đa 150 dòng | DONE | AGENTS.md; kết quả kiểm tra trong WORK_LOG |
| PRE-05 | Tạo sổ bàn giao và quy trình tiếp tục | DONE | STATUS, TASKS, DECISIONS, NEXT_STEPS, WORK_LOG |
| PRE-06 | Kiểm tra tài liệu chính thức liên quan | DONE | Nguồn Next.js, AWS, Supabase, HSK trong REVIEW_PROPOSAL |
| PRE-07 | Khảo sát trực quan bjtlab.me | BLOCKED | Công cụ web không truy cập được, trình duyệt timeout; chưa đánh giá UI |
| DEC-01 | Chốt phạm vi, nội dung, AI | DONE | PRODUCT_SPEC, D-008/D-013: HSK 4 đầy đủ, AI tùy chọn |
| DEC-02 | Chốt ngân sách, đối tượng và thời điểm duyệt | DONE | D-009/D-010/D-011: 150 USD gồm credit, 18+, người duyệt có sau |
| DEC-03 | Chốt khởi công, kiến trúc và quyền triển khai | IN_PROGRESS | Đã chốt bắt đầu; kiến trúc local ghi ARCHITECTURE, cloud chưa xác minh |
| PRE-08 | Cập nhật phương án chi phí/AI/di chuyển | DONE | COST_AND_PORTABILITY_PROPOSAL; nguồn chính thức đã đọc |
| CONTENT-01 | Lập ma trận độ phủ nhập môn–HSK 4 theo chuẩn xác định | IN_PROGRESS | Có inventory/audit 16 bài; chưa có ma trận đầy đủ chuẩn HSK |
| OPS-00 | Kiểm tra hạn Free Plan, credit và dịch vụ khả dụng | TODO | Hiện chỉ có thông tin chủ dự án, chưa kiểm tra Console |
| DEV-01 | Khảo sát runtime, Git, lập đặc tả và kiến trúc cuối | IN_PROGRESS | Runtime đã biết, tài liệu local đã có; cloud chưa chốt theo tài khoản |
| DEV-02 | Khởi tạo source, thiết kế giao diện, pipeline | IN_PROGRESS | Source local đã qua build/lint/E2E; pipeline release/cloud chưa có |
| DEV-03 | Auth, phân quyền, API, dữ liệu | IN_PROGRESS | API local qua integration; email local mô phỏng, production email chưa cấu hình |
| DEV-04 | CMS, revision, media, import/export | IN_PROGRESS | Có workflow/JSON/bản xem duyệt và cảnh báo biên tập; media/CSV chưa hoàn thiện |
| DEV-05 | Học bài, chấm điểm, tiến độ, SRS | IN_PROGRESS | Luồng học/lưu tiến độ qua E2E desktop/mobile; chưa nghiệm thu mọi lỗi mạng/phiên |
| DEV-06 | Soạn và kiểm duyệt học liệu | IN_PROGRESS | Có 16 bài thử nghiệm, chưa đủ HSK 4 hoặc duyệt độc lập |
| DEV-07 | AI và tính năng mở rộng nếu được chọn | TODO | Phạm vi quyết định; quota, chất lượng và chi phí kiểm thử |
| OPS-01 | Dự toán, xác minh tài khoản, cấp quyền | TODO | Số liệu thực tế; không suy từ ZIP |
| OPS-02 | Staging, E2E, bảo mật, backup/restore | IN_PROGRESS | 6 E2E local đạt, backup roundtrip đạt; staging/cloud chưa có |
| OPS-04 | Diễn tập chuyển nhà cung cấp | TODO | Restore ngoài AWS giữ user/progress/media; auth/email hoạt động; kế hoạch trước hết hạn |
| OPS-03 | Phát hành trong phạm vi được cấp | TODO | URL, smoke test, giám sát và vận hành được xác minh |
| END-01 | Nghiệm thu và bàn giao | TODO | Đủ tiêu chí đã chốt, không còn thiếu mục bắt buộc |
| FIX-01 | Đăng xuất dễ tìm desktop/mobile | DONE | Nút header, 2 E2E xác minh logout + /me 401 + reload |
| CMS-EDIT-01 | Soạn đủ 3 loại bài tập, alternatives, Pinyin ví dụ, thứ tự | DONE | 2 CMS E2E, typecheck, lint và build đạt ngày 18/10 |
| UI-02 | Pastel theo ảnh, chữ Trung lớn, theme tối lo-fi | DONE | Typecheck/lint/build đạt; 2 theme E2E, 8 ca học/CMS đạt qua chạy lại; xem TEST_REPORT/DESIGN_ASSETS |
| UI-03 | Minh họa chibi riêng cho bốn tab học | DONE | 4 WebP alpha, 10/10 E2E học/theme/chibi; typecheck/lint/build đạt; screenshot desktop/mobile sáng/tối |
| UI-04 | Bố cục/tỉ lệ và minh họa sát collage gốc | DONE | Home 3 thẻ/banner ~3:1, header gọn/scenery, dữ liệu lịch thật; 10 E2E + 4 theme cuối, typecheck/lint/build đạt |
| UI-05 | Dùng đúng minh họa gốc trùng hoàn toàn mẫu | BLOCKED | Cần bộ asset gốc riêng lẻ; hiện chỉ có collage 821x461, bản tái dựng không trùng pixel |
| UI-06 | Bỏ chibi khỏi dark | DONE | Ẩn mascot/header/sidebar, hero góc học trống; 4 ca theme đạt qua sửa và chạy lại; typecheck/lint/build đạt |
| UI-07 | Khôi phục nữ lo-fi, dark chỉ bỏ trẻ chibi | DONE | Đổi đúng dark hero về study-night.webp; theme 4/4, lint/build đạt, light không đổi |

| AUDIO-01 | Khảo sát VoiceStudio và podcast | DONE | Đọc tài liệu chính thức, kiểm tra audio hiện tại/GPU/file; WORK_LOG. Chưa thử chất lượng |
| AUDIO-02 | Thử tách nhạc/chỉnh và nhân bản giọng | DONE | Đã thử thật; bộ nhân bản bị chủ dự án từ chối chất lượng (D-027), chuyển mẫu A theo D-028/AUDIO-08. Đây là kết quả thử nghiệm, không nghiệm thu giọng gốc |

| AUDIO-03 | Xuất mẫu nghe bản thu gốc/tách nhạc/chỉnh nhẹ | DONE | 3 MP3 24.5 giây, CPU pipeline 42.95s, ffprobe/FFmpeg đạt; WORK_LOG và .local/audio-preview/report.json |
| AUDIO-04 | Mẫu giọng trẻ nhẹ/vừa | DONE | Hai MP3 24.5s +0.75/+1 cung, ffprobe/decode/loudness đạt; chờ đánh giá âm sắc |
| AUDIO-05 | Kiểm tra kỹ thuật nguồn vocals mới | DONE | Metadata/decode/loudness đạt; WORK_LOG. Không duyệt chất lượng nghe; quyết định master sau đó ở D-026 |
| AUDIO-06 | Giọng thống nhất + VoiceStudio offline — tích hợp kỹ thuật | DONE | 145/145 đoạn,290 MP3; audit/decode/build/export đạt, backup/restore297 file SHA256 khớp, unit18/18,audio E2E4/4,Python2/2,cache/profile guard đạt. Finalize-report20:22:49 +07:00; mọi audio unreviewed, chất lượng nghe ở AUDIO-02/07 |
| AUDIO-07 | Nghe duyệt audio trước xuất bản | TODO | Người có chuyên môn đối chiếu chữ Hán/Pinyin, bốn thanh, chữ đa âm, độ tự nhiên và quyền media; lưu bằng chứng trước approved. Chưa có output nào approved |


| AUDIO-08 | Thay giọng lỗi bằng mẫu A — tích hợp kỹ thuật | DONE | D-028 chọn A;145/145 mục,290MP3; Pinyin/打算 regression3/3,unit18/18,E2E6/6,build/export SHA256 đạt,backup/restore295file. Toàn bank vẫn unreviewed, duyệt ở AUDIO-07 |

| POD-01 | Podcast local bằng giọng A và nhạc miễn phí có giấy phép | DONE | 3 tập/30 đoạn/6MP3; CC BY4.0 credit; transcript/seek/music switch/rate/retry; unit20/20,E2E10/10,typecheck/lint/build đạt; QA6file; restore19file SHA256; PODCAST_RUNBOOK, ERRORS_AND_FIXES, reports/podcast-inventory.json. Chỉ DONE phạm vi kỹ thuật local |
| POD-02 | Duyệt và xuất bản podcast | TODO | Người có chuyên môn duyệt chữ/Pinyin/phát âm; CMS revision, reviewer/publication và đường phục vụ bản approved; hiện toàn bộ unreviewed và live API chặn |

| POD-03 | Lo-fi chill và hoàn thiện nghe hằng ngày | DONE | 7 tập/70 đoạn/14MP3; giữ3voice SHA; CC BY4.0 credit; resume/yêu thích/tìm/lặp/liên tục/transcript; unit21/21,E2E14/14,typecheck/lint/build/QA14file đạt; restore33file hash khớp. Chỉ DONE kỹ thuật local; duyệt/xuất bản ở POD-02 |

| PUB-01 | Đưa source lên GitHub Private | DONE | D-046: flayingdance-tech/han-ngu-lab Private, main; push97e562f và toàn lịch sử không force, SHA remote khớp; Actions39400869176 success toàn bộ; chưa AWS. Checkpoint tài liệu tiếp theo cần theo dõi CI |
| DEP-01 | Pre-GitHub technical deployment audit | DONE | D-044: PRE_GITHUB_AUDIT.md; Gitleaks/hygiene,6safe fixes,unit25/auth-browser1/build/smoke/CI-YAML/runtime-install đạt; privateGitHub WARNING, fullAWS FAIL do thiếu production dependencies; không push/deploy |
| POD-06 | Thống nhất tên Hán Ngữ Lab trong âm thanh | DONE | D-043:14đoạn/7tập và phụ đề tên mới; cùng giọngA,29đoạn PCM/nền giữ nguyên;290file bài học giữ SHA;ASR7tập nhận tên mới2lần/tập;unit22/E2E10/typecheck/lint/build đạt;backup/restore70file khớp. Chỉ DONE kỹ thuật local |
| POD-05 | Khôi phục phụ đề podcast | DONE | D-042: 43 đoạn/7 tập, chữ Hán/Pinyin/nghĩa Việt, highlight/seek/tự cuộn; typecheck/lint/build đạt, unit22/22,E2E10/10; backup/restore39file khớp SHA; 14MP3 không đổi. Duyệt chuyên môn còn ở POD-02 |
| POD-04 | Áp dụng radio theo preset chủ dự án chốt | DONE | D-041:v9+1.3dB/nhạc v8 nguyên;7tập/14MP3;integrity/sourcevoice+music đạt;unit22/22,E2E14/14,typecheck/lint/build/export/ASRtriage7tập đạt;restore34file hashkhớp. Chỉ DONE kỹ thuật local;POD-02 còn duyệt/xuất bản |

POD-04 bằng chứng mẫu (2026-10-19T14:50:19.8021012+07:00): pilot-mix.mp3 76.94s,14đoạn; nhạc nguồn chủ dự án; render/ASR exit0; báo cáo true peak -1.94dBTP. Trạng thái IN_PROGRESS vì mới mẫu local, còn tích hợp radio và luân phiên tập.

POD-04 v2 (2026-10-19T15:41:10.4719983+07:00): mẫu78.28s/7đoạn, không đọc lặp/cụm ghi nhớ; nền ổn định không speech duck. IN_PROGRESS, chờ chủ dự án chốt mẫu theo D-033 trước áp dụng full. File và report có hậu tố v2; giữ v1.

POD-04 v3 (2026-10-19T19:15:07.5198195+07:00): mẫu87.060s, tốc độ.84, nhạc dài CC BY4.0 excerpt liên tục,loopCount0,range1.217dB; render/ASR đạt,backup14file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt theo D-033; chưa đổi web.

POD-04 v4 (2026-10-19T21:45:53.6503584+07:00): chủ dự án từ chối nhạc v3; mẫu87.060s nền tham chiếu cũ + WAVgiọng chậm v3 giữ SHA. Render/true peak đạt,backup8file SHAkhớp. IN_PROGRESS chờ nghe/chốt; không áp dụng full.

POD-04 EQ (2026-10-19T21:48:29.8968579+07:00): mẫu thanh nhẹ87s,samev4music,không pitch/speed; đo true peak -4.07dBTP. IN_PROGRESS chờ nghe/chốt.

POD-04 v7 (2026-10-19T22:04:19.8363573+07:00): piano file mới chủ dự án,cắt-ghép14s vào nguồn55s,crossfade2s,nguyênnhịp/caođộ,đủ7đoạn87.060s. Nềnbalance -5.57dB/true peak -3.58dBTP;ASR đạt,backup11file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt; không áp dụngweb.

POD-04 v8 (2026-10-19T22:06:51.6085568+07:00): tăng nền3.52dB/balance-2.05dB,87.060s,voiceSHA giữ nguyên. Render/ASR đủ nội dung,true peak-3.26dBTP;backup5file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt,không đổiweb.

POD-04 v9 (2026-10-19T22:16:59.3083211+07:00): mẫu dẫn/kểchuyện87.060s,lờikết80.98s;giọngA nhịp.82–.90/ngắt theoý,nhạcPCMv8giữSHA bbcd3e0f... (full trong report) và residualmix<1e-7. Render/ASR chạy đạt;ASR 好→号 còn cần nghe,không tựduyệt. Backup11file hashkhớp. IN_PROGRESS chờ chủ dự án chốt,không đổiweb.

| MAIL-01 | SES SMTP production và Lightsail runbook | DONE | Tích hợp cục bộ: Sydney587 STARTTLS/env, verify/resend/reset, 6mock tests, total31/31; lint/typecheck/build/smoke/audit/Gitleaks đạt; docs/reports/ses-smtp-integration.json. Chờ duyệt push và chưa nghiệm thu SES/Lightsail thật |

| PUB-02 | Push SES và theo dõi CI/Amplify | DONE | D-048 e12d719 Private main, giữ57f3a3b/1b23772 và .next, không force; CI39468035970 success, Amplify appd12mghkvifkghp Deployment3 SUCCEED đúngSHA. Chỉ frontend; chưa Lightsail/SMTP thật |

| MAIL-02 | Khôi phục xác minh email và Caddy proxy | DONE | Chỉ kỹ thuật cục bộ D-049: resendUI/anti-enumeration/cooldown/proxy; unit39/39/E2E6/6/lint/typecheck/build/smoke/secrets đạt. SES Sandbox xác minh Console; runbook cập nhật Lightsail, chờ duyệt push và nghiệm thu thật/CDN IP |

| PUB-03 | Push bản sửa MAIL-02 và theo dõi phát hành | DONE | D-050 099c26e Private main, không merge/force; .next giữ nguyên/secrets đạt; CI39538587917 SUCCESS, AmplifyDeployment4 Deployed/SUCCEED đúngSHA; backend chưa cập nhật, runbook AUTH_EMAIL_RECOVERY |

| REC-01 | Production content recovery và vận hành | IN_PROGRESS | D-051: inventory/backup/idempotent imports/media publication/pipeline/tests/deploy/report; giữDBngười học, chờreleasepolicy/quyềnnhạc, SSHCLIhiệnchưađủkết nối |

| REC-02 | Public Beta 16 bài, bộ A, 7 podcast và CMS từng mục | IN_PROGRESS | D-052/D-053; local47unit/18E2E/allchecks đạt; chờ pushCI/Amplify/backend/proof. Quyền đã owner xác nhận, không kiểm tra lại |

| REC-02 | Phát hành Public Beta và CMS từng mục | DONE | bcff32e Private main/CI39571450948 SUCCESS/Amplify7SUCCEED/Lightsailactive; HTTP16bài290audio14podsha/caption/protection đạt; CMS testsynthetic47unit18E2E. QuyềnD053ownerconfirmed |
| REC-03 | Gán Admin production và nghiệm thu CMS tài khoản thật | BLOCKED | Cần ownerchọn tài khoản;3learner/1verified, đãhỏi21Oct2026, khôngtựnângquyền. Sauchốtbackup+CLIgrant/audit/revokesession |
| OPS-02 | Backup vận hành và bản ngoài AWS | DONE | Timerdailyenabled/active/jobactualsuccess, AES256GCMrestore/FK/inventory; offsiteWindowsactualdecryptmatch. Đồngbộoffsiteauto cònTODO, khônghứađãtựđộng |
| MAIL-03 | SES production access | BLOCKED | SydneySandbox,ConsolebuttondisabledDomainverificationneeded; khôngdomainownerđãverify/khôngmua/nânggói, requestdraft sẵn |

| PUB-04 | Đồng bộ biên bản và bộ kiểm thử cách ly | DONE | be8ebd8 Private main/CI39573514798 SUCCESS/Amplify8SUCCEED/VMFFclean/active, khôngrestartDBimport; CMSrunner2/2 đạt. REC03 chờ ownerchọnAdmin |


| REC-03A | Cấp quyền Admin đã được owner chấp nhận | DONE | D054, uniqueverifiedactive đãroleadmin, revoke1session/audit/fieldkháckhôngđổi, before+afterbackuprestore/offsiteđạt; khôngđổipassword/code/cloudconfig |
| REC-03B | Kiểm tra đăng nhập CMS bằng phiên thật của chủ dự án | TODO | Chủ dự án đăng nhập lại bằng mật khẩu hiện có; không mượn password/token hoặc mint phiên để giả lập owner |


| REC-04 | Gửi yêu cầu email đặt lại mật khẩu Admin | DONE | APIforgotproduction200 lúc10:19:56Z, khônginPII/token và khôngđọclạipasswordbăm; chưađồngnghĩaxácnhậnhộpthưđãnhận, ownerdùnglink30phút |


| ID | Trạng thái cập nhật 21/10/2026 (+07) | Điều kiện và bằng chứng |
| --- | --- | --- |
| REC-03B | DONE | Owner xác nhận CMS Admin login thật hoạt động |
| REC-05 | DONE | SES Sydney GRANTED/ProductionAccessEnabledtrue; feedback simulator nhận cả bounce/complaint; adapter SMTP thật verify/reset accepted, xem SES_PRODUCTION_REQUEST |
| REC-06 | DONE | ScheduledTask LastTaskResult0; archive ngoàiAWS SHA/decrypt/integrity/FK/inventory đạt; giới hạn PC on/login/Internet ghi runbook |
| REC-07 | IN_PROGRESS | Chống forgedheaders đạt direct; peer Amplify ngoài CloudFront origin nên bucket chưa theo viewer. Phụ thuộc authenticated relay/ingress cần triển khai/test; không mở trust toànAWS |
| REC-08 | IN_PROGRESS | Local lint/typecheck/49unit/build/smoke đạt; production16bài/7podcast/14MP3 SHA+Range đạt. Chờ stagedscan/push/CI/Amplify/VMFF |

REC-08 DONE 2026-10-21T20:15:27.5757022+07:00: commit1fab4bb, CI39602877223SUCCESS, Amplify9SUCCEED, VMFF/installedSHA/health đạt. REC-07 vẫnIN_PROGRESS như PRODUCTION_OPS_RECOVERY; không tuyên bố allproductionblockerscomplete.

REC-07 IN_PROGRESS 2026-10-21T20:43:31.9102473+07:00: Rootcause/trustboundary xácđịnh, existingrewrite không có authenticated originheader qua cấu hình công bố; chờ owner duyệt origin/architecture theo mục9–10. Chưacode/deploy/postfixmulticlient; chưaDONE.

REC-07 APPROVED / D-057 2026-10-21T21:02:27.2328209+07:00 : Owner phê duyệt staged single-Lightsail, chỉcutoversau verification, giữAmplifyrollback, trustTCPonly, test2networks+forged+auth/CMS/content/SES/persistence; oldAPIkhôngbypass; rollbackconfigkhôngSQLite; khôngpaidresources. Đang staging exact2origin, loginemailhashguard10/15min, Caddypublicbuild riêng. Local check51tests/lint/typecheck/build vàsmoke đạt; chưadeploy/cutover.

REC-07 DONE 2026-10-21T21:32:21.4202324+07:00: DirectTCPonly, hai mạngthật+forged saufullrollback/táicutover21:30đạt; auth/CSRF/CMS/16lessons/7podcasts/304SHA/Range/SES/persistence/data14tables/backupđạt. Runbook REC07_DIRECT_INGRESS_RESULT.md.

REC-07 HANDOFF DONE 2026-10-21T21:39:12.0982954+07:00: b9d8463Private/main/VMkhớp, CI39617833990success, canonicaldirectingressactive, actual2networks+forged/fullrollback/CSRF/auth/CMS/media/SES/SQLite/offsitepassed. Khôngcònrequiredwork củaREC07.

Kết quả cuối về chat: đã thử đúng UUID của cuộc trò chuyện hiện tại bằng codex delete --force; CLI trả lỗi nguyên văn failed to delete session (exit1), nên chat CHƯA bị xóa. Không sửa/xóa thủ công database hoặc transcript của Codex và không đụng chat khác. Dọn file chính DONE; phần xóa chat và dọn script/thư mục bổ sung còn BLOCKED bởi kết quả CLI/bộ duyệt tự động. Bản bàn giao đã lưu, cleanup commit ea16da5 chưa push.

DOC-AWS-01 DONE — 2026-10-22T15:33:31.1471397+07:00: tạo docs/AWS_DEPLOYMENT_SHORT.md, bản ghi tối giản từ offline lên AWS, lỗi và cách xử lý theo hồ sơ20–22/10. Chỉ tài liệu; không sửa mã, dữ liệu hoặc AWS, không chạy lại test/build, không push.


DOC-AWS-02 DONE — 2026-10-22T15:56:29.1054932+07:00: tạo docs/AWS_DEPLOYMENT_REPORT.md:8giai đoạn, lỗi/nguyên nhân/cách khắc phục, lỗi thao tác, checklist8bước và prompt tái sử dụng. Phân biệt cấu hình Amplify.next với exportout, ghi kiến trúc cuối thayproxycũ. Chỉ tổng hợp hồ sơ, không triển khai hoặc kiểmAWS lại, không push.
