# Hán Ngữ Lab — Trạng thái dự án

## REC-07 DONE — staged single-Lightsail đã nghiệm thu — 2026-10-21T21:32:21.4202324+07:00

- Owner đã duyệt D-057; runtime e25d6c5/CI39613379221SUCCESS/Amplify10SUCCEED. Canonical website/API **https://54-253-61-113.sslip.io/**, hostname chỉtạm; frontendpublicrelease riêng/CaddyTCPpeeronly/Expressloopback. APP_ORIGINcanonicalduynhất, stagingoriginđãbỏ; envnonorigin/SMTPbytekhớpsnapshot. Không thay .next/framework/IAM/SES/DBschema/media.
- Staged trước khi chuyển: Windows/AWShai mạngthật táchkey, headergiảkhôngđổi; login/cookieSecureHttpOnlyStrict/CSRF/CMS16bài152media; SES verify/reset đếnmailboxthậtcanonical/token1lần/sessionrevoke; progress/idempotency/sessionpersistqua restart. Local lint/typecheck51tests/build/smokeđạt; khônglặpbộtest khichỉviếtbiênbản.
- Cutover302Amplifyroot→canonical; APIcũ302fixedretirement410khôngforwardExpress; originAmplifywrite403. Browseroldemail#resetmởformcanonical/#verifygiảđếnverifiercanonical, fragmentđượcconsume/xóa khỏiURL. Khônglogtoken/IP/emailthô.
- Đãdiễntập fullrollbackAWSrules+servercode/env/Caddyfallback21:28, oldsite200/newhost302back, linkresetnewhostvẫnmởformAmplify; SQLitekhôngrestore, originalrows14bảngnguyên. Sửahealthretry/ERRinheritance, Caddyfilepermission600→install644, timerstopidempotent; controllerlỗitimerđãrollbackcảAWS/server. Tái cutoverthànhcông21:29.
- NghiệmthumulticlientSAUtáicutover21:30: Windowsaed763b3d05c63b3fb0c96d1/AWSf5fc598bfbe134d303713784 khác nhau; mỗinguồnthường/forgedcùngkey; actualRateLimitpkcũngtách, mộtXFF. Probeđãgỡ/unitstop, CloudFrontCIDRtimerdisabledkhôngcầnchoingresstrực tiếp.
- Production304MP3SHAmatchgốc/14podcastRange206/cặpaudioRange206;16bài80câu145âmA7podcast43captions; browsermixready4/errornull/time13,79s. Giọng/nhạc/ngườihọcnguyên; synthetic1accounttestđãdisabled/trảlearner/revokesessions-tokens/audit, giữattempt/progresschínhfixture. ChưaduyệtchuyênmônkhôngcamkếtđủHSK4.
- Backupmới20261021T142037Z-2fff33b7.sqlite.enc SHA82a5c4fde0b591f84c1ace70e43252b1ca5a0c479e97c9a4a4549a71393a0d5a; offsitecopy/decrypt/integrity/FK/inventoryđạt21:20. VMdailybackupactive/WindowsSchedulerhiệncó. SESGRANTED/Sendingtrue; SMTPdiagnosticcanonicalaccepted.
- Runbookbằngchứng/rollback: docs/REC07_DIRECT_INGRESS_RESULT.md; privateartifacts .local/production-recovery/rec07. Khôngnewpaidresources/domain/upgrade. Rủirocònlại: sslip.iotạm, singleVM, RAMlimiterresetkhi restart, NATchung, trafficcostcầntheodõi; khôngphảiblockerREC07.
- Đangchuẩnbịcommitdocs/runbookcuối→Privatepush→CI/Amplify→VMFFops-only, khôngrestart/import/testlặp. Lượtsauthựchiệntừcheckpointnày, khôngdùngtrạngtháichờduyệtcũ. .codegraphowneruntrackedgiữnguyên.

## REC-07 — chờ phê duyệt thay đổi đường phục vụ — 2026-10-21T20:43:31.9102473+07:00

- Yêu cầu mới mục9–10 giới hạn tự chủ: không đổi kiến trúc khi chưa duyệt; nếu rewrite không có giải pháp an toàn thì báo phương án nhỏ nhất và dừng trước thực hiện. Chưa thay mã/runtime/config/cloud, chưa push/deploy trong lượt này.
- Đọc CodeGraph app/auth-mail/nextconfig; đối chiếu SSH actual Caddy/HEAD1fab4bb/servicesactive với bằng chứng HMAC Windows+VM trước. Ranh giới hỏng ở external-rewrite proxy peer ngoài CloudFront origin trust, không phải Express hop0. Bucket sai/gộp và đổi giữa request; không nhận forgedXFF đã lấy được IP tùy chọn.
- AWS CustomRule schema không có origin auth/signing field; customHeaders chỉ response. Static export không có runtime relay. Tài liệu Amplify managedSSR chỉ công bố tớiNext15, repoNext16.4.2; không tự chuyển SSR hoặc downgrade để thử production.
- Phương án đề nghị nhỏ nhất: frontend tĩnh+API same-origin trên Caddy/Lightsail/HTTPS hostname hiện có, không thêmAWSresource; giữAmplify rollback. Cần owner chấp thuận đổiURLchính, đăngnhậplại do cookiekhácdomain, APP_ORIGIN/redirectemailcũ và trafficfrontendtrênVM. Chưa cấu hình hoặc cutover.
- Chi tiết xác thực nguồn IP, bảo vệ email/account, nghiệm thu hai mạng sau sửa và rollback không đèDB: docs/REC07_CLIENT_IP_DECISION.md. Phương án giữ URLAmplify cần authenticated server relay lớn hơn và xác minh tương thích riêng, chưa cam kết hoạt động.
- Readonlyproduction20:40 (+07): healthtrue/16bài/7podcast; Caddy/API/backup/rangetimeractive. Không chạmDB/SMTP/SES/media/CMS/backups, không mở endpointprobe. Không chạy lại bộtest cũ hoặc tuyên bố đã nghiệm thu mới.
- REC-07 IN_PROGRESS, phụ thuộc quyết định origin/kiến trúc của chủ dự án; chưaDONE. Lượt sau chỉ triển khai phương án được chấp thuận; giữ toàn bộ thay đổi hồ sơ local chưapush, .codegraph owneruntracked nguyên.

