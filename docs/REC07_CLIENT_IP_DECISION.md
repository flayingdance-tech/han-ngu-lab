# REC-07 — ranh giới tin cậy IP và phương án cần phê duyệt

Ngày kiểm tra: 21/10/2026 (+07). **Chưa giải quyết REC-07; chưa triển khai thay đổi kiến trúc.**

## Kết luận từ bằng chứng production

- VM đang ở `1fab4bb6c02920a75bfc3ec136f210caf30fdf71`. Đọc trực tiếp Caddyfile: strict trust chỉ CloudFront origin CIDR, chuyển một XFF từ `{client_ip}`, bỏ Forwarded/X-Real-IP. Express chỉ trust hop0 loopback. API bind loopback; Caddy/API/backup timer/range timer active.
- Probe production ngày21/10 trước đây dùng Windows và VM Lightsail là hai nguồn mạng thực, HMAC trong cùng process; không in IP thô. Direct API có hai client hash khác nhau (`a27cc6c2b59ddb0279a4d604` và `2aed834bfa8501f403875c02`). Windows direct thường/forged dùng cùng bucket; đã kiểm thêm fake Forwarded/X-Real-IP.
- Qua Amplify, Windows thường/forged từng nhận hash proxy khác nhau (`979d4b4ba4aa0802d422206a` / `1ca537d5d4c2a76df2b1122a`), đều khác hash Windows direct. VM đi qua Amplify cũng không khớp VM direct; một request VM trùng bucket proxy của Windows. Đây là **bằng chứng bucket sai**, không phải bằng chứng header giả đã đổi thành IP do kẻ gửi chọn.
- Probe mở rộng cho thấy header đến origin có viewer + CloudFront; peer TCP/TLS nối vào Caddy không thuộc CLOUDFRONT_ORIGIN_FACING. Strict parser dừng ngay ở peer không tin cậy. Caddy ghi IP peer đó thành XFF duy nhất; Express tin đúng Caddy nhưng nhận IP sai ở tầng trước. IP người dùng chưa được xác thực, không phải bị Express đọc sai vị trí.
- Probe đã dừng/gỡ; không tạo endpoint IP thường trực. Lượt hiện tại không mở lại probe hay lặp bộ kiểm thử đã đạt: đọc cấu hình sống và đối chiếu artifact riêng `.local/production-recovery/caddy/windows-ip-result.json`, `vm-ip-result.jsonl`, cùng kết quả probe mở rộng trong phiên công cụ trước. Không tuyên bố đã chạy nghiệm thu sau sửa.
- Kiểm read-only lúc20:40 (+07): website API healthtrue,16bài,7podcast; các service/timer active. Không sửa app/env/SMTP/SES/IAM/DB/Caddy/Amplify và không push trong lượt điều tra này.

## Vì sao không chỉ sửa trust proxy

Chuỗi thực tế là browser → CloudFront/Amplify → proxy external rewrite → Caddy → Express. HTTPS xác thực máy chủ origin cho bên gửi; không tự xác thực proxy gửi tới origin. Header có IP CloudFront không chứng minh kết nối đến từ CloudFront.

CustomRule của Amplify được công bố chỉ có source/target/status/condition, không có trường thêm chữ ký hoặc origin authentication header. Custom headers của Amplify là **HTTP response headers**, không phải secret header gửi tới Lightsail. Đây là giới hạn của cấu hình đang dùng; không khẳng định mọi cách tích hợp AWS đều bất khả thi.

Không dùng: trust tất cả AWS/AMAZON, IP peer quan sát thủ công, hop count cố định, XFF trái nhất, header viewer do client tự gửi hoặc secret trong JavaScript/query/URL target. Những cách đó không tạo danh tính proxy đã kiểm chứng.

## Thay đổi nhỏ nhất đề nghị — chờ chủ dự án phê duyệt

Phục vụ **bản frontend tĩnh hiện có và API cùng origin** bằng Caddy trên Lightsail hiện có:

`browser HTTPS → Caddy (IP từ kết nối thật) → Express127.0.0.1:3001`

