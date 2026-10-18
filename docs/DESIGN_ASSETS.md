# Giao diện pastel và lo-fi

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
