# MASTER PROMPT — BUILD HÁN NGỮ LAB END TO END (A–Z)

**Official project name:** Hán Ngữ Lab  
**Exact Windows project root:** `D:\Hán Ngữ Lab`  
**Chinese name / brand subtitle:** 汉语实验室

Act as a cross-functional product engineering team covering the responsibilities of a Product Manager, UX/UI Designer, Solution Architect, Senior Full-Stack Engineer, AWS Cloud Engineer, Chinese Language Curriculum Designer, QA Automation Engineer, Security Engineer, and DevOps Engineer. Your responsibility is to **implement the product in code in the current workspace**, not merely provide advice, plans, or mockups.

## 0. PROJECT CONTEXT AND COLLABORATION MODEL

I own **Hán Ngữ Lab — 汉语实验室**, a public, multi-user Mandarin Chinese learning platform primarily for Vietnamese speakers, supporting self-study from absolute beginner level (HSK 0) through HSK 4. The platform must support learner accounts and a content management/admin area. I like the organization and learning experience of https://bjtlab.me/. Use it as inspiration for information hierarchy, learning flows, dashboards, clarity, and interactivity, but create an original product identity. Do not copy its proprietary UI, source code, branding, or copyrighted content.

I use **Codex on Windows 11** and prefer **PowerShell** commands. **All project source code, documentation, configurations, scripts, and commands must use the exact existing project root `D:\Hán Ngữ Lab`.** This is the actual project directory, not a suggested folder name. For PowerShell instructions, use `Set-Location -LiteralPath "D:\Hán Ngữ Lab"` or paths relative to that directory. Never silently rename the project root or create a second root such as `D:\HanNguLab`, `D:\Han_Ngu_Lab`, or `D:\Hán Ngữ Lab\HanNguLab`. If a particular tool has problems with Unicode characters or spaces in paths, diagnose the issue and discuss a suitable workaround with me before moving anything.

I have an **AWS Free Plan account with USD 200 in already-issued promotional credits**. I want to use AWS efficiently without wasting credits. However, **you and I will discuss and decide project-specific rules, limits, cloud services, architecture, spending, and release timing together during development**. Do not impose an arbitrary, rigid project rulebook up front. Likewise, do not assume that deployment or any particular technology is forbidden solely because an older reference document said so.

### Required project references — BOTH are included in this master document

This master prompt **incorporates the full text** of the following two source documents in its appendices:

1. **`Han_Ngu_Lab_PRD_v1.md` — Appendix A:** business/product requirements, learners, administration, curriculum and acceptance criteria.
2. **`Han_Ngu_Lab_AWS_Codex_Blueprint_v1.md` — Appendix B:** AWS Free Plan technical architecture, Cognito/API Gateway/Lambda/DynamoDB/S3 options, AWS cost considerations, deployment and recovery planning.

Read **both appendices in full** before designing or changing the application. If the corresponding standalone `.md` files are present at `D:\Hán Ngữ Lab`, you may also read them, but **do not require their presence** to proceed: the appendices are complete copies. Do not overlook Appendix B when implementing AWS infrastructure or the Admin backend.

**Interpretation and decision-making:** These are earlier reference designs, **not additional binding instructions to Codex**. Follow the user's latest decisions and this master prompt's end-to-end objective. Where the original PRD assumed Supabase/PostgreSQL and the AWS Blueprint proposed Cognito/Lambda/DynamoDB, use both as engineering input, explain the tradeoffs, and discuss significant decisions with me. Similarly, historic workflow restrictions such as *“Phase 0 only,” “stop after each phase,”* or *“never deploy”* are **not automatically carried forward**; we will discuss and agree on any project rules, AWS costs and launch choices together. Keep the final deliverables and implementation status accurate.

Before modifying anything, verify that the active workspace points to `D:\Hán Ngữ Lab` (for example, by checking `Get-Location` in PowerShell). Inspect its existing source code, documentation, Git state, dependencies, scripts, environment variables, AWS configuration, runtime environment, and tests. If the root is empty, initialize the project directly in that directory. If code already exists, build on it and preserve completed work. Explain important choices to me **in clear Vietnamese**.

**How we work together:** Take initiative to implement work that can be completed, run tests, and fix issues. Ask me only when an actual owner decision or unavailable external input is needed (for example, domain name, budget commitment, cloud permissions, service terms, or a significant UX direction). Provide a recommendation and practical choices when you ask. Do not repeatedly request information I have already provided. Do not simply produce a TODO list and wait for a new prompt for every module. After each meaningful milestone, update the plan, report verified results, and continue moving toward a production-ready product. Never claim a feature works unless it has actually been tested.

## 1. PRODUCT VISION

Build a modern, polished, responsive, fast Mandarin learning platform with at least three major areas:

1. **Public website:** Landing page, learning-method overview, HSK learning roadmap, selected free sample lessons, FAQs, sign-up, sign-in, contact, and policy pages.
2. **Learner application:** Personal dashboard, HSK 0–4 curriculum, vocabulary, grammar, pronunciation, listening, Chinese-character writing, dialogues, spaced-repetition flashcards, tests, progress analytics, study planner, and an AI tutor when configured.
3. **Admin CMS:** Overview dashboard; learners and role management; curriculum authoring, review, and publishing; vocabulary; grammar; audio/media assets; questions and exams; usage analytics; activity/audit logs; settings; and data import/export tools.

Absolute beginners should be able to follow the learning process without outside guidance, while the underlying platform remains extensible to many learners and multiple content editors.

## 2. UX/UI AND LEARNING EXPERIENCE

