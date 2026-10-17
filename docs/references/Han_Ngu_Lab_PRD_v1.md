# HÁN NGỮ LAB — BẢN ĐẶC TẢ SẢN PHẨM VÀ KỸ THUẬT V1.0

**Ngày:** 16/10/2026  
**Trạng thái:** Đề xuất kiến trúc; chưa viết hoặc kiểm thử mã nguồn.  
**Mục đích:** Tài liệu triển khai từng giai đoạn bằng Codex.

## 0. Quyết định dự án

- Xây **website công khai** cho người Việt học tiếng Trung, hỗ trợ nhiều người dùng đồng thời.
- Có 3 không gian: **Public** (giới thiệu và bài thử), **Learner** (học cá nhân), **Admin CMS** (biên soạn, duyệt, vận hành).
- Trình độ đích: nhập môn HSK 0 → HSK 4; kiến trúc cho phép bổ sung HSK 5–6 sau này.
- Học liệu do đội ngũ biên soạn và duyệt; AI là trợ giảng, không phải nguồn kiến thức duy nhất.
- Giao diện lấy cảm hứng *về kiểu tổ chức trải nghiệm* từ bjtlab.me; **không sao chép mã, hình ảnh, logo, giao diện đặc thù hay nội dung có bản quyền**.
- Chọn **Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Supabase PostgreSQL/Auth/Storage, Zod, Vitest, Playwright**. Tính năng AI chỉ thêm khi phần học chính đã ổn định.
- Supabase là dữ liệu nguồn chính; **IndexedDB chỉ làm cache và hàng đợi offline**, không thay cơ sở dữ liệu tài khoản.
- Ngôn ngữ giao diện giai đoạn đầu: tiếng Việt; chữ Hán giản thể + Pinyin chuẩn dấu thanh, dùng UTF-8.

## 1. Mục tiêu, không mục tiêu

### Mục tiêu V1
1. Người học đăng ký, xác thực email, đăng nhập, đặt lại mật khẩu, đăng xuất; có hồ sơ riêng.
2. Chọn cấp độ, học bài, thực hành, làm bài kiểm tra, tiếp tục trên thiết bị khác.
3. Dashboard hiển thị bài đang học, số từ đã học, bài đến hạn ôn, hoạt động hằng ngày.
4. CMS cho người biên tập soạn nội dung, người duyệt kiểm tra và xuất bản.
5. Admin quản lý tài khoản/trạng thái người dùng, quyền theo vai trò, báo cáo tổng hợp, audit log.
6. Bảo vệ dữ liệu cá nhân với RLS thực tế, bảo mật API và kiểm thử xâm phạm giữa các tài khoản.
7. Có ít nhất 1 lộ trình nhập môn, 10–12 bài mẫu hoàn chỉnh để chạy thử end-to-end trước khi nhập đủ giáo trình.

### Chưa làm trong V1
- Thanh toán, gói hội viên, quảng cáo, livestream, lớp học video, diễn đàn, bảng xếp hạng công khai, AI chấm thanh điệu chính xác, tạo vô hạn bài học tự động.
- Ứng dụng Android native. PWA có thể triển khai sau khi bản web ổn định.
- Tự động cập nhật quy chuẩn HSK mà không cần người duyệt.

## 2. Personas / vai trò và quyền

| Vai trò | Quyền | Không có quyền |
|---|---|---|
| Guest | Xem marketing, thông tin khóa, bài demo công khai | Xem kết quả học của người khác |
| Learner | Học, lưu từ, nộp bài, xem/xuất/sửa dữ liệu của mình | Truy cập CMS và dữ liệu người khác |
| Editor | Soạn/sửa bản nháp được phân công, gửi duyệt | Tự xuất bản; nâng quyền |
| Reviewer | Duyệt/từ chối bài được giao; xuất bản theo quyền cấu hình | Quản lý tài khoản người dùng |
| Admin | Quản lý user, kiểm duyệt nội dung, analytics, hệ thống | Tự nâng mình thành Super Admin |
| Super Admin | Gán/thu hồi vai trò quản trị, vận hành toàn bộ | Không được bỏ qua audit log và kiểm soát an toàn |

