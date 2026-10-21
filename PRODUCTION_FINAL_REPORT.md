## REC-03 / D-054 — cấp Admin production — 2026-10-21T16:46:42.3677431+07:00

## REC-05–07 — sản xuất, SES và offsite — 2026-10-21T19:49:43.3598763+07:00

- Chủ dự án xác nhận CMS Admin login thật hoạt động; REC-03B DONE theo xác nhận owner. Không cần reset mật khẩu hoặc nâng thêm quyền.
- SES Sydney: chính thức nộp SESv2 put-account-details qua AWS CLI phiên tạm quyền hiện có; PENDING rồi **GRANTED / ProductionAccessEnabled:true** lúc19:44 (+07). Suppression BOUNCE+COMPLAINT, feedback forwarding; simulator DSN/complaint đã nhận đúng mailbox. Adapter SMTP thật trên Lightsail gửi verify/reset tới success simulator đều accepted587/STARTTLS, không DB/token thật. Không mua domain/nâng gói/thêm IAM/SNS.
- REC-06 DONE: root exporter encrypted-only + Windows Scheduled Task HanNguLab-OffsiteBackup11:00/+AtLogOn, ACL user+SYSTEM, pin SSH, SHA/decrypt/integrity/FK/inventory. Scheduler chạy thực LastTaskResult0/status19:34 (+07); key tách riêng. PC phải bật/login/Internet; không bảo đảm24/7. VM daily backup giữ nguyên.
- REC-07 IN_PROGRESS: nâng Caddy2.11.7 official+SHA pin, rollback giữ binary/config/cert. Strict trust chỉ87 CloudFront origin CIDR, daily refresh/fail-closed7ngày. Probe2nguồn thật phát hiện Amplify external rewrite có peer trung gian ngoài dải CloudFront; bucket vẫn proxy nên có thể gộp user hoặc đổi bucket giữa request. Direct header giả không đổi IP. Không trust toàn AWS, không nhận đã sửa hoàn toàn; cần authenticated relay/ingress được triển khai và nghiệm thu. Probe đã gỡ và stop.
- Local npm run check PASS (typecheck/lint/49tests/build), smoke:production PASS; tests không chạm DB thật. Lượt đầu typecheck thiếu declaration choMJS; bổ sung d.mts, fullcheck lại đạt, không tắt kiểm tra.
- Production19:48 (+07): healthliveOK,16bài/7podcast; tải14MP3 podcast SHA khớp và Range206 đủ14; anonymousAdmin401. Không tái render, không đổi giọng/nhạc/giáo trình/dữ liệu/SMTP. amplify.yml .next nguyên trạng.
- Runbook docs/PRODUCTION_OPS_RECOVERY.md và SES_PRODUCTION_REQUEST.md; logs riêng .local/production-recovery/production-ops-*. Trạng thái trước mốc này là lịch sử, kết quả SES/Admin/offsite ở đây thay thế các mục còn ghi chờ.
- Đang chuẩn bị staged secret scan → safe Private main push theo D-051 → CI/Amplify → FF bundle vào VM chỉ ops/docs/test; không npmci/restartAPI/import/DB. .codegraph untracked giữ nguyên. IP và chuyên môn học liệu chưa hoàn tất.

Chủ dự án trả lời “Chấp nhận” cho việc cấp Admin cho tài khoản duy nhất đã xác minh email. Đã chạy CLI scripts/admin.ts hiện có trên Lightsail sau backup mới20261021T094403Z-4625f35d (restore/integrity đạt). Kiểm lại đúng1verifiedactive/rolelearner trước thay đổi, cấp roleadmin (khôngsuper_admin), revoke1sessioncũ, audittargetrolegrant. Không đổi mật khẩu hoặc các fielduserkhác; mọi bảngtoken/consent/học liệu/tiến độ/media và sessionngườikháckhớpfingerprint. DBintegrityok/serviceactive/healthliveok. Không mintsession/testđăngnhậpthayowner, khôngđọc/inemail/password/token.
Sau đổi quyền: backupjobthậtResultsuccess/exit0,20261021T094532Z-412981bf.sqlite.enc SHA256ea63570400aee6199899972baef830be5dabfe74c3c4edba9e8a0bf259dedb0a, users3/sessions0/audit2/lessons16/media152; bảnmãhóacopyWindowsngoàiAWS/keygiữnguyênriêng, decryptrestore/inventoryđạt. Cần ownerđăngnhậplạibằngpasswordhiệncóđểthấyQuảntrịnộidung; khôngresetpassword. ChưanghiệmthuUI bằng phiên thật củaowner.
Khôngsửa runtime/source/media/SMTP/AWSresources hoặcpushGit; mãbe8ebd8/CI39573514798/Amplify8giữnguyên. Kếtquảvậnhànhlưulocal. Khôngcòntácvụgrant/backupchạy. SES/offsiteauto/proxyclientIP/humanreviewcònnhưreport.
## Hoàn tất đồng bộ bàn giao — 2026-10-21T16:05:25.7546632+07:00