Create an original visual identity for **Hán Ngữ Lab**. The default interface language is **Vietnamese**, with accurate rendering of Simplified/Traditional Chinese characters and **Pinyin tone marks**. Aim for a bright, refined, calm, learning-focused interface with clear visual hierarchy: for example, teal and warm off-white, rounded cards, generous whitespace, restrained animation, readable typography, and sufficient contrast. Dark mode is optional if it fits the implementation priorities.

On desktop, provide a sidebar and dashboard. On mobile, provide convenient bottom navigation for learners and an adapted admin navigation pattern. Support narrow screens around **360–390 px**, tablets, and desktop. Build reusable design tokens/components, accessible forms, confirmation feedback, skeleton loaders, empty states, offline/network-error states, retry/success states, no-content states, and permission-denied states. Support keyboard navigation, accessible labels, good color contrast, and appropriate responsive behavior.

At minimum, implement this learner journey: visitor → explore roadmap → register/verify account → select goals, daily study time, and current proficiency → optional placement assessment → receive recommended lesson → complete lesson → review vocabulary → return the next day → inspect progress. Offer **90 minutes/day** as a suggested routine, but allow each learner to adjust it.

Implement the actual screens and connect them to functioning application logic/data, rather than leaving decorative placeholders: home; sign-in/sign-up/password recovery; onboarding; learner dashboard; learning roadmap; lesson list; lesson detail; vocabulary library; flashcards; grammar; listening; pronunciation; handwriting; practice; tests/exams; results; common mistakes; review calendar; profile; settings; help; AI tutor; admin dashboard; lesson editor; question editor; review queue; user management; media library; analytics; configuration; and audit logs.

## 3. ORIGINAL CURRICULUM: FROM ZERO TO HSK 4

I **do not have a textbook or pre-existing curriculum**. Design an **original, extensible, versioned, CMS-managed learning content system**, rather than relying solely on static files or asking an AI model to generate an entirely new lesson each time it is opened.

Target curriculum progression:

- **HSK 0 (pre-HSK foundation):** Pinyin initials and finals, four tones, basic tone sandhi, character strokes and stroke order, numbers, greetings, and pronunciation fundamentals.
- **HSK 1:** Basic communication, self-introduction, time, family, meals, shopping, and essential sentence patterns.
- **HSK 2:** Everyday conversations, asking for directions, transportation, hobbies, describing activities, and short listening/reading passages.
- **HSK 3:** Real-life situations, storytelling, reading comprehension, combined grammar patterns, and topic-based speaking.
- **HSK 4:** More advanced everyday communication, expressing opinions, longer reading passages, and test-oriented practice aligned with the relevant standard.

HSK standards can change. Verify the current official information at https://www.chinesetest.cn/ and implement **version-aware standard mappings** so that curriculum data clearly distinguishes a standard, its version, level, and source. Do not misrepresent our course as an officially licensed HSK curriculum or guarantee that learners will pass HSK exams. Do not reproduce copyrighted textbooks, proprietary exams, or content from the reference site. Verify licenses for dictionaries, audio, fonts, character-writing data, and other assets; maintain appropriate attribution and provenance.

Every lesson must be structured, versioned content with at least these fields:

`course`, `level`, `unit`, `lesson_id`, `revision_id`, `title`, `description`, `objectives`, `estimated_minutes`, `prerequisites`, `vocabulary`, `grammar`, `pronunciation_notes`, `dialogues`, `examples`, `listening_assets`, `stroke_practice`, `exercises`, `answers_explanations`, `references`, `status`, `created_by`, `reviewed_by`, `published_at`.

Vocabulary entries should include Simplified Chinese, Traditional Chinese where available, Pinyin with correct tone marks, Vietnamese definitions, part of speech, context-specific senses, example sentences, pronunciation assets, related terms, referenced HSK level/standard, and provenance. Grammar records should describe usage, conditions, correct/incorrect examples, and common learner errors. Dialogues need speakers, line-level subtitles, audio, and translations. Validate actual exercise answers; do not substitute placeholders.

Plan the full HSK 0–4 curriculum structure. Build a CMS that supports bulk lesson import and documentation for content editors. Populate it with enough **original, educationally meaningful material** for real learning and realistic testing—especially a complete HSK 0 foundation, several HSK 1 units, and representative lessons at higher levels. If lessons are generated in bulk, mark unverified items as `draft/unreviewed` for human quality review before publishing. The long-term goal is complete HSK 0–4 coverage, but **never report “140 lessons completed” when records contain only titles, outlines, or unfinished content**.

## 4. LEARNING ENGINE

Implement a **data-driven lesson engine** that renders lessons from the CMS/API rather than hard-coding a separate page for each lesson. Support the learning flow: objectives → new material → examples → dialogue → practice → assessment → feedback/results → spaced review.

Support exercise types such as: single-select and multi-select questions; listening comprehension; word-to-meaning matching; fill-in-the-blank; drag-and-drop sentence ordering; pair matching; selecting the correct Pinyin; audio identification; Pinyin input; Chinese-character input; dialogue sequencing; appropriate listening dictation; reading comprehension; and sentence-writing exercises with suitable evaluation methods.

For objectively scored questions, validate and score responses on the **server**. Keep unreleased answer keys server-side where assessment integrity requires it. Persist attempts, individual responses, durations, scores, mistakes, difficulty levels, and completion states. Prevent duplicate score/progress changes when the same submission is retried after a network failure. For open-ended assessments, make evaluation criteria and AI uncertainty explicit; do not present unverified AI feedback as a definitive official score.