Không dựa vào việc ẩn nút UI để kiểm soát quyền. Server và DB phải kiểm tra lại quyền trong mọi thao tác.

## 3. Bản đồ trang và điều hướng

### Public
- `/` Trang chủ: giới thiệu sản phẩm, lợi ích, mẫu bài học, CTA đăng ký.
- `/lo-trinh` Các cấp độ HSK, cấu trúc và thời lượng tham khảo.
- `/bai-hoc-mau/[slug]` Bài thử không yêu cầu đăng ký.
- `/dang-ky`, `/dang-nhap`, `/quen-mat-khau`, `/auth/callback`.
- `/gioi-thieu`, `/lien-he`, `/dieu-khoan`, `/quyen-rieng-tu`.

### Learner — yêu cầu xác thực
- `/app` Dashboard cá nhân.
- `/app/lo-trinh` Danh sách cấp, unit, bài và trạng thái hoàn thành.
- `/app/bai-hoc/[slug]` Nội dung bài; tab Từ vựng / Ngữ pháp / Hội thoại / Luyện tập.
- `/app/tu-vung` Từ điển, tìm kiếm, danh sách đã lưu.
- `/app/on-tap` Flashcard, từ đến hạn theo SRS.
- `/app/luyen-nghe`, `/app/luyen-noi`, `/app/luyen-viet` (mở dần theo phase).
- `/app/kiem-tra` Đề luyện và lịch sử kết quả.
- `/app/gia-su-ai` Chat theo ngữ cảnh (kích hoạt sau).
- `/app/tien-do`, `/app/ho-so`, `/app/cai-dat`.
- `/app/du-lieu` Xuất dữ liệu cá nhân và yêu cầu xóa tài khoản.

### CMS/Admin — server authorization
- `/admin` Tổng quan: học viên hoạt động, bài đang nháp, bài chờ duyệt, tình trạng nội dung, sự cố.
- `/admin/nguoi-dung` Tra cứu user, khóa/mở khóa có lý do, xem thông tin tối thiểu.
- `/admin/phan-quyen` Chỉ Super Admin.
- `/admin/khoa-hoc` Quản lý khóa, cấp, unit, bài và thứ tự.
- `/admin/bai-hoc` Danh sách + trình soạn bài theo form và preview.
- `/admin/tu-vung`, `/admin/ngu-phap` Danh mục dùng chung.
- `/admin/cau-hoi`, `/admin/de-thi` Ngân hàng câu hỏi, đáp án, bộ đề.
- `/admin/kiem-duyet` Quy trình duyệt, ghi chú, so sánh phiên bản, rollback.
- `/admin/tai-nguyen` Ảnh, audio, giấy phép và xuất xứ tài liệu.
- `/admin/bao-cao` Số lượt hoạt động, tỷ lệ hoàn thành, câu hỏi sai nhiều, không lộ danh tính không cần thiết.
- `/admin/nhat-ky` Audit log.
- `/admin/cau-hinh` Feature flags, ngưỡng hạn mức AI, chính sách nội dung.

## 4. Hành trình người dùng

### Đăng ký
`Landing → Đăng ký email/mật khẩu → Đồng ý chính sách theo bản hiện hành → Xác minh email → Tạo profile → Hỏi trình độ/mục tiêu (có thể bỏ qua) → Dashboard → Bài đầu tiên.`

### Học bài
`Dashboard → Bài kế tiếp → Từ vựng → Ngữ pháp → Hội thoại/audio → Bài tập → Gửi đáp án → Kết quả/giải thích → Ghi nhận tiến độ → Lên lịch ôn SRS.`

### Soạn và xuất bản
`Editor tạo nháp → Kiểm tra schema + Pinyin + đáp án + nguồn media → Gửi duyệt → Reviewer xem khác biệt và thử bài → Approve/Reject → Xuất bản revision bất biến → CDN/cache được làm mới → Học viên nhìn thấy bản phát hành.`

### Khi bài học được sửa
Luôn có `lesson_id` bất biến, `revision_id` riêng. Học viên gắn tiến độ với `lesson_id`, bài đã học ghi nhận `completed_revision_id`; bản sửa nội dung không reset trạng thái đã học. Chỉ một tác vụ chuyển đổi được duyệt mới điều chỉnh yêu cầu học lại.

