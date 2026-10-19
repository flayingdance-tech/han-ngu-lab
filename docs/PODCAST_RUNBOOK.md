# Podcast — vận hành và bàn giao

Cập nhật: 2026-10-19, Asia/Bangkok (+07).

## Phạm vi

Bảy tập ngắn tự biên soạn: gặp đồng nghiệp, hẹn họp, nhờ hỗ trợ, gọi đồ uống, hỏi đường, báo tiến độ, hẹn cuối tuần. Mỗi tập có 10 đoạn, chữ Hán/Pinyin/nghĩa Việt, khoảng nghỉ luyện nói. Giọng A `Kokoro-82M-v1.1-zh / zf_001`, CPU FP32 offline, không đổi pitch/formant. Cùng một giọng cho các vai, không giả lập nhiều người nói.

UI có nhớ tập/vị trí, tốc độ/nhạc/nghĩa Việt, yêu thích, tìm kiếm, ±10 giây, lặp một tập/nghe liên tục, chọn tập chưa nghe và tải lời thoại kèm credit. Lưu trong localStorage `hnl-podcasts-v1`, không đồng bộ tài khoản; dữ liệu hỏng quay về mặc định, chặn lưu trữ vẫn nghe được. Đổi tập bằng danh sách dừng bản cũ; tự phát tập kế chỉ khi chọn Nghe liên tục. Điện thoại vuốt danh sách ngang để trình phát không bị đẩy xuống sau bảy thẻ.

Đây là bản nháp địa phương, chưa được người có chuyên môn duyệt. API live trả 404 cho cả danh mục và file. Không đưa file nháp vào `public/` hoặc `out/`. Cần thêm quy trình duyệt/xuất bản trước khi mở podcast công khai.

## Nguồn nhạc và quyền sử dụng

- Theo quyết định cuối của chủ dự án: **lo-fi chill học tập**, thay lựa chọn Chinese ambient/guzheng trước đó.
- **Watching Rain Together — Pamela Yuen**, thể loại Ambient / Lo-fi Instrumental trên trang tác giả ở FMA, không lời.
- Trang nguồn: https://freemusicarchive.org/music/pamela-yuen/paws-for-a-while/watching-rain-together/
- Tác giả và quyền sử dụng: https://pamelayuen.blogspot.com/p/cc-by-4.html ; profile https://linktr.ee/pamelayuen
- Download được lấy từ `fileUrl` trong metadata HTML chính thức, lưu `.local/podcasts/lofi/track.json`; không tải từ bản reupload.
- **CC BY 4.0**: https://creativecommons.org/licenses/by/4.0/ ; được chia sẻ/phối lại, kể cả thương mại, với ghi công/liên kết giấy phép/thông báo thay đổi. Không gọi đây là tác phẩm hết bản quyền.
- SHA256 bản tải: `ca7820469ffec765553f010f321bec705708ea8e9c93d230917bd26810e05f2b`.
- Chọn bản không lời, nền chậm/ít gây phân tâm theo thể loại tác giả. Đây là lựa chọn biên tập, không phải khẳng định đã được duyệt nghe độc lập.
- Chỉnh sửa: trích đoạn, loop crossfade 2 giây, low-pass 3 kHz, RMS nền mục tiêu .014/peak giới hạn .05, duck còn 30% khi có lời, fade đầu/cuối. Giọng nói không đổi pitch/formant. Credit UI/metadata bản mix/lời thoại tải; giữ link nguồn, tác giả, license và thông báo chỉnh sửa.
- Chứng cứ nguồn: `.local/podcasts/lofi/source.html`, `track.json`, `artist-license.html`; license đầy đủ `.local/podcasts/CC-BY-4.0.txt`; cấu hình `content/podcast-music.json`.
- Nhạc dùng làm nền podcast miễn phí trên web; không đăng nhạc lên Spotify/dịch vụ phân phối/Content ID, không bán lại nhạc độc lập. Tác giả cho phép podcast và yêu cầu ghi công; nguồn gốc được lưu trong backup.
- Bản Almost in F cũ giữ ở backup trước đổi, không còn là nhạc được chọn trong catalog hiện hành.