Provide spaced repetition using **FSRS, SRS, or another clearly explained scheduling algorithm**. Track learning/review timestamps, memory state, due dates, and response history. The learner dashboard should show the next lesson, vocabulary due for review, learning streak, total study minutes, achievements, weak skills, and study calendar. Allow learners to configure goals.

**Audio and pronunciation:** Use quality native Mandarin recordings or suitable TTS, with replay and slow playback. Any recording feature should involve the user's permission. Clearly distinguish **speech recognition** from **reliable tone/pronunciation assessment**; do not advertise precise tone scoring unless it has been validated. Support Chinese-character stroke animation and practice with appropriately licensed libraries such as Hanzi Writer.

**Offline/PWA (where practical):** Allow selected learning resources to be cached or downloaded, support safe local queuing of compatible offline activities, sync when a connection returns, and handle idempotency/conflicts. Only claim offline support for features that have been tested. Authentication, AI tutoring, controlled exams, and admin operations may require network access.

## 5. AI MANDARIN TUTOR

Design an AI tutor module that can integrate with **Amazon Bedrock**, with a provider-adapter architecture so the model provider can be replaced later. Given authorized learner context, the tutor should understand the current lesson, previously learned vocabulary, approximate proficiency, and relevant learner mistakes. It should explain concepts **in Vietnamese**, provide examples, correct grammar, role-play Chinese conversations, create supplemental exercises, suggest study paths, and reinforce weak vocabulary.

Provide prompt/template management, adjustable difficulty, guided reasoning rather than immediately revealing every answer, and graceful UI states for quota limits, offline use, and unavailable AI services. AI-generated curriculum material must not be auto-published without editor/reviewer approval. Provide per-user/request/token usage controls and AI cost visibility in the Admin area. Before selecting a specific model, review with me the current pricing, availability under my AWS Free Plan, Mandarin/Vietnamese performance, and projected usage costs.

## 6. USER ACCOUNTS, ROLES, AND CONTENT ADMINISTRATION

Candidate roles: `guest`, `learner`, `editor`, `reviewer`, `admin`, and `super_admin`. Design permission management so it can evolve, but enforce actual authorization on the **server**—never rely exclusively on hiding UI elements. Newly registered users must receive learner-level permissions unless they have been explicitly granted a different role.

Support email registration/sign-in, email verification, password reset, sign-out, and session management. Social sign-in can be added if we agree to it. Profiles should include display name, avatar, learning goals, time zone, proficiency, and study routine. Provide mechanisms for users to inspect/export their personal data and request account deletion through the agreed workflow.

The Admin CMS must support course → level → unit → lesson management; content editing using forms or WYSIWYG with preview; shared vocabulary and grammar libraries; audio/media management; tests/quizzes; CSV/JSON import/export; and a workflow of **draft → submit for review → request changes → approve → publish → archive**. Keep revision histories and support rollback. Admin analytics should cover DAU/MAU, lesson completion, error rates by question, learner retention, service costs, content change logs, and account status. Separate editor and reviewer responsibilities to reduce accidental publication. Clearly label demo metrics as sample data; never pass them off as live production data.

## 7. TECHNICAL ARCHITECTURE AND AWS

Propose the best architecture based on the actual environment and current service offerings, prioritizing efficient use of the **AWS Free Plan with USD 200 credits**, low operational overhead, and a realistic upgrade path. Use the following as a **starting point for discussion, not an immutable technology mandate**:

- **Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui; responsive UX; optional PWA; works well on Windows browsers and Android.
- **Web hosting:** AWS Amplify Hosting if appropriate. Compare a static-export frontend plus separate API against SSR/alternative hosting when warranted.
- **Identity:** Amazon Cognito User Pool; OAuth authorization code flow with PKCE if using hosted login.
- **API:** Amazon API Gateway HTTP API and AWS Lambda using TypeScript/Node.js.
- **Database:** Amazon DynamoDB designed around actual access patterns, partition/sort keys, indexes, and realistic costs; compare it against RDS/Aurora/PostgreSQL if complex CMS querying makes a relational database more appropriate.
- **Media:** Amazon S3 with suitable permissions for public assets, unpublished media, and admin uploads.
- **Observability:** CloudWatch, practical error tracing, billing/usage visibility.
- **Infrastructure as Code:** AWS CDK or Terraform; proper environment configuration and secrets management; deploy and recovery scripts.
- **Repository:** Consider a monorepo (for example, `apps/web`, `services/api`, `packages`, `infra`, `content`, `scripts`, `docs`) to share schemas/types and establish test/build pipelines.

Do not preserve an architecture merely because an older document mentioned it. Explain the trade-offs, likely capacity, operational complexity, schedule implications, and cost drivers. We will make major architectural decisions together. Before consuming AWS resources, verify my account's actual Free Plan terms, available and expiring credits, eligible services, deployment region, current prices, and IAM permissions. If a console configuration is necessary, guide me click by click or provide accurate PowerShell/AWS CLI commands. Avoid wasting credits on idle infrastructure. Plan for continuity **after Free Plan expiration**, including backups that can be restored outside the AWS account.

Provide a dashboard or maintained resource register showing currently deployed AWS resources, their purpose, cost estimates, usage, known available credits (only when accurately retrievable), backups, and prospective upgrade requirements. Discuss actual deployment and budget decisions with me based on evidence rather than guesses.

## 8. DATA MODEL AND APIS

Design logical entities for at least: `profiles`, `roles`, `courses`, `standards`, `levels`, `units`, `lessons`, `lesson_revisions`, `vocabulary`, `grammar`, `dialogues`, `media`, `exercises`, `exam_sets`, `attempts`, `answers`, `lesson_progress`, `review_schedule`, `review_events`, `study_sessions`, `content_reviews`, `notifications`, `ai_usage`, `audit_logs`, `settings`, plus any additional entities justified by real requirements.

