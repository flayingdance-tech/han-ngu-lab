# Podcast radio — vận hành và bàn giao

Cập nhật: 20/10/2026, Asia/Bangkok (+07). D-041 cho phép áp dụng trực tiếp cấu hình đã chọn, không cần làm mẫu hoặc hỏi chốt lại.

## Cấu hình hiện hành

- Nguồn: `content/podcast-radio.json`, 7 tập radio một người dẫn cho ngày19–25/10/2026: tuần mới, thành ngữ, nhật ký, văn hóa trà, thơ, truyện cuối tuần, tâm sự buổi tối.
- Giọng A Kokoro zf_001 FP32 offline, cùng model/speaker với mẫu v9. Nhịp kể/ngắt theo `content/radio-storyteller.json`, không pitch/formant, không đọc thường/chậm lặp và không mục cụm từ cần nhớ.
- Tập đầu dùng nguyên WAV lời v9, chỉ tăng1.3dB. Các tập khác dùng cùng preset và mức tăng. Không gọi API tạo giọng khi người dùng bấm nghe.
- Nhạc giữ nguyên PCM bản piano v8, cùng mức âm, cao độ, nhịp, điểm nối và thời lượng87.060s. Không duck theo lời, không master gain chung. Renderer kiểm hash nguồn và residual mix để phát hiện thay nhạc.
- Nhạc: `不如见一面 · Bản piano`, file do chủ dự án cung cấp. Metadata là `owner-supplied / owner-provided-unverified`; không gán CC BY hoặc giấy phép của nhạc cũ cho bản này. Giấy phép công khai của file này chưa được xác minh.
- Các tập/học liệu vẫn unreviewed. Việc chủ dự án chọn âm sắc không phải duyệt chuyên môn chữ Hán/thanh điệu hay giấy phép nhạc. API production còn chặn podcast draft; chưa phát hành cloud.
- Bộ bài học145mục/290MP3 vẫn dùng giọngA hiện hành; không chèn nhạc hoặc đổi nhịp kể vào mục từ/câu luyện phát âm.

## Giao diện

D-042: có phụ đề chữ Hán, Pinyin và nghĩa Việt dưới player cho cả7tập/43đoạn; tô sáng theo đoạn, tự cuộn trong khung và bấm nghe lại. Có tùy chọn hiện nghĩa Việt và dừng tự cuộn; không ảnh minh họa hoặc tải lời thoại. Giữ native audio, nhạc/giọng riêng, tốc độ có preservesPitch, từ đầu/±10s, tập trước/sau, yêu thích, tìm kiếm, lặp một/nghe liên tục và nhớ vị trí trên thiết bị.

LocalStorage `hnl-podcasts-v1` giữ dữ liệu nghe cũ; ID mới không ghi đè tiến độ của các tập hội thoại cũ. Gợi ý chọn tập chưa nghe, sau khi hết thư viện mới quay lại đầu. Đây là thư viện7tập có ngày soạn sẵn, chưa phải dịch vụ tự sinh nội dung hằng ngày vô hạn.

## File và lệnh

- `scripts/podcast-radio-render.py`: renderer hiện hành; `npm run podcast:render` trỏ tới đây.
- `content/podcast-radio-music.json`: config nền, hash và bản nhạc gốc phục vụ backup.
- `.local/podcasts/music/radio-piano-bed.wav`: PCM nền đã chọn, SHA256 `bbcd3e0f2d936b8cc6ce5d4597a4dd44cff130a4fb5e6612179439028548878b`.
- `.local/podcasts/music/owner-piano.mp3`: sao chép file gốc, không sửa file trên ổD.
- `.local/podcasts/radio-pilot/pilot-v9-voice.wav` và `report-v9.json`: nguồn bất biến của tập đầu.
- `.local/podcasts/rendered/catalog.json`: catalog private, metadata/timing/profile/QA. API dùng Zod để bỏ profile/production trước khi trả về. API trả phụ đề đã biên soạn; không trả production/profile.
- `.local/podcasts/rendered/*-mix.mp3` và `*-voice.mp3`: file có fingerprint; chỉ URL trong catalog được API phục vụ. Không đặt draft vào public/out.
- `.local/podcasts/radio-render-progress.json`: checkpoint số tập đã qua QA; API không đọc file này. Catalog chỉ được đổi atomically sau khi toàn bộ tập hoàn thành.
- `.local/podcasts/radio-asr-triage.json`: ASR final MP3 chỉ để tìm lỗi, không duyệt ngữ âm/cảm xúc.

