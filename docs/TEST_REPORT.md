# Báo cáo kiểm thử — bản local

Ngày: 2026-10-17, Asia/Bangkok. Đây là mốc kỹ thuật local, chưa phải nghiệm thu phát hành.

| Kiểm tra | Lệnh / bằng chứng | Kết quả |
|---|---|---|
| TypeScript | `node node_modules/typescript/bin/tsc --noEmit --incremental false` | Exit 0 |
| Lint toàn ứng dụng | `node node_modules/eslint/bin/eslint.js app server lib scripts tests` | Exit 0 |
| Lint phần mới và content | ESLint cho app/page, RevisionPreview, editorial, content, seed, backup, app, tests | Exit 0 |
| Build | `node node_modules/next/dist/bin/next build --webpack` | Exit 0, export `/` và `/_not-found` |
| Unit/integration | `node --import tsx --test tests/domain.test.ts tests/editorial.test.ts tests/integration.test.ts` | 15 đạt, 0 lỗi |
| Trình duyệt | `node node_modules/@playwright/test/cli.js test` | 6 đạt, 0 lỗi; Edge desktop 1440×1000, mobile giả lập 390×844 |
| Audit học liệu | `node --import tsx scripts/content-check.ts --report` | 16 bài/94 word IDs/80 câu hỏi; 32 mục cần duyệt/ánh xạ |

## Các hành vi đã kiểm tra

- Xác nhận tuổi/điều khoản, chống tự cấp role, email một lần, đăng nhập/đăng xuất/reset và thu hồi session.
- Chấm điểm ở server, nộp trùng, cách ly tiến độ/lịch ôn/xuất dữ liệu hai tài khoản.
- CSRF, phiên hết hạn, SRS chống replay đổi rating.
- Editor không tự duyệt, bản nháp riêng tư, xuất bản/rollback/import giữ tiến độ.
- Backup AES-GCM: restore vào DB mới; sai mật khẩu, thiếu bảng, pointer revision hỏng và DB không trống bị từ chối. Lỗi restore rollback toàn bộ.
- Seed cập nhật bằng revision mới, không ghi đè revision cũ và không tự xuất bản.
- Desktop/mobile: đăng ký→xác minh→đăng nhập→học đạt→reload còn tiến độ; tìm/lọc/mở bài không cần tài khoản; focus trap và Escape.
- Đã xem ảnh giao diện desktop/mobile trong `test-results/dashboard-*.png`; không tràn ngang theo assertion.

## Lỗi đã tìm và sửa trong lượt này

- React Strict Mode khởi tạo hai lần gửi token xác minh dùng một lần hai lần: dùng chung promise giữa các lần effect.
- Test chọn nút đăng nhập sidebar ngoài viewport: chọn nút header; thêm cuộn sidebar cho màn hình thấp và ẩn điều hướng mobile đóng khỏi focus.
- Ví dụ fallback không chứa từ đang học: thay bằng 39 ví dụ riêng; chuẩn hóa ID có khoảng trắng khi tra ví dụ.
- Restore trước đây chấp nhận thiếu bảng: kiểm tra đủ bảng và con trỏ published trước commit.

## Giới hạn chưa được nghiệm thu

- Không phải kiểm thử trên điện thoại thật; chưa đủ browser/assistive technology, tải đồng thời, mất mạng hoặc CMS qua browser.
- Email đang mô phỏng; chưa có hạ tầng, TLS, email production hoặc URL public. Chưa kiểm tra credit/hạn AWS thực tế.
- Chưa backup ngoài AWS hoặc diễn tập chuyển nhà cung cấp.
- Học liệu chưa đủ HSK4, chưa có audio thu âm, chưa duyệt chuyên môn; audit cấu trúc không chứng minh đúng ngôn ngữ.
- Dependency audit trước đó có 5 high thuộc chuỗi ESLint/braces. Advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Chưa có bản vá ở lần kiểm tra; không tuyên bố hết lỗ hổng.
- CMS media/CSV, phần quản lý người dùng/audit và quy trình xử lý xóa tài khoản còn thiếu.

Chạy local tests cần quyền loopback của môi trường; EACCES trong lượt sandbox đầu không được tính là test ứng dụng đạt.

