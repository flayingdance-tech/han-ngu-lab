# Lỗi, cách sửa và ngăn tái diễn

Cập nhật: 2026-10-19, Asia/Bangkok (+07). Không ghi secret hoặc thông tin người học.

| ID | Hiện tượng và nguyên nhân đã biết | Cách sửa / phòng ngừa | Bằng chứng |
|---|---|---|---|
| AUD-01 | Chủ dự án nghe giọng clone cũ bị méo, sai hoặc mất âm. Kiểm tra file/ASR đã không phản ánh đủ trải nghiệm nghe. Chưa chứng minh được một nguyên nhân duy nhất; reference ngắn, lượng tử hóa và số bước sinh là các yếu tố nghi ngờ. | Dừng kho clone; dùng mẫu A được chủ dự án chọn. Thử mẫu trước khi tạo hàng loạt. Không coi ASR là duyệt ngữ âm. | D-028; `docs/AUDIO_QUALITY.md` |
| AUD-02 | Frontend mặc định đổi 打算 thành suàn thanh nhẹ; 还书 đọc nhầm hái. | Từ đơn giữ Pinyin mục tiêu, chỉ áp dụng biến điệu thanh ba phù hợp; phrase override cho huán shū. Không tăng pitch/formant để làm trẻ giọng. | `tests/test_voice_pronunciation.py` |
| AUD-03 | ASR từ ngắn trả chữ đồng âm hoặc chuỗi vô nghĩa, dù không đủ bằng chứng rằng âm phát sai. | ASR chỉ sàng lọc; kiểm tra câu đủ ngữ cảnh, để người có chuyên môn duyệt trước phát hành. | `docs/AUDIO_QUALITY.md` |
| AUD-04 | Windows WinError 5 khi thay manifest đang được đọc. | Cache từng đoạn, ghi file tạm rồi atomic replace có retry giới hạn; manifest cuối cùng, không công bố batch dở. | `scripts/voice_io.py`, `tests/test_voice_io.py` |
| AUD-05 | PyAV/Whisper không tương thích đường gọi filename (`metadata_errors`). | Decode thành float32 16 kHz trước khi transcribe; không sửa dependency dùng chung tùy tiện. | Runbook audio hiện có |
| POD-01 | Link tìm kiếm có hostname `wwww.incompetech.com` trả lỗi TLS NameMismatch. | Chuyển sang tên miền chính `https://incompetech.com`, xác minh metadata chính thức và tải từ đó; không bỏ kiểm tra TLS. | `.local/podcasts/music-source.html`, `music-track.json` |
| POD-02 | `json.loads` báo Extra data khi đọc thống kê loudnorm: FFmpeg có thêm log sau khối JSON. | Dùng `JSONDecoder.raw_decode` đọc đúng một khối; vẫn fail nếu thiếu JSON/QA không đạt. Không bỏ qua kiểm tra âm. | `scripts/podcast-render.py:measure` |
| POD-03 | Khi chèn JSX vào vị trí đóng fragment quá chung, Podcast nằm nhầm trong điều kiện home; TypeScript phát hiện hai trạng thái loại trừ nhau. | Đặt nhánh podcast ngang hàng vocab/roadmap; chạy typecheck rồi E2E điều hướng thật. | `app/page.tsx`, `.local/podcasts/typecheck.log` |
| POD-04 | Rủi ro xóa nhầm podcast: script retire cũ chỉ biết manifest từ vựng. Đây là rủi ro phát hiện trước, chưa xảy ra mất dữ liệu. | Đặt podcast trong `.local/podcasts/rendered`; API chỉ phục vụ file thuộc manifest. Không đưa bản nháp vào public/out. | `server/podcasts.ts`, `tests/podcast.test.ts` |
| WEB-01 | Next build và dev/E2E cùng sửa `.next`; cold start có thể khiến Playwright cố khởi động server thứ hai. | Đợi HTTP 200; chạy E2E trước build, không chạy đồng thời. Kiểm tra PID/port trước khi restart. | `docs/VOICE_RUNBOOK.md` |
| POD-05 | React Strict Mode chạy effect cleanup thử ngay khi mount; cleanup xóa `src` khiến audio còn trên trang nhưng không có nguồn. | Cleanup chỉ pause phần tử; để React quản lý thuộc tính src. E2E kiểm tra nguồn thật và phát được trong dev Strict Mode. | `app/components/Podcasts.tsx`, `tests/e2e/podcast.spec.ts` |
| POD-06 | API watch cũ vẫn trả 404 route mới dù source đã thay đổi. | Xác minh HTTP trực tiếp và PID; restart đúng launcher/listener local, không chạm DB hoặc khởi tạo server trùng port. Không mặc định watcher đã cập nhật. | `.local/podcasts/api.err`, kiểm tra `/api/podcasts` trả 200 |
| POD-07 | Express sendFile mặc định chặn đường dẫn bên trong `.local`; catalog tải được nhưng MP3 không phát. Test đầu dùng thư mục thường nên chưa bắt được. | Cho phép dotfiles chỉ trong route kiểm tra preview + filename whitelist; test dùng thư mục `.private` và Range thật. Không mở static cả `.local`. | `server/podcasts.ts`, `tests/podcast.test.ts` |
| TEST-01 | Locator role alert chung trùng với Next route announcer. | Scope vào podcast player để xác minh đúng thông báo; không tắt alert của ứng dụng. | `tests/e2e/podcast.spec.ts` |

## Quy tắc trước khi giao audio mới

1. Dùng đúng giọng A; chia câu ngắn, xác nhận frontend không bỏ token/âm tiết.
2. Lưu script, cấu hình, giấy phép, checksum và cache WAV để khôi phục.
3. Đo file MP3 thực: độ dài, số hữu hạn, peak/true peak, loudness; không chỉ kiểm tra WAV nguồn.
4. Nhạc thấp hơn lời, fade đầu/cuối, giảm nền khi có lời; có bản chỉ giọng đọc cùng timeline.
5. Test đổi nguồn giữ vị trí, seek, lỗi mạng/retry, dừng khi đổi tập/rời trang, desktop/mobile.
6. Giữ trạng thái unreviewed cho tới duyệt chuyên môn; không gọi kết quả kỹ thuật là chứng nhận phát âm đúng.
7. Ghi lỗi mới cùng điều kiện tái hiện, cách sửa và bằng chứng; không lặp lại thao tác thất bại mà không đổi giả thuyết.