```powershell
npm.cmd run podcast:render
& '.local/kokoro-venv/Scripts/python.exe' -B -X utf8 scripts/podcast-asr-check.py
& '.local/kokoro-venv/Scripts/python.exe' -B -X utf8 scripts/podcast-asr-review.py
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npx.cmd playwright test tests/e2e/podcast.spec.ts tests/e2e/audio.spec.ts
npm.cmd run build
npm.cmd run podcast:check
npm.cmd run podcast:backup
```

ASR có thể bịa chữ trên outro nhạc; giữ raw và chạy podcast-asr-review.py để tách phần ngoài cửa sổ lời, kiểm WAV giọng và coverage từng đoạn. Không coi kết quả này là duyệt phát âm/cảm xúc.

Không chạy build đồng thời E2E. Không render lại nếu chưa có thay đổi nguồn; kiểm progress/log và tiến trình trước khi tiếp tục. Cache phoneme/voice/speed tái dùng nếu một lần render bị ngắt; không đổi nhạc hoặc giọng để chữa lỗi độ dài, hãy rút gọn phần văn bản draft.

`content/podcasts.json`, `content/podcast-music.json` và renderer cũ là nguồn hội thoại/lo-fi đã bị thay thế; không chạy renderer cũ để ghi đè catalog hiện hành. Mẫu v1–v9 giữ để đối chiếu, không cần gửi lại mẫu để xin phép sau D-041.

## Backup và khôi phục

`podcast:backup` chép snapshot timestamp riêng và khôi phục thử vào `.local/podcast-restore-check`, so SHA256 từng file. Bao gồm nguồn radio/preset/config, renderer/helpers/requirements, runbook/sổ lỗi, nhạc gốc/PCM, WAV nguồn v9, catalog, summary, ASR và14MP3. Không bao gồm toàn bộ model/runtime hoặc DB. Đây là checkpoint cùng máy, chưa offsite.

Trước đổi radio đã backup/restore33file cũ ở timestamp `2026-10-19T15-21-57.954Z`; không xóa các bản nhạc/file cũ. Các asset không còn trong catalog không được route media phục vụ.

Khôi phục catalog và MP3 theo đường dẫn inventory, giữ đúng hash. Với bản radio, khôi phục thêm nguồn preset/nhạc/WAV nếu cần tái tạo; kiểm npm run podcast:check trước mở web. DB tài khoản/tiến độ không đổi; backup DB là luồng riêng.

## Hạng mục còn lại

Duyệt chuyên môn, CMS reviewer/publication, xác minh quyền nhạc để công khai, cấu hình cloud/email/HTTPS và backup ngoài máy chưa hoàn tất. Không báo đã triển khai Internet chỉ vì local playback hoặc build thành công.


## Cập nhật riêng phụ đề (không render âm thanh)
Nguồn content/podcast-subtitles.json và podcast-subtitles.vi.json. Pinyin dùng thanh từ điển, có hiệu chỉnh hư từ; biến điệu khi nói có thể khác chữ ghi, chưa duyệt chuyên môn. scripts/podcast-subtitles.py ràng buộc hash kịch bản với bản dịch và timing production, kiểm khớp từng đoạn, sao lưu catalog rồi đổi atomically; report .local/podcasts/subtitles-update.json giữ SHA toàn bộ14MP3.
Chạy npm.cmd run podcast:subtitles để làm mới Pinyin từ kịch bản/bản dịch. Nếu đã sửa Pinyin thủ công, chạy Python scripts/podcast-subtitles.py KHÔNG có --refresh-pinyin để áp dụng nguyên nguồn đã sửa. Không chạy TTS/ASR chỉ vì sửa hiển thị phụ đề. Renderer radio cũng ghép nguồn phụ đề này khi thật sự cần tạo lại âm.
