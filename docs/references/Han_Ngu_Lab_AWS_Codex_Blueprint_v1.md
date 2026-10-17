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