If using DynamoDB, document access patterns; PK/SK/GSI design; query and pagination strategies; RCU/WCU cost considerations; atomic/conditional writes; and how to avoid expensive table scans on routine requests. If using SQL, implement migrations, constraints, indexes, and row-level access controls as appropriate. Use shared type-safe schemas and validation (e.g., Zod) on client/server boundaries. Version APIs and lesson content.

Implement documented API contracts for public course catalogs and lesson previews; authenticated `me`/profile; lesson access; progress; quiz submission/history; SRS reviews; exams; AI tutor; and admin content CRUD, previews, review/publishing, media upload, user/role management, analytics, and audits. Provide **OpenAPI** or equivalent accurate API documentation. Enforce separation between public data, private user records, unpublished content, and protected answer keys. Support seed import, backup export, and tested restoration.

## 9. PRODUCT QUALITY, SECURITY, AND PRIVACY

This will be a publicly accessible service, so implement real security at both application and infrastructure levels: server-side authentication; role- and ownership-based authorization; tenant/user data isolation; email verification; input validation; safe file uploads; rate limits; secret protection; correct session/token handling; secure grading APIs; admin audit trails; abuse protections; and backup/restore. The learner interface must never allow arbitrary creation of privileged admin accounts. Use synthetic data without real personal information in test accounts.

Prepare a Privacy Policy, Terms of Service, contact page, and data export/deletion process. Explain the owner's need to review applicable **Vietnamese personal-data protection obligations** considering the audience and any international data storage/processing. If the service may be used by minors, discuss the intended audience and required safeguards/procedures with me before public launch. Do not claim official HSK authorization unless it has actually been obtained. Respect educational content and asset licenses.

## 10. TESTING AND DEFINITION OF DONE

You are responsible for implementing **and actually running** a meaningful test suite, not merely describing one. Include at minimum:

- Type checking, linting, unit tests, integration tests, production build, and smoke tests.
- Playwright end-to-end flows on desktop and mobile-sized viewports covering the learner journey.
- Two independent learner accounts (A and B): isolated data, persistent progress after logout/login, and no ability for A to read or modify B's data.
- Full editorial flow: editor creates a lesson → reviewer approves → lesson publishes → learner can access it; drafts stay private; revision rollback does not erase existing learner progress.
- Correct server-side quiz grading; idempotent duplicate submissions; correct handling of expired sessions and insufficient permissions.
- Correct Unicode/Pinyin tone marks, Chinese character rendering, 360 px mobile layouts, keyboard accessibility, audio playback, and offline states if implemented.
- Media uploads, invalid data, unauthorized requests, network failures, AI usage quotas, and API rate limits.
- Verification of deployed staging resource costs and an actual backup/restore test.

Never mark a feature “done” if it is only a placeholder, has no functioning backend, or has not been tested. If a feature depends on an external account, payment authorization, unavailable credentials, or a service that cannot yet be activated, implement and test what can be implemented with mocks, document the remaining setup steps, and accurately label it **`blocked by external setup`** rather than claiming it is live.

## 11. EXECUTION PLAN: FROM INITIALIZATION TO LAUNCH

Organize work into sensible milestones, but **do not stop automatically after Phase 0/1 or require me to provide a separate prompt for every module**. The intended end-to-end delivery process is:

1. Inspect the repository and local environment, read project documents, and identify decisions that genuinely need my input.
2. Create and maintain `PRODUCT_SPEC.md`, `ARCHITECTURE.md`, `DATA_MODEL.md`, `IMPLEMENTATION_PLAN.md`, `TASKS.md`, `DESIGN_SYSTEM.md`, `CONTENT_GUIDE.md`, `AWS_COST_PLAN.md`, and `TEST_PLAN.md`. Keep them useful and consistent with actual implementation rather than producing documentation for its own sake.
3. Initialize or continue the repository, dependencies, linting/testing/CI, design foundations, seed data, routes, and UI states.
4. Implement the backend, persistence, authentication, role-based access control, Admin CMS, and working sample content.
5. Complete the learner application, lesson engine, vocabulary and practice systems, spaced repetition, Mandarin audio/character-writing experiences, and reporting.
6. Add AI tutoring and optional advanced capabilities after we agree on their behavior and costs.
7. Deploy staging, validate with real multi-account tests, fix defects, measure performance, and inspect logs.
8. Expand the curriculum and editorial process; prepare a learner beta and incorporate feedback.
9. Prepare production: domain/HTTPS, email, SEO, asset caching, privacy, monitoring, backups, tested restoration, operational runbooks, and CI/CD.
10. Deploy production after we agree on the necessary owner decisions; verify the public URL with real acceptance tests; document handover and ongoing operations.

You may reorder tasks when that makes engineering sense and proactively refactor/improve the code. Update task statuses only against actual evidence, and create logical Git commits if the repository is configured. Run tests after meaningful changes; fix root causes rather than concealing failures by disabling linting or skipping tests. If the Codex session runs out of context or is interrupted, save an accurate checkpoint in `docs/PROJECT_STATUS.md` and `docs/NEXT_STEPS.md` so the next session can resume without repeating completed work.

## 12. FINAL DELIVERABLES AND ACCEPTANCE

By the end of the project, I expect:

