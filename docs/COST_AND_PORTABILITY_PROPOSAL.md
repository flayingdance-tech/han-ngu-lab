# Đề xuất chi phí, AI và di chuyển

Ngày nghiên cứu: 2026-10-16, Asia/Bangkok. Chưa triển khai; không phải báo giá hay cam kết uptime/tải.

## Ngân sách thực tế

- Chủ dự án chốt tổng 150 USD/6 tháng, gồm credit; sau đó cung cấp số dư 200 USD và yêu cầu tối ưu credit, không trả thêm tiền.
- Áp dụng bảo thủ: 150 USD là trần dự toán đang có; 200 USD là số dư được báo, không tự mở rộng quyền chi.
- Hai sổ: chi phí dịch vụ trước credit và tiền thực trả sau credit; mục tiêu tiền thực trả bằng 0.
- Đề xuất chia nội bộ: tối đa 120 USD cho toàn bộ hoạt động dự kiến, 30 USD cho dự phòng/di chuyển trong cùng trần 150; chưa phải dự toán theo đơn giá dịch vụ.
- Credit hết hạn hoặc không áp dụng thì không coi khoản dự phòng đó là tiền mặt khả dụng.
- Dùng tên miền phụ miễn phí lúc đầu; không tự mua domain, thuê người duyệt, trả tiền email hoặc kích hoạt AI trả phí.
- Cảnh báo ngân sách không phải khóa chi tuyệt đối; cần kiểm tra plan, eligibility, quota và ngừng tác vụ không thiết yếu trước khi vượt giới hạn.

## Hướng triển khai đề xuất

Ưu tiên AWS cho giai đoạn credit còn hiệu lực: frontend tĩnh, API theo lượt dùng, dữ liệu và media có adapter. Tránh hạ tầng luôn chạy nếu không cần. Trước chọn DB phải kiểm tra đồng thời chi phí và đường phục hồi ngoài AWS; không khóa nghiệp vụ học tập vào SDK nhà cung cấp.

