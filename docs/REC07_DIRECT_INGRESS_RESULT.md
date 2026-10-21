# REC-07 — DONE: direct ingress trên Lightsail

Nghiệm thu 21/10/2026 (+07), sau phê duyệt D-057. Hostname `sslip.io` **chỉ dùng tạm**, chưa phải domain production do chủ dự án sở hữu.

## Đường truy cập hiện hành

- Website/API: **https://54-253-61-113.sslip.io/**. Frontend tĩnh được Caddy phục vụ từ `/srv/han-ngu-lab/current`, symlink tới release riêng `/srv/han-ngu-lab/releases/e25d6c5ee8fe337b7819f9b68c30cffeb1cbb30b/site`.
- Browser HTTPS → Caddy → Express127.0.0.1:3001. Caddy **không cấu hình trusted proxies**, ghi đè XFF bằng `{http.request.remote.host}`, bỏ Forwarded/X-Real-IP/CF-Connecting-IP/CloudFront-Viewer-Address/True-Client-IP. Express chỉ tin hop0 loopback.
- APP_ORIGIN chỉ còn hostname mới; APP_STAGING_ORIGIN đã bỏ. Trong staging chỉ cho phép đúng hai origin cấu hình, không wildcard/CORS tùy ý. SMTP và mọi byte env ngoài hai biến origin khớp snapshot trước thay đổi.
- Không đổi `amplify.yml`/`baseDirectory:.next`, framework, database schema, học liệu, nhạc, giọng hoặc IAM/SES. Không mua domain, nâng gói hay tạo tài nguyên AWS trả phí.

## Bằng chứng bắt buộc sau cutover

Lúc **21:30 (+07)** sau cả diễn tập rollback và cutover lại, probe HTTPS health-only tạm thời dùng HMAC trong RAM; không log địa chỉ IP thô:

| Mạng nguồn thật | Client key thường | Client key với XFF/Forwarded giả | Kết luận |
| --- | --- | --- | --- |
| Windows ngoài AWS | `aed763b3d05c63b3fb0c96d1` | cùng key | Header giả không đổi bucket |
| Lightsail AWS qua HTTPS public | `f5fc598bfbe134d303713784` | cùng key | Header giả không đổi bucket |

- Hai nguồn độc lập có key khác nhau, header forwarded đến ứng dụng chỉ một IP. RateLimit policy/backend bucket cũng khác nhau giữa hai nguồn, request thường/giả dùng cùng bucket và mỗi request giảm remaining một đơn vị. Đây là đo production thực, không chỉ synthetic test hoặc health200.
- Probe đã gỡ, unit dừng. Timer cập nhật CloudFront CIDR bị disable vì ingress trực tiếp không dùng CIDR; giữ unit/file cũ cho rollback, không mở trust mọi AWS.
- API rate limit giữ180/phút, auth20/15phút. Thêm login guard10 yêu cầu thất bại/chưa hoàn tất xác minh mỗi15phút theo hash email chuẩn hóa, qua nhiều IP; đăng nhập thành công xóa bộ đếm. Bounded10000key, generic error, không khóa vĩnh viễn. Các limiter RAM theo một process, reset khi restart; không tuyên bố distributed protection.
- Cooldown email60giây/5lần mỗi giờ, hash recipient, queue20/gửi1,1giây giữ nguyên.

## Xác thực, CMS, nội dung và dữ liệu

- Kiểm bằng một alias của hộp thư owner, tài khoản synthetic riêng; không đọc/đổi mật khẩu hoặc nâng quyền tài khoản thật. SES gửi verify/reset tới hộp thư thật; cả link trỏ đúng hostname mới. Verify/reset single-use, login trước verify bị chặn, password sai401, reset thu hồi phiên cũ.
- Cookie thực có Secure/HttpOnly/SameSite=Strict. Browser đăng nhập, hiển thị CMS16bài/152media revision; learner bị403. CSRF sai origin/thiếu X-HNL-Client bị403. Sau cutover origin Amplify bị403 cho write.
- Tài khoản synthetic được cấp Admin có giới hạn thời gian để test CMS, sau đó trả learner/disabled, thu hồi toàn bộ phiên/token của chính fixture và lưu audit. Không xóa user hay dữ liệu đã có. Một attempt/progress synthetic được giữ để chứng minh persistence; không trộn vào tài khoản học viên thật.
- Progress + session fixture tồn tại sau hai lần restart (staging và cutover), submit lặp cùng idempotency key không nhân bản attempt. Đối chiếu SHA từng hàng có trước fixture trên14bảng: **tất cả hàng cũ còn nguyên**, integrity/FK đạt sau cleanup.
- Production16bài/80bài tập/94từ canonical;145 mục âm A/290MP3;7podcast/14MP3/43đoạn phụ đề. Tải **304MP3** trên hostname mới có SHA khớp bản gốc. Range206 cho14podcast và cặp normal/slow âm đọc mẫu.
- Browser phát mix thật readyState4/errornull/time tăng3→13,79giây; phụ đề Hán/Pinyin/Việt hiển thị. Đã dừng sau kiểm tra. Không coi thử phát là duyệt chuyên môn; nhãn Bản thử nghiệm — Chưa duyệt giữ nguyên, không nhận đủHSK4.
- Sau cutover, adapter SMTP thật587/STARTTLS gửi verify/reset simulator accepted; SES vẫn Production GRANTED/SendingEnabledtrue. Không tái test bounce/complaint không thay đổi.