- A real repository with complete frontend, backend, and infrastructure source code—not just a prototype.
- A publicly accessible website where new learners can sign up, sign in, complete lessons, and retain progress.
- A fully functional Admin CMS to create, edit, review, and publish lessons **without editing code**.
- Working quizzes, SRS, analytics, and sufficient real foundational content for learning and testing, plus a clearly structured HSK 0–4 roadmap with transparent editorial status.
- A working AI tutor once the selected provider is configured, or an accurate explanation of any remaining external dependency.
- PowerShell instructions for local setup and execution; `.env.example`; AWS deployment/rollback/backup/restore instructions; CMS authoring guide; and acceptance checklist.
- An actual test report listing commands executed, real results, outstanding defects, and risks.
- An inventory of AWS resources, instructions for monitoring credits/costs, and a continuity plan for the end of Free Plan.
- Staging/production URLs and truthful deployment status where applicable; if deployment is incomplete, an exact list of owner-side actions needed and how to verify them.

**Start now in `D:\Hán Ngữ Lab`. Verify the workspace, inspect the repository, and read any existing project documentation. Show me a concise overview of the proposed direction and the major decisions that genuinely require my input, then proactively implement Hán Ngữ Lab toward a working, maintainable public service. We will discuss project-specific rules and internal decisions together as development progresses; outdated restrictions from previous prompts must not automatically prevent progress. Communicate with me in Vietnamese throughout our collaboration, even though this implementation brief is written in English.**

---

# APPENDICES — EMBEDDED REFERENCE DOCUMENTS

The following appendices are the complete original Vietnamese reference documents. They are included here so Codex can follow this **single file** without relying on separate attachments. They provide requirements and engineering options; the current master prompt and our live decisions take precedence when earlier implementation notes conflict.

## APPENDIX A — `Han_Ngu_Lab_PRD_v1.md` (complete reference copy)

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

---

## APPENDIX B — `Han_Ngu_Lab_AWS_Codex_Blueprint_v1.md` (complete reference copy)

# HÁN NGỮ LAB — AWS FREE PLAN BLUEPRINT v1.0

**Ngày soạn:** 16/10/2026  
**Tài khoản đầu vào:** AWS Free Plan, 200 USD credit đã được cấp (do chủ tài khoản xác nhận).  
**Trạng thái:** Bản thiết kế và kế hoạch triển khai; **chưa tạo resource AWS, chưa test ứng dụng, chưa xác nhận số dư/ngày hết hạn thực tế**.  
**Tham chiếu:** `Han_Ngu_Lab_PRD_v1.md`. Blueprint này thay **các lựa chọn Supabase/Postgres** trong tài liệu cũ. Giữ yêu cầu sản phẩm, bản quyền, quy trình duyệt, nhiều người dùng và tiêu chí nghiệm thu.

## 0. Điều kiện an toàn quan trọng

1. AWS Free Plan có thể tự kết thúc sau tối đa **6 tháng kể từ ngày tạo tài khoản**, hoặc sớm hơn khi hết credit. Trước lúc đó phải backup **ngoài tài khoản AWS** và có phương án chuyển sang Paid Plan hoặc di chuyển nhà cung cấp. Không giả định 200 USD sẽ cho thêm 6 tháng tính từ hôm nay.
2. Free Plan hạn chế một số dịch vụ. Chỉ tạo resource khi AWS Console xác nhận dịch vụ đủ điều kiện; **không chuyển Paid Plan, không tạo AWS Organizations/Control Tower**, không kích hoạt dịch vụ không rõ chi phí.
3. AWS Budgets là **cảnh báo, không phải khóa chi tiêu tuyệt đối**. Theo dõi Free Tier, credit còn lại và chi phí theo dịch vụ. Trước mỗi lần deploy, Codex phải đưa resource diff và ước tính chi phí để người sở hữu phê duyệt.
4. Không triển khai production cho người dùng phụ thuộc dữ liệu thật trên Free Plan nếu không có kế hoạch duy trì và phục hồi. Beta bằng người dùng tự nguyện trước.
5. Không đưa secret, access key, refresh token, mã xác thực lên GitHub, log, commit hay công cụ chat. Sử dụng AWS CLI phiên bản hỗ trợ `aws login` với IAM identity giới hạn quyền (không dùng root để deploy).
6. Region mặc định `ap-southeast-1` (Singapore), có thể thay sau khi so giá/quota/availability. Tài nguyên nên tập trung **một Region**; phần Amplify/CDN có cơ chế toàn cầu.

## 1. Kiến trúc lựa chọn

```text
Windows/Android Browsers (PWA later)
        |
        v
AWS Amplify Hosting — static-export Next.js website, HTTPS, CDN
        |                           \
        | login/OAuth                \ static public learning assets
        v                            \
Amazon Cognito User Pool         Published media via Amplify assets
        |
        | access token (Bearer)
        v
API Gateway HTTP API — Cognito/JWT verification + CORS limited to known origins
        |
        v
AWS Lambda (Node.js TypeScript) — business rules, user/role checks, grading, CMS
        |                                 \
        v                                  v
DynamoDB (provisioned/Standard)         S3 (private draft media/admin uploads)
        |
        v
External backup outside AWS account (encrypted archive)

Budget / Free Tier / CloudWatch minimal retention / structured alarms
AI (Bedrock) = phase 6, disabled by default
```

**Why:** Static deployment avoids continuous Next.js SSR compute. Lambda and API Gateway charge by usage. Cognito avoids writing password systems. DynamoDB provisioned Standard allows targeting its always-free capacity; **on-demand capacity is NOT the same free-tier model**. Data is isolated by server-side checks.

**Next.js caveat:** Static export cannot use server-only route handlers, SSR or dynamic paths that require build-time generation. Use client-fetched app pages (e.g. `/app/bai-hoc?id=...`) and backend HTTP API. Verify exact Amplify build artifact settings against the installed Next.js/Amplify documentation; `output: 'export'` and the real built output must agree.

