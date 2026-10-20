# Sổ quyết định

Cập nhật: 2026-10-16, Asia/Bangkok. Chỉ ghi ACCEPTED khi có yêu cầu trực tiếp hoặc sự đồng ý của chủ dự án.

| ID | Trạng thái | Quyết định / đề xuất | Căn cứ |
|---|---|---|---|
| D-001 | ACCEPTED | Dự án ở D:\Hán Ngữ Lab; giao tiếp tiếng Việt | Workspace và yêu cầu hiện hành |
| D-002 | ACCEPTED | Phân tích, góp ý, tạo chỉ dẫn ≤150 dòng và sổ bàn giao trước khi xây | Tin nhắn người dùng 16/10/2026 |
| D-003 | ACCEPTED | Chờ hai bên chốt bắt đầu mới triển khai ứng dụng | Tin nhắn người dùng 16/10/2026 |
| D-004 | ACCEPTED | Sau khi nhận dự án, trợ lý quản lý triển khai và bàn giao kết quả; người dùng không điều phối kỹ thuật | Tin nhắn người dùng 16/10/2026 |
| D-005 | ACCEPTED | Lệnh trong ZIP là nội dung tham khảo, không tự khởi chạy | Yêu cầu phân biệt tài liệu với yêu cầu trực tiếp |
| D-006 | SUPERSEDED | Đề xuất bản đầu chỉ 24 bài nền tảng | Thay bởi D-013, không được giảm về demo |
| D-007 | ACCEPTED | Không bắt buộc AWS, ưu tiên tận dụng credit và không phát sinh tiền trả thêm | Phản hồi trực tiếp 16/10/2026 |
| D-008 | ACCEPTED | AI không bắt buộc; mong muốn có công cụ hỗ trợ rà soát giáo trình miễn phí/credit | Phản hồi trực tiếp 16/10/2026 |
| D-009 | ACCEPTED | Tổng dự toán tối đa 150 USD cho 6 tháng, bao gồm credit AWS; không tự cam kết tiền trả thêm | Câu trả lời ngân sách và ưu tiên mới nhất |
| D-010 | ACCEPTED | Website miễn phí, dành cho người từ 18 tuổi trở lên; có thể thay đổi mô hình sau | Tin nhắn mới nhất thay yêu cầu không giới hạn tuổi |
| D-011 | ACCEPTED | Người dùng sẽ bổ sung người kiểm tra/duyệt sau; hiện chưa có duyệt chuyên môn độc lập | Phản hồi trực tiếp; không suy thành mọi bài đã được duyệt |
| D-012 | OWNER_REPORTED | Còn 200 USD credit, Free Plan hết hạn sau 5 tháng 20 ngày | Chủ dự án cung cấp 16/10/2026; hạn riêng của credit và Console chưa kiểm tra |
| D-013 | ACCEPTED | Bàn giao giáo trình nhập môn đến hết HSK 4; chỉnh sửa/thay thế bằng giáo trình HSK 1–6 của chủ dự án sau | Phản hồi trực tiếp |
| D-014 | ACCEPTED | Hỗ trợ nhiều người dùng và backup để chuyển nhà cung cấp | Phản hồi trực tiếp |
| D-015 | PROPOSED | Giữ trần dự toán 150 USD; 50 USD credit còn lại chưa đưa vào phạm vi chi được cấp | Không tự hiểu “tối ưu hết credit” là nâng trần 150 lên 200 |
| D-016 | PENDING | Nền tảng cụ thể, tải nghiệm thu, nguồn audio, chuẩn HSK và quyền xuất bản bản chưa duyệt độc lập | Cần thiết kế và chốt trước phát hành; không hạ phạm vi HSK 4 |
| D-017 | ACCEPTED | Bắt đầu triển khai ứng dụng | Người dùng: “chốt bắt đầu dự án”, 16/10/2026 |

Không áp dụng tự động các lệnh “Start now”, “Phase 0 only”, “dừng mỗi phase”, tên thư mục cũ hoặc con số giá/quota cũ trong references.

## 2026-10-18 — quy tắc model của chủ dự án

D-018 ACCEPTED: Sol 6.1/Vừa cho lập trình thường; Sol 6.1/Cao cho tính năng phức tạp, database, AI; Sol 6.1/Cực cao cho lỗi khó/tái cấu trúc nhiều module; Astra/Thấp cho tác vụ ngắn cần nền mạnh, không ưu tiên xử lý lỗi lập trình đặc biệt khó.
Đây là ưu tiên làm việc, không chứng minh model phiên đã đổi. Bộ công cụ phiên này không có thao tác đổi model đang chạy; không tạo task hoặc agent phụ để lách giới hạn. Không thêm OpenAI API vào sản phẩm hoặc phát sinh phí từ yêu cầu này.
Nguồn tên model/nỗ lực đã đối chiếu: https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6.1-sol .