## 5. Đặc tả chức năng

### 5.1 Giáo trình
- Cấu trúc Course → Level → Unit → Lesson → Sections.
- Một lesson gồm `objectives`, `prerequisites`, `vocabulary`, `grammar`, `dialogues`, `listening`, `exercises`, `summary`, `estimated_minutes`.
- Nội dung chung lưu riêng và liên kết theo ID để dùng lại qua nhiều bài.
- Hỗ trợ chữ Hán, Pinyin có dấu, nghĩa tiếng Việt, audio, ví dụ, giải thích, thẻ từ.
- Có trạng thái `draft`, `in_review`, `approved`, `published`, `archived` và lịch sử revision.
- `curriculum_standard` có `code`, `version`, `effective_date`, `source_url` để ánh xạ HSK 2.0/3.0 khi cần. Không giả định hai chuẩn tương thích 1:1.

### 5.2 Bài tập và đánh giá
- MVP: multiple choice, match-pairs, fill-blank, order-words, listening MCQ.
- Câu luyện tập có thể cho xem giải thích sau nộp. Đề kiểm tra có đáp án **chỉ ở server/private schema** trước khi người học nộp và đủ điều kiện xem.
- Mỗi submission có `attempt_id`, `idempotency_key`, `submitted_at`, `score`, `feedback`; server không tin điểm client tự gửi.
- Lưu sai lầm thường gặp; phân tích tỷ lệ sai theo câu hỏi để Editor điều chỉnh nội dung.

### 5.3 SRS
- Dùng thư viện FSRS có phiên bản khóa phụ thuộc; mỗi user/word là một trạng thái ôn tập.
- Sau lượt ôn ghi `rating`/`duration`, thuật toán tính `due_at`, `stability`, `difficulty` ở server hoặc tái kiểm chứng từ sự kiện đồng bộ.
- Vùng giờ mặc định Asia/Ho_Chi_Minh nhưng có thể thay trong hồ sơ; server lưu thời điểm UTC.
- Chặn gửi trùng sự kiện bằng unique `(user_id, idempotency_key)`.

### 5.4 AI gia sư — sau MVP
- Mỗi lượt chat chuyển qua API server; không gọi nhà cung cấp bằng khóa bí mật trong trình duyệt.
- Prompt chứa bài và cấp độ đã xuất bản (retrieval), câu hỏi của học viên và chỉ mức dữ liệu tối thiểu.
- Có giới hạn lượt/ngày, token, ngân sách toàn hệ thống, rate limit và tắt khẩn cấp.
- Chỉ đưa phản hồi AI như gợi ý; không tự ghi kết quả kiểm tra chính thức hay đăng bài.
- Cho người dùng xóa hội thoại; không ghi dữ liệu nhạy cảm vào log và không lưu audio dài hạn nếu không có lý do/chấp thuận.

### 5.5 Âm thanh
- Nội dung cốt lõi ưu tiên audio đã kiểm duyệt/được cấp phép; có thể TTS ở nơi có chất lượng phù hợp.
- Nhận dạng giọng nói không tương đương chấm thanh điệu: chỉ hiển thị kết quả gợi ý, chưa gắn nhãn đạt/chưa đạt phát âm.
- Quy định giấy phép và attribution theo từng audio/tài nguyên.

## 6. Cơ sở dữ liệu sơ bộ (PostgreSQL)

Sử dụng `auth.users` do Supabase quản lý, khóa người dùng UUID.

