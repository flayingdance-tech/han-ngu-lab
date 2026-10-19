# Chất lượng giọng đọc — 18/10/2026

## Sự cố đã xác nhận

Chủ dự án nghe và báo bộ OmniVoice nhân bản bị méo, sai âm hoặc không ra âm.
Đây là lỗi chất lượng, dù 290 MP3 có thể decode/phát bình thường.
Manifest bị chặn bằng `disabledReason`, áp dụng cả preview. Giữ file và backup để đối chiếu.

Chưa cô lập được một nguyên nhân duy nhất. Profile cũ dùng reference tách nhạc 4.11 giây,
backbone INT8 và 16 bước, trong khi source OmniVoice mặc định 32 bước.
Những khác biệt này là giả thuyết cần thử đối chứng, không phải kết luận nguyên nhân.
ASR trước đó đã bỏ trống/nhận sai nhiều từ; không nên tiếp tục render hàng loạt profile này.

## Hướng thử thay thế

- Kokoro-82M-v1.1-zh: 82M tham số, 100 giọng Trung từ dữ liệu chuyên nghiệp,
  giấy phép Apache 2.0 theo [model card chính thức](https://huggingface.co/hexgrad/Kokoro-82M-v1.1-zh).
  Dùng preset Mandarin, không nhân bản mẫu tách nhạc, không chỉnh pitch/formant.
- Chạy trên CPU tại máy, lưu WAV/MP3 dùng lại. Không gọi API sinh giọng trả phí.
- Mã [Kokoro](https://github.com/hexgrad/kokoro), phiên bản Python 0.9.4;
  model pin `01e7505bd6a7a2ac4975463114c3a7650a9f7218`.
- Mẫu độc lập ở `.local/voice-candidates/kokoro-zh/`, không ghi đè thư viện web.
  Script `voice-candidate.py` tạo hai giọng zf_001/zf_002 với cùng sáu đoạn.

## Điều kiện trước khi dùng để dạy

1. Không méo/rè, không cắt âm đầu/cuối, âm lượng phù hợp; nghe file thật.
2. Đối chiếu đầy đủ nội dung, đặc biệt từ ngắn, thanh điệu, thanh nhẹ và chữ đa âm.
3. ASR chỉ tìm dấu hiệu thiếu/sai chữ, không xác nhận thanh điệu hay độ tự nhiên.
4. Chọn âm sắc từ mẫu nghe rồi mới thay toàn thư viện bằng voice ID riêng.
5. Audio vẫn unreviewed đến khi có người có chuyên môn duyệt; lưu bằng chứng.

Chưa thể cam kết mọi câu đúng chỉ vì thay engine. Với âm tiết/thanh điệu khó,
bản thu người bản ngữ có quyền sử dụng là phương án dự phòng cần cân nhắc.


## Kết quả mẫu

A zf_001:31.5 giây; B zf_002:34.4 giây. 24 mẫu tổng cộng (12 câu/từ ghép và12 từ sinh riêng), vẫn unreviewed. ASR nhận đúng nhiều câu và từ đôi nhưng sai âm đơn; B nhận sai chuỗi bốn thanh nhiều hơn A. Không suy ra A tự nhiên hơn chỉ từ ASR. Đã sửa frontend đọc 还书 bằng từ điển cụm, không sửa cao độ. Báo cáo: reports/audio-candidates.json. Chờ phản hồi nghe, chưa thay thư viện web.


## Mẫu A đã được chủ dự án chọn (2026-10-19T07:00:31+07:00)
D-028 xác nhận chọn âm sắc A. Đang tái tạo145 mục bằng Kokoro FP32 với voice IDhnl-kokoro-zf001-v1; nhận dạng tự động và kiểm tra tín hiệu chỉ là sàng lọc. Cả bank vẫn unreviewed đến khi có duyệt chuyên môn. Từ điển Pinyin có95 cụm (94 từ hiện tại + 还书), không dùng giọng thiết bị hoặc API sinh giọng trả phí.


## Bản hiện hành đã tích hợp

Mẫu A đã hoạt động trên website local:145 mục/290 MP3,3,666,688bytes. Đã sửa riêng 打算 theo dǎsuàn (4), giữ biến điệu thanh3 tự nhiên và thanh nhẹ theo Pinyin. Unit18/18,pronunciation3/3,E2E6/6,build/export/backup295file đạt. Đánh giá ngữ âm độc lập vẫn chưa có, mọi clip unreviewed; không đồng nhất việc chủ dự án chọn âm sắc với duyệt toàn bộ học liệu. Chi tiết mới nhất: PROJECT_STATUS.md.