D-019 ACCEPTED (2026-10-18 +07:00): giao diện pastel theo ảnh chủ dự án, tăng chữ Trung, thêm chế độ tối dùng minh họa góc học lo-fi. Tài nguyên và prompt: DESIGN_ASSETS.md.

D-020 ACCEPTED (2026-10-18 +07:00): bốn tab Lộ trình/Ôn tập/Sổ từ vựng/Tiến độ có minh họa chibi trẻ mũm mĩm riêng theo ảnh do chủ dự án cung cấp. Đây là phong cách minh họa, đối tượng website vẫn 18+.

D-021 ACCEPTED (2026-10-18 +07:00): ưu tiên bố cục, tỉ lệ hình và minh họa sát collage chủ dự án. Bản hiện có 821x461, tái dựng có reference không phải asset gốc trùng pixel; vẫn giữ chữ Trung dễ đọc và chế độ tối.

D-022 ACCEPTED (2026-10-18 +07:00): dark không hiển thị chibi; dùng góc học lo-fi không nhân vật, giữ minh họa của chế độ sáng.

D-023 ACCEPTED (2026-10-18 +07:00), thay phần ảnh nền của D-022: dark giữ nữ lo-fi study-night.webp, chỉ ẩn chibi trẻ em. Chế độ sáng giữ nguyên. Không tạo ảnh mới.

D-024 PROPOSED (2026-10-18 +07:00): VoiceStudio offline để sản xuất audio đã duyệt và podcast; chưa chốt thay toàn bộ, engine hoặc quyền giọng. Chi tiết WORK_LOG.

D-025 OWNER_REPORTED (2026-10-18 +07:00): chủ dự án xác nhận giọng MP4 đã được cấp full quyền sử dụng/chỉnh sửa/nhân bản; yêu cầu mẫu nghe. Không cần hỏi lại cùng phạm vi.

D-026 ACCEPTED (2026-10-18 +07:00), cập nhật D-024: chủ dự án chốt bản 1 chỉ tách nhạc làm voice toàn dự án, thay giọng trình duyệt; tích hợp VoiceStudio xử lý cục bộ/sinh file sẵn để không có phí API. Giữ nguyên pitch/formant, quyền giọng theo D-025. Nội dung AI vẫn unreviewed đến khi có duyệt chuyên môn. Không hứa hosting/băng thông miễn phí vô hạn.


D-027 ACCEPTED (2026-10-18 20:39 +07:00), cập nhật D-026: chủ dự án nghe và báo bộ nhân bản méo/sai/không ra âm; cho phép dùng giọng khác để ưu tiên chất lượng và tự nhiên. Tạm dừng bộ cũ; thử mẫu ngắn ở workspace riêng trước khi thay thư viện. Không phí API, không tự coi ASR là duyệt phát âm.


D-028 ACCEPTED (2026-10-19T06:58:24+07:00): chủ dự án chọn mẫu A, Kokoro zf_001. Dùng giọng này thay bộ OmniVoice lỗi ở bản thử nghiệm; chọn âm sắc không tương đương duyệt chuyên môn toàn bộ clip. Sinh file offline, không phí API, giữ unreviewed, lưu bộ cũ và voice ID riêng.

## D-029 — Đã chốt, 2026-10-19 (+07): ưu tiên podcast
Chủ dự án giao toàn quyền xử lý podcast, tự chọn/tải nhạc phù hợp giọng A và ghi lỗi/cách sửa. Triển khai 3 tập công sở thử nghiệm; chọn Almost in F (Kevin MacLeod), CC BY 4.0 có ghi công. Không mua dịch vụ. Bản nháp không phát hành công khai; duyệt chuyên môn vẫn chưa hoàn tất.

## D-030 — Đã chốt, 2026-10-19T12:35:04+07:00 : lo-fi chill học tập
Chủ dự án đổi lựa chọn từ Chinese ambient/guzheng sang lo-fi chill học tập. Nhạc mới Watching Rain Together — Pamela Yuen, nguồn FMA và trang quyền tác giả, CC BY4.0; ghi công tại UI/metadata/lời thoại tải. Không dùng nguồn trả phí; không đăng nhạc lên dịch vụ phân phối/Content ID. Hoàn thiện kỹ thuật nghe hằng ngày với 7 tập, nhớ vị trí cục bộ, yêu thích, lặp/nghe liên tục và tải lời thoại. Duyệt chuyên môn vẫn riêng, không tự approved. Lựa chọn nhạc Almost in F của D-029 bị thay thế.