| Table | Trường quan trọng | Quy tắc |
|---|---|---|
| `profiles` | `user_id PK`, `display_name`, `locale`, `timezone`, `status` | Chủ sở hữu đọc/sửa trường được cho phép |
| `user_roles` | `user_id`, `role`, `granted_by`, `created_at` | Chỉ server admin được sửa |
| `consent_records` | `id`, `user_id`, `policy_version`, `accepted_at` | Append-only bởi quy trình xác minh |
| `courses` | `id`, `slug`, `title`, `status` | Public chỉ thấy published |
| `curriculum_standards` | `id`, `code`, `version`, `source_url` | Quản trị nội dung |
| `levels` | `id`, `course_id`, `level_code`, `sort_order` | Public chỉ thấy published |
| `units` | `id`, `level_id`, `sort_order` | Public chỉ thấy published |
| `lessons` | `id`, `unit_id`, `slug`, `published_revision_id` | ID ổn định |
| `lesson_revisions` | `id`, `lesson_id`, `revision_no`, `content_json`, `status`, `author_id` | Bản published bất biến |
| `vocab_items` | `id`, `hanzi`, `pinyin`, `meaning_vi`, `source` | Danh mục chung |
| `grammar_points` | `id`, `pattern`, `explanation_vi`, `examples_json` | Danh mục chung |
| `lesson_vocab` | `lesson_revision_id`, `vocab_id`, `sort_order` | Link nhiều-nhiều |
| `lesson_grammar` | `lesson_revision_id`, `grammar_id`, `sort_order` | Link nhiều-nhiều |
| `question_items` | `id`, `type`, `public_payload`, `difficulty`, `status` | Không chứa đáp án mật |
| `question_secrets` | `question_id`, `answer_key`, `rubric` | Schema private/server only |
| `lesson_progress` | `user_id`, `lesson_id`, `completed_revision_id`, `completed_at` | User chỉ sở hữu record của mình |
| `exercise_attempts` | `id`, `user_id`, `question_id`, `answer`, `server_score`, `created_at` | Chấm server, RLS chủ sở hữu |
| `review_states` | `user_id`, `vocab_id`, `due_at`, `stability`, `difficulty` | Unique user + word |
| `review_events` | `id`, `user_id`, `vocab_id`, `rating`, `idempotency_key` | Chống gửi trùng |
| `study_sessions` | `id`, `user_id`, `started_at`, `ended_at`, `activity_type` | Thống kê thời lượng hợp lệ |
| `exam_templates` | `id`, `level_id`, `status`, `scoring_config` | Người học thấy đề đã published |
| `exam_attempts` | `id`, `user_id`, `template_id`, `score`, `submitted_at` | User của mình; chấm server |
| `media_assets` | `id`, `url_or_path`, `type`, `license`, `attribution`, `owner_id` | Cho phép theo trạng thái/role |
| `content_reviews` | `id`, `revision_id`, `reviewer_id`, `decision`, `comments` | Audit workflow |
| `admin_audit_logs` | `id`, `actor_id`, `action`, `target_type`, `target_id`, `created_at` | Chỉ admin có quyền; append-only |
| `ai_usage` | `id`, `user_id`, `usage_date`, `tokens_in`, `tokens_out`, `estimated_cost` | Giới hạn chi phí và hiển thị cho chính user |
| `deletion_requests` | `id`, `user_id`, `status`, `requested_at` | Quy trình dữ liệu cá nhân |

Migrations phải bao gồm PK, FK, UNIQUE, indexes trên `user_id`, `due_at`, `status`, `slug`, và `created_at` phù hợp với truy vấn. Không tin dữ liệu từ JSON do client gửi nếu chưa được Zod/DB constraint xác nhận.

## 7. Chính sách truy cập và bảo mật

1. Tất cả bảng ở schema có thể truy cập từ Data API phải kiểm soát **GRANT + RLS**; chính sách riêng cho SELECT/INSERT/UPDATE/DELETE. Mặc định deny.
2. `lesson_progress`, `review_states`, `review_events`, `study_sessions`, `exercise_attempts`, `exam_attempts` chỉ cho user hiện tại đọc record của mình; mutate qua server hoặc policy kiểm tra `auth.uid()`; không cho chỉnh `user_id`.
3. `user_roles`, `question_secrets`, audit và secrets không cho client quyền ghi/đọc tùy tiện; private schema hoặc API server có xác thực mạnh.
4. Quyền admin kiểm tra bằng server-side RBAC và kiểm tra lại ở DB. Không lấy role từ `raw_user_meta_data` có thể do người dùng sửa.
5. Khóa Supabase server/secret, khóa Gemini, API tokens chỉ dùng server-side; không commit `.env*` hay đưa vào `NEXT_PUBLIC_*`.
6. Tách cache public khỏi phản hồi có cookie/tài khoản; không cache ISR/CDN trên tuyến đăng nhập hoặc dữ liệu user.
7. Xác thực email, chính sách mật khẩu, đặt lại mật khẩu có hạn, xác minh phiên, MFA bắt buộc cho admin nếu hỗ trợ; giới hạn tốc độ đăng nhập, gửi mail và AI.
8. Media uploads giới hạn mime/size, kiểm tra nội dung, dùng đường dẫn private/signed cho tài nguyên hạn chế; chống XSS, CSRF tùy loại route, injection.
9. Admin actions: audit gồm actor/action/target/time/diff tối thiểu, lý do đình chỉ user; không log password, token, chat hay nội dung nhạy cảm.
10. Tách môi trường development/staging/production; backup định kỳ, diễn tập restore, migration có rollback, cấu hình monitor chi phí và lỗi.

