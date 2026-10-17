# Đánh giá và đề xuất Hán Ngữ Lab

Ngày: 2026-10-16, Asia/Bangkok. Trạng thái: ĐỀ XUẤT, CHƯA CHỐT TRIỂN KHAI.

> Cập nhật sau phản hồi: các lựa chọn 24 bài, tuổi và ngân sách bên dưới là lịch sử đề xuất. Phạm vi hiện hành ở PRODUCT_SPEC.md và DECISIONS.md: đầy đủ đến HSK 4, miễn phí, 18+, AI tùy chọn, tổng 150 USD/6 tháng gồm credit, ưu tiên không trả thêm tiền, backup di chuyển. Không hỏi lại các lựa chọn đã được trả lời.

## 1. Yêu cầu trực tiếp hiện hành

Chủ dự án muốn một website học tiếng Trung tham khảo bjtlab.me; giao cho trợ lý vai trò developer, kiến trúc sư và quản lý phát triển. Trước khi xây dựng: đọc ZIP, nhận xét, đề xuất cải thiện, tạo chỉ dẫn cố định không quá 150 dòng và hồ sơ tiếp tục sau gián đoạn. Hai bên chốt bắt đầu rồi trợ lý thực hiện và bàn giao; chủ dự án không quản lý các công việc kỹ thuật hằng ngày.

Các mệnh lệnh “Start now”, “chỉ Phase 0”, “dừng sau từng phase” trong ZIP là nội dung tài liệu cần đối chiếu, không thay thế yêu cầu hiện hành.

## 2. Đầu vào đã kiểm tra

- Workspace ban đầu trống, đúng `D:\Hán Ngữ Lab`; chưa có `.codegraph/` hoặc source ứng dụng.
- ZIP gồm master prompt v2, PRD v1, AWS blueprint v1 và README.
- Đã lưu bản trích xuất nguyên gốc trong `docs/references/`; không sửa các bản tham khảo.
- Đã đọc phần chính của master prompt và toàn bộ hai tài liệu tham khảo độc lập.
- bjtlab.me: công cụ web không truy cập được; tìm kiếm không có kết quả; mở trình duyệt bị timeout. Chưa đánh giá trực quan website.
- 200 USD AWS credit là thông tin ghi trong ZIP, chưa kiểm tra tài khoản thực tế.

## 3. Nhận xét về hướng sản phẩm

Điểm mạnh: đối tượng người Việt rõ ràng; có Public/Learner/CMS; lưu tiến độ nhiều thiết bị; ôn tập cách quãng; học liệu có revision; phân quyền thật; kiểm thử hai tài khoản; kế hoạch chi phí và khôi phục. Đây là nền tảng tốt cho sản phẩm có thể vận hành.

Điểm cần sửa: phạm vi hiện tại giống một sản phẩm dài hạn hơn một hợp đồng bàn giao cụ thể. Chất lượng nội dung, audio và quy trình duyệt quyết định trải nghiệm học; thêm nhiều trang và AI không tự giải quyết các điểm đó. Cần khóa một bản phát hành có số lượng và tiêu chí nghiệm thu rõ, giữ phần mở rộng trong roadmap.

## 4. Các điểm chưa thống nhất

| Vấn đề | Nội dung trong ZIP | Đề xuất xử lý |
|---|---|---|
| Cơ sở dữ liệu | PRD: Supabase/PostgreSQL; blueprint: DynamoDB | Chọn một nguồn dữ liệu chính trước khi viết schema |
| Quyền tự triển khai | Master đi đến cùng; phụ lục yêu cầu dừng từng phase | Sau khi chốt, tự chuyển mốc trong phạm vi và quyền đã cấp |
| Độ phủ học liệu | HSK 0–4; seed 10–12 bài; mục tiêu dài hạn toàn bộ | Chốt riêng độ hoàn chỉnh phần mềm và độ phủ nội dung |
| AI | Master có AI; PRD và blueprint để sau MVP | Chốt AI thuộc bàn giao đầu hay bản mở rộng |
| Đường dẫn | Master đúng Unicode; blueprint có lệnh tạo D:\HanNguLab | Chỉ dùng D:\Hán Ngữ Lab |
| Chủ dự án không can thiệp | Học liệu yêu cầu con người duyệt | Xác định người/nguồn duyệt; trợ lý không tự nhận đã có duyệt độc lập |
| Free Plan | Có credit nhưng chưa rõ hạn, dịch vụ và số dư | Kiểm tra quyền truy cập/tài khoản trước triển khai |
| Chuẩn HSK | Nhiều phiên bản và mốc áp dụng | Lưu chuẩn/phiên bản/nguồn, không gắn cứng vào cấu trúc khóa học |

