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
