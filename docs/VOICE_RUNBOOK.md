# Giọng Hán Ngữ Lab — sản xuất và phát âm thanh

Quyết định chủ dự án ngày 18/10/2026 (+07:00): dùng bản chỉ tách nhạc, không đổi pitch/formant, làm giọng chung. Chủ dự án đã xác nhận đầy đủ quyền dùng/chỉnh sửa/nhân bản giọng. Các mẫu trẻ nhẹ/vừa không phải voice master.

## Kiến trúc

- Máy sản xuất: Python CPU, import engine `omnivoice` từ source VoiceStudio tại `.local/VoiceStudio`. Không cần mở giao diện Electron hoặc chạy toàn bộ backend VoiceStudio để sản xuất batch này.
- Website: chỉ tải `public/audio/manifest.json` và MP3 cùng origin. Không cài mô hình trên hosting, không gọi API tạo giọng hoặc gửi dữ liệu người học đến AI. Không tự đổi sang speechSynthesis của thiết bị khi thiếu audio.
- Âm thường và chậm là hai file riêng; bản chậm dùng FFmpeg `atempo=0.8`, không tăng/giảm cao độ. Một giọng dùng xuyên suốt các vị trí phát hiện có: từ vựng trong bài, hội thoại và sổ từ vựng.
- Key gồm chữ Hán + Pinyin NFC để phân biệt chữ đa âm/khác thanh. Tên file có hash reference/engine/settings/key; thay profile không trộn bộ audio trước. Bản cũ giữ nguyên trên đĩa để phục hồi.
- Đây là audio tổng hợp. Kiểm tra tín hiệu/ASR không xác nhận đúng thanh điệu hoặc duyệt chuyên môn.
- Pinyin nằm trong key để không dùng nhầm file giữa hai reading; phiên bản OmniVoice này vẫn tổng hợp từ chữ Hán, chưa ép phát âm bằng Pinyin. Nghe duyệt riêng chữ đa âm và bốn thanh; không coi key đúng là phát âm đúng.

## Dữ liệu riêng và công khai

Chỉ các file audio được tạo và manifest vào `public/audio/`. Bản ghi nguồn, transcript tham chiếu, prompt nhân bản, model và runtime ở `.local/` (gitignore). Không đưa reference/private voice profile vào frontend, log phục vụ hoặc bản public.

- Master sau tách nguồn: `.local/audio-preview/vocals.wav`; cùng giọng với mẫu `02-giong-tach-nhac.mp3` đã được chọn, chưa chỉnh âm sắc.
- Reference trích đoạn trọn clause tối đa 4.2 giây (bản đang dùng 4.11 giây): `.local/voice/reference.wav`, metadata và SHA256 trong `reference.json`. Transcript do ASR tạo, giữ trạng thái chưa duyệt.
- Prompt cache: `.local/voice/prompt-<reference-hash>.pt`, lưu tensor theo định dạng của VoiceStudio; không dùng pickle bên ngoài không rõ nguồn.
- WAV trung gian: `.local/voice/generated/`; manifest phát lại nằm trong `public/audio/`.
- `docs/reports/audio-inventory.json`: file phát, dung lượng, SHA256, độ phủ và số mục được duyệt. Không chứa reference/prompt.

## Lệnh dành cho người vận hành/bàn giao

Chạy tại gốc repo bằng PowerShell UTF-8. Runtime hiện dùng Python 3.12 tại `.local/audio-preview/venv/Scripts/python.exe`; có thể chọn runtime tương đương bằng `HNL_VOICE_PYTHON`. Không dùng Python 3.14 trống dependency.

1. API local đang chạy: `npm.cmd run audio:targets`. Chỉ lấy vocabulary/dialogue đã truy cập được qua API public; không xuất đáp án kín hoặc CMS draft. Local preview được đánh dấu rõ. Có thể đổi origin bằng `HNL_CONTENT_URL` khi được cấp quyền.
2. Nếu cần tái tạo reference: `npm.cmd run audio:reference`. Cần model ASR local trong `.local/audio-preview/asr-model`. Giữ file nguồn và hash; không chạy lại chỉ vì đổi bài học.
3. Tạo audio: `npm.cmd run audio:render -- --allow-preview --batch-size 8 --int8`. `--allow-preview` chỉ chấp nhận đầu vào thử nghiệm, không duyệt nội dung. Có `--limit N` để thử N mục, giảm batch-size nếu thiếu RAM. Mặc định 16 bước, seed cố định, ngôn ngữ zh và speed 0.9. INT8 chỉ lượng tử hóa Linear của backbone cho CPU; codec vẫn float32. Bỏ `--int8` để thử FP32; fingerprint khác, cần so sánh lại.
4. `npm.cmd run audio:check`: kiểm tra schema, đọc đúng key, file/hash/độ phủ. Kiểm tra decode/duration/loudness riêng bằng FFmpeg; không thay thế nghe duyệt.
5. `npm.cmd run audio:check -- --release` sẽ từ chối các mục chưa có `approved`. Chỉ người có chuyên môn và quyền duyệt mới được đánh dấu sau khi nghe đúng câu/reading; chưa có màn hình duyệt audio trong CMS. Không đổi trạng thái dựa vào ASR hoặc để làm test xanh.

