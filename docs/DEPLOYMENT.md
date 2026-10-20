# Triển khai Hán Ngữ Lab — chuẩn bị sau audit

Ngày20/10/2026. Tài liệu chuẩn bị, không phải bằng chứng đã triển khai. Chưa push GitHub, chưa tạo AWS resources. Không kiểm tra lại học liệu, chất lượng/quyền media hay UI đã được chủ dự án duyệt.

## 1. Kiến trúc giữ nguyên

| Thành phần | Hiện có | Nơi cần chạy |
|---|---|---|
| Frontend | Next16.4.2, React19, client, output export/out | Amplify Hosting platform WEB, artifact out/ |
| API | Express5/Node24, session, CMS, dữ liệu người học | Node service riêng với HTTPS, không phải build container của Amplify |
| Database | node:sqlite, WAL, schema1 | Đĩa bền vững của backend, ngoài checkout/đĩa tạm |
| Email | createApp nhận sendMail; entry hiện chưa nối adapter | Dịch vụ email thật, ví dụ SES, cần tích hợp và kiểm chứng |
| Podcast | API/catalog/media file ở .local, Git bỏ qua, live hiện404 | Đóng gói dữ liệu đã xuất bản và cơ chế phục vụ production; không bật preview |
| Audio public | File đã có trong public và artifact build | Đi theo artifact; không cần TTS runtime |

Không đổi sang SSR, DynamoDB/RDS/Cognito hoặc viết lại ứng dụng trong audit này. Đề xuất ít thay đổi nhất là một Node backend trên VM với SQLite persistent; chưa chọn/mua instance. Nếu cần nhiều replica phải thiết kế database dùng chung trước, không nhân bản SQLite local.

## 2. Amplify: static WEB và version

Theo tài liệu AWS ngày kiểm tra, Hosting Compute chỉ công bố SSR Next12–15. Repo dùng Next16.4.2 nên không nhận là SSR được hỗ trợ. Frontend hiện không cần SSR/API routes của Next; static export là artifact HTML/JS/CSS, tách khỏi giới hạn runtime SSR.

amplify.yml dùng Node24.15.0, npm ci --include=dev, lint/test/build và baseDirectory out. Phải cấu hình platform WEB rõ ràng; không để tự suy ra WEB_COMPUTE từ tên framework/build command. Không thay artifact sang .next để lách nhận diện. Docs SSG14+ của AWS và FAQ repository có cách mô tả artifact khác nhau; cấu hình ở đây là generic static hosting, vẫn cần build/deploy thử sau khi được phép. Chưa có bằng chứng Amplify thực chạy version/toolchain này.

Chỉ artifact out được publish; không upload project root, .next, server, content nguyên bản, .env hoặc .local. Script build không gọi Python/TTS/ASR và không cần model giọng. Các script podcast Windows không nằm trong build web.