Commitcuối be8ebd8c1fd7bc501d1da66866652a5695f80931 đã Private main, CI39573514798 SUCCESS (https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39573514798), AmplifyDeployment8 SUCCEED đúngSHA (2phút25giây), VMmainFFbcff→be8/clean/serviceactive/timeractive. Chỉ8filedocs/testconfig thayđổi, khôngrestart/import/DB/audio. Runtimevàmedia đã nghiệmthutrênbcffgiữnguyên. RunnercáchlyCMS2/2 đạt thêm, khôngcộngthành20testkhácnhau. Report/docsbàngiaođãcótrênPrivateGit; checkpointkếtquảcuốinàylưulocalđểkhôngkíchnhịpbuildbiênbảnlặpvòng.
KhôngcònCI/build/deploy/testđangchạy. User chưa trảlờicâuhỏichọnAdmin; khôngtựgánquyền. SES vẫnSandbox/requestdisabled, offsiteauto/proxyđaIP/humanreviewcònnhưreport. .codegraphgiữnguyênuntracked.
# Hán Ngữ Lab — Kết quả khôi phục production

Cập nhật: 2026-10-21T15:54:45.0463362+07:00 (Asia/Bangkok, +07). Báo cáo theo bằng chứng thực tế; không đồng nghĩa học liệu đã được duyệt chuyên môn hoặc dự án đã hoàn chỉnh HSK 4.

## Phát hành đã hoàn thành

- Website: https://main.d12mghkvifkghp.amplifyapp.com/ . API: https://54-253-61-113.sslip.io/api/health trả `ok:true`, `mode:live`.
- GitHub `flayingdance-tech/han-ngu-lab` vẫn **Private**, nhánh main. Commit mã phát hành **bcff32e465291f5508cb7ec424a89a8e4a0dc7af**, lịch sử giữ nguyên, không force push. `amplify.yml` vẫn `baseDirectory: .next`.
- GitHub Actions **39571450948 SUCCESS**: https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39571450948 . Quét lịch sử secret, dependency audit, lint, unit, build, typecheck và production smoke đều đạt.
- Amplify app **d12mghkvifkghp**, Sydney **ap-southeast-2**, Deployment **7 Deployed / SUCCEED**, commit link khớp bcff32e. Console ghi tổng 2 phút 28 giây, build 2 phút 18 giây, deploy 9 giây.
- Lightsail **han-ngu-lab-api** tại Sydney đã fast-forward từ 099c26e lên đúng bcff32e, systemd `han-ngu-lab-api` **active**, tracked tree sạch. Node 24.22.0; chỉ bind loopback3001 qua Caddy. Không thay SMTP env/IAM/SES hoặc reset SQLite.
- VM chưa có GitHub SSH authentication; dùng Git bundle qua SSH hiện có, pin ED25519 đã đối chiếu Console, kiểm SHA256 **5feaa31cc5b0fb93bac0bbbbd95c15249b0063d6c56924cd6311ca292cc2abbe**, HEAD và prerequisite 099c26e trước fast-forward. Không tạo token/key/access mới hoặc tắt host verification.

## Học liệu và media đang truy cập công khai

| Loại | Số lượng đã kiểm qua production |
| --- | --- |
| Bài học | 16, gồm 80 câu luyện tập; đáp án/lời giải kín không nằm trong API công khai |
| Mục từ vựng canonical | 94 mục theo inventory source |
| Âm đọc bộ A | 145 mục, 290 MP3 normal/slow |
| Podcast | 7 tập, 14 MP3 voice/mix, 43 đoạn phụ đề Hán/Pinyin/Việt |

- D-052: Public Beta (Unreviewed). D-053: chủ dự án xác nhận tất cả quyền đã kiểm tra trước đó, yêu cầu không kiểm tra lại. Không tiếp tục chặn phát hành vì bản quyền.
- Nhãn **Bản thử nghiệm — Chưa duyệt** hiển thị ở website/thư viện podcast/từng tập/CMS. `humanReviewed:false`, `review:unreviewed`; không tự tạo duyệt chuyên môn hoặc quảng cáo hoàn chỉnh HSK4.
- Giữ nguyên giọng A Kokoro `zf_001`, nhạc piano và âm lượng bản đã chốt. Không tái tổng hợp, tách nhạc, pitch hoặc đổi nhạc. Cả **290 MP3 âm đọc và 14 MP3 podcast tải qua website thật có SHA256 khớp file gốc**; podcast Range trả206.
- Trình duyệt production: mở bài đầu, phát 你 rồi trở về nút nghe bình thường, không báo lỗi. Podcast mix phát thật, `readyState:4`, `paused:false`, thời gian tăng tới19giây và54giây, duration87.060375, errornull; đã dừng sau kiểm tra. Phụ đề ba ngôn ngữ hiển thị. Đây là kiểm tra vận chuyển/phát, không phải nghiệm thu phát âm chuyên môn.
- Bằng chứng máy: `.local/production-recovery/production-verification.json`, `production-beta-podcast.png`; không đưa dữ liệu private vào Git.

