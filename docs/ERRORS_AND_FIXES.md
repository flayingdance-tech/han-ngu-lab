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
| POD-08 | Fingerprint cũ gộp cả nhạc và mã mixer vào cache giọng; chỉ đổi nhạc cũng có thể sinh lại toàn bộ giọng. | Tách synthesis và mix fingerprint; chỉ dùng lại WAV khi profile và phoneme khớp. Giữ checksum 3 MP3 voice cũ khi đổi lo-fi. | `.local/podcasts/render-summary.json`, `scripts/podcast-render.py` |
| POD-09 | Lấy đoạn nhạc theo offset tăng dần có thể vượt file ngắn; `np.resize` ở đuôi rỗng có thể tạo nền im lặng. Rủi ro phát hiện trước khi phối lo-fi. | Kiểm tra nguồn không rỗng, tạo loop bằng crossfade 2s đủ dài và kiểm tra offset+n. Không ghép vòng cắt cứng. | `scripts/podcast-render.py` |
| POD-10 | Bộ nhớ trình duyệt có thể hỏng, chứa vị trí quá dài hoặc bị chặn. | Parse schema, clamp vị trí, tập đã nghe hết mở từ đầu; nghe vẫn hoạt động khi storage bị chặn và thông báo phạm vi lưu. | `lib/podcast-listening.ts`, tests unit/E2E |
| OPS-01 | Ghi đè file log lint khi một lượt lint cũ còn giữ file gây sharing violation trên Windows. | Chờ tiến trình cũ hoàn tất; dùng log tên riêng cho lần kiểm tra sau thay đổi. Không coi lỗi ghi log là test đã chạy. | `.local/podcasts/lofi/final-lint.log` |

## Quy tắc trước khi giao audio mới

1. Dùng đúng giọng A; chia câu ngắn, xác nhận frontend không bỏ token/âm tiết.
2. Lưu script, cấu hình, giấy phép, checksum và cache WAV để khôi phục.
3. Đo file MP3 thực: độ dài, số hữu hạn, peak/true peak, loudness; không chỉ kiểm tra WAV nguồn.
4. Nhạc thấp hơn lời, fade đầu/cuối, giảm nền khi có lời; có bản chỉ giọng đọc cùng timeline.
5. Test đổi nguồn giữ vị trí, seek, lỗi mạng/retry, dừng khi đổi tập/rời trang, desktop/mobile.
6. Giữ trạng thái unreviewed cho tới duyệt chuyên môn; không gọi kết quả kỹ thuật là chứng nhận phát âm đúng.
7. Ghi lỗi mới cùng điều kiện tái hiện, cách sửa và bằng chứng; không lặp lại thao tác thất bại mà không đổi giả thuyết.

## POD-11 — Đạt kiểm tra kỹ thuật nhưng không đạt trải nghiệm nghe (2026-10-19T14:24:01.0539223+07:00)
Chủ dự án phản hồi nhạc không phù hợp, lời rời rạc/thiếu cảm xúc. Không dùng ASR/LUFS/test để kết luận nghe tự nhiên. Khắc phục đang làm: mẫu radio 1–2 phút dựa trên tham chiếu, chọn nhạc theo cảm xúc, nhịp ngắt có chủ đích; chỉ nhân rộng sau khi đánh giá mẫu. Bản cũ chưa được chấp nhận về nghệ thuật.

## POD-12 — Kiểm tra stereo xuống mono sai gain (2026-10-19T14:50:19.8021012+07:00)
ASR check dùng -ac1 khiến FFmpeg downmix cộng hai kênh tương quan, tăng đỉnh và assertion thất bại dù file stereo true peak -1.94dBTP. Sửa đầu vào ASR bằng pan=mono|c0=0.5*c0+0.5*c1; giữ kiểm tra finite/peak/duration. Chạy lại đạt và nhận đủ các câu. Không sửa giảm chất lượng file nhạc hoặc bỏ assertion.

## POD-13 — Nhạc nền lên xuống theo lời và điểm nối (2026-10-19T15:41:10.4719983+07:00)
Bảnv1 duck50% làm nền chênh6dB theo khoảng nghỉ; master loudnorm động và nối linear có thể làm biến thiên thêm. V2 bỏ speech duck, dùng gain master cố định, nối equal-power, cân RMS nền độc lập với lời, fade chỉ đầu/cuối. Thử cân cửa sổ2–4s không đạt mục tiêu nội bộ2dB; giữ assertion, sửa cân nền cửa sổ1s. Render cuối đạt biên độ RMS cửa sổ3s dao động1.386dB (bỏ fade), kiểm tra true peak đạt. Đây là bằng chứng kỹ thuật, chờ chủ dự án nghe; không kết luận chất lượng chủ quan được duyệt.