Nguồn: [AWS Next support](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-amplify-support.html), [AWS deployment settings](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html), [Amplify Hosting FAQ](https://github.com/aws-amplify/amplify-hosting/blob/main/FAQ.md).

## 3. Cùng origin /api và HTTPS

Client hiện gọi /api tương đối, credentials same-origin. Next chỉ proxy127.0.0.1:3001 khi development; rewrite đó không xuất vào HTML production. Tuyệt đối không cấu hình destination localhost trên Amplify.

Cần backend có endpoint HTTPS thật, rồi kiểm chứng reverse proxy /api trước khi cho người dùng đăng nhập. Ví dụ tài liệu, chưa áp dụng:

```json
[{"source":"/api/<*>","target":"https://API_HOST_DA_XAC_MINH/api/<*>","status":"200","condition":null}]
```

Đặt rule API trước mọi fallback. Root app chỉ có route /, không cần wildcard trả index.html cho mọi file. Không biến API404/media404 thành HTML200, không cache auth/data responses. Cần nghiệm thu POST/PATCH, Origin, X-HNL-Client, Cookie/Set-Cookie, Secure/HttpOnly/SameSite, logout/reset, Range206 và401/403 qua chính domain thật. Docs AWS chỉ xác nhận proxy HTTPS; cookie forwarding thực tế chưa kiểm chứng trong tài khoản này. Nếu proxy không đáp ứng, phải chọn gateway cùng origin phù hợp, không tắt CSRF/Cookie Secure để chữa.

APP_ORIGIN phải đúng origin HTTPS công khai, không path/query/credentials/trailing slash. Backend bind loopback phía sau TLS reverse proxy. Chỉ cấu hình trust proxy theo hop/CIDR đã xác minh; không tin mọi X-Forwarded-For. Rate limiter hiện in-memory/IP, cần kiểm IP thật, không dùng nhiều replica với hạn mức riêng mà quảng cáo là một giới hạn chung.

Liên kết mới dùng /#verify=... hoặc /#reset=... để fragment không gửi tới access log; client vẫn đọc liên kết query cũ và xóa token khỏi thanh địa chỉ. Không log body auth, cookie hoặc email link. Header API no-store/no-referrer đã có. customHttp.yml ở root chuẩn bị no-referrer/nosniff/SAMEORIGIN cho artifact tĩnh; không dựa vào Helmet API để bảo vệ response từ Amplify. CSP hiện chưa bật/enforce; static Next có inline bootstrap nên cần thử policy phù hợp trước production, không bật policy gây hỏng ứng dụng.

Nguồn: [AWS reverse proxy và log URL](https://docs.aws.amazon.com/amplify/latest/userguide/redirect-rewrite-examples.html), [AWS static headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-header-YAML-format.html).

## 4. Biến môi trường và dependencies

.env.example chỉ là ví dụ local, không phải file tự load của API. Cấu hình môi trường qua process manager/secret store. Biến đã được code đọc: NODE_ENV, LOCAL_PREVIEW, APP_ORIGIN, HOST, PORT, DATABASE_PATH; HNL_BACKUP_PASSWORD chỉ cho CLI backup. AI hiện không có luồng gọi trả phí; health luôn báo false.

Production cần NODE_ENV=production, LOCAL_PREVIEW=false, APP_ORIGIN=https://domain-thật và DATABASE_PATH trên persistent volume. Chỉ đặt biến không đủ: server/index.ts chưa nối sendMail, vì vậy startup production đang bị chặn. Không dùng adapter no-op/test transport hoặc LOCAL_PREVIEW=true để đưa bản này lên Internet.

Nếu chọn SES: cần viết adapter vào entry, xác minh sender/domain, thoát sandbox hoặc xác minh recipients theo account, xử lý lỗi gửi/resend verification. Không đặt SES/AWS secrets vào frontend/NEXT_PUBLIC_*. Ưu tiên instance role thay access key tĩnh. Các tên biến SES mới chưa phải cấu hình được ứng dụng hỗ trợ.

tsx là runtime dependency vì npm start chạy tsx; lockfile đã cập nhật, không đổi version runtime đã chọn. Next build cần devDependencies (TypeScript/ESLint). Backend có thể npm ci --omit=dev; kiểm tra này không có nghĩa bỏ được các package production còn hiện diện trong repo. Node24 được chốt để node:sqlite hoạt động; không tự chuyển Node major.

## 5. Database, dữ liệu và khôi phục

SQLite trong thư mục làm việc của Amplify/Lambda không phải nơi giữ tài khoản/tiến độ. Chưa có service database cloud. Phương án VM giữ cùng schema hiện hành, DATABASE_PATH tuyệt đối trên volume persistent, quyền file tối thiểu, một writer/host, health/backup/khôi phục độc lập máy dev.

Schema hiện là bootstrap version1, chưa có chuỗi migration tiến hóa cho PostgreSQL/DynamoDB. Đã bổ sung guard từ chối DB có user_version mới hơn ứng dụng thay vì ghi đè số version. Không chạy seedPreview hoặc tạo admin mặc định ở production. Những cờ xuất bản trong DB phải được chuyển đúng theo nội dung chủ dự án đã duyệt; đây là bước xuất bản dữ liệu, không yêu cầu audit lại nội dung.

CLI backup xuất transaction nhất quán, mã hóa AES-256-GCM với scrypt; restore chỉ vào DB mới, kiểm schema/foreign keys/published pointers và không restore sessions/tokens. Không copy nóng một file .sqlite mà bỏ WAL. Backup code/media là luồng khác; không coi bundle podcast là backup toàn bộ tài khoản.

Cần lịch backup DB thật và đích ngoài AWS trước khi mở dịch vụ; khóa giải mã lưu tách backup. Thử restore trên môi trường sạch, đăng nhập và dữ liệu synthetic trước di chuyển dữ liệu thật. Chưa thao tác/copy DB người học thật trong audit này.

## 6. Quyền tối thiểu và vận hành

- GitHub App chỉ được truy cập đúng private repo được chọn. Actions chỉ contents:read, không AWS key, không push/deploy, không pull_request_target; action commit SHA được pin, Gitleaks binary pin version/checksum.
- Người triển khai AWS dùng identity riêng/MFA; không root access key/AdministratorAccess cho runtime. Quyền Amplify Hosting theo app/branch; không cấp quyền backend chỉ để build frontend.
- Backend role nếu chọn SES chỉ SendEmail theo identity cần thiết; backup chỉ List/Get/Put vào bucket/prefix riêng, không quyền xóa mọi bucket. Log group có retention ngắn và quyền ghi đúng group. Secret store/KMS bổ sung chỉ khi thật sự dùng và đã dự toán.
- Cảnh báo API5xx/latency/401/403/429, disk SQLite/WAL, backup quá hạn, mail gửi thất bại; không ghi body/token/PII. Log retention7ngày là đề xuất, chưa có monitoring triển khai.
- Trước credit hết hạn: kiểm mốc thật, T-30ngày xuất/restore ngoài AWS, T-14ngày thử domain/TLS/cookie/email và rollback. Không đợi account đóng mới tải backup.

## 7. Chi phí: kịch bản, không phải báo giá/tài nguyên đã tạo

Giả định frontend tĩnh, một backend nhỏ, ít email, không AI runtime; chưa có số tải thật. AWS Amplify công bố build standard0.01USD/phút, storage0.023USD/GB-tháng, transfer0.15USD/GB ngoài ưu đãi. Ví dụ100phút build +10GB transfer +1GB storage xấp xỉ2.523USD/tháng chỉ phần Hosting. 100GB transfer là15USD trước tính backend/email/backup.

Lightsail public-IPv4 Linux1GB được docs nêu7USD/tháng; đây chỉ là ứng viên backend, phải kiểm region/Free Plan/credit eligibility trong Console. Dự toán ít tải khoảng10–20USD/tháng (60–120USD/6tháng) với một backend, hosting, email/backup/log nhỏ; không bảo đảm dưới150USD nếu tải/egress/thuế/dịch vụ tăng. Credit200USD do chủ dự án báo chưa được xác minh và không mở rộng ngân sách150USD đã chốt.

Free Plan có thể kết thúc sau6tháng hoặc khi hết credits, tùy mốc đến trước; sau đó account có thể đóng/mất truy cập dữ liệu. Không tự nâng Paid Plan. Budget/cảnh báo50/80/100% chỉ để phát hiện, không phải hard cap. Không tạo NAT Gateway, RDS luôn bật, WAF, autoscaling hoặc domain trả phí như một phần audit. GitHub Actions private cũng có quota theo gói, workflow timeout/cancel concurrency đã giới hạn; chưa kiểm quota tài khoản.

Nguồn: [Amplify pricing](https://aws.amazon.com/amplify/pricing/), [Lightsail bundles](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html), [AWS Free Plan](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html).

## 8. Thứ tự sau khi chủ dự án nhận báo cáo

1. Chỉ push private repo khi được yêu cầu; kiểm visibility/remote và secret scan lại sau commit mới. Đặt branch protection/CI required theo quyền của gói GitHub, không giả định đã bật.
2. Xác minh plan/credit/hạn/region/quota, lựa chọn backend/storage/email phù hợp; chưa provision trong audit.
3. Hoàn tất email adapter, API HTTPS, DB persistent/migration dữ liệu và đường phục vụ podcast production đã xuất bản; không bỏ guard.
4. Sau đó mới kết nối Amplify platform WEB với buildspec static và kiểm chứng /api cùng origin/cookies trên staging.
5. Chỉ mở public khi các bước kỹ thuật trên, backup ngoài máy và restore/drill đạt. Build local thành công không phải deployment thành công.
