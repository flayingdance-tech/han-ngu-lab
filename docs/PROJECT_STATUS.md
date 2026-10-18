# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-18 20:44 +07:00, Asia/Bangkok. Workspace: D:\Hán Ngữ Lab.

## Sự cố chất lượng giọng — ưu tiên AUDIO-08

Chủ dự án đã nghe và từ chối bộ nhân bản do méo/sai/không ra âm. D-027 cho phép giọng khác. Bộ cũ tạm dừng cả preview bằng disabledReason; đang thử Kokoro Mandarin ở workspace riêng.

## Mốc tích hợp kỹ thuật trước sự cố

- AUDIO-06 DONE về tích hợp kỹ thuật: 145 đoạn, 290 MP3 thường/chậm, đủ các nút nghe hiện có trong 16 bài preview, hội thoại và sổ từ vựng. Không đồng nghĩa đã nghiệm thu phát âm hoặc hoàn thành HSK4.
- Nguồn của bộ cũ (D-026, cập nhật bởi D-027): bản chỉ tách nhạc, không đổi pitch/formant; quyền dùng/nhân bản đã được chủ dự án xác nhận. Master .local/audio-preview/vocals.wav; reference 4.11 giây, metadata/hash tại .local/voice/reference.json.
- Native OmniVoice từ VoiceStudio source pinned, CPU offline; website phát MP3 cùng origin, không API tạo giọng có phí hoặc giọng thiết bị thay thế. Không cài full desktop GUI/backend VoiceStudio.
- Finalizer .local/voice/finalize-report.json thành công lúc 20:22:49 +07:00: 145 entries/290 files, build và static export đạt, 12 prototype đã chuyển vào private, không reference/model/prompt trong out. Render/finalizer đã kết thúc; không chạy lại nếu không có thay đổi.
- Backup/restore thực: .local/voice-backups/2026-10-18T13-21-20-771Z và .local/voice-restore-check cùng timestamp, 297 file khớp SHA256. Có master/profile riêng; không chứa DB/model/runtime/WAV cache. Đây là backup cùng máy, chưa ngoài máy/AWS.
- Signal QA: decode toàn bộ 290 MP3; tần số mono 24 kHz, dữ liệu hữu hạn, mức đỉnh, thời lượng và tỷ lệ chậm/thường đạt ngưỡng kỹ thuật; issues 0. Inventory public: docs/reports/audio-inventory.json. Cache no-op: generated0/pending0/cacheHittrue.
- ASR 8 mẫu có nhiều từ/câu ngắn nhận sai hoặc trống; F0 bốn thanh trước đó chưa rõ. Mọi audio vẫn unreviewed; hiện đã chặn cả preview do phản hồi chất lượng. AUDIO-02 còn đánh giá nghe; AUDIO-07 TODO duyệt chuyên môn. Không gọi kết quả ASR là kiểm định thanh điệu.
- Pinyin phân biệt key nhưng chưa điều khiển trực tiếp phát âm model. MOSS prototype có dấu hiệu thiếu cuối câu, chưa thay engine chính. Hướng dẫn: VOICE_RUNBOOK.

## Kiểm thử và vận hành local

- Unit/integration 18/18; typecheck/lint đạt mốc mã tích hợp. Audio E2E mới 32319 đạt 4/4 desktop/mobile không retry; learning/theme mốc trước 14 ca đã đạt qua sửa/chạy lại. Python file-lock regression 2/2; phục hồi WAV thật 35192 và từ chối đổi profile với manifest SHA256 giữ nguyên đều đạt. Xem TEST_REPORT/WORK_LOG để biết các lượt lỗi trước.
- Đã sửa Windows WinError5 bằng atomic replace có retry hữu hạn, lưu cả batch WAV trước encode và phục hồi WAV cùng fingerprint. Mã mốc f7cf56e, 9fe0a0d; bộ asset cuối theo Git log. Không xóa/reset dữ liệu để sửa.
- Preview http://localhost:3000/; sau build trang/API catalog/MP3 thường và chậm đều HTTP200 lúc20:23. API listener 10460, web 1472 (launcher3296/2988); phải kiểm tra PID/listener trước khi khởi động lại. Không dump log auth; .local/dev-*-resume.log/.err.
- Không có .codegraph/ ở lần kiểm tra, không tự index. AGENTS 96 dòng. Giữ .local/ và tài khoản/DB. Model/reference/prompt không vào Git/public; chỉ audio tổng hợp và manifest được commit.
- pip check runtime đạt; npm audit --omit=dev hiện 0 vulnerability. Cảnh báo 5 high trong dev mốc cũ chưa rà lại; không kết luận toàn hệ thống đã an toàn.