## REC-08 — đồng bộ hoàn tất — 2026-10-21T20:15:27.5757022+07:00

- Commit **1fab4bb6c02920a75bfc3ec136f210caf30fdf71** đã Private main, remote SHA khớp; fetch/ancestor an toàn, không merge/force. amplify.yml baseDirectory:.next giữ nguyên. Staged và48commit reachable Gitleaks0finding.
- GitHub Actions **39602877223 SUCCESS**, https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39602877223 . Amplify Sydney **Deployment9 SUCCEED** đúngSHA. Không chạy lại bộ test đã đạt theo yêu cầu đẩy nhanh tiến độ; chỉ kiểm CI/deploy và health/catalog sau triển khai.
- VM be8→1fab FF bằng bundleSHA256 **1f51dd1d1b86a9478365e1323754e3adaa2c0c5480fe2bb54d66b526da3fd8f8**, prerequisite/HEAD/clean/whitelist kiểm trước; installed root exporter/range refresher SHA khớp sourceGit. Không npmci/restartAPI/import/DB/media. Caddy/API/2timer active.
- Production20:14 (+07): frontend200, healthliveOK,16bài/7podcast. Trước đồng bộ14podcast MP3 SHA+Range206 đã đạt; không lặp tải lại. Local typecheck/lint49tests/build/smoke và CI đạt.
- **SES Production đãGRANTED; offsite tự động đã chạy/restore thật; Admin được owner xác nhận. REC-07 vẫn IN_PROGRESS:** Amplify rewrite peer không có danh tính origin đã xác minh, không có IP thật an toàn từ header hiện có. Cần authenticated relay/ingress và nghiệm thu riêng, không trust mọiAWS. Không coi nângCaddy đã giải quyết điểm này. Không thay routing/API bằng kiến trúc mới chưa nghiệm thu trong mốc này.
- AWS CLI temporarylogin đã logout/xóa cachedlogin profile, không thêm quyền/IAM. Không mua/nâng plan/tạo paidresources/đổiSMTP. Không có việc deploy/test/probe đang chạy.
- Kết quả cuối này lưu local trong hồ sơ bàn giao, không push thêm chỉ để kích hoạt lại build biên bản. .codegraph owner giữ nguyên untracked. Bước tiếp theo chỉ REC-07 (relay có xác thực), sau đó đánh giá lại production readiness; học liệu beta vẫn chưa duyệt chuyên môn.

## REC-05–07 — sản xuất, SES và offsite — 2026-10-21T19:49:43.3598763+07:00

- Chủ dự án xác nhận CMS Admin login thật hoạt động; REC-03B DONE theo xác nhận owner. Không cần reset mật khẩu hoặc nâng thêm quyền.
- SES Sydney: chính thức nộp SESv2 put-account-details qua AWS CLI phiên tạm quyền hiện có; PENDING rồi **GRANTED / ProductionAccessEnabled:true** lúc19:44 (+07). Suppression BOUNCE+COMPLAINT, feedback forwarding; simulator DSN/complaint đã nhận đúng mailbox. Adapter SMTP thật trên Lightsail gửi verify/reset tới success simulator đều accepted587/STARTTLS, không DB/token thật. Không mua domain/nâng gói/thêm IAM/SNS.
- REC-06 DONE: root exporter encrypted-only + Windows Scheduled Task HanNguLab-OffsiteBackup11:00/+AtLogOn, ACL user+SYSTEM, pin SSH, SHA/decrypt/integrity/FK/inventory. Scheduler chạy thực LastTaskResult0/status19:34 (+07); key tách riêng. PC phải bật/login/Internet; không bảo đảm24/7. VM daily backup giữ nguyên.
- REC-07 IN_PROGRESS: nâng Caddy2.11.7 official+SHA pin, rollback giữ binary/config/cert. Strict trust chỉ87 CloudFront origin CIDR, daily refresh/fail-closed7ngày. Probe2nguồn thật phát hiện Amplify external rewrite có peer trung gian ngoài dải CloudFront; bucket vẫn proxy nên có thể gộp user hoặc đổi bucket giữa request. Direct header giả không đổi IP. Không trust toàn AWS, không nhận đã sửa hoàn toàn; cần authenticated relay/ingress được triển khai và nghiệm thu. Probe đã gỡ và stop.
- Local npm run check PASS (typecheck/lint/49tests/build), smoke:production PASS; tests không chạm DB thật. Lượt đầu typecheck thiếu declaration choMJS; bổ sung d.mts, fullcheck lại đạt, không tắt kiểm tra.
- Production19:48 (+07): healthliveOK,16bài/7podcast; tải14MP3 podcast SHA khớp và Range206 đủ14; anonymousAdmin401. Không tái render, không đổi giọng/nhạc/giáo trình/dữ liệu/SMTP. amplify.yml .next nguyên trạng.
- Runbook docs/PRODUCTION_OPS_RECOVERY.md và SES_PRODUCTION_REQUEST.md; logs riêng .local/production-recovery/production-ops-*. Trạng thái trước mốc này là lịch sử, kết quả SES/Admin/offsite ở đây thay thế các mục còn ghi chờ.
- Đang chuẩn bị staged secret scan → safe Private main push theo D-051 → CI/Amplify → FF bundle vào VM chỉ ops/docs/test; không npmci/restartAPI/import/DB. .codegraph untracked giữ nguyên. IP và chuyên môn học liệu chưa hoàn tất.