## Tạo lại và kiểm tra

```powershell
& '.local/kokoro-venv/Scripts/python.exe' -B -X utf8 scripts/podcast-render.py
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npx.cmd playwright test tests/e2e/podcast.spec.ts
npm.cmd run build
npm.cmd run podcast:check
npm.cmd run podcast:backup
```

- Nguồn học liệu: `content/podcasts.json`. Không sửa revision đã xuất bản; hiện các tập đều v1 nháp.
- Model/runtime dùng lại cấu hình giọng A; xem `docs/VOICE_RUNBOOK.md`. Không tải model mới hoặc gọi API trả phí khi nghe.
- Renderer khóa file để không chạy hai bản cùng lúc, cache mỗi đoạn theo fingerprint synthesis riêng với fingerprint mix; thay nhạc không sinh lại giọng. Xác minh model/music hash, báo lỗi nếu phoneme dài/thiếu/không hỗ trợ. 有空 và 长时间 có phrase override theo ngữ cảnh. Lần đổi lo-fi tái dùng 30 đoạn cũ, sinh 39 đoạn mới và dùng cache cho 1 đoạn lặp; 3 MP3 voice cũ giữ nguyên checksum. `render-summary.json` lưu số lượng thực.
- Đầu ra `.local/podcasts/rendered/catalog.json` gồm timestamp, transcript/timing, profile, URL, hash và QA của cả hai bản. API chỉ phục vụ filename trong catalog.
- Hai bản cùng timeline; đổi nhạc giữ vị trí và tốc độ. Tốc độ trình duyệt bật `preservesPitch`.
- QA yêu cầu MP3 peak <0.99, true peak <-1 dBTP, loudness giữa -26 và -14 LUFS; đo thực từng file. Không thay thế kiểm tra nghe và duyệt chữ/Pinyin.
- Không chạy build đồng thời E2E. Nhật ký dưới `.local/podcasts/`; lỗi và phòng tránh trong `docs/ERRORS_AND_FIXES.md`.

## Backup / khôi phục

Backup cần giữ `content/podcasts.json`, mã renderer, tài liệu nguồn/license và toàn bộ `.local/podcasts/rendered`. Nếu cần tái tạo không tải lại: giữ MP3 nhạc gốc, model, runtime requirements và cache WAV. DB người học không bị đổi bởi tính năng này; backup DB vẫn là quy trình riêng.

Kiểm tra khôi phục bằng so sánh SHA256 từng file, rồi chạy API local đọc catalog. Backup cùng máy chỉ là checkpoint, chưa phải bản ngoài AWS/ngoài máy.

`podcast:backup` tạo snapshot timestamp mới, sao chép sang thư mục restore-check khác và đối chiếu toàn bộ hash. Không xóa backup cũ. Kết quả mới nhất: `.local/podcasts/verification.json`. Khôi phục catalog và 14 MP3 về `.local/podcasts/rendered` trước khi mở preview; giữ nguyên tên hash. Bản backup này chưa chứa model/runtime đầy đủ hoặc DB.

## Đối chiếu ASR bổ sung

Chạy `scripts/podcast-asr-check.py` bằng `.local/audio-preview/venv/Scripts/python.exe -B -X utf8`. Công cụ decode MP3 có nhạc thành float32 16 kHz, dùng Whisper local, không đưa transcript mong đợi vào prompt. Kết quả mới `.local/podcasts/lofi/asr-triage.json`. Bản cũ ở `.local/podcasts/asr-triage.json` chỉ có ba tập trước đổi nhạc. Phân biệt chữ đồng âm/gần âm với chất lượng phát âm; không lấy ASR làm quyết định approved.