Lượt render có thể tiếp tục sau gián đoạn: manifest ghi nguyên tử sau mỗi clip, mục đã đủ file cùng fingerprint được bỏ qua. Không xóa DB, source/reference hoặc cả thư mục `.local` để làm lại. Nếu đổi engine/reference/settings, tạo file hash mới. Khi thêm/sửa bài, xuất lại targets rồi render phần thiếu. Kết quả phát âm vẫn cần duyệt.

Trên Windows, nếu reader/antivirus tạm giữ file, bước thay file nguyên tử sẽ thử lại có giới hạn rồi báo lỗi; không xóa manifest cũ để vượt khóa. Toàn bộ WAV của một batch được lưu trước khi encode/cập nhật manifest. Lượt tiếp theo kiểm tra WAV cùng fingerprint và phục hồi MP3/danh mục từ đó, không cần tổng hợp lại. Test hồi quy: `python -B tests/test_voice_io.py` bằng runtime local; cache hỏng/khác profile không được dùng.

## Nguồn và môi trường đã chọn

- VoiceStudio: https://github.com/debpalash/VoiceStudio ; source pin `d819ff54d93017bf4a5b34b605833162163c9e3c`. Ứng dụng/source fork AGPL-3.0; bản nguồn đầy đủ có thể lấy từ repository tại commit này. Tích hợp engine được chạy cục bộ, không bundle Python vào web.
- Model: https://huggingface.co/k2-fsa/OmniVoice ; revision `c5fdb5ccb189668d56333f77ba2629f4cd7535f4`. Model card ghi pretrained model CC-BY-NC, khác giấy phép Apache-2.0 của code gốc. Cần rà điều kiện trước thay đổi sang mô hình thu phí hoặc phân phối model.
- Audio tokenizer đi kèm có BOSON HIGGS AUDIO 2 COMMUNITY LICENSE, giữ nguyên file LICENSE trong cache. Không coi AGPL của ứng dụng là cấp quyền cho tất cả model/voice/output.
- Torch/torchaudio 2.8.0+cpu, Transformers 5.20.1, accelerate 1.15.0, faster-whisper 1.2.1, pydub 0.25.1, soundfile 0.14.0; các version khác ở runtime local. Model ASR `Systran/faster-whisper-small` dùng cục bộ để chuẩn bị transcript; không chấm thanh điệu.
- `voice-render.py` đặt HF/Transformers offline và tắt telemetry trước nạp model. Download model là bước setup riêng qua nguồn công khai; không dùng key/API tính phí.

## Sao lưu và chuyển nơi vận hành

Để website tiếp tục phát giọng, sao chép **cả manifest và toàn bộ MP3 được tham chiếu** cùng source xuất tĩnh. Không cần chuyển GPU/model lên hosting. Đối chiếu SHA256 với inventory, rồi nghe kiểm tra ít nhất một từ, một câu và bản chậm sau restore.

Để tiếp tục sản xuất audio, sao lưu riêng `.local/voice/reference.wav`, `reference.json`, prompt cache, targets, render report và WAV trung gian. Giữ quyền giọng và nguồn/version/license cùng hồ sơ. Model/runtime có thể sao lưu hoặc tải lại đúng phiên bản; model không phải dữ liệu người học. Không đặt bộ này trong thư mục được web server phục vụ.

File giọng là phần bổ sung cho backup DB/user/progress hiện có; không thay thế backup DB hoặc chứng minh đã chuyển nền tảng cloud. Giới hạn chi phí 150 USD/6 tháng vẫn áp dụng. Kiến trúc này loại phí API tổng hợp theo lượt nghe; lưu trữ, băng thông, domain và máy vận hành vẫn phải tính trong ngân sách, chưa xác minh tại AWS Console.

`npm.cmd run audio:backup` tạo snapshot mới trong `.local/voice-backups/`, gồm bộ phát công khai và profile riêng/master, rồi copy restore thử sang `.local/voice-restore-check/` và đối chiếu SHA256 từng file. Snapshot không ghi đè dữ liệu cũ, không chứa model/runtime/DB. Đây là bản riêng tư; chỉ đưa nhánh `public/audio/` lên hosting. Kết quả này không chứng minh đã có backup ngoài máy hoặc ngoài AWS.