## 2. Công nghệ

- Monorepo hoặc một repo với `apps/web/`, `services/api/`, `infra/`, `packages/shared/`, `content/`, `scripts/`, `docs/`.
- `web`: Next.js App Router, TypeScript, Tailwind, shadcn/ui, Zod, TanStack Query (optional), i18n Vietnamese, static export, Vitest, Playwright.
- `services/api`: Node.js Lambda + AWS SDK v3, Zod, typed HTTP handlers, explicit authorization, idempotency for writes.
- `infra`: AWS CDK **chỉ sau khi review plan**; no deploy in phase 0; strong least privilege and resource removal policies.
- `auth`: Cognito User Pool with verified email, hosted OAuth Authorization Code + PKCE, public client (no client secret). Roles: learner/editor/reviewer/admin/super_admin. Use managed server-side role assignments and audit log.
- `db`: DynamoDB Standard provisioned, small initial RCU/WCU, no global tables, DAX, auto-scaled large capacity, PITR or paid backups unless explicitly approved. Account/region shared free-tier provisioned pool max 25 RCU + 25 WCU, including index usage; verify current terms.
- `media`: Tiny public audio/images can be packaged as published static assets; S3 bucket private for draft admin media, using short-lived signed access where appropriate. Avoid S3 public ACL and open buckets.
- `ai`: disabled until phase 6, server-side access only, daily/monthly per-user and global caps, max token cap, kill switch, model availability/price review before activation.

## 3. MVP route map

- Public `/`, `/lo-trinh`, `/bai-hoc-mau`, `/dang-nhap`, `/dang-ky`, `/quyen-rieng-tu`, `/dieu-khoan`.
- Learner `/app`, `/app/lo-trinh`, `/app/bai-hoc?id=...`, `/app/on-tap`, `/app/tien-do`, `/app/ho-so`, `/app/du-lieu`.
- Admin `/admin`, `/admin/bai-hoc`, `/admin/kiem-duyet`, `/admin/tu-vung`, `/admin/nguoi-dung`, `/admin/nhat-ky`.
- AI, speaking assessment, payments, SMS, public social feeds **not in MVP**.

## 4. DynamoDB domain and access patterns

First, design actual read/write access patterns, then choose PK/SK and secondary indexes; do not map relational tables into `Scan` calls. One pragmatic option: two DynamoDB tables:

### `hnl-content`
- `PK=COURSE#<courseId>, SK=LEVEL#<levelId>` (or separate course metadata)
- `PK=LEVEL#<levelId>, SK=UNIT#<unitOrder>#<unitId>`
- `PK=UNIT#<unitId>, SK=LESSON#<order>#<lessonId>`
- `PK=LESSON#<lessonId>, SK=META`
- `PK=LESSON#<lessonId>, SK=REV#<revisionId>` immutable revision; pointers stored separately
- `PK=VOCAB#<vocabId>, SK=META` for vocab reference library
- `PK=REVIEWQUEUE#<status>, SK=<submittedAt>#<lessonId>` can use a designed index or write a separate review workflow item
- Public read only `published` items from server, never drafts; assessment answer keys remain private and never returned before eligible grading.

### `hnl-userdata`
- `PK=USER#<sub>, SK=PROFILE`
- `PK=USER#<sub>, SK=PROGRESS#<lessonId>`
- `PK=USER#<sub>, SK=SRS#<vocabId>`
- `PK=USER#<sub>, SK=ATTEMPT#<timestamp>#<id>`
- `PK=USER#<sub>, SK=CONSENT#<version>`
- `PK=AUDIT#<date>, SK=<timestamp>#<eventId>` write protected; avoid logging sensitive payloads
- `PK=LIMIT#<sub>#<date>, SK=<feature>` conditional update for quotas

Use indexes minimally (document projected attributes and RCU/WCU cost). Use conditional writes and idempotency key to avoid duplicate completion. Pagination/cursors on all lists. Roles may be held in Cognito groups but sensitive changes are rechecked in backend; never trust client-submitted `role` or `userId`. User ID is derived from verified token `sub`.

### Lesson revision invariants
- Stable `lesson_id`, immutable `revision_id`.
- States: `draft -> review -> approved -> published -> archived` with authorized transitions only.
- Each `progress` record references stable lesson ID and optionally `completed_revision_id`.
- At publish time, atomically advance the published pointer and keep earlier revision for audit/rollback.

## 5. API contract skeleton

Public routes:
- `GET /v1/public/catalog`
- `GET /v1/public/lessons/{slug}` (published demo only; no answers)

Auth routes:
- `GET /v1/me`, `PATCH /v1/me` (token -> subject)
- `GET /v1/lessons/{id}` (published lesson)
- `PUT /v1/progress/{lessonId}` (idempotent, authenticated)
- `POST /v1/exercises/{exerciseId}/submit` (grade exclusively server-side)
- `GET /v1/reviews/due`, `POST /v1/reviews/submit`
- `GET /v1/me/export`, `POST /v1/me/delete-request`

Role-protected admin routes:
- `POST /v1/admin/lessons`, `PATCH /v1/admin/lessons/{id}/draft`
- `POST /v1/admin/lessons/{id}/submit-review`
- `POST /v1/admin/lessons/{id}/approve`
- `POST /v1/admin/lessons/{id}/publish`
- `GET /v1/admin/audit`
- `POST /v1/admin/media/presign` (type/size enforced)
- Privilege elevation reserved for Super Admin via privileged authenticated server action, MFA and audit.

