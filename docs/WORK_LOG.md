# Nhật ký công việc và bằng chứng

## PROMO-01 IN_PROGRESS — 2026-10-23T00:33:38.8367558+07:00

Đã thêm PromoBanner, CSS giảm chuyển động, CTA mở đăng ký và 3 WebP tối ưu. Giữ hero/học liệu cũ. Tiếp: kiểm thử responsive/build/secret, Private GitHub CI, backup và static release Lightsail có rollback; chưa triển khai. Bằng chứng .local/promo-20261023. Không đổi backend/Caddy/SMTP/SQLite.

## 2026-10-16 — Asia/Bangkok — chuẩn bị dự án

Yêu cầu: đọc gói prompt, nêu nhận xét/ý tưởng, tạo chỉ dẫn ≤150 dòng và hồ sơ bàn giao; chờ cùng chốt trước khi xây.

### Đã thực hiện

- `Get-Location`, liệt kê root và kiểm tra `.codegraph/`: đúng D:\Hán Ngữ Lab, ban đầu trống, không có chỉ mục.
- Đọc ZIP bằng System.IO.Compression: 49.698 byte; 4 mục Markdown/TXT, không có source ứng dụng.
- Kiểm tra tên entry trước khi trích xuất; chỉ ghi file mới vào docs/references; giữ nguyên bản gốc.
- Đọc master chính, PRD và AWS blueprint; phát hiện xung đột phạm vi, nền tảng, đường dẫn và quyền tự thực hiện.
- Thử web bjtlab.me: không truy cập được; tìm kiếm không có kết quả; mở IAB bị timeout/reset. Chưa quan sát UI.
- Đọc skill Sites để tham khảo quy trình; chưa tạo Site, dùng starter, chọn hosting hoặc xuất bản.
- Kiểm tra nguồn chính thức Next.js static export, AWS Free Tier, DynamoDB modeling, Supabase RLS và HSK.
- Tạo AGENTS.md, REVIEW_PROPOSAL, DECISIONS, TASKS, PROJECT_STATUS, NEXT_STEPS và nhật ký này.

### Kết quả kiểm tra

- PowerShell kiểm tra AGENTS.md: 81 dòng, đạt giới hạn 150 dòng.
- SHA-256 từng entry ZIP đối chiếu file trích xuất: cả 4 file MATCH, giữ nguyên nội dung.
- Test-Path kiểm tra đủ 6 tài liệu quản lý dự án: đạt; lệnh xác minh exit code 0.
- Không chạy build/test ứng dụng: chưa có mã ứng dụng và chưa chốt bắt đầu.
- Không tạo tài nguyên cloud hoặc khởi tạo dự án phần mềm.

### Chưa làm / điều cần bàn giao

- Chưa được chủ dự án chốt bản phát hành, ngân sách và nền tảng.
- Chưa có nguồn duyệt học liệu hoặc đối tượng tuổi được xác nhận.
- Chưa xác minh tài khoản AWS, runtime, dependency, domain hoặc giá dịch vụ theo cấu hình.
- Tiếp tục từ NEXT_STEPS.md; không thực thi lệnh khởi công trong tài liệu gốc.

## 2026-10-16 — cập nhật sau phản hồi chủ dự án

- Chốt đầy đủ nhập môn–HSK 4, hỗ trợ sửa/import giáo trình HSK 1–6 về sau; AI không bắt buộc.
- Chốt 150 USD tổng 6 tháng gồm credit; ưu tiên không tiền trả thêm. Chủ dự án báo 200 USD credit, Free Plan còn 5 tháng 20 ngày; chưa xác minh Console.
- Yêu cầu độ tuổi ban đầu đổi thành mọi tuổi rồi được chủ dự án chốt lại 18+; trạng thái cuối 18+.
- Người duyệt có sau; nghiên cứu kiểm tra bằng code, Gemini free tier và Bedrock, giữ phân biệt AI góp ý với duyệt chuyên môn.
- Đọc nguồn chính thức Gemini pricing/rate limits/terms, AWS Free Tier/Bedrock, Cloudflare D1/Workers/Pages.
- Tạo PRODUCT_SPEC và COST_AND_PORTABILITY_PROPOSAL; cập nhật AGENTS, DECISIONS, STATUS, TASKS, NEXT_STEPS, đánh dấu đề xuất cũ đã bị thay thế.
- Chưa khởi tạo ứng dụng, chạy test app, tạo tài nguyên, dùng API trả phí hoặc lập automation.
- Xác minh PowerShell: AGENTS.md 86 dòng (≤150), đủ 7 tài liệu được kiểm tra; đối chiếu phạm vi HSK 4, tuổi 18+ và trần 150 USD trong chỉ dẫn/đặc tả/quyết định. Exit code 0.

## 2026-10-16 đến 2026-10-17 — khởi công và tiếp tục mã

- Người dùng chốt bắt đầu, sau đó yêu cầu tiếp tục; không còn chặn bởi bước xin khởi công.
- Cài dependency với quyền mạng được cấp; Node 24.15.0, npm 11.12.1. Install thành công, npm báo 5 high vulnerabilities ở lần cuối; audit cần xác minh.
- Tạo frontend Next/React, Express API, SQLite local, auth, bảo vệ CSRF, role, grade/idempotency, SRS, CMS revision, import/export JSON và backup AES-GCM.
- Soạn 16 bài local preview có nội dung ở các cấp 0–4; chưa phải giáo trình hoàn chỉnh HSK 4.
- Thêm unit/integration tests và scripts admin/backup; README và runbooks.
- Lượt typecheck đầu báo TS2775 ở assertion arrow; sửa thành function declaration. Đồng thời chỉ cho archive revision đã published để không khôi phục nhầm bài chưa xuất bản.
- Ngày 17/10 lệnh shell phản hồi chậm; theo dõi tiến trình thay vì coi thiếu output là đạt. Một lượt test qua Node REPL bị giới hạn 25 giây sau khi 4 domain tests in đạt; chưa ghi nhận toàn suite thành công.
- Đang chờ typecheck/integration/lint/audit, chưa có kết quả E2E/build hoặc triển khai. Hồ sơ hiện phản ánh trạng thái đang làm.

## 2026-10-17 — mốc trước checkpoint 14:08 +07:00 — xác minh runtime và CMS

