# Bảng công việc

Cập nhật: 2026-10-20, Asia/Bangkok.
Trạng thái: TODO / IN_PROGRESS / BLOCKED / DONE. Phạm vi đã chốt; nghiệm thu trọn dự án còn các mục chưa xong.

| ID | Việc | Trạng thái | Điều kiện xong / bằng chứng |
|---|---|---|---|
| PRE-01 | Xác nhận workspace và nội dung ZIP | DONE | Đúng root, ban đầu trống; ZIP có 4 file |
| PRE-02 | Đọc, bảo toàn tài liệu gốc | DONE | docs/references; master chính + toàn bộ PRD/blueprint đã đọc |
| PRE-03 | Đối chiếu mâu thuẫn và đề xuất | DONE | REVIEW_PROPOSAL.md |
| PRE-04 | Tạo chỉ dẫn tối đa 150 dòng | DONE | AGENTS.md; kết quả kiểm tra trong WORK_LOG |
| PRE-05 | Tạo sổ bàn giao và quy trình tiếp tục | DONE | STATUS, TASKS, DECISIONS, NEXT_STEPS, WORK_LOG |
| PRE-06 | Kiểm tra tài liệu chính thức liên quan | DONE | Nguồn Next.js, AWS, Supabase, HSK trong REVIEW_PROPOSAL |
| PRE-07 | Khảo sát trực quan bjtlab.me | BLOCKED | Công cụ web không truy cập được, trình duyệt timeout; chưa đánh giá UI |
| DEC-01 | Chốt phạm vi, nội dung, AI | DONE | PRODUCT_SPEC, D-008/D-013: HSK 4 đầy đủ, AI tùy chọn |
| DEC-02 | Chốt ngân sách, đối tượng và thời điểm duyệt | DONE | D-009/D-010/D-011: 150 USD gồm credit, 18+, người duyệt có sau |
| DEC-03 | Chốt khởi công, kiến trúc và quyền triển khai | IN_PROGRESS | Đã chốt bắt đầu; kiến trúc local ghi ARCHITECTURE, cloud chưa xác minh |
| PRE-08 | Cập nhật phương án chi phí/AI/di chuyển | DONE | COST_AND_PORTABILITY_PROPOSAL; nguồn chính thức đã đọc |
| CONTENT-01 | Lập ma trận độ phủ nhập môn–HSK 4 theo chuẩn xác định | IN_PROGRESS | Có inventory/audit 16 bài; chưa có ma trận đầy đủ chuẩn HSK |
| OPS-00 | Kiểm tra hạn Free Plan, credit và dịch vụ khả dụng | TODO | Hiện chỉ có thông tin chủ dự án, chưa kiểm tra Console |
| DEV-01 | Khảo sát runtime, Git, lập đặc tả và kiến trúc cuối | IN_PROGRESS | Runtime đã biết, tài liệu local đã có; cloud chưa chốt theo tài khoản |
| DEV-02 | Khởi tạo source, thiết kế giao diện, pipeline | IN_PROGRESS | Source local đã qua build/lint/E2E; pipeline release/cloud chưa có |
| DEV-03 | Auth, phân quyền, API, dữ liệu | IN_PROGRESS | API local qua integration; email local mô phỏng, production email chưa cấu hình |
| DEV-04 | CMS, revision, media, import/export | IN_PROGRESS | Có workflow/JSON/bản xem duyệt và cảnh báo biên tập; media/CSV chưa hoàn thiện |
| DEV-05 | Học bài, chấm điểm, tiến độ, SRS | IN_PROGRESS | Luồng học/lưu tiến độ qua E2E desktop/mobile; chưa nghiệm thu mọi lỗi mạng/phiên |
| DEV-06 | Soạn và kiểm duyệt học liệu | IN_PROGRESS | Có 16 bài thử nghiệm, chưa đủ HSK 4 hoặc duyệt độc lập |
| DEV-07 | AI và tính năng mở rộng nếu được chọn | TODO | Phạm vi quyết định; quota, chất lượng và chi phí kiểm thử |
| OPS-01 | Dự toán, xác minh tài khoản, cấp quyền | TODO | Số liệu thực tế; không suy từ ZIP |
| OPS-02 | Staging, E2E, bảo mật, backup/restore | IN_PROGRESS | 6 E2E local đạt, backup roundtrip đạt; staging/cloud chưa có |
| OPS-04 | Diễn tập chuyển nhà cung cấp | TODO | Restore ngoài AWS giữ user/progress/media; auth/email hoạt động; kế hoạch trước hết hạn |
| OPS-03 | Phát hành trong phạm vi được cấp | TODO | URL, smoke test, giám sát và vận hành được xác minh |
| END-01 | Nghiệm thu và bàn giao | TODO | Đủ tiêu chí đã chốt, không còn thiếu mục bắt buộc |
| FIX-01 | Đăng xuất dễ tìm desktop/mobile | DONE | Nút header, 2 E2E xác minh logout + /me 401 + reload |
| CMS-EDIT-01 | Soạn đủ 3 loại bài tập, alternatives, Pinyin ví dụ, thứ tự | DONE | 2 CMS E2E, typecheck, lint và build đạt ngày 18/10 |
| UI-02 | Pastel theo ảnh, chữ Trung lớn, theme tối lo-fi | DONE | Typecheck/lint/build đạt; 2 theme E2E, 8 ca học/CMS đạt qua chạy lại; xem TEST_REPORT/DESIGN_ASSETS |
| UI-03 | Minh họa chibi riêng cho bốn tab học | DONE | 4 WebP alpha, 10/10 E2E học/theme/chibi; typecheck/lint/build đạt; screenshot desktop/mobile sáng/tối |
| UI-04 | Bố cục/tỉ lệ và minh họa sát collage gốc | DONE | Home 3 thẻ/banner ~3:1, header gọn/scenery, dữ liệu lịch thật; 10 E2E + 4 theme cuối, typecheck/lint/build đạt |
| UI-05 | Dùng đúng minh họa gốc trùng hoàn toàn mẫu | BLOCKED | Cần bộ asset gốc riêng lẻ; hiện chỉ có collage 821x461, bản tái dựng không trùng pixel |
| UI-06 | Bỏ chibi khỏi dark | DONE | Ẩn mascot/header/sidebar, hero góc học trống; 4 ca theme đạt qua sửa và chạy lại; typecheck/lint/build đạt |
| UI-07 | Khôi phục nữ lo-fi, dark chỉ bỏ trẻ chibi | DONE | Đổi đúng dark hero về study-night.webp; theme 4/4, lint/build đạt, light không đổi |

