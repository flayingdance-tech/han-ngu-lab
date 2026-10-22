# Giao diện pastel và lo-fi

## UI-07 — làm rõ yêu cầu dark

- Chủ dự án xác nhận chỉ bỏ trẻ chibi ở dark, giữ nữ lo-fi và giữ nguyên chế độ sáng.
- Dark hero khôi phục `public/images/study-night.webp` gốc. `study-night-room.webp` không còn dùng làm hero; giữ lại như bản thử trước.
- Không tạo/chỉnh ảnh hoặc đổi style light trong mốc này. Các rule ẩn page-mascot/sidebar-companion của trẻ ở dark vẫn áp dụng.
- Mục UI-06 bên dưới là lịch sử đã được điều chỉnh bởi quyết định D-023.

## UI-06 — dark không có chibi

- Theo yêu cầu mới nhất, dark ẩn toàn bộ page-mascot/sidebar-companion và bỏ cột trống trong header; light vẫn có chibi.
- Hero tối dùng `public/images/study-night-room.webp` (1536×1024, 160.374 byte), góc học đêm không người/động vật. ImageGen tích hợp sửa từ `public/images/study-night.webp`; bản cũ được giữ làm nguồn.
- Prompt chỉnh ảnh: Edit the supplied lo-fi study room illustration. Remove the girl completely, including face, body, hands, hair and all human features; remove the cat completely too. Reconstruct the naturally visible empty chair, wooden desk and open blank notebook where they were. Retain the exact cozy midnight-indigo and amber study room, round moonlit window, distant Chinese mountains and pagoda, cherry blossoms, warm desk lamp, books, tea and stationery. Keep the left 45 percent calm dark empty wall as negative space for website text. A quiet empty study corner with absolutely NO people, NO animals, NO characters, NO chibi, NO faces anywhere. No text, no letters, no watermark. Preserve wide composition and soft lo-fi lighting.

## UI-04 — tỉ lệ và ảnh sát bản tham khảo

- Mẫu lưu bền tại `docs/references/ui-design-collage.png` (821×461). Tệp D: gốc đã không còn tại lần kiểm tra; không coi collage là bộ asset nguồn độ phân giải cao.
- ImageGen tích hợp dùng chính collage làm reference; sáu asset `public/images/reference-{home,roadmap,vocab,review,progress,landscape}.webp`. Prompt đầy đủ trong `REFERENCE_UI_PROMPTS.json`.
- Đây là minh họa tái dựng theo mẫu, không phải tuyên bố trùng pixel hoặc có lại ảnh gốc tách lớp.
- Home: banner gần 3:1 và ba thẻ bài nằm ngang; bỏ các khối phụ trên home. Tiến độ/SRS vẫn truy cập ở tab tương ứng.
- Header các tab gọn, cảnh núi/chùa/hoa anh đào, cô bé sách/mèo ở Sổ từ; Ôn tập có cảnh riêng dưới tiêu đề. Chế độ tối giữ nền lo-fi.
- Tiến độ có lịch tháng, đổi tháng và biểu đồ lượt làm bài bảy ngày, chỉ dùng dữ liệu thực của người học; không suy diễn thời gian học khi chưa có bộ đếm.
- Chữ Hán, Pinyin, hội thoại và bài tập giữ thang cỡ chữ lớn đã xác minh ở UI-02.
- Asset web tổng 513.060 byte (~501 KiB); home/landscape 1536×512, roadmap 640×640, vocab 640×236, review 800×376, progress 640×427; WebP q88, các nhân vật giữ alpha. Bản sửa quầng nền thử thêm không được chọn vì bản đầu hiển thị phù hợp trong trang.

## 2026-10-18 — chibi riêng cho bốn tab