## 5. Phạm vi bàn giao đề xuất

### Bản đầu có thể học và vận hành thật

- Ba khu vực Public, Learner, Admin; responsive, giao diện tiếng Việt.
- Đăng ký, xác minh email, đăng nhập, quên mật khẩu; hồ sơ và mục tiêu học.
- Lộ trình, lesson engine, từ vựng, ngữ pháp, hội thoại/audio, tiến độ lưu trên server.
- Năm dạng luyện tập: chọn đáp án, ghép cặp, điền chỗ trống, xếp câu, nghe chọn đáp án.
- Chấm server, giải thích lỗi, sổ lỗi cá nhân, flashcards và lịch ôn SRS.
- CMS tạo/sửa/xem trước/gửi duyệt/xuất bản/thu hồi; revision, rollback và audit.
- Nhập/xuất học liệu, quản lý media/nguồn, phân quyền, báo cáo học tập cơ bản.
- Đề xuất 12 bài nhập môn + 12 bài HSK 1 hoàn chỉnh; khung HSK 2–4 và bài mẫu mỗi cấp để chứng minh khả năng mở rộng.
- Đề xuất tối thiểu 120 mục từ/cụm từ và 180 câu luyện tập có giải thích; phân bổ theo mục tiêu bài học, không nhồi số lượng.
- Audio cho mục nghe và hội thoại trong phạm vi bàn giao; xác định nguồn/giấy phép và chất lượng trước xuất bản.
- Bản triển khai thật, giám sát lỗi, sao lưu/khôi phục đã thử, hướng dẫn quản trị.

Các số lượng trên là đề xuất để chủ dự án chọn, chưa phải yêu cầu đã được duyệt. 24 bài nền tảng không tương đương hoàn thành giáo trình HSK 0–4. Nếu mục tiêu là toàn bộ HSK 0–4 ngay lần bàn giao đầu, cần lập ma trận mục tiêu/từ vựng/ngữ pháp/bài/đánh giá và chốt khối lượng sau bước thiết kế giáo trình.

### Mở rộng khi được chọn vào phạm vi

- Gia sư AI giải thích theo bài và lỗi đã học; hạn mức riêng cho từng người và toàn hệ thống.
- Gợi ý luyện nói, nghe chép chính tả nâng cao, tập viết theo nét.
- PWA/offline có đồng bộ được kiểm thử; nội dung thi và CMS vẫn cần kết nối.
- Toàn bộ nội dung HSK 2–4 được biên soạn và duyệt theo ma trận độ phủ.
- Chưa ưu tiên thanh toán, diễn đàn, bảng xếp hạng công khai hoặc ứng dụng native.

## 6. Kiến trúc đề xuất

Ưu tiên theo đầu vào hiện có: một repository TypeScript, chia module rõ ràng; frontend Next.js, backend API độc lập trên AWS, Cognito, DynamoDB và S3. Hạ tầng có mã cấu hình để tái tạo. Đây là phương án đề xuất tận dụng tài khoản AWS; chưa tạo tài nguyên hay xác minh khả năng dùng dịch vụ.