- Dùng hostname HTTPS hiện có `54-253-61-113.sslip.io`; không mua domain, không tạo tài nguyên AWS. Giữ Amplify để quay lui; chỉ sau nghiệm thu mới chuyển điều hướng website cũ.
- Caddy phục vụ duy nhất public build, không trỏ file server vào repo root, `.env`, SQLite hoặc backup. API giữ proxy loopback và ghi đè XFF bằng IP kết nối thực; canonical ingress trực tiếp không cần trust CloudFront/Amplify. Không đổi giọng/nhạc/học liệu/CMS.
- Giữ API `/api`, Secure/HttpOnly/SameSite cookies, CSRF Origin+X-HNL-Client+JSON, rate limits180/phút và20/15phút. APP_ORIGIN và URL trong thư xác thực/reset phải cùng canonical origin mới; giữ nguyên SMTP secret/SES.
- **Ảnh hưởng phải chấp thuận:** URL chính chuyển khỏi amplifyapp.com; cookie không chuyển giữa hai domain nên cần đăng nhập lại, dù giữ nguyên tài khoản/session DB. Các link email cũ có fragment cần kiểm qua redirect thực, không ghi token vào log. DNS sslip.io vẫn là phụ thuộc bên ngoài. Lightsail chịu thêm traffic frontend; không hứa chi phí/transfer bằng0.
- Đây là đổi đường phục vụ website nên **chưa thực hiện** theo yêu cầu9–10. Không đổi APP_ORIGIN, rules hoặc host hiện tại trước phê duyệt.

Nếu bắt buộc giữ URL amplifyapp.com: cần server-side relay có xác thực nguồn IP, ký method/path/body hash/IP/timestamp/nonce và origin xác minh trước limiter; không chỉ gắn HMAC lên XFF chưa xác thực. Phải xác minh nguồn viewer IP tại runtime, xử lý replay, cookie/Set-Cookie, CSRF, Range và chặn bypass. `output:'export'` hiện không có runtime relay; dự án dùng Next16.4.2 nhưng tài liệu Amplify hiện chỉ công bố managed SSR đến Next15. Không tự chuyển SSR/downgrade framework hoặc thêm compute/IAM để thử trên production. Phương án này lớn hơn và chưa được kiểm chứng tương thích.

## Chống lạm dụng tài khoản

Hiện có cooldown theo hash email60giây, tối đa5lần/giờ dùng chung register/resend/forgot, cả email không tồn tại; queue20, gửi tuần tự1,1giây, generic response. Giữ nguyên; không dùng email hash để thay thế IP nguồn đã xác thực.

Khi triển khai phương án được duyệt, bổ sung nếu cần giới hạn đăng nhập theo hash email/account và cặp IP+email trước kiểm password; cùng thông báo cho tài khoản không tồn tại, bounded storage/cooldown, tránh khóa vĩnh viễn tài khoản do request chưa xác thực. Kiểm restart/single-process semantics; không gọi đây là distributed limiter. Chưa thêm mã mới trong lượt phải dừng kiến trúc này.

## Điều kiện triển khai và quay lui sau phê duyệt

1. Snapshot cấu hình Caddy/APP_ORIGIN/rules và backup SQLite đã restore-verify. Tạo release frontend riêng; không copy DB local hoặc tái import nội dung.
2. Kiểm candidate offline/local trước, Caddy validate, deploy có health/rollback; giữ build/release trước. Không thay SMTP fields, auth DB hoặc schema để chuyển origin.
3. Nghiệm thu hai nguồn mạng độc lập (Windows hiện tại và VM nguồn thật; ưu tiên thêm mạng di động khi có): cùng client thường/forged phải cùng key; khác mạng phải khác key (trừ NAT chung); IPv4/IPv6 chuẩn hóa đúng. Không log IP/email/token thô.
4. Kiểm yêu cầu thẳng origin và đường cũ không né limiter, anti-spoof XFF/Forwarded/X-Real-IP; authemail limit, CSRF sai origin, cookie/login/logout/resend/reset bằng account kiểm soát. Test trên DB synthetic trước; owner tự thao tác password/token nếu cần.
5. Kiểm CMS/data/media/Range và timer backup sau cutover, chỉ chạy bộ kiểm liên quan một lượt, không lặp toàn bộ media audit nếu bytes không đổi. Chỉ DONE khi có bằng chứng multi-client sau sửa.
6. Rollback: khôi phục Caddy release, APP_ORIGIN và Amplify rules đã chụp, restart/reload đúng service, kiểm website/auth/health. **Không rollback SQLite** để quay lui routing; giữ mọi dữ liệu phát sinh và backup.

## Nguồn chính thức

- [Amplify CustomRule schema](https://docs.aws.amazon.com/amplify/latest/APIReference/API_CustomRule.html)
- [Amplify response headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html)
- [CloudFront XFF behavior](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html)
- [Caddy trusted proxies](https://caddyserver.com/docs/caddyfile/options#trusted-proxies)
- [Amplify Next.js support](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-amplify-support.html)