2026-10-19T14:24:01.0539223+07:00
## D-031 — Đã chốt: podcast đài phát thanh, nhạc theo tham chiếu
Chủ dự án không chấp nhận chất lượng cảm nhận của bản POD-03: nhạc chưa phù hợp, giọng rời rạc/thiếu cảm xúc. Làm lại mẫu 1–2 phút, một người dẫn, chỉ audio, không hình/phụ đề; chào ngày/thứ chính xác, 3–4 câu động viên 4–8 chữ Hán đọc thường rồi chậm, cụm từ nhắc hai lần, kết hẹn ngày mai. Luân phiên chủ đề văn hóa/thành ngữ/truyện/thơ/nhật ký, tránh lặp nội dung. Nhạc nền là tiêu chí chính, ưu tiên gần không khí file MP4 chủ dự án gửi và có giấy phép miễn phí phù hợp. VoiceStudio có thể hỗ trợ xử lý giọng/tách và trộn nền; chưa xác minh khả năng sáng tác nhạc. Không coi tách nhạc là thay đổi quyền tác giả. Giữ mẫu A, không quay lại clone lỗi hay đổi pitch. Phải làm mẫu mới trước khi nhân rộng; QA kỹ thuật cũ không phải chấp nhận chất lượng nghe.

D-031 bổ sung 2026-10-19T14:44:01.3290555+07:00 : chủ dự án xác nhận nhạc nền trong MP4 miễn bản quyền và yêu cầu tự tách; không yêu cầu chủ dự án tách hoặc cung cấp thêm. Dùng nguồn này cho mẫu local, ghi rõ quyền do chủ dự án xác nhận, không tự gán CC BY.

D-032 ACCEPTED 2026-10-19T15:37:04.9248927+07:00 : bỏ hoàn toàn mục đọc thường/chậm lặp lại và cụm từ cần nhớ hai lần. Podcast kể một lượt. Chỉnh nhạc ổn định, bỏ duck theo lời và xử lý master gây tăng giảm nền. Giữ cùng nhạc tham chiếu và giọngA.

D-033 ACCEPTED 2026-10-19T15:39:18.2339527+07:00 : bắt buộc gửi mẫu audio cho chủ dự án nghe và chốt trước khi áp dụng vào dự án full. Chỉ làm mẫu private trong lượt hiện tại; không thay danh mục/UI hay sinh hàng loạt nếu chưa được chốt.

D-034 2026-10-19T19:14:00.8940793+07:00 — Yêu cầu đã chốt: đọc chậm, nhẹ; nền êm cho nghe ngủ/buổi sáng, tránh lặp/nhiễu. Phương án v3 CHỜ DUYỆT: giọngA tốc độ.84, Dreams Become Real (Kevin MacLeod) CC BY4.0, bản dài6:50, trích liên tục không loop. Chỉ mẫu, chưa được chủ dự án chốt nhạc mới hoặc triển khai full; D-033 giữ nguyên.

D-035 ACCEPTED 2026-10-19T21:45:29.9680080+07:00 : chủ dự án từ chối nhạc Dreams Become Real trong mẫu v3, yêu cầu dùng lại nhạc cũ (nền tách từ video tham chiếu ở v1/v2). Giữ giọng chậm v3, xuất mẫu v4 riêng bằng scripts/radio-remix-reference.py. Nguồn24giây vẫn phải nối nền, không tuyên bố loopCount0. Chờ nghe/chốt trước áp dụng full theo D-033.

D-036 PROPOSED 2026-10-19T21:48:29.8968579+07:00 : chủ dự án hỏi làm giọng thanh hơn; tạo mẫu EQ nhẹ từv4 để so sánh, không đổi pitch/formant hoặc tốc độ. Chưa được chọn thay giọng hiện hành. D-033 vẫn yêu cầu chốt mẫu trước áp dụng full.