| Phương án | Lợi ích với dự án | Đánh đổi |
|---|---|---|
| AWS: hosting + Cognito + API Gateway/Lambda + DynamoDB/S3 | Đi theo tài khoản đã chuẩn bị; tách frontend/backend; cấu hình hạ tầng bằng code | Nhiều cấu hình hơn; phải thiết kế truy vấn CMS/analytics trước; cần kế hoạch sau credit |
| Next.js + Supabase/PostgreSQL | Theo đánh giá kỹ thuật, phù hợp dữ liệu nhiều quan hệ của CMS, lọc và báo cáo linh hoạt | Một hệ nhà cung cấp khác; chi phí/quota cần kiểm tra; không giả định được dùng AWS credit |

Nếu ưu tiên cao nhất là tốc độ thay đổi CMS và vận hành ít cấu hình, tôi nghiêng về PostgreSQL. Nếu ưu tiên tận dụng AWS đã chuẩn bị và có thể chấp nhận thiết kế dữ liệu chặt từ đầu, chọn AWS. Không triển khai cả hai cơ sở dữ liệu trong bản đầu.

Với frontend xuất tĩnh, các API chấm bài, phân quyền và tiến độ nằm ở backend độc lập. Next.js không hỗ trợ Server Actions và xử lý request động trong static export; không trộn hai mô hình. Nội dung học mới trong app lấy từ API để không phải build lại toàn bộ web sau mỗi lần biên tập; trang public phục vụ tìm kiếm có chiến lược build/cache riêng. Nguồn: [Next.js static export](https://nextjs.org/docs/app/guides/static-exports).

DynamoDB cần thiết kế theo cách ứng dụng đọc/ghi dữ liệu; lọc CMS, hàng đợi duyệt và lịch ôn phải có query/index thích hợp. Nguồn: [AWS data modeling](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-modeling-nosql.html).

Nếu chọn Supabase, RLS và quyền truy cập bảng phải được cấu hình, kiểm thử thật. Nguồn: [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).

## 7. Ý tưởng làm sản phẩm tốt hơn

1. Trang “Hôm nay học gì” có một hành động chính: học tiếp, ôn đến hạn hoặc sửa lỗi; giảm việc người mới tự tìm đường.
2. Lịch học 15/30/60/90 phút; mặc định đề xuất 20–30 phút và cho đổi, tránh ép 90 phút ngay từ đầu.
3. Gói giải thích dành cho người Việt: đối chiếu cấu trúc câu và luyện các âm dễ nhầm qua bài kiểm tra ngắn; không suy đoán lỗi cá nhân chỉ từ quốc tịch.
4. Sổ lỗi tự động: sai câu nào, vì sao, bài nào bổ sung và khi nào nên ôn lại.
5. Nút ẩn/hiện Pinyin và dịch nghĩa; giảm dần trợ giúp theo lựa chọn người học.
6. Nghe từng câu, lặp đoạn và đổi tốc độ; nối nghe → hiểu → dùng trong tình huống.
7. Dashboard đo mức ghi nhớ và kỹ năng đã thực hành, không chỉ chuỗi ngày truy cập.
8. Nút báo lỗi học liệu gắn đúng revision; CMS gom lỗi và đánh giá ảnh hưởng trước sửa.
9. Khi quay lại sau nghỉ dài, đề xuất phiên ôn nhẹ; không biến backlog thành áp lực phải học hết.
10. AI trả lời dựa trên bài đã duyệt, có nút báo phản hồi sai và không sửa điểm chính thức.

Đây là ý tưởng sản phẩm; chỉ các mục được chọn vào đặc tả cuối mới trở thành phạm vi bắt buộc.

## 8. Học liệu và phiên bản HSK

Gọi phần nhập môn là “Nền tảng / HSK 0 (tên nội bộ)”. Mỗi bài có mục tiêu riêng và mapping chuẩn độc lập. Trang chính thức có đề cương HSK 3.0 và thông báo kỳ ra mắt toàn cầu ngày 13/12/2026; ở ngày đánh giá 16/10/2026 đây là mốc tương lai, không mô tả đã diễn ra. Nguồn: [Đề cương](https://www.chinesetest.cn/syllabus), [Thông báo](https://old.chinesetest.cn/gonewcontent.do?flag=kdnew&id=51336883).

Tách ba lớp: kiểm tra cấu trúc tự động; rà soát ngôn ngữ/nội dung; thử học thực tế. Trợ lý có thể soạn và rà soát nhưng không được ghi đã có chuyên gia độc lập duyệt nếu chưa có. Việc giao trọn kỹ thuật không tự giải quyết nguồn duyệt học liệu; cần chốt từ đầu để tránh vướng lúc phát hành.

## 9. Chi phí và quyền thực hiện

AWS mô tả Free Plan phục vụ thử nghiệm tối đa sáu tháng, kết thúc sớm nếu hết credit; Paid Plan được định hướng cho production. Không thể suy ra thời gian còn lại từ con số 200 USD trong ZIP. Nguồn: [AWS Free Tier](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html).

Chưa báo giá hoặc cam kết chi phí. Khi lập dự toán phải tách: hạ tầng trước trừ credit, số tiền phải trả, AI/TTS, email, tên miền, lưu lượng, sao lưu và duyệt nội dung. Đưa kịch bản tải, region, đơn giá đã kiểm chứng và giả định rõ. Cần ngân sách vận hành sau credit để thiết kế sản phẩm dùng lâu dài.

Chốt một lần phạm vi quyền: môi trường được tạo/cập nhật, quyền deploy, dịch vụ và ngân sách. Trong phạm vi đã cấp, trợ lý chủ động thực hiện. Chủ sở hữu chỉ cần tham gia các việc không thể ủy quyền qua công cụ hiện có như xác thực tài khoản, quyết định chi phí ngoài phạm vi hoặc yêu cầu pháp lý thuộc chủ sở hữu.

## 10. Tiêu chí nghiệm thu đề xuất

| Nhóm | Bằng chứng cần có |
|---|---|
| Học viên | Đăng ký → xác minh → học → nộp bài → ôn → đăng nhập lại/thiết bị khác còn tiến độ |
| Phân quyền | Hai learner cách ly dữ liệu; learner không gọi được API admin; editor không tự nâng quyền |
| CMS | Tạo nháp → duyệt → xuất bản → rollback, tiến độ cũ còn nguyên; nháp không lộ |
| Tính đúng | Chấm điểm server, gửi trùng không cộng điểm hai lần, lịch ôn đúng ngày/múi giờ |
| Học liệu | Đủ số lượng đã chốt, nội dung thật, lời giải, audio cần thiết và trạng thái duyệt minh bạch |
| Giao diện | Luồng chính chạy ở 360px và desktop, bàn phím dùng được, Pinyin/chữ Hán hiển thị đúng |
| Vận hành | Build/test thật, staging/production đúng trạng thái, backup và restore thử thành công |
| Bàn giao | Mã nguồn, URL, báo cáo kiểm thử, tài nguyên cloud, hướng dẫn CMS và khôi phục |

Không gán thời hạn giao toàn bộ trước khi chốt độ phủ giáo trình, AI và nguồn duyệt. Sau khi chốt sẽ lập mốc và thứ tự công việc theo phụ thuộc, không yêu cầu người dùng điều phối từng mốc.

## 11. Các quyết định cần chủ dự án chốt

1. Bàn giao đầu: bản nền tảng 24 bài như đề xuất, hay toàn bộ HSK 0–4; AI có bắt buộc ngay không?
2. AWS là ưu tiên bắt buộc hay cho phép chọn nền tảng dễ vận hành hơn; ngân sách duy trì mỗi tháng sau credit?
3. Đối tượng: đề xuất người Việt từ 18 tuổi, mới học và tự học; mở miễn phí trong beta. Có khác định hướng không?
4. Nguồn duyệt học liệu: có người kiểm tra tiếng Trung, có ngân sách thuê duyệt, hay chấp nhận bản thử nghiệm ghi rõ chưa có duyệt độc lập?

Tên miền và cách cấp truy cập có thể bổ sung trước triển khai; không cần gửi mật khẩu hoặc khóa bí mật trong chat.