| AUDIO-01 | Khảo sát VoiceStudio và podcast | DONE | Đọc tài liệu chính thức, kiểm tra audio hiện tại/GPU/file; WORK_LOG. Chưa thử chất lượng |
| AUDIO-02 | Thử tách nhạc/chỉnh và nhân bản giọng | DONE | Đã thử thật; bộ nhân bản bị chủ dự án từ chối chất lượng (D-027), chuyển mẫu A theo D-028/AUDIO-08. Đây là kết quả thử nghiệm, không nghiệm thu giọng gốc |

| AUDIO-03 | Xuất mẫu nghe bản thu gốc/tách nhạc/chỉnh nhẹ | DONE | 3 MP3 24.5 giây, CPU pipeline 42.95s, ffprobe/FFmpeg đạt; WORK_LOG và .local/audio-preview/report.json |
| AUDIO-04 | Mẫu giọng trẻ nhẹ/vừa | DONE | Hai MP3 24.5s +0.75/+1 cung, ffprobe/decode/loudness đạt; chờ đánh giá âm sắc |
| AUDIO-05 | Kiểm tra kỹ thuật nguồn vocals mới | DONE | Metadata/decode/loudness đạt; WORK_LOG. Không duyệt chất lượng nghe; quyết định master sau đó ở D-026 |
| AUDIO-06 | Giọng thống nhất + VoiceStudio offline — tích hợp kỹ thuật | DONE | 145/145 đoạn,290 MP3; audit/decode/build/export đạt, backup/restore297 file SHA256 khớp, unit18/18,audio E2E4/4,Python2/2,cache/profile guard đạt. Finalize-report20:22:49 +07:00; mọi audio unreviewed, chất lượng nghe ở AUDIO-02/07 |
| AUDIO-07 | Nghe duyệt audio trước xuất bản | TODO | Người có chuyên môn đối chiếu chữ Hán/Pinyin, bốn thanh, chữ đa âm, độ tự nhiên và quyền media; lưu bằng chứng trước approved. Chưa có output nào approved |


| AUDIO-08 | Thay giọng lỗi bằng mẫu A — tích hợp kỹ thuật | DONE | D-028 chọn A;145/145 mục,290MP3; Pinyin/打算 regression3/3,unit18/18,E2E6/6,build/export SHA256 đạt,backup/restore295file. Toàn bank vẫn unreviewed, duyệt ở AUDIO-07 |

| POD-01 | Podcast local bằng giọng A và nhạc miễn phí có giấy phép | DONE | 3 tập/30 đoạn/6MP3; CC BY4.0 credit; transcript/seek/music switch/rate/retry; unit20/20,E2E10/10,typecheck/lint/build đạt; QA6file; restore19file SHA256; PODCAST_RUNBOOK, ERRORS_AND_FIXES, reports/podcast-inventory.json. Chỉ DONE phạm vi kỹ thuật local |
| POD-02 | Duyệt và xuất bản podcast | TODO | Người có chuyên môn duyệt chữ/Pinyin/phát âm; CMS revision, reviewer/publication và đường phục vụ bản approved; hiện toàn bộ unreviewed và live API chặn |