Chủ dự án yêu cầu gửi lại mật khẩu quaemail. Hệ thống chỉlưubăm nênkhôngđọclạimậtkhẩucũ; đãthôngbáogửiliênkếtđặtlại. ĐãxácđịnhduynhấtverifiedactiveAdmin trongDB, khônginemail/ID/password/token; POST vàoAPIproductionhiệnhữu /api/auth/forgot bằngorigin/clientheaderschuẩn, khôngbỏcooldown/rate/CSRF. Request lúc2026-10-21T10:19:56.915Z trả200/accepted, retryAfter60s, linkhiệulực30phút. APIproductiontrảgeneric200khôngphảibằngchứngSMTP/mailbox; kiểmjournalchỉlọcmã Auth email delivery failed, chưa thấy lỗi tại lầnđọcđầu. Khôngresetthayowner/mintsession/đổicode/env/SMTP/SES; ownerđặtpasswordmớiqualiênkết.
## REC-03 / D-054 — cấp Admin production — 2026-10-21T16:46:42.3677431+07:00

Chủ dự án trả lời “Chấp nhận” cho việc cấp Admin cho tài khoản duy nhất đã xác minh email. Đã chạy CLI scripts/admin.ts hiện có trên Lightsail sau backup mới20261021T094403Z-4625f35d (restore/integrity đạt). Kiểm lại đúng1verifiedactive/rolelearner trước thay đổi, cấp roleadmin (khôngsuper_admin), revoke1sessioncũ, audittargetrolegrant. Không đổi mật khẩu hoặc các fielduserkhác; mọi bảngtoken/consent/học liệu/tiến độ/media và sessionngườikháckhớpfingerprint. DBintegrityok/serviceactive/healthliveok. Không mintsession/testđăngnhậpthayowner, khôngđọc/inemail/password/token.
Sau đổi quyền: backupjobthậtResultsuccess/exit0,20261021T094532Z-412981bf.sqlite.enc SHA256ea63570400aee6199899972baef830be5dabfe74c3c4edba9e8a0bf259dedb0a, users3/sessions0/audit2/lessons16/media152; bảnmãhóacopyWindowsngoàiAWS/keygiữnguyênriêng, decryptrestore/inventoryđạt. Cần ownerđăngnhậplạibằngpasswordhiệncóđểthấyQuảntrịnộidung; khôngresetpassword. ChưanghiệmthuUI bằng phiên thật củaowner.
Khôngsửa runtime/source/media/SMTP/AWSresources hoặcpushGit; mãbe8ebd8/CI39573514798/Amplify8giữnguyên. Kếtquảvậnhànhlưulocal. Khôngcòntácvụgrant/backupchạy. SES/offsiteauto/proxyclientIP/humanreviewcònnhưreport.
## Hoàn tất đồng bộ bàn giao — 2026-10-21T16:05:25.7546632+07:00

Commitcuối be8ebd8c1fd7bc501d1da66866652a5695f80931 đã Private main, CI39573514798 SUCCESS (https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39573514798), AmplifyDeployment8 SUCCEED đúngSHA (2phút25giây), VMmainFFbcff→be8/clean/serviceactive/timeractive. Chỉ8filedocs/testconfig thayđổi, khôngrestart/import/DB/audio. Runtimevàmedia đã nghiệmthutrênbcffgiữnguyên. RunnercáchlyCMS2/2 đạt thêm, khôngcộngthành20testkhácnhau. Report/docsbàngiaođãcótrênPrivateGit; checkpointkếtquảcuốinàylưulocalđểkhôngkíchnhịpbuildbiênbảnlặpvòng.
KhôngcònCI/build/deploy/testđangchạy. User chưa trảlờicâuhỏichọnAdmin; khôngtựgánquyền. SES vẫnSandbox/requestdisabled, offsiteauto/proxyđaIP/humanreviewcònnhưreport. .codegraphgiữnguyênuntracked.
## Bàn giao kiểm thử và biên bản — 2026-10-21T15:59:40.4751564+07:00