Auth gateway HTTP API verifies JWT `issuer` and `audience`/client. Lambda checks `cognito:groups`/policy plus ownership; return generic 403 to unauthorized users, never leakage of other users' data. Avoid unauthenticated bulk data APIs.

## 6. Cost guardrails / account configuration before deploy

**Manual AWS Console steps (owner performs):**
1. Billing and Cost Management > Free Tier: verify `Free` plan, credit balance, **exact account plan expiration date** and credit validity date.
2. Budgets > Create **cost budget USD $10/month**; alerts at 50%, 80%, 100%, email verified. Alerts can lag and do not enforce a hard spending cap.
3. Billing > Free Tier alerts enabled; check regularly (at least weekly). Review cost by service and Region; distinguish pre-credit usage cost from actual amount due.
4. Enable account-root MFA and protect credentials; use a separate least-privilege IAM identity with AWS CLI temporary login. Do not create AWS Organizations as that may upgrade Free Plan and invalidate credits.
5. Keep one AWS Region for backend. Do not launch NAT Gateway, EC2, RDS, EKS, ElastiCache, OpenSearch, provisioned Bedrock throughput, paid WAF, or Route 53 domain purchases in the MVP.
6. Disable or reduce verbose debug logs; apply CloudWatch retention (7-14 days) and redact authorization headers, e-mail, passwords, tokens and speech contents.
7. Every deploy: obtain resource diff, check all resources, quotas, alarms, pricing; require explicit user go-ahead before changes.
8. Set project limits: small file uploads, paginated API, request throttles, auth abuse protections, S3 lifecycle, low CloudWatch log retention.
9. Ensure backup exported **outside AWS** frequently; test restore to local mock or secondary provider. Snapshot/export mechanisms themselves can incur charges.
10. Do not enable AI for unlimited public access. Feature flag `AI_ENABLED=false` by default.

### Indicative beta consumption targets (NOT AWS quote)
- $0-$5/month: development / low-traffic smoke testing aim.
- $5-$10/month: beta monitoring target, dependent on traffic and egress.
- $10/month: alert threshold and human stop/review, **not service cutoff**.
- Reserve $150+ of credit initially for experimentation/migration risk rather than attempting to spend all credit. Credits unused at expiry may be lost.

Check current prices with official calculators/console before budgeting; cost varies with Region, usage, egress, build minutes and service configuration. Cognito default email quota is 50 messages/day (when using default email sender); invite small beta groups first, SMS off.

## 7. Folder structure

```text
han-ngu-lab/
  apps/web/                    # Next static frontend
  services/api/                # Lambda REST API
  packages/domain/             # lesson and grading contracts
  packages/ui/                 # shared UI if useful
  infra/                       # CDK, build only before approved deploy
  content/hsk0/                # lesson seeds with provenance
  scripts/                     # imports, exports, validations
  docs/ARCHITECTURE_AWS.md
  docs/COST_GUARDRAILS.md
  docs/DEPLOY_RUNBOOK.md
  docs/RESTORE_RUNBOOK.md
  docs/TEST_MATRIX.md
  AGENTS.md
  .gitignore
```

`.gitignore`: `.env*` except `.env.example`, credentials, cache, build output, generated secret files, user exports and PII. `.env.example` only names/placeholders. Use `.gitignore` and secret scanning on PRs.

## 8. Codex project instructions (`AGENTS.md` core)

```
You work on Hán Ngữ Lab according to Han_Ngu_Lab_AWS_Codex_Blueprint_v1.md and Han_Ngu_Lab_PRD_v1.md.
- Work one phase at a time; never deploy, incur AWS charges, upgrade plan, create paid resources, or delete user data without the owner's explicit permission.
- Never use root credentials, long-lived AWS keys, or print secrets. Never commit .env or PII.
- Prefer static Next.js front end + Cognito + HTTP API + Lambda + provisioned DynamoDB.
- Do not create EC2, RDS, NAT Gateway, OpenSearch, WAF, SMS or Bedrock in MVP.
- Respect editor/reviewer/admin/superadmin RBAC and verify access in APIs.
- Never trust browser-submitted scores, role, user ID, or unpublished answer keys.
- Every phase must run lint, typecheck, unit tests, security checks, and build.
- Report changed files, test output, architecture impact, AWS resource changes and cost risks.
- Any deployment needs reviewed infrastructure diff + manual approval.
- Keep user data backup/export and restore mechanisms; support deletion and privacy policy.
```

## 9. Phases / prompts để gửi lần lượt cho Codex

### Phase 0 — Local UI + mocks only

```text
Đọc Han_Ngu_Lab_PRD_v1.md và Han_Ngu_Lab_AWS_Codex_Blueprint_v1.md.
Tạo monorepo TypeScript apps/web, services/api, packages/domain, infra, content, scripts, docs.
Triển khai giao diện Public, Learner, Admin hoàn chỉnh ở mức mock; Next.js App Router, static export; responsive mobile/desktop, hỗ trợ chữ Hán/Pinyin, Vietnamese UI. Tạo 3 bài nhập môn HSK0 gốc.
Viết schema Zod cho Course/Level/Unit/Lesson/Revision/Vocab/Exercise, logic quiz giả lập, lịch sử tiến độ giả lập. Không sử dụng AWS, không deploy.
Tạo AGENTS.md, ARCHITECTURE_AWS.md, COST_GUARDRAILS.md, IMPLEMENTATION_PLAN.md và TEST_MATRIX.md.
Chạy npm lint/typecheck/test/build (nêu lệnh chính xác). Báo cáo trước khi chuyển phase.
```

### Phase 1 — Infra review only