## Bổ sung 18/10/2026 +07:00

- FIX-01: hai ca desktop/mobile mở rộng kiểm tra logout header, /api/me 401, reload vẫn đăng xuất đã đạt ngày 17/10. Build vướng EPERM ở lượt đó; lượt có quyền 29726 và build mã CMS cuối 93856 đều exit 0 ngày 18/10.
- CMS: `node node_modules/@playwright/test/cli.js test tests/e2e/cms.spec.ts` — 2/2 đạt. Editor đổi choice→input, lưu alternatives/Pinyin ví dụ/thứ tự bài; tạo đúng revision draft mới, giữ bản cũ và humanReviewed=false.
- Test CMS tạo tài khoản/bài draft tổng hợp riêng. Không dùng tài khoản hoặc mật khẩu do người dùng nhập.
- Chưa kiểm tra toàn workflow reviewer/publish bằng browser; integration trước đó bao phủ phân quyền server.

- Lint các file CMS/test và typecheck chạy chung session 59411: exit 0, không diagnostics.

## 2026-10-18 +07:00 — UI pastel / dark lo-fi

- Typecheck: node node_modules/typescript/bin/tsc --noEmit --incremental false — exit 0.
- Lint cuối: node node_modules/eslint/bin/eslint.js app tests/e2e/theme.spec.ts tests/e2e/cms.spec.ts — exit 0 (61475).
- Build cuối: node node_modules/next/dist/bin/next build --webpack — exit 0, static export và TypeScript đạt (91120).
- E2E đầy đủ lần đầu: node node_modules/@playwright/test/cli.js test — 7 đạt, 3 lỗi. Hai lỗi fixture CMS trùng tên cũ, một lỗi locator radio do tên accessible bị tách ở dấu câu.
- Sau sửa: node node_modules/@playwright/test/cli.js test --last-failed — 3/3 đạt (8411). Tổng 10 ca khác nhau đã đạt qua các lượt; không coi lượt đầu là sạch.
- Sau chỉnh mobile minh họa và bọc chữ đáp án: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 2/2 đạt (25857).
- Theme tests xác minh chuyển sáng/tối, lưu sau reload, cỡ chữ computed cho từ vựng/Pinyin/ví dụ/hội thoại/đáp án và không tràn ngang ở 1440px/390px.
- Đã xem trực quan ảnh home sáng/tối desktop/mobile, bài học tối mobile và quiz sáng desktop. Ảnh hiện ở test-results/*home*, *lesson*, *quiz* (không commit).
- HTTP localhost:3000 và /images/study-night.webp trả 200.
- Backend không thay đổi: không chạy lại 15 unit/integration đã đạt mốc trước. Chưa kiểm tra mọi trình duyệt/thiết bị thật hoặc triển khai cloud.

## 2026-10-18 +07:00 — UI-03: chibi riêng từng tab

- Typecheck/lint: node node_modules/typescript/bin/tsc --noEmit --incremental false; node node_modules/eslint/bin/eslint.js app/page.tsx tests/e2e/theme.spec.ts — không có lỗi, exit 0 (12495).
- Build: node node_modules/next/dist/bin/next build --webpack — exit 0 (12957), bốn asset đã có trong out/images.
- Browser: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — 10/10 đạt (27956), không retry.
- Ca chibi duyệt bốn tab ở light/dark, desktop 1440px/mobile 390px: asset HTTP thành công, heading hiển thị, ảnh và chữ không đè nhau, không tràn ngang. Ca học/auth/logout/theme/cỡ chữ tiếp tục đạt.
- Đã xem screenshot roadmap-light-desktop, vocab-dark-desktop, review-light-mobile, progress-dark-mobile; screenshot đầy đủ từng tab ở test-results/chibi-*.png (không commit).
- Bốn PNG nguồn có alpha; WebP 640px giữ alpha, tổng 414.076 byte. HTTP asset trên preview trả 200.
- Backend/CMS không thay đổi; lượt này không chạy lại unit/integration hoặc CMS E2E của mốc trước. Chưa kiểm tra mọi thiết bị thật hoặc cloud.

## 2026-10-18 +07:00 — UI-04: sát bố cục collage

- Typecheck và lint ứng dụng: node node_modules/typescript/bin/tsc --noEmit --incremental false; node node_modules/eslint/bin/eslint.js app/page.tsx app/layout.tsx app/components/StudyActivity.tsx — exit 0 (25412).
- Lint cuối gồm test: node node_modules/eslint/bin/eslint.js app/page.tsx app/layout.tsx app/components/StudyActivity.tsx tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — exit 0.
- Build: node node_modules/next/dist/bin/next build --webpack — exit 0 (64823), đủ 6 reference WebP trong out/images.
- E2E: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts tests/e2e/learning.spec.ts — 10/10 đạt (29130), gồm lịch hiển thị ngày luyện tập thật, đổi tháng trước/sau, học/lưu tiến độ/logout.
- Sau chỉnh vị trí bé trai sidebar: node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 4/4 đạt (29815), desktop/mobile, sáng/tối, chữ Trung, ảnh không đè chữ, không tràn ngang.
- Đã xem home desktop/mobile, roadmap/review desktop, progress desktop/mobile, các theme. Ảnh progress giữ ở .local/qa/ui-04; ảnh khác test-results/ (không commit). HTTP preview 200.
- Chỉ so khớp trực quan với collage, không có đo lường pixel chứng minh giống hoàn toàn. UI-05 phụ thuộc asset gốc tách riêng; bộ ảnh đang dùng là tái dựng qua ImageGen với reference thật.
- Backend không đổi. Không chạy lại unit/integration hoặc CMS E2E trong lượt này; chưa kiểm tra mọi thiết bị thật/cloud.

## 2026-10-18 +07:00 — UI-06: dark không chibi

- Typecheck/lint 14722 exit 0: node node_modules/typescript/bin/tsc --noEmit --incremental false; node node_modules/eslint/bin/eslint.js tests/e2e/theme.spec.ts.
- node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 3/4 đạt (29847); desktop hero còn trỏ ảnh cũ vì selector :root[data-theme=dark] ưu tiên cao. Đã sửa selector và chạy node node_modules/@playwright/test/cli.js test --last-failed — 1/1 đạt (50383).
- Các ca xác minh dark không có mascot hiện hoặc nền mascot, header vẫn có tiêu đề/không tràn ngang; light giữ ảnh; hero dark trỏ ảnh room mới và HTTP asset thành công; theme nhớ sau reload và cỡ chữ học giữ nguyên.
- Build cuối node node_modules/next/dist/bin/next build --webpack — exit 0 (21044), có study-night-room.webp trong out/images.
- Đã xem ảnh room nguồn (không người/động vật), dark review desktop và home mobile; không còn khung hình chibi trống.
- CSS/asset/theme test thay đổi; không chạy lại backend/CMS E2E hoặc unit/integration trong lượt này.

## 2026-10-18 +07:00 — UI-07 khôi phục nữ lo-fi

- CSS chỉ đổi biến ảnh của :root[data-theme=dark] về study-night.webp; rule ẩn trẻ chibi giữ nguyên, không đổi light.
- node node_modules/@playwright/test/cli.js test tests/e2e/theme.spec.ts — 4/4 đạt (56696), desktop/mobile, đúng hero nữ lo-fi, dark không child mascot và light còn hình.
- node node_modules/next/dist/bin/next build --webpack — exit 0 (26032), gồm TypeScript; node node_modules/eslint/bin/eslint.js tests/e2e/theme.spec.ts — exit 0.
- Đã xem home tối desktop. Không chạy lại backend/CMS tests vì không thay logic; không tạo ảnh mới.

## AUDIO-06 — bằng chứng tạm thời 2026-10-18 19:41 +07:00

- Unit/integration: session 29471, 18/18 đạt, gồm 3 ca audio mới về key/manifest/cancel/lỗi media/gate unreviewed. Typecheck/lint 7110, 95557, 51053 đạt; AST 5 Python scripts đạt ở checkpoint 16:37. Không sửa kiểm tra để báo xanh.
- E2E audio/learning/theme desktop/mobile 44018: 13 đạt, 1 lỗi fixture do hai navigation cùng có nút Sổ từ vựng trên mobile. Sửa selector scope navigation chính; rerun 54092 đạt 1/1. Tổng 14 ca khác nhau đã đạt qua sửa/chạy lại, không gọi lượt đầu là sạch.
- Lượt E2E sớm 79920 trước asset/code ổn định có 1 đạt/3 timeout; không dùng làm bằng chứng đạt cuối.
- Backup/restore scripts/audio-backup.ts session 55091 exit 0: 72 entries, 151 file SHA256 khớp tại .local/voice-backups/2026-10-18T12-38-21-134Z và restore-check cùng timestamp. Chỉ backup cùng máy, không chứng minh bản ngoài AWS.
- Corpus hiện 80/145 đoạn; producer đang tiếp tục. Build cuối, audit đủ corpus, decode toàn bộ, static export và backup bộ đủ chưa có kết quả. Tất cả audio vẫn unreviewed, chưa nghiệm thu phát âm/thanh điệu hoặc độ tự nhiên bằng nghe.

- Bổ sung 19:50 +07:00: pip check runtime Python exit 0 (68677), không dependency hỏng. npm audit --omit=dev --json exit 0 (3368), 0 vulnerability trong dependency production; không đánh đồng với audit dev hoặc kiểm thử bảo mật tổng thể. Corpus đã 104/145, các nghiệm thu cuối vẫn chờ.

- AUDIO-06 19:58 +07:00: E2E audio chạy lại 32319 đạt 4/4 trong 1.6 phút, desktop/mobile, không retry; preview HTTP200. Lượt5264 trước đó chưa vào test do webServer cold start/khởi động trùng, exit1; đã chờ HTTP200 rồi chạy lại. Không có thay đổi CSS/theme. Full corpus/build vẫn chờ producer.

- AUDIO-06 20:08 +07:00: test Python tests/test_voice_io.py đạt2/2 về Windows file lock và bảo toàn dữ liệu khi hết retry; AST6 file đạt. Cache recovery thật35192 phục hồi1 mục từ WAV, không nạp TTS (generated0,recovered1,total124,pending21). Producer trước đó WinError5 ở manifest, finalizer dừng đúng; chưa nghiệm thu build/corpus. Full21 mục tiếp tục bằng log *-final.*.

## AUDIO-06 — kết quả kỹ thuật cuối 2026-10-18 20:24 +07:00

- Finalizer thực chạy tới hết, report .local/voice/finalize-report.json lúc20:22:49 +07:00:145 entries,290 files,build/exportVerified/backupRoundtrip=true; deployed/humanReviewed=false.
- Audit145/145,290 MP3,issues0; docs/reports/audio-inventory.json lưu SHA256. Signal QA decode290 file, mono24kHz, peak/finite/duration và tỷ lệ chậm/thường đạt. Không gọi đây là đánh giá đúng thanh điệu/độ tự nhiên.
- ASR8 mẫu có nhận sai hoặc trống ở các từ/câu ngắn; mọi mục unreviewed, approved0. Nghe duyệt chuyên môn vẫn thiếu, không dùng ASR làm duyệt. Chưa kiểm tra âm bằng nghe, thiết bị thật/iOS Safari hoặc mọi trình duyệt.
- Cache resume full:generated0,pending0,total145,cacheHittrue,apiCalls0. CLI đổi steps8 bị profile guard từ chối, manifest SHA256 không thay đổi; proof profile-guard-check.json. Khóa file Windows có2 regression tests đạt và phục hồi WAV thật1 mục đã đạt.
- Backup/restore đủ297 file SHA256 khớp tại .local/voice-backups/2026-10-18T13-21-20-771Z và restore-check cùng timestamp. Đây là backup cùng máy có private profile, chưa có backup ngoài máy/AWS hoặc diễn tập cloud migration.
- Build webpack và TypeScript thành công; manifest+290 MP3 trong out byte-identical với nguồn, không file tạm/reference/master/.pt/.safetensors.12 prototype chuyển vào private. Sau build, HTTP trang/API catalog/MP3 thường/chậm đều200 (20:23).
- Kiểm thử mã đã ghi:unit/integration18/18,typecheck/lint đạt; audio E2E32319 đạt4/4 không retry; Python2/2; pip check đạt, production npm audit0. Các lượt lỗi trước và cách sửa được giữ ở WORK_LOG. Không suy kết quả thành toàn dự án/HSK4/cloud đã hoàn tất.


### 2026-10-18T20:46:23+07:00 — ngăn phát bộ bị từ chối
- npm test:18/18; npm run typecheck/lint/build:đạt.
- npx playwright test tests/e2e/audio.spec.ts:6/6 desktop/mobile (1.8m), gồm chặn manifest lỗi ngay cả preview, không request MP3; các ca transport dùng fixture bỏ disabledReason rõ ràng, không xác nhận chất lượng giọng cũ.
- pip check cả runtime gốc và Kokoro:đạt; hash model B1D8410F... khớp model card chính thức.
- Log .local/audio-replacement-*.log. Không thay đổi giao diện sáng/tối hoặc dữ liệu học.


### 2026-10-19T07:16:36+07:00 — mẫu A v2 hoàn tất tích hợp kỹ thuật
-145 mục/290 MP3 active,3,666,688bytes; QAhash/decode0issues; E2E6/6,typecheck/lint/unit18/18,Python3/3,build đạt. Cache không sinh lại.
- Đã kiểm tra export:145entries,290files, SHA256 khớp. Kiểm tra ban đầu báo nhầm ảnh reference-*.webp là giọng riêng; đã sửa đúng phạm vi reference giọng/model/prompt/DB, chạy lại đạt. scripts/audio-export-check.py lưu phép kiểm tra rõ ràng, không bỏ kiểm tra private files.
- ASR lại clip sửa 打算 nhận đúng 打算. Không coi ASR là duyệt thanh điệu. ASR16v1 còn sai từ ngắn, mọi clip unreviewed.
- Backup/restore cuối295file đạt, chỉ cùng máy; archive580file không tham chiếu đã kiểm tra SHA256. Không xóa/reset DB, không deploy/cloud/API sinh giọng có phí.
- HTTProot/API200 saubuild; listeners3516/10660. Giữ preview chạy. next-env importdev được khôi phục saubuild. AUDIO-08 DONE technical, AUDIO-07 TODO duyệt; CMS/podcast/HSK4/cloud còn theoNEXT_STEPS.

## 2026-10-19T08:11:21+07:00 — Podcast local
- Typecheck/lint đạt,unit+API20/20; E2E audio+podcast10/10 (desktop/mobile),build đạt.
- Bao phủ timeline/schema,path whitelist,live chặn draft,Range206 từ dot-directory; phát/seek/đổi nhạc giữ vị trí/rate giữ pitch/đổi tập/dừng khi rời trang/lỗi mạng retry; không overflow light/dark.
- Sáu MP3 decode/peak/LUFS đạt; ASR3tập dùng để rà bỏ câu, chưa human review. reports/podcast-inventory.json.
- Backup/restore19file hash khớp cùng máy; export bài học290MP3 nguyên vẹn,no privateLeaks,0podcast draft trong out. Log .local/podcasts/.

## 2026-10-19T12:41:57+07:00 — POD-03 lo-fi và nghe hằng ngày
- Typecheck/lint đạt;unit21/21;E2E14/14 (audio+podcast,desktop/mobile),buildexit0.
- Mới: dữ liệu localStorage lỗi/clamp/resume/completed; reload giữ vị trí/tốc độ/nhạc/yêu thích; tìm7tập,tải transcript có chữ Hán/credit; lặp và auto-next từ kết thúc audio thật. Luồng cũ seek/source switch/retry/nav cancellation/live draft/Range tiếp tục đạt.
- QA14MP3:peak/finite/decode/loudness/truepeak đạt;mix -22.71..-22.56LUFS,truepeakmax -3.05dBTP. ASR7tập rà bỏ câu,không thay human approval.
- Backup/restore33filehashkhớp;3voicecũhashgiữnguyên,mixhashthayđổi;bank học145mục/290MP3exportkhớp,no privateLeaks. Log .local/podcasts/lofi/.