**Kiểm thử RLS bắt buộc:** user A không được xem/sửa trạng thái học của B; anonymous không được ghi tiến độ; editor không được xuất bản nếu chưa đủ quyền; người bị khóa không thể tiếp tục gọi API quản trị; client không thể chèn role; đáp án đề kín không được truy xuất trước lúc nộp.

## 8. Pháp lý và quyền riêng tư khi phát hành công khai

- Việt Nam: Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 có hiệu lực từ 01/01/2026; Nghị định 356/2025/NĐ-CP có hiệu lực cùng ngày. Cần kiểm tra thêm nghĩa vụ cụ thể tùy chủ thể, cách xử lý, lưu chuyển dữ liệu xuyên biên giới, và đối tượng trẻ em trước khi phát hành.
- Hiển thị thông báo minh bạch về loại dữ liệu thu thập, mục đích, dịch vụ liên quan, thời gian lưu giữ, quyền của chủ thể dữ liệu, cách liên hệ và thực hiện các yêu cầu.
- Chỉ xin thông tin tối thiểu lúc đăng ký: email, tên hiển thị, mật khẩu do hệ thống Auth xử lý; trường bổ sung là tùy chọn.
- Có khả năng truy xuất/xóa dữ liệu và xử lý yêu cầu xóa tài khoản với chính sách lưu hồ sơ hợp pháp.
- Nếu mở cho người dưới tuổi trưởng thành: thiết kế quy trình và điều kiện phù hợp, có kiểm tra tư vấn pháp lý.
- Bên xử lý dữ liệu bên ngoài (hosting, auth, AI, email, analytics) cần được liệt kê, đánh giá điều khoản và luồng truyền dữ liệu.
- Tránh dùng logo HSK theo cách ngụ ý website được cấp chứng nhận chính thức; trình bày "lộ trình tham chiếu HSK".
- Mọi tài liệu, dữ liệu từ điển, ảnh, audio, font, đề thi đều phải có giấy phép phù hợp. AI không đảm bảo loại trừ vi phạm bản quyền.

## 9. Phong cách thiết kế

- Mục tiêu: sáng sủa, thân thiện, chuyên nghiệp; không rối như một bảng quản trị doanh nghiệp.
- Màu chủ đạo: `#247C6C` (teal); nền `#F7F9F7`, thẻ trắng `#FFFFFF`, chữ đậm `#18332D`, phụ `#61766F`, cảnh báo `#D89B3C`, lỗi `#C65C5C`.
- Font chữ Việt: hệ thống / Inter; chữ Hán dùng font fallback có glyph tiếng Trung tốt, không tải font không có giấy phép.
- Desktop: sidebar trái 248px, nội dung giới hạn 1280px. Tablet: sidebar thu gọn. Mobile: bottom nav cho Learner, drawer cho Admin.
- Các trạng thái UI: loading skeleton, empty, error, retry, no internet, saving, synced, unsynced.
- WCAG: điều khiển bàn phím, nhãn form, tương phản, hỗ trợ screen reader, giảm chuyển động.

## 10. Kiến trúc triển khai