```text
Thiết kế AWS CDK stacks cho Cognito Lite, HTTP API JWT Authorizer, Node Lambda, DynamoDB Standard provisioned, private S3, CloudWatch log retention.
Tạo IAM least privilege, explicit CORS, resource cleanup safeguards and cost notes. Chỉ viết mã IaC: KHÔNG cdK deploy, không gọi các AWS APIs tạo/sửa resource.
Đưa sơ đồ, giả định, bảng resource, công suất DynamoDB (kể cả GSI), monthly pricing factors, `cdk diff` command, checklist trước khi deploy. Không tự nâng AWS account lên Paid.
```

### Phase 2 — Deploy staging after explicit owner approval

```text
Sau khi chủ dự án kiểm tra AWS Free Plan eligibility, AWS Budgets và phê duyệt resource diff, hướng dẫn tạo staging resources bằng CDK. Chỉ sử dụng 1 region. Xuất rõ Resource IDs/URLs không nhạy cảm, xác thực JWT, CORS, test negative access. Không kích hoạt Bedrock, SMS, paid WAF hoặc resources ngoài scope. Chạy smoke tests và đưa báo cáo billable resources.
```

### Phase 3 — Auth + learner data

```text
Tích hợp Cognito email/password (OAuth authorization code + PKCE), email verification, password recovery; các nhóm learner/editor/reviewer/admin/super_admin. Dùng HTTP API+Lambda nhận user từ JWT, tuyệt đối không tin userId từ client. Xây user profile, lesson progress, test submission. Kiểm thử A không thể xem/sửa dữ liệu B, người dùng thường không gọi admin routes được. Không tạo quyền admin qua client.
```

### Phase 4 — CMS and publishing workflow

```text
Xây CMS draft-review-approve-publish có immutable revisions, audit log, rollback, content validation Pinyin/HSK version/answer key, signed private media uploads. Editor không tự publish, admin không tự promote superadmin. Public content only after publish; existing progress survives revision.
```

### Phase 5 — Lesson engine and SRS

```text
Làm 12 bài HSK0 gốc và bài demo HSK1, flashcards, FSRS/SRS, exercises, server-side grading, charts, content importer and export. Run E2E across two test users and one editor/reviewer. Ensure no copyright copying from reference website or commercial textbooks.
```

### Phase 6 — AI pilot only after owner approval

```text
Design optional Amazon Bedrock adapter, disabled by default. No infrastructure/deployment until owner approves actual model, region, pricing, eligible account services, safety rules, and token budgets. Set per-user/day and global/month caps enforced by atomic database writes; max input/output tokens, request timeouts, abuse/rate protections, logging without sensitive content, and emergency kill switch.
```

### Phase 7 — Beta, backups, go/no-go

```text
Prepare beta launch checklist for 10-30 voluntary users, no paid subscriptions. Test 2FA for admins, auth, privacy and deletion workflow, data export/restoration from outside AWS, throttling, caching, accessibility, performance, billing alerts, and Free Plan expiration contingency. Do not publish official announcement until owner approves.
```

## 10. Local Windows / PowerShell quick start

Prerequisites: Node.js LTS, npm, Git, Codex, optionally AWS CLI v2 (latest) for later staging; never need AWS keys for Phase 0.

```powershell
New-Item -ItemType Directory -Force D:\HanNguLab | Out-Null
Set-Location D:\HanNguLab
git init
# Copy both *.md specification files into this folder.
# Open this folder in Codex and send the Phase 0 prompt above.
```

**AWS CLI optional phase 1/2 checks**, with IAM least privilege and `aws login` supported from AWS CLI 2.32.0 onward:

```powershell
aws --version
aws login
aws sts get-caller-identity
aws configure get region
```

Never paste the command output containing account identifiers into public screenshots. `aws login` should be performed using an appropriate IAM identity, not root. `aws sts get-caller-identity` confirms which identity is active. Read AWS docs for IAM role/policy configuration.

## 11. Manual first-deployment review

- Current Free Plan expiry date and credit expiry shown in Console; no inference from credit balance.
- Exact named AWS services are available to this Free Plan in chosen Region.
- Budget alerts delivered to your email; service costs and quotas reviewed.
- CDK diff reviewed; no NAT Gateway/VPC/RDS/EC2/WAF/Bedrock provisioned by accident.
- Cognito custom domain/SMS not configured; default email quota adequate for beta.
- DynamoDB `PAY_PER_REQUEST` not accidentally selected if targeting provisioned free quota; all tables/GSI capacity counted.
- Front-end output builds locally; Cognito callback domain and API CORS restricted to exact known domains.
- No secret/public write access, no cross-user data leaks; admin privileges require backend checks.
- Non-AWS external encrypted backup tested by restoring local fixtures.
- User-controlled deployment and teardown runbook documented.

## 12. Official references

- AWS Free plan / credits / expiration: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html
- Free plan FAQs: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-FAQ.html
- AWS cost budgets: https://aws.amazon.com/aws-cost-management/aws-budgets/pricing/
- AWS Amplify pricing: https://aws.amazon.com/amplify/pricing/
- AWS Amplify Next.js hosting: https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html
- DynamoDB free provisioned capacity: https://aws.amazon.com/dynamodb/pricing/
- Cognito pricing: https://aws.amazon.com/cognito/pricing/
- Cognito email limits: https://docs.aws.amazon.com/cognito/latest/developerguide/quotas.html
- Lambda pricing: https://aws.amazon.com/lambda/pricing/
- API Gateway pricing: https://aws.amazon.com/api-gateway/pricing/
- AWS CLI local login: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sign-in.html