- Chủ dự án yêu cầu nhân vật trẻ mũm mĩm theo ảnh collage mới; minh họa không thay đổi đối tượng 18+ của website.
- Tạo mới bằng ImageGen tích hợp, nền trong suốt; prompt đầy đủ trong `CHIBI_PROMPTS.json`.
- `public/images/chibi-roadmap.webp`: bé khám phá, ba lô và cuộn bản đồ.
- `public/images/chibi-review.webp`: bé đeo tai nghe, ôm sách.
- `public/images/chibi-vocab.webp`: bé học thẻ từ cùng sách và mèo.
- `public/images/chibi-progress.webp`: bé ăn mừng tiến bộ với sao vàng.
- Header có hai cột desktop, chuyển thành chữ trên/ảnh dưới trên mobile; cùng asset alpha trên nền pastel hoặc nền tối có ánh đèn ấm.
- Bốn PNG nguồn 1280×1280 có alpha; asset web 640×640, WebP quality 88/alphaQuality 100. Tổng 414.076 byte (khoảng 404 KiB), không tải cả bốn vào một header.
- Không có chữ/đáp án được nhúng vào ảnh, không có dữ liệu học viên trong prompt.

2026-10-18, Asia/Bangkok. Yêu cầu trực tiếp: thiết kế theo ảnh tham khảo do chủ dự án cung cấp, tăng chữ Trung và thêm chế độ tối.

- Tham khảo: `D:\Bảng giao diện Hán Ngữ Lab pastel đáng yêu.png`.
- Tạo minh họa mới bằng công cụ ImageGen tích hợp; không gọi API trả phí trong ứng dụng.
- `public/images/study-day.webp`: pastel đào, hoa anh đào, nhân vật học tập và mèo.
- `public/images/study-night.webp`: góc học ban đêm, tai nghe, sách, đèn vàng và mèo.
- Ảnh nguồn 1536×1024; chuyển WebP quality 88 bằng sharp, giữ kích thước. Tổng khoảng 343 KiB.
- Chỉ trang trí, không dùng ảnh để chứa nội dung bài học/đáp án. Chữ vẫn là HTML có thể chọn và phóng lớn.
- Theme lưu ở localStorage `hnl-theme`; lần đầu theo hệ điều hành. Nút Sáng/Tối ở header.
- Chữ từ vựng 48–58px, ví dụ 25–26px, hội thoại 28–30px, Pinyin 19px; chữ Hán xen văn bản tăng 1.4 lần.

## Prompt ảnh sáng

Create a polished wide landscape 3:2 illustration asset for a Vietnamese Chinese-learning website. Pastel peach, warm ivory, blush cherry blossoms and cinnabar red accents, soft watercolor scenery with distant Chinese mountains and small pagoda. On the RIGHT half an adorable expressive chibi young adult female student in red Chinese-inspired outfit, twin hair buns, happily holding two blank ivory flashcards, a small sleepy cream cat and books. Left 45 percent is very pale peach airy negative space for HTML headline. Delicate petals, premium warm soft 3D storybook render, like cute learning stationery, cohesive composition not a collage, no border. Absolutely no lettering, no text, no logos, no UI. Original artwork. Designed to crop to a website hero banner.

## Prompt ảnh tối

Wide landscape 3:2 original illustration for the dark theme of a Chinese-learning website. Cozy lo-fi study nook at night, sophisticated storybook/anime illustration with soft dimensional lighting, palette midnight indigo, muted plum, warm amber lamplight and coral details. RIGHT side: adorable young adult student with twin hair buns and over-ear headphones studying a blank open notebook at a wooden desk, a sleepy cream cat, stacked books, tea, warm desk lamp. Behind the student a round window looks out onto moonlit mountains, a distant Chinese pagoda and cherry blossom branches. LEFT 45 percent mostly calm dark indigo wall and subtle window glow, very low detail negative space for accessible HTML headline. No words, no letters, no logos, no UI, no borders. Peaceful inviting focus atmosphere, visually rich but calm, premium quality. Horizontal website hero asset.

## CLEAN-01 — 22/10/2026

Đã xóa public/images/study-night-room.webp theo yêu cầu dọn bản thử không dùng. Không có CSS/runtime tham chiếu file này; giữ đủ12ảnh hiện hành, bao gồm study-night.webp và toàn bộ chibi/light. Các mục UI-06/UI-07 phía trên là lịch sử; ảnh thử cũ có thể lấy từ Git nếu cần.