```
Web browser / PWA
  ├── Next.js UI: Public / Learner / Admin
  ├── Cache bài học công khai hoặc được tải về (offline tùy scope)
  └── Hàng đợi hành động offline có idempotency key
        ↓ HTTPS
Next.js Server Components + Route Handlers / Server Actions
  ├── Auth validation + RBAC + Zod validation + rate limits
  ├── Secure grading + publish workflow + admin operations
  └── AI adapter (feature flag, optional)
        ↓
Supabase Auth + PostgreSQL (RLS) + Storage
  └── Backup, logging, monitoring, migrations
```

Quan trọng: Offline chỉ hỗ trợ bài học đã được tải và các hành động cho phép tạm lưu. Nếu chưa từng đăng nhập hoặc nội dung cần server/AI thì phải online. Dữ liệu đồng bộ theo idempotency key và thứ tự sự kiện; khi xung đột ưu tiên tính nhất quán do server quyết định, không ghi đè tùy ý.

## 11. Phân kỳ phát triển cho Codex

### Phase 0 — Foundation
- Khởi tạo Next.js + Tailwind + shadcn/ui + lint + format + typecheck + Vitest + Playwright.
- Thiết kế system tokens, layout responsive, config, env template, README, CI.
- Seed dữ liệu **giả lập rõ ràng** để chạy UI khi chưa có Supabase.
- **Đạt:** build qua; desktop/mobile không tràn màn; test cơ bản qua.

### Phase 1 — Auth + Security
- Tích hợp Supabase Auth, verify email, đăng nhập/đăng xuất/khôi phục tài khoản.
- profiles, roles, consent, RLS tests, protected routes, admin guard.
- Seed Super Admin qua thao tác server an toàn, không cho public đăng ký admin.
- **Đạt:** 2 user độc lập, chặn truy cập dữ liệu chéo và URL admin trái quyền.

### Phase 2 — CMS nền tảng
- Course/Level/Unit/Lesson, vocabulary, grammar, editor form, preview, media attribution.
- workflow draft → review → publish; lesson revision; audit logs.
- **Đạt:** Editor có thể tạo bài, Reviewer duyệt, Learner chỉ thấy bài published.

### Phase 3 — Learner Core
- Dashboard, lộ trình, lesson renderer, bài tập và server-side grading, progress.
- **Đạt:** đăng ký mới → học → làm bài → đăng xuất/đăng nhập lại → vẫn có tiến độ.

### Phase 4 — Practice & Exam
- SRS/FSRS, flashcards, listening MCQ, exam mode, error analytics.
- **Đạt:** lịch ôn đúng user/zone, chặn nộp trùng, điểm không sửa được qua devtools.

### Phase 5 — AI & Audio
- AI adapter server-side, rate limit, cost cap, contextual prompt, moderation, delete chat.
- Audio chất lượng đã duyệt, hanzi stroke library, hỗ trợ ghi âm theo consent.
- **Đạt:** không lộ API key; hết quota trả lỗi thân thiện; AI không có quyền publish.

### Phase 6 — Public Launch / Ops
- Privacy docs, user data export/delete process, SEO public, monitoring, backup/restore, load test.
- PWA partial offline (nếu đủ an toàn), domain, email deliverability, staging→production.
- **Đạt:** rà soát bảo mật/pháp lý, CI, test e2e; có phương án phục hồi sự cố.

## 12. Nội dung seed bắt buộc

- 1 Course: "Tiếng Trung từ con số 0".
- 1 Level: HSK 0; 3 Units: Pinyin & thanh điệu; Chào hỏi; Giới thiệu bản thân.
- Ít nhất 10 lesson gốc có objectives và theo schema; trước khi mở cho người dùng thật, duyệt nội dung thủ công.
- 60 vocab items có pinyin, nghĩa, ví dụ (chỉ sử dụng nội dung được phép).
- Ít nhất 4 dạng câu hỏi, tổng 60 câu; có explanations; 1 bộ kiểm tra cuối Unit.
- 4 tài khoản test với các role Learner A, Learner B, Editor, Reviewer; một admin được tạo riêng trong môi trường dev (không hard-code password trong repo).

## 13. Yêu cầu kiểm thử và nghiệm thu