- Unit/integration: `node --import tsx --test tests/domain.test.ts tests/integration.test.ts`: 11 đạt, 0 lỗi; chạy được sau cấp quyền loopback. Có thử mã hóa/restore thật sang SQLite mới, chưa phải backup ngoài AWS.
- `node node_modules/next/dist/bin/next build --webpack`: exit 0, static export `/` và `/_not-found`. Build trước bổ sung RevisionPreview; cần build lại mã cuối.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false`: exit 0 sau thay đổi CMS/AuthPanel.
- `node node_modules/eslint/bin/eslint.js app server lib scripts tests`: exit 0 lần đầu; đang xác minh lại phần mới.
- Content check: 16 bài, 94 word IDs, 80 câu hỏi, 0 bài humanReviewed, chưa đủ HSK4. Bỏ ví dụ từ vựng fallback không chứa từ để không dạy ngữ cảnh sai; khoảng trống cần biên tập.
- Thêm RevisionPreview cho reviewer xem đủ nội dung/đáp án; focus trap, Escape và trả focus cho AuthPanel.
- E2E desktop lộ trình/tìm/mở bài đạt. Ca đăng nhập timeout ở nút sidebar; đổi selector sang header cho cả mobile/desktop, chờ xác minh lại. Không coi cả suite đạt.
- Tắt Next agentRules để giữ chỉ dẫn cố định do chủ dự án quản lý, theo docs bundled của phiên bản đang cài.
- Audit 5 high thuộc chuỗi công cụ lint/braces, advisory GHSA-vfj7-8cjw-p6xm chưa có bản vá; không hạ Next/eslint-config tùy tiện.

## 2026-10-17 14:08 +07:00 — mốc local đã kiểm chứng

- Sửa Strict Mode xác minh email bị gửi hai lần; token server vẫn dùng một lần. 6/6 Playwright trên Edge desktop/mobile đạt, gồm đăng ký/học/reload, lộ trình và keyboard focus.
- Bổ sung 39 ví dụ tự soạn; chuẩn hóa ID trước tra ví dụ. `content-check --report`: 16 bài, 94 word IDs, 80 câu hỏi; 0 thiếu ví dụ, 16 chờ mapping, 16 chờ human review. Không đủ HSK4.
- Seed append revision sample khi nguồn đổi, giữ bản cũ/published pointer; thêm test chống tạo lặp.
- Backup từ chối thiếu bảng và published pointer không hợp lệ; test rollback không để dữ liệu dở.
- Toàn bộ 15 unit/integration/editorial tests đạt; typecheck, lint và build cuối exit 0. TEST_REPORT.md ghi lệnh và giới hạn.
- Xem screenshot desktop/mobile, không tràn ngang; chưa kiểm thử thiết bị thật/CMS browser/load test.
- Preview cũ dừng, khởi động mới session 92988 với Next `-H 127.0.0.1`, API loopback. Sau restart HTTP 200.
- Không tạo cloud, không gửi email thật, không thêm phí. Các thiếu sót còn lại đã ghi NEXT_STEPS/TASKS.

- Commit mã đã xác minh: b1077ce; chưa push. HTTP 200 và /api/health ok; Get-NetTCPConnection xác nhận cả 3000/3001 chỉ bind 127.0.0.1.

## 2026-10-17 14:39 +07:00 — nút đăng xuất dễ tìm

- Phản hồi chủ dự án: không thấy đăng xuất. Trước đây chỉ có icon cuối sidebar, khó tìm trên mobile.
- Thay avatar header bằng nút có chữ “Đăng xuất”, dùng API logout hiện có; không thay role hoặc dữ liệu học.
- Playwright ca hành trình học mở rộng: 2/2 desktop/mobile đạt; logout trả UI về Đăng nhập, API /me trả 401, reload vẫn đăng xuất.
- app/page.tsx và tests/e2e/learning.spec.ts; typecheck/lint/build đang xác minh ở session 84574.

## 2026-10-18 +07:00 — tiếp tục CMS và quy tắc model

- Lượt 17/10 FIX-01: E2E logout đạt 2/2; build compile/typecheck qua nhưng export lỗi EPERM tạo thư mục .next. Lần xin quyền tiếp theo bị automatic approval review từ chối chạy do hết hạn mức review, không phải kết luận lệnh nguy hiểm. Checkpoint cũ ghi đang chạy đã lỗi thời.
- 18/10 chủ dự án yêu cầu tiếp tục và đưa bảng model. Đã lưu AGENTS/D-018; chưa thay model vì không có công cụ đổi phiên đang chạy.
- Lần build có quyền mới đã được cho chạy, session 29726; chưa ghi đạt trước khi lấy exit code.
- Thêm ExerciseEditor chọn choice/input/order, alternatives, xóa câu hỏi; CMS có Pinyin ví dụ/thứ tự bài và ID mới không phụ thuộc độ dài mảng.
- Test mới cms.spec.ts tạo tài khoản editor và bài nháp tổng hợp riêng, kiểm tra save thành revision mới trên desktop/mobile. Session 99504; lint/typecheck 59411. Không đụng mật khẩu tài khoản người dùng.

- Chốt 18/10: CMS E2E 2/2, lint/typecheck 59411 exit 0, build cuối 93856 exit 0. AGENTS 94 dòng. Preview 19658 Ready loopback; không tạo cloud, không phí API.

## 2026-10-18 11:08 +07:00 — UI pastel / lo-fi
- Đã thêm themes.css, ThemeToggle, ChineseText và hai WebP; không đổi dữ liệu học.
- Typecheck và lint phần ứng dụng đạt. E2E đang chạy: sửa fixture CMS trùng tên bằng UUID và aria-label đáp án sau khi tách chữ Hán.
- Đã xem ảnh desktop sáng/tối; còn kiểm tra mobile, chạy lại ca lỗi và build.


- 2026-10-18 11:12 +07:00: 3 ca lỗi ban đầu chạy lại đều đạt (8411); theme 2/2 đạt (90201); build 86799 đạt. Xem ảnh mobile phát hiện ảnh nằm dưới caption và dấu câu bị giãn do flex; đã đưa ảnh xuống dưới, bọc đáp án thành một khối. Đang xác minh cuối: theme 25857, build 91120.

- 2026-10-18 11:13 +07:00: UI-02 hoàn tất. Theme 25857 đạt 2/2, lint 61475 exit 0, build 91120 exit 0 (gồm TypeScript). Preview và asset HTTP 200. Đã xem ảnh mobile cuối; không còn test/build cần chờ. Không tạo cloud/không đổi dữ liệu học.
- Commit UI đã xác minh: 37ac5d4 (local, chưa push).

## 2026-10-18 14:26 +07:00 — UI-03 nhân vật riêng cho bốn tab
- Chủ dự án yêu cầu chibi trẻ mũm mĩm theo ảnh mới. Đang tạo bốn ảnh trong suốt bằng ImageGen, không dùng API của sản phẩm.
- Tiếp theo: header riêng cho roadmap/review/vocab/progress, kiểm tra khách chưa đăng nhập và responsive sáng/tối. Không đổi auth/học liệu/tuổi sử dụng.

- 2026-10-18 14:30 +07:00: đã lưu bốn WebP alpha 640px (~404 KiB), PageHeading có art riêng, review/progress header hiện cả khi chưa đăng nhập. Đang chạy typecheck/lint 12495, build 12957, 10 E2E học/theme/chibi 27956. Chưa ghi đạt trước khi lấy exit code.

- 2026-10-18 14:32 +07:00: UI-03 hoàn tất. Typecheck/lint 12495 exit 0; build 12957 exit 0, có đủ 4 asset trong out/images; E2E 27956 đạt 10/10. Đã xem roadmap sáng desktop, vocab tối desktop, review sáng mobile, progress tối mobile; HTTP asset 200. Không còn lệnh kiểm tra đang chờ.

## 2026-10-18 14:40 +07:00 — UI-04 bám bố cục ảnh gốc
- Chủ dự án yêu cầu cả tỉ lệ và hình giống mẫu. Ảnh D: gốc không còn, bản collage trong Temp còn 821x461. Đã nêu giới hạn không thể cam kết trùng từng nét khi thiếu asset gốc.
- Đang dựng asset qua ImageGen có reference thật và chỉnh home/header/cards/review/progress gần mẫu; prompt REFERENCE_UI_PROMPTS.json. Giữ chữ Trung dễ đọc, auth/dữ liệu nguyên vẹn.


- 2026-10-18 14:45 +07:00: typecheck/lint 25412 đạt; E2E 29130 đạt 10/10 gồm lịch, đổi tháng, đăng xuất. Sau xem ảnh đã đưa bé trai sang sidebar ở desktop lớn để sát mẫu; đang chốt theme/build mới. Ảnh gốc tái dựng có reference, chưa thể nhận trùng pixel.

- 2026-10-18 14:46 +07:00: chốt UI-04. Build 64823 exit 0, lint cuối exit 0; theme 29815 4/4 sau chỉnh sidebar; E2E trước 29130 10/10 có lịch, đổi tháng, logout. HTTP preview 200, out/images đủ 6 reference assets. Đã xem home/roadmap/review/progress desktop và mobile. UI-05 chờ bộ asset gốc nếu cần trùng ảnh 100%; không coi tái dựng là ảnh gốc. Không còn lệnh test/build đang chạy.

## 2026-10-18 14:50 +07:00 — UI-06 dark bỏ chibi
- Yêu cầu trực tiếp: bỏ hình chibi trong chế độ tối. Đã ẩn mascot/sidebar companion, thu gọn cột trống; chế độ sáng giữ hình.
- Đang tạo ảnh góc học đêm không nhân vật thay hero cũ có người/mèo. Cần chốt asset, theme E2E và build.
- 2026-10-18 14:52 +07:00: ảnh góc học không nhân vật đã xem và lưu study-night-room.webp; typecheck/lint 14722 exit 0. Theme 29847 và build 9457 đang chạy. CSS dark ẩn cả nền ảnh mascot và cột trống.
- 2026-10-18 14:54 +07:00: UI-06 hoàn tất. Lượt theme 29847 đạt 3/4, lỗi desktop hero do :root[data-theme=dark] cũ ưu tiên cao hơn rule mới. Đã tăng selector đúng nguồn; ca lỗi chạy lại 50383 đạt 1/1. Build cuối 21044 exit 0, out/images có room asset. Đã xem dark review desktop/home mobile; light qua test vẫn có hình. Không còn lệnh cần chờ.

## 2026-10-18 14:58 +07:00 — UI-07 khôi phục nữ lo-fi
- Đã hiểu lại yêu cầu: dark chỉ bỏ chibi trẻ em, giữ ảnh nữ lo-fi gốc; light giữ nguyên.
- Đổi đúng biến --hero-art của :root[data-theme=dark] về study-night.webp; giữ các rule ẩn child mascot. Đang xác minh theme/build.
- 2026-10-18 15:00 +07:00: UI-07 hoàn tất. Theme 56696 đạt 4/4 desktop/mobile, hero nữ lo-fi đúng nguồn và dark không trẻ chibi; light vẫn có hình. Build 26032 exit 0 gồm TypeScript, lint test exit 0. Đã xem screenshot home tối desktop. Không tạo/chỉnh ảnh, không còn lệnh chờ.

## 2026-10-18 +07:00 — khảo sát VoiceStudio/podcast
- Đã xác nhận file MP4 người dùng gửi tồn tại (985487 bytes); chưa nghe, tách nhạc, chỉnh giọng hoặc nhân bản.
- VoiceStudio có Vocal Isolation, voice cloning, batch và local API theo README/feature catalog; chưa cài/chạy thử, không tải model.
- Máy hiện báo Intel UHD Graphics 620; PyTorch Windows của VoiceStudio chạy CPU với Intel theo performance guide. Chưa benchmark hay kiểm tra đủ RAM/disk.
- Audio hiện dùng speechSynthesis trong lib/client.ts. Đề xuất sinh audio offline, duyệt rồi phát file tĩnh; không chạy AI theo mỗi lượt nghe.
- Tách nhạc sạch hoàn toàn/chất lượng giọng trẻ hơn chưa xác minh. Cần thử mẫu ngắn, giữ thanh điệu tiếng Trung, transcript đúng và duyệt phát âm.
- Trước nhân bản/phát hành cần làm rõ quyền dùng bản ghi và sự đồng ý của chủ giọng; chưa xác định chủ giọng từ tên file.
- Đề xuất podcast 3–5 phút, chủ đề công sở, HSK, transcript Hán/Pinyin/Việt, lặp câu, shadowing, quiz, lưu từ vào SRS. Chưa triển khai hoặc thay âm thanh/UI.
- Nguồn: https://github.com/debpalash/VoiceStudio ; docs/feature-catalog.md ; docs/performance.md. App AGPL-3.0, quyền model/voice/output riêng; cần kiểm tra engine đã chọn.
- Tiếp theo: làm rõ quyền giọng, thử một mẫu và đánh giá CPU/chất lượng trước quyết định thay toàn bộ. Không phát sinh cloud/API phí.

## 2026-10-18 15:17 +07:00 — AUDIO-02 đang xử lý mẫu
- Chủ dự án xác nhận giọng được cấp full quyền; đã nhận yêu cầu xuất mẫu nghe.
- File nguồn thực tế audio MP3 stereo 44.1kHz trong đuôi .mp4, 24.566712 giây; FFmpeg giải mã source.wav 24.5 giây thành công.
- Workspace riêng .local/audio-preview (gitignore); bản gốc không bị ghi đè. 01-giong-goc.mp3 đã xuất để so sánh, loudnorm -18 LUFS, TP -1.5.
- VoiceStudio backend/services/dub_pipeline.py xác minh dùng demucs.separate --two-stems vocals -n htdemucs. Đang cài riêng cùng engine, chưa cài toàn bộ VoiceStudio/clone/TTS.
- Venv Python 3.12.14 tại .local/audio-preview/venv; torch/torchaudio 2.8.0 CPU đang cài (session 36614). Tiếp theo: cài demucs/soundfile, tách vocals CPU, FFmpeg chỉnh nhẹ 0.5 semitone + EQ, xuất MP3 và đo duration/peak. Chưa nghe/đánh giá chủ quan.
- Nguồn công cụ: https://github.com/debpalash/VoiceStudio/blob/main/backend/services/dub_pipeline.py . Không dùng dịch vụ cloud/API tính phí.

## 2026-10-18 15:25 +07:00 — AUDIO-03 DONE, mẫu nghe đã xuất
- Lệnh đạt: .local/audio-preview/venv/Scripts/python.exe -X utf8 scripts/audio_preview.py .local/audio-preview/source.wav .local/audio-preview ; session 82231 exit 0. Pipeline 42.95 giây gồm inference và encode, không gồm cài/import ban đầu.
- Engine Demucs 4.0.1/htdemucs CPU 4 threads, shifts=1; cùng engine VoiceStudio đang gọi, không phải cài toàn bộ ứng dụng VoiceStudio. Torch/torchaudio 2.8.0+cpu; soundfile 0.14.0. pip check đạt. Model SHA256 8726e21a993978c7ba086d3872e7608d7d5bfca646ca4aca459ffda844faa8b4, khớp prefix upstream.
- Mẫu riêng tư trong .local/audio-preview (đã gitignore): 01-giong-goc.mp3, 02-giong-tach-nhac.mp3, 03-giong-thanh-nhe.mp3; source.wav/vocals.wav và model/venv được giữ để tiếp tục.
- Bản 03 highpass 65Hz, EQ 300Hz -1dB/3kHz +1.2dB, rubberband pitch +0.5 semitone/formant preserved; loudnorm mục tiêu -18LUFS trên cả ba bản.
- Kiểm tra ffprobe: cả ba stereo 44100Hz/24.5 giây; FFmpeg decode/loudnorm đạt exit 0. LUFS lần lượt -18.07/-18.15/-18.17; true peak -8.88/-10.26/-8.53 dBTP. Không clipping theo phép đo này. Python syntax compile đạt; không đổi mã web nên không chạy build/E2E.
- Trong cài Demucs có lỗi ghi log cp1252 với đường dẫn Unicode nhưng install exit 0; đã dùng -X utf8 cho lệnh sau. Không có dependency lỗi qua pip check.
- Đã chạy tách nguồn thực sự, chưa chứng minh nhạc sạch 100% hoặc giọng tự nhiên bằng nghe. Không có công cụ nghe/duyệt chuyên môn ở lượt này; để chủ dự án so sánh mẫu. Đây là xử lý bản thu, chưa clone hoặc tạo lời đọc mới; chưa thay audio website/chưa publish.
- Không còn tiến trình cài/tách cần chờ. Bước tiếp: nhận đánh giá âm sắc, thử TTS clone/podcast và kiểm tra thanh điệu trước thay âm thanh diện rộng. Quyền giọng đã được chủ dự án xác nhận, không hỏi lại.

## 2026-10-18 15:30 +07:00 — AUDIO-04 DONE: giọng trẻ mức nhẹ/vừa
- Chủ dự án muốn trẻ hơn, sau đó giới hạn hai mức nhẹ và vừa. Đã xuất từ vocals.wav hiện có, không tách lại hoặc chạy clone.
- Nhẹ: .local/audio-preview/06-giong-tre-nhe.mp3 ; rubberband tempo=1/pitch=1.0442737824 (+0.75 semitone), formant=shifted/pitchq=quality; highpass 70Hz, EQ 280Hz -1dB/3200Hz +1dB.
- Vừa: .local/audio-preview/04-giong-tre-vua.mp3 ; rubberband tempo=1/pitch=1.0594630944 (+1 semitone), formant=shifted/pitchq=quality; highpass 70Hz, EQ 280Hz -1.2dB/3200Hz +1.3dB.
- Cả hai loudnorm I=-18/TP=-1.5/LRA=7; MP3 lame q2 stereo 44100Hz, ffprobe 24.5s; FFmpeg encode/decode exit 0. LUFS nhẹ/vừa -18.20/-18.18; true peak -7.87/-8.13 dBTP. Chưa được nghe/duyệt chủ quan; tăng cao độ/âm sắc chỉ tạo cảm giác trẻ, không chứng minh độ tuổi.
- Mức +1.5 (05-giong-tre-hon.mp3) có xuất trước khi chủ dự án thu hẹp yêu cầu, không chọn giới thiệu hoặc đưa vào web. Bản nguồn và mẫu cũ được giữ.
- Không sửa web/backend, không chạy build/E2E; không còn lệnh cần chờ. Tiếp: chủ dự án nghe hai mức, chọn âm sắc trước nhân bản/podcast.

## 2026-10-18 +07:00 — AUDIO-05: đối chiếu file vocals mới
- File D:/audio [vocals].mp3: 667715 bytes, MP3 stereo 44100Hz, 24.552948s, khoảng 217.6kbps; loudness -13.80LUFS, true peak -4.87dBTP. ffprobe và decode/loudnorm exit 0.
- Mẫu 02-giong-tach-nhac.mp3: stereo 44100Hz/24.5s, khoảng 125.8kbps; phép đo trước -18.15LUFS/-10.26dBTP. File mới to hơn khoảng 4.35LU không chứng minh phát âm chính xác/ít nhiễu hơn.
- Chưa nghe được/duyệt ngữ âm hai bản nên không kết luận file nào sạch hơn hoặc không sai thanh điệu. Đề xuất provisional: tham chiếu giọng không pitch/formant shift, dùng vocals.wav hiện có để tránh thêm lần mã hóa MP3; thử clone cùng văn bản/thiết lập rồi duyệt trước chọn master. Chưa chạy clone.
- Không dùng các bản trẻ nhẹ/vừa làm chuẩn phát âm lúc này. Chủ dự án chưa chốt nguồn master. File mới không bị sửa; không sao chép vào public hoặc Git.
- Tài liệu đã đối chiếu: https://github.com/debpalash/VoiceStudio/blob/main/docs/audio-quality.md ; kiểm tra tín hiệu không chấm độ tự nhiên, thử ngắn không xếp hạng chất lượng đa ngôn ngữ.

## 2026-10-18 +07:00 — AUDIO-06 bắt đầu
- Chủ dự án chốt voice sau tách nhạc. Reuse .local/audio-preview/vocals.wav, không dùng bản pitch shift hoặc file mới.
- Clone VoiceStudio sparse nguồn omnivoice tại .local/VoiceStudio SHA d819ff54d93017bf4a5b34b605833162163c9e3c; không bundle vào frontend. Session cài deps 48537; model k2-fsa/OmniVoice revision c5fdb5ccb189668d56333f77ba2629f4cd7535f4 đang tải riêng trong .local/audio-preview/tts-model.
- Chọn inference CPU, không gọi API tính phí. Model upstream CC-BY-NC, code fork/app AGPL; tokenizer có license riêng. Dự án hiện miễn phí, cần rà lại trước mô hình thu phí. Chưa chứng minh clone hoặc đọc tiếng Trung đúng.
- File/code sẽ sửa: lib/audio.ts, lib/client.ts, LessonPlayer/page, scripts xuất target/generation/audit, public/audio và tests; checkpoint trước sinh dài.


### AUDIO-06 checkpoint mẫu clone
- Xuất 145 targets public-only (16 bài) qua scripts/audio-targets.ts; typecheck 9459 đạt. Test audio 3 ca đạt (38755 còn lint cần nhận kết quả).
- ASR nhỏ local nhận diện zh, transcript có lỗi/đoạn bị cắt ở mốc 12s; đã chọn lại câu/clause hoàn chỉnh 0–8.97s từ cùng giọng. .local/voice/reference.json + WAV, chưa humanReviewed.
- Lượt render 40948 dừng có kiểm soát PID 7652 vì prompt tạo ngoài inference_mode gây bộ nhớ cao; chưa xuất audio. Đã bọc torch.inference_mode cho prompt, fingerprint model/ref/settings cho cache, faulthandler 180s chẩn đoán. Rerun 2 clip đang chạy; kiểm tra session mới trước chạy lại.
- ASR PyAV 19 không tương thích metadata_errors; sửa decode qua FFmpeg -> float32 array, không sửa deps hoặc hạ test. Một số file ASR tùy chọn 404; vocabulary.txt đã lấy đúng, ASR thực chạy thành công.
- Không đưa reference/private voice profile lên public/Git. Native engine từ clone VoiceStudio pinned; chưa cài desktop/backend đầy đủ. Không giả định đã clone thành công.


### AUDIO-06 checkpoint CPU 16:16 +07:00
- FP32 33336 đã sinh thật 2 clip, batch 161.8s. INT8 81894 đã sinh thật 4 clip, batch 256.5s; giữ file nhưng dừng PID 1884 tại checkpoint do áp lực RAM (~94.5%).
- Lượt mới 12229 dùng reference trọn câu 4.11s cùng master, INT8 và clone những embedding/norms còn tham chiếu safetensors mmap để giải phóng float pages cũ. Fingerprint tách bộ này với các thử trước. Các file mẫu cũ không xóa.
- Lib Audio + buttons đã thay TTS trình duyệt; About/vocab nhãn audio thử nghiệm. Chặn unreviewed ngoài lesson preview. Test unit audio 3/3 và lint lượt 38755 đạt. Typecheck lượt 41489 phát hiện cast instrumentation E2E, đã sửa; 7110 đang chạy typecheck/lint cuối.
- E2E 79920 chạy sớm trong khi sửa UI/tạo asset: 1 đạt/3 timeout (desktop readyState khi hot reload; mobile thiếu dialogue file; một navigation load timeout). Chưa coi đạt; cần chạy lại khi code/manifest ổn định và asset đủ, không hạ assertions.
- Model source/weights đã ở .local; không API trả phí. Thêm VOICE_RUNBOOK, audio-audit, voice-qa, wrappers. Chưa đủ 145 clip/duyệt phát âm/backup media; AUDIO-06 còn IN_PROGRESS.


### AUDIO-06 16:19 +07:00
- Chốt ref4.11s trọn câu đúng từmaster, profile tiếng Trung ASR chưa humanReviewed. Phiên đang chạy 12229 PID16772, all145 batch4/int8/16steps. Sau giải phóng mmap tham chiếu: working set khoảng2670MiB/available3508MiB, giảm áp lựcRAM so lượt trước. Không sửa/mua dịch vụ hệ thống.
- Unit/integration 29471 đạt18/18; typecheck/lint7110 exit0. Sau đó bổ sung E2E coverageSổtừvựng (testfile cầnlinttypecheckcuối). TestE2E sẽ chạy lại sauassetđủ, khôngHMRgiữachừng.
- Cònrender145/auditdecode+ASRtriage/mediarestoreroundtrip/build/E2E/hồsơcuối. Chưa hoàn thànhAUDIO06.


### AUDIO-06 16:25 +07:00
- Phiên 12229 đã ghi checkpoint8/145 (batch4 FP32/INT8 phù hợp). Sau đó dừng tại8 để chuyển batch8 có nhóm độ dài tương tự; phiên đang chạy40746/PID6328, tiếp tục137 mục cùngfingerprint/ref4.11. Không xóa/ghi đè8 file đã hoàn tất.
- QA84778: decode8files/4entries không phát hiện lỗi tín hiệu; ASR từng từ rất ngắn có hallucination/empty (好 nhận nhầm chuỗi dài, 你/谢谢 trống), không được coi là pass phát âm. Ghép8clip kiểmtra65962 nhận '你好再见不客气你好谢谢你', thiếu/lược các từ lặp. Giữ báo cáo private asr-first8.json, signal-qa.json; humanReviewed=false.
- Typecheck/lint95557 exit0. E2E44018 đang chạy14ca trên code ổn định; desktop audio real+failure đã đạt, còn nhận kết quả learning/theme/mobile. Không sửa app trong lúc lượt này chạy.


### AUDIO-06 checkpoint 16:38 +07:00
- E2E44018:13đạt/1lỗifixturestrictselectorSổtừvựngtrùng2navmobile. Sửa scopenavigationchính; rerun54092 đạt1/1 (audio normal/slow, cancel, vocabulary, khôngbrowserTTS). Các ca learning/theme desktopmobile khácđãđạt. Typecheck/lint51053đạt; AST5scriptPythonđạt.
- voice-finalize.py theo dõiPID6328 (session mới ởtool), chờrenderthoát0rồichạyaudit145/decode/ASR8mẫu(khôngduyệt)/cache-no-op/media backuprestore/build/exportidentity/privateleakcheck. Vừa khởiđộnglạichỉobserverđểápdụngphiênbảnmớinhất; producerkhôngbịdừng.
- Renderer đãxuất32clip ởlầnđọc16:35. Thêmfast-pathkhôngnạpmodelnếucacheđủvàchặnregenapprovedthiếufileđểphụchồitừbackup. Phiênđangchạycompiledbảntrướcfast-path, khôngđổikếtquảrender. ScriptSourceđãlưuđểtiếptục.
- ĐãkhảosátMOSS-TTS-NanotrongVoiceStudio(thíchhợpCPU), chưacàivàkhôngđổi engine trongđợtnày; ưu tiênmẫu/giọngOmniđangtest. KhôngkếtluậnASRđúng100%hoặcđãduyệtthanhđiệu.

## AUDIO-06 checkpoint 2026-10-18 16:49 +07:00
- Producer hiện tại: session 40746, PID 6328, OmniVoice INT8/ref 4.11 giây; 64/145 clip đã tạo. Không giả định các clip đã được duyệt phát âm.
- Observer/finalizer duy nhất hiện tại: session 72560, có finalize.lock; chờ producer rồi audit/cache/decode/backup/build. Hai observer cũ 79209/85687 đã dừng khi cập nhật script. Một helper chọn process bằng substring tự kết thúc; đã sửa chọn chính xác argument + cwd và thêm lock. Không dừng producer từ thao tác observer.
- Kiểm tra F0 bốn thanh (79935) chỉ là triage, không phải chấm thanh điệu: đường F0 chưa đủ rõ để khẳng định đúng; dữ liệu private f0-four-tones.json. Giữ toàn bộ audio unreviewed.
- Đang thử riêng engine MOSS-TTS-Nano ONNX được VoiceStudio hỗ trợ để so sánh CPU/độ rõ; chưa thay production bank. Source pin 8b7bcc9341b3b4ef3a3a58ba1338a7d85ff133eb trùng pin được VoiceStudio hướng dẫn; source/model cards Apache-2.0. Source .local/MOSS-TTS-Nano, weights .local/moss-models; revision trong mỗi thư mục model.
- Prototype 70212 lỗi SentencePiece đọc đường dẫn Unicode Windows dù file có thật; 20677 đang thử adapter nạp model_proto bytes, không sửa upstream source, không dịch chuyển repo. Đây vẫn là cùng reference đã được chủ dự án chọn. Không gửi giọng lên dịch vụ ngoài.
- E2E tổng 14 ca đã đạt qua sửa fixture/chạy lại; unit/integration18/18; lint/typecheck đạt. Build và nghiệm thu corpus/backup vẫn đang chờ. Không triển khai cloud.


## AUDIO-06 checkpoint 2026-10-18 19:36 +07:00 — tiếp tục sau gián đoạn
- Renderer cũ PID6328 và observer cũ không còn chạy; manifest còn 72/145 đoạn. Không suy phiên tool mất handle là hoàn thành. Render report 2 clip thuộc lần thử cũ, không phải nghiệm thu corpus.
- Đã tiếp tục cùng reference/fingerprint, bỏ qua 72 clip có đủ file: launcher PID10224, Python con PID13924. Finalizer launcher PID13136/Python con PID14852 chờ producer; stdout/stderr riêng ở .local/voice/*-resume.log và *-resume.err. Chưa có build/backup/audit cuối đạt.
- Prototype MOSS 20677 đã tạo câu thử nhưng ASR chỉ nhận phần đầu; chưa xác nhận chất lượng và không thay engine sản xuất. Bốn mẫu thanh riêng đã tạo để khảo sát, không được duyệt. Không cần chạy thêm engine cạnh tranh CPU trong lượt render chính.
- Đã rà soát thay browser TTS ở từ vựng, hội thoại và sổ từ vựng; không sửa CSS/theme. Key giữ Pinyin để phân biệt reading, nhưng model nhận chữ Hán, chưa có điều khiển phát âm Pinyin; chữ đa âm cần nghe duyệt.
- NEXT_STEPS đã bỏ các hướng dẫn lỗi thời về hỏi quyền/chọn giọng trẻ/cài model chưa có. Quyết định cuối là nguồn chỉ tách nhạc, quyền đã xác nhận, mọi output vẫn unreviewed.

### AUDIO-06 2026-10-18 19:39 +07:00 — snapshot bảo vệ tiến độ
- Chạy thực scripts/audio-backup.ts qua tsx: exit 0, 72 entries, 151 file backup/restore khớp SHA256. Snapshot .local/voice-backups/2026-10-18T12-38-21-134Z; restore .local/voice-restore-check/2026-10-18T12-38-21-134Z. Có profile/master riêng; không đưa snapshot lên public/Git. Đây là backup cùng máy, chưa phải ngoài máy/AWS.
- Renderer PID13924 vẫn xử lý batch 73 mục còn lại. Snapshot không chứng minh đủ 145 mục. Finalizer sẽ tạo bản đủ sau audit nếu thành công.

### AUDIO-06 2026-10-18 19:50 +07:00
- Renderer đã ghi 104/145 đoạn, 208 file thường/chậm được tham chiếu; chưa đủ corpus cuối. Không có batch lỗi được ghi nhận. Giữ cấu hình CPU INT8/16 bước/reference đã chốt.
- Kiểm tra môi trường sau cài đủ engine/ASR: .local/audio-preview/venv/Scripts/python.exe -X utf8 -m pip check, session68677 exit0: No broken requirements found.
- npm.cmd audit --omit=dev --json, session3368 exit0: vulnerabilities=0 (94 production dependencies trong báo cáo). Đây không phải kết luận mọi dependency dev hoặc toàn hệ thống đã an toàn; cảnh báo dev mốc cũ chưa được kiểm tra lại.

### AUDIO-06 2026-10-18 19:58 +07:00 — khôi phục preview và xác minh lại audio
- Khởi động preview loopback sau khi xác minh không listener 3000/3001: API launcher PID3296 (listener10460), web launcher2988 (listener1472). Log riêng .local/dev-*-resume.log/.err; không dump log xác thực.
- E2E5264 chưa chạy ca nào: Playwright thử tự khởi động webServer khi máy chủ đang cold start, exit1. Không coi là lỗi assertion ứng dụng hoặc kết quả đạt. Chờ health HTTP200 (60849) rồi mới chạy lại.
- E2E32319: node node_modules/@playwright/test/cli.js test tests/e2e/audio.spec.ts, 4/4 đạt trong1.6 phút, không retry. Desktop/mobile đều phát file normal/slow thật, dừng khi đổi tab, sổ từ vựng cùng giọng, thiếu file/lỗi mạng và retry không fallback browser TTS.
- Producer vẫn chạy, không dừng để kiểm thử. Chưa build/audit toàn corpus.

## AUDIO-06 2026-10-18 20:08 +07:00 — sửa khóa file Windows
- Producer13924 dừng ở123 vì PermissionError WinError5 khi replace manifest.tmp.json -> manifest.json; finalizer dừng đúng với exit1, không báo nghiệm thu. File WAV và hai MP3 của mục124 đã ghi trước lỗi; không mất123 mục đã commit manifest. Nguyên nhân quan sát là handle/khóa Windows tại thao tác replace, chưa xác định process giữ handle.
- Thêm scripts/voice_io.py: atomic replace thử lại tối đa12 lần, delay có giới hạn, không xóa destination cũ. Tests/test_voice_io.py có2 test khóa tạm thời/khóa lâu, cả2 đạt; xác minh giữ cả source/destination khi hết retry. AST6 file Python mới/liên quan đạt.
- Renderer lưu toàn bộ WAV của batch trước encode/publish; trên resume kiểm tra WAV cùng fingerprint rồi phục hồi MP3/manifest. Lệnh --recover-only không nạp model TTS, đã chạy35192 exit0: recoveredFromWav=1,totalEntries=124,pending=21,generated=0,apiCalls=0.
- Lượt thử --limit1 trước đó chọn theo thứ tự target, không trúng WAV cần khôi phục và bắt đầu nạp model; đã dừng đúng Python16112/launcher5876 trước sinh audio. Không có producer khác chạy cùng lúc. Bổ sung --recover-only để kiểm tra đúng phục hồi thay vì dùng limit.
- Đã tiếp tục full21 mục bằng launcher588, finalizer13792. Log mới .local/voice/render-final.log/.err và finalize-final.log/.err. Finalizer bổ sung đối chiếu manifest xuất tĩnh, chặn file tạm và kiểm tra không leak .pt/.safetensors/reference/master.
- Không đổi model/reference/fingerprint hoặc frontend. Cấu hình vẫn CPU INT8/16steps; các âm vẫn unreviewed. Chưa có build/backup đủ corpus.

## AUDIO-06 kỹ thuật hoàn tất — 2026-10-18 20:24 +07:00
- Producer6488/launcher588 tạo21 mục cuối, totalEntries145, failed[],apiCalls0; không còn producer/finalizer cần chờ. Report .local/voice/render-report.json; log render-final.log/.err.
- Finalizer13632/launcher13792 hoàn tất20:22:49 +07:00, .local/voice/finalize-report.json: entries145/files290, backupRoundtrip/build/exportVerified=true,deployed/humanReviewed=false. Static export đủ290 file byte-identical và manifest giống source; không profile/reference/model/prompt riêng, không file tạm. Đã chuyển12 MP3 prototype không dùng vào .local/voice/previous-renders/.
- Audit/inventory đủ145/145,290 files,issues[]. Signal QA decode toàn bộ, mono24kHz, finite/peak/duration/tỷ lệ slow đạt. ASR8 chỉ triage: có nhận nhầm/trống ở nhiều mẫu ngắn (ví dụ 姐姐 -> 这个已经, 准备 -> 准吧!), câu dài nhận gần văn bản; không suy ra tỷ lệ phát âm đúng. Giữ toàn bộ unreviewed; AUDIO-02/AUDIO-07 chưa hoàn tất duyệt nghe.
- Backup đủ .local/voice-backups/2026-10-18T13-21-20-771Z, restore .local/voice-restore-check cùng timestamp:297 file SHA256 khớp. Cùng máy, có private profile/master, không DB/model/runtime/WAV cache; chưa ngoài AWS hoặc cloud migration.
- Cache full no-op: generated0,recovered0,total145,pending0,cacheHittrue,apiCalls0. Chốt chống đổi profile: lệnh thử steps8 với --recover-only bị từ chối trước nạp model; manifest SHA256 trước/sau bằng nhau, proof .local/voice/profile-guard-check.json. Không chạy thử profile khác vào thư viện đang phát.
- Build Next webpack thành công gồm TypeScript. Chỉ khôi phục next-env.d.ts tự sinh về hai import dev/types ban đầu, không reset source/user data. Health sau build20:23: trang/API catalog/normal MP3/slow MP3 HTTP200. Audio E2E4/4, unit/integration18/18, Python regression2/2 đã có bằng chứng ở trên; không chạy lặp lại các test không đổi.
- Mốc kỹ thuật AUDIO-06 DONE; chất lượng phát âm vẫn chờ chuyên môn, podcast/HSK4/cloud chưa hoàn thành. Cập nhật hồ sơ nhất quán, chỉ commit audio được tạo+manifest/inventory; master/model/prompt vẫn private/ignored.

- Kiểm tra chốt 20:25 +07:00: inventory145 entries/expected145,approved0,290 files,tổng5.532.712 bytes,issues0. Quét out cho .wav/.pt/.safetensors/.onnx/.bin không có kết quả; diff --check đạt. Không thêm nguồn/master/model hoặc dữ liệu người học vào commit.


### 2026-10-18 20:39 +07:00 — AUDIO-08 bắt đầu
- Git ban đầu sạch, không .codegraph, không Python renderer còn chạy. Đã đọc hồ sơ và ghi nhận phản hồi nghe thất bại.
- Nguồn chính thức: https://huggingface.co/hexgrad/Kokoro-82M-v1.1-zh (Apache2, 100 giọng Trung từ dataset chuyên nghiệp); thử riêng .local/kokoro-venv, không sửa runtime cũ.
- Đang cài kokoro0.9.4/misaki[zh]; log .local/kokoro-install.log. Chặn manifest cũ bằng disabledReason; không xóa asset/backup. Tiếp: tạo mẫu ngắn, kiểm tra decode/ASR, mẫu nghe và báo giới hạn.


### 2026-10-18T20:46:23+07:00 — kết quả kiểm thử và lỗi đa âm
- Chặn bộ cũ: unit18/18,E2E6/6,typecheck/lint/build đạt. next-env.d.ts được trả đúng import dev trước build, không thay nguồn khác.
- Kokoro render lần đầu12mẫu thành công nhưng G2P sai 还书 thành hai2 shu1. Đã thêm jieba phrase + pypinyin override huán shū, assert chuỗi phoneme; đang render lại trước ASR.
- Metadata lỗi đầu lưu before-pronunciation-fix.json; mẫu chưa đưa vào web, bộ cũ vẫn blocked.
- Lệnh đang chạy session99406: voice-candidate.py sau đó voice-candidate-qa.py; log kokoro-candidate-fixed.log/kokoro-asr.log. Tiếp: đọc kết quả, tạo MP3 mẫu, cập nhật hồ sơ; chưa nghe/duyệt chuyên môn.


### 2026-10-18T20:49:20+07:00 — mẫu thay thế đã tạo, chờ đánh giá nghe
- Kokoro0.9.4/misaki0.9.4, CPU FP32, speed1.0, không pitch/formant; model SHA256 khớp bản chính thức. Hai giọng A zf_001 (31.5s), B zf_002 (34.4s); file WAV/MP3 ở .local/voice-candidates/kokoro-zh. Hai MP3 decode24k mono, peak0.473/0.442, hữu hạn.
- 12 mẫu câu/từ ghép +12 mẫu từ đơn đã sinh và ASR; báo cáo đã bỏ đường dẫn riêng ở docs/reports/audio-candidates.json. G2P 还书 đã sửa huán shū, vẫn giữ 还要 hái yào; assert đạt. 过 trong giáo trình hiện là trợ từ guo thanh nhẹ, khớp G2P5; không suy ra mọi ngữ cảnh đều thanh nhẹ.
- ASR: câu phần lớn có nội dung đầy đủ, hai giọng nhận 姐姐 thành 杰杰 trong câu; B nhận sai cụm 妈妈麻烦马路; từ đơn 谢谢/姐姐/准备/认真 nhận đúng, 你/过 nhận sai. Đây là triage, chưa biết lỗi nào do ASR hay âm thanh; không đủ chứng nhận thanh điệu/độ tự nhiên.
- Đã gửi hai mẫu nghe và hỏi lựa chọn âm sắc; chưa có phản hồi tại checkpoint này. Không chọn thay người dùng hoặc tự đánh dấu approved. AUDIO-08 IN_PROGRESS; mẫu khả thi nhưng chưa nghiệm thu. Giữ disabledReason ở public và out, đều145entries; không đổi UI/DB.
- Lệnh render/QA session99406,72255 đã kết thúc; không cần chạy lại. Tiếp: nhận phản hồi mẫu; nếu vẫn không đạt, thử engine khác. Nếu chọn được, kiểm soát từng Pinyin/đa âm rồi tái tạo thư viện bằng ID riêng; vẫn cần duyệt chuyên môn.


### 2026-10-19T06:58:24+07:00 — AUDIO-08 thay thư viện bằng mẫu A
- Chủ dự án đã chọn A. Mốc trước được lưu commit54c0070.
- Tạo scripts/voice-kokoro.py, voice_pronunciation.py; stage .local/voice-kokoro/public, không đổi manifest web đến khi145/145 và QA đạt. CPU FP32, presetzf_001, không pitch/formant, atempo0.8 cho chậm.
- Pinyin từ vựng tạo phrase lexicon, giữ tone sandhi/erhua frontend ở câu; phát hiện xung đột chữ đa âm phải dừng, không lấy ngẫu nhiên một reading.
- Renderer session13382 PID5720, log .local/kokoro-bank-render.log; còn đang import/load. Mã schema cho hai voice ID có kiểm tra path khớp voice; publisher cần hash QA đúng. Tiếp: render/QA, publish atomically, backup/restore, kiểm thử và build. Không sửa DB/giao diện.


### 2026-10-19T07:03:03+07:00 — checkpoint render mẫu A
- ~50/145 clip stage; không PID cũ render, chỉ renderer5720/session13382. Pinyin95 cụm căn đủ; Python pronunciation3/3 đạt.
- Backup trước switch .local/voice-backups/2026-10-19T00-01-34-646Z, restore-check cùng timestamp:297 file SHA256 khớp, chứa profile riêng nguồn cũ, cùng máy.
- Preview sáng nay chưa chạy; đã kiểm tra port/HTTP rồi khởi động hidden API13088/web15056; log dev-*-kokoro. Không đọc stdout auth.
- npm typecheck đã chạy không có lỗi; chuỗi session21651 đang lint10616, test chưa bắt đầu; không coi test đã đạt.
- Tiếp: đợi render, signalQA/hash +ASR16 mẫu stage, npm audio:publish, backup bộ mới, testE2E/build/static export, lưu Git. Không chạy lại render từ đầu, giữ cache stage.


### 2026-10-19T07:06:15+07:00 — render mẫu A hoàn tất
- stage145/145,290 MP3; generated145/recovered0,339.48s sau khởi tạo. Fingerprint 1ebcb1f4c823a10288b1407187671b75ef6e2357d0299f19dbdbe66d2d0b13f4. Source model0.9.4 presetzf_001 FP32.
- Report .local/voice-kokoro/render-report.json; bản metadata cho duyệt docs/reports/audio-pronunciation.json. Các clip đều unreviewed.
- Renderer13382 đã kết thúc; QA chờ1808 đang decode/hash và ASR16, log kokoro-bank-qa.log. Chưa publish. Unit18/18,Python3/3,typecheck/lint đạt; audit thêm chặn release nếu disabledReason.


### 2026-10-19T07:10:56+07:00 — sửa thanh nhẹ ngoài Pinyin
- QA v1:290file đạt signal,16ASR có sai từ ngắn. Đối chiếu metadata phát hiện 打算 dǎsuàn bị frontend tự giảm 算 về5; đã sửa word_phonemes để mục từ giữ lexical tone theo Pinyin và chỉ áp dụng biến điệu thanh3. Câu vẫn dùng frontend tự nhiên.
- V1 đã switch/backup nhưng sau phát hiện đã chặn tạm; workspace v1 được chuyển an toàn vào .local/voice-kokoro-v1. Không mất file.
- V2 render:145 entries,1 clip mới (打算),144 clip reuse chỉ khi phonemes + model/speaker/speed/encoding khớp.10.39s; fingerprint f01aa4136b3673244590e4e98d93542d89e931c5fa0869f78b8580ce8789cb3c. Python3/3 có regression 打算 giữ4/谢谢 giữ5/你好变调2.
- Session publish v2 đang QAhash290 rồi switch/audit/backup. Tiếp: nghe/trình duyệtE2E, kiểm tra export, archive file không còn tham chiếu, docs/Git. ASR vẫn không thay duyệt chuyên môn.


### 2026-10-19T07:13:41+07:00 — bộ mẫu A v2 đang hoạt động
-145entries/290MP3,3,666,688 bytes; profilef01aa413..., không disabledReason, mọi clip unreviewed. V2QA decode/hash290issues0. ASR16 là bộv1, chỉ clip打算 thay đổi; không ghi ASR v1 thành kết quả ASR v2.
- Publish/audit v2 đạt; backup .local/voice-backups/2026-10-19T00-11-01-948Z và restore-check cùng timestamp:295file SHA256khớp, metadata preset, không private master. Cùng máy, chưa ngoài máy.
- Archive580MP3không còn tham chiếu ->.local/voice-retired/20261019T001158148707Z, mỗi file kiểm traSHA256; còn290active. Không xóa dữ liệu.
- E2Eaudio6/6 desktop/mobile (1.2m), nút thường/chậm phátfile thật, đổi tab dừng, lỗi mạng/retry, ngăn giọng lỗi. Python3/3,unit18/18,typecheck/lint đạt, eslint2file cuốiđạt.
- Cache no-op:generated0/recovered0/reused0,total145,0.05s, không khởi tạo model; cache-check.json riêng, giữ render-report gốc.
- Build đang chạy log kokoro-build.log. Tiếp: kiểm tra export290SHA256/không private leak, kiểm traHTTP sau build, cập nhậtSTATUS/TASKS/NEXT/TEST_REPORT, commit.


### 2026-10-19T07:16:36+07:00 — mẫu A v2 hoàn tất tích hợp kỹ thuật
-145 mục/290 MP3 active,3,666,688bytes; QAhash/decode0issues; E2E6/6,typecheck/lint/unit18/18,Python3/3,build đạt. Cache không sinh lại.
- Đã kiểm tra export:145entries,290files, SHA256 khớp. Kiểm tra ban đầu báo nhầm ảnh reference-*.webp là giọng riêng; đã sửa đúng phạm vi reference giọng/model/prompt/DB, chạy lại đạt. scripts/audio-export-check.py lưu phép kiểm tra rõ ràng, không bỏ kiểm tra private files.
- ASR lại clip sửa 打算 nhận đúng 打算. Không coi ASR là duyệt thanh điệu. ASR16v1 còn sai từ ngắn, mọi clip unreviewed.
- Backup/restore cuối295file đạt, chỉ cùng máy; archive580file không tham chiếu đã kiểm tra SHA256. Không xóa/reset DB, không deploy/cloud/API sinh giọng có phí.
- HTTProot/API200 saubuild; listeners3516/10660. Giữ preview chạy. next-env importdev được khôi phục saubuild. AUDIO-08 DONE technical, AUDIO-07 TODO duyệt; CMS/podcast/HSK4/cloud còn theoNEXT_STEPS.


### 2026-10-19T07:17:53+07:00 — checkpoint Git cuối mốc
- Mã/assets/báo cáo mẫu A đã lưu commit dcd031d; mốc dừng giọng lỗi trước đó54c0070. Git sạch sau commit nguồn.
- HTTProot/API/MP3thường/chậm200 sau build; export290SHA256khớp, cache0generated. Preview vẫn chạy API10660/web3516.
- Không còn renderer/QA đang dở. Tiếp theo theo NEXT_STEPS: duyệt chuyên môn/CMS/podcast/học liệu/cloud, không chạy lại mốc thay giọng.

## 2026-10-19T08:03:30+07:00 — Podcast checkpoint đang làm
- Đã thêm 3 kịch bản/30 đoạn, renderer giọng A, API draft riêng, UI player/transcript, test schema/route/E2E.
- Nhạc Almost in F tải chính thức, CC BY 4.0, SHA lưu PODCAST_RUNBOOK. Lỗi TLS hostname, JSON FFmpeg và chèn JSX đã ghi ERRORS_AND_FIXES.
- Renderer chạy ở .local/podcasts/render.log; chưa coi hoàn thành cho tới catalog/QA/test/build/backup xong. DB không đổi.
- Tiếp: kiểm tra render, E2E, chất lượng kỹ thuật, cập nhật hồ sơ cuối.

## 2026-10-19T08:11:21+07:00 — POD-01 hoàn tất kỹ thuật local
- 3 tập,30 đoạn,6MP3 giọng A; âm nền Almost in F của Kevin MacLeod CC BY4.0. 59.45s/59.65s/57.375s. Không phí API, không sửa DB.
- npm run typecheck/lint/test: đạt,20/20 test. npx playwright test tests/e2e/podcast.spec.ts tests/e2e/audio.spec.ts:10/10 desktop/mobile,1.6m. npm run build exit0.
- MP3 QA loudness -22.53..-22.80LUFS,max true peak -2.97dBTP; ASR3tập không thấy mất nguyên câu, không thay human review. Ảnh desktop/mobile light/dark lưu .local/podcasts/; đã xem desktop-dark và mobile-light.
- python scripts/audio-export-check.py:145entries/290MP3 bộ A nguyên vẹn,SHA khớp,no privateLeaks. out có0podcast MP3. RootHTTP200 sau build.
- npm run podcast:backup:19file SHA khớp ở backup/restore-check timestamp2026-10-19T01-09-10.153Z; cùng máy, chưa offsite, không DB/model/runtime đầy đủ.
- Lỗi đã sửa và phòng tránh trong ERRORS_AND_FIXES (POD01..07,TEST01); vòng E2E đầu thất bại được lưu e2e.log/e2e-v2.log, vòng cuối đạt e2e-v3.log.
- API launcher8028/listener gần nhất4712; web3516; kiểm tra lại PID trước tác vụ. Không renderer đang chạy. Không tự tạo lại file.
- POD-02 còn TODO: duyệt chuyên môn/CMS xuất bản. Bản nháp phục vụ private .local qua route whitelist local; production404. Toàn dự án HSK4/cloud chưa hoàn thành.

## 2026-10-19T12:35:04+07:00 — Đang làm POD-03 theo yêu cầu mới
- Nhạc lo-fi Watching Rain Together tải trực tiếp từ FMA, SHA ca782046...05f2b, tác giả Pamela Yuen xác nhận CC BY4.0 trên blog; source/track/license ở .local/podcasts/lofi/.
- Trước đổi đã backup/restore19file timestamp2026-10-19T05-29-18.416Z. Giữ bản cũ; renderer giờ tách fingerprint synthesis khỏi mix để thay nhạc không sinh lại giọng.
- Đang tạo4tập mới thêm3tập cũ, cache WAV cũ được tận dụng; log .local/podcasts/lofi/render.log. UI/resume/yêu thích/loop/liên tục/tải lời thoại và test đã viết; chưa kết luận test/build/QA hoàn thành.
- API launcher11404/web14680 vừa khởi động vì port3000/3001 ban đầu đều vắng; kiểm tra HTTP trước E2E, không dump stdout auth.
- Tiếp: chờ catalog7tập, test/ASR/QA, chỉnh lỗi, backup mới và cập nhật docs cuối.

## 2026-10-19T12:41:57+07:00 — POD-03 hoàn tất kỹ thuật
- Lo-fi Watching Rain Together CC BY4.0;7tập/70đoạn/14MP3,total394.625s. Source FMA/bloglicense lưu và backup. Chọn cuối của chủ dự án là lo-fi, không guzheng.
- GiọngA3tập cũ SHA nguyên vẹn,mixhash đổi;cache30WAVcũ,39đoạnmới,1duplicatecache. Synth fingerprint62f7fa3d...,render1b49bc8d...; không pitch/formant/API có phí.
- Typecheck/lint đạt,unit21/21; E2E podcast+audio14/14 desktop/mobile2.2m,buildexit0. ASR7tập không thấy bỏ nguyên câu; vẫn unreviewed. Ảnh desktop-dark/mobile-dark đã xem; light/dark không overflow.
- Export audio145/290 SHA khớp/no privateLeaks,root/API200,media Range206 sau build. Backup/restore33file timestamp2026-10-19T05-41-04.088Z SHA khớp,cùng máy,chưa offsite;không DB/model/runtime đầy đủ.
- Lưu resume/preferences/yêu thích chỉthiếtbị; loop/liêntục/transcript có credit. Nguồn nhạc/config và lỗi POD08..10/OPS01 ở runbook/sổlỗi. APIlauncher11404/listener16032,weblauncher14680/listener14116; kiểm tra lại PID khi tiếp tục.
- Không còn render/ASR cần chờ; không tự tạo lại audio. POD-02 còn TODO: duyệt bằng người/CMS publication. Toàn dự án/cloud/HSK4 còn backlog.

## 2026-10-19T12:42:53+07:00 — Checkpoint mã nguồn POD-03
- Commit triển khai9feac85 (Switch podcasts to study lo-fi and complete daily listening). Checks/backup/media đã ghi ở mốc trên; không tác vụ sinh audio còn dở. Working tree sạch sau commit triển khai.
- Tiếp tục từ PROJECT_STATUS/NEXT_STEPS; giữ lựa chọn lo-fi/giọng A, không render lại. POD-02 vẫn cần duyệt chuyên môn và CMS xuất bản.

## 2026-10-19T14:24:01.0539223+07:00 — POD-04 nhận phản hồi và xác minh công cụ
- Đọc hồ sơ; Git sạch lúc đầu. Tham chiếu audio-preview/report.json: file gốc 24.5 giây, đã tách Demucs CPU trước đây; còn source/vocals WAV.
- Đã kiểm tra README và tài liệu VoiceStudio cục bộ, GitHub chính thức; có luồng giọng/tách-trộn, chưa xác minh bộ tạo nhạc. Tìm được ứng viên Pixabay Soft Daydream nhưng chưa tải/chốt/đánh giá giấy phép chi tiết.
- Chưa có bản mix mới, chưa sửa UI, không chạy test ứng dụng vì chỉ cập nhật hồ sơ. Bước tiếp: đối chiếu nhạc tham chiếu, tuyển nhạc hợp lệ, làm mẫu radio trước khi thay danh mục. Không coi nguồn nhạc cũ được user duyệt.

## 2026-10-19T14:44:01.3290555+07:00 — Đang tạo mẫu radio từ nền tham chiếu
- Đã viết content/radio-pilot.json: chào thứ Hai19/10,4câu động viên thường/chậm,câu chuyện hư cấu học3từ/ngày,cụm 慢慢来 hai lần trong phần ghi nhớ,kết hẹn mai.
- scripts/radio-pilot.py tách non-vocal bằng htdemucs từ MP4 stereo, tổng hợp từng đoạn dẫn liền bằng giọng A và nối nhạc crossfade, không pitch/formant. Xuất private radio-pilot/pilot-mix.mp3 và báo cáo; không tự thay danh mục trước khi kiểm tra.
- Đang chạy Python, log .local/podcasts/radio-pilot-render.log, session72944. Chưa báo thành công khi chưa có file/QA.

## 2026-10-19T14:50:19.8021012+07:00 — Mẫu radio đã tạo và kiểm tra
- Render exit0,76.94s,14đoạn; MP3mix/voice .local/podcasts/radio-pilot. Nền stereo từ nguồn gốc, loop crossfade3s, duck50%, không lọc cắt3kHz như bản trước; giọngA theo đoạn kể, ngắt .45–1s, slow .82 chỉ câu luyện.
- ASR kiểm tra lại exit0; không thấy mất câu/đọc nhạc chen vào transcript; đồng âm 他/她/的/地 là khác chữ ASR. Không khẳng định đã nghe hoặc duyệt cảm xúc. Report+asr-triage lưu cạnh file. Đã hiển thị player mẫu trong chat.
- Backup9file cùng máy hashverified radio-pilot-20261019-144858; sẽ cập nhật script check và ASR vào bản backup này. Không chạy build/E2E vì không sửa web/backend; chỉ script/media/docs. Còn tích hợp danh mục radio/UI audio-only, chống lặp nhiều tập và duyệt nghe.
- Không còn tiến trình render/ASR cần chờ. Giữ file/website cũ; không báo toàn bộ podcast hoàn thành.

## 2026-10-19T15:37:04.9248927+07:00 — Radio v2 đang render
Đã bỏ đọc lặp/cụm ghi nhớ, gộp4câu động viên và thêm đoạn tâm sự để giữ1–2phút. Bỏ duck50% gây nền tăng6dB trong khoảng nghỉ; bỏ master loudnorm động, dùng gain cố định; cân mức nền theo chính nhạc và nối equal-power. Cache nền/giọng cũ được tái dùng. Output phiên bản v2 riêng, giữ v1. Lệnh scripts/radio-pilot.py; session26327; log radio-pilot/render-v2.log.

## 2026-10-19T15:41:33.8374892+07:00 — Mẫu v2 sẵn sàng gửi duyệt
- Render cuối exit0;7đoạn78.27896s. Bỏ đọc lặp/cụm nhớ; giọngA không pitch. Mix -21.66LUFS,true peak -3.48dBTP; nền RMS3s range1.386dB,không speech duck/masterdynamic. Giữ filev1 riêng.
- ASR cuối exit0,nhận đủ nội dung; sai chữ đồng âm 他/她,的/地,在/再,không kết luận lỗi âm chỉ từ ASR. Vẫn chưa duyệt cảm xúc bằng người.
- Backup11file ở .local\podcast-backups\radio-v2-20261019-154133,hashkhớp,cùngmáy. Không sửa web/backend; không chạy build/E2E không liên quan. git diff --check là kiểm tra diff.
- D-033: gửi mẫu cho chủ dự án trước và chờ chốt; không tự áp dụng full. Không tiến trình render/ASR còn chạy.

## 2026-10-19T19:14:24.7035942+07:00 — Tiếp tục mẫu v3 sau gián đoạn
Render session1709 không còn trong tool; kiểm tra log/file thực tế thấy đã hoàn thành87.060s,7đoạn,musicrange1.217dB. Không render lại. Chạy ASR session77536, log asr-v3.log, chưa kết luận khi đang chạy. Nguồn nhạc trực tiếp incompetech pieces.json, MP3 hash a8ea5df5...,license/source HTML và track.json lưu music-v3. Không gọi paidAPI,không sửa web.

## 2026-10-19T19:15:07.5198195+07:00 — Mẫu v3 hoàn tất để nghe duyệt
- ASR exit0,đủ nội dung từ mở đến kết; sai chữ đồng âm 他/她/的/地/在/再,không phải chứng cứ lỗi phát âm. Không tuyên bố đã nghe/duyệt cảm xúc hoặc tuyệt đối không nhiễu.
- Backup14file hashkhớp tại .local\podcast-backups\radio-v3-20261019-191507,cùngmáy,không offsite. Metadata MP3 và docs có credit Kevin MacLeod CC BY4.0; config kèm SHA và đoạn30–117.060s. Không loop/source separation/noise FX,nhạc targetRMS.010 so với.018 ởv2; giọngtarget.10 so với.12.
- git diff --check đạt; không chạy build/E2E vì không đổi web/backend. Không tiến trình còn chạy. Chờ chốt mẫu; không tự triển khai full.

## 2026-10-19T21:45:53.6503584+07:00 — Khôi phục nhạc tham chiếu, mẫu v4
- D-035: không dùng Dreams Become Real. scripts/radio-remix-reference.py kiểm hash reference stem, tái dùng WAVgiọng chậm v3 nguyên SHA, nối nền equal-power/cân mức độc lập; không speech duck/masterdynamic.87.060s,range1.386dB,-21.96LUFS/-4.36dBTP. Filev4 riêng,không ghi đèv1–v3.
- Render exit0; không ASR lại vì giọng WAV nguyên v3 đã ASR,nhạc tham chiếu đã dùngv2; không tuyên bố đã nghe hoặc duyệt cảm xúc. Backup8file hashkhớp .local\podcast-backups\radio-v4-20261019-214553,cùngmáy.
- Không đổi web/backend/giáo trình,không chạy build/E2E. Chờ chủ dự án chốt theo D-033. Không tiến trình còn chạy.

## 2026-10-19T21:48:29.8968579+07:00 — Mẫu giọng thanh nhẹ bằng EQ
FFmpeg xử lý giọng riêng,giảm300Hz/tăng2800Hz và6500Hz nhẹ; không pitch/formant/tốc độ. Nền v4 giữ nguyên,giọng pan stereo trước amix. MP3 pilot-v4-bright-mix.mp3; -22.62LUFS/-4.07dBTP,decode2kênh87.10s có MP3padding. Recipe/hash/QA cạnhfile. Không ASR lại: chỉ EQ nhẹ giọng đã được triage,không tạo text/giọng mới; chưa duyệt cảm nhận,không sửaweb.
Backup3file sample/recipe/QA hashkhớp ở .local\podcast-backups\radio-bright-20261019-214830,cùngmáy. git diff --check trướccommit.

## 2026-10-19T22:00:14.1539291+07:00 — Mẫu v5 dùng piano do chủ dự án gửi
- scripts/radio-user-piano.py render exit0,87.060s; voice sáng EQ như mẫu trước,nhạc RMS target.040 thay.010,balance -5.665dB so với voiceactive. Nhạc35Hzhighpass/2400Hz-2dB tránh lấn lời;không speechduck,mastergaincốđịnh. True peak -3.56dBTP,-21.65LUFS.
- File nguồnstereo44.1kHz78.878s,tempo.89 không đổi cao độ/khôngloop. Hash nguồn trong report-v5.json;không chỉnh file nguồn. ASR đang chạy session53705, xem log asr-v5.log; kiểm tra process khi tiếp tục. Chưa sửaweb.

## 2026-10-19T22:04:19.8363573+07:00 — V7 theo chỉ dẫn cắt-ghép nhạc liên tục
- Chủ dự án sửa2lần: v5tempo.89 vàv6rútđoạndẫn đều bị thay thế trước áp dụngweb. Không dùng2mẫu này. V7 giữ đủ7đoạn/tốcđộ.84,giọngEQnhẹ,nềnnguyênnhịp/caođộ;chèn nguồn35–49s tại55s với2crossfade2s,trim87.060s. Không speechduck/masterdynamic. Nhạc RMS target.040,balance -5.57dB;mix -21.72LUFS/-3.58dBTP.
- ASRfinalv7 exit0,đủnội dung,đồngâm他/她/的/地/在/再;không kếtluận duyệtnghe. Renderexit0;không đổiweb/backend,không chạybuild/E2E. Backup11file nguồn/script/sample/QA hashkhớp .local\podcast-backups\radio-v7-20261019-220419,cùngmáy.
- Không tiến trình còn chạy. Gửi mẫu v7 nghe/chốt theo D-033. Giấy phép công khai của piano mới chưa được xác minh;không gán quyền từnhạcvideocũ.

## 2026-10-19T22:06:22.3814741+07:00 — Mẫu v8 tăng nền gần giọng
Renderexit0,87.060s,target.060từ.040 (+3.52dB). Balance -2.049dB,mix -20.26LUFS/true peak -3.26dBTP. Filevoicev8/v7SHA trùng4fffa6f4...,giọng không đổi;nhịp/caođộ/cácđiểmghép nguyên. ASRfinalmix đang chạy session93307/logasr-v8.log. Không sửaweb.

2026-10-19T22:06:51.6085568+07:00 — ASRv8exit0,nhậnđủnội dung; đồngâm 他/她/的/地/在/再 như cácbảntrước,không thay duyệt nghe. Backup5filehashkhớp .local\podcast-backups\radio-v8-20261019-220651,cùngmáy;nguồn/voiceđầyđủởbackupv7. Không tiến trình còn chạy,không chạybuild/E2E vì không đổiweb. Chờ chủ dự án chốt.

## 2026-10-19T22:11:05.2640722+07:00 — Đang tạo giọng kể radio v9
content/radio-storyteller.json và scripts/radio-storyteller.py: mởthânthiện,tâmsựchậm,kểchuyện.90,kết.82,ngắt.7–1.1s;không pitch/formant. Nhạc bắtbuộc nguyênv8,sốmẫu/thờilượng không đổi,khôngmastergainchung. Session27161/logrender-v9.log;chưa báo hoànthành khi chưaQA.

## 2026-10-19T22:16:59.3083211+07:00 — Mẫu giọng kể v9 sẵn sàng nghe
- Renderexit0,7đoạn,87.060s,lờikết80.98s. GiọngA thay pacing/punctuation/câudẫngiớithiệu,không pitch/formant. VoiceEQấmnhẹ,không reverb/SFX. Music v8 nguyên PCM SHA BBCD3E0F2D936B8CC6CE5D4597A4DD44CFF130A4FB5E6612179439028548878B;assertresidualmix<1e-7,không đổi gain/điểm nối/độdài nền. Mix -20.36LUFS/-3.52dBTP.
- ASRexit0 không thấy mất nguyêncâu; 好→号 khác thanh điệu,他/她,的/地,在/再 khác chữ. Không suyra phátâm đúng hoặc sai chỉtừASR;giữunreviewed và cần nghe mẫu. Không tự nhận đã nghe/duyệt cảm xúc.
- Backup11filehashkhớp .local\podcast-backups\radio-v9-20261019-221659,cùngmáy,không kèmruntime/model. Không đổiweb/backend,không chạybuild/E2E. Không tiến trình còn chạy. D-033 chờ chủ dự án nghe/chốt trước full.

## 2026-10-19T22:21:40.6210815+07:00 — Bắt đầu áp dụng radio vào web
Đọc hồ sơ/code/tests,.codegraph không có,Git sạch. D-041:không làm mẫu/xin chốt tiếp,boostvoice1.3dB,giữ âm thanh v9 và nềnv8. Đang backup catalog7dialogue cũ trước thay,logpre-radio-backup.log. Kế hoạch thay7tập thành thư việnradio,UIaudio-only/bỏ ảnh lời thoại,giữresume/yêu thích/seek/music switch;metadata nguồn nhạcowner-supplied không gán CC BY. Tạo audiooffline,giữprivate/unreviewed/livegate;cloudcầnquyềntruycập chưacó.

## 2026-10-19T22:29:34.7615394+07:00 — Tiến độ áp dụng radio
Typecheck/lint banđầuđạt;unit22/22. Thưviện7tậpradio,đầudùngWAVv9boost1.3dB,6tậpmớitheocùngpreset,nềnfrozenv8hash. Schema phânbiệt owner-supplied vớiCCBY,không lộproduction/privateprofile;UIbỏlờithoại/phụđề/tảitext/ảnhpodcast,giữplayercontrols/resume/favorite. Renderer80344 đangchạy,progressfile ghiđủtậpQA,katalogcũchưaswap. KhởidộngAPI/weblauncher 15964/10560,logs riêng khôngdumpauth.

## 2026-10-19T22:45:22.9461980+07:00 — D-041 áp dụng xong trên web local
- 7radio/14MP3,mỗi87.060s;36đoạn mới sinh,đầu táidùngWAVv9voicechỉboost1.3dB. Nềnfrozenv8SHA bbcd3e0f...,auditpersistedWAV residual<1e-7 vàvoicefirstboostdiff<1e-7. Sourcefingerprint5842ce04d6aa...;publicmetadataowner-supplied/noprofile/production/transcript. UIaudio-only,vịtrí/yêuthích/seek/loop/liêntục/music-switch/ratekhôngđổicácmodulekhác.
- Typecheck/lintđạt;unit22/22,E2Eaudio6/6+podcast8/8 desktopmobile,lỗi mạng/lightdark,buildexit0. Đã xem ảnhdesktop-dark/mobile-light:không ảnhpodcast hoặc overflow. Export145/290SHAkhớp/privateLeaks0. HTTPweb200,catalog7radio,MP3Range206 sau build.
- ASRraw7tập+reviewexit0,khôngflagmấtđoạn;char similarity.965–.987,minparagraph.85. OutroASR cóhallucinations/kểcảtimestamp>duration;WAVvoiceimlặngđượcđốichiếu vàrawgiữ,kếtquảkhôngthayngườiduyệtthanhđiệu/cảmxúc. Khácchữ好/号vẫnchờngườinghe,khôngchữaviệcđó bằngđổi giọngđãchọn.
- Backup/restore34filehashkhớp timestamp2026-10-19T15-42-58.166Z;cùngmáy,khôngoffsite/model/runtime/DBđầyđủ. Backup trước33filetimestamp2026-10-19T15-21-57.954Z. Không xoálegacyassets;APIwhitelistchỉbộmới.
- Không còn renderer/ASR/E2E/buildđangchạy. APILauncher15964/web10560;logs riêngradio-api/radio-web. GiữDB/tàikhoản/tiếnđộ. Chưa cấu hìnhcloud/email/HTTPS,côngkhaiquyềnnhạcvàduyệthọcliệucònPOD-02;khôngđượcbáođãxongHSK4hoặctoànbộdựán. D-033samplegatebịthaybằngD-041,khônghỏiownerchốtlại.

## 2026-10-19T22:46:21.2172868+07:00 — Checkpoint mã nguồn D-041
Commit triển khai ea1a654 (Apply selected radio voice and fixed piano to the podcast library). Bộradio/QA/backup đã ghi ởmốc trên. Workingtree sạch saucommit triểnkhai. Đã yêu cầu mở browserlocalhost3000 trongCodex,trảqueued;không coi đó làđãđiềukhiển tabPodcast hoặcdeployInternet. Không cần ownerduyệtmẫu nữa.

### 2026-10-20T08:06:25.0343047+07:00 — POD-05 khôi phục phụ đề (IN_PROGRESS)
Đã tạo nguồn 43 đoạn/7 tập, bản dịch Việt gắn hash kịch bản, Pinyin và script cập nhật catalog atomically; report subtitles-update.json xác nhận 14MP3 giữ SHA. UI đã thêm 3 dòng, highlight theo đoạn, tự cuộn trong khung và bấm seek; test đang chạy. Không TTS/ASR lại. Dịch vụ cũ không còn listen; khởi động ẩn launcher API10644/web11608, không đọc stdout auth. Lỗi npm cmd không nhận .local/path đã sửa bằng đường dẫn exe Windows có dấu ngoặc kép. Bước tiếp: typecheck/lint/unit/E2E/build, audit, backup và cập nhật bàn giao.

### 2026-10-20T08:13:01.4951101+07:00 — POD-05 kiểm tra gần cuối
Typecheck exit0; trình duyệt10/10 đạt (desktop/mobile, phụ đề/seek/cuộn/ẩn nghĩa Việt/playback/mạng/theme). Npm launcher npx bị dừng lúc nạp chậm; tiến trình Playwright con vẫn chạy hết, report subtitles-e2e.log xác nhận10 passed; không xem exit -1 của launcher là kết quả test. Build exit0, đã trả next-env về dev/types; root200/catalog7/Range206. Audit7tập/14MP3 giữ nguyên; podcast:check exit0. Backup/restore39file SHA khớp tại timestamp2026-10-20T01-12-20.407Z. Đã xem screenshot desktop-light và mobile-dark. Lint còn nạp/chạy, unit trong chuỗi chờ lint; chưa báo hoàn tất.

### 2026-10-20T08:13:28.5011329+07:00 — POD-05 DONE kỹ thuật local
Typecheck/lint/build exit0; npm test22/22 và Playwright10/10 đạt. Phụ đề43đoạn/7tập có chữ Hán/Pinyin/nghĩa Việt, aria-current theo đoạn, bấm seek/phát, tự cuộn nội bộ, checkbox nghĩa Việt lưu trên thiết bị. Giọng/nhạc giữ nguyên14SHA; không tổng hợp hoặc ASR lại. Backup/restore39file tại2026-10-20T01-12-20.407Z, hash khớp. Web200/catalog7/Range206 sau build. D-042/TASKS/STATUS/NEXT/runbook/sổ lỗi cập nhật; phần chuyên môn/xuất bản vẫn POD-02. Không còn build/test/render cần chờ; API10644/web11608 đang phục vụ local.

2026-10-20T08:13:47.5424912+07:00 : Mốc mã nguồn POD-05 cb4a773; working tree sạch sau commit triển khai. Bước tiếp theo đọc STATUS/NEXT, không render lại âm thanh khi chỉ đổi phụ đề.

### 2026-10-20T08:33:09.9907809+07:00 — POD-06 IN_PROGRESS
Rà nguồn: 7 podcast có14 đoạn mở/kết chứa tên cũ; bộ bài học145mục không chứa chuỗi tên cũ trong nguồn. Chưa ASR lại âm mới. Sẽ tạo lại14 đoạn cùng Kokoro zf_001/preset, ghép các đoạn không đổi từ PCM cũ, nền v8 giữ SHA; checkpoint/backup trước thay. Không đụng DB/tiến độ. Bước tiếp: renderer thay tên riêng, QA/ASR và phụ đề, audit/backup/UI test.

2026-10-20T08:37:04.7579205+07:00 : Renderer thay tên đang chạy ẩn, launcher15912 (Python con17340), logs brand-render.log/.err, checkpoint brand-lab/progress.json. Script chỉ kích hoạt catalog sau đủ7tập/14MP3 qua QA; giữ snapshot WAV cũ ở brand-lab/before. Chuỗi kiểm tra chờ renderer, rồi cập nhật phụ đề/audit/ASR7tập/review/inventory; không chạy renderer lần hai song song. Typecheck đã exit0, lint/unit đang chạy.

2026-10-20T08:40:15.6947800+07:00 : D-043 render4/7tập đã QA, cùng model/speaker/speed/EQ; thời lượng nền87.060s không đổi. Full typecheck/lint/unit22/22 đã đạt; sau bổ sung assertion tên mới sẽ chạy typecheck/lint phần thay lần cuối. Hai chuỗi phụ thuộc đang chờ renderer: kiểm âm thanh ASR/audit và Playwright10/build/export; không tạo nhiều render/ASR song song.

2026-10-20T08:42:48.5198459+07:00 : Đã kích hoạt7tập tên mới sau QA14MP3. Cập nhật render-summary theo bằng chứng brand-update (14đoạn mới/29đoạn PCM giữ nguyên); script cũng ghi summary cho lần resume. Phụ đề43đoạn đã áp dụng, audit7tập xác nhận cùng model/speaker và PCM nền; không đổi 290file bài học. HTTP catalog7/tên mới, URL mới206 và URL cũ404, production không lộ. ASR đang chạy trên mix mới, E2E desktop đang đạt; chưa kết luận toàn bộ kiểm thử.

2026-10-20T08:44:22.6535266+07:00 : E2E10/10 đã đạt với assertion chữ Hán/Pinyin/nghĩa Việt tên mới cho7tập. Tập đầu ASR nhận đúng tên mới2lần; ASR launcher8740/con15588 còn xử lý6tập, raw triage đang ghi dở, không dùng như report hoàn tất. Lời cũ 好→号 vẫn là nhầm ASR cần duyệt chuyên môn, không tự chỉnh giọng vì D-043 giữ giọng. Build đã compile, chờ packaging/lint-final/export.

2026-10-20T08:45:33.3425085+07:00 : Chuỗi kiểm tra UI hoàn tất exit0: Playwright10/10, build, typecheck-final, lint-final và audio-export-check145/290/SHA/privateLeaks0; next-env đã về dev/types, không còn build chạy. ASR hiện3/7 (tên mới2lần/tập), còn chờ review/inventory cuối; chưa backup bản mới khi ASR dở.

### 2026-10-20T08:49:04.9029223+07:00 — POD-06 DONE kỹ thuật local
7tập/14MP3 có tên mới trong14đoạn; cùng giọngA/model/speaker/speed/EQ,29đoạn PCM sao chép giữ nguyên và toàn bộ piano v8 giữ SHA/residual<1e-7. 43phụ đề/nguồn/Pinyin/VI đồng bộ, source old-name hits0. ASR7/7 nhận tên mới2lần/tập, không tên cũ/flag thiếu/brand; min coverage.878, humanReviewedfalse. 290file bài học giữ SHA, export khớp/privateLeaks0. Inventory snapshot5417file gồm bản sao/cache/lịch sử (không ASR toàn bộ lịch sử).
Lệnh: Python podcast-rebrand.py; podcast-subtitles.py; podcast-radio-audit.py; podcast-asr-check.py; podcast-asr-review.py; audio-brand-audit.py; npm typecheck/lint/test22/22; Playwright podcast10/10; npm build; finaltypecheck/lint/export đều exit0. Backup/restore70file tại2026-10-20T01-48-01.028Z SHA khớp; trước đổi39file tại2026-10-20T01-33-08.816Z. Giữ lịch sử, URL cũ404/mới206, production/profile không lộ. Không còn render/ASR/test/build chạy; dịch vụ local còn phục vụ. STATUS/TASKS/NEXT/DECISIONS/runbook/sổ lỗi đã cập nhật.

2026-10-20T08:49:45.8889400+07:00 : Mốc mã nguồn POD-06 f42e345; working tree sạch sau commit. Kiểm lại sau build web200/catalog7/phụ đề43; render/ASR đã kết thúc. Bản mới70file đã restore/hash đạt, bản cũ39file giữ để rollback. Tiếp theo theo NEXT_STEPS, không chạy lại âm nếu nguồn không đổi.

### 2026-10-20T14:47:26.3797249+07:00 — DEP-01 IN_PROGRESS: pre-GitHub audit
Bắt đầu từ working tree sạch/5421706, .codegraph không có. Đã đọc yêu cầu đính kèm (là chỉ dẫn trực tiếp). Frontend Next16.4.2 static export/out, Express5/SQLite Node24 riêng; production entry chặn thiếu sendMail. Chưa có remote/AWS CLI cấu hình kiểm được. Gitleaks8.30.1 tải từ GitHub chính thức/đối chiếu SHA; lịch sử35commit có1false-positive là public localStorage key, ngoại lệ đúng giá trị/path và quét lại exit0. npm audit runtime0; full5high từ braces/ESLint, chưa có bản vá chính thức, không force downgrade. Git fsck exit0 với dangling objects, không prune. Sửa URL token dùng fragment (query cũ vẫn đọc), no-referrer, validate HTTPS origin,413, chuyển tsx runtime; đang typecheck/lint/test. Chuẩn bị amplify.yml cho static WEB và Actions chỉ validate, chưa chạy cloud.

2026-10-20T14:52:20.3864846+07:00 : Git hygiene reachable35commit/1009blob (415text/594binary); không có file DB/env/private-key bị track trong lịch sử, không email cá nhân ngoài domain ví dụ trong text. 8literal credentials-like đều fixture tests. Working snapshot có1false-positive token giả của test fragment mới; thêm ngoại lệ chính xác giá trị/path. Không phát hiện credential thật để yêu cầu rotate; không in giá trị. Runtime audit0; full5high công cụ dev. Typecheck/lint/unit24/24 đạt trước thêm test chặn schema version mới; sẽ chạy lại phần mã vừa đổi. Đang auth-browser (chỉ kiểm liên kết bảo mật, không lặp UI/lesson/media audit), sau đó build và smoke composition production cô lập. Npm ci omitdev đang kiểm trong .local/pre-github-audit/runtime-install, không thay node_modules đang dùng.

### 2026-10-20T15:04:57.2408065+07:00 — DEP-01 DONE: audit/safe fixes, chưa publish/deploy
Báo cáo PRE_GITHUB_AUDIT.md và DEPLOYMENT đã đủ10nhóm; privateGitHub WARNING/fullAWS FAIL vì production phụ thuộc chưa được triển khai. Không audit lại nội dung/media/responsive, không thay asset. Sửa token fragment/hashchange/no-referrer/origin/413, tsx runtime và schema guard. Typecheck/full lint+lint phần thay, unit25/25, authbrowser1/1(bốn luồng), build-final, smoke-final đều exit0. Smoke production composition dùng DB tạm/email test, entry thật đúng guard thiếu mail; không TLS/SES/AWS thật. Runtime npm ci offline omitdev103packages/import/API guard đạt; dependency versionsChanged0. YAML3file valid, actionSHA/Gitleaks checksum pin; CI chưa chạyremote.
Gitleaks8.30.1 history/candidate reviewed exit0,2ngoại lệ đúng value/path cho namespace và fixture. Hygiene35baseline commits/1009blob:415text/594binary,0prohibited paths,8fixture literals,0non-reserved emails. Gitfsck0 có dangling/temp leftover, không prune. npm audit prod0, full5high dev cùng GHSA chưa patch; không force downgrade. Ignore11/11case kiểm bằng argv đạt (stdin PowerShell cóCR cho kết quả đếm sai, không phải lỗi pattern). Không ghi secret values, không dùng DB người học thật. Quét cuối và commit/checkpoint tiếp theo; các phụ thuộc cloud/offsite/visibility/account còn chờ giai đoạn sau.

2026-10-20T15:06:50.2716346+07:00 : Mốc audit/safe fixes9200c03. Post-commit Gitleaks history exit0, local web200/API local-preview, working tree sạch trước checkpoint. Không remote/push/AWS deployment; không còn task kiểm tra dài cần chờ. Báo cáo nguồn và cấu hình đã lưu, phụ thuộc cloud giữ FAIL như báo cáo.

### 2026-10-20T15:47:30.7933947+07:00 — PUB-01 IN_PROGRESS, chờ chủ dự án xác nhận
Đã đọc PRE_GITHUB_AUDIT, không chạy lại học liệu/media/UI/build audits. GH CLI không trong PATH; GCM2.9.1 lưu account flayingdance-tech, dùng credential trong bộ nhớ gọi API GitHub/user xác minh thành công, không in/lưu credential. Repo https://github.com/flayingdance-tech/han-ngu-lab đã tồn tại, visibility private, empty (commits409,size0), defaultBranch main, canPushtrue, not archived. Local master, chưa remote, working tree ban đầu sạch tại6683576. Final Gitleaks all-history exit0; tracked sensitive-path check chỉ .env.example, khôngDB/privatekeys. Chưa tạo repo/chưa push/chưaAWS. Kế hoạch sau xác nhận: cấu hình origin đúng repo đã xác minh, push master:main không force, xác minh private và GitHub Actions. Không được tiếp tục push chỉ vì được tự động resume hoặc đọc checkpoint; phải có câu xác nhận trực tiếp của chủ dự án.

## GitHub Private publication — 2026-10-20T16:29:50.6317986+07:00

- Chủ dự án xác nhận trực tiếp D-046. GCM account flayingdance-tech; GET repository Private/push permission, git ls-remote xác minh trống trước push.
- origin=https://github.com/flayingdance-tech/han-ngu-lab.git. git push -u origin master:main exit0; không force, không xóa, không rewrite. Toàn bộ lịch sử reachable của nhánh đã push.
- GitHub main SHA97e562f8e663384313c03d9530f8c3af7b0897c2 khớp local; default main, Private=true.
- Actions https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39400869176 success: Gitleaks toàn lịch sử, npm ci, production audit, lint, test, build, typecheck, production smoke đều đạt.
- Bằng chứng không chứa secret: .local/pre-github-audit/github-push-verification.json. Không kiểm lại phần nghiệm thu; không AWS. Checkpoint tài liệu sẽ push riêng và kiểm CI của commit mới trước bàn giao.

## SES SMTP — 2026-10-21T00:28:07.8905748+07:00
Đã đọc checkpoints/Git sạch tại645035a, không .codegraph. PID local API19188/web15052; không restart/chạm DB. Adapter sendMail hiện chưa nối entry, resend API chưa có. Đang thêm module SMTP/test/runbook; chưa credential, chưa gửi thật, chưa push.

## MAIL-01 / D-047 — 2026-10-21T00:35:12.4760766+07:00

- Tích hợp cục bộ hoàn tất: Nodemailer10.1.7 runtime, SMTP Sydney587 requireTLS/certificate validation; biến SMTP_USERNAME/SMTP_PASSWORD/SMTP_FROM_EMAIL chỉ server. Production cấu hình sai chặn trước mở DB; preview không gửi thư.
- server/email.ts, server/index.ts, server/app.ts: verify/reset và API resend-verification, giữ token30phút/1lần, CSRF/giới hạn auth; lỗi SMTP503 đã bỏ nguyên nhân thô. Không đổi UI/giáo trình/audio/podcast/DB học viên.
- Lint exit0; test31/31 (6email); typecheck/build/smoke exit0; production audit0vulnerabilities; stagedGitleaks exit0. Báo cáo docs/reports/ses-smtp-integration.json. Typecheck lỗi lần đầu do Next khai báo ProcessEnv.NODE_ENV bắt buộc; đã dùng input Record<string,string|undefined> và chạy lại đạt. next-env build sinh lại đã trả về nội dung trước build.
- Runbook docs/SES_SMTP_LIGHTSAIL.md hướng dẫn Git pull --ff-only, env root600, systemd/Node24, DB đúng đường và kiểm gửi thật. Không cloud/credential/gửi thật, không push; phải chờ chủ dự án xác nhận trước push. SES sandbox/SMTP auth/HTTPS/Lightsail chưa kiểm chứng thực tế.

## D-048 — push SES đã được phê duyệt — 2026-10-21T00:39:38.5050715+07:00

- Chủ dự án xác nhận push57f3a3b lên Private main; yêu cầu fetch/merge an toàn, giữ nguyên amplify.yml baseDirectory:.next từ GitHub, không force/xóa; dừng nếu conflict hoặc cần sửa cấu hình Amplify. Chỉ theo dõi auto-deploy nếu được kích hoạt, không deploy Lightsail/SMTP credentials/DB/tài nguyên AWS.
- Fetch origin/main nhận1b23772 (chỉ amplify.yml out→.next). Merge9a2acec giữ hai parent57f3a3b và1b23772, không conflict; git diff origin/main -- amplify.yml rỗng. Lần merge đầu thiếu identity nên chưa thực hiện; lặp với identity Codex cục bộ theo lệnh thành công, không đổi global config.
- Sau merge: lint/test31/31/build/typecheck/smoke exit0. Logs .local/pre-github-audit/ses-merge-*.log. Gitleaks toàn lịch sử reachable exit0; không track populated env/credentialCSV/privateDB/key. next-env sinh tự động đã về nội dung trước build. Không chạm UI/media/DB.
- Đang push commit checkpoint kế tiếp sau xác minh Private và remote chưa đổi, rồi chờ CI. AWS CLI không có trong PATH; GitHub chưa có Amplify check/deployment; Console mở tới màn đăng nhập. Đã yêu cầu chủ dự án tự đăng nhập riêng để đọc Amplify, không yêu cầu secret trong chat. Không khẳng định auto-deploy đã kích hoạt/thành công.

## PUB-02 / D-048 — kết quả hoàn tất — 2026-10-21T00:43:30.9812594+07:00

- Push an toàn master:main lên flayingdance-tech/han-ngu-lab Private thành công. Commit cuối e12d719b76bf373d7f0418a4f19c5836833d1d5b; merge9a2acec giữ57f3a3b và remote1b23772, không force/xóa/rewrite/conflict. amplify.yml khớp nguyên remote baseDirectory:.next.
- GitHub Actions39468035970 SUCCESS cho đúng e12d719: secrets/dependencies/lint/test31/build/typecheck/production smoke đều đạt. URL https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39468035970. Retest local sau merge cũng đạt; private/remoteSHA đã xác minh.
- Sau khi chủ dự án tự đăng nhập AWS Console, đọc Amplify Sydney app d12mghkvifkghp/main: Deployment3 cho đúng e12d719 đã Deployed / SUCCEED, build2phút16giây, deploy9giây, tổng2phút26giây. Domain https://main.d12mghkvifkghp.amplifyapp.com . Chỉ đọc Console, không nhấn redeploy/chỉnh config/tạo resources.
- Chưa triển khai backend Lightsail, chưa đưa SMTP credentials lên server, chưa gửi thử email thật, không sửa database. Hosting frontend thành công không xác nhận luồng SMTP/backend thật hoạt động.
- Bản ghi kết quả này lưu cục bộ chưa commit/push để giữ commit phát hành e12d719 và tránh kích hoạt thêm build chỉ cho biên bản. Không còn CI/deploy cần chờ. Bằng chứng máy .local/pre-github-audit/github-push-verification.json; screenshot/AX Console xác nhận Deployed. Lượt sau không push các checkpoint kết quả trước khi có phạm vi mới phù hợp.

## MAIL-02 bắt đầu — 2026-10-21T10:03:49.6620411+07:00
CodeGraph đã truy vấn AuthPanel/client/app/email/callers. Working tree có4checkpoint docs cũ và .codegraph untracked; bảo toàn. Không có listener3000/3001. Lỗi tìm được: register409 và SMTP503 phân biệt existence; chưa cooldown, chưa nút resend/trust proxy. Đang sửa cục bộ, không push/cloud write/DB học viên.

MAIL-02 checkpoint 2026-10-21T10:15:32.3622909+07:00 : backend38/38 pass; SDK/test mock và cooldown60s/5h, serialization1.1s đã có. SES Console đọc thực tế Sydney Sandbox/Healthy/200ngày/1giây; không thay cloud. E2E desktopfirst timeout do test đòi nút Quay lại đăng nhập sau verify nhưng app đã tự về login; đã sửa kỳ vọng test, đang chờ full run rồi rerun. E2E dùng DBsynthetic riêng .local/pre-github-audit/synthetic-auth-ui.sqlite, không DB học viên.

## MAIL-02 / D-049 — bản sửa cục bộ đã hoàn tất — 2026-10-21T10:21:14.3269697+07:00

- CodeGraph dùng trước để đọc AuthPanel/client/app/email và quan hệ callers. AuthPanel có resend/cooldown, giữ email và xử lý429/503; API generic register201/resend-forgot200 kể cả SMTP lỗi, bảo toàn tài khoản/password cũ. Kiểm tra credentials đúng mới báo login chưa verified.
- Cooldown60giây/5yêu cầu mỗi giờ theo hash email dùng chung ba endpoint, kể cả địa chỉ không tồn tại; auth/API IP limits giữ20/15phút và180/phút. Gửi tối đa20tác vụ RAM, tuần tự1.1giây; chỉ log mã cố định. SIGTERM drain trước đóng DB; không durable outbox/multi-replica limits.
- Express chỉ trust hop0 ở127.0.0.1/::1/IPv4-mapped127.0.0.1; API chỉ bind loopback. Test headergiả không né limiter, haiIP thật không gộp, không ERR_ERL_UNEXPECTED_X_FORWARDED_FOR. Caddyfile/chain Amplify→Caddy thực chưa đối chiếu, cần nghiệm thu IP trước rollout; không trust tất cả CDN.
- Đã đọc SES Sydney Console: Sandbox/Healthy/200email24h/1emailgiây. Chưa gửi thử hoặc thaycloud/IAM/quota. Gmail người nhận chưa verified vẫn bị chặn cho đến khi AWS cấp production access.
- Lint/full và lint2test mới exit0; unit39/39; E2E6/6 desktop/mobile; typecheck/build/smoke exit0; stagedGitleaks0finding. E2E lượt đầu4/6 do test đòi nút quay lại trong khi app đã chuyển login; sửa test, full rerun6/6, không sửa app để né test. E2E dùng SQLite synthetic riêng, unit DBmemory; không xóa/reset/chạm DB học viên.
- Giữ amplify.yml baseDirectory:.next nguyên remote; frontendbuild không render lại media. Source/report/runbook docs/AUTH_EMAIL_RECOVERY.md và docs/reports/auth-email-recovery.json. Chưa push/deploy/backend email thật; chỉ sau xác nhận mới push. .codegraph untracked của chủ dự án giữ nguyên, không stage. Không còn test/build cần chờ.

## PUB-03 — 2026-10-21T10:27:51.9842586+07:00
Đã fetch origin/main=e12d719, không divergence/merge; origin đúng Private, .next khớp, Gitleaks allhistory exit0 và sensitive tracked paths chỉ .env.example. Pushmaster:main→099c26e exit0, remoteSHA khớp/Private. CI39538587917 đang chạy; AWS Console đọc Deployment4 cho đúng099c26e đang build. Không code/DB/Lightsail/IAM/SES write; checkpoint này local chưa push để tránh auto-build chỉ cho biên bản.

## PUB-03 / D-050 — hoàn tất push và frontend deploy — 2026-10-21T10:29:41.6985611+07:00

- Commit phát hành099c26e07cc07778607af4b06798698001b033a0 đã push lên flayingdance-tech/han-ngu-lab Private main, remoteSHA khớp. Fetch origin/main=e12d719 là ancestor, không merge/force/rewrite. amplify.yml baseDirectory:.next khớp nguyên remote. Gitleaks allreachable exit0, không track credentialCSV/populatedenv/DB/key, chỉ .env.example.
- GitHub Actions39538587917 SUCCESS đúng099c26e: secrets/dependency audit/lint/unit39/build/typecheck/smoke đều đạt. https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39538587917.
- AWS Amplify Sydney appd12mghkvifkghp/main Deployment4 Deployed / SUCCEED cho đúng099c26e (Console authenticated đọc chỉ, không redeploy/config write). Build2phút4giây, deploy22giây; UI duration còn cập nhật nên không dùng làm chuẩn SLA. https://main.d12mghkvifkghp.amplifyapp.com.
- Chưa cập nhật backend Lightsail, SMTP env, IAM/SES, hoặc DB. Hướng dẫn docs/AUTH_EMAIL_RECOVERY.md: backup DB đúng quy trình, git pull --ff-only, đối chiếuSHA, cửa sổ bảo trì npmci/checks và restart đúng systemdservice, giữDATABASE_PATH/env. Kiểm IP thật Caddy/CDN, chỉ nhậnrecipient SESsandboxđãVerified cho đến AWSproductionaccess.
- Kết quả/checkpoint này lưu local chưacommit/push để giữSHApháthành và tránh thêm auto-deploy biên bản. .codegraph untracked giữ nguyên. Không còn CI/build/deploy cần chờ. Bằng chứng .local/pre-github-audit/github-push-verification.json và auth-publication-result.json.

## Production recovery bắt đầu — 2026-10-21T11:15:31.8335212+07:00
HTTPจริง root200/healthlive200/catalog0/podcast404 qua Amplify và directCaddy. LocalreadOnlySQLite22lessons/42revisions(32sample10draft)/0published; canonical16seed/80exercises/94wordentries/145audioentries290MP3/7podcast14MP3/43segments, approved0. SSHCLI thiếuknownhost vàagent/config; không bỏhostkeycheck. BrowserLightsailđangmở, đã chọnAWSsession. Chờ quyết địnhowner về beta chưa duyệt và giấyphép piano; tiếp tục phầnđộc lập.

## REC-01 checkpoint — 2026-10-21T11:45:13.1883341+07:00
Production read-only: users3/lessons0/revisions0; serviceubuntu /usr/bin/node24.22 loopback3001. New importer/backup/release scripts, pending owner beta and piano rights (no reply). Unit43/43, lint/typecheck/Bash syntax passed; E2E isolated running session54278; new live beta test to run. No prod writes/push. Report PRODUCTION_FINAL_REPORT.md created. Next: finish tests/build/secrets, commit safe changes, CI/Amplify, backup and draft-only import unless owner enables beta.

## REC-01 trước push — 2026-10-21T11:56:08.3842217+07:00
Unit45/45; E2E26pass+2focus outdated lastbutton fixed and rerun2/2pass; lint/typecheck/build/smoke passed; production audit0 and historyGitleaks0. Scriptdeploy preflight backup restoreverified+draft importer+daily timer+code rollback prepared, Bash -n passed. AWSBilling due0/free176days13Apr2027/estimatedcredit197.84used2.16; SESfeedbackEnabled/suppressionBounceComplaintsEnabled, Requestproductiondisabled Domainverificationneeded. Pendingownerbeta/music, noreply; only draft import permitted. Next stagedsecretscan/privatecheck/pushCI and deploy. No prodDBchanges yet.

## REC-01 rollout — 2026-10-21T11:59:42.4440660+07:00
Push60c713e03db605948d23925df1e9d4f9aa2c94f7 Private main; CI39546789335 SUCCESS allsteps; AmplifyDeployment5 Deployed and commitlink exact60c713e. BrowserSSH invoked reviewed deploy script from exact GitSHA after CI. Waiting server result: do not assume backup/import/timer done. Policy remains pendingfalse, no media release. Next read terminal and validate users3/lessons16draft/no publication, backup timer, HTTP.


## REC-01 GitHub SSH blocker — 2026-10-21T12:03:18.8439288+07:00
VM fetch failed Permissiondeniedpublickey; bootstrap stopped beforebackup/service/DB. Clipboard paste verified with harmlessHNL_CLIPBOARD_OK. Implemented optional verifiedGitbundle path (exactHEAD/prerequisites/fullSHA), preservingmainhistory/remotes and avoidingnewkeys/tokens. Next pushfallbackscript, CI, transferbundle viaexistingbrowserSSH, compareSHA256, runbackup/import. No credentials copied.

REC-01 2026-10-21T12:05:12.9692109+07:00: fallback2b3ab0f1200a8d842d307227a0b937039864f147 pushedPrivate; CI39547427368 pending. Bundle36329bytes, SHA256997f47a1ac57f7ee47db276e3aa3d0ab3b73532ed7df43ba2c628f8985c2b53a, HEAD2b3/prerequisite099 verifiedlocal, sentviaexistingbrowserSSH (nonsecretcommittedsource). WaitingremotebundleverifybeforeDBmutation. No credentials/newaccess.


REC-01/D-052 2026-10-21T15:07:21.9337859+07:00: Đã nhận chốtbeta; lyrics/piano rights vẫnunverified nên7podcast khôngpublic. ModelcardKokoro official Apache2 + Chinese datasetpermissive, canonical16bài nội dunggốctrợlý chưa duyệt. Serverstill099cactive/clean mớiđốichiếu; chuyểnGitbundlecodequaSSHexisting, khôngnewkey/token. Cần hoànthiệnCMSbeta/media, tests/deploy/audio productionproof.

REC-01 2026-10-21T15:23:34.9482274+07:00: SSH CLI đã xác minh ED25519 qua Console, ACL khóa riêng đã hạn chế; không đọc key. Production backup WAL-safe AES256GCM lúc2026-10-21T08:18:43.446Z, file20261021T081843Z-be8fb6c5.sqlite.enc, checksum e5c1270eacbdd98be556abef4be4f6bd385cece1281053233a2cc278b6d3b1b3, restore/integrity đạt; users3/sessions1/tokens2/consent3, học liệu0. Deployment dừng trước stop/merge/import do backup temp thiếu packageESM; bản sửa đang local, server vẫn099. D-053 đủ quyền beta+nhạc; bước tiếp theo offsite/restore/CMS/tests/push/deploy.


REC-01 2026-10-21T15:36:54.6025050+07:00: Production backup đã copy mã hóa ra Windows ngoài AWS, key ở thư mục riêng ACL chỉ currentuser+SYSTEM. Giải mã từ bản offsite sang file SQLite riêng, integrity/FK và inventory khớp (3users/1session/2tokens/3consent), xóa file restore tạm; không in dữ liệu/key. Đã bỏ bản key trung chuyển trên VM, giữ key gốc root600. MediaCMS 152items/immutable revisions, beta withdraw/reimport/rollback, independentreview, protectedpreview; unit47/47 đạt. Regression standalone backup phát hiện Windows --import cần fileURL, đã sửa test; lỗi deploy tempESM đã có test bảo vệ. E2E đang chạy lại sau sửa JSON import của Playwright; chưa rolloutbeta.

## REC-01 / D-052–D-053 — 2026-10-21T15:42:51.5752606+07:00

- Chủ dự án chốt Public Beta và xác nhận toàn bộ quyền đã kiểm tra: phát hành16bài/145âmA/7podcast, nguyên giọng/nhạc. Nhãn Bản thử nghiệm — Chưa duyệt, không cam kết đủHSK4/humanreview.
- MediaCMS152mục + revision immutable, independentreview, protectedpreview, withdraw/rollback; lessonbeta tương tự. Rerunimport không tự hồi nội dung đã thu hồi; JSONbackup hỗ trợ media và beta.
- Unit47/47, E2E18/18 desktop/mobile(audio/podcast/captions/CMS), lint/typecheck/build/smoke/audit0/Bashsyntax đạt. Chưa tuyên bố rolloutbeta xong; bước kế là stagedsecret→pushPrivate→CI/Amplify→GitbundleSSH→freshbackup/import/timer→HTTP/mediahash/playback production.
- Productionencryptedbackup đã restore thật và copy ngoàiAWS tớiWindowsACLprivate, keyseparate, offsite decrypt/integrity/inventory khớp3users/1session/2tokens/3consent. VM vẫn099c26eactive. SES cònSandbox/requestdisabled; không mua/domain/upgrade. Xem PUBLIC_BETA_OPERATIONS và PRODUCTION_FINAL_REPORT.

REC-02 2026-10-21T15:46:27.3889958+07:00: bcff32e465291f5508cb7ec424a89a8e4a0dc7af pushed Private main, CI39571450948 SUCCESS, .next nguyên. Gitbundle21349711bytes SHA2565feaa31cc5b0fb93bac0bbbbd95c15249b0063d6c56924cd6311ca292cc2abbe khớpVM và verified prerequisite099. Đang chạy deploy script đúngSHA; chưa khẳng định backup/import/timer thành công. Bước sau đọc log/health/user-preservation/mediahash thật.

## REC-01/REC-02 — kết quả production — 2026-10-21T15:56:49.3261710+07:00

- D-052/D-053 đã áp dụng:16bài/80câu/145âmA290MP3/7podcast14MP3/43caption publicbeta, nhãn chính xác Bản thử nghiệm — Chưa duyệt. Quyền doownerxácnhận, không kiểm tra lại; giọng/nhạc SHA giữ nguyên, không cam kết đủHSK4/humanreview.
- Codebcff32e465291f5508cb7ec424a89a8e4a0dc7af đã push Private main, CI39571450948 SUCCESS, AmplifyDeployment7 SUCCEED đúngSHA, LightsailFF099→bcffserviceactive. Khôngforce/reset/SMTPenv/IAM/SESwrite. .nextgiữnguyên. Gitbundlesha5feaa31c...khớpVM/ancestry.
- HTTPproduction kiểm đủ16lesson/80câu,290audio+14podcast SHAkhớp/Range206,43captions, publickhônganswer, me/admin401/privatepaths404. Browserproductionphát你bìnhthường, podcastmixreadyState4/time54s/errornull, đãpause. Screenshot .local/production-recovery/production-beta-podcast.png. Sourcechecks47unit/18E2E/lint/typecheck/build/smoke/audit/Gitleaks đềuđạt.
- Protectedusertables fingerprintkhớpDBbackuptrướcdeploy: users3/sessions1/tokens2/consent3/progress0. Timerbackup enabled/active, jobthậtResultsuccess0; backupafterdeploy20261021T084739Z-aff7a9ef.sqlite.enc sha e1bf4576f60beaab1c2fb6ac85cb857c468dcd753a0cc42a1a4e09b0e9431177. OffsiteWindowsACLprivate/keyseparate/actualdecryptrestoreinventorykhớp16lessons+152media; chỉoffsitecopythủcông, chưatựđồngbộhằngngày.
- CMSkỹthuậtđãcó review/edit/approve/withdraw/rollback+previewstaff152media/beta lessons, revisionimmutable, independentreview. Production3tài khoảnđềulearner(1verified2unverified), chưacóAdmin. Đã hỏiownerchọn tài khoản nângAdmin, khôngtựchọn/đổirole. ChờtrảlờimớigrantquaexistingCLI+backup/audit/revokesession, khôngcầnpassword/token.
- SES cònSandbox, requestdisabled/domainverificationneeded; khôngmua/nânggói/tạoresources. ChưanghiệmthuđaIPclientthậtquaAmplify→Caddy; khôngtrustheadergiả. Ubuntu26updates/restartrequired chưareboot. Billingdue0/estimatedused2.16/credit197.84/FreePlan13Apr2027/creditexpiry13Oct2027.
- Bàn giao PRODUCTION_FINAL_REPORT.md và docs/PUBLIC_BETA_OPERATIONS.md. Kếtquảcuốilưu workspace chưa push riêng để tránhauto-deploychỉbiênbản. Còn .codegraph củaowneruntrackedgiữnguyên. Không cònCI/build/deployrunning. LầnsauthựchiệnownerAdminreplytrước, rồiSES/offsiteauto/proxyIP/humanreviewtheophạmvi/quyền; khôngrenderđổiaudio.

## Bàn giao kiểm thử và biên bản — 2026-10-21T15:59:40.4751564+07:00

- Production chức năng đã nghiệmthu bcff32e/CI39571450948/Amplify7/backendactive nhưcheckpointdưới. Bổ sung playwright.recovery.config.ts để táchDB test; CMS2/2 mới đạt/lint/typecheckđạt, mặc định khôngchạyfixturemediaCMS nếu thiếucờcáchly. Khôngthayruntime/media/env/DB.
- Đồngbộ PRODUCTION_FINAL_REPORT và hồsơ côngviệc lênPrivateGit trongcommitbàngiao. ChờCI/AmplifycủacommitbàngiaorồiFFcheckoutVMchỉdocs/testconfig; khôngrestartservice hoặcimportDBvì runtimekhôngđổi. Bước sau chỉcấpAdminkhiownerchỉđịnh; SES/proxyIP/offsiteauto cònnhưreport.
## Hoàn tất đồng bộ bàn giao — 2026-10-21T16:05:25.7546632+07:00

Commitcuối be8ebd8c1fd7bc501d1da66866652a5695f80931 đã Private main, CI39573514798 SUCCESS (https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39573514798), AmplifyDeployment8 SUCCEED đúngSHA (2phút25giây), VMmainFFbcff→be8/clean/serviceactive/timeractive. Chỉ8filedocs/testconfig thayđổi, khôngrestart/import/DB/audio. Runtimevàmedia đã nghiệmthutrênbcffgiữnguyên. RunnercáchlyCMS2/2 đạt thêm, khôngcộngthành20testkhácnhau. Report/docsbàngiaođãcótrênPrivateGit; checkpointkếtquảcuốinàylưulocalđểkhôngkíchnhịpbuildbiênbảnlặpvòng.
KhôngcònCI/build/deploy/testđangchạy. User chưa trảlờicâuhỏichọnAdmin; khôngtựgánquyền. SES vẫnSandbox/requestdisabled, offsiteauto/proxyđaIP/humanreviewcònnhưreport. .codegraphgiữnguyênuntracked.

## REC-03 / D-054 — cấp Admin production — 2026-10-21T16:46:42.3677431+07:00

Chủ dự án trả lời “Chấp nhận” cho việc cấp Admin cho tài khoản duy nhất đã xác minh email. Đã chạy CLI scripts/admin.ts hiện có trên Lightsail sau backup mới20261021T094403Z-4625f35d (restore/integrity đạt). Kiểm lại đúng1verifiedactive/rolelearner trước thay đổi, cấp roleadmin (khôngsuper_admin), revoke1sessioncũ, audittargetrolegrant. Không đổi mật khẩu hoặc các fielduserkhác; mọi bảngtoken/consent/học liệu/tiến độ/media và sessionngườikháckhớpfingerprint. DBintegrityok/serviceactive/healthliveok. Không mintsession/testđăngnhậpthayowner, khôngđọc/inemail/password/token.
Sau đổi quyền: backupjobthậtResultsuccess/exit0,20261021T094532Z-412981bf.sqlite.enc SHA256ea63570400aee6199899972baef830be5dabfe74c3c4edba9e8a0bf259dedb0a, users3/sessions0/audit2/lessons16/media152; bảnmãhóacopyWindowsngoàiAWS/keygiữnguyênriêng, decryptrestore/inventoryđạt. Cần ownerđăngnhậplạibằngpasswordhiệncóđểthấyQuảntrịnộidung; khôngresetpassword. ChưanghiệmthuUI bằng phiên thật củaowner.
Khôngsửa runtime/source/media/SMTP/AWSresources hoặcpushGit; mãbe8ebd8/CI39573514798/Amplify8giữnguyên. Kếtquảvậnhànhlưulocal. Khôngcòntácvụgrant/backupchạy. SES/offsiteauto/proxyclientIP/humanreviewcònnhưreport.

## REC-04 — yêu cầu email đặt lại mật khẩu — 2026-10-21T17:20:38.2384420+07:00

Chủ dự án yêu cầu gửi lại mật khẩu quaemail. Hệ thống chỉlưubăm nênkhôngđọclạimậtkhẩucũ; đãthôngbáogửiliênkếtđặtlại. ĐãxácđịnhduynhấtverifiedactiveAdmin trongDB, khônginemail/ID/password/token; POST vàoAPIproductionhiệnhữu /api/auth/forgot bằngorigin/clientheaderschuẩn, khôngbỏcooldown/rate/CSRF. Request lúc2026-10-21T10:19:56.915Z trả200/accepted, retryAfter60s, linkhiệulực30phút. APIproductiontrảgeneric200khôngphảibằngchứngSMTP/mailbox; kiểmjournalchỉlọcmã Auth email delivery failed, chưa thấy lỗi tại lầnđọcđầu. Khôngresetthayowner/mintsession/đổicode/env/SMTP/SES; ownerđặtpasswordmớiqualiênkết.

REC-04 2026-10-21T17:20:54.0599667+07:00: kiểm lại log lỗi gửi sau hơn40giây: không có Auth email delivery failed; chưa có bằng chứng mailbox nhận. Không gửi lặp để tránh vô hiệu hóa link/cooldown.

OPS03 2026-10-21T19:16:01.3755856+07:00: Owner xác nhận CMSAdminlogin thật hoạt động; tiếp tụcSES/proxy/offsiteautonomously, khôngpaidresources/domain/plan/IAMbroad. AWSCLI2.38.1 hiệnđãcài, khôngprofile/credentials nênSTS/SESgetNoCredentials. Consolecookiecòndùngđược; SES SydneySandboxHealthy200/day1/s, sent4. CloudShellkhởi tạo thấtbại 'account verification is in progress ... up to two days', khôngdeleteenvironment. OfficialSESdocs domainverifiedchỉbestpractice/GetsetupUI, CLIput-account-detailsđược hỗtrợ; chưa gửi request. CaddyVM2.6.2 defaultreverse_proxy, cầnstrictCloudFrontrealIPtest. BackupjobfreshResultsuccess. ĐangchuẩnbịSESCLIlogin qua Console nếuhỗtrợ, khôngextractcookie/credentials.

## REC-05–07 — sản xuất, SES và offsite — 2026-10-21T19:49:43.3598763+07:00

- Chủ dự án xác nhận CMS Admin login thật hoạt động; REC-03B DONE theo xác nhận owner. Không cần reset mật khẩu hoặc nâng thêm quyền.
- SES Sydney: chính thức nộp SESv2 put-account-details qua AWS CLI phiên tạm quyền hiện có; PENDING rồi **GRANTED / ProductionAccessEnabled:true** lúc19:44 (+07). Suppression BOUNCE+COMPLAINT, feedback forwarding; simulator DSN/complaint đã nhận đúng mailbox. Adapter SMTP thật trên Lightsail gửi verify/reset tới success simulator đều accepted587/STARTTLS, không DB/token thật. Không mua domain/nâng gói/thêm IAM/SNS.
- REC-06 DONE: root exporter encrypted-only + Windows Scheduled Task HanNguLab-OffsiteBackup11:00/+AtLogOn, ACL user+SYSTEM, pin SSH, SHA/decrypt/integrity/FK/inventory. Scheduler chạy thực LastTaskResult0/status19:34 (+07); key tách riêng. PC phải bật/login/Internet; không bảo đảm24/7. VM daily backup giữ nguyên.
- REC-07 IN_PROGRESS: nâng Caddy2.11.7 official+SHA pin, rollback giữ binary/config/cert. Strict trust chỉ87 CloudFront origin CIDR, daily refresh/fail-closed7ngày. Probe2nguồn thật phát hiện Amplify external rewrite có peer trung gian ngoài dải CloudFront; bucket vẫn proxy nên có thể gộp user hoặc đổi bucket giữa request. Direct header giả không đổi IP. Không trust toàn AWS, không nhận đã sửa hoàn toàn; cần authenticated relay/ingress được triển khai và nghiệm thu. Probe đã gỡ và stop.
- Local npm run check PASS (typecheck/lint/49tests/build), smoke:production PASS; tests không chạm DB thật. Lượt đầu typecheck thiếu declaration choMJS; bổ sung d.mts, fullcheck lại đạt, không tắt kiểm tra.
- Production19:48 (+07): healthliveOK,16bài/7podcast; tải14MP3 podcast SHA khớp và Range206 đủ14; anonymousAdmin401. Không tái render, không đổi giọng/nhạc/giáo trình/dữ liệu/SMTP. amplify.yml .next nguyên trạng.
- Runbook docs/PRODUCTION_OPS_RECOVERY.md và SES_PRODUCTION_REQUEST.md; logs riêng .local/production-recovery/production-ops-*. Trạng thái trước mốc này là lịch sử, kết quả SES/Admin/offsite ở đây thay thế các mục còn ghi chờ.
- Đang chuẩn bị staged secret scan → safe Private main push theo D-051 → CI/Amplify → FF bundle vào VM chỉ ops/docs/test; không npmci/restartAPI/import/DB. .codegraph untracked giữ nguyên. IP và chuyên môn học liệu chưa hoàn tất.
## REC-08 — đồng bộ hoàn tất — 2026-10-21T20:15:27.5757022+07:00

- Commit **1fab4bb6c02920a75bfc3ec136f210caf30fdf71** đã Private main, remote SHA khớp; fetch/ancestor an toàn, không merge/force. amplify.yml baseDirectory:.next giữ nguyên. Staged và48commit reachable Gitleaks0finding.
- GitHub Actions **39602877223 SUCCESS**, https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39602877223 . Amplify Sydney **Deployment9 SUCCEED** đúngSHA. Không chạy lại bộ test đã đạt theo yêu cầu đẩy nhanh tiến độ; chỉ kiểm CI/deploy và health/catalog sau triển khai.
- VM be8→1fab FF bằng bundleSHA256 **1f51dd1d1b86a9478365e1323754e3adaa2c0c5480fe2bb54d66b526da3fd8f8**, prerequisite/HEAD/clean/whitelist kiểm trước; installed root exporter/range refresher SHA khớp sourceGit. Không npmci/restartAPI/import/DB/media. Caddy/API/2timer active.
- Production20:14 (+07): frontend200, healthliveOK,16bài/7podcast. Trước đồng bộ14podcast MP3 SHA+Range206 đã đạt; không lặp tải lại. Local typecheck/lint49tests/build/smoke và CI đạt.
- **SES Production đãGRANTED; offsite tự động đã chạy/restore thật; Admin được owner xác nhận. REC-07 vẫn IN_PROGRESS:** Amplify rewrite peer không có danh tính origin đã xác minh, không có IP thật an toàn từ header hiện có. Cần authenticated relay/ingress và nghiệm thu riêng, không trust mọiAWS. Không coi nângCaddy đã giải quyết điểm này. Không thay routing/API bằng kiến trúc mới chưa nghiệm thu trong mốc này.
- AWS CLI temporarylogin đã logout/xóa cachedlogin profile, không thêm quyền/IAM. Không mua/nâng plan/tạo paidresources/đổiSMTP. Không có việc deploy/test/probe đang chạy.
- Kết quả cuối này lưu local trong hồ sơ bàn giao, không push thêm chỉ để kích hoạt lại build biên bản. .codegraph owner giữ nguyên untracked. Bước tiếp theo chỉ REC-07 (relay có xác thực), sau đó đánh giá lại production readiness; học liệu beta vẫn chưa duyệt chuyên môn.
## REC-07 — chờ phê duyệt thay đổi đường phục vụ — 2026-10-21T20:43:31.9102473+07:00

- Yêu cầu mới mục9–10 giới hạn tự chủ: không đổi kiến trúc khi chưa duyệt; nếu rewrite không có giải pháp an toàn thì báo phương án nhỏ nhất và dừng trước thực hiện. Chưa thay mã/runtime/config/cloud, chưa push/deploy trong lượt này.
- Đọc CodeGraph app/auth-mail/nextconfig; đối chiếu SSH actual Caddy/HEAD1fab4bb/servicesactive với bằng chứng HMAC Windows+VM trước. Ranh giới hỏng ở external-rewrite proxy peer ngoài CloudFront origin trust, không phải Express hop0. Bucket sai/gộp và đổi giữa request; không nhận forgedXFF đã lấy được IP tùy chọn.
- AWS CustomRule schema không có origin auth/signing field; customHeaders chỉ response. Static export không có runtime relay. Tài liệu Amplify managedSSR chỉ công bố tớiNext15, repoNext16.4.2; không tự chuyển SSR hoặc downgrade để thử production.
- Phương án đề nghị nhỏ nhất: frontend tĩnh+API same-origin trên Caddy/Lightsail/HTTPS hostname hiện có, không thêmAWSresource; giữAmplify rollback. Cần owner chấp thuận đổiURLchính, đăngnhậplại do cookiekhácdomain, APP_ORIGIN/redirectemailcũ và trafficfrontendtrênVM. Chưa cấu hình hoặc cutover.
- Chi tiết xác thực nguồn IP, bảo vệ email/account, nghiệm thu hai mạng sau sửa và rollback không đèDB: docs/REC07_CLIENT_IP_DECISION.md. Phương án giữ URLAmplify cần authenticated server relay lớn hơn và xác minh tương thích riêng, chưa cam kết hoạt động.
- Readonlyproduction20:40 (+07): healthtrue/16bài/7podcast; Caddy/API/backup/rangetimeractive. Không chạmDB/SMTP/SES/media/CMS/backups, không mở endpointprobe. Không chạy lại bộtest cũ hoặc tuyên bố đã nghiệm thu mới.
- REC-07 IN_PROGRESS, phụ thuộc quyết định origin/kiến trúc của chủ dự án; chưaDONE. Lượt sau chỉ triển khai phương án được chấp thuận; giữ toàn bộ thay đổi hồ sơ local chưapush, .codegraph owneruntracked nguyên.

REC-07 APPROVED / D-057 2026-10-21T21:02:27.2328209+07:00 : Owner phê duyệt staged single-Lightsail, chỉcutoversau verification, giữAmplifyrollback, trustTCPonly, test2networks+forged+auth/CMS/content/SES/persistence; oldAPIkhôngbypass; rollbackconfigkhôngSQLite; khôngpaidresources. Đang staging exact2origin, loginemailhashguard10/15min, Caddypublicbuild riêng. Local check51tests/lint/typecheck/build vàsmoke đạt; chưadeploy/cutover.
## REC-07 DONE — staged single-Lightsail đã nghiệm thu — 2026-10-21T21:32:21.4202324+07:00

- Owner đã duyệt D-057; runtime e25d6c5/CI39613379221SUCCESS/Amplify10SUCCEED. Canonical website/API **https://54-253-61-113.sslip.io/**, hostname chỉtạm; frontendpublicrelease riêng/CaddyTCPpeeronly/Expressloopback. APP_ORIGINcanonicalduynhất, stagingoriginđãbỏ; envnonorigin/SMTPbytekhớpsnapshot. Không thay .next/framework/IAM/SES/DBschema/media.
- Staged trước khi chuyển: Windows/AWShai mạngthật táchkey, headergiảkhôngđổi; login/cookieSecureHttpOnlyStrict/CSRF/CMS16bài152media; SES verify/reset đếnmailboxthậtcanonical/token1lần/sessionrevoke; progress/idempotency/sessionpersistqua restart. Local lint/typecheck51tests/build/smokeđạt; khônglặpbộtest khichỉviếtbiênbản.
- Cutover302Amplifyroot→canonical; APIcũ302fixedretirement410khôngforwardExpress; originAmplifywrite403. Browseroldemail#resetmởformcanonical/#verifygiảđếnverifiercanonical, fragmentđượcconsume/xóa khỏiURL. Khônglogtoken/IP/emailthô.
- Đãdiễntập fullrollbackAWSrules+servercode/env/Caddyfallback21:28, oldsite200/newhost302back, linkresetnewhostvẫnmởformAmplify; SQLitekhôngrestore, originalrows14bảngnguyên. Sửahealthretry/ERRinheritance, Caddyfilepermission600→install644, timerstopidempotent; controllerlỗitimerđãrollbackcảAWS/server. Tái cutoverthànhcông21:29.
- NghiệmthumulticlientSAUtáicutover21:30: Windowsaed763b3d05c63b3fb0c96d1/AWSf5fc598bfbe134d303713784 khác nhau; mỗinguồnthường/forgedcùngkey; actualRateLimitpkcũngtách, mộtXFF. Probeđãgỡ/unitstop, CloudFrontCIDRtimerdisabledkhôngcầnchoingresstrực tiếp.
- Production304MP3SHAmatchgốc/14podcastRange206/cặpaudioRange206;16bài80câu145âmA7podcast43captions; browsermixready4/errornull/time13,79s. Giọng/nhạc/ngườihọcnguyên; synthetic1accounttestđãdisabled/trảlearner/revokesessions-tokens/audit, giữattempt/progresschínhfixture. ChưaduyệtchuyênmônkhôngcamkếtđủHSK4.
- Backupmới20261021T142037Z-2fff33b7.sqlite.enc SHA82a5c4fde0b591f84c1ace70e43252b1ca5a0c479e97c9a4a4549a71393a0d5a; offsitecopy/decrypt/integrity/FK/inventoryđạt21:20. VMdailybackupactive/WindowsSchedulerhiệncó. SESGRANTED/Sendingtrue; SMTPdiagnosticcanonicalaccepted.
- Runbookbằngchứng/rollback: docs/REC07_DIRECT_INGRESS_RESULT.md; privateartifacts .local/production-recovery/rec07. Khôngnewpaidresources/domain/upgrade. Rủirocònlại: sslip.iotạm, singleVM, RAMlimiterresetkhi restart, NATchung, trafficcostcầntheodõi; khôngphảiblockerREC07.
- Đangchuẩnbịcommitdocs/runbookcuối→Privatepush→CI/Amplify→VMFFops-only, khôngrestart/import/testlặp. Lượtsauthựchiệntừcheckpointnày, khôngdùngtrạngtháichờduyệtcũ. .codegraphowneruntrackedgiữnguyên.
## REC-07 — đồng bộ bàn giao hoàn tất — 2026-10-21T21:39:12.0982954+07:00

- FinalHEAD **b9d8463e5ee71ff90ee03dd0eff71fba9716d3b9** local/PrivateGitHubmain/Lightsailkhớp; CI **39617833990 SUCCESS** https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39617833990 . Runtimee25d6c5khôngđổisau51tests; bảncuốichỉ10filedocs/README. VMFFbundleSHAe88c7753c38d59870fbaada7a368fe5ddfc48f14b87a5dec3158f1a034bb7cae/prereq/pins/clean/diffguard/Caddycmpđạt, khôngrestart/import/DB/testlặp.
- AmplifybảnrollbackgầnnhấtđãđọcDeployment10SUCCEEDđúnge25; bảnbàngiaodocskhôngépbuildmới. Ruleshiện302canonical, APIcũ302fixed410, khôngcònexternalrewrite. CanonicalHTTPSlive/serviceactive; rootCaddyfilekhớptemplatepureTCP. AWSCLIlogoutđãxóacachedsession, khôngđưaAWScredentials lênVM.
- REC07DONEbằngbằngchứngmulticlientSAUfullrollbackvàtáicutover21:30; toànbộcriticalgatespassed. Tàikhoảntestđãdisabled/revoke/trảlearner, credential/tokenfixturetrêniosPCđãdọnriêng; khôngđụngSMTP/key/DBdữliệuthật. Backupfresh/offsiteverify21:20vẫngiữ.
- Hồsơ docs/REC07_DIRECT_INGRESS_RESULT.md đãtrênPrivateGit+VM. Kếtquảcuốicùngnàylưulocal, khôngpushchỉđểkíchnhiệubuildlặp. Khôngcònprobe/test/deploy/CIrunningcầnchờ; .codegraph owneruntrackedgiữnguyên.
- Việctiếptheo khôngthuộcblockerREC07: theodõitraffic/credit, humanreviewhọcliệu, kếhoạchdomainổnđịnhkhichủdựánphêduyệt, backupPCphảibật/login/Internet. Khôngtựmuadomain/tạoresource/nângplan.

## DOMAIN-01 — staging — 2026-10-21T22:25:41.9290910+07:00

Owner phê duyệt chuyển DuckDNS cùngLightsail; DNS/TLS/health đạt, staged2origin/CaddyTCPonly; SESverify/reset/cookie/CSRF/CMS/progress và304MP3SHA/Range đạt; Windows+AWS distinctIP/buckets/forged ignored. Local51tests/lint/build/typecheck/smokePASS. Chưa cutover, giữsslip/Amplify nhưcũ. Rootprivate rollback domain-duck-20261021, tài liệu docs/DOMAIN_MIGRATION.md. Tiếp: browsermobile/CMS, thửrollback/restage, deploycanonicalstatic, cutover302+postgates+backup+PrivateCI. KhôngthaySQLite/SMTP/IAM/media.

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

## DOMAIN-01 — bàn giao đã đồng bộ — 2026-10-21T22:38:29.3502816+07:00

- FinalHEAD **eb18b321cd4f3a820591a91acc537a8cfc473dff** khớp local/GitHub Private main/Lightsail; [CI39627082548 SUCCESS](https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39627082548). Frontend release3b39c11 giữ nguyên sau nghiệm thu; commit cuối chỉ tài liệu, VM cập nhật FF-only, không restart/import/test lặp.
- Canonical https://hanngulab.duckdns.org/ hoạt động; sslip/Amplify302, APIcũ410; REC07 hai mạng đã đạt sau cutover, probe dừng/gỡ. SMTP/non-origin env byte nguyên, Caddy khớp template, services active; mọi hàng gốc14bảng còn nguyên/integrity/FK đạt.
- Backup20261021T153300Z-fa88e3dc.sqlite.enc đã sync/restore offsite22:33(+07). Fixture/password/token tạm đã thu hồi/dọn riêng; AWSCLI đã logout. Không còn công việc triển khai/test/CI đang chờ.
- Hồ sơ chính docs/DOMAIN_MIGRATION.md đã trên PrivateGit và VM. Checkpoint kết quả cuối này lưu cục bộ, không push chỉ để kích hoạt CI/build thêm. .codegraph của chủ dự án vẫn untracked, không stage/chỉnh.
- Công việc ngoài phạm vi migration: theo dõi DNS/DuckDNS, tải và credit, backupPC, duyệt chuyên môn học liệu; không coi migration là hoàn chỉnhHSK4.


## CLEAN-01 IN_PROGRESS — 2026-10-22T15:06:17.9379655+07:00

Chủ dự án yêu cầu dọn file phát sinh/ảnh/âm thanh không dùng và chat. Đã đối chiếu CodeGraph, catalogs/CMS local và checksum; plan riêng .local/cleanup-20261022/plan.json khoảng6GiB. Giữ nguyên304MP3 hiện hành, ảnh UI đang dùng, nguồn/PCM/nhạc/modelKokoro/ASR, SQLite/local+production, credentials/offsite và2backupmedia365file đã kiểm hash. Chỉ xóa modelclone/MOSS không dùng, cache/build/test, mẫu thất bại, media ngoài catalog/CMS và snapshotmedia trùng; .codegraph/.git/node_modules không đụng. Pending docs/domain checkpoint đang có được giữ. Tiếp: xóa theo allowlist/absolute-path preflight, kiểm hash+DB+media/source refs, dọn stagingserver có chứng cứ nếu an toàn, viết bàn giao ngắn cho chat mới. Không push/deploy source ở mốc dọn.



## CLEAN-01 — dọn file hoàn tất, còn giới hạn bổ sung — 2026-10-22T15:14:25.9381210+07:00

Đã xóa22.370file/6,470GiB local và19file/30,53MiB staging server theo allowlist;383file bảo vệ/304MP3/12ảnh vàSQLite nguyên hash/digest,365file backup giữ lại đã kiểm hash. npm run podcast:check7tập14MP3 đạt; productionhealth16bài7podcastRange206đạt. Không sửa logic/restart/push/deploy, không xóa DB/credential/CodeGraph/Git/offsite/rollback. Bộ duyệt tự động chặn bước dọn bổ sung script cũ và thư mục trống (blocked by policy), nên giữ nguyên. Bàn giao docs/START_HERE.md; báo cáo docs/CLEANUP_2026-10-22.md; bằng chứng .local/cleanup-20261022. Chuẩn bị xử lý xóa chat bước cuối; chưa ghi đã xóa khi chưa có kết quả.

Kết quả cuối về chat: đã thử đúng UUID của cuộc trò chuyện hiện tại bằng codex delete --force; CLI trả lỗi nguyên văn failed to delete session (exit1), nên chat CHƯA bị xóa. Không sửa/xóa thủ công database hoặc transcript của Codex và không đụng chat khác. Dọn file chính DONE; phần xóa chat và dọn script/thư mục bổ sung còn BLOCKED bởi kết quả CLI/bộ duyệt tự động. Bản bàn giao đã lưu, cleanup commit ea16da5 chưa push.

DOC-AWS-01 DONE — 2026-10-22T15:33:31.1471397+07:00: tạo docs/AWS_DEPLOYMENT_SHORT.md, bản ghi tối giản từ offline lên AWS, lỗi và cách xử lý theo hồ sơ20–22/10. Chỉ tài liệu; không sửa mã, dữ liệu hoặc AWS, không chạy lại test/build, không push.


DOC-AWS-02 DONE — 2026-10-22T15:56:29.1054932+07:00: tạo docs/AWS_DEPLOYMENT_REPORT.md:8giai đoạn, lỗi/nguyên nhân/cách khắc phục, lỗi thao tác, checklist8bước và prompt tái sử dụng. Phân biệt cấu hình Amplify.next với exportout, ghi kiến trúc cuối thayproxycũ. Chỉ tổng hợp hồ sơ, không triển khai hoặc kiểmAWS lại, không push.