## Amplify cũ và email cũ

- Giữ app/artifacts Amplify, không xóa resource. Rules hiện tại là **redirect302**, không external rewrite200:
  - `/api` và `/api/<*>` → `https://54-253-61-113.sslip.io/__legacy_api_retired`.
  - `/<*>` → `https://54-253-61-113.sslip.io/<*>`.
- Endpoint retirement do Caddy trả410, không chuyển tới Express. POST qua API cũ với Origin giả thành canonical và XFF giả đã nhận302 tới fixed410. Không còn proxy trung gian cho attacker xoay bucket. Nếu client tự tới API mới, Caddy luôn dùng TCP peer của client đó.
- Test browser link Amplify cũ với fragment reset giả: tới form Đặt mật khẩu mới tại hostname mới. Fragment verify giả tới verifier mới và hiện lỗi token không hợp lệ như mong đợi; fragment được ứng dụng xóa khỏi thanh địa chỉ. Không dùng token học viên thật để thử redirect. Referrer-Policy:no-referrer và Cache-Control:no-store đã cấu hình trên Amplify; header frontend mới cũng no-referrer/no-cache.
- Người dùng cần đăng nhập lại do cookie khác hostname. Tài khoản/password/progress không đổi. Bookmark, link public cũ được302; không dùng301 vĩnh viễn trên domain tạm.

## Backup và rollback

- Trước triển khai đã chạy backup WAL-safe/restore-verify; snapshot Caddy/env root-private tại `/var/backups/han-ngu-lab-ops/rec07-e25d6c5`. Giữ binary Caddy cũ và các release cũ.
- **Đã thực thi rollback toàn bộ thật**: khôi phục Amplify rules/header, server code1fab4bb/env, kiểm oldWebsite200 và newHostname302 trở lại Amplify lúc21:28 (+07), rồi cutover lại thành công21:29. Không restore/replace SQLite; mọi hàng gốc14bảng giữ nguyên. Browser link reset dùng hostname mới vẫn mở form cũ khi rollback, fragment không mất.
- Lỗi vận hành đã sửa: health check quá sớm → retry connection-refused có giới hạn và Bash ERR inheritance `set -E`; snapshotCaddyfile600 → cài targetroot644 để usercaddy đọc; dừng transienttimer đã unload → thao tác idempotent. Lần lỗi timer đã kích hoạt controller khôi phục AWS rules và server, sau đó sửa và tái cutover thành công. Không tắt kiểm tra để báo đạt.
- Lúc staging có watchdog rollback45phút; đã dừng trước cutover có điều khiển. Controller cutover try/catch khôi phục cả Amplify rules lẫn server config nếu gate nghiêm trọng thất bại. Không tuyên bố watchdog VM có quyền khôi phục AWS; VM không nhận AWS credentials.
- Snapshot rules/header Amplify và JSON update rollback: `.local/production-recovery/rec07/amplify-rollback.json`, private trên Windows. Protected server tool `/var/backups/han-ngu-lab-ops/rec07-e25d6c5/rollback-tool.sh rollback` khôi phục env/code1fab4bb và Caddy fallback-safe: API đi đường cũ, các trang ở hostname mới302 về Amplify để link email mới không bị404. SnapshotCaddyfile nguyên thủy vẫn giữ riêng. Không đụng DB. Đây là rollback **riêng mốc REC-07**, không dùng cho release tương lai chưa đối chiếu.
- Khi cần rollback: xác minh working tree server sạch và AWS CLI đăng nhập tạm; khôi phục đúng snapshot rules/header qua Amplify update-app (không env/plan); chạy protected rollback tool qua SSH pin; kiểm oldURL/API/auth. Không chạy lại private cutover test harness sau khi fixture đã thu hồi. Không reset Git/force-push hoặc khôi phục SQLite để quay lui routing.
- Backup sau cleanup: `20261021T142037Z-2fff33b7.sqlite.enc`, SHA256 `82a5c4fde0b591f84c1ace70e43252b1ca5a0c479e97c9a4a4549a71393a0d5a`. Copy ngoài AWS + giải mã/integrity/FK/inventory đạt21:20 (+07); VM backup timer vẫn active. Windows phải bật/login/Internet để tự đồng bộ.

## Kiểm thử và bằng chứng

- Local một lượt sau thay đổi: lint/typecheck/**51tests**/production build/smoke đạt. CI39613379221SUCCESS, Amplify Deployment10SUCCEED đúng runtime commit `e25d6c5ee8fe337b7819f9b68c30cffeb1cbb30b` trước cutover. Không chạy lặp toàn bộ bộ test khi chỉ thêm biên bản.
- Private artifacts `.local/production-recovery/rec07/`: multi-client-final.json, cutover-result.json, content-verification.json, email-redirects.json, playback.json, cms-staged.png, production-home.png. Không đưa cookies/password/token/email nguyên văn/backup/key hoặc cấu hình chứa secret vào Git.
- Rủi ro còn lại: sslip.io tạm thời; một VM là điểm lỗi đơn, RAM limiter reset lúc restart, NAT chung vẫn dùng chung IP theo thiết kế, chi phí traffic frontend nay về Lightsail phải theo dõi. Không cam kết tải vô hạn hoặc tổng chi phí0.