### Tự động
- `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, Playwright E2E.
- Supabase SQL migration dry-run và `supabase test db` / pgTAP về RLS.
- Test schema invalid, thiếu Pinyin, từ không có nghĩa, câu hỏi không có đáp án, bài published không đủ nội dung.
- Test auth transitions, chưa verify email, session hết hạn, role revoked.
- Test user A/B data isolation, direct URL access, server action abuse, upload invalid.
- Test thay revision không mất progress, double-submit không tăng điểm hoặc tạo review trùng.
- Test 375px mobile, tablet, 1440px desktop; bàn phím và screen reader cơ bản.

### Nghiệm thu thủ công
- Người mới học có thể đăng ký và hoàn thành bài số 1 mà không cần hướng dẫn.
- Reviewer có thể xem trước bài, trả lại bản nháp, phê duyệt; version trước vẫn tra được.
- Người học B không thấy dữ liệu A dưới bất kỳ đường dẫn/API nào đã thử.
- Các báo cáo quản trị là aggregate và có lọc thời gian, không lộ PII không cần thiết.
- Có bản sao lưu và khôi phục thành công trên staging.
- Nội dung seed đã được biên tập ngôn ngữ kiểm tra trước khi dùng công khai.

## 14. Chi phí tham khảo (cần xem lại tại thời điểm thanh toán)

- Supabase Free: $0, giới hạn theo quota; demo và thử nghiệm, không đảm bảo phù hợp website hoạt động liên tục.
- Supabase Pro: từ $25/tháng, còn phát sinh nếu vượt quota hoặc add-on.
- Vercel Hobby: $0 chỉ phù hợp điều kiện sử dụng cá nhân/phi thương mại; Vercel Pro: $20/tháng + usage vượt mức.
- Cấu hình tham khảo dịch vụ trả phí Supabase Pro + Vercel Pro: **từ ~$45/tháng**, chưa tính VAT, domain, email, AI, TTS, lưu trữ/traffic vượt hạn mức.
- Nếu website miễn phí/không thương mại, vẫn cần xem điều kiện từng gói hosting; không suy diễn rằng "công khai = miễn phí mãi mãi".
- Dashboard Admin nên có bảng theo dõi request AI/ngày, tokens, cost estimate, cảnh báo/kill switch.

Nguồn giá tham khảo: https://supabase.com/pricing và https://vercel.com/pricing

## 15. Prompt tổng để đưa cho Codex

> Bạn là software architect kiêm lead full-stack. Hãy đọc kỹ `Han_Ngu_Lab_PRD_v1.md`. Xây dựng nền tảng học tiếng Trung Hán Ngữ Lab theo đúng kiến trúc và các phase trong PRD. Trước khi sửa code hãy tạo `IMPLEMENTATION_PLAN.md`, `TASKS.md` và sơ đồ dữ liệu `DATA_MODEL.md`. Chỉ triển khai **Phase 0** ở lượt đầu: dựng Next.js App Router + TypeScript + Tailwind + shadcn/ui, responsive design system, trang Public/Learner/Admin mock, dữ liệu seed giả lập, lint/typecheck/test/build. Không tạo schema giả định sai với PRD, không tạo API AI, không kết nối dịch vụ trả phí, không deploy. Không sao chép bjtlab.me. Dừng sau Phase 0 và báo cáo file đã thay đổi, cách chạy PowerShell, kết quả test, rủi ro và những việc cần tôi cấu hình trước Phase 1. Trong các phase sau, mỗi thay đổi DB phải có migration + kiểm thử RLS; mọi lỗi TypeScript/test/build phải sửa xong trước khi đánh dấu hoàn tất.

## 16. Nguồn và lưu ý

- Chuẩn HSK: https://www.chinesetest.cn/syllabus
- Thông báo HSK 3.0 bắt đầu toàn cầu 13/12/2026: https://old.chinesetest.cn/gonewcontent.do?flag=kdnew&id=51336883
- Next.js + Supabase SSR: https://supabase.com/docs/guides/auth/server-side
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15: https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=
- Nghị định 356/2025/NĐ-CP: https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160

**Đây là bản thiết kế kỹ thuật để lập trình, không phải sản phẩm đã hoàn thành; các nội dung pháp lý cần rà soát theo quy mô/đối tượng sử dụng cụ thể.**