| POD-03 | Lo-fi chill và hoàn thiện nghe hằng ngày | DONE | 7 tập/70 đoạn/14MP3; giữ3voice SHA; CC BY4.0 credit; resume/yêu thích/tìm/lặp/liên tục/transcript; unit21/21,E2E14/14,typecheck/lint/build/QA14file đạt; restore33file hash khớp. Chỉ DONE kỹ thuật local; duyệt/xuất bản ở POD-02 |

| POD-06 | Thống nhất tên Hán Ngữ Lab trong âm thanh | DONE | D-043:14đoạn/7tập và phụ đề tên mới; cùng giọngA,29đoạn PCM/nền giữ nguyên;290file bài học giữ SHA;ASR7tập nhận tên mới2lần/tập;unit22/E2E10/typecheck/lint/build đạt;backup/restore70file khớp. Chỉ DONE kỹ thuật local |
| POD-05 | Khôi phục phụ đề podcast | DONE | D-042: 43 đoạn/7 tập, chữ Hán/Pinyin/nghĩa Việt, highlight/seek/tự cuộn; typecheck/lint/build đạt, unit22/22,E2E10/10; backup/restore39file khớp SHA; 14MP3 không đổi. Duyệt chuyên môn còn ở POD-02 |
| POD-04 | Áp dụng radio theo preset chủ dự án chốt | DONE | D-041:v9+1.3dB/nhạc v8 nguyên;7tập/14MP3;integrity/sourcevoice+music đạt;unit22/22,E2E14/14,typecheck/lint/build/export/ASRtriage7tập đạt;restore34file hashkhớp. Chỉ DONE kỹ thuật local;POD-02 còn duyệt/xuất bản |

POD-04 bằng chứng mẫu (2026-10-19T14:50:19.8021012+07:00): pilot-mix.mp3 76.94s,14đoạn; nhạc nguồn chủ dự án; render/ASR exit0; báo cáo true peak -1.94dBTP. Trạng thái IN_PROGRESS vì mới mẫu local, còn tích hợp radio và luân phiên tập.

POD-04 v2 (2026-10-19T15:41:10.4719983+07:00): mẫu78.28s/7đoạn, không đọc lặp/cụm ghi nhớ; nền ổn định không speech duck. IN_PROGRESS, chờ chủ dự án chốt mẫu theo D-033 trước áp dụng full. File và report có hậu tố v2; giữ v1.

POD-04 v3 (2026-10-19T19:15:07.5198195+07:00): mẫu87.060s, tốc độ.84, nhạc dài CC BY4.0 excerpt liên tục,loopCount0,range1.217dB; render/ASR đạt,backup14file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt theo D-033; chưa đổi web.

POD-04 v4 (2026-10-19T21:45:53.6503584+07:00): chủ dự án từ chối nhạc v3; mẫu87.060s nền tham chiếu cũ + WAVgiọng chậm v3 giữ SHA. Render/true peak đạt,backup8file SHAkhớp. IN_PROGRESS chờ nghe/chốt; không áp dụng full.

POD-04 EQ (2026-10-19T21:48:29.8968579+07:00): mẫu thanh nhẹ87s,samev4music,không pitch/speed; đo true peak -4.07dBTP. IN_PROGRESS chờ nghe/chốt.

POD-04 v7 (2026-10-19T22:04:19.8363573+07:00): piano file mới chủ dự án,cắt-ghép14s vào nguồn55s,crossfade2s,nguyênnhịp/caođộ,đủ7đoạn87.060s. Nềnbalance -5.57dB/true peak -3.58dBTP;ASR đạt,backup11file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt; không áp dụngweb.

POD-04 v8 (2026-10-19T22:06:51.6085568+07:00): tăng nền3.52dB/balance-2.05dB,87.060s,voiceSHA giữ nguyên. Render/ASR đủ nội dung,true peak-3.26dBTP;backup5file hashkhớp. IN_PROGRESS chờ chủ dự án nghe/chốt,không đổiweb.

POD-04 v9 (2026-10-19T22:16:59.3083211+07:00): mẫu dẫn/kểchuyện87.060s,lờikết80.98s;giọngA nhịp.82–.90/ngắt theoý,nhạcPCMv8giữSHA bbcd3e0f... (full trong report) và residualmix<1e-7. Render/ASR chạy đạt;ASR 好→号 còn cần nghe,không tựduyệt. Backup11file hashkhớp. IN_PROGRESS chờ chủ dự án chốt,không đổiweb.