Nhánh dự phòng đang khảo sát: Cloudflare Pages/Workers/D1 ở free tier. Có hạn mức miễn phí, không phải dịch vụ vô hạn. D1 Free hiện nêu 5 triệu hàng đọc/ngày, 100 nghìn hàng ghi/ngày, tổng 5 GB; vượt hạn mức có thể khiến truy vấn thất bại. Đây là lý do phải đo query/index và tải thật, không đổi trực tiếp quota thành số người dùng đảm bảo. Nguồn: [D1](https://developers.cloudflare.com/d1/platform/pricing/), [Workers](https://developers.cloudflare.com/workers/platform/pricing/), [Pages](https://developers.cloudflare.com/pages/platform/limits/).

Nhánh Cloudflare chưa đủ một mình để kết luận có thể chuyển cả ứng dụng: phải xác minh authentication, email xác minh/khôi phục, media/audio, backups, runtime và cơ chế chuyển user. Không giảm hệ thống thành web chỉ đọc để tuyên bố đáp ứng 6 tháng khi tài khoản/tiến độ không hoạt động.

Đề xuất vận hành kiểm chứng: kiểm tra tương thích migration trong phát triển; hoàn thành thử restore ngoài AWS trước phát hành; đánh giá chuyển nơi chạy ít nhất 30 ngày trước hạn thực tế, hoàn tất trước hạn với khoảng dự phòng. Đây là kế hoạch kỹ thuật, chưa có lịch automation hoặc người vận hành được cấu hình.

AWS Free Plan có thể hết khi dùng hết credit hoặc đến hạn sáu tháng từ lúc mở tài khoản, không phải từ ngày website được deploy. Hạn còn 5 tháng 20 ngày do chủ dự án cung cấp chưa đủ để hứa sáu tháng kể từ lúc phát hành. [AWS Free Tier](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html).

## Backup để thực sự chuyển được

1. Mã nguồn, lockfile, schema/migration, cấu hình mẫu, hướng dẫn build và hạ tầng; không chứa secret.
2. Export JSONL/CSV có version: giáo trình, revision, từ vựng, câu hỏi, đáp án riêng, tiến độ, lượt làm, lịch ôn, review events, vai trò và audit phù hợp.
3. Media/audio gốc kèm manifest, giấy phép, checksum và đường dẫn tương đối; không chỉ lưu URL S3 hết hạn.
4. User ID nội bộ tách khỏi provider subject; mapping tài khoản giữ tiến độ khi đổi hệ thống xác thực.
5. Xác minh khả năng chuyển credential của provider; không hứa xuất được mật khẩu/hash. Nếu cần đặt lại mật khẩu, giữ danh tính/tiến độ và thử luồng email trước khi chuyển.
6. Bản sao mã hóa ngoài AWS, khóa giải mã giữ riêng; đề xuất backup dữ liệu mỗi ngày, snapshot trước import/migration, giữ 7 bản ngày và 4 bản tuần nếu dung lượng cho phép.
7. Restore sang môi trường mới, đối chiếu số lượng/checksum, test hai user và CMS; đo thời gian phục hồi. Mục tiêu đề xuất mất dữ liệu tối đa 24 giờ, phục hồi 1 ngày; chưa được xác minh.
8. Cutover: chặn ghi ngắn hạn, export phần thay đổi, import, kiểm tra, đổi endpoint, có rollback và không nhận ghi đồng thời ở hai nơi.
9. Đích backup và lịch chạy phải được cấp quyền/cấu hình; file trên máy local không tự đồng bộ khi máy tắt. Không tuyên bố đã có backup tự động khi mới có thiết kế.

## AI hỗ trợ duyệt

| Lựa chọn | Có thể giúp | Điều kiện/giới hạn |
|---|---|---|
| Kiểm tra bằng code | Schema, tham chiếu, độ phủ, câu hỏi/đáp án thiếu, trùng dữ liệu | Không cần API; không thay rà soát ngữ nghĩa |
| Gemini API free tier | Gợi ý lỗi Pinyin, dịch Việt, ngữ pháp, đáp án và mức khó | Chọn model còn free tier, kiểm tra quota/region, chỉ gửi học liệu được phép |
| Amazon Bedrock | Model rà soát theo rubric, có thể dùng credit khi đủ điều kiện | Không mặc định miễn phí; giá theo model/usage, eligibility cần kiểm tra trong tài khoản |

Gemini có free tier ở một số model; không suy ra mọi model đều miễn phí. Tài khoản/project thực tế quyết định quota. Nguồn: [Pricing](https://ai.google.dev/gemini-api/docs/pricing), [Rate limits](https://ai.google.dev/gemini-api/docs/rate-limits).

Điều khoản Gemini yêu cầu người dùng API từ 18 tuổi và hạn chế API client hướng đến/có khả năng được người dưới 18 truy cập. Chủ dự án đã đổi website sang 18+; trước tích hợp cần xem toàn bộ cách cung cấp sản phẩm có đáp ứng điều kiện, không coi một checkbox là chứng minh tuân thủ. Unpaid Services có thể dùng đầu vào/đầu ra cải thiện sản phẩm và được người rà soát đọc; không gửi thông tin nhạy cảm hoặc học liệu bảo mật. [Gemini terms](https://ai.google.dev/gemini-api/terms).

Bedrock không phải dịch vụ chuyên gia duyệt giáo trình miễn phí. Dịch vụ có thể chạy model để đánh giá/góp ý nhưng tính phí theo cấu hình; credit áp dụng thế nào cần kiểm tra. [Bedrock pricing](https://aws.amazon.com/bedrock/pricing/).

Luồng đề xuất: biên soạn→kiểm tra code→AI góp ý nếu sẵn có→sửa→review con người khi có→xuất bản theo chính sách đã chốt. Các trạng thái chất lượng tách riêng khỏi publish status; AI không tự chuyển `human_reviewed=true` hoặc tự publish. Ưu tiên một lượt rà soát theo revision, cache kết quả, giới hạn số bài/token; không dùng agent gọi lặp vô hạn.

## Những gì chưa thể cam kết

- Chưa kiểm tra Console nên chưa biết ngày hết hạn chính xác, hạn riêng credit, model/dịch vụ đủ điều kiện hoặc quota account.
- Chưa có ứng dụng/load test nên chưa thể cam kết số người dùng đồng thời hoặc tổng chi phí.
- Chưa có đích backup, tài khoản nhà cung cấp thay thế, credentials hoặc test chuyển đổi.
- Không tự hẹn lịch giám sát hoặc cam kết chạy nền 6 tháng chỉ bằng ghi kế hoạch này; vận hành cần hệ thống/lịch/quyền thực sự được triển khai.
