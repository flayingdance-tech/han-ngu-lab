# Hán Ngữ Lab — bắt đầu từ đây

Cập nhật22/10/2026, Asia/Bangkok(+07). Tệp này đủ để mở chat mới mà không cần chép lịch sử chat cũ.

- Workspace: D:\Hán Ngữ Lab. Đọc AGENTS.md; nguồn và dữ liệu đang có phải được bảo toàn.
- Website: https://hanngulab.duckdns.org/ . sslip.io và Amplify cũ chuyển302; APIcũ tới410, không proxy Express.
- Hosting: Lightsail54.253.61.113, Caddy2.11.7, Node24, Express127.0.0.1:3001. Không tin headerIP tùy ý; REC07 đã nghiệm thu2mạng trước/saucutover.
- GitHub: flayingdance-tech/han-ngu-lab Private, main. Local master theo dõi origin/main; giữ amplify.yml baseDirectory:.next. eb18b32 là commit phát hành/bàn giao trước dọn; CI39627082548 SUCCESS. Commit dọn cục bộ, nếu có, chưa push.
- Frontend đang phục vụ từ /srv/han-ngu-lab/current, release3b39c11; giữ release cũ cho rollback. Không sửa trực tiếp release bất biến.
- API repo /home/ubuntu/han-ngu-lab; database /var/lib/han-ngu-lab/hanngulab.sqlite; env /etc/han-ngu-lab/api.env. Không đọc/in/chuyển secrets vào chat hoặc Git.
- SES Sydney production đã cấp; SMTP587 STARTTLS. APP_ORIGIN DuckDNS duy nhất. Login/CMS/verify/reset đã nghiệm thu; không chỉnh IAM/SMTP nếu không có yêu cầu mới.
- Nội dung đang beta, chưa duyệt:16bài/80câu,145mục âm A/290MP3,7podcast/14MP3/43đoạn phụ đề. Không tuyên bố hoàn chỉnhHSK4.
- Giọng A Kokoro zf_001 offline; piano do chủ dự án chọn. Không đổi pitch/formant/nhạc. Nguồn podcast content/podcast-radio.json, sourceVoice/sourceReport trong .local/podcasts/brand-lab; nền .local/podcasts/music/radio-piano-bed.wav. Giữ baseline/PCM cần cho QA.
- Media phát hành: public/audio và media/podcasts. Local catalog .local/podcasts/rendered vẫn cần cho preview/prepare-release.
- Backup: Lightsail timer hiện có; offsite mã hóa trong .local/production-recovery/offsite, khóa riêng và WindowsScheduledTask đã cấu hình. Không xóa keys/config/archives. PC cần bật/login/Internet.
- Rollback domain: docs/DOMAIN_MIGRATION.md; root snapshot /var/backups/han-ngu-lab-ops/domain-duck-20261021. Chỉ rollback cấu hình/static, tuyệt đối không restore DB cũ lên dữ liệu hiện tại.
- CLEAN-01: đã dọn6,47GiB local và30,53MiB file tạm server.304MP3/12ảnh/nguồn/SQLite nguyên SHA;365file backup đạt; podcast:check và production health/catalog/Range đạt.
- Cache .next/out/test outputs đã xóa; được tạo lại khi cần build/test. Không coi thiếu cache là lỗi nguồn. Không chạy render/build chỉ để tái tạo file vừa dọn.
- Model clone/MOSS, mẫu giọng/nhạc cũ và cache snapshot dư đã xóa theo yêu cầu. Quy trình giọng A/radio/ASR hiện hành được giữ; thao tác clone lịch sử không còn đủ model sẵn và không thuộc luồng hiện hành.
- Một số script triển khai cũ và thư mục trống vẫn giữ vì bộ duyệt tự động chặn dọn bổ sung. Xem docs/CLEANUP_2026-10-22.md; không tự vượt chặn.
- Chi tiết công việc: PROJECT_STATUS.md, NEXT_STEPS.md, TASKS.md, DECISIONS.md, WORK_LOG.md trong docs/.
- Phần tiếp theo ngoài cleanup: duyệt chuyên môn học liệu, hoàn thiện giáo trình, theo dõi ngân sách/backup/DNS. Không mua dịch vụ/nâng gói/tạo tài nguyên trả phí nếu chưa được duyệt.