## POD-14 — Nền tham chiếu ngắn và artefact tách nguồn (2026-10-19T19:14:00.8940793+07:00)
Nguồn24giây phải loop để đủ tập; cân RMS không loại được lặp giai điệu hoặc artefact do tách giọng. Mẫu v3 dùng bản nhạc instrumental dài từ tác giả có giấy phép, một excerpt liên tục, assert đủ độ dài và loopCount0, không thêm vinyl/mưa/reverb. Không hứa hết mọi nhiễu chỉ từ số liệu; cần chủ dự án nghe mẫu.

## POD-15 — Amix mono làm mất stereo nền (2026-10-19T21:48:29.8968579+07:00)
Khi input đầu là giọng mono, FFmpeg amix có thể chọn output mono. Sửa bằng pan stereo nhân bản giọng sang2kênh trước amix; giữ nền stereo riêng,normalize0. Kiểm tra log decode cuối2kênh; không chấp nhận bản mono tạm làm mẫu.

## POD-16 — ASR tưởng tượng lời trên outro piano (2026-10-19T22:42:53.1923371+07:00)
Whisper sinh thêm '字幕by…',lặp đoạn thơ hoặc lời kêu gọi sau khi giọng đã kết thúc; có timestamp86–96s vượt cả file87.060s. Giữ nguyênrawASR để kiểmtoán. scripts/podcast-asr-review.py đối chiếu cửa sổ narration từ catalog và WAVvoice (silence sau end+1s),tách riêng nhậndạngmusic-only,đánhdấu timestampngoàibiên và đo coverage theo từngđoạn. Không sửa nhạc/giọng chỉ vì cácchữnày,không tự xuấtphụđềASR.7tập mincoverage.85 trởlên,khôngflagmấtđoạn;đây khôngphải duyệtthanhđiệu/cảmxúc. 好→号 và cácnhầmchữ/âmvẫncầnngườinghe,giữunreviewed.

## POD-17 — Schema nhạc chỉ nhận CC BY (2026-10-19T22:42:53.1923371+07:00)
Schema cũ chỉcho CC BY4.0 dù nhạc mới là file chủ dự án gửi. Sửa union owner-supplied/owner-provided-unverified,khôngcho licenseUrlCCgắn vào nguồnowner;unitkiểmtrakhônggánnhầmgiấyphép và bỏprofile/production khỏiAPI. Khôngtuyênbố quyềnpháthan côngkhai khi chưa xácminh.

### POD-18 — npm Windows không chạy đường dẫn Python tương đối
Triệu chứng: '.local' is not recognized khi npm dùng cmd và đường dẫn .local/kokoro-venv/Scripts/python.exe. Sửa: dùng đường dẫn Windows có dấu ngoặc kép trong package.json, áp dụng podcast:render và podcast:subtitles. Lệnh podcast:subtitles đã exit0. Không đổi model hay cài lại runtime để xử lý lỗi gọi lệnh.

### POD-19 — Phụ đề biến mất sau đổi podcast radio
Nguyên nhân: schema/UI audio-only trước đây cố ý loại timeline. Theo D-042 khôi phục 43 đoạn từ kịch bản, timing production, Pinyin/nghĩa Việt; renderer giữ timeline khi tái tạo. Không lấy ASR làm phụ đề vì outro có ảo giác chữ. Script ràng buộc hash nguồn và kiểm 14MP3 giữ nguyên; test kiểm highlight/seek/cuộn/ẩn nghĩa Việt.

### POD-20 — Đổi thương hiệu phải đổi cả lời trong âm thanh
D-043 yêu cầu Hán Ngữ Lab / 汉语实验室. Không chỉ thay phụ đề/metadata hoặc rename MP3: lời mở/kết trong14đoạn phải được tạo lại bằng đúng model/speaker/speed/EQ hiện hành. Ghép các đoạn không đổi từ PCM baseline, giữ nguồn/nhịp/cao độ/mức piano, sau đó cập nhật timeline và cả3 lớp phụ đề. Không kéo nhạc để chữa độ dài; dừng nếu lời mới không vừa nền cố định.
Bằng chứng ASR phải gắn SHA của file mix đang dùng; check/review từ chối report của file cũ dù cùng episodeID. Giữ baseline/mẫu/backup lịch sử để rollback, chỉ URL trong catalog mới được phục vụ.