- Production chức năng đã nghiệmthu bcff32e/CI39571450948/Amplify7/backendactive nhưcheckpointdưới. Bổ sung playwright.recovery.config.ts để táchDB test; CMS2/2 mới đạt/lint/typecheckđạt, mặc định khôngchạyfixturemediaCMS nếu thiếucờcáchly. Khôngthayruntime/media/env/DB.
- Đồngbộ PRODUCTION_FINAL_REPORT và hồsơ côngviệc lênPrivateGit trongcommitbàngiao. ChờCI/AmplifycủacommitbàngiaorồiFFcheckoutVMchỉdocs/testconfig; khôngrestartservice hoặcimportDBvì runtimekhôngđổi. Bước sau chỉcấpAdminkhiownerchỉđịnh; SES/proxyIP/offsiteauto cònnhưreport.
## REC-01/REC-02 — kết quả production — 2026-10-21T15:56:49.3261710+07:00

- D-052/D-053 đã áp dụng:16bài/80câu/145âmA290MP3/7podcast14MP3/43caption publicbeta, nhãn chính xác Bản thử nghiệm — Chưa duyệt. Quyền doownerxácnhận, không kiểm tra lại; giọng/nhạc SHA giữ nguyên, không cam kết đủHSK4/humanreview.
- Codebcff32e465291f5508cb7ec424a89a8e4a0dc7af đã push Private main, CI39571450948 SUCCESS, AmplifyDeployment7 SUCCEED đúngSHA, LightsailFF099→bcffserviceactive. Khôngforce/reset/SMTPenv/IAM/SESwrite. .nextgiữnguyên. Gitbundlesha5feaa31c...khớpVM/ancestry.
- HTTPproduction kiểm đủ16lesson/80câu,290audio+14podcast SHAkhớp/Range206,43captions, publickhônganswer, me/admin401/privatepaths404. Browserproductionphát你bìnhthường, podcastmixreadyState4/time54s/errornull, đãpause. Screenshot .local/production-recovery/production-beta-podcast.png. Sourcechecks47unit/18E2E/lint/typecheck/build/smoke/audit/Gitleaks đềuđạt.
- Protectedusertables fingerprintkhớpDBbackuptrướcdeploy: users3/sessions1/tokens2/consent3/progress0. Timerbackup enabled/active, jobthậtResultsuccess0; backupafterdeploy20261021T084739Z-aff7a9ef.sqlite.enc sha e1bf4576f60beaab1c2fb6ac85cb857c468dcd753a0cc42a1a4e09b0e9431177. OffsiteWindowsACLprivate/keyseparate/actualdecryptrestoreinventorykhớp16lessons+152media; chỉoffsitecopythủcông, chưatựđồngbộhằngngày.
- CMSkỹthuậtđãcó review/edit/approve/withdraw/rollback+previewstaff152media/beta lessons, revisionimmutable, independentreview. Production3tài khoảnđềulearner(1verified2unverified), chưacóAdmin. Đã hỏiownerchọn tài khoản nângAdmin, khôngtựchọn/đổirole. ChờtrảlờimớigrantquaexistingCLI+backup/audit/revokesession, khôngcầnpassword/token.
- SES cònSandbox, requestdisabled/domainverificationneeded; khôngmua/nânggói/tạoresources. ChưanghiệmthuđaIPclientthậtquaAmplify→Caddy; khôngtrustheadergiả. Ubuntu26updates/restartrequired chưareboot. Billingdue0/estimatedused2.16/credit197.84/FreePlan13Apr2027/creditexpiry13Oct2027.
- Bàn giao PRODUCTION_FINAL_REPORT.md và docs/PUBLIC_BETA_OPERATIONS.md. Kếtquảcuốilưu workspace chưa push riêng để tránhauto-deploychỉbiênbản. Còn .codegraph củaowneruntrackedgiữnguyên. Không cònCI/build/deployrunning. LầnsauthựchiệnownerAdminreplytrước, rồiSES/offsiteauto/proxyIP/humanreviewtheophạmvi/quyền; khôngrenderđổiaudio.
## REC-01 / D-052–D-053 — 2026-10-21T15:42:51.5752606+07:00

- Chủ dự án chốt Public Beta và xác nhận toàn bộ quyền đã kiểm tra: phát hành16bài/145âmA/7podcast, nguyên giọng/nhạc. Nhãn Bản thử nghiệm — Chưa duyệt, không cam kết đủHSK4/humanreview.
- MediaCMS152mục + revision immutable, independentreview, protectedpreview, withdraw/rollback; lessonbeta tương tự. Rerunimport không tự hồi nội dung đã thu hồi; JSONbackup hỗ trợ media và beta.
- Unit47/47, E2E18/18 desktop/mobile(audio/podcast/captions/CMS), lint/typecheck/build/smoke/audit0/Bashsyntax đạt. Chưa tuyên bố rolloutbeta xong; bước kế là stagedsecret→pushPrivate→CI/Amplify→GitbundleSSH→freshbackup/import/timer→HTTP/mediahash/playback production.
- Productionencryptedbackup đã restore thật và copy ngoàiAWS tớiWindowsACLprivate, keyseparate, offsite decrypt/integrity/inventory khớp3users/1session/2tokens/3consent. VM vẫn099c26eactive. SES cònSandbox/requestdisabled; không mua/domain/upgrade. Xem PUBLIC_BETA_OPERATIONS và PRODUCTION_FINAL_REPORT.
## PUB-03 / D-050 — hoàn tất push và frontend deploy — 2026-10-21T10:29:41.6985611+07:00

