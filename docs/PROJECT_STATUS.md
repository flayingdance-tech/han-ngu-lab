# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-20T08:13:28.5011329+07:00, Asia/Bangkok (+07). Workspace D:\Hán Ngữ Lab.

## Hiện hành: podcast radio D-041 và phụ đề D-042

- Chủ dự án đã chốt giọng kể v9 và nhạc piano hiện hành; tăng nhẹ giọng1.3dB, áp dụng trực tiếp, không làm mẫu hoặc hỏi duyệt mẫu nữa. D-033 đã bị thay thế trong phạm vi này.
- 7 tập radio/14MP3, mỗi tập87.060s: tuần mới, thành ngữ, nhật ký, văn hóa trà, thơ, truyện cuối tuần, tâm sự buổi tối. Ngày19–25/10/2026 có thứ tương ứng; đây là thư viện soạn sẵn, không tự sinh vô hạn.
- Tập đầu tái dùng nguyên WAV v9, chỉ nhân gain1.3dB. 6 tập mới/36 đoạn dùng cùng Kokoro zf_001, preset kể chuyện, EQ, model/speaker pinned; không đổi pitch/formant hoặc nhắc câu thường/chậm.
- Nền v8 giữ nguyên PCM trên cả7tập, gồm âm lượng/nhịp/cao độ/điểm nối/thời lượng. SHA bbcd3e0f2d936b8cc6ce5d4597a4dd44cff130a4fb5e6612179439028548878b. `docs/reports/podcast-radio-integrity.json` kiểm WAV lưu thực, residual<1e-7; tập đầu đối chiếu voice boost cũng<1e-7.
- Nguồn hiện hành: content/podcast-radio.json, podcast-radio-music.json, radio-storyteller.json. `npm run podcast:render` dùng scripts/podcast-radio-render.py. Không chạy renderer hội thoại/lo-fi cũ để ghi đè.
- D-042 (20/10): khôi phục 43 đoạn phụ đề/7 tập: chữ Hán lớn, Pinyin và nghĩa Việt bên dưới player. Tô sáng theo đoạn đang nghe, tự cuộn trong khung, bấm đoạn để tua/phát; tùy chọn hiện nghĩa Việt và tự cuộn. Giữ seek, nhạc/giọng riêng, tốc độ, yêu thích/tìm, resume, lặp/nghe liên tục; không đổi 14MP3.
- Nội dung/phonetics vẫn unreviewed. Nhạc chủ dự án cung cấp là owner-supplied/owner-provided-unverified, không gán CC BY; quyền phát hành công khai chưa xác minh. API live chặn draft, local preview phát được. API trả phụ đề đã biên soạn, không lộ profile/production.

## Kiểm tra và sao lưu

- D-042: typecheck/lint/build exit0, unit/API22/22 và E2E podcast10/10 desktop/mobile/cả hai theme đạt. Log subtitles-*.log; audio bài học không đổi (D-041 trước đó E2E6/6).
- 14MP3 decode/peak/LUFS/hash qua QA renderer. Radio audit xác nhận giọng tập đầu chỉ tăng gain, toàn bộ nền không đổi. Xem `.local/podcasts/radio-integrity.log` và report JSON.
- ASR7/7 hoàn tất; triage theo đoạn không flag mất nội dung, min character coverage.85 trở lên. Có nhầm chữ/âm và bịa lời trên outro nhạc (kể cả timestamp vượt độ dài file); raw giữ nguyên, `podcast-asr-review.py` tách music-only bằng thời gian và WAVvoice. Không coi ASR là duyệt thanh điệu/cảm xúc; 好→号 còn cần người nghe.
- Export bài học145mục/290MP3 SHA khớp, privateLeaks0. Không đổi bộ âm bài học.
- Backup/restore mới39file hash khớp: `.local/podcast-backups/2026-10-20T01-12-20.407Z` và `.local/podcast-restore-check/2026-10-20T01-12-20.407Z`. Bao gồm nguồn/preset/renderer, nhạc gốc/PCM, WAVv9, catalog/14MP3, QA/ASR/runbook. Cùng máy, không offsite/model/runtime/DB đầy đủ.
- Trước thay đã backup/restore33file cũ tại timestamp2026-10-19T15-21-57.954Z; không xóa asset cũ. Chỉ file trong catalog mới được route phục vụ.
- Log kiểm tra `.local/podcasts/radio-*.log`; thông tin nguồn/quy trình `docs/PODCAST_RUNBOOK.md`, lỗi `docs/ERRORS_AND_FIXES.md`.

## Vận hành local

- Web http://localhost:3000/, API3001. Sau build root200, catalog7radio và MP3 Range206; không lộ production/profile. Chưa triển khai Internet.
- API launcher10644, web launcher11608; listener con có thể đổi, kiểm PID/port trước restart. Logs subtitles-api.log/.err và subtitles-web.log/.err. Không dump stdout auth/email mô phỏng.
- Render/ASR không chạy lại trong D-042; chỉ áp dụng metadata. Typecheck/lint/unit/E2E/build xong, không còn tác vụ kiểm tra cần chờ; kiểm PID/log trước chạy lại. 14MP3 giữ nguyên theo subtitles-update.json, audit nhạc/giọng cũng đạt.
- Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. .codegraph/ không có, không tự index. Sáng giữ thiết kế pastel, tối các tab khác giữ nữ lo-fi/ẩn chibi như trước.

## Bộ âm bài học và phạm vi dự án còn lại

- D-028: giọngA hnl-kokoro-zf001-v1,145mục/290MP3 thường-chậm. Dùng file offline, không browser TTS/API trả phí. Lexicon/đa âm theo VOICE_RUNBOOK; AUDIO-07 còn duyệt chuyên môn. Bộ OmniVoice bị từ chối đã được lưu/quarantine, không quay lại.
- 16 bài draft/94 word IDs/80 câu hỏi/39 ví dụ chưa đủ HSK4, chưa duyệt chuyên môn. Không quảng cáo hoàn thành toàn giáo trình.
- Backend local Express/SQLite có auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS và CMS revision/import JSON/rollback/editor. Còn reviewer/publication, CSV/media, audit/users và kiểm tra hết phiên/lỗi mạng.
- POD-02 còn CMS/người duyệt/quyền nhạc để phát hành công khai; POD-04 chỉ DONE kỹ thuật local theo preset đã chốt.
- Cloud/email/HTTPS chưa cấu hình; backup ngoài AWS/ngoài máy và migration toàn bộ chưa diễn tập. Ngân sách150USD/6tháng gồm credit, không chi thêm; số dư/hạn AWS chủ dự án báo chưa kiểm Console.
- Website miễn phí18+, AI tùy chọn. Chưa hoàn thành toàn dự án hoặc kiểm toán an toàn toàn hệ thống.