## CMS và bảo toàn dữ liệu

- Bài học và từng media có phiên bản riêng. 152 media item/152 revision ban đầu (145 âm +7 podcast), 16 lesson/16 revision beta. Sửa tạo draft, gửi duyệt, người khác duyệt, xuất bản; có thu hồi và khôi phục phiên bản cũ. Beta khôi phục vẫn chưa duyệt. Có audit và trình nghe chỉ dành cho staff để rà soát nội dung đã thu hồi.
- Import chạy lại không tạo trùng, không ghi đè xuất bản độc lập và không tự hồi nội dung Admin đã thu hồi. Dry-run trên VM sau deploy: newLessons0/newRevisions0/betaPointers0.
- Đã so fingerprint đầy đủ users/sessions/tokens/consent/attempts/progress/SRS/deletion_requests với **DB giải mã từ backup trước triển khai**: khớp hoàn toàn. Vẫn 3 tài khoản/1 session/2 tokens/3 consent, progress/attempts0 như trước; không migrate DB local có fixture vào production.
- Media schema là hai bảng thêm tương thích v1; không drop/downgrade bảng người học. Backup JSON quản trị hỗ trợ media/beta và vẫn đọc được backup cũ; restore chỉ vào DB trống. Full backup vận hành giữ cả phiên/token.
- **Production hiện 3 tài khoản đều là learner: 1 verified, 2 chưa verified; chưa có Admin.** Đã hỏi chủ dự án chọn tài khoản cấp Admin; chưa có câu trả lời, chưa tự nâng quyền hoặc sửa tài khoản. API/CMS đã triển khai và kiểm thử bằng tài khoản synthetic riêng; nghiệm thu đăng nhập CMS bằng Admin thật chờ chỉ định.
- Thu hồi âm đọc chặn tra cứu/phát mới trong ứng dụng (manifest cache tối đa60giây). Các MP3 bài học ở đường dẫn tĩnh đã công khai không bị xóa khi thu hồi; bản đã tải không thể gọi lại. Không coi thu hồi CMS là khóa bảo mật đường dẫn tĩnh. Podcast công khai bị chặn theo publication pointer.
- Hướng dẫn: `docs/PUBLIC_BETA_OPERATIONS.md`.

## Backup đã nghiệm thu thực tế

- Backup online SQLite gồm WAL, AES-256-GCM, key riêng root600, archive root-private. Mỗi lần backup đều giải mã file đã lưu sang DB riêng, kiểm integrity/FK/inventory; không ghi đè production.
- Backup trước deploy: `20261021T084631Z-0475998d.sqlite.enc`. Backup sau deploy bằng **systemd service thực**: `20261021T084739Z-aff7a9ef.sqlite.enc`, SHA256 **e1bf4576f60beaab1c2fb6ac85cb857c468dcd753a0cc42a1a4e09b0e9431177**. Inventory16lessons/16revisions/152media_items/152media_revisions/3users khớp.
- `han-ngu-lab-backup.timer` **enabled/active**. Lịch03:15UTC, random≤30phút; lần kế được systemd ghi **22/10/2026 03:25:43UTC**. Chạy thử service `Result=success`, `ExecMainStatus=0`; retention14ngày.
- Mã backup JS root-owned trong `/usr/local/lib/han-ngu-lab-backup`, root timer không import ubuntu-owned npm packages. Key `/etc/han-ngu-lab/backup.key` tách khỏi `/var/backups/han-ngu-lab`.
- Đã copy cả bản trước và sau phát hành ra Windows ngoài AWS: `.local/production-recovery/offsite/archives`; key ở `offsite/keys`, ACL chỉ currentuser+SYSTEM. **Giải mã từ bản offsite sau deploy sang SQLite riêng, integrity/FK/inventory khớp**, xóa plaintext tạm; key/bản DB không in ra chat/log/Git. Đã bỏ key trung chuyển VM, giữ key gốc.
- **Đồng bộ offsite hiện thủ công, chưa chạy tự động hằng ngày.** Timer hằng ngày là bản trong VM; không coi cùng đĩa là offsite. Cần lấy bản mới sau thay đổi quan trọng và trước hết hạn Free Plan; giữ Git/media cùng backup/key để chuyển nền tảng.