- Commit phát hành099c26e07cc07778607af4b06798698001b033a0 đã push lên flayingdance-tech/han-ngu-lab Private main, remoteSHA khớp. Fetch origin/main=e12d719 là ancestor, không merge/force/rewrite. amplify.yml baseDirectory:.next khớp nguyên remote. Gitleaks allreachable exit0, không track credentialCSV/populatedenv/DB/key, chỉ .env.example.
- GitHub Actions39538587917 SUCCESS đúng099c26e: secrets/dependency audit/lint/unit39/build/typecheck/smoke đều đạt. https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39538587917.
- AWS Amplify Sydney appd12mghkvifkghp/main Deployment4 Deployed / SUCCEED cho đúng099c26e (Console authenticated đọc chỉ, không redeploy/config write). Build2phút4giây, deploy22giây; UI duration còn cập nhật nên không dùng làm chuẩn SLA. https://main.d12mghkvifkghp.amplifyapp.com.
- Chưa cập nhật backend Lightsail, SMTP env, IAM/SES, hoặc DB. Hướng dẫn docs/AUTH_EMAIL_RECOVERY.md: backup DB đúng quy trình, git pull --ff-only, đối chiếuSHA, cửa sổ bảo trì npmci/checks và restart đúng systemdservice, giữDATABASE_PATH/env. Kiểm IP thật Caddy/CDN, chỉ nhậnrecipient SESsandboxđãVerified cho đến AWSproductionaccess.
- Kết quả/checkpoint này lưu local chưacommit/push để giữSHApháthành và tránh thêm auto-deploy biên bản. .codegraph untracked giữ nguyên. Không còn CI/build/deploy cần chờ. Bằng chứng .local/pre-github-audit/github-push-verification.json và auth-publication-result.json.
## MAIL-02 / D-049 — bản sửa cục bộ đã hoàn tất — 2026-10-21T10:21:14.3269697+07:00

- CodeGraph dùng trước để đọc AuthPanel/client/app/email và quan hệ callers. AuthPanel có resend/cooldown, giữ email và xử lý429/503; API generic register201/resend-forgot200 kể cả SMTP lỗi, bảo toàn tài khoản/password cũ. Kiểm tra credentials đúng mới báo login chưa verified.
- Cooldown60giây/5yêu cầu mỗi giờ theo hash email dùng chung ba endpoint, kể cả địa chỉ không tồn tại; auth/API IP limits giữ20/15phút và180/phút. Gửi tối đa20tác vụ RAM, tuần tự1.1giây; chỉ log mã cố định. SIGTERM drain trước đóng DB; không durable outbox/multi-replica limits.
- Express chỉ trust hop0 ở127.0.0.1/::1/IPv4-mapped127.0.0.1; API chỉ bind loopback. Test headergiả không né limiter, haiIP thật không gộp, không ERR_ERL_UNEXPECTED_X_FORWARDED_FOR. Caddyfile/chain Amplify→Caddy thực chưa đối chiếu, cần nghiệm thu IP trước rollout; không trust tất cả CDN.
- Đã đọc SES Sydney Console: Sandbox/Healthy/200email24h/1emailgiây. Chưa gửi thử hoặc thaycloud/IAM/quota. Gmail người nhận chưa verified vẫn bị chặn cho đến khi AWS cấp production access.
- Lint/full và lint2test mới exit0; unit39/39; E2E6/6 desktop/mobile; typecheck/build/smoke exit0; stagedGitleaks0finding. E2E lượt đầu4/6 do test đòi nút quay lại trong khi app đã chuyển login; sửa test, full rerun6/6, không sửa app để né test. E2E dùng SQLite synthetic riêng, unit DBmemory; không xóa/reset/chạm DB học viên.
- Giữ amplify.yml baseDirectory:.next nguyên remote; frontendbuild không render lại media. Source/report/runbook docs/AUTH_EMAIL_RECOVERY.md và docs/reports/auth-email-recovery.json. Chưa push/deploy/backend email thật; chỉ sau xác nhận mới push. .codegraph untracked của chủ dự án giữ nguyên, không stage. Không còn test/build cần chờ.
## PUB-02 / D-048 — kết quả hoàn tất — 2026-10-21T00:43:30.9812594+07:00