## Phần dự án còn lại

- UI-07 DONE: tối giữ nữ lo-fi study-night.webp, chỉ ẩn trẻ chibi; sáng giữ nguyên. UI-05 cần asset gốc riêng nếu muốn trùng hoàn toàn collage.
- Backend local: Express/SQLite, auth email mô phỏng, phân quyền, chấm server/idempotency, progress/SRS, CMS revision/rollback/import JSON và editor, backup AES-GCM; nút đăng xuất đã kiểm thử.
- 16 bài draft, 94 word IDs, 80 câu hỏi, 39 ví dụ: chưa đủ giáo trình HSK4 hoặc duyệt chuyên môn. Podcast chưa có thư viện hoàn chỉnh. Không tự publish.
- Cloud chưa truy cập/tạo tài nguyên/deploy; production còn cần HTTPS/email. Backup ngoài AWS và diễn tập migration chưa thực hiện. Bản local không chứng minh các việc này.
- Phạm vi: nhập môn–HSK4, miễn phí 18+, AI tùy chọn, thay giáo trình/mở rộng HSK5–6; tối đa 150 USD/6 tháng gồm credit, không tiền trả thêm. Credit 200 USD/hạn còn 5 tháng 20 ngày là chủ dự án cung cấp, chưa kiểm tra Console.
- Chưa hoàn thành toàn dự án. Bước tiếp: NEXT_STEPS; lịch sử và bằng chứng: WORK_LOG/TEST_REPORT.


Cập nhật ưu tiên 2026-10-18 20:39 +07:00: chủ dự án từ chối chất lượng nghe bộ OmniVoice hiện tại (D-027). AUDIO-08 IN_PROGRESS: thử preset Mandarin Kokoro v1.1-zh, offline, mẫu riêng; chưa chọn giọng hoặc thay 145 đoạn. Manifest có disabledReason, chặn cả preview để không tiếp tục phát âm sai. Các kiểm thử kỹ thuật trước không phải bằng chứng đạt chất lượng nghe.


### 2026-10-18T20:49:20+07:00 — mẫu thay thế đã tạo, chờ đánh giá nghe
- Kokoro0.9.4/misaki0.9.4, CPU FP32, speed1.0, không pitch/formant; model SHA256 khớp bản chính thức. Hai giọng A zf_001 (31.5s), B zf_002 (34.4s); file WAV/MP3 ở .local/voice-candidates/kokoro-zh. Hai MP3 decode24k mono, peak0.473/0.442, hữu hạn.
- 12 mẫu câu/từ ghép +12 mẫu từ đơn đã sinh và ASR; báo cáo đã bỏ đường dẫn riêng ở docs/reports/audio-candidates.json. G2P 还书 đã sửa huán shū, vẫn giữ 还要 hái yào; assert đạt. 过 trong giáo trình hiện là trợ từ guo thanh nhẹ, khớp G2P5; không suy ra mọi ngữ cảnh đều thanh nhẹ.
- ASR: câu phần lớn có nội dung đầy đủ, hai giọng nhận 姐姐 thành 杰杰 trong câu; B nhận sai cụm 妈妈麻烦马路; từ đơn 谢谢/姐姐/准备/认真 nhận đúng, 你/过 nhận sai. Đây là triage, chưa biết lỗi nào do ASR hay âm thanh; không đủ chứng nhận thanh điệu/độ tự nhiên.
- Đã gửi hai mẫu nghe và hỏi lựa chọn âm sắc; chưa có phản hồi tại checkpoint này. Không chọn thay người dùng hoặc tự đánh dấu approved. AUDIO-08 IN_PROGRESS; mẫu khả thi nhưng chưa nghiệm thu. Giữ disabledReason ở public và out, đều145entries; không đổi UI/DB.
- Lệnh render/QA session99406,72255 đã kết thúc; không cần chạy lại. Tiếp: nhận phản hồi mẫu; nếu vẫn không đạt, thử engine khác. Nếu chọn được, kiểm soát từng Pinyin/đa âm rồi tái tạo thư viện bằng ID riêng; vẫn cần duyệt chuyên môn.