## Kiểm thử

- Local: **47/47 unit/integration/CLI**, **18/18 E2E desktop/mobile** (âm đọc thật, podcast, caption/seek/switch/rate/preferences/errors/theme, media CMS edit/submit), lint/typecheck/build/production smoke đều đạt. DB synthetic, không DB học viên.
- CI trên Ubuntu cũng đạt toàn bộ checks. Gitleaks staged0finding; CI history scan đạt. Dependency audit production0vulnerability. Bash `-n` đạt; script deploy đã chạy thật thành công.
- HTTP production: health/catalog/16lesson/audioManifest/podcast200; 290+14files SHA khớp; podcast206Range; anonymous me/admin media/admin users401, privatepaths404. API root404 là bình thường; frontendroot200.
- Đăng ký/resend/verify/login/reset được unit/integration test với transport giả lập; không tuyên bố đã nghiệm thu mailbox thật trong lượt này hoặc gửi được đến mọi Gmail khi SES còn Sandbox.

## SES và những phần còn chờ

- SES Sydney **Sandbox/Healthy**, quota200email24h/1emailgiây; identity emailVerified. Feedback forwardingEnabled, suppressionBounceandcomplaintsEnabled,0entries; không tạo SNS/resources mới.
- Console Getsetup báo **Domain verification needed / No domain identities found**, nút **Request production access disabled**. Chưa nộp yêu cầu, chưa mua domain/nâng gói để vượt chặn. `docs/SES_PRODUCTION_REQUEST.md` chứa dự thảo transactional và điều kiện nghiệm thu feedback. Gmail người nhận chưa verified tiếp tục bị SES chặn.
- Caddy/Express chỉ tin hop loopback gần nhất; unit test header giả và rate limiting đạt. **Chưa nghiệm thu phân biệt IP của nhiều client thật qua chuỗi Amplify→Caddy**; không tin tất cả proxy hoặc header tự khai để giả vờ đã sửa.
- Ubuntu hiện báo26updates/restartrequired (đã thay đổi từ kiểm tra95updates trước đó do bảo trì ngoài phiên). Không tự majorupgrade/reboot.
- DNS `sslip.io` là phụ thuộc thử nghiệm; chưa có domain riêng do chủ dự án quản lý. Không tạo thêm resource/trả phí/nâng plan.

## Ngân sách đã đọc từ AWS

- Billing amountdue **0 USD**, estimatedmonth-to-date **2.16USD**; remainingcredit finalized200USD, estimated **197.84USD**. FreePlan còn176ngày, đến **13/04/2027**; creditexpiry **13/10/2027** là mốc khác. Số ước tính không phải hóa đơn cuối cùng.
- Lightsail2GB dual-stack giá công khai khoảng12USD/tháng (72USD/6tháng), chưa gồm Amplify/SES/transfer/thuế. Không bảo đảm tải không giới hạn hoặc chi phí bằng0; không tự nâng gói. Duy trì backup và chuyển nền tảng trước hết FreePlan.
- Nguồn giá chính thức đã dùng: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bundles.html ; https://aws.amazon.com/amplify/pricing/ .

## Lỗi đã gặp và khắc phục

- VM GitHub SSH Permissiondenied: dừng an toàn, dùng bundle đã xác minh với SSH có sẵn; không đổi lịch sử/auth.
- Backup trích xuất vào temp bị CJS/top-level-await: thêm packageESM; regressiontest chạy ngoài repo đạt. Windowsloader cần fileURL; test dùng pathToFileURL.
- Deploy health probe nhận response rỗng ở2lượt ngay khi service khởi động, retry sau đó đạt; không phải lỗi dữ liệu. Service/timer sau deploy đã kiểm độc lập.
- Rehearsal cleanup lần đầu còn SQLite WAL/SHM khiến rmdirENOTEMPTY sau fingerprint đã đạt: dọn đúng các sidecar của file temp do mình tạo, chạy lại thành công. Không recursive delete hoặc xóa production WAL.
- Playwright JSONimport thiếu attribute: fixture đọc bằngfs+schema; E2E chạy lại18/18. Không tắt kiểm tra để đạt kết quả.

Báo cáo cuối và cấu hình kiểm thử cách ly được đồng bộ Git trong commit bàn giao kế tiếp; mã chức năng đã nghiệm thu làbcff32e. Cấu hình mới cũng chạy CMS desktop/mobile2/2 đạt, lint/typecheck đạt; không sửa runtime hoặc media. Chưa đánh dấu toàn dự án hoàn tất: chờ chỉ địnhAdmin, SES production, đồng bộ offsite tự động, proxyclientIP thực và duyệt chuyên môn/mở rộng học liệu.