- Push an toàn master:main lên flayingdance-tech/han-ngu-lab Private thành công. Commit cuối e12d719b76bf373d7f0418a4f19c5836833d1d5b; merge9a2acec giữ57f3a3b và remote1b23772, không force/xóa/rewrite/conflict. amplify.yml khớp nguyên remote baseDirectory:.next.
- GitHub Actions39468035970 SUCCESS cho đúng e12d719: secrets/dependencies/lint/test31/build/typecheck/production smoke đều đạt. URL https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39468035970. Retest local sau merge cũng đạt; private/remoteSHA đã xác minh.
- Sau khi chủ dự án tự đăng nhập AWS Console, đọc Amplify Sydney app d12mghkvifkghp/main: Deployment3 cho đúng e12d719 đã Deployed / SUCCEED, build2phút16giây, deploy9giây, tổng2phút26giây. Domain https://main.d12mghkvifkghp.amplifyapp.com . Chỉ đọc Console, không nhấn redeploy/chỉnh config/tạo resources.
- Chưa triển khai backend Lightsail, chưa đưa SMTP credentials lên server, chưa gửi thử email thật, không sửa database. Hosting frontend thành công không xác nhận luồng SMTP/backend thật hoạt động.
- Bản ghi kết quả này lưu cục bộ chưa commit/push để giữ commit phát hành e12d719 và tránh kích hoạt thêm build chỉ cho biên bản. Không còn CI/deploy cần chờ. Bằng chứng máy .local/pre-github-audit/github-push-verification.json; screenshot/AX Console xác nhận Deployed. Lượt sau không push các checkpoint kết quả trước khi có phạm vi mới phù hợp.
## D-048 — push SES đã được phê duyệt — 2026-10-21T00:39:38.5050715+07:00

- Chủ dự án xác nhận push57f3a3b lên Private main; yêu cầu fetch/merge an toàn, giữ nguyên amplify.yml baseDirectory:.next từ GitHub, không force/xóa; dừng nếu conflict hoặc cần sửa cấu hình Amplify. Chỉ theo dõi auto-deploy nếu được kích hoạt, không deploy Lightsail/SMTP credentials/DB/tài nguyên AWS.
- Fetch origin/main nhận1b23772 (chỉ amplify.yml out→.next). Merge9a2acec giữ hai parent57f3a3b và1b23772, không conflict; git diff origin/main -- amplify.yml rỗng. Lần merge đầu thiếu identity nên chưa thực hiện; lặp với identity Codex cục bộ theo lệnh thành công, không đổi global config.
- Sau merge: lint/test31/31/build/typecheck/smoke exit0. Logs .local/pre-github-audit/ses-merge-*.log. Gitleaks toàn lịch sử reachable exit0; không track populated env/credentialCSV/privateDB/key. next-env sinh tự động đã về nội dung trước build. Không chạm UI/media/DB.
- Đang push commit checkpoint kế tiếp sau xác minh Private và remote chưa đổi, rồi chờ CI. AWS CLI không có trong PATH; GitHub chưa có Amplify check/deployment; Console mở tới màn đăng nhập. Đã yêu cầu chủ dự án tự đăng nhập riêng để đọc Amplify, không yêu cầu secret trong chat. Không khẳng định auto-deploy đã kích hoạt/thành công.
## MAIL-01 / D-047 — 2026-10-21T00:35:12.4760766+07:00

- Tích hợp cục bộ hoàn tất: Nodemailer10.1.7 runtime, SMTP Sydney587 requireTLS/certificate validation; biến SMTP_USERNAME/SMTP_PASSWORD/SMTP_FROM_EMAIL chỉ server. Production cấu hình sai chặn trước mở DB; preview không gửi thư.
- server/email.ts, server/index.ts, server/app.ts: verify/reset và API resend-verification, giữ token30phút/1lần, CSRF/giới hạn auth; lỗi SMTP503 đã bỏ nguyên nhân thô. Không đổi UI/giáo trình/audio/podcast/DB học viên.
- Lint exit0; test31/31 (6email); typecheck/build/smoke exit0; production audit0vulnerabilities; stagedGitleaks exit0. Báo cáo docs/reports/ses-smtp-integration.json. Typecheck lỗi lần đầu do Next khai báo ProcessEnv.NODE_ENV bắt buộc; đã dùng input Record<string,string|undefined> và chạy lại đạt. next-env build sinh lại đã trả về nội dung trước build.
- Runbook docs/SES_SMTP_LIGHTSAIL.md hướng dẫn Git pull --ff-only, env root600, systemd/Node24, DB đúng đường và kiểm gửi thật. Không cloud/credential/gửi thật, không push; phải chờ chủ dự án xác nhận trước push. SES sandbox/SMTP auth/HTTPS/Lightsail chưa kiểm chứng thực tế.
## GitHub Private đã xuất bản — 2026-10-20T16:29:50.6317986+07:00

- D-046/PUB-01: chủ dự án xác nhận; origin đúng flayingdance-tech/han-ngu-lab Private, nhánh main. Đã push97e562f8e663384313c03d9530f8c3af7b0897c2 cùng lịch sử, không force/xóa/rewrite; SHA GitHub khớp.
- Actions39400869176 success toàn bộ kiểm tra. URL https://github.com/flayingdance-tech/han-ngu-lab/actions/runs/39400869176. Nhánh local master theo dõi origin/main.
- Checkpoint tài liệu sẽ push riêng rồi xác minh CI mới. Không AWS/Public; .local/database/media riêng vẫn giữ local theo ignore, không phải bản backup cloud toàn dự án. Các mục chờ xác nhận push ở checkpoint cũ đã bị D-046 thay thế.

# Trạng thái hiện tại — đọc đầu tiên khi tiếp tục

