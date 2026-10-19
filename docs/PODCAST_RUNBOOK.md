# Podcast — vận hành và bàn giao

Cập nhật: 2026-10-19, Asia/Bangkok (+07).

## Phạm vi

Ba tập ngắn tự biên soạn: gặp đồng nghiệp, hẹn họp, nhờ hỗ trợ. Mỗi tập có 10 đoạn, chữ Hán/Pinyin/nghĩa Việt, khoảng nghỉ luyện nói. Giọng A `Kokoro-82M-v1.1-zh / zf_001`, CPU FP32 offline, không đổi pitch/formant. Cùng một giọng cho các vai, không giả lập nhiều người nói.

Đây là bản nháp địa phương, chưa được người có chuyên môn duyệt. API live trả 404 cho cả danh mục và file. Không đưa file nháp vào `public/` hoặc `out/`. Cần thêm quy trình duyệt/xuất bản trước khi mở podcast công khai.

## Nguồn nhạc và quyền sử dụng

- **Almost in F — Kevin MacLeod (incompetech.com)**, ISRC USUAN1100394.
- Trang chính thức: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100394
- Metadata: https://incompetech.com/music/royalty-free/pieces.json
- Tải chính thức: https://incompetech.com/music/royalty-free/mp3-royaltyfree/Almost%20in%20F.mp3
- **CC BY 4.0**: https://creativecommons.org/licenses/by/4.0/ ; được chia sẻ/phối lại, kể cả thương mại, với ghi công/liên kết giấy phép/thông báo thay đổi. Không gọi đây là tác phẩm hết bản quyền.
- SHA256 bản tải: `9c35f03fd6a747baed3f6a7e0a39fe43483f174ad80aaad73cc18e8472c50641`.
- Chọn vì piano/bass chậm, không lời theo metadata tác giả; hạn chế tiết tấu và dải cao để không cạnh tranh với phụ âm tiếng Trung. Đây là lựa chọn biên tập, không phải khẳng định đã được duyệt nghe độc lập.
- Chỉnh sửa: trích đoạn ở các mốc khác nhau, low-pass 2.4 kHz, hạ RMS nền, duck khi có lời, fade đầu/cuối. Credit hiển thị ở UI và metadata MP3.
- Chứng cứ nguồn và bản license đầy đủ: `.local/podcasts/music-source.html`, `music-track.json`, `CC-BY-4.0.txt`. Bản tải gốc nằm ngoài public để không tăng tải web.

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
- Renderer khóa file để không chạy hai bản cùng lúc, cache mỗi đoạn theo fingerprint, xác minh model/music hash, báo lỗi nếu phoneme dài/thiếu/không hỗ trợ. Các câu 有空 và 长时间 có phrase override theo ngữ cảnh.
- Đầu ra `.local/podcasts/rendered/catalog.json` gồm timestamp, transcript/timing, profile, URL, hash và QA của cả hai bản. API chỉ phục vụ filename trong catalog.
- Hai bản cùng timeline; đổi nhạc giữ vị trí và tốc độ. Tốc độ trình duyệt bật `preservesPitch`.
- QA yêu cầu MP3 peak <0.99, true peak <-1 dBTP, loudness giữa -26 và -14 LUFS; đo thực từng file. Không thay thế kiểm tra nghe và duyệt chữ/Pinyin.
- Không chạy build đồng thời E2E. Nhật ký dưới `.local/podcasts/`; lỗi và phòng tránh trong `docs/ERRORS_AND_FIXES.md`.

## Backup / khôi phục

Backup cần giữ `content/podcasts.json`, mã renderer, tài liệu nguồn/license và toàn bộ `.local/podcasts/rendered`. Nếu cần tái tạo không tải lại: giữ MP3 nhạc gốc, model, runtime requirements và cache WAV. DB người học không bị đổi bởi tính năng này; backup DB vẫn là quy trình riêng.

Kiểm tra khôi phục bằng so sánh SHA256 từng file, rồi chạy API local đọc catalog. Backup cùng máy chỉ là checkpoint, chưa phải bản ngoài AWS/ngoài máy.

`podcast:backup` tạo snapshot timestamp mới, sao chép sang thư mục restore-check khác và đối chiếu toàn bộ hash. Không xóa backup cũ. Kết quả mới nhất: `.local/podcasts/verification.json`. Khôi phục catalog và 6 MP3 về `.local/podcasts/rendered` trước khi mở preview; giữ nguyên tên hash. Bản backup này chưa chứa model/runtime đầy đủ hoặc DB.

## Đối chiếu ASR bổ sung

Chạy `scripts/podcast-asr-check.py` bằng `.local/audio-preview/venv/Scripts/python.exe -B -X utf8`. Công cụ decode MP3 có nhạc thành float32 16 kHz, dùng Whisper local, không đưa transcript mong đợi vào prompt. Kết quả `.local/podcasts/asr-triage.json`: ba tập không thấy mất nguyên câu khi đối chiếu; 王丽 → 王立, 有 → 由, 地 → 的 là các khác biệt cần phân biệt chữ đồng âm với chất lượng phát âm. Không lấy ASR làm quyết định approved.