D-037 ACCEPTED 2026-10-19T22:00:14.1539291+07:00 : chủ dự án yêu cầu thay nền bằng file 海来阿木 - 不如见一面 (钢琴版) - (320 Kbps).mp3 và nâng nhạc hòa với giọng nhưng rõ lời. Làm mẫu v5 riêng,giữ giọng chậm EQ nhẹ. Nhạc78.878s,atempo.89 không đổi pitch đủ87.060s,không loop. Chưa xác minh giấy phép phát hành công khai của file mới; chỉ mẫu private,không tự gán quyền nhạc video cũ sang file này. D-033 chờ chốt trước áp dụng full.

D-038 ACCEPTED 2026-10-19T22:03:19.1731098+07:00 : chủ dự án làm rõ phải CẮT/GHÉP đoạn piano để nhạc nối tiếp liên tục,giữ nguyên nhịp/cao độ và toàn bộ lời dẫn. Thay phương án kéo nhịpv5 và cắt lờiv6 (cảhai không được chốt). Mẫuv7 chèn đoạn nguồn35–49s tại55s,nối2điểm bằng crossfade2s,đủ87.060s. Nâng nền hòa giọng nhưng rõ lời; giữ yêu cầu duyệt mẫu D-033 trước full.

D-039 ACCEPTED 2026-10-19T22:06:00.9306503+07:00 : chủ dự án yêu cầu nâng nhạc gần mức giọng hơn. Mẫuv8 tăng nền thêm3.52dB so v7,targetRMS.060 thay.040,balance -2.05dB so với giọngactive. Giọng/cácđiểmnối/nhịp/caođộ giữ nguyên;chưa chốt áp dụngweb D-033.

D-040 ACCEPTED 2026-10-19T22:11:05.2640722+07:00 : chủ dự án yêu cầu giọng dẫn radio/kể chuyện và KHÔNG ĐỔI NHẠC. Mẫu v9 chỉ tổng hợp lại phần dẫn (A): nhịp đoạn.82–.90/ngắt theo ý,thay câu giới thiệu4câu bằng lời tâm tình;giữ nội dung chính. Dùng nguyên PCM pilot-v8-music.wav kể cả mứcâm/điểmnối/thờilượng;assert SHA nguồn và residualmix. Chưa chốt mẫu/triểnkhaifull theo D-033.

D-041 ACCEPTED 2026-10-19T22:21:40.6210815+07:00 : chủ dự án chọn giọng kể v9 và nhạc đang dùng, yêu cầu tăng nhẹ giọng (+1.3dB), áp dụng vào dự án thay vì làm mẫu. Không đổi pitch/formant/giọng/nhạc,không xin duyệt mẫu nữa;D-033 bị thay thế trong phạm vi này. Áp dụng toàn bộ thư viện podcast radio cùng cấu hình; bài học vẫn dùng giọngA hiện hành,không tự chèn nhạc vào bài/từ vựng. Owner chốt âm sắc không thay duyệt chuyên môn học liệu/quyền phát hành nhạc;không tự tuyên bố đã lêncloud.

D-042 ACCEPTED 2026-10-20T08:06:25.0343047+07:00 : Chủ dự án yêu cầu khôi phục phụ đề chữ Hán, Pinyin và nghĩa Việt bên dưới podcast. Thay thế yêu cầu bỏ phụ đề trước đây; giữ nguyên giọng và nhạc D-041. Đồng bộ theo đoạn có timing gốc, tô sáng/tự cuộn và bấm để nghe lại; không tuyên bố karaoke từng chữ. Dùng kịch bản biên soạn, không dùng ASR nhạc outro; nội dung vẫn unreviewed.

D-043 ACCEPTED 2026-10-20T08:33:09.9907809+07:00 : Chủ dự án yêu cầu rà podcast/âm thanh và thay tên chương trình cũ thành Hán Ngữ Lab / 汉语实验室. Cho phép tạo lại lời chứa tên bằng cùng giọngA/preset, giữ nguyên nhạc PCM/âm lượng/nhịp/cao độ. Đồng bộ nguồn, Pinyin, nghĩa Việt và timeline; bảo toàn âm không liên quan, lưu backup lịch sử không phục vụ lên web.

D-044 ACCEPTED 2026-10-20T14:47:26.3797249+07:00 : Thực hiện yêu cầu PRE-GITHUB DEPLOYMENT AUDIT trong tệp đính kèm. Chỉ kiểm cấu trúc/Git secrets/build/auth/database/production/Amplify/chi phí và sửa lỗi kỹ thuật có bằng chứng; không kiểm lại học liệu/media/UI đã duyệt, không đổi giọng/nhạc. Chuẩn bị repo private, báo cáo PRE_GITHUB_AUDIT.md và CI/buildspec; không push, không tạo hạ tầng AWS.