Checkpoint: 2026-10-20T15:47:30.7933947+07:00, Asia/Bangkok (+07). Workspace D:\Hán Ngữ Lab.

Mốc triển khai đổi tên: f42e345. Các kiểm tra và sao lưu D-043 đã hoàn tất.

Mốc audit/safe fixes:9200c03; quét secret sau commit đạt, web200/API preview còn hoạt động.

## Hiện hành: PUB-01/D-045 — chờ xác nhận push GitHub

- GCM xác thực GitHub account flayingdance-tech; repo https://github.com/flayingdance-tech/han-ngu-lab đã tồn tại, Private và chưa có commit, default main, có quyền push. Chưa cấu hình remote/chưa push; không tạo thêm repo.
- Đã đọc audit, final secrets scan đạt và local source sạch trước checkpoint. Chỉ sau câu xác nhận trực tiếp mới được push master:main (không force), xác minh Private và kiểm Actions. Không AWS; không yêu cầu password/token qua chat.

## DEP-01/D-044 — pre-GitHub audit đã hoàn tất (trạng thái tại thời điểm audit)

- Đọc PRE_GITHUB_AUDIT.md, docs/DEPLOYMENT.md và docs/reports/pre-github-security.json trước publish. Private GitHub: source có thể chuẩn bị với WARNING dev advisories; full production AWS: FAIL vì thiếu email adapter/API HTTPS/DB persistent/proxy và đường podcast production. Chưa remote/push/deploy/AWS Console.
- Gitleaks history/candidate đã rà2false-positive công khai/fixture, không credential thật; không private DB/env/key bị track. Full npm audit5high dev (braces chưa có patched release), production0. Không force downgrade framework.
- Sửa token link dùng fragment + xử lý hashchange trong trang, no-referrer, HTTPS origin,413, runtime tsx và chặn mở schema DB mới hơn. Unit25/25, auth-browser1/1 (không chạy lại responsive/content/media), typecheck/lint/build/smoke composition/test email và runtime-only npm ci đạt.
- Thêm amplify.yml static WEB/out, customHttp.yml headers, CI chỉ validate/pin SHA/checksum, README/env/ignore; chưa chạy CI Linux/cloud. Không có render/ASR/E2E/build còn chạy. Tài khoản/DB thật không dùng cho test; media/học liệu/thiết kế giữ nguyên; chỉ sửa phần code bảo mật và cấu hình triển khai.

## Podcast Hán Ngữ Lab theo D-041/D-042/D-043

- POD-06 DONE kỹ thuật local: toàn bộ7tập/14MP3 hiện hành dùng tên Hán Ngữ Lab / 汉语实验室 trong lời mở và lời kết; đã tạo lại14đoạn chứa tên. Nguồn/43đoạn phụ đề/Pinyin/nghĩa Việt đồng bộ, không còn tên cũ trong content/app/lib/server.
- Cùng giọngA Kokoro zf_001, model/speaker SHA pinned, tốc độ/EQ như trước; không đổi pitch/formant. 29đoạn khác sao chép nguyên PCM từ baseline, audit độc lập so từng đoạn đạt.
- Toàn bộ nền piano v8 giữ nguyên PCM/âm lượng/nhịp/cao độ/điểm nối/thời lượng87.060s. SHA bbcd3e0f2d936b8cc6ce5d4597a4dd44cff130a4fb5e6612179439028548878b; residual mix<1e-7 trên7tập. Không đổi nhạc để vừa lời mới.
- Nguồn content/podcast-radio.json tham chiếu base WAV/report mới trong .local/podcasts/brand-lab; sourceVoice/sourceReport khớp script. Mẫu v9 gốc và baseline trước đổi chỉ dùng đối chiếu, không ghi đè tên mới.
- Tên cũ còn trong mẫu/cache/backup lịch sử, không được catalog phục vụ. URL MP3 cũ404, mới206; API bỏ production/profile. Không xóa lịch sử để làm mất khả năng khôi phục.
- UI giữ chữ Hán lớn/Pinyin/nghĩa Việt, highlight và tự cuộn theo đoạn, bấm để nghe lại, ẩn nghĩa Việt, seek/tốc độ/nhạc riêng/yêu thích/resume/lặp. ID tập và lịch sử nghe không đổi. Sáng giữ pastel; tối các tab khác giữ nữ lo-fi/ẩn chibi.
- Ngày phát thanh19–25/10/2026,7chủ đề soạn sẵn; chưa tự sinh vô hạn. Nội dung vẫn unreviewed; nhạc owner-supplied/owner-provided-unverified, chưa xác minh phát hành công khai. Local preview phát được; live API còn chặn draft.

## Kiểm tra và sao lưu D-043

