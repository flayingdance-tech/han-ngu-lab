# Nhật ký công việc và bằng chứng

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