- Typecheck/lint/unit22/22/E2E10/10 desktop-mobile/cả hai theme/build đều đạt. Lần cuối typecheck và lint phần thay đổi cũng exit0; next-env đã về .next/dev/types. Logs .local/podcasts/brand-*.log.
- 14MP3 qua decode/peak/LUFS/hash QA; audit source giọng/nền và29đoạn PCM đạt. docs/reports/podcast-radio-integrity.json; .local/podcasts/brand-update.json.
- ASR trên7mix mới nhận tên mới2lần/tập, không tên cũ trong cửa sổ lời đọc, không flag thiếu nội dung. Coverage đoạn thấp nhất.878; còn nhầm chữ và bịa câu trên outro nhạc. Report buộc SHA của mix hiện hành; không dùng ASR làm phụ đề hay duyệt thanh điệu/cảm xúc.
- Bộ bài học145mục/290MP3 không có tên cũ trong nguồn;290SHA giữ nguyên, export290file khớp/privateLeaks0. Inventory active304file và danh mục media toàn workspace (bỏ runtime/model/vendor) tại docs/reports/audio-brand-audit.json. Không tuyên bố đã nghe/ASR mọi file lịch sử.
- Backup/restore70file SHA khớp: .local/podcast-backups/2026-10-20T01-48-01.028Z và .local/podcast-restore-check/2026-10-20T01-48-01.028Z. Gồm nguồn mới/preset/renderer, baseline WAV, base/report mới, catalog/14MP3, ASR/QA/runbook. Cùng máy; không offsite/model/runtime/DB đầy đủ.
- Bản trước đổi tên backup/restore39file tại2026-10-20T01-33-08.816Z. Không xóa tài nguyên cũ.

## Vận hành và tiếp tục

- Web http://localhost:3000/, API3001; root200/catalog7/Range206, URL âm cũ404, không lộ production/profile. Chưa triển khai Internet.
- API launcher10644/web11608; listener con có thể đổi, kiểm port/PID trước restart. Logs subtitles-api.log/.err và subtitles-web.log/.err; không dump stdout auth/email mô phỏng.
- Không còn render/ASR/test/build cần chờ. Không chạy lại rebrand hoặc renderer hội thoại/lo-fi cũ khi không có yêu cầu nguồn mới. Chỉ sửa phụ đề: đọc PODCAST_RUNBOOK và dùng script metadata.
- Giữ .local/hanngulab.sqlite, tài khoản/tiến độ. .codegraph/ không có, không tự index.

## Phạm vi dự án còn lại

- D-028 giọngA145mục/290MP3 thường-chậm, file offline, không browser TTS/API trả phí. AUDIO-07/POD-02 còn duyệt chuyên môn/CMS publication/quyền phát hành; không quay lại OmniVoice.
- 16bài draft/94word IDs/80câu hỏi/39ví dụ chưa đủ HSK4 và chưa duyệt. Còn CMS CSV/media/audit/users và kiểm tra vận hành phù hợp; không quảng cáo hoàn thành giáo trình.
- Cloud/email/HTTPS, backup ngoài máy/AWS và migration toàn bộ chưa hoàn tất. Ngân sách150USD/6tháng gồm credit, không chi thêm; thông tin AWS chưa kiểm Console. Website miễn phí18+, AI tùy chọn; chưa hoàn thành toàn dự án.

## REC-01 checkpoint — 2026-10-21T11:45:13.1883341+07:00
Production read-only: users3/lessons0/revisions0; serviceubuntu /usr/bin/node24.22 loopback3001. New importer/backup/release scripts, pending owner beta and piano rights (no reply). Unit43/43, lint/typecheck/Bash syntax passed; E2E isolated running session54278; new live beta test to run. No prod writes/push. Report PRODUCTION_FINAL_REPORT.md created. Next: finish tests/build/secrets, commit safe changes, CI/Amplify, backup and draft-only import unless owner enables beta.

## REC-01 trước push — 2026-10-21T11:56:08.3842217+07:00
Unit45/45; E2E26pass+2focus outdated lastbutton fixed and rerun2/2pass; lint/typecheck/build/smoke passed; production audit0 and historyGitleaks0. Scriptdeploy preflight backup restoreverified+draft importer+daily timer+code rollback prepared, Bash -n passed. AWSBilling due0/free176days13Apr2027/estimatedcredit197.84used2.16; SESfeedbackEnabled/suppressionBounceComplaintsEnabled, Requestproductiondisabled Domainverificationneeded. Pendingownerbeta/music, noreply; only draft import permitted. Next stagedsecretscan/privatecheck/pushCI and deploy. No prodDBchanges yet.

## REC-01 rollout — 2026-10-21T11:59:42.4440660+07:00
Push60c713e03db605948d23925df1e9d4f9aa2c94f7 Private main; CI39546789335 SUCCESS allsteps; AmplifyDeployment5 Deployed and commitlink exact60c713e. BrowserSSH invoked reviewed deploy script from exact GitSHA after CI. Waiting server result: do not assume backup/import/timer done. Policy remains pendingfalse, no media release. Next read terminal and validate users3/lessons16draft/no publication, backup timer, HTTP.

REC-07 APPROVED / D-057 2026-10-21T21:02:27.2328209+07:00 : Owner phê duyệt staged single-Lightsail, chỉcutoversau verification, giữAmplifyrollback, trustTCPonly, test2networks+forged+auth/CMS/content/SES/persistence; oldAPIkhôngbypass; rollbackconfigkhôngSQLite; khôngpaidresources. Đang staging exact2origin, loginemailhashguard10/15min, Caddypublicbuild riêng. Local check51tests/lint/typecheck/build vàsmoke đạt; chưadeploy/cutover.
