// HSK2–4 beta bundle derived from the owner's OCR-authored Quyển 2–4 companions. PDF/OCR originals stay private.
import { lessonSchema, type Lesson } from '../lib/domain';

export const hsk234BookLessons: Lesson[] = lessonSchema.array().parse([
  {
    "id": "hanngu-q2-b16",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 16",
    "title": "Bạn có thường đến thư viện không",
    "subtitle": "我常去图书馆。",
    "minutes": 30,
    "order": 1,
    "objectives": [
      "Dùng mẫu “我常去图书馆。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Tần suất đứng trước hoạt động / Mốc thời gian giúp câu có bối cảnh.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn có thường đến thư viện không. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Tần suất đứng trước hoạt động.",
    "vocabulary": [
      {
        "id": "hnl-lex-1327244f99508ba4",
        "hanzi": "常",
        "pinyin": "cháng",
        "meaning": "thường",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-37893489faa814e0",
        "hanzi": "常常",
        "pinyin": "cháng cháng",
        "meaning": "thường xuyên",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-34fbbd9042b5ba1a",
        "hanzi": "图书馆",
        "pinyin": "tú shū guǎn",
        "meaning": "thư viện",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-56aaa73cf1dc301f",
        "hanzi": "时候",
        "pinyin": "shí hou",
        "meaning": "lúc",
        "example": "我有时候去。",
        "examplePinyin": "wǒ yǒu shí hòu qù。",
        "exampleMeaning": "Tôi đôi khi đến đó."
      },
      {
        "id": "hnl-lex-dba5f85a50293066",
        "hanzi": "上网",
        "pinyin": "shàng wǎng",
        "meaning": "lên mạng",
        "example": "我不常上网。",
        "examplePinyin": "wǒ bù cháng shàng wǎng。",
        "exampleMeaning": "Tôi không thường lên mạng."
      },
      {
        "id": "hnl-lex-6261c71cf0345555",
        "hanzi": "晚上",
        "pinyin": "wǎn shàng",
        "meaning": "buổi tối",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-698138ca21b36795",
        "hanzi": "有时候",
        "pinyin": "yǒu shí hòu",
        "meaning": "đôi khi",
        "example": "我有时候去。",
        "examplePinyin": "wǒ yǒu shí hòu qù。",
        "exampleMeaning": "Tôi đôi khi đến đó."
      },
      {
        "id": "hnl-lex-588667c5c78e2464",
        "hanzi": "总是",
        "pinyin": "zǒng shì",
        "meaning": "luôn luôn",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-6ae30b8883aee983",
        "hanzi": "书",
        "pinyin": "shū",
        "meaning": "sách",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-817658562e56c68b",
        "hanzi": "看",
        "pinyin": "kàn",
        "meaning": "xem/đọc",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-6c8c005fb78ac44c",
        "hanzi": "上午",
        "pinyin": "shàng wǔ",
        "meaning": "buổi sáng",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-b0681797eeb0e9cb",
        "hanzi": "周末",
        "pinyin": "zhōu mò",
        "meaning": "cuối tuần",
        "example": "周末我们一起去吧。",
        "examplePinyin": "zhōu mò wǒ men yì qǐ qù ba。",
        "exampleMeaning": "Cuối tuần chúng ta cùng đi nhé."
      }
    ],
    "grammar": [
      {
        "title": "Tần suất đứng trước hoạt động",
        "explanation": "我常去图书馆 nói một thói quen, không khẳng định lần nào cũng đi. Chọn 常/有时候/总是 theo điều thực sự muốn diễn đạt; đừng dùng chúng như từ trang trí có thể đổi tùy ý.",
        "example": "我常去图书馆。",
        "translation": "Tôi thường đến thư viện."
      },
      {
        "title": "Mốc thời gian giúp câu có bối cảnh",
        "explanation": "晚上我看书 và 我晚上看书 đều có thể đặt bối cảnh buổi tối trong mẫu đang luyện. Với phủ định thói quen, đọc rõ 不常, khác ý thường xuyên làm một việc không tốt.",
        "example": "我不常上网。",
        "translation": "Tôi không thường lên mạng."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你常去图书馆吗？",
        "pinyin": "nǐ cháng qù tú shū guǎn ma？",
        "meaning": "Bạn có thường đến thư viện không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我常去。你呢？",
        "pinyin": "wǒ cháng qù。 nǐ ne？",
        "meaning": "Tôi thường đi. Còn bạn?"
      },
      {
        "speaker": "An",
        "hanzi": "我有时候去。",
        "pinyin": "wǒ yǒu shí hòu qù。",
        "meaning": "Tôi đôi khi đến đó."
      },
      {
        "speaker": "Minh",
        "hanzi": "周末我们一起去吧。",
        "pinyin": "zhōu mò wǒ men yì qǐ qù ba。",
        "meaning": "Cuối tuần chúng ta cùng đi nhé."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào nói “Tôi không thường lên mạng”?",
        "options": [
          "我常不上网。",
          "我上网不常是。",
          "我不常上网。"
        ],
        "answer": "我不常上网。",
        "explanation": "不常 phủ định mức độ thường xuyên.",
        "id": "hanngu-q2-b16-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "常去",
          "图书馆",
          "我"
        ],
        "answer": "我常去图书馆",
        "explanation": "Câu hoàn chỉnh: 我常去图书馆。 我常去图书馆 nói một thói quen, không khẳng định lần nào cũng đi. Chọn 常/有时候/总是 theo điều thực sự muốn diễn đạt; đừng dùng chúng như từ trang trí có thể đổi tùy ý.",
        "id": "hanngu-q2-b16-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “周末” có nghĩa nào?",
        "options": [
          "cuối tuần",
          "lúc",
          "thường",
          "lên mạng"
        ],
        "answer": "cuối tuần",
        "explanation": "周末 (zhōu mò): cuối tuần. Ví dụ: 周末我们一起去吧。 — Cuối tuần chúng ta cùng đi nhé.",
        "id": "hanngu-q2-b16-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “上网” có nghĩa nào?",
        "options": [
          "luôn luôn",
          "thường xuyên",
          "lên mạng",
          "đôi khi"
        ],
        "answer": "lên mạng",
        "explanation": "上网 (shàng wǎng): lên mạng. Ví dụ: 我不常上网。 — Tôi không thường lên mạng.",
        "id": "hanngu-q2-b16-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “看” có nghĩa nào?",
        "options": [
          "thường",
          "buổi tối",
          "đôi khi",
          "xem/đọc"
        ],
        "answer": "xem/đọc",
        "explanation": "看 (kàn): xem/đọc. Ví dụ: 我常常上午看书，晚上听音乐。 — Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối.",
        "id": "hanngu-q2-b16-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “有时候” có nghĩa nào?",
        "options": [
          "đôi khi",
          "xem/đọc",
          "lên mạng",
          "buổi tối"
        ],
        "answer": "đôi khi",
        "explanation": "有时候 (yǒu shí hòu): đôi khi. Ví dụ: 我有时候去。 — Tôi đôi khi đến đó.",
        "id": "hanngu-q2-b16-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “sách” (shū). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "书",
        "alternatives": [],
        "explanation": "书 (shū) nghĩa là sách. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b16-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “luôn luôn” (zǒng shì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "总是",
        "alternatives": [],
        "explanation": "总是 (zǒng shì) nghĩa là luôn luôn. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b16-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn có thường đến thư viện không”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Mốc thời gian giúp câu có bối cảnh”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 16, mốc PDF 3. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b17",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 17",
    "title": "Bạn ấy đang làm gì",
    "subtitle": "他正在听音乐。",
    "minutes": 30,
    "order": 2,
    "objectives": [
      "Dùng mẫu “他正在听音乐。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 正在 + động từ: việc đang diễn ra / Đáp đúng việc người khác đang hỏi.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn ấy đang làm gì. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 正在 + động từ: việc đang diễn ra.",
    "vocabulary": [
      {
        "id": "hnl-lex-615497c73e38ba08",
        "hanzi": "正在",
        "pinyin": "zhèng zài",
        "meaning": "đang",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-cd60562748487cc6",
        "hanzi": "正",
        "pinyin": "zhèng",
        "meaning": "đang",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-3a7dfd85db7e5142",
        "hanzi": "呢",
        "pinyin": "ne",
        "meaning": "trợ từ trong ngữ cảnh",
        "example": "你在做什么呢？",
        "examplePinyin": "nǐ zài zuò shén me ne？",
        "exampleMeaning": "Bạn đang làm gì vậy?"
      },
      {
        "id": "hnl-lex-bbe2badb5ede2d7f",
        "hanzi": "做",
        "pinyin": "zuò",
        "meaning": "làm",
        "example": "你在做什么呢？",
        "examplePinyin": "nǐ zài zuò shén me ne？",
        "exampleMeaning": "Bạn đang làm gì vậy?"
      },
      {
        "id": "hnl-lex-5ac447f36bacb3cf",
        "hanzi": "听音乐",
        "pinyin": "tīng yīn yuè",
        "meaning": "nghe nhạc",
        "example": "他正在听音乐。",
        "examplePinyin": "tā zhèng zài tīng yīn yuè。",
        "exampleMeaning": "Bạn ấy đang nghe nhạc."
      },
      {
        "id": "hnl-lex-2d4f3c449350d2e2",
        "hanzi": "电视",
        "pinyin": "diàn shì",
        "meaning": "ti vi",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      },
      {
        "id": "hnl-lex-662633229569baeb",
        "hanzi": "录音",
        "pinyin": "lù yīn",
        "meaning": "bản ghi âm",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-445f7a90a1848e63",
        "hanzi": "教",
        "pinyin": "jiāo",
        "meaning": "dạy",
        "example": "老师在教室里。",
        "examplePinyin": "lǎo shī zài jiào shì lǐ。",
        "exampleMeaning": "Giáo viên ở trong phòng học."
      },
      {
        "id": "hnl-lex-510d48de49b27e4d",
        "hanzi": "问题",
        "pinyin": "wèn tí",
        "meaning": "vấn đề/câu hỏi",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-2d999cb3647d3280",
        "hanzi": "回答",
        "pinyin": "huí dá",
        "meaning": "trả lời",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-9986bfd8b3226c1b",
        "hanzi": "复习",
        "pinyin": "fù xí",
        "meaning": "ôn tập",
        "example": "我在复习。",
        "examplePinyin": "wǒ zài fù xí。",
        "exampleMeaning": "Tôi đang ôn bài."
      },
      {
        "id": "hnl-lex-8ed8446b7ea0617c",
        "hanzi": "准备",
        "pinyin": "zhǔn bèi",
        "meaning": "chuẩn bị",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      }
    ],
    "grammar": [
      {
        "title": "正在 + động từ: việc đang diễn ra",
        "explanation": "Hãy dùng 正在 khi muốn nhấn vào hành động đang diễn ra ở thời điểm được nói đến. Không phải câu tiếng Việt nào có “đang” cũng cần nhồi đủ 正在 và 呢; trong bài chỉ luyện một mẫu rõ ràng trước.",
        "example": "他正在听音乐。",
        "translation": "Bạn ấy đang nghe nhạc."
      },
      {
        "title": "Đáp đúng việc người khác đang hỏi",
        "explanation": "你在做什么呢 hỏi hoạt động. Trả lời 我在复习 rồi thêm đối tượng nếu cần. Không dùng 是 để nối trực tiếp với động từ trong mẫu này.",
        "example": "我在复习汉语。",
        "translation": "Tôi đang ôn tiếng Trung."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你在做什么呢？",
        "pinyin": "nǐ zài zuò shén me ne？",
        "meaning": "Bạn đang làm gì vậy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我在复习。",
        "pinyin": "wǒ zài fù xí。",
        "meaning": "Tôi đang ôn bài."
      },
      {
        "speaker": "An",
        "hanzi": "他呢？",
        "pinyin": "tā ne？",
        "meaning": "Còn bạn ấy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "他正在听录音。",
        "pinyin": "tā zhèng zài tīng lù yīn。",
        "meaning": "Bạn ấy đang nghe bản ghi âm."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu mô tả hành động đang xảy ra.",
        "options": [
          "她电视正在。",
          "她正在看电视。",
          "她是看电视。"
        ],
        "answer": "她正在看电视。",
        "explanation": "正在 đứng trước hoạt động 看电视.",
        "id": "hanngu-q2-b17-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "正在",
          "听音乐",
          "他"
        ],
        "answer": "他正在听音乐",
        "explanation": "Câu hoàn chỉnh: 他正在听音乐。 Hãy dùng 正在 khi muốn nhấn vào hành động đang diễn ra ở thời điểm được nói đến. Không phải câu tiếng Việt nào có “đang” cũng cần nhồi đủ 正在 và 呢; trong bài chỉ luyện một mẫu rõ ràng trước.",
        "id": "hanngu-q2-b17-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “做” có nghĩa nào?",
        "options": [
          "bản ghi âm",
          "chuẩn bị",
          "trả lời",
          "làm"
        ],
        "answer": "làm",
        "explanation": "做 (zuò): làm. Ví dụ: 你在做什么呢？ — Bạn đang làm gì vậy?",
        "id": "hanngu-q2-b17-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “呢” có nghĩa nào?",
        "options": [
          "ti vi",
          "dạy",
          "nghe nhạc",
          "trợ từ trong ngữ cảnh"
        ],
        "answer": "trợ từ trong ngữ cảnh",
        "explanation": "呢 (ne): trợ từ trong ngữ cảnh. Ví dụ: 你在做什么呢？ — Bạn đang làm gì vậy?",
        "id": "hanngu-q2-b17-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “问题” có nghĩa nào?",
        "options": [
          "làm",
          "dạy",
          "nghe nhạc",
          "vấn đề/câu hỏi"
        ],
        "answer": "vấn đề/câu hỏi",
        "explanation": "问题 (wèn tí): vấn đề/câu hỏi. Ví dụ: 他总是认真回答问题。 — Bạn ấy luôn trả lời câu hỏi nghiêm túc.",
        "id": "hanngu-q2-b17-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “正在” có nghĩa nào?",
        "options": [
          "đang",
          "chuẩn bị",
          "bản ghi âm",
          "nghe nhạc"
        ],
        "answer": "đang",
        "explanation": "正在 (zhèng zài): đang. Ví dụ: 他正在听录音。 — Bạn ấy đang nghe bản ghi âm.",
        "id": "hanngu-q2-b17-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bản ghi âm” (lù yīn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "录音",
        "alternatives": [],
        "explanation": "录音 (lù yīn) nghĩa là bản ghi âm. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b17-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ôn tập” (fù xí). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "复习",
        "alternatives": [],
        "explanation": "复习 (fù xí) nghĩa là ôn tập. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b17-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn ấy đang làm gì”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Đáp đúng việc người khác đang hỏi”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 17, mốc PDF 16. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b18",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 18",
    "title": "Đến bưu điện để gửi bưu phẩm",
    "subtitle": "我去邮局寄包裹。",
    "minutes": 30,
    "order": 3,
    "objectives": [
      "Dùng mẫu “我去邮局寄包裹。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Hai hoạt động: đi đâu để làm gì / 帮 + người + việc và 顺便.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: đến bưu điện để gửi bưu phẩm. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Hai hoạt động: đi đâu để làm gì.",
    "vocabulary": [
      {
        "id": "hnl-lex-37e5d74ac37e8f93",
        "hanzi": "包裹",
        "pinyin": "bāo guǒ",
        "meaning": "bưu phẩm",
        "example": "我去邮局寄包裹。",
        "examplePinyin": "wǒ qù yóu jú jì bāo guǒ。",
        "exampleMeaning": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "id": "hnl-lex-ddb7c4648be06705",
        "hanzi": "寄",
        "pinyin": "jì",
        "meaning": "gửi",
        "example": "我去邮局寄包裹。",
        "examplePinyin": "wǒ qù yóu jú jì bāo guǒ。",
        "exampleMeaning": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "id": "hnl-lex-cb54a92f17153dca",
        "hanzi": "信封",
        "pinyin": "xìn fēng",
        "meaning": "phong bì",
        "example": "我买了信封和邮票。",
        "examplePinyin": "wǒ mǎi le xìn fēng hé yóu piào。",
        "exampleMeaning": "Tôi đã mua phong bì và tem thư."
      },
      {
        "id": "hnl-lex-4f051f67078da9ea",
        "hanzi": "邮票",
        "pinyin": "yóu piào",
        "meaning": "tem thư",
        "example": "请帮我买几张邮票。",
        "examplePinyin": "qǐng bāng wǒ mǎi jǐ zhāng yóu piào。",
        "exampleMeaning": "Làm ơn mua giúp tôi vài con tem."
      },
      {
        "id": "hnl-lex-be5f4f6ce6d27273",
        "hanzi": "书店",
        "pinyin": "shū diàn",
        "meaning": "nhà sách",
        "example": "好，我顺便去书店。",
        "examplePinyin": "hǎo， wǒ shùn biàn qù shū diàn。",
        "exampleMeaning": "Được, tôi tiện thể ghé nhà sách."
      },
      {
        "id": "hnl-lex-5fe64314a314573a",
        "hanzi": "买书",
        "pinyin": "mǎi shū",
        "meaning": "mua sách",
        "example": "我顺便去书店买书。",
        "examplePinyin": "wǒ shùn biàn qù shū diàn mǎi shū。",
        "exampleMeaning": "Tôi tiện thể đến nhà sách mua sách."
      },
      {
        "id": "hnl-lex-c177b05c70db8a99",
        "hanzi": "帮",
        "pinyin": "bāng",
        "meaning": "giúp",
        "example": "请帮我买几张邮票。",
        "examplePinyin": "qǐng bāng wǒ mǎi jǐ zhāng yóu piào。",
        "exampleMeaning": "Làm ơn mua giúp tôi vài con tem."
      },
      {
        "id": "hnl-lex-d52fa592d9c5f4e6",
        "hanzi": "拿",
        "pinyin": "ná",
        "meaning": "cầm/lấy",
        "example": "请帮我拿这个包。",
        "examplePinyin": "qǐng bāng wǒ ná zhè ge bāo。",
        "exampleMeaning": "Làm ơn giúp tôi cầm chiếc túi này."
      },
      {
        "id": "hnl-lex-a4be2b9112b69297",
        "hanzi": "顺便",
        "pinyin": "shùn biàn",
        "meaning": "tiện thể",
        "example": "好，我顺便去书店。",
        "examplePinyin": "hǎo， wǒ shùn biàn qù shū diàn。",
        "exampleMeaning": "Được, tôi tiện thể ghé nhà sách."
      },
      {
        "id": "hnl-lex-0b33b0bfff28ef94",
        "hanzi": "事情",
        "pinyin": "shì qíng",
        "meaning": "công việc/sự việc",
        "example": "今天有一件重要的事情。",
        "examplePinyin": "jīn tiān yǒu yī jiàn zhòng yào de shì qíng。",
        "exampleMeaning": "Hôm nay có một việc quan trọng."
      },
      {
        "id": "hnl-lex-ed7e6d1bc279ae7f",
        "hanzi": "外贸",
        "pinyin": "wài mào",
        "meaning": "ngoại thương",
        "example": "他在外贸公司工作。",
        "examplePinyin": "tā zài wài mào gōng sī gōng zuò。",
        "exampleMeaning": "Bạn ấy làm ở công ty ngoại thương."
      },
      {
        "id": "hnl-lex-36b40b2b874b11ea",
        "hanzi": "代表团",
        "pinyin": "dài biǎo tuán",
        "meaning": "đoàn đại biểu",
        "example": "代表团明天去上海参观。",
        "examplePinyin": "dài biǎo tuán míng tiān qù shàng hǎi cān guān。",
        "exampleMeaning": "Ngày mai đoàn đại biểu đến Thượng Hải tham quan."
      }
    ],
    "grammar": [
      {
        "title": "Hai hoạt động: đi đâu để làm gì",
        "explanation": "去邮局寄包裹 nêu hành động di chuyển rồi mục đích. Khi ghép hai việc, giữ mạch nghĩa tự nhiên; không chỉ nối các động từ bất kỳ rồi xem đó là câu liên động đúng.",
        "example": "我去邮局寄包裹。",
        "translation": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "title": "帮 + người + việc và 顺便",
        "explanation": "请帮我买邮票 là nhờ người khác mua tem giúp. 顺便 diễn tả làm thêm một việc khi có điều kiện tiện đường, không giống lịch trình chính. Chỉ dùng khi quan hệ hai việc thật sự phù hợp.",
        "example": "我顺便去书店买书。",
        "translation": "Tôi tiện thể đến nhà sách mua sách."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你去哪儿？",
        "pinyin": "nǐ qù nǎr？",
        "meaning": "Bạn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我去邮局寄包裹。",
        "pinyin": "wǒ qù yóu jú jì bāo guǒ。",
        "meaning": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "speaker": "An",
        "hanzi": "请帮我买几张邮票。",
        "pinyin": "qǐng bāng wǒ mǎi jǐ zhāng yóu piào。",
        "meaning": "Làm ơn mua giúp tôi vài con tem."
      },
      {
        "speaker": "Minh",
        "hanzi": "好，我顺便去书店。",
        "pinyin": "hǎo， wǒ shùn biàn qù shū diàn。",
        "meaning": "Được, tôi tiện thể ghé nhà sách."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 请帮我买邮票, người được giúp là ai?",
        "options": [
          "Con tem",
          "Người nói",
          "Một địa điểm"
        ],
        "answer": "Người nói",
        "explanation": "帮我 nêu người nhận sự giúp đỡ; 买邮票 là việc được nhờ.",
        "id": "hanngu-q2-b18-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我",
          "寄包裹",
          "去邮局"
        ],
        "answer": "我去邮局寄包裹",
        "explanation": "Câu hoàn chỉnh: 我去邮局寄包裹。 去邮局寄包裹 nêu hành động di chuyển rồi mục đích. Khi ghép hai việc, giữ mạch nghĩa tự nhiên; không chỉ nối các động từ bất kỳ rồi xem đó là câu liên động đúng.",
        "id": "hanngu-q2-b18-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “买书” có nghĩa nào?",
        "options": [
          "gửi",
          "đoàn đại biểu",
          "mua sách",
          "bưu phẩm"
        ],
        "answer": "mua sách",
        "explanation": "买书 (mǎi shū): mua sách. Ví dụ: 我顺便去书店买书。 — Tôi tiện thể đến nhà sách mua sách.",
        "id": "hanngu-q2-b18-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “书店” có nghĩa nào?",
        "options": [
          "nhà sách",
          "tem thư",
          "mua sách",
          "đoàn đại biểu"
        ],
        "answer": "nhà sách",
        "explanation": "书店 (shū diàn): nhà sách. Ví dụ: 好，我顺便去书店。 — Được, tôi tiện thể ghé nhà sách.",
        "id": "hanngu-q2-b18-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “寄” có nghĩa nào?",
        "options": [
          "gửi",
          "bưu phẩm",
          "tiện thể",
          "công việc/sự việc"
        ],
        "answer": "gửi",
        "explanation": "寄 (jì): gửi. Ví dụ: 我去邮局寄包裹。 — Tôi đến bưu điện gửi bưu phẩm.",
        "id": "hanngu-q2-b18-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “外贸” có nghĩa nào?",
        "options": [
          "giúp",
          "gửi",
          "bưu phẩm",
          "ngoại thương"
        ],
        "answer": "ngoại thương",
        "explanation": "外贸 (wài mào): ngoại thương. Ví dụ: 他在外贸公司工作。 — Bạn ấy làm ở công ty ngoại thương.",
        "id": "hanngu-q2-b18-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đoàn đại biểu” (dài biǎo tuán). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "代表团",
        "alternatives": [],
        "explanation": "代表团 (dài biǎo tuán) nghĩa là đoàn đại biểu. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b18-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “công việc/sự việc” (shì qíng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "事情",
        "alternatives": [],
        "explanation": "事情 (shì qíng) nghĩa là công việc/sự việc. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b18-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Đến bưu điện để gửi bưu phẩm”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “帮 + người + việc và 顺便”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 18, mốc PDF 29. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b19",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 19",
    "title": "Có thể thử được không: mua quần áo",
    "subtitle": "可以试试吗？",
    "minutes": 30,
    "order": 4,
    "objectives": [
      "Dùng mẫu “可以试试吗？” trong tình huống phù hợp.",
      "Nhận diện 13 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 可以 hỏi sự cho phép / Động từ lặp và 一点儿.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: có thể thử được không: mua quần áo. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 可以 hỏi sự cho phép.",
    "vocabulary": [
      {
        "id": "hnl-lex-920c5f985d43d0b0",
        "hanzi": "可以",
        "pinyin": "kě yǐ",
        "meaning": "có thể/được phép",
        "example": "这件衣服可以试试吗？",
        "examplePinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "exampleMeaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "id": "hnl-lex-cb96b6b253d511db",
        "hanzi": "试",
        "pinyin": "shì",
        "meaning": "thử",
        "example": "这件衣服可以试试吗？",
        "examplePinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "exampleMeaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "id": "hnl-lex-cf77f8254a6aefcc",
        "hanzi": "试试",
        "pinyin": "shì shì",
        "meaning": "thử một chút",
        "example": "这件衣服可以试试吗？",
        "examplePinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "exampleMeaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "id": "hnl-lex-fbfa6c53f15d0bff",
        "hanzi": "衣服",
        "pinyin": "yī fu",
        "meaning": "quần áo",
        "example": "这件衣服可以试试吗？",
        "examplePinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "exampleMeaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "id": "hnl-lex-d36bdb7e38965e5e",
        "hanzi": "件",
        "pinyin": "jiàn",
        "meaning": "lượng từ quần áo",
        "example": "这件衣服可以试试吗？",
        "examplePinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "exampleMeaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "id": "hnl-lex-74c24fc46f74c44a",
        "hanzi": "长",
        "pinyin": "cháng",
        "meaning": "dài",
        "example": "秘书给校长介绍王教授。",
        "examplePinyin": "mì shū gěi xiào zhǎng jiè shào wáng jiào shòu。",
        "exampleMeaning": "Thư ký giới thiệu giáo sư Vương với hiệu trưởng."
      },
      {
        "id": "hnl-lex-09636c3cbcce1e4f",
        "hanzi": "短",
        "pinyin": "duǎn",
        "meaning": "ngắn",
        "example": "这件衣服太短，不太合适。",
        "examplePinyin": "zhè jiàn yī fú tài duǎn， bù tài hé shì。",
        "exampleMeaning": "Bộ quần áo này quá ngắn, không phù hợp lắm."
      },
      {
        "id": "hnl-lex-d0bd40a4c491723b",
        "hanzi": "一点儿",
        "pinyin": "yī diǎnr",
        "meaning": "một chút",
        "example": "有大一点儿的吗？",
        "examplePinyin": "yǒu dà yī diǎnr de ma？",
        "exampleMeaning": "Có cái lớn hơn một chút không?"
      },
      {
        "id": "hnl-lex-61fb7e8a4194ea15",
        "hanzi": "合适",
        "pinyin": "hé shì",
        "meaning": "phù hợp",
        "example": "这件衣服太短，不太合适。",
        "examplePinyin": "zhè jiàn yī fú tài duǎn， bù tài hé shì。",
        "exampleMeaning": "Bộ quần áo này quá ngắn, không phù hợp lắm."
      },
      {
        "id": "hnl-lex-b35b2b2d24986320",
        "hanzi": "小",
        "pinyin": "xiǎo",
        "meaning": "nhỏ",
        "example": "两个小时。",
        "examplePinyin": "liǎng gè xiǎo shí。",
        "exampleMeaning": "Hai giờ."
      },
      {
        "id": "hnl-lex-49015e15fc1ff032",
        "hanzi": "大",
        "pinyin": "dà",
        "meaning": "lớn",
        "example": "有大一点儿的吗？",
        "examplePinyin": "yǒu dà yī diǎnr de ma？",
        "exampleMeaning": "Có cái lớn hơn một chút không?"
      },
      {
        "id": "hnl-lex-3f2ac8b076093617",
        "hanzi": "旧",
        "pinyin": "jiù",
        "meaning": "cũ",
        "example": "是新的还是旧的？",
        "examplePinyin": "shì xīn de hái shì jiù de？",
        "exampleMeaning": "Là xe mới hay cũ?"
      },
      {
        "id": "hnl-lex-11026950edee08f3",
        "hanzi": "喜欢",
        "pinyin": "xǐ huān",
        "meaning": "thích",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      }
    ],
    "grammar": [
      {
        "title": "可以 hỏi sự cho phép",
        "explanation": "在店里问 可以试试吗 là xin thử, không khẳng định mình có kỹ năng mặc quần áo. Tập chọn 可以 cho ý xin phép trong tình huống; 会 thường liên quan kỹ năng ở các bài sau.",
        "example": "可以试试吗？",
        "translation": "Tôi có thể thử được không?"
      },
      {
        "title": "Động từ lặp và 一点儿",
        "explanation": "试试 làm hành động thử có cảm giác ngắn hoặc nhẹ. 大一点儿 nêu muốn lớn hơn một chút so với cái đang nói. Đừng đặt 一点儿 trước tính từ trong mẫu yêu cầu này.",
        "example": "我想要大一点儿的。",
        "translation": "Tôi muốn cái lớn hơn một chút."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这件衣服可以试试吗？",
        "pinyin": "zhè jiàn yī fú kě yǐ shì shì ma？",
        "meaning": "Tôi thử bộ quần áo này được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "可以。",
        "pinyin": "kě yǐ。",
        "meaning": "Được."
      },
      {
        "speaker": "An",
        "hanzi": "有大一点儿的吗？",
        "pinyin": "yǒu dà yī diǎnr de ma？",
        "meaning": "Có cái lớn hơn một chút không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有，你试试这件。",
        "pinyin": "yǒu， nǐ shì shì zhè jiàn。",
        "meaning": "Có, bạn thử cái này xem."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn muốn xin phép thử áo. Câu nào phù hợp?",
        "options": [
          "我是谁？",
          "可以试试吗？",
          "这件昨天。"
        ],
        "answer": "可以试试吗？",
        "explanation": "可以…吗 dùng để xin phép trong tình huống này.",
        "id": "hanngu-q2-b19-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "大一点儿的",
          "想要",
          "我"
        ],
        "answer": "我想要大一点儿的",
        "explanation": "Câu hoàn chỉnh: 我想要大一点儿的。 在店里问 可以试试吗 là xin thử, không khẳng định mình có kỹ năng mặc quần áo. Tập chọn 可以 cho ý xin phép trong tình huống; 会 thường liên quan kỹ năng ở các bài sau.",
        "id": "hanngu-q2-b19-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “喜欢” có nghĩa nào?",
        "options": [
          "nhỏ",
          "cũ",
          "quần áo",
          "thích"
        ],
        "answer": "thích",
        "explanation": "喜欢 (xǐ huān): thích. Ví dụ: 我喜欢白马。 — Tôi thích ngựa trắng.",
        "id": "hanngu-q2-b19-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “短” có nghĩa nào?",
        "options": [
          "dài",
          "phù hợp",
          "ngắn",
          "lượng từ quần áo"
        ],
        "answer": "ngắn",
        "explanation": "短 (duǎn): ngắn. Ví dụ: 这件衣服太短，不太合适。 — Bộ quần áo này quá ngắn, không phù hợp lắm.",
        "id": "hanngu-q2-b19-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “大” có nghĩa nào?",
        "options": [
          "ngắn",
          "thử một chút",
          "lớn",
          "một chút"
        ],
        "answer": "lớn",
        "explanation": "大 (dà): lớn. Ví dụ: 有大一点儿的吗？ — Có cái lớn hơn một chút không?",
        "id": "hanngu-q2-b19-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “试试” có nghĩa nào?",
        "options": [
          "thử một chút",
          "cũ",
          "phù hợp",
          "lượng từ quần áo"
        ],
        "answer": "thử một chút",
        "explanation": "试试 (shì shì): thử một chút. Ví dụ: 这件衣服可以试试吗？ — Tôi thử bộ quần áo này được không?",
        "id": "hanngu-q2-b19-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “phù hợp” (hé shì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "合适",
        "alternatives": [],
        "explanation": "合适 (hé shì) nghĩa là phù hợp. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b19-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “một chút” (yī diǎnr). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "一点儿",
        "alternatives": [],
        "explanation": "一点儿 (yī diǎnr) nghĩa là một chút. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b19-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Có thể thử được không: mua quần áo”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Động từ lặp và 一点儿”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 19, mốc PDF 40. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b20",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 20",
    "title": "Chúc sinh nhật: hỏi ngày tháng và tuổi",
    "subtitle": "我的生日是五月八号。",
    "minutes": 30,
    "order": 5,
    "objectives": [
      "Dùng mẫu “我的生日是五月八号。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Năm → tháng → ngày / Hỏi tuổi và lời chúc.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: chúc sinh nhật: hỏi ngày tháng và tuổi. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Năm → tháng → ngày.",
    "vocabulary": [
      {
        "id": "hnl-lex-6c161e3d871feec2",
        "hanzi": "生日",
        "pinyin": "shēng rì",
        "meaning": "sinh nhật",
        "example": "你的生日是几月几号？",
        "examplePinyin": "nǐ de shēng rì shì jǐ yuè jǐ hào？",
        "exampleMeaning": "Sinh nhật của bạn là ngày mấy tháng mấy?"
      },
      {
        "id": "hnl-lex-eab253786ee86543",
        "hanzi": "快乐",
        "pinyin": "kuài lè",
        "meaning": "vui vẻ",
        "example": "祝你生日快乐！",
        "examplePinyin": "zhù nǐ shēng rì kuài lè！",
        "exampleMeaning": "Chúc bạn sinh nhật vui vẻ!"
      },
      {
        "id": "hnl-lex-0e48f31189099175",
        "hanzi": "年",
        "pinyin": "nián",
        "meaning": "năm",
        "example": "今年我二十岁，明年大学毕业。",
        "examplePinyin": "jīn nián wǒ èr shí suì， míng nián dà xué bì yè。",
        "exampleMeaning": "Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học."
      },
      {
        "id": "hnl-lex-e9daeb6fdabe4437",
        "hanzi": "月",
        "pinyin": "yuè",
        "meaning": "tháng",
        "example": "你的生日是几月几号？",
        "examplePinyin": "nǐ de shēng rì shì jǐ yuè jǐ hào？",
        "exampleMeaning": "Sinh nhật của bạn là ngày mấy tháng mấy?"
      },
      {
        "id": "hnl-lex-9dd0305ee4ec461d",
        "hanzi": "号",
        "pinyin": "hào",
        "meaning": "ngày số",
        "example": "你的生日是几月几号？",
        "examplePinyin": "nǐ de shēng rì shì jǐ yuè jǐ hào？",
        "exampleMeaning": "Sinh nhật của bạn là ngày mấy tháng mấy?"
      },
      {
        "id": "hnl-lex-074eb8a504cd246b",
        "hanzi": "几岁",
        "pinyin": "jǐ suì",
        "meaning": "mấy tuổi",
        "example": "你弟弟几岁了？",
        "examplePinyin": "nǐ dì di jǐ suì le？",
        "exampleMeaning": "Em trai bạn mấy tuổi rồi?"
      },
      {
        "id": "hnl-lex-ae3cee6dc73c75b1",
        "hanzi": "多大",
        "pinyin": "duō dà",
        "meaning": "bao nhiêu tuổi/lớn chừng nào",
        "example": "请问，你多大了？",
        "examplePinyin": "qǐng wèn， nǐ duō dà le？",
        "exampleMeaning": "Xin hỏi, bạn bao nhiêu tuổi?"
      },
      {
        "id": "hnl-lex-dbb1a0d9f84251bf",
        "hanzi": "毕业",
        "pinyin": "bì yè",
        "meaning": "tốt nghiệp",
        "example": "今年我二十岁，明年大学毕业。",
        "examplePinyin": "jīn nián wǒ èr shí suì， míng nián dà xué bì yè。",
        "exampleMeaning": "Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học."
      },
      {
        "id": "hnl-lex-5a07780074926324",
        "hanzi": "今年",
        "pinyin": "jīn nián",
        "meaning": "năm nay",
        "example": "今年我二十岁，明年大学毕业。",
        "examplePinyin": "jīn nián wǒ èr shí suì， míng nián dà xué bì yè。",
        "exampleMeaning": "Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học."
      },
      {
        "id": "hnl-lex-41d306b0dbcb9087",
        "hanzi": "明年",
        "pinyin": "míng nián",
        "meaning": "năm sau",
        "example": "今年我二十岁，明年大学毕业。",
        "examplePinyin": "jīn nián wǒ èr shí suì， míng nián dà xué bì yè。",
        "exampleMeaning": "Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học."
      },
      {
        "id": "hnl-lex-99a8affb95397321",
        "hanzi": "后年",
        "pinyin": "hòu nián",
        "meaning": "năm sau nữa",
        "example": "他后年去中国学习一年。",
        "examplePinyin": "tā hòu nián qù zhōng guó xué xí yī nián。",
        "exampleMeaning": "Năm sau nữa bạn ấy đến Trung Quốc học một năm."
      },
      {
        "id": "hnl-lex-03f08aba05e22776",
        "hanzi": "祝",
        "pinyin": "zhù",
        "meaning": "chúc",
        "example": "祝你生日快乐！",
        "examplePinyin": "zhù nǐ shēng rì kuài lè！",
        "exampleMeaning": "Chúc bạn sinh nhật vui vẻ!"
      }
    ],
    "grammar": [
      {
        "title": "Năm → tháng → ngày",
        "explanation": "Khi nói ngày tháng, đi theo đơn vị lớn rồi nhỏ. Học 月 và 号 cùng số trước; khi chưa quen đừng vừa đổi thứ vừa đổi ngày trong cùng một câu trả lời quá dài.",
        "example": "我的生日是五月八号。",
        "translation": "Sinh nhật của tôi là ngày 8 tháng 5."
      },
      {
        "title": "Hỏi tuổi và lời chúc",
        "explanation": "多大 có thể dùng để hỏi tuổi trong ngữ cảnh phù hợp; tránh hỏi tuổi như một thủ tục bắt buộc với mọi người mới gặp. 祝你生日快乐 là lời chúc có người nhận rõ ràng.",
        "example": "祝你生日快乐！",
        "translation": "Chúc bạn sinh nhật vui vẻ!"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你的生日是几月几号？",
        "pinyin": "nǐ de shēng rì shì jǐ yuè jǐ hào？",
        "meaning": "Sinh nhật của bạn là ngày mấy tháng mấy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "五月八号。",
        "pinyin": "wǔ yuè bā hào。",
        "meaning": "Ngày 8 tháng 5."
      },
      {
        "speaker": "An",
        "hanzi": "祝你生日快乐！",
        "pinyin": "zhù nǐ shēng rì kuài lè！",
        "meaning": "Chúc bạn sinh nhật vui vẻ!"
      },
      {
        "speaker": "Minh",
        "hanzi": "谢谢！",
        "pinyin": "xiè xiè！",
        "meaning": "Cảm ơn!"
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Dòng nào theo thứ tự ngày tháng cơ bản trong tiếng Trung?",
        "options": [
          "号八月五",
          "八号五月是",
          "五月八号"
        ],
        "answer": "五月八号",
        "explanation": "Nói tháng trước ngày trong mẫu đang luyện.",
        "id": "hanngu-q2-b20-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "是",
          "我的生日",
          "五月八号"
        ],
        "answer": "我的生日是五月八号",
        "explanation": "Câu hoàn chỉnh: 我的生日是五月八号。 Khi nói ngày tháng, đi theo đơn vị lớn rồi nhỏ. Học 月 và 号 cùng số trước; khi chưa quen đừng vừa đổi thứ vừa đổi ngày trong cùng một câu trả lời quá dài.",
        "id": "hanngu-q2-b20-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “年” có nghĩa nào?",
        "options": [
          "bao nhiêu tuổi/lớn chừng nào",
          "tốt nghiệp",
          "năm",
          "chúc"
        ],
        "answer": "năm",
        "explanation": "年 (nián): năm. Ví dụ: 今年我二十岁，明年大学毕业。 — Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học.",
        "id": "hanngu-q2-b20-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “祝” có nghĩa nào?",
        "options": [
          "năm",
          "mấy tuổi",
          "chúc",
          "sinh nhật"
        ],
        "answer": "chúc",
        "explanation": "祝 (zhù): chúc. Ví dụ: 祝你生日快乐！ — Chúc bạn sinh nhật vui vẻ!",
        "id": "hanngu-q2-b20-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “多大” có nghĩa nào?",
        "options": [
          "năm sau nữa",
          "bao nhiêu tuổi/lớn chừng nào",
          "tháng",
          "năm sau"
        ],
        "answer": "bao nhiêu tuổi/lớn chừng nào",
        "explanation": "多大 (duō dà): bao nhiêu tuổi/lớn chừng nào. Ví dụ: 请问，你多大了？ — Xin hỏi, bạn bao nhiêu tuổi?",
        "id": "hanngu-q2-b20-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “快乐” có nghĩa nào?",
        "options": [
          "vui vẻ",
          "năm nay",
          "ngày số",
          "bao nhiêu tuổi/lớn chừng nào"
        ],
        "answer": "vui vẻ",
        "explanation": "快乐 (kuài lè): vui vẻ. Ví dụ: 祝你生日快乐！ — Chúc bạn sinh nhật vui vẻ!",
        "id": "hanngu-q2-b20-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tháng” (yuè). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "月",
        "alternatives": [],
        "explanation": "月 (yuè) nghĩa là tháng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b20-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “năm sau nữa” (hòu nián). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "后年",
        "alternatives": [],
        "explanation": "后年 (hòu nián) nghĩa là năm sau nữa. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b20-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Chúc sinh nhật: hỏi ngày tháng và tuổi”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Hỏi tuổi và lời chúc”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 20, mốc PDF 53. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b21",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 21",
    "title": "Hẹn giờ xuất phát chính xác",
    "subtitle": "我们七点一刻出发。",
    "minutes": 30,
    "order": 6,
    "objectives": [
      "Dùng mẫu “我们七点一刻出发。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 七点一刻 và 七点十五分 / 差 dùng với mốc sắp tới.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: hẹn giờ xuất phát chính xác. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 七点一刻 và 七点十五分.",
    "vocabulary": [
      {
        "id": "hnl-lex-e0b8ae2fb79dd5d9",
        "hanzi": "点",
        "pinyin": "diǎn",
        "meaning": "giờ",
        "example": "明天几点出发？",
        "examplePinyin": "míng tiān jǐ diǎn chū fā？",
        "exampleMeaning": "Ngày mai mấy giờ xuất phát?"
      },
      {
        "id": "hnl-lex-cc59071f5e9e96a5",
        "hanzi": "刻",
        "pinyin": "kè",
        "meaning": "một phần tư giờ",
        "example": "七点一刻。",
        "examplePinyin": "qī diǎn yī kè。",
        "exampleMeaning": "7 giờ 15."
      },
      {
        "id": "hnl-lex-a72fcad921140604",
        "hanzi": "分",
        "pinyin": "fēn",
        "meaning": "phút",
        "example": "请等我五分钟。",
        "examplePinyin": "qǐng děng wǒ wǔ fēn zhōng。",
        "exampleMeaning": "Xin đợi tôi năm phút."
      },
      {
        "id": "hnl-lex-c519c8af69b8eb6a",
        "hanzi": "半",
        "pinyin": "bàn",
        "meaning": "rưỡi/nửa",
        "example": "我每天早上六点半起床。",
        "examplePinyin": "wǒ měi tiān zǎo shàng liù diǎn bàn qǐ chuáng。",
        "exampleMeaning": "Sáng nào tôi cũng dậy lúc sáu giờ rưỡi."
      },
      {
        "id": "hnl-lex-758f4918587593c0",
        "hanzi": "出发",
        "pinyin": "chū fā",
        "meaning": "xuất phát",
        "example": "明天几点出发？",
        "examplePinyin": "míng tiān jǐ diǎn chū fā？",
        "exampleMeaning": "Ngày mai mấy giờ xuất phát?"
      },
      {
        "id": "hnl-lex-f2dacd964ed99b3b",
        "hanzi": "早上",
        "pinyin": "zǎo shàng",
        "meaning": "sáng sớm",
        "example": "我每天早上六点半起床。",
        "examplePinyin": "wǒ měi tiān zǎo shàng liù diǎn bàn qǐ chuáng。",
        "exampleMeaning": "Sáng nào tôi cũng dậy lúc sáu giờ rưỡi."
      },
      {
        "id": "hnl-lex-48521cf7e1a0bd02",
        "hanzi": "起床",
        "pinyin": "qǐ chuáng",
        "meaning": "thức dậy",
        "example": "我每天早上六点半起床。",
        "examplePinyin": "wǒ měi tiān zǎo shàng liù diǎn bàn qǐ chuáng。",
        "exampleMeaning": "Sáng nào tôi cũng dậy lúc sáu giờ rưỡi."
      },
      {
        "id": "hnl-lex-c908d4af903afb2b",
        "hanzi": "集合",
        "pinyin": "jí hé",
        "meaning": "tập trung",
        "example": "几点集合？",
        "examplePinyin": "jǐ diǎn jí hé？",
        "exampleMeaning": "Mấy giờ tập trung?"
      },
      {
        "id": "hnl-lex-b45405e5b0d52d41",
        "hanzi": "差",
        "pinyin": "chà",
        "meaning": "thiếu/kém",
        "example": "差一刻八点。",
        "examplePinyin": "chà yī kè bā diǎn。",
        "exampleMeaning": "8 giờ kém 15, tức 7 giờ 45."
      },
      {
        "id": "hnl-lex-b6f1be869be00867",
        "hanzi": "时间",
        "pinyin": "shí jiān",
        "meaning": "thời gian",
        "example": "你每天学习多长时间？",
        "examplePinyin": "nǐ měi tiān xué xí duō zhǎng shí jiān？",
        "exampleMeaning": "Mỗi ngày bạn học bao lâu?"
      },
      {
        "id": "hnl-lex-29b3d2b0628a1b2c",
        "hanzi": "迟到",
        "pinyin": "chí dào",
        "meaning": "đến muộn",
        "example": "七点。请不要迟到。",
        "examplePinyin": "qī diǎn。 qǐng bú yào chí dào。",
        "exampleMeaning": "7 giờ. Xin đừng đến muộn."
      },
      {
        "id": "hnl-lex-1c26b51344a2f9e1",
        "hanzi": "等",
        "pinyin": "děng",
        "meaning": "đợi",
        "example": "请等我五分钟。",
        "examplePinyin": "qǐng děng wǒ wǔ fēn zhōng。",
        "exampleMeaning": "Xin đợi tôi năm phút."
      }
    ],
    "grammar": [
      {
        "title": "七点一刻 và 七点十五分",
        "explanation": "Hai cách này cùng chỉ 7 giờ 15 trong mẫu bài. 半 là nửa giờ, khác 一刻. Cần nghe rõ số giờ rồi mới ghép phút, không đoán từ một chữ quen tai.",
        "example": "我们七点一刻出发。",
        "translation": "Chúng ta xuất phát lúc 7 giờ 15."
      },
      {
        "title": "差 dùng với mốc sắp tới",
        "explanation": "差一刻八点 là còn thiếu 15 phút đến 8 giờ, tức 7 giờ 45. Chỉ luyện cách nói giờ kém sau khi đã chắc giờ–phút thông thường; kiểm lại bằng số để tránh đến sai giờ.",
        "example": "差一刻八点。",
        "translation": "8 giờ kém 15, tức 7 giờ 45."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "明天几点出发？",
        "pinyin": "míng tiān jǐ diǎn chū fā？",
        "meaning": "Ngày mai mấy giờ xuất phát?"
      },
      {
        "speaker": "Minh",
        "hanzi": "七点一刻。",
        "pinyin": "qī diǎn yī kè。",
        "meaning": "7 giờ 15."
      },
      {
        "speaker": "An",
        "hanzi": "几点集合？",
        "pinyin": "jǐ diǎn jí hé？",
        "meaning": "Mấy giờ tập trung?"
      },
      {
        "speaker": "Minh",
        "hanzi": "七点。请不要迟到。",
        "pinyin": "qī diǎn。 qǐng bú yào chí dào。",
        "meaning": "7 giờ. Xin đừng đến muộn."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "七点一刻 là giờ nào?",
        "options": [
          "7 giờ 45",
          "7 giờ 15",
          "8 giờ 15"
        ],
        "answer": "7 giờ 15",
        "explanation": "一刻 tương ứng 15 phút sau mốc 七点 trong cách nói này.",
        "id": "hanngu-q2-b21-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "出发",
          "七点一刻",
          "我们"
        ],
        "answer": "我们七点一刻出发",
        "explanation": "Câu hoàn chỉnh: 我们七点一刻出发。 Hai cách này cùng chỉ 7 giờ 15 trong mẫu bài. 半 là nửa giờ, khác 一刻. Cần nghe rõ số giờ rồi mới ghép phút, không đoán từ một chữ quen tai.",
        "id": "hanngu-q2-b21-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “早上” có nghĩa nào?",
        "options": [
          "xuất phát",
          "đợi",
          "phút",
          "sáng sớm"
        ],
        "answer": "sáng sớm",
        "explanation": "早上 (zǎo shàng): sáng sớm. Ví dụ: 我每天早上六点半起床。 — Sáng nào tôi cũng dậy lúc sáu giờ rưỡi.",
        "id": "hanngu-q2-b21-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “出发” có nghĩa nào?",
        "options": [
          "giờ",
          "xuất phát",
          "phút",
          "sáng sớm"
        ],
        "answer": "xuất phát",
        "explanation": "出发 (chū fā): xuất phát. Ví dụ: 明天几点出发？ — Ngày mai mấy giờ xuất phát?",
        "id": "hanngu-q2-b21-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “等” có nghĩa nào?",
        "options": [
          "sáng sớm",
          "phút",
          "giờ",
          "đợi"
        ],
        "answer": "đợi",
        "explanation": "等 (děng): đợi. Ví dụ: 请等我五分钟。 — Xin đợi tôi năm phút.",
        "id": "hanngu-q2-b21-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “差” có nghĩa nào?",
        "options": [
          "giờ",
          "thiếu/kém",
          "tập trung",
          "thức dậy"
        ],
        "answer": "thiếu/kém",
        "explanation": "差 (chà): thiếu/kém. Ví dụ: 差一刻八点。 — 8 giờ kém 15, tức 7 giờ 45.",
        "id": "hanngu-q2-b21-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “thời gian” (shí jiān). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "时间",
        "alternatives": [],
        "explanation": "时间 (shí jiān) nghĩa là thời gian. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b21-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “phút” (fēn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "分",
        "alternatives": [],
        "explanation": "分 (fēn) nghĩa là phút. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b21-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Hẹn giờ xuất phát chính xác”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “差 dùng với mốc sắp tới”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 21, mốc PDF 66. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b22",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 22",
    "title": "Dự định học thêm và nhờ người hướng dẫn",
    "subtitle": "我打算学京剧。",
    "minutes": 30,
    "order": 7,
    "objectives": [
      "Dùng mẫu “我打算学京剧。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 打算 + hoạt động: nêu dự định / 请 + người + động từ.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: dự định học thêm và nhờ người hướng dẫn. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 打算 + hoạt động: nêu dự định.",
    "vocabulary": [
      {
        "id": "hnl-lex-121cf8845cb3b059",
        "hanzi": "打算",
        "pinyin": "dǎ suàn",
        "meaning": "dự định",
        "example": "你打算怎么学？",
        "examplePinyin": "nǐ dǎ suàn zěn me xué？",
        "exampleMeaning": "Bạn định học như thế nào?"
      },
      {
        "id": "hnl-lex-812154b68fc2e8cb",
        "hanzi": "请",
        "pinyin": "qǐng",
        "meaning": "mời/nhờ",
        "example": "我想请老师教我。",
        "examplePinyin": "wǒ xiǎng qǐng lǎo shī jiāo wǒ。",
        "exampleMeaning": "Tôi muốn nhờ giáo viên dạy."
      },
      {
        "id": "hnl-lex-445f7a90a1848e63",
        "hanzi": "教",
        "pinyin": "jiāo",
        "meaning": "dạy",
        "example": "我想请老师教我。",
        "examplePinyin": "wǒ xiǎng qǐng lǎo shī jiāo wǒ。",
        "exampleMeaning": "Tôi muốn nhờ giáo viên dạy."
      },
      {
        "id": "hnl-lex-5ca546b0b3e9c533",
        "hanzi": "京剧",
        "pinyin": "jīng jù",
        "meaning": "Kinh kịch",
        "example": "我对京剧感兴趣。",
        "examplePinyin": "wǒ duì jīng jù gǎn xìng qù。",
        "exampleMeaning": "Tôi có hứng thú với Kinh kịch."
      },
      {
        "id": "hnl-lex-d017e254ecffe552",
        "hanzi": "感兴趣",
        "pinyin": "gǎn xìng qù",
        "meaning": "có hứng thú",
        "example": "我对京剧感兴趣。",
        "examplePinyin": "wǒ duì jīng jù gǎn xìng qù。",
        "exampleMeaning": "Tôi có hứng thú với Kinh kịch."
      },
      {
        "id": "hnl-lex-d59931b2c00643f5",
        "hanzi": "爱好",
        "pinyin": "ài hào",
        "meaning": "sở thích",
        "example": "你有什么爱好？",
        "examplePinyin": "nǐ yǒu shén me ài hào？",
        "exampleMeaning": "Bạn có sở thích gì?"
      },
      {
        "id": "hnl-lex-b76b4259f4d830b3",
        "hanzi": "以后",
        "pinyin": "yǐ hòu",
        "meaning": "sau này",
        "example": "上课以后，我们开始练习。",
        "examplePinyin": "shàng kè yǐ hòu， wǒ men kāi shǐ liàn xí。",
        "exampleMeaning": "Sau khi vào học, chúng tôi bắt đầu luyện tập."
      },
      {
        "id": "hnl-lex-de7ea897c185e3e3",
        "hanzi": "开始",
        "pinyin": "kāi shǐ",
        "meaning": "bắt đầu",
        "example": "上课以后，我们开始练习。",
        "examplePinyin": "shàng kè yǐ hòu， wǒ men kāi shǐ liàn xí。",
        "exampleMeaning": "Sau khi vào học, chúng tôi bắt đầu luyện tập."
      },
      {
        "id": "hnl-lex-f0ad931d5d166ccc",
        "hanzi": "觉得",
        "pinyin": "jué de",
        "meaning": "cảm thấy/cho rằng",
        "example": "你觉得语法难吗？",
        "examplePinyin": "nǐ jué de yǔ fǎ nán ma？",
        "exampleMeaning": "Bạn thấy ngữ pháp khó không?"
      },
      {
        "id": "hnl-lex-673491d8d7b48657",
        "hanzi": "一起",
        "pinyin": "yì qǐ",
        "meaning": "cùng nhau",
        "example": "我们一起读书、写字。",
        "examplePinyin": "wǒ men yì qǐ dú shū、 xiě zì。",
        "exampleMeaning": "Chúng tôi cùng đọc sách và viết chữ."
      },
      {
        "id": "hnl-lex-9f2b553a6e480fd8",
        "hanzi": "唱",
        "pinyin": "chàng",
        "meaning": "hát",
        "example": "他很喜欢唱歌。",
        "examplePinyin": "tā hěn xǐ huān chàng gē。",
        "exampleMeaning": "Bạn ấy rất thích hát."
      },
      {
        "id": "hnl-lex-922d7f67f222c371",
        "hanzi": "帮助",
        "pinyin": "bāng zhù",
        "meaning": "giúp đỡ",
        "example": "谢谢你的帮助。",
        "examplePinyin": "xiè xiè nǐ de bāng zhù。",
        "exampleMeaning": "Cảm ơn sự giúp đỡ của bạn."
      }
    ],
    "grammar": [
      {
        "title": "打算 + hoạt động: nêu dự định",
        "explanation": "我打算学京剧 nói ý định, chưa khẳng định việc học đã diễn ra. Khi kể chuyện, giữ rõ khác biệt giữa định làm và đã làm; đừng chỉ thêm 了 vào mọi câu có thời gian.",
        "example": "我打算学京剧。",
        "translation": "Tôi định học Kinh kịch."
      },
      {
        "title": "请 + người + động từ",
        "explanation": "请老师教我 nêu người được nhờ rồi việc mong họ làm. Sắp xếp vai trò trước khi nói: ai mời/nhờ ai, người ấy làm gì. Trong một câu ngắn có thể có hai người tham gia hai hoạt động khác nhau.",
        "example": "我想请老师教我。",
        "translation": "Tôi muốn nhờ giáo viên dạy tôi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你有什么爱好？",
        "pinyin": "nǐ yǒu shén me ài hào？",
        "meaning": "Bạn có sở thích gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我对京剧感兴趣。",
        "pinyin": "wǒ duì jīng jù gǎn xìng qù。",
        "meaning": "Tôi có hứng thú với Kinh kịch."
      },
      {
        "speaker": "An",
        "hanzi": "你打算怎么学？",
        "pinyin": "nǐ dǎ suàn zěn me xué？",
        "meaning": "Bạn định học như thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我想请老师教我。",
        "pinyin": "wǒ xiǎng qǐng lǎo shī jiāo wǒ。",
        "meaning": "Tôi muốn nhờ giáo viên dạy."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "我打算学京剧 khẳng định điều gì?",
        "options": [
          "Đang biểu diễn ngay lúc này",
          "Ý định học",
          "Đã học xong"
        ],
        "answer": "Ý định học",
        "explanation": "打算 đánh dấu dự định; không tự suy ra hoạt động đã hoàn thành.",
        "id": "hanngu-q2-b22-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "请老师",
          "教我汉语",
          "我"
        ],
        "answer": "我请老师教我汉语",
        "explanation": "Câu hoàn chỉnh: 我请老师教我汉语。 我打算学京剧 nói ý định, chưa khẳng định việc học đã diễn ra. Khi kể chuyện, giữ rõ khác biệt giữa định làm và đã làm; đừng chỉ thêm 了 vào mọi câu có thời gian.",
        "id": "hanngu-q2-b22-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “京剧” có nghĩa nào?",
        "options": [
          "Kinh kịch",
          "bắt đầu",
          "sau này",
          "giúp đỡ"
        ],
        "answer": "Kinh kịch",
        "explanation": "京剧 (jīng jù): Kinh kịch. Ví dụ: 我对京剧感兴趣。 — Tôi có hứng thú với Kinh kịch.",
        "id": "hanngu-q2-b22-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “爱好” có nghĩa nào?",
        "options": [
          "Kinh kịch",
          "sở thích",
          "giúp đỡ",
          "cùng nhau"
        ],
        "answer": "sở thích",
        "explanation": "爱好 (ài hào): sở thích. Ví dụ: 你有什么爱好？ — Bạn có sở thích gì?",
        "id": "hanngu-q2-b22-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “教” có nghĩa nào?",
        "options": [
          "dự định",
          "mời/nhờ",
          "có hứng thú",
          "dạy"
        ],
        "answer": "dạy",
        "explanation": "教 (jiāo): dạy. Ví dụ: 我想请老师教我。 — Tôi muốn nhờ giáo viên dạy.",
        "id": "hanngu-q2-b22-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “以后” có nghĩa nào?",
        "options": [
          "sau này",
          "dạy",
          "bắt đầu",
          "có hứng thú"
        ],
        "answer": "sau này",
        "explanation": "以后 (yǐ hòu): sau này. Ví dụ: 上课以后，我们开始练习。 — Sau khi vào học, chúng tôi bắt đầu luyện tập.",
        "id": "hanngu-q2-b22-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cảm thấy/cho rằng” (jué de). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "觉得",
        "alternatives": [],
        "explanation": "觉得 (jué de) nghĩa là cảm thấy/cho rằng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b22-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “dự định” (dǎ suàn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "打算",
        "alternatives": [],
        "explanation": "打算 (dǎ suàn) nghĩa là dự định. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b22-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Dự định học thêm và nhờ người hướng dẫn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “请 + người + động từ”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 22, mốc PDF 80. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b23",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 23",
    "title": "Hỏi vị trí trong trường",
    "subtitle": "学校里边有邮局。",
    "minutes": 30,
    "order": 8,
    "objectives": [
      "Dùng mẫu “学校里边有邮局。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Nơi chốn + 有 + sự vật / 离 để nói khoảng cách.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: hỏi vị trí trong trường. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Nơi chốn + 有 + sự vật.",
    "vocabulary": [
      {
        "id": "hnl-lex-c8ac0e9458bcb066",
        "hanzi": "里边",
        "pinyin": "lǐ biān",
        "meaning": "bên trong",
        "example": "学校里边有邮局吗？",
        "examplePinyin": "xué xiào lǐ biān yǒu yóu jú ma？",
        "exampleMeaning": "Trong trường có bưu điện không?"
      },
      {
        "id": "hnl-lex-48c9b8b8615ca919",
        "hanzi": "外边",
        "pinyin": "wài biān",
        "meaning": "bên ngoài",
        "example": "学校外边有商店。",
        "examplePinyin": "xué xiào wài biān yǒu shāng diàn。",
        "exampleMeaning": "Ngoài trường có cửa hàng."
      },
      {
        "id": "hnl-lex-af94f2a4969fec49",
        "hanzi": "东边",
        "pinyin": "dōng biān",
        "meaning": "phía đông",
        "example": "图书馆在学校东边，食堂在西边。",
        "examplePinyin": "tú shū guǎn zài xué xiào dōng biān， shí táng zài xī biān。",
        "exampleMeaning": "Thư viện ở phía đông trường, nhà ăn ở phía tây."
      },
      {
        "id": "hnl-lex-abda63cca39b16fe",
        "hanzi": "西边",
        "pinyin": "xī biān",
        "meaning": "phía tây",
        "example": "图书馆在学校东边，食堂在西边。",
        "examplePinyin": "tú shū guǎn zài xué xiào dōng biān， shí táng zài xī biān。",
        "exampleMeaning": "Thư viện ở phía đông trường, nhà ăn ở phía tây."
      },
      {
        "id": "hnl-lex-53f0efa60ca46010",
        "hanzi": "南边",
        "pinyin": "nán biān",
        "meaning": "phía nam",
        "example": "南边有一个门，北边也有一个门。",
        "examplePinyin": "nán biān yǒu yí gè mén， běi biān yě yǒu yí gè mén。",
        "exampleMeaning": "Phía nam có một cửa, phía bắc cũng có một cửa."
      },
      {
        "id": "hnl-lex-b554966788adf267",
        "hanzi": "北边",
        "pinyin": "běi biān",
        "meaning": "phía bắc",
        "example": "南边有一个门，北边也有一个门。",
        "examplePinyin": "nán biān yǒu yí gè mén， běi biān yě yǒu yí gè mén。",
        "exampleMeaning": "Phía nam có một cửa, phía bắc cũng có một cửa."
      },
      {
        "id": "hnl-lex-4130169aa3cf59da",
        "hanzi": "前边",
        "pinyin": "qián biān",
        "meaning": "phía trước",
        "example": "前边是教学楼，后边是宿舍。",
        "examplePinyin": "qián biān shì jiāo xué lóu， hòu biān shì sù shè。",
        "exampleMeaning": "Phía trước là khu giảng đường, phía sau là ký túc xá."
      },
      {
        "id": "hnl-lex-82f787ed7577839e",
        "hanzi": "后边",
        "pinyin": "hòu biān",
        "meaning": "phía sau",
        "example": "前边是教学楼，后边是宿舍。",
        "examplePinyin": "qián biān shì jiāo xué lóu， hòu biān shì sù shè。",
        "exampleMeaning": "Phía trước là khu giảng đường, phía sau là ký túc xá."
      },
      {
        "id": "hnl-lex-1f6ddb11d7e74feb",
        "hanzi": "旁边",
        "pinyin": "páng biān",
        "meaning": "bên cạnh",
        "example": "有，在图书馆旁边。",
        "examplePinyin": "yǒu， zài tú shū guǎn páng biān。",
        "exampleMeaning": "Có, ở cạnh thư viện."
      },
      {
        "id": "hnl-lex-c3442e4731407043",
        "hanzi": "离",
        "pinyin": "lí",
        "meaning": "cách",
        "example": "离这儿远吗？",
        "examplePinyin": "lí zhèr yuǎn ma？",
        "exampleMeaning": "Cách đây xa không?"
      },
      {
        "id": "hnl-lex-73bb79d70badcb3d",
        "hanzi": "远",
        "pinyin": "yuǎn",
        "meaning": "xa",
        "example": "离这儿远吗？",
        "examplePinyin": "lí zhèr yuǎn ma？",
        "exampleMeaning": "Cách đây xa không?"
      },
      {
        "id": "hnl-lex-34d04c6f2752b5fa",
        "hanzi": "近",
        "pinyin": "jìn",
        "meaning": "gần",
        "example": "邮局离学校很近。",
        "examplePinyin": "yóu jú lí xué xiào hěn jìn。",
        "exampleMeaning": "Bưu điện rất gần trường."
      },
      {
        "id": "hnl-lex-f3b03d4a72a97e44",
        "hanzi": "从",
        "pinyin": "cóng",
        "meaning": "từ",
        "example": "从这儿往前走。",
        "examplePinyin": "cóng zhèr wǎng qián zǒu。",
        "exampleMeaning": "Từ đây đi về phía trước."
      },
      {
        "id": "hnl-lex-0118fd70b3edccbd",
        "hanzi": "往",
        "pinyin": "wǎng",
        "meaning": "về phía",
        "example": "从这儿往前走。",
        "examplePinyin": "cóng zhèr wǎng qián zǒu。",
        "exampleMeaning": "Từ đây đi về phía trước."
      }
    ],
    "grammar": [
      {
        "title": "Nơi chốn + 有 + sự vật",
        "explanation": "学校里边有邮局 giới thiệu có bưu điện trong trường. Khác với 邮局在学校里边 khi bưu điện là thứ đã biết và cần xác định vị trí. Chọn câu theo thông tin người nghe đang thiếu.",
        "example": "学校里边有邮局。",
        "translation": "Trong trường có bưu điện."
      },
      {
        "title": "离 để nói khoảng cách",
        "explanation": "A离B很近 diễn tả A gần B; không thay 离 bằng 在 nếu muốn nói khoảng cách. Với 从…往…, nhớ điểm xuất phát và hướng đi trước khi ghép câu.",
        "example": "邮局离学校很近。",
        "translation": "Bưu điện rất gần trường."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "学校里边有邮局吗？",
        "pinyin": "xué xiào lǐ biān yǒu yóu jú ma？",
        "meaning": "Trong trường có bưu điện không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有，在图书馆旁边。",
        "pinyin": "yǒu， zài tú shū guǎn páng biān。",
        "meaning": "Có, ở cạnh thư viện."
      },
      {
        "speaker": "An",
        "hanzi": "离这儿远吗？",
        "pinyin": "lí zhèr yuǎn ma？",
        "meaning": "Cách đây xa không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不远。",
        "pinyin": "bù yuǎn。",
        "meaning": "Không xa."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào giới thiệu có một bưu điện trong trường?",
        "options": [
          "学校有在邮局。",
          "学校里边有邮局。",
          "邮局是学校里边。"
        ],
        "answer": "学校里边有邮局。",
        "explanation": "Dùng nơi chốn + 有 để giới thiệu sự vật có ở nơi ấy.",
        "id": "hanngu-q2-b23-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "邮局",
          "很近",
          "离学校"
        ],
        "answer": "邮局离学校很近",
        "explanation": "Câu hoàn chỉnh: 邮局离学校很近。 学校里边有邮局 giới thiệu có bưu điện trong trường. Khác với 邮局在学校里边 khi bưu điện là thứ đã biết và cần xác định vị trí. Chọn câu theo thông tin người nghe đang thiếu.",
        "id": "hanngu-q2-b23-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “东边” có nghĩa nào?",
        "options": [
          "bên trong",
          "bên cạnh",
          "phía đông",
          "gần"
        ],
        "answer": "phía đông",
        "explanation": "东边 (dōng biān): phía đông. Ví dụ: 图书馆在学校东边，食堂在西边。 — Thư viện ở phía đông trường, nhà ăn ở phía tây.",
        "id": "hanngu-q2-b23-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “外边” có nghĩa nào?",
        "options": [
          "gần",
          "về phía",
          "phía nam",
          "bên ngoài"
        ],
        "answer": "bên ngoài",
        "explanation": "外边 (wài biān): bên ngoài. Ví dụ: 学校外边有商店。 — Ngoài trường có cửa hàng.",
        "id": "hanngu-q2-b23-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “里边” có nghĩa nào?",
        "options": [
          "phía nam",
          "bên trong",
          "gần",
          "phía bắc"
        ],
        "answer": "bên trong",
        "explanation": "里边 (lǐ biān): bên trong. Ví dụ: 学校里边有邮局吗？ — Trong trường có bưu điện không?",
        "id": "hanngu-q2-b23-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “前边” có nghĩa nào?",
        "options": [
          "phía trước",
          "xa",
          "phía bắc",
          "phía tây"
        ],
        "answer": "phía trước",
        "explanation": "前边 (qián biān): phía trước. Ví dụ: 前边是教学楼，后边是宿舍。 — Phía trước là khu giảng đường, phía sau là ký túc xá.",
        "id": "hanngu-q2-b23-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “về phía” (wǎng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "往",
        "alternatives": [],
        "explanation": "往 (wǎng) nghĩa là về phía. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b23-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “phía nam” (nán biān). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "南边",
        "alternatives": [],
        "explanation": "南边 (nán biān) nghĩa là phía nam. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b23-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Hỏi vị trí trong trường”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “离 để nói khoảng cách”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 23, mốc PDF 93. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b24",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 24",
    "title": "Muốn học Thái Cực quyền: phân biệt kỹ năng và mong muốn",
    "subtitle": "我想学太极拳。",
    "minutes": 30,
    "order": 9,
    "objectives": [
      "Dùng mẫu “我想学太极拳。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 想 và 会 là hai thông tin khác nhau / 能 gắn với điều kiện trong tình huống.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: muốn học thái cực quyền: phân biệt kỹ năng và mong muốn. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 想 và 会 là hai thông tin khác nhau.",
    "vocabulary": [
      {
        "id": "hnl-lex-d44e410f259f24b5",
        "hanzi": "想",
        "pinyin": "xiǎng",
        "meaning": "muốn/nghĩ",
        "example": "不会，但是我想学。",
        "examplePinyin": "bú huì， dàn shì wǒ xiǎng xué。",
        "exampleMeaning": "Chưa biết, nhưng tôi muốn học."
      },
      {
        "id": "hnl-lex-089611c2564a5658",
        "hanzi": "会",
        "pinyin": "huì",
        "meaning": "biết làm kỹ năng",
        "example": "你会打太极拳吗？",
        "examplePinyin": "nǐ huì dǎ tài jí quán ma？",
        "exampleMeaning": "Bạn biết tập Thái Cực quyền không?"
      },
      {
        "id": "hnl-lex-59bc8aa47ebc7f89",
        "hanzi": "能",
        "pinyin": "néng",
        "meaning": "có thể do điều kiện",
        "example": "我今天不能参加。",
        "examplePinyin": "wǒ jīn tiān bù néng cān jiā。",
        "exampleMeaning": "Hôm nay tôi không thể tham gia."
      },
      {
        "id": "hnl-lex-5bb8160f3a45d29c",
        "hanzi": "太极拳",
        "pinyin": "tài jí quán",
        "meaning": "Thái Cực quyền",
        "example": "你会打太极拳吗？",
        "examplePinyin": "nǐ huì dǎ tài jí quán ma？",
        "exampleMeaning": "Bạn biết tập Thái Cực quyền không?"
      },
      {
        "id": "hnl-lex-65f85b99e7f6945a",
        "hanzi": "游泳",
        "pinyin": "yóu yǒng",
        "meaning": "bơi",
        "example": "周末我有空，想去游泳。",
        "examplePinyin": "zhōu mò wǒ yǒu kòng， xiǎng qù yóu yǒng。",
        "exampleMeaning": "Cuối tuần tôi rảnh, muốn đi bơi."
      },
      {
        "id": "hnl-lex-fc1e4196a01cb177",
        "hanzi": "跑步",
        "pinyin": "pǎo bù",
        "meaning": "chạy bộ",
        "example": "跑步是我喜欢的运动。",
        "examplePinyin": "pǎo bù shì wǒ xǐ huān de yùn dòng。",
        "exampleMeaning": "Chạy bộ là môn thể thao tôi thích."
      },
      {
        "id": "hnl-lex-034bb7fa37ba64e8",
        "hanzi": "运动",
        "pinyin": "yùn dòng",
        "meaning": "vận động/thể thao",
        "example": "跑步是我喜欢的运动。",
        "examplePinyin": "pǎo bù shì wǒ xǐ huān de yùn dòng。",
        "exampleMeaning": "Chạy bộ là môn thể thao tôi thích."
      },
      {
        "id": "hnl-lex-d31e297a0aced35b",
        "hanzi": "报名",
        "pinyin": "bào míng",
        "meaning": "đăng ký",
        "example": "现在可以报名吗？",
        "examplePinyin": "xiàn zài kě yǐ bào míng ma？",
        "exampleMeaning": "Bây giờ đăng ký được không?"
      },
      {
        "id": "hnl-lex-dfa21387668f24d1",
        "hanzi": "参加",
        "pinyin": "cān jiā",
        "meaning": "tham gia",
        "example": "我今天不能参加。",
        "examplePinyin": "wǒ jīn tiān bù néng cān jiā。",
        "exampleMeaning": "Hôm nay tôi không thể tham gia."
      },
      {
        "id": "hnl-lex-79e27bc811329b06",
        "hanzi": "现在",
        "pinyin": "xiàn zài",
        "meaning": "bây giờ",
        "example": "现在可以报名吗？",
        "examplePinyin": "xiàn zài kě yǐ bào míng ma？",
        "exampleMeaning": "Bây giờ đăng ký được không?"
      },
      {
        "id": "hnl-lex-f8788461683dee11",
        "hanzi": "身体",
        "pinyin": "shēn tǐ",
        "meaning": "cơ thể",
        "example": "他身体很好。",
        "examplePinyin": "tā shēn tǐ hěn hǎo。",
        "exampleMeaning": "Bạn ấy có sức khỏe tốt."
      },
      {
        "id": "hnl-lex-514cd86597a80d6e",
        "hanzi": "有空",
        "pinyin": "yǒu kòng",
        "meaning": "có thời gian rảnh",
        "example": "周末我有空，想去游泳。",
        "examplePinyin": "zhōu mò wǒ yǒu kòng， xiǎng qù yóu yǒng。",
        "exampleMeaning": "Cuối tuần tôi rảnh, muốn đi bơi."
      }
    ],
    "grammar": [
      {
        "title": "想 và 会 là hai thông tin khác nhau",
        "explanation": "想学 nói mong muốn học; 会 nói đã biết một kỹ năng. Người chưa biết bơi vẫn có thể nói 我想学游泳. Không dùng 会 để thay mọi ý “có thể” trong tiếng Việt.",
        "example": "我想学太极拳。",
        "translation": "Tôi muốn học Thái Cực quyền."
      },
      {
        "title": "能 gắn với điều kiện trong tình huống",
        "explanation": "今天不能去 có thể vì điều kiện hôm nay, không có nghĩa là không biết đường đi. Đọc ngữ cảnh trước khi chọn 会/能/可以; ở bài này dùng ví dụ rõ để nhận ba ý kỹ năng, điều kiện và cho phép.",
        "example": "我今天不能参加。",
        "translation": "Hôm nay tôi không thể tham gia."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你会打太极拳吗？",
        "pinyin": "nǐ huì dǎ tài jí quán ma？",
        "meaning": "Bạn biết tập Thái Cực quyền không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不会，但是我想学。",
        "pinyin": "bú huì， dàn shì wǒ xiǎng xué。",
        "meaning": "Chưa biết, nhưng tôi muốn học."
      },
      {
        "speaker": "An",
        "hanzi": "现在可以报名吗？",
        "pinyin": "xiàn zài kě yǐ bào míng ma？",
        "meaning": "Bây giờ đăng ký được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "可以，我们一起去。",
        "pinyin": "kě yǐ， wǒ men yì qǐ qù。",
        "meaning": "Được, chúng ta cùng đi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn chưa biết bơi nhưng muốn học. Chọn câu đúng ý.",
        "options": [
          "我不会游泳，但是我想学。",
          "我想游泳，所以我已经会了。",
          "我不能是游泳。"
        ],
        "answer": "我不会游泳，但是我想学。",
        "explanation": "不会 nói chưa có kỹ năng; 想学 nói mong muốn học.",
        "id": "hanngu-q2-b24-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "太极拳",
          "想学",
          "我"
        ],
        "answer": "我想学太极拳",
        "explanation": "Câu hoàn chỉnh: 我想学太极拳。 想学 nói mong muốn học; 会 nói đã biết một kỹ năng. Người chưa biết bơi vẫn có thể nói 我想学游泳. Không dùng 会 để thay mọi ý “có thể” trong tiếng Việt.",
        "id": "hanngu-q2-b24-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “现在” có nghĩa nào?",
        "options": [
          "chạy bộ",
          "bây giờ",
          "tham gia",
          "có thời gian rảnh"
        ],
        "answer": "bây giờ",
        "explanation": "现在 (xiàn zài): bây giờ. Ví dụ: 现在可以报名吗？ — Bây giờ đăng ký được không?",
        "id": "hanngu-q2-b24-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “运动” có nghĩa nào?",
        "options": [
          "chạy bộ",
          "có thời gian rảnh",
          "có thể do điều kiện",
          "vận động/thể thao"
        ],
        "answer": "vận động/thể thao",
        "explanation": "运动 (yùn dòng): vận động/thể thao. Ví dụ: 跑步是我喜欢的运动。 — Chạy bộ là môn thể thao tôi thích.",
        "id": "hanngu-q2-b24-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “跑步” có nghĩa nào?",
        "options": [
          "muốn/nghĩ",
          "bây giờ",
          "có thể do điều kiện",
          "chạy bộ"
        ],
        "answer": "chạy bộ",
        "explanation": "跑步 (pǎo bù): chạy bộ. Ví dụ: 跑步是我喜欢的运动。 — Chạy bộ là môn thể thao tôi thích.",
        "id": "hanngu-q2-b24-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “能” có nghĩa nào?",
        "options": [
          "bây giờ",
          "đăng ký",
          "có thể do điều kiện",
          "muốn/nghĩ"
        ],
        "answer": "có thể do điều kiện",
        "explanation": "能 (néng): có thể do điều kiện. Ví dụ: 我今天不能参加。 — Hôm nay tôi không thể tham gia.",
        "id": "hanngu-q2-b24-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tham gia” (cān jiā). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "参加",
        "alternatives": [],
        "explanation": "参加 (cān jiā) nghĩa là tham gia. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b24-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bơi” (yóu yǒng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "游泳",
        "alternatives": [],
        "explanation": "游泳 (yóu yǒng) nghĩa là bơi. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b24-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Muốn học Thái Cực quyền: phân biệt kỹ năng và mong muốn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “能 gắn với điều kiện trong tình huống”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 24, mốc PDF 110. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b25",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 25",
    "title": "Bạn ấy học như thế nào: dùng 得",
    "subtitle": "她学得很好。",
    "minutes": 30,
    "order": 10,
    "objectives": [
      "Dùng mẫu “她学得很好。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Động từ + 得 + mô tả / Có tân ngữ: chọn một mẫu dễ luyện.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn ấy học như thế nào: dùng 得. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Động từ + 得 + mô tả.",
    "vocabulary": [
      {
        "id": "hnl-lex-b491a31050b2a743",
        "hanzi": "得",
        "pinyin": "de",
        "meaning": "trợ từ bổ ngữ",
        "example": "她汉语学得怎么样？",
        "examplePinyin": "tā hàn yǔ xué de zěn me yàng？",
        "exampleMeaning": "Bạn ấy học tiếng Trung thế nào?"
      },
      {
        "id": "hnl-lex-747cf6f38097a637",
        "hanzi": "认真",
        "pinyin": "rèn zhēn",
        "meaning": "chăm chỉ/nghiêm túc",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-212f1c72df1d1476",
        "hanzi": "快",
        "pinyin": "kuài",
        "meaning": "nhanh",
        "example": "她说得快吗？",
        "examplePinyin": "tā shuō de kuài ma？",
        "exampleMeaning": "Bạn ấy nói nhanh không?"
      },
      {
        "id": "hnl-lex-0d79d72aaca9489f",
        "hanzi": "慢",
        "pinyin": "màn",
        "meaning": "chậm",
        "example": "请说慢一点儿。",
        "examplePinyin": "qǐng shuō màn yì diǎnr。",
        "exampleMeaning": "Xin nói chậm một chút."
      },
      {
        "id": "hnl-lex-1d19858d5b40949f",
        "hanzi": "流利",
        "pinyin": "liú lì",
        "meaning": "trôi chảy",
        "example": "他说汉语说得很流利。",
        "examplePinyin": "tā shuō hàn yǔ shuō de hěn liú lì。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung rất trôi chảy."
      },
      {
        "id": "hnl-lex-ca2e0773fa0e87f5",
        "hanzi": "清楚",
        "pinyin": "qīng chǔ",
        "meaning": "rõ ràng",
        "example": "不太快，但是很清楚。",
        "examplePinyin": "bù tài kuài， dàn shì hěn qīng chǔ。",
        "exampleMeaning": "Không quá nhanh nhưng rất rõ."
      },
      {
        "id": "hnl-lex-56604927a0c2ed9e",
        "hanzi": "漂亮",
        "pinyin": "piào liàng",
        "meaning": "đẹp",
        "example": "这张照片很漂亮。",
        "examplePinyin": "zhè zhāng zhào piān hěn piào liàng。",
        "exampleMeaning": "Tấm ảnh này rất đẹp."
      },
      {
        "id": "hnl-lex-dade2228541d7463",
        "hanzi": "成绩",
        "pinyin": "chéng jì",
        "meaning": "kết quả học",
        "example": "他学习很努力，成绩不错。",
        "examplePinyin": "tā xué xí hěn nǔ lì， chéng jì bù cuò。",
        "exampleMeaning": "Bạn ấy học rất nỗ lực, kết quả khá tốt."
      },
      {
        "id": "hnl-lex-ea82379df9df7c1b",
        "hanzi": "努力",
        "pinyin": "nǔ lì",
        "meaning": "nỗ lực",
        "example": "他学习很努力，成绩不错。",
        "examplePinyin": "tā xué xí hěn nǔ lì， chéng jì bù cuò。",
        "exampleMeaning": "Bạn ấy học rất nỗ lực, kết quả khá tốt."
      },
      {
        "id": "hnl-lex-529a810ec48280d2",
        "hanzi": "不错",
        "pinyin": "bù cuò",
        "meaning": "khá tốt",
        "example": "他学习很努力，成绩不错。",
        "examplePinyin": "tā xué xí hěn nǔ lì， chéng jì bù cuò。",
        "exampleMeaning": "Bạn ấy học rất nỗ lực, kết quả khá tốt."
      },
      {
        "id": "hnl-lex-a5fa2ec92be4c84f",
        "hanzi": "说汉语",
        "pinyin": "shuō hàn yǔ",
        "meaning": "nói tiếng Trung",
        "example": "他说汉语说得很流利。",
        "examplePinyin": "tā shuō hàn yǔ shuō de hěn liú lì。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung rất trôi chảy."
      },
      {
        "id": "hnl-lex-8fad55eeb7206040",
        "hanzi": "唱歌",
        "pinyin": "chàng gē",
        "meaning": "hát",
        "example": "他很喜欢唱歌。",
        "examplePinyin": "tā hěn xǐ huān chàng gē。",
        "exampleMeaning": "Bạn ấy rất thích hát."
      }
    ],
    "grammar": [
      {
        "title": "Động từ + 得 + mô tả",
        "explanation": "学得很好 đánh giá cách hoặc mức độ học. Phân biệt 得 ở vị trí này với 的 trong 我的书. Đừng chỉ nhớ cùng âm de rồi dùng một chữ cho mọi chức năng.",
        "example": "她学得很好。",
        "translation": "Bạn ấy học rất tốt."
      },
      {
        "title": "Có tân ngữ: chọn một mẫu dễ luyện",
        "explanation": "Trong mẫu 他说汉语说得很流利, động từ được lặp để nối phần đánh giá. Ở giai đoạn này tập chắc mẫu rõ ràng rồi mới học cách rút gọn; không đặt cả chuỗi danh từ sau 得.",
        "example": "他说汉语说得很流利。",
        "translation": "Bạn ấy nói tiếng Trung rất trôi chảy."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "她汉语学得怎么样？",
        "pinyin": "tā hàn yǔ xué de zěn me yàng？",
        "meaning": "Bạn ấy học tiếng Trung thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "她学得很好。",
        "pinyin": "tā xué de hěn hǎo。",
        "meaning": "Bạn ấy học rất tốt."
      },
      {
        "speaker": "An",
        "hanzi": "她说得快吗？",
        "pinyin": "tā shuō de kuài ma？",
        "meaning": "Bạn ấy nói nhanh không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不太快，但是很清楚。",
        "pinyin": "bù tài kuài， dàn shì hěn qīng chǔ。",
        "meaning": "Không quá nhanh nhưng rất rõ."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 她学得很好, 得 nối điều gì?",
        "options": [
          "Người với vật sở hữu",
          "Hoạt động với phần đánh giá",
          "Hai lựa chọn trong câu hỏi"
        ],
        "answer": "Hoạt động với phần đánh giá",
        "explanation": "得 sau 学 dẫn phần mô tả việc học như thế nào.",
        "id": "hanngu-q2-b25-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "学得",
          "很好",
          "她"
        ],
        "answer": "她学得很好",
        "explanation": "Câu hoàn chỉnh: 她学得很好。 学得很好 đánh giá cách hoặc mức độ học. Phân biệt 得 ở vị trí này với 的 trong 我的书. Đừng chỉ nhớ cùng âm de rồi dùng một chữ cho mọi chức năng.",
        "id": "hanngu-q2-b25-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “得” có nghĩa nào?",
        "options": [
          "rõ ràng",
          "hát",
          "trợ từ bổ ngữ",
          "trôi chảy"
        ],
        "answer": "trợ từ bổ ngữ",
        "explanation": "得 (de): trợ từ bổ ngữ. Ví dụ: 她汉语学得怎么样？ — Bạn ấy học tiếng Trung thế nào?",
        "id": "hanngu-q2-b25-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “努力” có nghĩa nào?",
        "options": [
          "nói tiếng Trung",
          "rõ ràng",
          "nỗ lực",
          "chậm"
        ],
        "answer": "nỗ lực",
        "explanation": "努力 (nǔ lì): nỗ lực. Ví dụ: 他学习很努力，成绩不错。 — Bạn ấy học rất nỗ lực, kết quả khá tốt.",
        "id": "hanngu-q2-b25-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “成绩” có nghĩa nào?",
        "options": [
          "kết quả học",
          "trôi chảy",
          "nỗ lực",
          "chậm"
        ],
        "answer": "kết quả học",
        "explanation": "成绩 (chéng jì): kết quả học. Ví dụ: 他学习很努力，成绩不错。 — Bạn ấy học rất nỗ lực, kết quả khá tốt.",
        "id": "hanngu-q2-b25-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “漂亮” có nghĩa nào?",
        "options": [
          "kết quả học",
          "đẹp",
          "hát",
          "nhanh"
        ],
        "answer": "đẹp",
        "explanation": "漂亮 (piào liàng): đẹp. Ví dụ: 这张照片很漂亮。 — Tấm ảnh này rất đẹp.",
        "id": "hanngu-q2-b25-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “khá tốt” (bù cuò). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "不错",
        "alternatives": [],
        "explanation": "不错 (bù cuò) nghĩa là khá tốt. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b25-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “nhanh” (kuài). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "快",
        "alternatives": [],
        "explanation": "快 (kuài) nghĩa là nhanh. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b25-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn ấy học như thế nào: dùng 得”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Có tân ngữ: chọn một mẫu dễ luyện”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 25, mốc PDF 124. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b26",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 26",
    "title": "Bạn ấy đi đâu rồi: kể việc đã xảy ra",
    "subtitle": "我昨天去了图书馆。",
    "minutes": 30,
    "order": 11,
    "objectives": [
      "Dùng mẫu “我昨天去了图书馆。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 了 không phải đuôi quá khứ dùng cho mọi câu / 没 phủ định việc chưa/không xảy ra.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn ấy đi đâu rồi: kể việc đã xảy ra. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 了 không phải đuôi quá khứ dùng cho mọi câu.",
    "vocabulary": [
      {
        "id": "hnl-lex-8b2befdee9ef32db",
        "hanzi": "了",
        "pinyin": "le",
        "meaning": "trợ từ trong ngữ cảnh",
        "example": "你昨天去哪儿了？",
        "examplePinyin": "nǐ zuó tiān qù nǎr le？",
        "exampleMeaning": "Hôm qua bạn đi đâu?"
      },
      {
        "id": "hnl-lex-40cd6419c7c2fd49",
        "hanzi": "昨天",
        "pinyin": "zuó tiān",
        "meaning": "hôm qua",
        "example": "你昨天去哪儿了？",
        "examplePinyin": "nǐ zuó tiān qù nǎr le？",
        "exampleMeaning": "Hôm qua bạn đi đâu?"
      },
      {
        "id": "hnl-lex-0e0ec4846565e5bb",
        "hanzi": "已经",
        "pinyin": "yǐ jīng",
        "meaning": "đã",
        "example": "我已经从饭馆回来了。",
        "examplePinyin": "wǒ yǐ jīng cóng fàn guǎn huí lái le。",
        "exampleMeaning": "Tôi đã từ quán ăn về rồi."
      },
      {
        "id": "hnl-lex-6684bceb24b9821f",
        "hanzi": "饭馆",
        "pinyin": "fàn guǎn",
        "meaning": "quán ăn",
        "example": "我已经从饭馆回来了。",
        "examplePinyin": "wǒ yǐ jīng cóng fàn guǎn huí lái le。",
        "exampleMeaning": "Tôi đã từ quán ăn về rồi."
      },
      {
        "id": "hnl-lex-3360558a86b55f98",
        "hanzi": "电影",
        "pinyin": "diàn yǐng",
        "meaning": "phim",
        "example": "他们出去看电影了。",
        "examplePinyin": "tā men chū qù kàn diàn yǐng le。",
        "exampleMeaning": "Họ ra ngoài xem phim rồi."
      },
      {
        "id": "hnl-lex-9f02ba8e1e030526",
        "hanzi": "回来",
        "pinyin": "huí lái",
        "meaning": "trở về",
        "example": "我已经从饭馆回来了。",
        "examplePinyin": "wǒ yǐ jīng cóng fàn guǎn huí lái le。",
        "exampleMeaning": "Tôi đã từ quán ăn về rồi."
      },
      {
        "id": "hnl-lex-844d660dbae34d69",
        "hanzi": "出去",
        "pinyin": "chū qù",
        "meaning": "ra ngoài",
        "example": "他们出去看电影了。",
        "examplePinyin": "tā men chū qù kàn diàn yǐng le。",
        "exampleMeaning": "Họ ra ngoài xem phim rồi."
      },
      {
        "id": "hnl-lex-ac6cb8f24388c6c2",
        "hanzi": "找",
        "pinyin": "zhǎo",
        "meaning": "tìm",
        "example": "我肚子疼，想去医院找大夫。",
        "examplePinyin": "wǒ dǔ zi téng， xiǎng qù yī yuàn zhǎo dà fū。",
        "exampleMeaning": "Tôi đau bụng, muốn đến bệnh viện gặp bác sĩ."
      },
      {
        "id": "hnl-lex-b260321b9d15d0cb",
        "hanzi": "见面",
        "pinyin": "jiàn miàn",
        "meaning": "gặp mặt",
        "example": "我们昨天见面了，今天又打电话了。",
        "examplePinyin": "wǒ men zuó tiān jiàn miàn le， jīn tiān yòu dǎ diàn huà le。",
        "exampleMeaning": "Hôm qua chúng tôi gặp nhau, hôm nay lại gọi điện."
      },
      {
        "id": "hnl-lex-3ca358ea398796a8",
        "hanzi": "给",
        "pinyin": "gěi",
        "meaning": "cho/đưa",
        "example": "请给我这本书。",
        "examplePinyin": "qǐng gěi wǒ zhè běn shū。",
        "exampleMeaning": "Làm ơn đưa tôi quyển sách này."
      },
      {
        "id": "hnl-lex-66e219474df1e952",
        "hanzi": "打电话",
        "pinyin": "dǎ diàn huà",
        "meaning": "gọi điện",
        "example": "我们昨天见面了，今天又打电话了。",
        "examplePinyin": "wǒ men zuó tiān jiàn miàn le， jīn tiān yòu dǎ diàn huà le。",
        "exampleMeaning": "Hôm qua chúng tôi gặp nhau, hôm nay lại gọi điện."
      },
      {
        "id": "hnl-lex-16cde9dfcdde10c8",
        "hanzi": "还",
        "pinyin": "hái",
        "meaning": "còn/vẫn",
        "example": "你喜欢什么颜色，红的还是蓝的？",
        "examplePinyin": "nǐ xǐ huān shén me yán sè， hóng de hái shì lán de？",
        "exampleMeaning": "Bạn thích màu gì, đỏ hay xanh lam?"
      }
    ],
    "grammar": [
      {
        "title": "了 không phải đuôi quá khứ dùng cho mọi câu",
        "explanation": "Trong 我去了图书馆, 了 nhìn hoạt động đi như việc đã xảy ra. Có mốc 昨天 không đồng nghĩa câu nào cũng buộc có 了; hãy học theo ý hoàn thành và ngữ cảnh, không dịch một dấu thời gian thành một trợ từ.",
        "example": "我昨天去了图书馆。",
        "translation": "Hôm qua tôi đã đến thư viện."
      },
      {
        "title": "没 phủ định việc chưa/không xảy ra",
        "explanation": "Trong mẫu cơ bản, 我没去图书馆 phủ định việc đi đã được hỏi đến; không giữ 了 như trong câu khẳng định tương ứng. Phân biệt với 不去 nói ý định hoặc thói quen tùy ngữ cảnh.",
        "example": "我昨天没去学校。",
        "translation": "Hôm qua tôi không đến trường."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你昨天去哪儿了？",
        "pinyin": "nǐ zuó tiān qù nǎr le？",
        "meaning": "Hôm qua bạn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我去图书馆了。",
        "pinyin": "wǒ qù tú shū guǎn le。",
        "meaning": "Tôi đến thư viện."
      },
      {
        "speaker": "An",
        "hanzi": "你见到老师了吗？",
        "pinyin": "nǐ jiàn dào lǎo shī le ma？",
        "meaning": "Bạn đã gặp giáo viên chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "没有。",
        "pinyin": "méi yǒu。",
        "meaning": "Chưa/không gặp."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu phủ định việc hôm qua đến trường.",
        "options": [
          "我昨天不去了学校了。",
          "我昨天是学校。",
          "我昨天没去学校。"
        ],
        "answer": "我昨天没去学校。",
        "explanation": "Mẫu phủ định sự việc đã xảy ra dùng 没/没有, không chép nguyên 了 của câu khẳng định.",
        "id": "hanngu-q2-b26-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "图书馆",
          "昨天去了",
          "我"
        ],
        "answer": "我昨天去了图书馆",
        "explanation": "Câu hoàn chỉnh: 我昨天去了图书馆。 Trong 我去了图书馆, 了 nhìn hoạt động đi như việc đã xảy ra. Có mốc 昨天 không đồng nghĩa câu nào cũng buộc có 了; hãy học theo ý hoàn thành và ngữ cảnh, không dịch một dấu thời gian thành một trợ từ.",
        "id": "hanngu-q2-b26-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “还” có nghĩa nào?",
        "options": [
          "còn/vẫn",
          "gặp mặt",
          "ra ngoài",
          "gọi điện"
        ],
        "answer": "còn/vẫn",
        "explanation": "还 (hái): còn/vẫn. Ví dụ: 你喜欢什么颜色，红的还是蓝的？ — Bạn thích màu gì, đỏ hay xanh lam?",
        "id": "hanngu-q2-b26-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “昨天” có nghĩa nào?",
        "options": [
          "trở về",
          "cho/đưa",
          "còn/vẫn",
          "hôm qua"
        ],
        "answer": "hôm qua",
        "explanation": "昨天 (zuó tiān): hôm qua. Ví dụ: 你昨天去哪儿了？ — Hôm qua bạn đi đâu?",
        "id": "hanngu-q2-b26-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “出去” có nghĩa nào?",
        "options": [
          "cho/đưa",
          "trở về",
          "ra ngoài",
          "tìm"
        ],
        "answer": "ra ngoài",
        "explanation": "出去 (chū qù): ra ngoài. Ví dụ: 他们出去看电影了。 — Họ ra ngoài xem phim rồi.",
        "id": "hanngu-q2-b26-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “见面” có nghĩa nào?",
        "options": [
          "ra ngoài",
          "cho/đưa",
          "gọi điện",
          "gặp mặt"
        ],
        "answer": "gặp mặt",
        "explanation": "见面 (jiàn miàn): gặp mặt. Ví dụ: 我们昨天见面了，今天又打电话了。 — Hôm qua chúng tôi gặp nhau, hôm nay lại gọi điện.",
        "id": "hanngu-q2-b26-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “trở về” (huí lái). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "回来",
        "alternatives": [],
        "explanation": "回来 (huí lái) nghĩa là trở về. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b26-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “gọi điện” (dǎ diàn huà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "打电话",
        "alternatives": [],
        "explanation": "打电话 (dǎ diàn huà) nghĩa là gọi điện. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b26-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn ấy đi đâu rồi: kể việc đã xảy ra”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “没 phủ định việc chưa/không xảy ra”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 26, mốc PDF 138. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b27",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 27",
    "title": "Kể tình trạng đã thay đổi",
    "subtitle": "你怎么了？",
    "minutes": 30,
    "order": 12,
    "objectives": [
      "Dùng mẫu “你怎么了？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 怎么了 hỏi tình trạng vừa được chú ý / 了 cuối câu có thể báo thay đổi.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: kể tình trạng đã thay đổi. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 怎么了 hỏi tình trạng vừa được chú ý.",
    "vocabulary": [
      {
        "id": "hnl-lex-33c56a48c65d11dc",
        "hanzi": "哭",
        "pinyin": "kū",
        "meaning": "khóc",
        "example": "她哭了。",
        "examplePinyin": "tā kū le。",
        "exampleMeaning": "Bạn ấy bật khóc rồi."
      },
      {
        "id": "hnl-lex-7f1417246ea699fc",
        "hanzi": "疼",
        "pinyin": "téng",
        "meaning": "đau",
        "example": "我肚子疼，想去医院找大夫。",
        "examplePinyin": "wǒ dǔ zi téng， xiǎng qù yī yuàn zhǎo dà fū。",
        "exampleMeaning": "Tôi đau bụng, muốn đến bệnh viện gặp bác sĩ."
      },
      {
        "id": "hnl-lex-c348abd09b1df593",
        "hanzi": "肚子",
        "pinyin": "dǔ zi",
        "meaning": "bụng",
        "example": "我肚子疼，想去医院找大夫。",
        "examplePinyin": "wǒ dǔ zi téng， xiǎng qù yī yuàn zhǎo dà fū。",
        "exampleMeaning": "Tôi đau bụng, muốn đến bệnh viện gặp bác sĩ."
      },
      {
        "id": "hnl-lex-c20825e5c5111deb",
        "hanzi": "舒服",
        "pinyin": "shū fu",
        "meaning": "thoải mái/dễ chịu",
        "example": "我不太舒服。",
        "examplePinyin": "wǒ bù tài shū fú。",
        "exampleMeaning": "Tôi không được khỏe."
      },
      {
        "id": "hnl-lex-5739224b9d702dab",
        "hanzi": "医院",
        "pinyin": "yī yuàn",
        "meaning": "bệnh viện",
        "example": "我想去医院。",
        "examplePinyin": "wǒ xiǎng qù yī yuàn。",
        "exampleMeaning": "Tôi muốn đến bệnh viện."
      },
      {
        "id": "hnl-lex-7b21a168143318a3",
        "hanzi": "大夫",
        "pinyin": "dài fu",
        "meaning": "bác sĩ",
        "example": "我肚子疼，想去医院找大夫。",
        "examplePinyin": "wǒ dǔ zi téng， xiǎng qù yī yuàn zhǎo dà fū。",
        "exampleMeaning": "Tôi đau bụng, muốn đến bệnh viện gặp bác sĩ."
      },
      {
        "id": "hnl-lex-9ee7226747839efa",
        "hanzi": "药",
        "pinyin": "yào",
        "meaning": "thuốc",
        "example": "中药和西药都在这里。",
        "examplePinyin": "zhōng yào hé xī yào dōu zài zhè lǐ。",
        "exampleMeaning": "Thuốc Đông y và thuốc Tây đều ở đây."
      },
      {
        "id": "hnl-lex-d43def2a79980e74",
        "hanzi": "片",
        "pinyin": "piàn",
        "meaning": "viên/lát",
        "example": "照片里有我的家人。",
        "examplePinyin": "zhào piān lǐ yǒu wǒ de jiā rén。",
        "exampleMeaning": "Trong ảnh có người nhà của tôi."
      },
      {
        "id": "hnl-lex-34b1a781b7b349d8",
        "hanzi": "感冒",
        "pinyin": "gǎn mào",
        "meaning": "cảm",
        "example": "他感冒了，今天在家休息。",
        "examplePinyin": "tā gǎn mào le， jīn tiān zài jiā xiū xī。",
        "exampleMeaning": "Bạn ấy bị cảm, hôm nay nghỉ ở nhà."
      },
      {
        "id": "hnl-lex-f38b105bf5390670",
        "hanzi": "怎么了",
        "pinyin": "zěn me le",
        "meaning": "có chuyện gì vậy",
        "example": "你怎么了？",
        "examplePinyin": "nǐ zěn me le？",
        "exampleMeaning": "Bạn sao vậy?"
      },
      {
        "id": "hnl-lex-c5036e142cc7625c",
        "hanzi": "休息",
        "pinyin": "xiū xī",
        "meaning": "nghỉ ngơi",
        "example": "他感冒了，今天在家休息。",
        "examplePinyin": "tā gǎn mào le， jīn tiān zài jiā xiū xī。",
        "exampleMeaning": "Bạn ấy bị cảm, hôm nay nghỉ ở nhà."
      },
      {
        "id": "hnl-lex-932a0dca93fa51bd",
        "hanzi": "突然",
        "pinyin": "tū rán",
        "meaning": "đột nhiên",
        "example": "他突然哭了。",
        "examplePinyin": "tā tū rán kū le。",
        "exampleMeaning": "Bạn ấy đột nhiên khóc."
      }
    ],
    "grammar": [
      {
        "title": "怎么了 hỏi tình trạng vừa được chú ý",
        "explanation": "你怎么了 hỏi chuyện gì đang xảy ra với người đối thoại. Trong bài, chỉ luyện cách trình bày tình trạng và nhờ giúp; không dùng hội thoại làm hướng dẫn tự chẩn đoán hay uống thuốc.",
        "example": "你怎么了？",
        "translation": "Bạn sao vậy?"
      },
      {
        "title": "了 cuối câu có thể báo thay đổi",
        "explanation": "她哭了 tập trung vào việc trạng thái đã đổi sang khóc. Đừng mặc định mọi 了 đều có một bản dịch “đã” giống nhau. Trong đoạn ngắn, nhìn sự chuyển trạng thái trước khi dịch cả câu cho tự nhiên.",
        "example": "她哭了。",
        "translation": "Bạn ấy bật khóc rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你怎么了？",
        "pinyin": "nǐ zěn me le？",
        "meaning": "Bạn sao vậy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我不太舒服。",
        "pinyin": "wǒ bù tài shū fú。",
        "meaning": "Tôi không được khỏe."
      },
      {
        "speaker": "An",
        "hanzi": "你想去哪儿？",
        "pinyin": "nǐ xiǎng qù nǎr？",
        "meaning": "Bạn muốn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我想去医院。",
        "pinyin": "wǒ xiǎng qù yī yuàn。",
        "meaning": "Tôi muốn đến bệnh viện."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong tình huống người bạn trông không ổn, câu nào hỏi thăm phù hợp?",
        "options": [
          "你是哪斤？",
          "你多少钱？",
          "你怎么了？"
        ],
        "answer": "你怎么了？",
        "explanation": "怎么了 hỏi tình trạng; bài tập chỉ luyện diễn đạt, không đưa lời khuyên điều trị.",
        "id": "hanngu-q2-b27-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "她",
          "了",
          "哭"
        ],
        "answer": "她哭了",
        "explanation": "Câu hoàn chỉnh: 她哭了。 你怎么了 hỏi chuyện gì đang xảy ra với người đối thoại. Trong bài, chỉ luyện cách trình bày tình trạng và nhờ giúp; không dùng hội thoại làm hướng dẫn tự chẩn đoán hay uống thuốc.",
        "id": "hanngu-q2-b27-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “哭” có nghĩa nào?",
        "options": [
          "bụng",
          "thuốc",
          "khóc",
          "đột nhiên"
        ],
        "answer": "khóc",
        "explanation": "哭 (kū): khóc. Ví dụ: 她哭了。 — Bạn ấy bật khóc rồi.",
        "id": "hanngu-q2-b27-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “舒服” có nghĩa nào?",
        "options": [
          "bụng",
          "đột nhiên",
          "nghỉ ngơi",
          "thoải mái/dễ chịu"
        ],
        "answer": "thoải mái/dễ chịu",
        "explanation": "舒服 (shū fu): thoải mái/dễ chịu. Ví dụ: 我不太舒服。 — Tôi không được khỏe.",
        "id": "hanngu-q2-b27-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “大夫” có nghĩa nào?",
        "options": [
          "đột nhiên",
          "bệnh viện",
          "bác sĩ",
          "thuốc"
        ],
        "answer": "bác sĩ",
        "explanation": "大夫 (dài fu): bác sĩ. Ví dụ: 我肚子疼，想去医院找大夫。 — Tôi đau bụng, muốn đến bệnh viện gặp bác sĩ.",
        "id": "hanngu-q2-b27-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “片” có nghĩa nào?",
        "options": [
          "bụng",
          "viên/lát",
          "thuốc",
          "đau"
        ],
        "answer": "viên/lát",
        "explanation": "片 (piàn): viên/lát. Ví dụ: 照片里有我的家人。 — Trong ảnh có người nhà của tôi.",
        "id": "hanngu-q2-b27-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bệnh viện” (yī yuàn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "医院",
        "alternatives": [],
        "explanation": "医院 (yī yuàn) nghĩa là bệnh viện. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b27-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “nghỉ ngơi” (xiū xī). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "休息",
        "alternatives": [],
        "explanation": "休息 (xiū xī) nghĩa là nghỉ ngơi. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b27-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Kể tình trạng đã thay đổi”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “了 cuối câu có thể báo thay đổi”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 27, mốc PDF 155. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b28",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 28",
    "title": "Ăn sáng xong thì đến lớp",
    "subtitle": "我吃了早饭就来了。",
    "minutes": 30,
    "order": 13,
    "objectives": [
      "Dùng mẫu “我吃了早饭就来了。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Động tác trước + 了 + 就 + động tác sau / 先…然后… giúp kể rõ thứ tự.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: ăn sáng xong thì đến lớp. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Động tác trước + 了 + 就 + động tác sau.",
    "vocabulary": [
      {
        "id": "hnl-lex-75f636cd346d54f4",
        "hanzi": "早饭",
        "pinyin": "zǎo fàn",
        "meaning": "bữa sáng",
        "example": "我吃了早饭就来了。",
        "examplePinyin": "wǒ chī le zǎo fàn jiù lái le。",
        "exampleMeaning": "Tôi ăn sáng xong thì đến."
      },
      {
        "id": "hnl-lex-fdf53faf178ff78b",
        "hanzi": "午饭",
        "pinyin": "wǔ fàn",
        "meaning": "bữa trưa",
        "example": "吃完午饭以后，我去图书馆。",
        "examplePinyin": "chī wán wǔ fàn yǐ hòu， wǒ qù tú shū guǎn。",
        "exampleMeaning": "Ăn trưa xong tôi đến thư viện."
      },
      {
        "id": "hnl-lex-32e51ed29d0d03b8",
        "hanzi": "晚饭",
        "pinyin": "wǎn fàn",
        "meaning": "bữa tối",
        "example": "我在家吃晚饭。",
        "examplePinyin": "wǒ zài jiā chī wǎn fàn。",
        "exampleMeaning": "Tôi ăn tối ở nhà."
      },
      {
        "id": "hnl-lex-353512158661fbac",
        "hanzi": "就",
        "pinyin": "jiù",
        "meaning": "thì/liền",
        "example": "我吃了早饭就来了。",
        "examplePinyin": "wǒ chī le zǎo fàn jiù lái le。",
        "exampleMeaning": "Tôi ăn sáng xong thì đến."
      },
      {
        "id": "hnl-lex-d2e8c70658b7b3c4",
        "hanzi": "先",
        "pinyin": "xiān",
        "meaning": "trước",
        "example": "你先复习还是先吃饭？",
        "examplePinyin": "nǐ xiān fù xí hái shì xiān chī fàn？",
        "exampleMeaning": "Bạn ôn bài trước hay ăn trước?"
      },
      {
        "id": "hnl-lex-ff4c5d4082e9b39a",
        "hanzi": "然后",
        "pinyin": "rán hòu",
        "meaning": "sau đó",
        "example": "我先吃饭，然后复习。",
        "examplePinyin": "wǒ xiān chī fàn， rán hòu fù xí。",
        "exampleMeaning": "Tôi ăn trước, rồi ôn bài."
      },
      {
        "id": "hnl-lex-f62562b4ce8ca2fc",
        "hanzi": "以后",
        "pinyin": "yǐ hòu",
        "meaning": "sau khi/về sau",
        "example": "上课以后，我们开始练习。",
        "examplePinyin": "shàng kè yǐ hòu， wǒ men kāi shǐ liàn xí。",
        "exampleMeaning": "Sau khi vào học, chúng tôi bắt đầu luyện tập."
      },
      {
        "id": "hnl-lex-f20ec4bcffe832fe",
        "hanzi": "洗",
        "pinyin": "xǐ",
        "meaning": "rửa",
        "example": "先洗手，然后吃饭。",
        "examplePinyin": "xiān xǐ shǒu， rán hòu chī fàn。",
        "exampleMeaning": "Rửa tay trước, rồi ăn cơm."
      },
      {
        "id": "hnl-lex-0aac130fcd53cc45",
        "hanzi": "手",
        "pinyin": "shǒu",
        "meaning": "tay",
        "example": "先洗手，然后吃饭。",
        "examplePinyin": "xiān xǐ shǒu， rán hòu chī fàn。",
        "exampleMeaning": "Rửa tay trước, rồi ăn cơm."
      },
      {
        "id": "hnl-lex-cc5fdbf0fa121600",
        "hanzi": "吃完",
        "pinyin": "chī wán",
        "meaning": "ăn xong",
        "example": "吃完午饭以后，我去图书馆。",
        "examplePinyin": "chī wán wǔ fàn yǐ hòu， wǒ qù tú shū guǎn。",
        "exampleMeaning": "Ăn trưa xong tôi đến thư viện."
      },
      {
        "id": "hnl-lex-d858463730dc2390",
        "hanzi": "上课",
        "pinyin": "shàng kè",
        "meaning": "vào học",
        "example": "上课以后，我们开始练习。",
        "examplePinyin": "shàng kè yǐ hòu， wǒ men kāi shǐ liàn xí。",
        "exampleMeaning": "Sau khi vào học, chúng tôi bắt đầu luyện tập."
      },
      {
        "id": "hnl-lex-b9f2cd21292cd32d",
        "hanzi": "以前",
        "pinyin": "yǐ qián",
        "meaning": "trước khi",
        "example": "上课以前，我先复习。",
        "examplePinyin": "shàng kè yǐ qián， wǒ xiān fù xí。",
        "exampleMeaning": "Trước khi vào học, tôi ôn bài trước."
      }
    ],
    "grammar": [
      {
        "title": "Động tác trước + 了 + 就 + động tác sau",
        "explanation": "吃了早饭就来 cho thấy hai việc nối tiếp. Không hiểu 就 luôn là “chỉ”; nghĩa và chức năng phải đọc trong cả mẫu. Khi kể thứ tự, xác định việc nào xảy ra trước.",
        "example": "我吃了早饭就来了。",
        "translation": "Tôi ăn sáng xong thì đến đây."
      },
      {
        "title": "先…然后… giúp kể rõ thứ tự",
        "explanation": "先洗手，然后吃饭 nêu hai bước tuần tự. Dùng nó khi cần hướng dẫn hoặc kể rõ từng bước, nhưng không thêm 了 sau mọi động từ một cách máy móc.",
        "example": "先洗手，然后吃饭。",
        "translation": "Rửa tay trước, rồi ăn cơm."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你什么时候来的？",
        "pinyin": "nǐ shén me shí hòu lái de？",
        "meaning": "Bạn đến lúc nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我吃了早饭就来了。",
        "pinyin": "wǒ chī le zǎo fàn jiù lái le。",
        "meaning": "Tôi ăn sáng xong thì đến."
      },
      {
        "speaker": "An",
        "hanzi": "你先复习还是先吃饭？",
        "pinyin": "nǐ xiān fù xí hái shì xiān chī fàn？",
        "meaning": "Bạn ôn bài trước hay ăn trước?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我先吃饭，然后复习。",
        "pinyin": "wǒ xiān chī fàn， rán hòu fù xí。",
        "meaning": "Tôi ăn trước, rồi ôn bài."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 先洗手，然后吃饭, việc nào trước?",
        "options": [
          "Hai việc được nói là luôn đồng thời",
          "Ăn cơm",
          "Rửa tay"
        ],
        "answer": "Rửa tay",
        "explanation": "先 đặt việc trước, 然后 dẫn việc tiếp theo.",
        "id": "hanngu-q2-b28-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我",
          "就来了",
          "吃了早饭"
        ],
        "answer": "我吃了早饭就来了",
        "explanation": "Câu hoàn chỉnh: 我吃了早饭就来了。 吃了早饭就来 cho thấy hai việc nối tiếp. Không hiểu 就 luôn là “chỉ”; nghĩa và chức năng phải đọc trong cả mẫu. Khi kể thứ tự, xác định việc nào xảy ra trước.",
        "id": "hanngu-q2-b28-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “晚饭” có nghĩa nào?",
        "options": [
          "bữa tối",
          "sau khi/về sau",
          "vào học",
          "bữa trưa"
        ],
        "answer": "bữa tối",
        "explanation": "晚饭 (wǎn fàn): bữa tối. Ví dụ: 我在家吃晚饭。 — Tôi ăn tối ở nhà.",
        "id": "hanngu-q2-b28-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “然后” có nghĩa nào?",
        "options": [
          "thì/liền",
          "sau đó",
          "bữa sáng",
          "rửa"
        ],
        "answer": "sau đó",
        "explanation": "然后 (rán hòu): sau đó. Ví dụ: 我先吃饭，然后复习。 — Tôi ăn trước, rồi ôn bài.",
        "id": "hanngu-q2-b28-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “以前” có nghĩa nào?",
        "options": [
          "sau khi/về sau",
          "ăn xong",
          "trước khi",
          "bữa tối"
        ],
        "answer": "trước khi",
        "explanation": "以前 (yǐ qián): trước khi. Ví dụ: 上课以前，我先复习。 — Trước khi vào học, tôi ôn bài trước.",
        "id": "hanngu-q2-b28-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “上课” có nghĩa nào?",
        "options": [
          "trước khi",
          "sau khi/về sau",
          "vào học",
          "sau đó"
        ],
        "answer": "vào học",
        "explanation": "上课 (shàng kè): vào học. Ví dụ: 上课以后，我们开始练习。 — Sau khi vào học, chúng tôi bắt đầu luyện tập.",
        "id": "hanngu-q2-b28-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bữa trưa” (wǔ fàn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "午饭",
        "alternatives": [],
        "explanation": "午饭 (wǔ fàn) nghĩa là bữa trưa. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b28-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tay” (shǒu). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "手",
        "alternatives": [],
        "explanation": "手 (shǒu) nghĩa là tay. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b28-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Ăn sáng xong thì đến lớp”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “先…然后… giúp kể rõ thứ tự”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 28, mốc PDF 171. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b29",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 29",
    "title": "Làm đúng, nghe hiểu: nhìn vào kết quả",
    "subtitle": "我都做对了。",
    "minutes": 30,
    "order": 14,
    "objectives": [
      "Dùng mẫu “我都做对了。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Động từ + kết quả / 没 + động từ kết quả.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: làm đúng, nghe hiểu: nhìn vào kết quả. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Động từ + kết quả.",
    "vocabulary": [
      {
        "id": "hnl-lex-f6ad57b9c3214a6b",
        "hanzi": "对",
        "pinyin": "duì",
        "meaning": "đúng",
        "example": "我都做对了。",
        "examplePinyin": "wǒ dōu zuò duì le。",
        "exampleMeaning": "Tôi đã làm đúng hết rồi."
      },
      {
        "id": "hnl-lex-8542a8327a6319c2",
        "hanzi": "错",
        "pinyin": "cuò",
        "meaning": "sai",
        "example": "做完了，但是有一题做错了。",
        "examplePinyin": "zuò wán le， dàn shì yǒu yī tí zuò cuò le。",
        "exampleMeaning": "Xong rồi nhưng có một câu làm sai."
      },
      {
        "id": "hnl-lex-35920c8cc5dabb50",
        "hanzi": "懂",
        "pinyin": "dǒng",
        "meaning": "hiểu",
        "example": "现在听懂了吗？",
        "examplePinyin": "xiàn zài tīng dǒng le ma？",
        "exampleMeaning": "Bây giờ đã nghe hiểu chưa?"
      },
      {
        "id": "hnl-lex-add573eb377d81f7",
        "hanzi": "完",
        "pinyin": "wán",
        "meaning": "xong",
        "example": "作业做完了吗？",
        "examplePinyin": "zuò yè zuò wán le ma？",
        "exampleMeaning": "Bạn làm xong bài tập chưa?"
      },
      {
        "id": "hnl-lex-76d879c5e16d7e81",
        "hanzi": "作业",
        "pinyin": "zuò yè",
        "meaning": "bài tập về nhà",
        "example": "作业做完了吗？",
        "examplePinyin": "zuò yè zuò wán le ma？",
        "exampleMeaning": "Bạn làm xong bài tập chưa?"
      },
      {
        "id": "hnl-lex-c4c62217caea735d",
        "hanzi": "题",
        "pinyin": "tí",
        "meaning": "đề/câu hỏi",
        "example": "做完了，但是有一题做错了。",
        "examplePinyin": "zuò wán le， dàn shì yǒu yī tí zuò cuò le。",
        "exampleMeaning": "Xong rồi nhưng có một câu làm sai."
      },
      {
        "id": "hnl-lex-1b3e6287ae90241a",
        "hanzi": "找到",
        "pinyin": "zhǎo dào",
        "meaning": "tìm thấy",
        "example": "我找到这本书了。",
        "examplePinyin": "wǒ zhǎo dào zhè běn shū le。",
        "exampleMeaning": "Tôi tìm thấy quyển sách này rồi."
      },
      {
        "id": "hnl-lex-595ec7fef63b3d39",
        "hanzi": "听懂",
        "pinyin": "tīng dǒng",
        "meaning": "nghe hiểu",
        "example": "现在听懂了吗？",
        "examplePinyin": "xiàn zài tīng dǒng le ma？",
        "exampleMeaning": "Bây giờ đã nghe hiểu chưa?"
      },
      {
        "id": "hnl-lex-fead93371ae96dbd",
        "hanzi": "看见",
        "pinyin": "kàn jiàn",
        "meaning": "nhìn thấy",
        "example": "我看见老师了。",
        "examplePinyin": "wǒ kàn jiàn lǎo shī le。",
        "exampleMeaning": "Tôi nhìn thấy giáo viên rồi."
      },
      {
        "id": "hnl-lex-739ea43223799bcf",
        "hanzi": "写完",
        "pinyin": "xiě wán",
        "meaning": "viết xong",
        "example": "我已经写完了作业，请你检查一下。",
        "examplePinyin": "wǒ yǐ jīng xiě wán le zuò yè， qǐng nǐ jiǎn chá yī xià。",
        "exampleMeaning": "Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp."
      },
      {
        "id": "hnl-lex-86db445d75206bb9",
        "hanzi": "做完",
        "pinyin": "zuò wán",
        "meaning": "làm xong",
        "example": "作业做完了吗？",
        "examplePinyin": "zuò yè zuò wán le ma？",
        "exampleMeaning": "Bạn làm xong bài tập chưa?"
      },
      {
        "id": "hnl-lex-5739dd705f55324c",
        "hanzi": "检查",
        "pinyin": "jiǎn chá",
        "meaning": "kiểm tra",
        "example": "我已经写完了作业，请你检查一下。",
        "examplePinyin": "wǒ yǐ jīng xiě wán le zuò yè， qǐng nǐ jiǎn chá yī xià。",
        "exampleMeaning": "Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp."
      }
    ],
    "grammar": [
      {
        "title": "Động từ + kết quả",
        "explanation": "做对 nói làm ra kết quả đúng; 做完 chỉ nói làm xong. Một việc có thể đã xong mà vẫn sai. Đọc bổ ngữ để biết người nói đang nhấn hoàn thành hay tính đúng/sai.",
        "example": "我都做对了。",
        "translation": "Tôi đã làm đúng hết rồi."
      },
      {
        "title": "没 + động từ kết quả",
        "explanation": "没听懂 là chưa/không nghe hiểu trong tình huống được nói đến. Đừng đánh đồng 听了 với 听懂了: nghe một lần chưa chứng minh đã hiểu. Học các cặp nghe–hiểu, tìm–thấy qua tình huống riêng.",
        "example": "我没听懂。",
        "translation": "Tôi chưa nghe hiểu."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "作业做完了吗？",
        "pinyin": "zuò yè zuò wán le ma？",
        "meaning": "Bạn làm xong bài tập chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "做完了，但是有一题做错了。",
        "pinyin": "zuò wán le， dàn shì yǒu yī tí zuò cuò le。",
        "meaning": "Xong rồi nhưng có một câu làm sai."
      },
      {
        "speaker": "An",
        "hanzi": "现在听懂了吗？",
        "pinyin": "xiàn zài tīng dǒng le ma？",
        "meaning": "Bây giờ đã nghe hiểu chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "听懂了。",
        "pinyin": "tīng dǒng le。",
        "meaning": "Đã hiểu rồi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "做完 và 做对 khác nhau chủ yếu ở đâu?",
        "options": [
          "Xong việc và kết quả đúng",
          "Hai từ luôn đồng nghĩa",
          "Một từ chỉ giá tiền"
        ],
        "answer": "Xong việc và kết quả đúng",
        "explanation": "完 nói hoàn tất; 对 nói kết quả đúng, hai điều không tự suy ra nhau.",
        "id": "hanngu-q2-b29-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "作业了",
          "我",
          "做完"
        ],
        "answer": "我做完作业了",
        "explanation": "Câu hoàn chỉnh: 我做完作业了。 做对 nói làm ra kết quả đúng; 做完 chỉ nói làm xong. Một việc có thể đã xong mà vẫn sai. Đọc bổ ngữ để biết người nói đang nhấn hoàn thành hay tính đúng/sai.",
        "id": "hanngu-q2-b29-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “检查” có nghĩa nào?",
        "options": [
          "nhìn thấy",
          "sai",
          "tìm thấy",
          "kiểm tra"
        ],
        "answer": "kiểm tra",
        "explanation": "检查 (jiǎn chá): kiểm tra. Ví dụ: 我已经写完了作业，请你检查一下。 — Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp.",
        "id": "hanngu-q2-b29-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “题” có nghĩa nào?",
        "options": [
          "kiểm tra",
          "đề/câu hỏi",
          "tìm thấy",
          "bài tập về nhà"
        ],
        "answer": "đề/câu hỏi",
        "explanation": "题 (tí): đề/câu hỏi. Ví dụ: 做完了，但是有一题做错了。 — Xong rồi nhưng có một câu làm sai.",
        "id": "hanngu-q2-b29-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “对” có nghĩa nào?",
        "options": [
          "đúng",
          "bài tập về nhà",
          "viết xong",
          "nhìn thấy"
        ],
        "answer": "đúng",
        "explanation": "对 (duì): đúng. Ví dụ: 我都做对了。 — Tôi đã làm đúng hết rồi.",
        "id": "hanngu-q2-b29-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “错” có nghĩa nào?",
        "options": [
          "đề/câu hỏi",
          "tìm thấy",
          "xong",
          "sai"
        ],
        "answer": "sai",
        "explanation": "错 (cuò): sai. Ví dụ: 做完了，但是有一题做错了。 — Xong rồi nhưng có một câu làm sai.",
        "id": "hanngu-q2-b29-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bài tập về nhà” (zuò yè). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "作业",
        "alternatives": [],
        "explanation": "作业 (zuò yè) nghĩa là bài tập về nhà. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b29-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “làm xong” (zuò wán). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "做完",
        "alternatives": [],
        "explanation": "做完 (zuò wán) nghĩa là làm xong. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b29-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Làm đúng, nghe hiểu: nhìn vào kết quả”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “没 + động từ kết quả”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 29, mốc PDF 185. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-b30",
    "level": 2,
    "unit": "Quyển 2 · Bài nguồn 30",
    "title": "Đã học được bao lâu: thời lượng và sự tiếp diễn",
    "subtitle": "你学了多长时间？",
    "minutes": 30,
    "order": 15,
    "objectives": [
      "Dùng mẫu “你学了多长时间？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Thời điểm khác thời lượng / 了…了 có thể diễn tả việc kéo dài đến hiện tại.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: đã học được bao lâu: thời lượng và sự tiếp diễn. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Thời điểm khác thời lượng.",
    "vocabulary": [
      {
        "id": "hnl-lex-414b31187cf41845",
        "hanzi": "多",
        "pinyin": "duō",
        "meaning": "ngoài/hơn trong số lượng",
        "example": "你来这儿多久了？",
        "examplePinyin": "nǐ lái zhèr duō jiǔ le？",
        "exampleMeaning": "Bạn đến đây được bao lâu rồi?"
      },
      {
        "id": "hnl-lex-e9daeb6fdabe4437",
        "hanzi": "月",
        "pinyin": "yuè",
        "meaning": "tháng",
        "example": "两个多月了。",
        "examplePinyin": "liǎng gè duō yuè le。",
        "exampleMeaning": "Hơn hai tháng rồi."
      },
      {
        "id": "hnl-lex-53256981e5bf6948",
        "hanzi": "小时",
        "pinyin": "xiǎo shí",
        "meaning": "giờ thời lượng",
        "example": "两个小时。",
        "examplePinyin": "liǎng gè xiǎo shí。",
        "exampleMeaning": "Hai giờ."
      },
      {
        "id": "hnl-lex-f542be1aef4ec54a",
        "hanzi": "分钟",
        "pinyin": "fēn zhōng",
        "meaning": "phút",
        "example": "请等我五分钟。",
        "examplePinyin": "qǐng děng wǒ wǔ fēn zhōng。",
        "exampleMeaning": "Xin đợi tôi năm phút."
      },
      {
        "id": "hnl-lex-0e48f31189099175",
        "hanzi": "年",
        "pinyin": "nián",
        "meaning": "năm",
        "example": "今年我二十岁，明年大学毕业。",
        "examplePinyin": "jīn nián wǒ èr shí suì， míng nián dà xué bì yè。",
        "exampleMeaning": "Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học."
      },
      {
        "id": "hnl-lex-e22081c9c0b5381b",
        "hanzi": "多久",
        "pinyin": "duō jiǔ",
        "meaning": "bao lâu",
        "example": "你来这儿多久了？",
        "examplePinyin": "nǐ lái zhèr duō jiǔ le？",
        "exampleMeaning": "Bạn đến đây được bao lâu rồi?"
      },
      {
        "id": "hnl-lex-eedc1cbd4742021c",
        "hanzi": "多长时间",
        "pinyin": "duō zhǎng shí jiān",
        "meaning": "thời gian bao lâu",
        "example": "你每天学习多长时间？",
        "examplePinyin": "nǐ měi tiān xué xí duō zhǎng shí jiān？",
        "exampleMeaning": "Mỗi ngày bạn học bao lâu?"
      },
      {
        "id": "hnl-lex-74c716df07c36be4",
        "hanzi": "两个月",
        "pinyin": "liǎng gè yuè",
        "meaning": "hai tháng",
        "example": "我来这儿两个月了。",
        "examplePinyin": "wǒ lái zhèr liǎng gè yuè le。",
        "exampleMeaning": "Tôi đến đây được hai tháng rồi."
      },
      {
        "id": "hnl-lex-d4cb4e345308ebaa",
        "hanzi": "一直",
        "pinyin": "yì zhí",
        "meaning": "liên tục/vẫn",
        "example": "我最近一直在学习汉语，想继续学下去。",
        "examplePinyin": "wǒ zuì jìn yì zhí zài xué xí hàn yǔ， xiǎng jì xù xué xià qù。",
        "exampleMeaning": "Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp."
      },
      {
        "id": "hnl-lex-190242da16da9132",
        "hanzi": "继续",
        "pinyin": "jì xù",
        "meaning": "tiếp tục",
        "example": "我最近一直在学习汉语，想继续学下去。",
        "examplePinyin": "wǒ zuì jìn yì zhí zài xué xí hàn yǔ， xiǎng jì xù xué xià qù。",
        "exampleMeaning": "Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp."
      },
      {
        "id": "hnl-lex-0494876e00c0db11",
        "hanzi": "每天",
        "pinyin": "měi tiān",
        "meaning": "mỗi ngày",
        "example": "你每天学习多长时间？",
        "examplePinyin": "nǐ měi tiān xué xí duō zhǎng shí jiān？",
        "exampleMeaning": "Mỗi ngày bạn học bao lâu?"
      },
      {
        "id": "hnl-lex-7311e4cd4bba0f36",
        "hanzi": "最近",
        "pinyin": "zuì jìn",
        "meaning": "gần đây",
        "example": "我最近一直在学习汉语，想继续学下去。",
        "examplePinyin": "wǒ zuì jìn yì zhí zài xué xí hàn yǔ， xiǎng jì xù xué xià qù。",
        "exampleMeaning": "Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp."
      }
    ],
    "grammar": [
      {
        "title": "Thời điểm khác thời lượng",
        "explanation": "八点 là mốc 8 giờ, 八个小时 là thời lượng tám giờ. Với 学了多长时间, người hỏi cần độ dài hoạt động, không cần một ngày trong lịch. Hãy tự gắn nhãn mốc hoặc khoảng trước khi trả lời.",
        "example": "你学了多长时间？",
        "translation": "Bạn đã học được bao lâu?"
      },
      {
        "title": "了…了 có thể diễn tả việc kéo dài đến hiện tại",
        "explanation": "我学汉语学了两个月了 nêu quá trình đến nay được hai tháng và trong ngữ cảnh này còn tiếp tục. Không giải thích hai 了 bằng hai lần “đã”; hiểu mốc tích lũy và trạng thái hiện tại.",
        "example": "我来了两个多月了。",
        "translation": "Tôi đến đây được hơn hai tháng rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你来这儿多久了？",
        "pinyin": "nǐ lái zhèr duō jiǔ le？",
        "meaning": "Bạn đến đây được bao lâu rồi?"
      },
      {
        "speaker": "Minh",
        "hanzi": "两个多月了。",
        "pinyin": "liǎng gè duō yuè le。",
        "meaning": "Hơn hai tháng rồi."
      },
      {
        "speaker": "An",
        "hanzi": "你每天学习多长时间？",
        "pinyin": "nǐ měi tiān xué xí duō zhǎng shí jiān？",
        "meaning": "Mỗi ngày bạn học bao lâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "两个小时。",
        "pinyin": "liǎng gè xiǎo shí。",
        "meaning": "Hai giờ."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trả lời 每天学习多长时间 nên nêu gì?",
        "options": [
          "Một khoảng thời lượng",
          "Chỉ tên một người",
          "Một đơn vị giá tiền"
        ],
        "answer": "Một khoảng thời lượng",
        "explanation": "多长时间 hỏi độ dài thời gian; 两个小时 là một câu trả lời phù hợp.",
        "id": "hanngu-q2-b30-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "学汉语学了",
          "我",
          "两个月了"
        ],
        "answer": "我学汉语学了两个月了",
        "explanation": "Câu hoàn chỉnh: 我学汉语学了两个月了。 八点 là mốc 8 giờ, 八个小时 là thời lượng tám giờ. Với 学了多长时间, người hỏi cần độ dài hoạt động, không cần một ngày trong lịch. Hãy tự gắn nhãn mốc hoặc khoảng trước khi trả lời.",
        "id": "hanngu-q2-b30-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “两个月” có nghĩa nào?",
        "options": [
          "liên tục/vẫn",
          "bao lâu",
          "hai tháng",
          "tháng"
        ],
        "answer": "hai tháng",
        "explanation": "两个月 (liǎng gè yuè): hai tháng. Ví dụ: 我来这儿两个月了。 — Tôi đến đây được hai tháng rồi.",
        "id": "hanngu-q2-b30-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “年” có nghĩa nào?",
        "options": [
          "bao lâu",
          "tiếp tục",
          "năm",
          "mỗi ngày"
        ],
        "answer": "năm",
        "explanation": "年 (nián): năm. Ví dụ: 今年我二十岁，明年大学毕业。 — Năm nay tôi hai mươi tuổi, năm sau tốt nghiệp đại học.",
        "id": "hanngu-q2-b30-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “继续” có nghĩa nào?",
        "options": [
          "mỗi ngày",
          "bao lâu",
          "tháng",
          "tiếp tục"
        ],
        "answer": "tiếp tục",
        "explanation": "继续 (jì xù): tiếp tục. Ví dụ: 我最近一直在学习汉语，想继续学下去。 — Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp.",
        "id": "hanngu-q2-b30-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “多” có nghĩa nào?",
        "options": [
          "thời gian bao lâu",
          "ngoài/hơn trong số lượng",
          "phút",
          "tiếp tục"
        ],
        "answer": "ngoài/hơn trong số lượng",
        "explanation": "多 (duō): ngoài/hơn trong số lượng. Ví dụ: 你来这儿多久了？ — Bạn đến đây được bao lâu rồi?",
        "id": "hanngu-q2-b30-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “gần đây” (zuì jìn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "最近",
        "alternatives": [],
        "explanation": "最近 (zuì jìn) nghĩa là gần đây. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b30-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “giờ thời lượng” (xiǎo shí). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "小时",
        "alternatives": [],
        "explanation": "小时 (xiǎo shí) nghĩa là giờ thời lượng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q2-b30-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Đã học được bao lâu: thời lượng và sự tiếp diễn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “了…了 có thể diễn tả việc kéo dài đến hiện tại”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 2, bài 30, mốc PDF 201. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q2-on-tap",
    "level": 2,
    "unit": "Ôn tập quyển 2",
    "title": "Nhìn lại quyển 2 — Dùng được điều đã học",
    "subtitle": "Ôn ý nghĩa · Chọn cấu trúc · Tự nói lại",
    "minutes": 30,
    "order": 16,
    "objectives": [
      "Nhớ lại từ đã học mà không nhìn nghĩa trước.",
      "Chọn cấu trúc theo ý muốn nói, không chỉ theo một từ khóa.",
      "Đọc phản hồi và quay lại đúng bài đang nhầm."
    ],
    "introduction": "Đây là điểm dừng ôn tập sau toàn bộ quyển 2. Các câu hỏi được lấy lại có chủ đích từ những tình huống đã học để kiểm tra khả năng nhớ sau một khoảng cách. Làm trước rồi đọc lời giải; khi chưa đúng, ghi tên chủ đề và quay lại bài tương ứng. Không cần chạy đua điểm số.",
    "vocabulary": [
      {
        "id": "hnl-lex-1327244f99508ba4",
        "hanzi": "常",
        "pinyin": "cháng",
        "meaning": "thường",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-37893489faa814e0",
        "hanzi": "常常",
        "pinyin": "cháng cháng",
        "meaning": "thường xuyên",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-34fbbd9042b5ba1a",
        "hanzi": "图书馆",
        "pinyin": "tú shū guǎn",
        "meaning": "thư viện",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-56aaa73cf1dc301f",
        "hanzi": "时候",
        "pinyin": "shí hou",
        "meaning": "lúc",
        "example": "我有时候去。",
        "examplePinyin": "wǒ yǒu shí hòu qù。",
        "exampleMeaning": "Tôi đôi khi đến đó."
      },
      {
        "id": "hnl-lex-dba5f85a50293066",
        "hanzi": "上网",
        "pinyin": "shàng wǎng",
        "meaning": "lên mạng",
        "example": "我不常上网。",
        "examplePinyin": "wǒ bù cháng shàng wǎng。",
        "exampleMeaning": "Tôi không thường lên mạng."
      },
      {
        "id": "hnl-lex-6261c71cf0345555",
        "hanzi": "晚上",
        "pinyin": "wǎn shàng",
        "meaning": "buổi tối",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-698138ca21b36795",
        "hanzi": "有时候",
        "pinyin": "yǒu shí hòu",
        "meaning": "đôi khi",
        "example": "我有时候去。",
        "examplePinyin": "wǒ yǒu shí hòu qù。",
        "exampleMeaning": "Tôi đôi khi đến đó."
      },
      {
        "id": "hnl-lex-588667c5c78e2464",
        "hanzi": "总是",
        "pinyin": "zǒng shì",
        "meaning": "luôn luôn",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-6ae30b8883aee983",
        "hanzi": "书",
        "pinyin": "shū",
        "meaning": "sách",
        "example": "你常去图书馆吗？",
        "examplePinyin": "nǐ cháng qù tú shū guǎn ma？",
        "exampleMeaning": "Bạn có thường đến thư viện không?"
      },
      {
        "id": "hnl-lex-817658562e56c68b",
        "hanzi": "看",
        "pinyin": "kàn",
        "meaning": "xem/đọc",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-6c8c005fb78ac44c",
        "hanzi": "上午",
        "pinyin": "shàng wǔ",
        "meaning": "buổi sáng",
        "example": "我常常上午看书，晚上听音乐。",
        "examplePinyin": "wǒ cháng cháng shàng wǔ kàn shū， wǎn shàng tīng yīn yuè。",
        "exampleMeaning": "Tôi thường đọc sách buổi sáng, nghe nhạc buổi tối."
      },
      {
        "id": "hnl-lex-b0681797eeb0e9cb",
        "hanzi": "周末",
        "pinyin": "zhōu mò",
        "meaning": "cuối tuần",
        "example": "周末我们一起去吧。",
        "examplePinyin": "zhōu mò wǒ men yì qǐ qù ba。",
        "exampleMeaning": "Cuối tuần chúng ta cùng đi nhé."
      },
      {
        "id": "hnl-lex-615497c73e38ba08",
        "hanzi": "正在",
        "pinyin": "zhèng zài",
        "meaning": "đang",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-cd60562748487cc6",
        "hanzi": "正",
        "pinyin": "zhèng",
        "meaning": "đang",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-3a7dfd85db7e5142",
        "hanzi": "呢",
        "pinyin": "ne",
        "meaning": "trợ từ trong ngữ cảnh",
        "example": "你在做什么呢？",
        "examplePinyin": "nǐ zài zuò shén me ne？",
        "exampleMeaning": "Bạn đang làm gì vậy?"
      },
      {
        "id": "hnl-lex-bbe2badb5ede2d7f",
        "hanzi": "做",
        "pinyin": "zuò",
        "meaning": "làm",
        "example": "你在做什么呢？",
        "examplePinyin": "nǐ zài zuò shén me ne？",
        "exampleMeaning": "Bạn đang làm gì vậy?"
      },
      {
        "id": "hnl-lex-5ac447f36bacb3cf",
        "hanzi": "听音乐",
        "pinyin": "tīng yīn yuè",
        "meaning": "nghe nhạc",
        "example": "他正在听音乐。",
        "examplePinyin": "tā zhèng zài tīng yīn yuè。",
        "exampleMeaning": "Bạn ấy đang nghe nhạc."
      },
      {
        "id": "hnl-lex-2d4f3c449350d2e2",
        "hanzi": "电视",
        "pinyin": "diàn shì",
        "meaning": "ti vi",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      },
      {
        "id": "hnl-lex-662633229569baeb",
        "hanzi": "录音",
        "pinyin": "lù yīn",
        "meaning": "bản ghi âm",
        "example": "他正在听录音。",
        "examplePinyin": "tā zhèng zài tīng lù yīn。",
        "exampleMeaning": "Bạn ấy đang nghe bản ghi âm."
      },
      {
        "id": "hnl-lex-445f7a90a1848e63",
        "hanzi": "教",
        "pinyin": "jiāo",
        "meaning": "dạy",
        "example": "老师在教室里。",
        "examplePinyin": "lǎo shī zài jiào shì lǐ。",
        "exampleMeaning": "Giáo viên ở trong phòng học."
      },
      {
        "id": "hnl-lex-510d48de49b27e4d",
        "hanzi": "问题",
        "pinyin": "wèn tí",
        "meaning": "vấn đề/câu hỏi",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-2d999cb3647d3280",
        "hanzi": "回答",
        "pinyin": "huí dá",
        "meaning": "trả lời",
        "example": "他总是认真回答问题。",
        "examplePinyin": "tā zǒng shì rèn zhēn huí dá wèn tí。",
        "exampleMeaning": "Bạn ấy luôn trả lời câu hỏi nghiêm túc."
      },
      {
        "id": "hnl-lex-9986bfd8b3226c1b",
        "hanzi": "复习",
        "pinyin": "fù xí",
        "meaning": "ôn tập",
        "example": "我在复习。",
        "examplePinyin": "wǒ zài fù xí。",
        "exampleMeaning": "Tôi đang ôn bài."
      },
      {
        "id": "hnl-lex-8ed8446b7ea0617c",
        "hanzi": "准备",
        "pinyin": "zhǔn bèi",
        "meaning": "chuẩn bị",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      },
      {
        "id": "hnl-lex-37e5d74ac37e8f93",
        "hanzi": "包裹",
        "pinyin": "bāo guǒ",
        "meaning": "bưu phẩm",
        "example": "我去邮局寄包裹。",
        "examplePinyin": "wǒ qù yóu jú jì bāo guǒ。",
        "exampleMeaning": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "id": "hnl-lex-ddb7c4648be06705",
        "hanzi": "寄",
        "pinyin": "jì",
        "meaning": "gửi",
        "example": "我去邮局寄包裹。",
        "examplePinyin": "wǒ qù yóu jú jì bāo guǒ。",
        "exampleMeaning": "Tôi đến bưu điện gửi bưu phẩm."
      },
      {
        "id": "hnl-lex-cb54a92f17153dca",
        "hanzi": "信封",
        "pinyin": "xìn fēng",
        "meaning": "phong bì",
        "example": "我买了信封和邮票。",
        "examplePinyin": "wǒ mǎi le xìn fēng hé yóu piào。",
        "exampleMeaning": "Tôi đã mua phong bì và tem thư."
      },
      {
        "id": "hnl-lex-4f051f67078da9ea",
        "hanzi": "邮票",
        "pinyin": "yóu piào",
        "meaning": "tem thư",
        "example": "请帮我买几张邮票。",
        "examplePinyin": "qǐng bāng wǒ mǎi jǐ zhāng yóu piào。",
        "exampleMeaning": "Làm ơn mua giúp tôi vài con tem."
      },
      {
        "id": "hnl-lex-be5f4f6ce6d27273",
        "hanzi": "书店",
        "pinyin": "shū diàn",
        "meaning": "nhà sách",
        "example": "好，我顺便去书店。",
        "examplePinyin": "hǎo， wǒ shùn biàn qù shū diàn。",
        "exampleMeaning": "Được, tôi tiện thể ghé nhà sách."
      },
      {
        "id": "hnl-lex-5fe64314a314573a",
        "hanzi": "买书",
        "pinyin": "mǎi shū",
        "meaning": "mua sách",
        "example": "我顺便去书店买书。",
        "examplePinyin": "wǒ shùn biàn qù shū diàn mǎi shū。",
        "exampleMeaning": "Tôi tiện thể đến nhà sách mua sách."
      },
      {
        "id": "hnl-lex-c177b05c70db8a99",
        "hanzi": "帮",
        "pinyin": "bāng",
        "meaning": "giúp",
        "example": "请帮我买几张邮票。",
        "examplePinyin": "qǐng bāng wǒ mǎi jǐ zhāng yóu piào。",
        "exampleMeaning": "Làm ơn mua giúp tôi vài con tem."
      },
      {
        "id": "hnl-lex-d52fa592d9c5f4e6",
        "hanzi": "拿",
        "pinyin": "ná",
        "meaning": "cầm/lấy",
        "example": "请帮我拿这个包。",
        "examplePinyin": "qǐng bāng wǒ ná zhè ge bāo。",
        "exampleMeaning": "Làm ơn giúp tôi cầm chiếc túi này."
      },
      {
        "id": "hnl-lex-a4be2b9112b69297",
        "hanzi": "顺便",
        "pinyin": "shùn biàn",
        "meaning": "tiện thể",
        "example": "好，我顺便去书店。",
        "examplePinyin": "hǎo， wǒ shùn biàn qù shū diàn。",
        "exampleMeaning": "Được, tôi tiện thể ghé nhà sách."
      },
      {
        "id": "hnl-lex-0b33b0bfff28ef94",
        "hanzi": "事情",
        "pinyin": "shì qíng",
        "meaning": "công việc/sự việc",
        "example": "今天有一件重要的事情。",
        "examplePinyin": "jīn tiān yǒu yī jiàn zhòng yào de shì qíng。",
        "exampleMeaning": "Hôm nay có một việc quan trọng."
      },
      {
        "id": "hnl-lex-ed7e6d1bc279ae7f",
        "hanzi": "外贸",
        "pinyin": "wài mào",
        "meaning": "ngoại thương",
        "example": "他在外贸公司工作。",
        "examplePinyin": "tā zài wài mào gōng sī gōng zuò。",
        "exampleMeaning": "Bạn ấy làm ở công ty ngoại thương."
      },
      {
        "id": "hnl-lex-36b40b2b874b11ea",
        "hanzi": "代表团",
        "pinyin": "dài biǎo tuán",
        "meaning": "đoàn đại biểu",
        "example": "代表团明天去上海参观。",
        "examplePinyin": "dài biǎo tuán míng tiān qù shàng hǎi cān guān。",
        "exampleMeaning": "Ngày mai đoàn đại biểu đến Thượng Hải tham quan."
      }
    ],
    "grammar": [
      {
        "title": "Tần suất đứng trước hoạt động",
        "explanation": "我常去图书馆 nói một thói quen, không khẳng định lần nào cũng đi. Chọn 常/有时候/总是 theo điều thực sự muốn diễn đạt; đừng dùng chúng như từ trang trí có thể đổi tùy ý.",
        "example": "我常去图书馆。",
        "translation": "Tôi thường đến thư viện."
      },
      {
        "title": "Nơi chốn + 有 + sự vật",
        "explanation": "学校里边有邮局 giới thiệu có bưu điện trong trường. Khác với 邮局在学校里边 khi bưu điện là thứ đã biết và cần xác định vị trí. Chọn câu theo thông tin người nghe đang thiếu.",
        "example": "学校里边有邮局。",
        "translation": "Trong trường có bưu điện."
      },
      {
        "title": "Thời điểm khác thời lượng",
        "explanation": "八点 là mốc 8 giờ, 八个小时 là thời lượng tám giờ. Với 学了多长时间, người hỏi cần độ dài hoạt động, không cần một ngày trong lịch. Hãy tự gắn nhãn mốc hoặc khoảng trước khi trả lời.",
        "example": "你学了多长时间？",
        "translation": "Bạn đã học được bao lâu?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你周末常做什么？",
        "pinyin": "nǐ zhōu mò cháng zuò shén me？",
        "meaning": "Cuối tuần bạn thường làm gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我常去图书馆看书。",
        "pinyin": "wǒ cháng qù tú shū guǎn kàn shū。",
        "meaning": "Tôi thường đến thư viện đọc sách."
      },
      {
        "speaker": "An",
        "hanzi": "你昨天去了吗？",
        "pinyin": "nǐ zuó tiān qù le ma？",
        "meaning": "Hôm qua bạn có đến đó không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "去了，我在那儿学了两个小时。",
        "pinyin": "qù le， wǒ zài nàr xué le liǎng gè xiǎo shí。",
        "meaning": "Có, tôi học ở đó hai giờ."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào nói “Tôi không thường lên mạng”?",
        "options": [
          "我常不上网。",
          "我上网不常是。",
          "我不常上网。"
        ],
        "answer": "我不常上网。",
        "explanation": "不常 phủ định mức độ thường xuyên.",
        "id": "hanngu-q2-on-tap-q1"
      },
      {
        "type": "choice",
        "prompt": "Chọn câu mô tả hành động đang xảy ra.",
        "options": [
          "她电视正在。",
          "她正在看电视。",
          "她是看电视。"
        ],
        "answer": "她正在看电视。",
        "explanation": "正在 đứng trước hoạt động 看电视.",
        "id": "hanngu-q2-on-tap-q2"
      },
      {
        "type": "choice",
        "prompt": "Trong 请帮我买邮票, người được giúp là ai?",
        "options": [
          "Con tem",
          "Người nói",
          "Một địa điểm"
        ],
        "answer": "Người nói",
        "explanation": "帮我 nêu người nhận sự giúp đỡ; 买邮票 là việc được nhờ.",
        "id": "hanngu-q2-on-tap-q3"
      },
      {
        "type": "choice",
        "prompt": "Bạn muốn xin phép thử áo. Câu nào phù hợp?",
        "options": [
          "我是谁？",
          "可以试试吗？",
          "这件昨天。"
        ],
        "answer": "可以试试吗？",
        "explanation": "可以…吗 dùng để xin phép trong tình huống này.",
        "id": "hanngu-q2-on-tap-q4"
      },
      {
        "type": "choice",
        "prompt": "Dòng nào theo thứ tự ngày tháng cơ bản trong tiếng Trung?",
        "options": [
          "号八月五",
          "八号五月是",
          "五月八号"
        ],
        "answer": "五月八号",
        "explanation": "Nói tháng trước ngày trong mẫu đang luyện.",
        "id": "hanngu-q2-on-tap-q5"
      },
      {
        "type": "choice",
        "prompt": "七点一刻 là giờ nào?",
        "options": [
          "7 giờ 45",
          "7 giờ 15",
          "8 giờ 15"
        ],
        "answer": "7 giờ 15",
        "explanation": "一刻 tương ứng 15 phút sau mốc 七点 trong cách nói này.",
        "id": "hanngu-q2-on-tap-q6"
      },
      {
        "type": "choice",
        "prompt": "我打算学京剧 khẳng định điều gì?",
        "options": [
          "Đang biểu diễn ngay lúc này",
          "Ý định học",
          "Đã học xong"
        ],
        "answer": "Ý định học",
        "explanation": "打算 đánh dấu dự định; không tự suy ra hoạt động đã hoàn thành.",
        "id": "hanngu-q2-on-tap-q7"
      },
      {
        "type": "choice",
        "prompt": "Câu nào giới thiệu có một bưu điện trong trường?",
        "options": [
          "学校有在邮局。",
          "学校里边有邮局。",
          "邮局是学校里边。"
        ],
        "answer": "学校里边有邮局。",
        "explanation": "Dùng nơi chốn + 有 để giới thiệu sự vật có ở nơi ấy.",
        "id": "hanngu-q2-on-tap-q8"
      },
      {
        "type": "choice",
        "prompt": "Bạn chưa biết bơi nhưng muốn học. Chọn câu đúng ý.",
        "options": [
          "我不会游泳，但是我想学。",
          "我想游泳，所以我已经会了。",
          "我不能是游泳。"
        ],
        "answer": "我不会游泳，但是我想学。",
        "explanation": "不会 nói chưa có kỹ năng; 想学 nói mong muốn học.",
        "id": "hanngu-q2-on-tap-q9"
      },
      {
        "type": "choice",
        "prompt": "Trong 她学得很好, 得 nối điều gì?",
        "options": [
          "Người với vật sở hữu",
          "Hoạt động với phần đánh giá",
          "Hai lựa chọn trong câu hỏi"
        ],
        "answer": "Hoạt động với phần đánh giá",
        "explanation": "得 sau 学 dẫn phần mô tả việc học như thế nào.",
        "id": "hanngu-q2-on-tap-q10"
      },
      {
        "type": "choice",
        "prompt": "Chọn câu phủ định việc hôm qua đến trường.",
        "options": [
          "我昨天不去了学校了。",
          "我昨天是学校。",
          "我昨天没去学校。"
        ],
        "answer": "我昨天没去学校。",
        "explanation": "Mẫu phủ định sự việc đã xảy ra dùng 没/没有, không chép nguyên 了 của câu khẳng định.",
        "id": "hanngu-q2-on-tap-q11"
      },
      {
        "type": "choice",
        "prompt": "Trong tình huống người bạn trông không ổn, câu nào hỏi thăm phù hợp?",
        "options": [
          "你是哪斤？",
          "你多少钱？",
          "你怎么了？"
        ],
        "answer": "你怎么了？",
        "explanation": "怎么了 hỏi tình trạng; bài tập chỉ luyện diễn đạt, không đưa lời khuyên điều trị.",
        "id": "hanngu-q2-on-tap-q12"
      },
      {
        "type": "choice",
        "prompt": "Trong 先洗手，然后吃饭, việc nào trước?",
        "options": [
          "Hai việc được nói là luôn đồng thời",
          "Ăn cơm",
          "Rửa tay"
        ],
        "answer": "Rửa tay",
        "explanation": "先 đặt việc trước, 然后 dẫn việc tiếp theo.",
        "id": "hanngu-q2-on-tap-q13"
      },
      {
        "type": "choice",
        "prompt": "做完 và 做对 khác nhau chủ yếu ở đâu?",
        "options": [
          "Xong việc và kết quả đúng",
          "Hai từ luôn đồng nghĩa",
          "Một từ chỉ giá tiền"
        ],
        "answer": "Xong việc và kết quả đúng",
        "explanation": "完 nói hoàn tất; 对 nói kết quả đúng, hai điều không tự suy ra nhau.",
        "id": "hanngu-q2-on-tap-q14"
      },
      {
        "type": "choice",
        "prompt": "Trả lời 每天学习多长时间 nên nêu gì?",
        "options": [
          "Một khoảng thời lượng",
          "Chỉ tên một người",
          "Một đơn vị giá tiền"
        ],
        "answer": "Một khoảng thời lượng",
        "explanation": "多长时间 hỏi độ dài thời gian; 两个小时 là một câu trả lời phù hợp.",
        "id": "hanngu-q2-on-tap-q15"
      }
    ],
    "summary": "Hãy chọn một tình huống trong quyển và nói lại bằng thông tin của chính bạn. Ôn từ còn quên trước khi sang quyển mới. Điểm ôn tập giúp nhận diện chỗ cần học lại, không phải chứng nhận năng lực thi HSK hay chấm phát âm.",
    "provenance": "Hán Ngữ Lab tự biên soạn điểm ôn bằng kiến thức trong quyển; câu hỏi lặp có chủ đích để gợi nhớ. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b01",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 1",
    "title": "So sánh sở thích: tôi thích âm nhạc hơn",
    "subtitle": "我比你更喜欢音乐。",
    "minutes": 30,
    "order": 17,
    "objectives": [
      "Dùng mẫu “我比你更喜欢音乐。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: A比B + tính chất / 一样 và 没有 trong so sánh.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: so sánh sở thích: tôi thích âm nhạc hơn. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: A比B + tính chất.",
    "vocabulary": [
      {
        "id": "hnl-lex-6684aa6f8e2e22a5",
        "hanzi": "比",
        "pinyin": "bǐ",
        "meaning": "so với",
        "example": "我比你更喜欢音乐。",
        "examplePinyin": "wǒ bǐ nǐ gèng xǐ huān yīn yuè。",
        "exampleMeaning": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "id": "hnl-lex-4fa73f6141c990e2",
        "hanzi": "更",
        "pinyin": "gèng",
        "meaning": "hơn nữa",
        "example": "我比你更喜欢音乐。",
        "examplePinyin": "wǒ bǐ nǐ gèng xǐ huān yīn yuè。",
        "exampleMeaning": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "id": "hnl-lex-df150fa1044124fa",
        "hanzi": "音乐",
        "pinyin": "yīn yuè",
        "meaning": "âm nhạc",
        "example": "你喜欢音乐吗？",
        "examplePinyin": "nǐ xǐ huān yīn yuè ma？",
        "exampleMeaning": "Bạn thích âm nhạc không?"
      },
      {
        "id": "hnl-lex-65a12bc6190ace4f",
        "hanzi": "比较",
        "pinyin": "bǐ jiào",
        "meaning": "tương đối/so sánh",
        "example": "这本书比较容易。",
        "examplePinyin": "zhè běn shū bǐ jiào róng yì。",
        "exampleMeaning": "Quyển sách này tương đối dễ."
      },
      {
        "id": "hnl-lex-11026950edee08f3",
        "hanzi": "喜欢",
        "pinyin": "xǐ huān",
        "meaning": "thích",
        "example": "你喜欢音乐吗？",
        "examplePinyin": "nǐ xǐ huān yīn yuè ma？",
        "exampleMeaning": "Bạn thích âm nhạc không?"
      },
      {
        "id": "hnl-lex-8cf1abc4dd910944",
        "hanzi": "一样",
        "pinyin": "yī yàng",
        "meaning": "giống nhau",
        "example": "我的书和你的书一样。",
        "examplePinyin": "wǒ de shū hé nǐ de shū yī yàng。",
        "exampleMeaning": "Sách của tôi giống sách của bạn."
      },
      {
        "id": "hnl-lex-7864fde65033a6c8",
        "hanzi": "不一样",
        "pinyin": "bù yí yàng",
        "meaning": "không giống",
        "example": "我们喜欢的音乐不一样。",
        "examplePinyin": "wǒ men xǐ huān de yīn yuè bù yí yàng。",
        "exampleMeaning": "Âm nhạc chúng tôi thích không giống nhau."
      },
      {
        "id": "hnl-lex-504f579ff6b83759",
        "hanzi": "没有",
        "pinyin": "méi yǒu",
        "meaning": "không bằng trong so sánh",
        "example": "我没有他那么喜欢唱歌。",
        "examplePinyin": "wǒ méi yǒu tā nà me xǐ huān chàng gē。",
        "exampleMeaning": "Tôi không thích hát đến mức như bạn ấy."
      },
      {
        "id": "hnl-lex-f0ad931d5d166ccc",
        "hanzi": "觉得",
        "pinyin": "jué de",
        "meaning": "cảm thấy/cho rằng",
        "example": "我们都觉得音乐很有意思。",
        "examplePinyin": "wǒ men dōu jué de yīn yuè hěn yǒu yì si。",
        "exampleMeaning": "Chúng ta đều thấy âm nhạc rất thú vị."
      },
      {
        "id": "hnl-lex-adfdbfac4ad35aae",
        "hanzi": "有意思",
        "pinyin": "yǒu yì si",
        "meaning": "thú vị",
        "example": "我们都觉得音乐很有意思。",
        "examplePinyin": "wǒ men dōu jué de yīn yuè hěn yǒu yì si。",
        "exampleMeaning": "Chúng ta đều thấy âm nhạc rất thú vị."
      },
      {
        "id": "hnl-lex-d0bd40a4c491723b",
        "hanzi": "一点儿",
        "pinyin": "yī diǎnr",
        "meaning": "một chút",
        "example": "请说慢一点儿。",
        "examplePinyin": "qǐng shuō màn yì diǎnr。",
        "exampleMeaning": "Xin nói chậm một chút."
      },
      {
        "id": "hnl-lex-0873af5bb909233e",
        "hanzi": "多了",
        "pinyin": "duō le",
        "meaning": "hơn nhiều",
        "example": "这里比那儿暖和多了。",
        "examplePinyin": "zhè lǐ bǐ nàr nuǎn huo duō le。",
        "exampleMeaning": "Ở đây ấm hơn kia nhiều."
      },
      {
        "id": "hnl-lex-7d1f5438cf5f2062",
        "hanzi": "兴趣",
        "pinyin": "xìng qù",
        "meaning": "hứng thú",
        "example": "我对京剧感兴趣。",
        "examplePinyin": "wǒ duì jīng jù gǎn xìng qù。",
        "exampleMeaning": "Tôi có hứng thú với Kinh kịch."
      },
      {
        "id": "hnl-lex-8fad55eeb7206040",
        "hanzi": "唱歌",
        "pinyin": "chàng gē",
        "meaning": "hát",
        "example": "我没有他那么喜欢唱歌。",
        "examplePinyin": "wǒ méi yǒu tā nà me xǐ huān chàng gē。",
        "exampleMeaning": "Tôi không thích hát đến mức như bạn ấy."
      }
    ],
    "grammar": [
      {
        "title": "A比B + tính chất",
        "explanation": "A và B là hai đối tượng được đặt lên cùng một mặt so sánh. Trong 我比你更喜欢音乐, điều so là mức độ thích âm nhạc. Không biến câu thành bảng xếp hạng ai giỏi hay có giá trị hơn.",
        "example": "我比你更喜欢音乐。",
        "translation": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "title": "一样 và 没有 trong so sánh",
        "explanation": "一样 nói sự giống nhau ở mặt được nêu; 没有 có thể diễn tả không bằng trong mẫu A没有B那么…. Phải nhìn cả cấu trúc để phân biệt 没有 so sánh với 没有 sở hữu đã học trước.",
        "example": "我没有他那么喜欢唱歌。",
        "translation": "Tôi không thích hát đến mức như bạn ấy."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你喜欢音乐吗？",
        "pinyin": "nǐ xǐ huān yīn yuè ma？",
        "meaning": "Bạn thích âm nhạc không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "喜欢，你呢？",
        "pinyin": "xǐ huān， nǐ ne？",
        "meaning": "Có, còn bạn?"
      },
      {
        "speaker": "An",
        "hanzi": "我比你更喜欢音乐。",
        "pinyin": "wǒ bǐ nǐ gèng xǐ huān yīn yuè。",
        "meaning": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "speaker": "Minh",
        "hanzi": "我们都觉得音乐很有意思。",
        "pinyin": "wǒ men dōu jué de yīn yuè hěn yǒu yì si。",
        "meaning": "Chúng ta đều thấy âm nhạc rất thú vị."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 我比你更喜欢音乐, hai người được so về điều gì?",
        "options": [
          "Chiều cao",
          "Số tiền có trong ví",
          "Mức độ thích âm nhạc"
        ],
        "answer": "Mức độ thích âm nhạc",
        "explanation": "喜欢音乐 là nội dung được so; 更 nhấn mức độ hơn.",
        "id": "hanngu-q3-b01-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "比你",
          "我",
          "更喜欢音乐"
        ],
        "answer": "我比你更喜欢音乐",
        "explanation": "Câu hoàn chỉnh: 我比你更喜欢音乐。 A và B là hai đối tượng được đặt lên cùng một mặt so sánh. Trong 我比你更喜欢音乐, điều so là mức độ thích âm nhạc. Không biến câu thành bảng xếp hạng ai giỏi hay có giá trị hơn.",
        "id": "hanngu-q3-b01-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “不一样” có nghĩa nào?",
        "options": [
          "không giống",
          "âm nhạc",
          "không bằng trong so sánh",
          "một chút"
        ],
        "answer": "không giống",
        "explanation": "不一样 (bù yí yàng): không giống. Ví dụ: 我们喜欢的音乐不一样。 — Âm nhạc chúng tôi thích không giống nhau.",
        "id": "hanngu-q3-b01-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “一点儿” có nghĩa nào?",
        "options": [
          "một chút",
          "hơn nữa",
          "không bằng trong so sánh",
          "hứng thú"
        ],
        "answer": "một chút",
        "explanation": "一点儿 (yī diǎnr): một chút. Ví dụ: 请说慢一点儿。 — Xin nói chậm một chút.",
        "id": "hanngu-q3-b01-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “音乐” có nghĩa nào?",
        "options": [
          "cảm thấy/cho rằng",
          "một chút",
          "giống nhau",
          "âm nhạc"
        ],
        "answer": "âm nhạc",
        "explanation": "音乐 (yīn yuè): âm nhạc. Ví dụ: 你喜欢音乐吗？ — Bạn thích âm nhạc không?",
        "id": "hanngu-q3-b01-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “有意思” có nghĩa nào?",
        "options": [
          "không giống",
          "giống nhau",
          "thú vị",
          "một chút"
        ],
        "answer": "thú vị",
        "explanation": "有意思 (yǒu yì si): thú vị. Ví dụ: 我们都觉得音乐很有意思。 — Chúng ta đều thấy âm nhạc rất thú vị.",
        "id": "hanngu-q3-b01-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “không bằng trong so sánh” (méi yǒu). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "没有",
        "alternatives": [],
        "explanation": "没有 (méi yǒu) nghĩa là không bằng trong so sánh. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b01-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “so với” (bǐ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "比",
        "alternatives": [],
        "explanation": "比 (bǐ) nghĩa là so với. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b01-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “So sánh sở thích: tôi thích âm nhạc hơn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “一样 và 没有 trong so sánh”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 1, mốc PDF 2. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b02",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 2",
    "title": "Mùa đông ở quê tôi: so sánh theo ngữ cảnh",
    "subtitle": "今天比昨天冷。",
    "minutes": 30,
    "order": 18,
    "objectives": [
      "Dùng mẫu “今天比昨天冷。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: So sánh cần cùng đối tượng hoặc cùng mặt / …的时候 làm khung thời gian.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: mùa đông ở quê tôi: so sánh theo ngữ cảnh. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: So sánh cần cùng đối tượng hoặc cùng mặt.",
    "vocabulary": [
      {
        "id": "hnl-lex-4c8df1576225486b",
        "hanzi": "冬天",
        "pinyin": "dōng tiān",
        "meaning": "mùa đông",
        "example": "你们那儿冬天冷吗？",
        "examplePinyin": "nǐ men nàr dōng tiān lěng ma？",
        "exampleMeaning": "Mùa đông chỗ bạn có lạnh không?"
      },
      {
        "id": "hnl-lex-aecc93d361954a2a",
        "hanzi": "夏天",
        "pinyin": "xià tiān",
        "meaning": "mùa hè",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-e84a55380c8dfdaf",
        "hanzi": "春天",
        "pinyin": "chūn tiān",
        "meaning": "mùa xuân",
        "example": "我更喜欢春天。",
        "examplePinyin": "wǒ gèng xǐ huān chūn tiān。",
        "exampleMeaning": "Tôi thích mùa xuân hơn."
      },
      {
        "id": "hnl-lex-979ed96961999a26",
        "hanzi": "秋天",
        "pinyin": "qiū tiān",
        "meaning": "mùa thu",
        "example": "秋天不太热，也不太冷。",
        "examplePinyin": "qiū tiān bù tài rè， yě bù tài lěng。",
        "exampleMeaning": "Mùa thu không quá nóng cũng không quá lạnh."
      },
      {
        "id": "hnl-lex-821fede84bed15e2",
        "hanzi": "天气",
        "pinyin": "tiān qì",
        "meaning": "thời tiết",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-a1de625a0986ff38",
        "hanzi": "冷",
        "pinyin": "lěng",
        "meaning": "lạnh",
        "example": "你们那儿冬天冷吗？",
        "examplePinyin": "nǐ men nàr dōng tiān lěng ma？",
        "exampleMeaning": "Mùa đông chỗ bạn có lạnh không?"
      },
      {
        "id": "hnl-lex-f5eba528609c6420",
        "hanzi": "热",
        "pinyin": "rè",
        "meaning": "nóng",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-6591706be05fbb9c",
        "hanzi": "下雪",
        "pinyin": "xià xuě",
        "meaning": "tuyết rơi",
        "example": "今天下雪，昨天还下雨了。",
        "examplePinyin": "jīn tiān xià xuě， zuó tiān hái xià yǔ le。",
        "exampleMeaning": "Hôm nay tuyết rơi, hôm qua còn mưa."
      },
      {
        "id": "hnl-lex-eb0b169e62b2e7fc",
        "hanzi": "下雨",
        "pinyin": "xià yǔ",
        "meaning": "mưa",
        "example": "今天下雪，昨天还下雨了。",
        "examplePinyin": "jīn tiān xià xuě， zuó tiān hái xià yǔ le。",
        "exampleMeaning": "Hôm nay tuyết rơi, hôm qua còn mưa."
      },
      {
        "id": "hnl-lex-f0bdf7995eca5d35",
        "hanzi": "温度",
        "pinyin": "wēn dù",
        "meaning": "nhiệt độ",
        "example": "现在的温度是零下五度。",
        "examplePinyin": "xiàn zài de wēn dù shì líng xià wǔ dù。",
        "exampleMeaning": "Nhiệt độ hiện tại là âm năm độ."
      },
      {
        "id": "hnl-lex-0ac655718ea477d0",
        "hanzi": "零下",
        "pinyin": "líng xià",
        "meaning": "dưới không độ",
        "example": "现在的温度是零下五度。",
        "examplePinyin": "xiàn zài de wēn dù shì líng xià wǔ dù。",
        "exampleMeaning": "Nhiệt độ hiện tại là âm năm độ."
      },
      {
        "id": "hnl-lex-01cea0883c107adb",
        "hanzi": "暖和",
        "pinyin": "nuǎn huo",
        "meaning": "ấm áp",
        "example": "这里比那儿暖和多了。",
        "examplePinyin": "zhè lǐ bǐ nàr nuǎn huo duō le。",
        "exampleMeaning": "Ở đây ấm hơn kia nhiều."
      },
      {
        "id": "hnl-lex-7a7cb0fb3b61fc25",
        "hanzi": "季节",
        "pinyin": "jì jié",
        "meaning": "mùa",
        "example": "你喜欢哪个季节？",
        "examplePinyin": "nǐ xǐ huān nǎ ge jì jié？",
        "exampleMeaning": "Bạn thích mùa nào?"
      },
      {
        "id": "hnl-lex-b0432e7119ebe15c",
        "hanzi": "地方",
        "pinyin": "dì fāng",
        "meaning": "nơi/chỗ",
        "example": "你去过那个地方吗？",
        "examplePinyin": "nǐ qù guo nà ge dì fāng ma？",
        "exampleMeaning": "Bạn từng đến nơi đó chưa?"
      }
    ],
    "grammar": [
      {
        "title": "So sánh cần cùng đối tượng hoặc cùng mặt",
        "explanation": "今天比昨天冷 so cùng một nơi ở hai thời điểm; nói rõ bối cảnh để người nghe hiểu. Những câu luyện thời tiết chỉ là tình huống, không phải dự báo hoặc khẳng định khí hậu cho mọi vùng.",
        "example": "今天比昨天冷。",
        "translation": "Hôm nay lạnh hơn hôm qua."
      },
      {
        "title": "…的时候 làm khung thời gian",
        "explanation": "冬天的时候 nêu lúc hoặc mùa đang nói đến. Nếu câu đã đủ rõ, không nhất thiết lặp nhiều từ thời gian. Học cách chọn một bối cảnh chính rồi kể thêm việc xảy ra trong bối cảnh ấy.",
        "example": "冬天的时候，我喜欢在家看书。",
        "translation": "Vào mùa đông, tôi thích đọc sách ở nhà."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你们那儿冬天冷吗？",
        "pinyin": "nǐ men nàr dōng tiān lěng ma？",
        "meaning": "Mùa đông chỗ bạn có lạnh không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有时候很冷。",
        "pinyin": "yǒu shí hòu hěn lěng。",
        "meaning": "Có lúc rất lạnh."
      },
      {
        "speaker": "An",
        "hanzi": "你喜欢哪个季节？",
        "pinyin": "nǐ xǐ huān nǎ ge jì jié？",
        "meaning": "Bạn thích mùa nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我更喜欢春天。",
        "pinyin": "wǒ gèng xǐ huān chūn tiān。",
        "meaning": "Tôi thích mùa xuân hơn."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "今天比昨天冷 so sánh theo mặt nào?",
        "options": [
          "Sở hữu một vật",
          "Giá hai món đồ",
          "Độ lạnh ở hai thời điểm"
        ],
        "answer": "Độ lạnh ở hai thời điểm",
        "explanation": "今天 và 昨天 đặt hai thời điểm trên cùng mặt so sánh 冷.",
        "id": "hanngu-q3-b02-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "比昨天",
          "冷",
          "今天"
        ],
        "answer": "今天比昨天冷",
        "explanation": "Câu hoàn chỉnh: 今天比昨天冷。 今天比昨天冷 so cùng một nơi ở hai thời điểm; nói rõ bối cảnh để người nghe hiểu. Những câu luyện thời tiết chỉ là tình huống, không phải dự báo hoặc khẳng định khí hậu cho mọi vùng.",
        "id": "hanngu-q3-b02-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “夏天” có nghĩa nào?",
        "options": [
          "mùa thu",
          "lạnh",
          "mùa hè",
          "mùa"
        ],
        "answer": "mùa hè",
        "explanation": "夏天 (xià tiān): mùa hè. Ví dụ: 夏天天气热，冬天天气冷。 — Mùa hè thời tiết nóng, mùa đông thời tiết lạnh.",
        "id": "hanngu-q3-b02-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “冬天” có nghĩa nào?",
        "options": [
          "tuyết rơi",
          "nhiệt độ",
          "mùa đông",
          "lạnh"
        ],
        "answer": "mùa đông",
        "explanation": "冬天 (dōng tiān): mùa đông. Ví dụ: 你们那儿冬天冷吗？ — Mùa đông chỗ bạn có lạnh không?",
        "id": "hanngu-q3-b02-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “暖和” có nghĩa nào?",
        "options": [
          "ấm áp",
          "thời tiết",
          "mùa",
          "nóng"
        ],
        "answer": "ấm áp",
        "explanation": "暖和 (nuǎn huo): ấm áp. Ví dụ: 这里比那儿暖和多了。 — Ở đây ấm hơn kia nhiều.",
        "id": "hanngu-q3-b02-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “温度” có nghĩa nào?",
        "options": [
          "nhiệt độ",
          "nơi/chỗ",
          "mùa thu",
          "mùa hè"
        ],
        "answer": "nhiệt độ",
        "explanation": "温度 (wēn dù): nhiệt độ. Ví dụ: 现在的温度是零下五度。 — Nhiệt độ hiện tại là âm năm độ.",
        "id": "hanngu-q3-b02-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tuyết rơi” (xià xuě). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "下雪",
        "alternatives": [],
        "explanation": "下雪 (xià xuě) nghĩa là tuyết rơi. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b02-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “mưa” (xià yǔ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "下雨",
        "alternatives": [],
        "explanation": "下雨 (xià yǔ) nghĩa là mưa. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b02-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Mùa đông ở quê tôi: so sánh theo ngữ cảnh”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “…的时候 làm khung thời gian”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 2, mốc PDF 25. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b03",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 3",
    "title": "Mùa đông sắp đến: nhận ra việc sắp xảy ra",
    "subtitle": "冬天快要到了。",
    "minutes": 30,
    "order": 19,
    "objectives": [
      "Dùng mẫu “冬天快要到了。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 快要…了 nhấn việc sắp tới / 就要 và mốc thời gian cụ thể.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: mùa đông sắp đến: nhận ra việc sắp xảy ra. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 快要…了 nhấn việc sắp tới.",
    "vocabulary": [
      {
        "id": "hnl-lex-37e5422296e36382",
        "hanzi": "快要",
        "pinyin": "kuài yào",
        "meaning": "sắp",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-c95555516c6d5dee",
        "hanzi": "就要",
        "pinyin": "jiù yào",
        "meaning": "sắp",
        "example": "明天就要考试了。",
        "examplePinyin": "míng tiān jiù yào kǎo shì le。",
        "exampleMeaning": "Ngày mai thi rồi."
      },
      {
        "id": "hnl-lex-df1ae3bd89dc6cad",
        "hanzi": "快",
        "pinyin": "kuài",
        "meaning": "sắp/nhanh",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-763624bbb7b7de52",
        "hanzi": "了",
        "pinyin": "le",
        "meaning": "trợ từ báo thay đổi",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-1545cc48551fde8b",
        "hanzi": "放假",
        "pinyin": "fàng jià",
        "meaning": "nghỉ học/nghỉ lễ",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-568a79d645fb2670",
        "hanzi": "考试",
        "pinyin": "kǎo shì",
        "meaning": "thi",
        "example": "明天就要考试了。",
        "examplePinyin": "míng tiān jiù yào kǎo shì le。",
        "exampleMeaning": "Ngày mai thi rồi."
      },
      {
        "id": "hnl-lex-8ed8446b7ea0617c",
        "hanzi": "准备",
        "pinyin": "zhǔn bèi",
        "meaning": "chuẩn bị",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      },
      {
        "id": "hnl-lex-e18cf85a5e297388",
        "hanzi": "计划",
        "pinyin": "jì huà",
        "meaning": "kế hoạch",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-730ad020eb5bacab",
        "hanzi": "希望",
        "pinyin": "xī wàng",
        "meaning": "hy vọng",
        "example": "我希望以后能说好汉语。",
        "examplePinyin": "wǒ xī wàng yǐ hòu néng shuō hǎo hàn yǔ。",
        "exampleMeaning": "Tôi hy vọng sau này có thể nói tốt tiếng Trung."
      },
      {
        "id": "hnl-lex-2177ceb3328ed458",
        "hanzi": "应该",
        "pinyin": "yīng gāi",
        "meaning": "nên",
        "example": "你应该先看看天气。",
        "examplePinyin": "nǐ yīng gāi xiān kàn kàn tiān qì。",
        "exampleMeaning": "Bạn nên xem thời tiết trước."
      },
      {
        "id": "hnl-lex-bc4eb21ed6dcd58b",
        "hanzi": "穿",
        "pinyin": "chuān",
        "meaning": "mặc",
        "example": "我今天穿的衣服是新的。",
        "examplePinyin": "wǒ jīn tiān chuān de yī fú shì xīn de。",
        "exampleMeaning": "Quần áo hôm nay tôi mặc là đồ mới."
      },
      {
        "id": "hnl-lex-fbfa6c53f15d0bff",
        "hanzi": "衣服",
        "pinyin": "yī fu",
        "meaning": "quần áo",
        "example": "这件衣服太短，不太合适。",
        "examplePinyin": "zhè jiàn yī fú tài duǎn， bù tài hé shì。",
        "exampleMeaning": "Bộ quần áo này quá ngắn, không phù hợp lắm."
      },
      {
        "id": "hnl-lex-f26076c1695ae476",
        "hanzi": "马上",
        "pinyin": "mǎ shàng",
        "meaning": "ngay/sắp ngay",
        "example": "下课以后，我马上回家。",
        "examplePinyin": "xià kè yǐ hòu， wǒ mǎ shàng huí jiā。",
        "exampleMeaning": "Tan học xong tôi về nhà ngay."
      },
      {
        "id": "hnl-lex-689c498661d267f4",
        "hanzi": "下课",
        "pinyin": "xià kè",
        "meaning": "tan học",
        "example": "下课以后，我马上回家。",
        "examplePinyin": "xià kè yǐ hòu， wǒ mǎ shàng huí jiā。",
        "exampleMeaning": "Tan học xong tôi về nhà ngay."
      }
    ],
    "grammar": [
      {
        "title": "快要…了 nhấn việc sắp tới",
        "explanation": "冬天快要到了 nói mùa đông sắp đến, không phải đã đến hẳn. Đặt câu lên một trục trước–sắp–đã để tự kiểm ý trước khi dịch. Không đọc mỗi 了 rồi kết luận đây là quá khứ.",
        "example": "冬天快要到了。",
        "translation": "Mùa đông sắp đến rồi."
      },
      {
        "title": "就要 và mốc thời gian cụ thể",
        "explanation": "明天就要考试了 nói cuộc thi cận kề với mốc 明天. Khi mới học, dùng 快要 cho ý sắp chung và mẫu 明天就要…了 cho mốc cụ thể, tránh ghép tùy tiện mọi từ chỉ tương lai với nhau.",
        "example": "明天就要考试了。",
        "translation": "Ngày mai đã thi rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "快要放假了，你有什么计划？",
        "pinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "meaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我想回家。",
        "pinyin": "wǒ xiǎng huí jiā。",
        "meaning": "Tôi muốn về nhà."
      },
      {
        "speaker": "An",
        "hanzi": "明天就要考试了。",
        "pinyin": "míng tiān jiù yào kǎo shì le。",
        "meaning": "Ngày mai thi rồi."
      },
      {
        "speaker": "Minh",
        "hanzi": "我今天先复习。",
        "pinyin": "wǒ jīn tiān xiān fù xí。",
        "meaning": "Hôm nay tôi ôn bài trước."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "冬天快要到了 biểu đạt thời điểm nào?",
        "options": [
          "Sắp đến",
          "Không bao giờ đến",
          "Đã qua rất lâu"
        ],
        "answer": "Sắp đến",
        "explanation": "快要…了 nhấn một tình huống sắp xảy ra.",
        "id": "hanngu-q3-b03-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "冬天",
          "到了",
          "快要"
        ],
        "answer": "冬天快要到了",
        "explanation": "Câu hoàn chỉnh: 冬天快要到了。 冬天快要到了 nói mùa đông sắp đến, không phải đã đến hẳn. Đặt câu lên một trục trước–sắp–đã để tự kiểm ý trước khi dịch. Không đọc mỗi 了 rồi kết luận đây là quá khứ.",
        "id": "hanngu-q3-b03-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “了” có nghĩa nào?",
        "options": [
          "trợ từ báo thay đổi",
          "sắp/nhanh",
          "chuẩn bị",
          "hy vọng"
        ],
        "answer": "trợ từ báo thay đổi",
        "explanation": "了 (le): trợ từ báo thay đổi. Ví dụ: 快要放假了，你有什么计划？ — Sắp nghỉ rồi, bạn có kế hoạch gì?",
        "id": "hanngu-q3-b03-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “下课” có nghĩa nào?",
        "options": [
          "nghỉ học/nghỉ lễ",
          "mặc",
          "tan học",
          "trợ từ báo thay đổi"
        ],
        "answer": "tan học",
        "explanation": "下课 (xià kè): tan học. Ví dụ: 下课以后，我马上回家。 — Tan học xong tôi về nhà ngay.",
        "id": "hanngu-q3-b03-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “希望” có nghĩa nào?",
        "options": [
          "thi",
          "hy vọng",
          "nên",
          "trợ từ báo thay đổi"
        ],
        "answer": "hy vọng",
        "explanation": "希望 (xī wàng): hy vọng. Ví dụ: 我希望以后能说好汉语。 — Tôi hy vọng sau này có thể nói tốt tiếng Trung.",
        "id": "hanngu-q3-b03-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “准备” có nghĩa nào?",
        "options": [
          "ngay/sắp ngay",
          "chuẩn bị",
          "thi",
          "sắp"
        ],
        "answer": "chuẩn bị",
        "explanation": "准备 (zhǔn bèi): chuẩn bị. Ví dụ: 她正在准备考试，没有看电视。 — Bạn ấy đang chuẩn bị thi, không xem ti vi.",
        "id": "hanngu-q3-b03-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “mặc” (chuān). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "穿",
        "alternatives": [],
        "explanation": "穿 (chuān) nghĩa là mặc. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b03-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “sắp” (kuài yào). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "快要",
        "alternatives": [],
        "explanation": "快要 (kuài yào) nghĩa là sắp. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b03-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Mùa đông sắp đến: nhận ra việc sắp xảy ra”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “就要 và mốc thời gian cụ thể”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 3, mốc PDF 41. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b04",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 4",
    "title": "Lên xe nào: hướng của chuyển động",
    "subtitle": "快上来吧！",
    "minutes": 30,
    "order": 20,
    "objectives": [
      "Dùng mẫu “快上来吧！” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 来 và 去 gắn với điểm nhìn / Ghép hướng đơn giản rồi kiểm lại vị trí.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: lên xe nào: hướng của chuyển động. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 来 và 去 gắn với điểm nhìn.",
    "vocabulary": [
      {
        "id": "hnl-lex-93d48ed46bbf6d1b",
        "hanzi": "上来",
        "pinyin": "shàng lái",
        "meaning": "lên đây",
        "example": "快上来吧，要开车了！",
        "examplePinyin": "kuài shàng lái ba， yào kāi chē le！",
        "exampleMeaning": "Lên đây nhanh nào, xe sắp chạy rồi!"
      },
      {
        "id": "hnl-lex-cd6ef93b00340b9f",
        "hanzi": "下去",
        "pinyin": "xià qù",
        "meaning": "xuống đó",
        "example": "我最近一直在学习汉语，想继续学下去。",
        "examplePinyin": "wǒ zuì jìn yì zhí zài xué xí hàn yǔ， xiǎng jì xù xué xià qù。",
        "exampleMeaning": "Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp."
      },
      {
        "id": "hnl-lex-8f6053a191b2ecab",
        "hanzi": "进来",
        "pinyin": "jìn lái",
        "meaning": "vào đây",
        "example": "他从外边进来了。",
        "examplePinyin": "tā cóng wài biān jìn lái le。",
        "exampleMeaning": "Bạn ấy từ bên ngoài đi vào đây rồi."
      },
      {
        "id": "hnl-lex-844d660dbae34d69",
        "hanzi": "出去",
        "pinyin": "chū qù",
        "meaning": "ra ngoài",
        "example": "他们出去看电影了。",
        "examplePinyin": "tā men chū qù kàn diàn yǐng le。",
        "exampleMeaning": "Họ ra ngoài xem phim rồi."
      },
      {
        "id": "hnl-lex-b994ed2137583e0e",
        "hanzi": "回来",
        "pinyin": "huí lái",
        "meaning": "quay về đây",
        "example": "我已经从饭馆回来了。",
        "examplePinyin": "wǒ yǐ jīng cóng fàn guǎn huí lái le。",
        "exampleMeaning": "Tôi đã từ quán ăn về rồi."
      },
      {
        "id": "hnl-lex-2e4d1dd7e96829fa",
        "hanzi": "过去",
        "pinyin": "guò qù",
        "meaning": "qua đó",
        "example": "请你过去看看。",
        "examplePinyin": "qǐng nǐ guò qù kàn kàn。",
        "exampleMeaning": "Nhờ bạn qua đó xem thử."
      },
      {
        "id": "hnl-lex-639534a35b18e0a1",
        "hanzi": "开车",
        "pinyin": "kāi chē",
        "meaning": "lái xe/xe khởi hành",
        "example": "快上来吧，要开车了！",
        "examplePinyin": "kuài shàng lái ba， yào kāi chē le！",
        "exampleMeaning": "Lên đây nhanh nào, xe sắp chạy rồi!"
      },
      {
        "id": "hnl-lex-9ca258c5673e38f3",
        "hanzi": "车站",
        "pinyin": "chē zhàn",
        "meaning": "bến xe",
        "example": "我在车站上车，你在哪儿下车？",
        "examplePinyin": "wǒ zài chē zhàn shàng chē， nǐ zài nǎr xià chē？",
        "exampleMeaning": "Tôi lên xe ở bến, bạn xuống ở đâu?"
      },
      {
        "id": "hnl-lex-cc21c4641384a694",
        "hanzi": "上车",
        "pinyin": "shàng chē",
        "meaning": "lên xe",
        "example": "我在车站上车，你在哪儿下车？",
        "examplePinyin": "wǒ zài chē zhàn shàng chē， nǐ zài nǎr xià chē？",
        "exampleMeaning": "Tôi lên xe ở bến, bạn xuống ở đâu?"
      },
      {
        "id": "hnl-lex-a9d489e747f3faa1",
        "hanzi": "下车",
        "pinyin": "xià chē",
        "meaning": "xuống xe",
        "example": "我在车站上车，你在哪儿下车？",
        "examplePinyin": "wǒ zài chē zhàn shàng chē， nǐ zài nǎr xià chē？",
        "exampleMeaning": "Tôi lên xe ở bến, bạn xuống ở đâu?"
      },
      {
        "id": "hnl-lex-4410d94d222a998b",
        "hanzi": "带",
        "pinyin": "dài",
        "meaning": "mang",
        "example": "东西都带了吗？",
        "examplePinyin": "dōng xī dōu dài le ma？",
        "exampleMeaning": "Bạn mang đủ đồ chưa?"
      },
      {
        "id": "hnl-lex-44a795eab3962ad5",
        "hanzi": "行李",
        "pinyin": "xíng lǐ",
        "meaning": "hành lý",
        "example": "等一等，我拿行李。",
        "examplePinyin": "děng yī děng， wǒ ná xíng lǐ。",
        "exampleMeaning": "Đợi chút, tôi lấy hành lý."
      },
      {
        "id": "hnl-lex-427501fff8b9d738",
        "hanzi": "着急",
        "pinyin": "zháo jí",
        "meaning": "sốt ruột",
        "example": "别着急，我们还有时间。",
        "examplePinyin": "bié zháo jí， wǒ men hái yǒu shí jiān。",
        "exampleMeaning": "Đừng sốt ruột, chúng ta vẫn còn thời gian."
      },
      {
        "id": "hnl-lex-2d105a602ae30233",
        "hanzi": "等一等",
        "pinyin": "děng yī děng",
        "meaning": "đợi một chút",
        "example": "等一等，我拿行李。",
        "examplePinyin": "děng yī děng， wǒ ná xíng lǐ。",
        "exampleMeaning": "Đợi chút, tôi lấy hành lý."
      }
    ],
    "grammar": [
      {
        "title": "来 và 去 gắn với điểm nhìn",
        "explanation": "来 hướng về điểm nhìn của người nói; 去 hướng rời điểm nhìn. Khi nhìn một tình huống mới, hãy xác định người nói đứng ở đâu trước, không chọn theo mỗi từ “lên/xuống” tiếng Việt.",
        "example": "快上来吧！",
        "translation": "Lên đây nhanh nào!"
      },
      {
        "title": "Ghép hướng đơn giản rồi kiểm lại vị trí",
        "explanation": "进来, 出去, 回来 mang thông tin hướng khác nhau. Tập minh họa bằng vị trí trong phòng trước khi nói câu dài. Bài chỉ luyện các cụm đã có, chưa cần tự ghép mọi động từ với mọi tổ hợp hướng.",
        "example": "他从外边进来了。",
        "translation": "Bạn ấy từ bên ngoài đi vào đây rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "快上来吧，要开车了！",
        "pinyin": "kuài shàng lái ba， yào kāi chē le！",
        "meaning": "Lên đây nhanh nào, xe sắp chạy rồi!"
      },
      {
        "speaker": "Minh",
        "hanzi": "等一等，我拿行李。",
        "pinyin": "děng yī děng， wǒ ná xíng lǐ。",
        "meaning": "Đợi chút, tôi lấy hành lý."
      },
      {
        "speaker": "An",
        "hanzi": "东西都带了吗？",
        "pinyin": "dōng xī dōu dài le ma？",
        "meaning": "Bạn mang đủ đồ chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "都带了。",
        "pinyin": "dōu dài le。",
        "meaning": "Mang đủ rồi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Người nói ở trên xe gọi người dưới đất về phía mình. Cụm nào hợp?",
        "options": [
          "出去",
          "下去",
          "上来"
        ],
        "answer": "上来",
        "explanation": "Lên về phía người nói nên dùng 上来 trong tình huống này.",
        "id": "hanngu-q3-b04-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "从外边",
          "进来了",
          "他"
        ],
        "answer": "他从外边进来了",
        "explanation": "Câu hoàn chỉnh: 他从外边进来了。 来 hướng về điểm nhìn của người nói; 去 hướng rời điểm nhìn. Khi nhìn một tình huống mới, hãy xác định người nói đứng ở đâu trước, không chọn theo mỗi từ “lên/xuống” tiếng Việt.",
        "id": "hanngu-q3-b04-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “上车” có nghĩa nào?",
        "options": [
          "xuống xe",
          "qua đó",
          "hành lý",
          "lên xe"
        ],
        "answer": "lên xe",
        "explanation": "上车 (shàng chē): lên xe. Ví dụ: 我在车站上车，你在哪儿下车？ — Tôi lên xe ở bến, bạn xuống ở đâu?",
        "id": "hanngu-q3-b04-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “开车” có nghĩa nào?",
        "options": [
          "mang",
          "bến xe",
          "đợi một chút",
          "lái xe/xe khởi hành"
        ],
        "answer": "lái xe/xe khởi hành",
        "explanation": "开车 (kāi chē): lái xe/xe khởi hành. Ví dụ: 快上来吧，要开车了！ — Lên đây nhanh nào, xe sắp chạy rồi!",
        "id": "hanngu-q3-b04-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “车站” có nghĩa nào?",
        "options": [
          "vào đây",
          "bến xe",
          "quay về đây",
          "sốt ruột"
        ],
        "answer": "bến xe",
        "explanation": "车站 (chē zhàn): bến xe. Ví dụ: 我在车站上车，你在哪儿下车？ — Tôi lên xe ở bến, bạn xuống ở đâu?",
        "id": "hanngu-q3-b04-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “上来” có nghĩa nào?",
        "options": [
          "vào đây",
          "lên xe",
          "lên đây",
          "hành lý"
        ],
        "answer": "lên đây",
        "explanation": "上来 (shàng lái): lên đây. Ví dụ: 快上来吧，要开车了！ — Lên đây nhanh nào, xe sắp chạy rồi!",
        "id": "hanngu-q3-b04-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “quay về đây” (huí lái). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "回来",
        "alternatives": [],
        "explanation": "回来 (huí lái) nghĩa là quay về đây. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b04-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “xuống xe” (xià chē). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "下车",
        "alternatives": [],
        "explanation": "下车 (xià chē) nghĩa là xuống xe. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b04-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Lên xe nào: hướng của chuyển động”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Ghép hướng đơn giản rồi kiểm lại vị trí”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 4, mốc PDF 57. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b05",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 5",
    "title": "Bạn từng trải nghiệm chưa: dùng 过",
    "subtitle": "我听过这首曲子。",
    "minutes": 30,
    "order": 21,
    "objectives": [
      "Dùng mẫu “我听过这首曲子。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Động từ + 过: nhìn một trải nghiệm đã có / 没…过 phủ định trải nghiệm.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn từng trải nghiệm chưa: dùng 过. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Động từ + 过: nhìn một trải nghiệm đã có.",
    "vocabulary": [
      {
        "id": "hnl-lex-ed0e266c6bbf258a",
        "hanzi": "过",
        "pinyin": "guo",
        "meaning": "trợ từ trải nghiệm",
        "example": "你听过这首曲子吗？",
        "examplePinyin": "nǐ tīng guo zhè shǒu qǔ zi ma？",
        "exampleMeaning": "Bạn từng nghe bản nhạc này chưa?"
      },
      {
        "id": "hnl-lex-6bc063e49f261388",
        "hanzi": "听过",
        "pinyin": "tīng guo",
        "meaning": "đã từng nghe",
        "example": "你听过这首曲子吗？",
        "examplePinyin": "nǐ tīng guo zhè shǒu qǔ zi ma？",
        "exampleMeaning": "Bạn từng nghe bản nhạc này chưa?"
      },
      {
        "id": "hnl-lex-dffe7de203b607f1",
        "hanzi": "钢琴",
        "pinyin": "gāng qín",
        "meaning": "đàn dương cầm",
        "example": "我听过一首钢琴协奏曲。",
        "examplePinyin": "wǒ tīng guo yī shǒu gāng qín xié zòu qǔ。",
        "exampleMeaning": "Tôi từng nghe một bản hòa tấu cho đàn dương cầm và dàn nhạc."
      },
      {
        "id": "hnl-lex-97c2ac28ca726cb6",
        "hanzi": "协奏曲",
        "pinyin": "xié zòu qǔ",
        "meaning": "hòa tấu cho nhạc cụ độc tấu và dàn nhạc",
        "example": "我听过一首钢琴协奏曲。",
        "examplePinyin": "wǒ tīng guo yī shǒu gāng qín xié zòu qǔ。",
        "exampleMeaning": "Tôi từng nghe một bản hòa tấu cho đàn dương cầm và dàn nhạc."
      },
      {
        "id": "hnl-lex-f96d0c1c5dbd852a",
        "hanzi": "经历",
        "pinyin": "jīng lì",
        "meaning": "trải nghiệm",
        "example": "这是一次特别的经历。",
        "examplePinyin": "zhè shì yī cì tè bié de jīng lì。",
        "exampleMeaning": "Đây là một trải nghiệm đặc biệt."
      },
      {
        "id": "hnl-lex-5c2a6f346db7712c",
        "hanzi": "以前",
        "pinyin": "yǐ qián",
        "meaning": "trước đây",
        "example": "听过，我以前听过一次。",
        "examplePinyin": "tīng guo， wǒ yǐ qián tīng guo yī cì。",
        "exampleMeaning": "Có, trước đây tôi từng nghe một lần."
      },
      {
        "id": "hnl-lex-9d5f6214a2ca51cb",
        "hanzi": "旅游",
        "pinyin": "lǚ yóu",
        "meaning": "du lịch",
        "example": "我是跟旅游团一起来的。",
        "examplePinyin": "wǒ shì gēn lǚ yóu tuán yì qǐ lái de。",
        "exampleMeaning": "Tôi đến cùng đoàn du lịch."
      },
      {
        "id": "hnl-lex-3b82d651e8384914",
        "hanzi": "中医",
        "pinyin": "zhōng yī",
        "meaning": "y học cổ truyền Trung Quốc/bác sĩ Đông y",
        "example": "我以前去医院看过中医。",
        "examplePinyin": "wǒ yǐ qián qù yī yuàn kàn guo zhōng yī。",
        "exampleMeaning": "Trước đây tôi từng đến bệnh viện khám bác sĩ Đông y."
      },
      {
        "id": "hnl-lex-35b0774b5e3c1dfd",
        "hanzi": "苦",
        "pinyin": "kǔ",
        "meaning": "đắng",
        "example": "这个药有点儿苦。",
        "examplePinyin": "zhè ge yào yǒu diǎnr kǔ。",
        "exampleMeaning": "Thuốc này hơi đắng."
      },
      {
        "id": "hnl-lex-3dad4a53cefe12c9",
        "hanzi": "一次",
        "pinyin": "yī cì",
        "meaning": "một lần",
        "example": "听过，我以前听过一次。",
        "examplePinyin": "tīng guo， wǒ yǐ qián tīng guo yī cì。",
        "exampleMeaning": "Có, trước đây tôi từng nghe một lần."
      },
      {
        "id": "hnl-lex-a3f43b19af9785cd",
        "hanzi": "从来",
        "pinyin": "cóng lái",
        "meaning": "từ trước đến nay",
        "example": "我从来没去过那儿。",
        "examplePinyin": "wǒ cóng lái méi qù guo nàr。",
        "exampleMeaning": "Từ trước tới nay tôi chưa đến đó."
      },
      {
        "id": "hnl-lex-640b185e58b28112",
        "hanzi": "参观",
        "pinyin": "cān guān",
        "meaning": "tham quan",
        "example": "代表团明天去上海参观。",
        "examplePinyin": "dài biǎo tuán míng tiān qù shàng hǎi cān guān。",
        "exampleMeaning": "Ngày mai đoàn đại biểu đến Thượng Hải tham quan."
      },
      {
        "id": "hnl-lex-abc49f108176bbb7",
        "hanzi": "演出",
        "pinyin": "yǎn chū",
        "meaning": "biểu diễn",
        "example": "我们明天去参观，晚上看演出。",
        "examplePinyin": "wǒ men míng tiān qù cān guān， wǎn shàng kàn yǎn chū。",
        "exampleMeaning": "Ngày mai chúng tôi đi tham quan, buổi tối xem biểu diễn."
      },
      {
        "id": "hnl-lex-7d76496c5c921a06",
        "hanzi": "特别",
        "pinyin": "tè bié",
        "meaning": "đặc biệt",
        "example": "这是一次特别的经历。",
        "examplePinyin": "zhè shì yī cì tè bié de jīng lì。",
        "exampleMeaning": "Đây là một trải nghiệm đặc biệt."
      }
    ],
    "grammar": [
      {
        "title": "Động từ + 过: nhìn một trải nghiệm đã có",
        "explanation": "听过这首曲子 hỏi trước đây từng nghe hay chưa. Nó không tự cho biết bạn nghe lúc mấy giờ hoặc đang nghe. Phân biệt trải nghiệm với một việc cụ thể vừa hoàn thành có 了.",
        "example": "我听过这首曲子。",
        "translation": "Tôi đã từng nghe bản nhạc này."
      },
      {
        "title": "没…过 phủ định trải nghiệm",
        "explanation": "没去过 nói chưa từng đến trong phạm vi được nói. 从来没…过 nhấn mạnh từ trước tới nay chưa có trải nghiệm ấy. Bài này luyện cách kể trải nghiệm, không đánh giá phương pháp chữa bệnh hoặc chọn thuốc.",
        "example": "我从来没去过那儿。",
        "translation": "Từ trước tới nay tôi chưa đến đó."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你听过这首曲子吗？",
        "pinyin": "nǐ tīng guo zhè shǒu qǔ zi ma？",
        "meaning": "Bạn từng nghe bản nhạc này chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "听过，我以前听过一次。",
        "pinyin": "tīng guo， wǒ yǐ qián tīng guo yī cì。",
        "meaning": "Có, trước đây tôi từng nghe một lần."
      },
      {
        "speaker": "An",
        "hanzi": "你去过那个地方吗？",
        "pinyin": "nǐ qù guo nà ge dì fāng ma？",
        "meaning": "Bạn từng đến nơi đó chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "没去过。",
        "pinyin": "méi qù guo。",
        "meaning": "Chưa từng đến."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "没去过 chủ yếu phủ định điều gì?",
        "options": [
          "Trải nghiệm đã từng đến",
          "Chỉ việc đang diễn ra",
          "Khả năng đi lại vĩnh viễn"
        ],
        "answer": "Trải nghiệm đã từng đến",
        "explanation": "过 trong mẫu này nhìn việc đã từng có trong trải nghiệm.",
        "id": "hanngu-q3-b05-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "以前",
          "我",
          "听过这首曲子"
        ],
        "answer": "我以前听过这首曲子",
        "explanation": "Câu hoàn chỉnh: 我以前听过这首曲子。 听过这首曲子 hỏi trước đây từng nghe hay chưa. Nó không tự cho biết bạn nghe lúc mấy giờ hoặc đang nghe. Phân biệt trải nghiệm với một việc cụ thể vừa hoàn thành có 了.",
        "id": "hanngu-q3-b05-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “演出” có nghĩa nào?",
        "options": [
          "đặc biệt",
          "biểu diễn",
          "từ trước đến nay",
          "một lần"
        ],
        "answer": "biểu diễn",
        "explanation": "演出 (yǎn chū): biểu diễn. Ví dụ: 我们明天去参观，晚上看演出。 — Ngày mai chúng tôi đi tham quan, buổi tối xem biểu diễn.",
        "id": "hanngu-q3-b05-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “协奏曲” có nghĩa nào?",
        "options": [
          "hòa tấu cho nhạc cụ độc tấu và dàn nhạc",
          "y học cổ truyền Trung Quốc/bác sĩ Đông y",
          "đã từng nghe",
          "đắng"
        ],
        "answer": "hòa tấu cho nhạc cụ độc tấu và dàn nhạc",
        "explanation": "协奏曲 (xié zòu qǔ): hòa tấu cho nhạc cụ độc tấu và dàn nhạc. Ví dụ: 我听过一首钢琴协奏曲。 — Tôi từng nghe một bản hòa tấu cho đàn dương cầm và dàn nhạc.",
        "id": "hanngu-q3-b05-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “从来” có nghĩa nào?",
        "options": [
          "từ trước đến nay",
          "trải nghiệm",
          "đặc biệt",
          "biểu diễn"
        ],
        "answer": "từ trước đến nay",
        "explanation": "从来 (cóng lái): từ trước đến nay. Ví dụ: 我从来没去过那儿。 — Từ trước tới nay tôi chưa đến đó.",
        "id": "hanngu-q3-b05-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “中医” có nghĩa nào?",
        "options": [
          "tham quan",
          "y học cổ truyền Trung Quốc/bác sĩ Đông y",
          "trải nghiệm",
          "đã từng nghe"
        ],
        "answer": "y học cổ truyền Trung Quốc/bác sĩ Đông y",
        "explanation": "中医 (zhōng yī): y học cổ truyền Trung Quốc/bác sĩ Đông y. Ví dụ: 我以前去医院看过中医。 — Trước đây tôi từng đến bệnh viện khám bác sĩ Đông y.",
        "id": "hanngu-q3-b05-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “trải nghiệm” (jīng lì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "经历",
        "alternatives": [],
        "explanation": "经历 (jīng lì) nghĩa là trải nghiệm. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b05-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đắng” (kǔ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "苦",
        "alternatives": [],
        "explanation": "苦 (kǔ) nghĩa là đắng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b05-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn từng trải nghiệm chưa: dùng 过”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “没…过 phủ định trải nghiệm”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 5, mốc PDF 73. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b06",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 6",
    "title": "Bạn đến bằng cách nào: làm nổi bật chi tiết",
    "subtitle": "我是坐火车来的。",
    "minutes": 30,
    "order": 22,
    "objectives": [
      "Dùng mẫu “我是坐火车来的。” trong tình huống phù hợp.",
      "Nhận diện 11 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 是…的 nói chi tiết của việc đã biết xảy ra / 跟…一起 nêu người đi cùng.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn đến bằng cách nào: làm nổi bật chi tiết. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 是…的 nói chi tiết của việc đã biết xảy ra.",
    "vocabulary": [
      {
        "id": "hnl-lex-8a399d57d71ddce7",
        "hanzi": "跟",
        "pinyin": "gēn",
        "meaning": "cùng/với",
        "example": "我是跟旅游团一起来的。",
        "examplePinyin": "wǒ shì gēn lǚ yóu tuán yì qǐ lái de。",
        "exampleMeaning": "Tôi đến cùng đoàn du lịch."
      },
      {
        "id": "hnl-lex-4c3117c2f0611f0d",
        "hanzi": "旅游团",
        "pinyin": "lǚ yóu tuán",
        "meaning": "đoàn du lịch",
        "example": "我是跟旅游团一起来的。",
        "examplePinyin": "wǒ shì gēn lǚ yóu tuán yì qǐ lái de。",
        "exampleMeaning": "Tôi đến cùng đoàn du lịch."
      },
      {
        "id": "hnl-lex-3562a3a8af0ad1ac",
        "hanzi": "坐",
        "pinyin": "zuò",
        "meaning": "đi bằng phương tiện/ngồi",
        "example": "我是坐火车来的。",
        "examplePinyin": "wǒ shì zuò huǒ chē lái de。",
        "exampleMeaning": "Tôi đến bằng tàu hỏa."
      },
      {
        "id": "hnl-lex-9e7b882b897cb14a",
        "hanzi": "火车",
        "pinyin": "huǒ chē",
        "meaning": "tàu hỏa",
        "example": "我是坐火车来的。",
        "examplePinyin": "wǒ shì zuò huǒ chē lái de。",
        "exampleMeaning": "Tôi đến bằng tàu hỏa."
      },
      {
        "id": "hnl-lex-d2b3d1a5fca0963d",
        "hanzi": "飞机",
        "pinyin": "fēi jī",
        "meaning": "máy bay",
        "example": "他去年坐飞机来到这里。",
        "examplePinyin": "tā qù nián zuò fēi jī lái dào zhè lǐ。",
        "exampleMeaning": "Năm ngoái bạn ấy đến đây bằng máy bay."
      },
      {
        "id": "hnl-lex-5e169b79abdb7e6e",
        "hanzi": "汽车",
        "pinyin": "qì chē",
        "meaning": "ô tô",
        "example": "我们坐汽车去车站。",
        "examplePinyin": "wǒ men zuò qì chē qù chē zhàn。",
        "exampleMeaning": "Chúng tôi đi ô tô đến bến xe."
      },
      {
        "id": "hnl-lex-3040cef14c167617",
        "hanzi": "怎么",
        "pinyin": "zěn me",
        "meaning": "cách nào",
        "example": "你是怎么来的？",
        "examplePinyin": "nǐ shì zěn me lái de？",
        "exampleMeaning": "Bạn đến bằng cách nào?"
      },
      {
        "id": "hnl-lex-8f5dbfe855f0af57",
        "hanzi": "什么时候",
        "pinyin": "shén me shí hòu",
        "meaning": "khi nào",
        "example": "你是什么时候来的？",
        "examplePinyin": "nǐ shì shén me shí hòu lái de？",
        "exampleMeaning": "Bạn đến khi nào?"
      },
      {
        "id": "hnl-lex-673491d8d7b48657",
        "hanzi": "一起",
        "pinyin": "yì qǐ",
        "meaning": "cùng nhau",
        "example": "我是跟旅游团一起来的。",
        "examplePinyin": "wǒ shì gēn lǚ yóu tuán yì qǐ lái de。",
        "exampleMeaning": "Tôi đến cùng đoàn du lịch."
      },
      {
        "id": "hnl-lex-850fb4653c2afdcc",
        "hanzi": "去年",
        "pinyin": "qù nián",
        "meaning": "năm ngoái",
        "example": "他去年坐飞机来到这里。",
        "examplePinyin": "tā qù nián zuò fēi jī lái dào zhè lǐ。",
        "exampleMeaning": "Năm ngoái bạn ấy đến đây bằng máy bay."
      },
      {
        "id": "hnl-lex-86edfae2e822b004",
        "hanzi": "来到",
        "pinyin": "lái dào",
        "meaning": "đến",
        "example": "他去年坐飞机来到这里。",
        "examplePinyin": "tā qù nián zuò fēi jī lái dào zhè lǐ。",
        "exampleMeaning": "Năm ngoái bạn ấy đến đây bằng máy bay."
      }
    ],
    "grammar": [
      {
        "title": "是…的 nói chi tiết của việc đã biết xảy ra",
        "explanation": "我是坐火车来的 thường dùng khi việc đến đã được biết, còn cần nhấn cách đến. Không dùng nó như công thức biến mọi câu tương lai thành quá khứ. Xác định thông tin nào đang cần được làm rõ: lúc nào, ở đâu, bằng cách nào.",
        "example": "我是坐火车来的。",
        "translation": "Tôi đến bằng tàu hỏa."
      },
      {
        "title": "跟…一起 nêu người đi cùng",
        "explanation": "我跟旅游团一起来的 nêu đi cùng đoàn. 跟 trong mẫu này không có nghĩa phải luôn theo sau về vị trí. Đọc cả cụm 跟…一起 để hiểu quan hệ cùng tham gia.",
        "example": "我是跟旅游团一起来的。",
        "translation": "Tôi đến cùng đoàn du lịch."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你是什么时候来的？",
        "pinyin": "nǐ shì shén me shí hòu lái de？",
        "meaning": "Bạn đến khi nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我是昨天来的。",
        "pinyin": "wǒ shì zuó tiān lái de。",
        "meaning": "Tôi đến hôm qua."
      },
      {
        "speaker": "An",
        "hanzi": "你是怎么来的？",
        "pinyin": "nǐ shì zěn me lái de？",
        "meaning": "Bạn đến bằng cách nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我是坐火车来的。",
        "pinyin": "wǒ shì zuò huǒ chē lái de。",
        "meaning": "Tôi đến bằng tàu hỏa."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Khi việc đến đã rõ, 我是坐火车来的 làm nổi bật gì?",
        "options": [
          "Số người trong gia đình",
          "Một lời cấm",
          "Phương tiện đến"
        ],
        "answer": "Phương tiện đến",
        "explanation": "坐火车 là chi tiết cách thức được nhấn trong mẫu 是…的.",
        "id": "hanngu-q3-b06-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "来的",
          "是坐火车",
          "我"
        ],
        "answer": "我是坐火车来的",
        "explanation": "Câu hoàn chỉnh: 我是坐火车来的。 我是坐火车来的 thường dùng khi việc đến đã được biết, còn cần nhấn cách đến. Không dùng nó như công thức biến mọi câu tương lai thành quá khứ. Xác định thông tin nào đang cần được làm rõ: lúc nào, ở đâu, bằng cách nào.",
        "id": "hanngu-q3-b06-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “跟” có nghĩa nào?",
        "options": [
          "năm ngoái",
          "cùng/với",
          "đoàn du lịch",
          "ô tô"
        ],
        "answer": "cùng/với",
        "explanation": "跟 (gēn): cùng/với. Ví dụ: 我是跟旅游团一起来的。 — Tôi đến cùng đoàn du lịch.",
        "id": "hanngu-q3-b06-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “汽车” có nghĩa nào?",
        "options": [
          "cách nào",
          "đến",
          "ô tô",
          "đoàn du lịch"
        ],
        "answer": "ô tô",
        "explanation": "汽车 (qì chē): ô tô. Ví dụ: 我们坐汽车去车站。 — Chúng tôi đi ô tô đến bến xe.",
        "id": "hanngu-q3-b06-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “坐” có nghĩa nào?",
        "options": [
          "cách nào",
          "năm ngoái",
          "máy bay",
          "đi bằng phương tiện/ngồi"
        ],
        "answer": "đi bằng phương tiện/ngồi",
        "explanation": "坐 (zuò): đi bằng phương tiện/ngồi. Ví dụ: 我是坐火车来的。 — Tôi đến bằng tàu hỏa.",
        "id": "hanngu-q3-b06-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “来到” có nghĩa nào?",
        "options": [
          "đoàn du lịch",
          "khi nào",
          "máy bay",
          "đến"
        ],
        "answer": "đến",
        "explanation": "来到 (lái dào): đến. Ví dụ: 他去年坐飞机来到这里。 — Năm ngoái bạn ấy đến đây bằng máy bay.",
        "id": "hanngu-q3-b06-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cùng nhau” (yì qǐ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "一起",
        "alternatives": [],
        "explanation": "一起 (yì qǐ) nghĩa là cùng nhau. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b06-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cách nào” (zěn me). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "怎么",
        "alternatives": [],
        "explanation": "怎么 (zěn me) nghĩa là cách nào. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b06-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn đến bằng cách nào: làm nổi bật chi tiết”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “跟…一起 nêu người đi cùng”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 6, mốc PDF 90. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b07",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 7",
    "title": "Bạn tìm thấy hộ chiếu chưa",
    "subtitle": "我的护照还没找到。",
    "minutes": 30,
    "order": 23,
    "objectives": [
      "Dùng mẫu “我的护照还没找到。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 找 không tự suy ra 找到 / 还是 có thể mang ý vẫn.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn tìm thấy hộ chiếu chưa. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 找 không tự suy ra 找到.",
    "vocabulary": [
      {
        "id": "hnl-lex-1cfe2eba25d53c48",
        "hanzi": "护照",
        "pinyin": "hù zhào",
        "meaning": "hộ chiếu",
        "example": "你的护照找到了没有？",
        "examplePinyin": "nǐ de hù zhào zhǎo dào le méi yǒu？",
        "exampleMeaning": "Bạn tìm thấy hộ chiếu chưa?"
      },
      {
        "id": "hnl-lex-1b3e6287ae90241a",
        "hanzi": "找到",
        "pinyin": "zhǎo dào",
        "meaning": "tìm thấy",
        "example": "你的护照找到了没有？",
        "examplePinyin": "nǐ de hù zhào zhǎo dào le méi yǒu？",
        "exampleMeaning": "Bạn tìm thấy hộ chiếu chưa?"
      },
      {
        "id": "hnl-lex-77b35cf7b196740c",
        "hanzi": "找",
        "pinyin": "zhǎo",
        "meaning": "đi tìm",
        "example": "你的护照找到了没有？",
        "examplePinyin": "nǐ de hù zhào zhǎo dào le méi yǒu？",
        "exampleMeaning": "Bạn tìm thấy hộ chiếu chưa?"
      },
      {
        "id": "hnl-lex-add504e3394b7739",
        "hanzi": "还是",
        "pinyin": "hái shì",
        "meaning": "vẫn/hay tùy ngữ cảnh",
        "example": "我还是没找到。",
        "examplePinyin": "wǒ hái shì méi zhǎo dào。",
        "exampleMeaning": "Tôi vẫn chưa tìm thấy."
      },
      {
        "id": "hnl-lex-2babd4d73d7dc8a6",
        "hanzi": "钱包",
        "pinyin": "qián bāo",
        "meaning": "ví tiền",
        "example": "钱包在桌子的抽屉里。",
        "examplePinyin": "qián bāo zài zhuō zi de chōu tì lǐ。",
        "exampleMeaning": "Ví tiền ở trong ngăn kéo bàn."
      },
      {
        "id": "hnl-lex-8b1797068c3e1458",
        "hanzi": "包",
        "pinyin": "bāo",
        "meaning": "túi",
        "example": "你看看包里。",
        "examplePinyin": "nǐ kàn kàn bāo lǐ。",
        "exampleMeaning": "Bạn thử xem trong túi."
      },
      {
        "id": "hnl-lex-8d577d5c0441ddd4",
        "hanzi": "桌子",
        "pinyin": "zhuō zi",
        "meaning": "bàn",
        "example": "钱包在桌子的抽屉里。",
        "examplePinyin": "qián bāo zài zhuō zi de chōu tì lǐ。",
        "exampleMeaning": "Ví tiền ở trong ngăn kéo bàn."
      },
      {
        "id": "hnl-lex-5581e9dbd8eea444",
        "hanzi": "抽屉",
        "pinyin": "chōu tì",
        "meaning": "ngăn kéo",
        "example": "钱包在桌子的抽屉里。",
        "examplePinyin": "qián bāo zài zhuō zi de chōu tì lǐ。",
        "exampleMeaning": "Ví tiền ở trong ngăn kéo bàn."
      },
      {
        "id": "hnl-lex-8a7ee5598552051b",
        "hanzi": "可能",
        "pinyin": "kě néng",
        "meaning": "có thể/có lẽ",
        "example": "你可能记得他。",
        "examplePinyin": "nǐ kě néng jì de tā。",
        "exampleMeaning": "Có thể bạn nhớ bạn ấy."
      },
      {
        "id": "hnl-lex-cc9f4e77a58950da",
        "hanzi": "记得",
        "pinyin": "jì de",
        "meaning": "nhớ",
        "example": "你可能记得他。",
        "examplePinyin": "nǐ kě néng jì de tā。",
        "exampleMeaning": "Có thể bạn nhớ bạn ấy."
      },
      {
        "id": "hnl-lex-8e4bc878d2b8b936",
        "hanzi": "丢",
        "pinyin": "diū",
        "meaning": "mất/đánh mất",
        "example": "我没丢护照，你放心吧。",
        "examplePinyin": "wǒ méi diū hù zhào， nǐ fàng xīn ba。",
        "exampleMeaning": "Tôi không làm mất hộ chiếu, bạn yên tâm đi."
      },
      {
        "id": "hnl-lex-4410d94d222a998b",
        "hanzi": "带",
        "pinyin": "dài",
        "meaning": "mang",
        "example": "东西都带了吗？",
        "examplePinyin": "dōng xī dōu dài le ma？",
        "exampleMeaning": "Bạn mang đủ đồ chưa?"
      },
      {
        "id": "hnl-lex-87d95d0af92958a1",
        "hanzi": "放",
        "pinyin": "fàng",
        "meaning": "đặt/để",
        "example": "我没有东西放在那里。",
        "examplePinyin": "wǒ méi yǒu dōng xī fàng zài nà lǐ。",
        "exampleMeaning": "Tôi không có đồ để ở kia."
      },
      {
        "id": "hnl-lex-321fdef0e5a71946",
        "hanzi": "放心",
        "pinyin": "fàng xīn",
        "meaning": "yên tâm",
        "example": "我没丢护照，你放心吧。",
        "examplePinyin": "wǒ méi diū hù zhào， nǐ fàng xīn ba。",
        "exampleMeaning": "Tôi không làm mất hộ chiếu, bạn yên tâm đi."
      }
    ],
    "grammar": [
      {
        "title": "找 không tự suy ra 找到",
        "explanation": "找 nói quá trình tìm; 找到 khẳng định đạt kết quả tìm thấy. Câu hỏi 找到了没有 yêu cầu thông tin kết quả. Khi chưa tìm thấy, đáp 还没找到 rõ hơn nói một câu mơ hồ về việc đã tìm.",
        "example": "我的护照还没找到。",
        "translation": "Tôi vẫn chưa tìm thấy hộ chiếu."
      },
      {
        "title": "还是 có thể mang ý vẫn",
        "explanation": "我还是没找到 không phải câu hỏi chọn một trong hai. Đọc vị trí và toàn câu để nhận nghĩa; không đồng nhất 还是 ở bài này với mọi câu có “hay” từng học.",
        "example": "我还是没找到。",
        "translation": "Tôi vẫn chưa tìm thấy."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你的护照找到了没有？",
        "pinyin": "nǐ de hù zhào zhǎo dào le méi yǒu？",
        "meaning": "Bạn tìm thấy hộ chiếu chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "还没找到。",
        "pinyin": "hái méi zhǎo dào。",
        "meaning": "Vẫn chưa tìm thấy."
      },
      {
        "speaker": "An",
        "hanzi": "你看看包里。",
        "pinyin": "nǐ kàn kàn bāo lǐ。",
        "meaning": "Bạn thử xem trong túi."
      },
      {
        "speaker": "Minh",
        "hanzi": "找到了！在包里。",
        "pinyin": "zhǎo dào le！ zài bāo lǐ。",
        "meaning": "Tìm thấy rồi! Ở trong túi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn đã đi tìm nhưng chưa thấy. Câu nào giữ đúng cả ý?",
        "options": [
          "我找了，所以一定找到了。",
          "找和找到永远一样。",
          "我找了，但是还没找到。"
        ],
        "answer": "我找了，但是还没找到。",
        "explanation": "Quá trình tìm và kết quả tìm thấy là hai thông tin khác nhau.",
        "id": "hanngu-q3-b07-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "找到",
          "还没",
          "我的护照"
        ],
        "answer": "我的护照还没找到",
        "explanation": "Câu hoàn chỉnh: 我的护照还没找到。 找 nói quá trình tìm; 找到 khẳng định đạt kết quả tìm thấy. Câu hỏi 找到了没有 yêu cầu thông tin kết quả. Khi chưa tìm thấy, đáp 还没找到 rõ hơn nói một câu mơ hồ về việc đã tìm.",
        "id": "hanngu-q3-b07-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “钱包” có nghĩa nào?",
        "options": [
          "có thể/có lẽ",
          "ví tiền",
          "hộ chiếu",
          "yên tâm"
        ],
        "answer": "ví tiền",
        "explanation": "钱包 (qián bāo): ví tiền. Ví dụ: 钱包在桌子的抽屉里。 — Ví tiền ở trong ngăn kéo bàn.",
        "id": "hanngu-q3-b07-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “护照” có nghĩa nào?",
        "options": [
          "hộ chiếu",
          "vẫn/hay tùy ngữ cảnh",
          "bàn",
          "nhớ"
        ],
        "answer": "hộ chiếu",
        "explanation": "护照 (hù zhào): hộ chiếu. Ví dụ: 你的护照找到了没有？ — Bạn tìm thấy hộ chiếu chưa?",
        "id": "hanngu-q3-b07-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “带” có nghĩa nào?",
        "options": [
          "ngăn kéo",
          "mang",
          "bàn",
          "hộ chiếu"
        ],
        "answer": "mang",
        "explanation": "带 (dài): mang. Ví dụ: 东西都带了吗？ — Bạn mang đủ đồ chưa?",
        "id": "hanngu-q3-b07-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “找” có nghĩa nào?",
        "options": [
          "ví tiền",
          "vẫn/hay tùy ngữ cảnh",
          "túi",
          "đi tìm"
        ],
        "answer": "đi tìm",
        "explanation": "找 (zhǎo): đi tìm. Ví dụ: 你的护照找到了没有？ — Bạn tìm thấy hộ chiếu chưa?",
        "id": "hanngu-q3-b07-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tìm thấy” (zhǎo dào). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "找到",
        "alternatives": [],
        "explanation": "找到 (zhǎo dào) nghĩa là tìm thấy. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b07-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ngăn kéo” (chōu tì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "抽屉",
        "alternatives": [],
        "explanation": "抽屉 (chōu tì) nghĩa là ngăn kéo. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b07-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn tìm thấy hộ chiếu chưa”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “还是 có thể mang ý vẫn”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 7, mốc PDF 136. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b08",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 8",
    "title": "Kính bị rơi hỏng: kể tác động và kết quả",
    "subtitle": "我的眼镜摔坏了。",
    "minutes": 30,
    "order": 24,
    "objectives": [
      "Dùng mẫu “我的眼镜摔坏了。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 摔坏 nêu tác động và kết quả hỏng / 弄 + kết quả và 不小心.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: kính bị rơi hỏng: kể tác động và kết quả. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 摔坏 nêu tác động và kết quả hỏng.",
    "vocabulary": [
      {
        "id": "hnl-lex-19377a452f61dad2",
        "hanzi": "眼镜",
        "pinyin": "yǎn jìng",
        "meaning": "kính mắt",
        "example": "你的眼镜怎么了？",
        "examplePinyin": "nǐ de yǎn jìng zěn me le？",
        "exampleMeaning": "Kính của bạn bị sao vậy?"
      },
      {
        "id": "hnl-lex-08919f6c517feefc",
        "hanzi": "摔",
        "pinyin": "shuāi",
        "meaning": "rơi/đánh rơi",
        "example": "摔坏了。",
        "examplePinyin": "shuāi huài le。",
        "exampleMeaning": "Rơi hỏng rồi."
      },
      {
        "id": "hnl-lex-7d2b3982fa732653",
        "hanzi": "坏",
        "pinyin": "huài",
        "meaning": "hỏng",
        "example": "摔坏了。",
        "examplePinyin": "shuāi huài le。",
        "exampleMeaning": "Rơi hỏng rồi."
      },
      {
        "id": "hnl-lex-53481e02c2182260",
        "hanzi": "弄",
        "pinyin": "nòng",
        "meaning": "làm/gây ra trong ngữ cảnh",
        "example": "我不小心弄脏了衣服。",
        "examplePinyin": "wǒ bù xiǎo xīn nòng zāng le yī fú。",
        "exampleMeaning": "Tôi lỡ làm bẩn quần áo."
      },
      {
        "id": "hnl-lex-b45782d7a86a6914",
        "hanzi": "破",
        "pinyin": "pò",
        "meaning": "rách/vỡ",
        "example": "这个杯子破了，那个还是干净的。",
        "examplePinyin": "zhè ge bēi zi pò le， nà ge hái shì gān jìng de。",
        "exampleMeaning": "Cốc này vỡ rồi, cái kia vẫn sạch."
      },
      {
        "id": "hnl-lex-92b528c5708e1b86",
        "hanzi": "脏",
        "pinyin": "zàng",
        "meaning": "bẩn",
        "example": "我不小心弄脏了衣服。",
        "examplePinyin": "wǒ bù xiǎo xīn nòng zāng le yī fú。",
        "exampleMeaning": "Tôi lỡ làm bẩn quần áo."
      },
      {
        "id": "hnl-lex-f4481f532a312750",
        "hanzi": "干净",
        "pinyin": "gān jìng",
        "meaning": "sạch",
        "example": "这个杯子破了，那个还是干净的。",
        "examplePinyin": "zhè ge bēi zi pò le， nà ge hái shì gān jìng de。",
        "exampleMeaning": "Cốc này vỡ rồi, cái kia vẫn sạch."
      },
      {
        "id": "hnl-lex-7f082a6e8b6854d7",
        "hanzi": "修",
        "pinyin": "xiū",
        "meaning": "sửa",
        "example": "能修吗？",
        "examplePinyin": "néng xiū ma？",
        "exampleMeaning": "Sửa được không?"
      },
      {
        "id": "hnl-lex-064ce43b2bd26bfd",
        "hanzi": "换",
        "pinyin": "huàn",
        "meaning": "đổi/thay",
        "example": "我去银行换美元。",
        "examplePinyin": "wǒ qù yín háng huàn měi yuán。",
        "exampleMeaning": "Tôi đến ngân hàng đổi đô la Mỹ."
      },
      {
        "id": "hnl-lex-9c495fd41a8df374",
        "hanzi": "不小心",
        "pinyin": "bù xiǎo xīn",
        "meaning": "không cẩn thận/lỡ",
        "example": "我不小心摔坏了眼镜。",
        "examplePinyin": "wǒ bù xiǎo xīn shuāi huài le yǎn jìng。",
        "exampleMeaning": "Tôi lỡ làm rơi hỏng kính."
      },
      {
        "id": "hnl-lex-653339a76f422ce6",
        "hanzi": "坏了",
        "pinyin": "huài le",
        "meaning": "hỏng rồi",
        "example": "摔坏了。",
        "examplePinyin": "shuāi huài le。",
        "exampleMeaning": "Rơi hỏng rồi."
      },
      {
        "id": "hnl-lex-6db7eb2ed74af14e",
        "hanzi": "结果",
        "pinyin": "jié guǒ",
        "meaning": "kết quả",
        "example": "我们想了一个办法，结果很不错。",
        "examplePinyin": "wǒ men xiǎng le yí gè bàn fǎ， jié guǒ hěn bú cuò。",
        "exampleMeaning": "Chúng tôi nghĩ ra một cách, kết quả khá tốt."
      },
      {
        "id": "hnl-lex-f9b60878d08a37f3",
        "hanzi": "办法",
        "pinyin": "bàn fǎ",
        "meaning": "cách/biện pháp",
        "example": "我们想了一个办法，结果很不错。",
        "examplePinyin": "wǒ men xiǎng le yí gè bàn fǎ， jié guǒ hěn bú cuò。",
        "exampleMeaning": "Chúng tôi nghĩ ra một cách, kết quả khá tốt."
      },
      {
        "id": "hnl-lex-99813faa8fffa8ad",
        "hanzi": "别",
        "pinyin": "bié",
        "meaning": "đừng",
        "example": "别着急，我们还有时间。",
        "examplePinyin": "bié zháo jí， wǒ men hái yǒu shí jiān。",
        "exampleMeaning": "Đừng sốt ruột, chúng ta vẫn còn thời gian."
      }
    ],
    "grammar": [
      {
        "title": "摔坏 nêu tác động và kết quả hỏng",
        "explanation": "摔 nói cách sự việc xảy ra; 坏 cho biết vật hỏng vì tác động ấy. Không cứ rơi là chắc chắn hỏng: nếu chưa biết kết quả chỉ nói 摔了. Khi kể, đừng thêm bổ ngữ kết quả theo thói quen.",
        "example": "我的眼镜摔坏了。",
        "translation": "Kính của tôi rơi hỏng rồi."
      },
      {
        "title": "弄 + kết quả và 不小心",
        "explanation": "弄脏, 弄坏 là các cụm nói làm một vật bẩn hoặc hỏng. 不小心 có thể báo việc xảy ra ngoài ý muốn. Tập nhận trách nhiệm và nói rõ vật bị tác động thay vì che mất chủ thể trong mọi câu.",
        "example": "我不小心摔坏了眼镜。",
        "translation": "Tôi lỡ làm rơi hỏng kính."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你的眼镜怎么了？",
        "pinyin": "nǐ de yǎn jìng zěn me le？",
        "meaning": "Kính của bạn bị sao vậy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "摔坏了。",
        "pinyin": "shuāi huài le。",
        "meaning": "Rơi hỏng rồi."
      },
      {
        "speaker": "An",
        "hanzi": "能修吗？",
        "pinyin": "néng xiū ma？",
        "meaning": "Sửa được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我想先问问。",
        "pinyin": "wǒ xiǎng xiān wèn wèn。",
        "meaning": "Tôi muốn hỏi thử trước."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "摔坏 so với 摔 cho thêm thông tin nào?",
        "options": [
          "Giá mua kính",
          "Kết quả bị hỏng",
          "Thời điểm chính xác đến từng phút"
        ],
        "answer": "Kết quả bị hỏng",
        "explanation": "坏 nêu kết quả, không chỉ thao tác rơi.",
        "id": "hanngu-q3-b08-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我的眼镜",
          "了",
          "摔坏"
        ],
        "answer": "我的眼镜摔坏了",
        "explanation": "Câu hoàn chỉnh: 我的眼镜摔坏了。 摔 nói cách sự việc xảy ra; 坏 cho biết vật hỏng vì tác động ấy. Không cứ rơi là chắc chắn hỏng: nếu chưa biết kết quả chỉ nói 摔了. Khi kể, đừng thêm bổ ngữ kết quả theo thói quen.",
        "id": "hanngu-q3-b08-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “摔” có nghĩa nào?",
        "options": [
          "hỏng rồi",
          "cách/biện pháp",
          "kính mắt",
          "rơi/đánh rơi"
        ],
        "answer": "rơi/đánh rơi",
        "explanation": "摔 (shuāi): rơi/đánh rơi. Ví dụ: 摔坏了。 — Rơi hỏng rồi.",
        "id": "hanngu-q3-b08-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “干净” có nghĩa nào?",
        "options": [
          "đừng",
          "sạch",
          "làm/gây ra trong ngữ cảnh",
          "kính mắt"
        ],
        "answer": "sạch",
        "explanation": "干净 (gān jìng): sạch. Ví dụ: 这个杯子破了，那个还是干净的。 — Cốc này vỡ rồi, cái kia vẫn sạch.",
        "id": "hanngu-q3-b08-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “脏” có nghĩa nào?",
        "options": [
          "đổi/thay",
          "hỏng",
          "rơi/đánh rơi",
          "bẩn"
        ],
        "answer": "bẩn",
        "explanation": "脏 (zàng): bẩn. Ví dụ: 我不小心弄脏了衣服。 — Tôi lỡ làm bẩn quần áo.",
        "id": "hanngu-q3-b08-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “破” có nghĩa nào?",
        "options": [
          "rơi/đánh rơi",
          "sạch",
          "rách/vỡ",
          "kết quả"
        ],
        "answer": "rách/vỡ",
        "explanation": "破 (pò): rách/vỡ. Ví dụ: 这个杯子破了，那个还是干净的。 — Cốc này vỡ rồi, cái kia vẫn sạch.",
        "id": "hanngu-q3-b08-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đừng” (bié). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "别",
        "alternatives": [],
        "explanation": "别 (bié) nghĩa là đừng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b08-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “không cẩn thận/lỡ” (bù xiǎo xīn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "不小心",
        "alternatives": [],
        "explanation": "不小心 (bù xiǎo xīn) nghĩa là không cẩn thận/lỡ. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b08-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Kính bị rơi hỏng: kể tác động và kết quả”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “弄 + kết quả và 不小心”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 8, mốc PDF 123. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b09",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 9",
    "title": "Quên rút chìa khóa: kết quả và hướng",
    "subtitle": "我忘了拔钥匙。",
    "minutes": 30,
    "order": 25,
    "objectives": [
      "Dùng mẫu “我忘了拔钥匙。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Nói rõ việc đã quên làm / 想起来 và 想 không cùng nghĩa.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: quên rút chìa khóa: kết quả và hướng. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Nói rõ việc đã quên làm.",
    "vocabulary": [
      {
        "id": "hnl-lex-9b268fb37d6e3c17",
        "hanzi": "钥匙",
        "pinyin": "yào shi",
        "meaning": "chìa khóa",
        "example": "我忘了拔钥匙。",
        "examplePinyin": "wǒ wàng le bá yào shi。",
        "exampleMeaning": "Tôi quên rút chìa khóa."
      },
      {
        "id": "hnl-lex-503effc1ec0d263c",
        "hanzi": "忘",
        "pinyin": "wàng",
        "meaning": "quên",
        "example": "我忘了拔钥匙。",
        "examplePinyin": "wǒ wàng le bá yào shi。",
        "exampleMeaning": "Tôi quên rút chìa khóa."
      },
      {
        "id": "hnl-lex-f3d7067c246d4560",
        "hanzi": "拔",
        "pinyin": "bá",
        "meaning": "rút/nhổ",
        "example": "我忘了拔钥匙。",
        "examplePinyin": "wǒ wàng le bá yào shi。",
        "exampleMeaning": "Tôi quên rút chìa khóa."
      },
      {
        "id": "hnl-lex-571723cf347467ea",
        "hanzi": "下来",
        "pinyin": "xià lái",
        "meaning": "xuống/tách ra hướng về điểm nhìn",
        "example": "他从楼上下来了。",
        "examplePinyin": "tā cóng lóu shàng xià lái le。",
        "exampleMeaning": "Bạn ấy từ trên lầu xuống đây rồi."
      },
      {
        "id": "hnl-lex-e6354c5191b9260e",
        "hanzi": "拿出来",
        "pinyin": "ná chū lái",
        "meaning": "lấy ra",
        "example": "请拿出来看看，再放进去。",
        "examplePinyin": "qǐng ná chū lái kàn kàn， zài fàng jìn qù。",
        "exampleMeaning": "Mời lấy ra xem, rồi cho vào lại."
      },
      {
        "id": "hnl-lex-920b4405b429543a",
        "hanzi": "放进去",
        "pinyin": "fàng jìn qù",
        "meaning": "cho vào",
        "example": "请拿出来看看，再放进去。",
        "examplePinyin": "qǐng ná chū lái kàn kàn， zài fàng jìn qù。",
        "exampleMeaning": "Mời lấy ra xem, rồi cho vào lại."
      },
      {
        "id": "hnl-lex-43049be980237ef6",
        "hanzi": "想起来",
        "pinyin": "xiǎng qǐ lái",
        "meaning": "nhớ ra",
        "example": "我突然想起来了。",
        "examplePinyin": "wǒ tū rán xiǎng qǐ lái le。",
        "exampleMeaning": "Tôi chợt nhớ ra."
      },
      {
        "id": "hnl-lex-b8e9352e3e6d797b",
        "hanzi": "门",
        "pinyin": "mén",
        "meaning": "cửa",
        "example": "南边有一个门，北边也有一个门。",
        "examplePinyin": "nán biān yǒu yí gè mén， běi biān yě yǒu yí gè mén。",
        "exampleMeaning": "Phía nam có một cửa, phía bắc cũng có một cửa."
      },
      {
        "id": "hnl-lex-9b17ecce8c5b9822",
        "hanzi": "关",
        "pinyin": "guān",
        "meaning": "đóng",
        "example": "关门以前，我发现钥匙还在锁上。",
        "examplePinyin": "guān mén yǐ qián， wǒ fā xiàn yào shi hái zài suǒ shàng。",
        "exampleMeaning": "Trước khi đóng cửa, tôi phát hiện chìa khóa vẫn ở ổ khóa."
      },
      {
        "id": "hnl-lex-03aa9a2a47657a37",
        "hanzi": "开",
        "pinyin": "kāi",
        "meaning": "mở",
        "example": "上课以后，我们开始练习。",
        "examplePinyin": "shàng kè yǐ hòu， wǒ men kāi shǐ liàn xí。",
        "exampleMeaning": "Sau khi vào học, chúng tôi bắt đầu luyện tập."
      },
      {
        "id": "hnl-lex-932a0dca93fa51bd",
        "hanzi": "突然",
        "pinyin": "tū rán",
        "meaning": "đột nhiên",
        "example": "我突然想起来了。",
        "examplePinyin": "wǒ tū rán xiǎng qǐ lái le。",
        "exampleMeaning": "Tôi chợt nhớ ra."
      },
      {
        "id": "hnl-lex-5739dd705f55324c",
        "hanzi": "检查",
        "pinyin": "jiǎn chá",
        "meaning": "kiểm tra",
        "example": "我已经写完了作业，请你检查一下。",
        "examplePinyin": "wǒ yǐ jīng xiě wán le zuò yè， qǐng nǐ jiǎn chá yī xià。",
        "exampleMeaning": "Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp."
      },
      {
        "id": "hnl-lex-22a78295e8e78bba",
        "hanzi": "发现",
        "pinyin": "fā xiàn",
        "meaning": "phát hiện",
        "example": "关门以前，我发现钥匙还在锁上。",
        "examplePinyin": "guān mén yǐ qián， wǒ fā xiàn yào shi hái zài suǒ shàng。",
        "exampleMeaning": "Trước khi đóng cửa, tôi phát hiện chìa khóa vẫn ở ổ khóa."
      },
      {
        "id": "hnl-lex-71174f3271c2b9d7",
        "hanzi": "锁",
        "pinyin": "suǒ",
        "meaning": "khóa",
        "example": "关门以前，我发现钥匙还在锁上。",
        "examplePinyin": "guān mén yǐ qián， wǒ fā xiàn yào shi hái zài suǒ shàng。",
        "exampleMeaning": "Trước khi đóng cửa, tôi phát hiện chìa khóa vẫn ở ổ khóa."
      }
    ],
    "grammar": [
      {
        "title": "Nói rõ việc đã quên làm",
        "explanation": "钥匙忘拔下来了 là cách nói dựa vào vật đang được nhắc trong tình huống. Khi luyện cho rõ, có thể dùng 我忘了拔钥匙: ai quên làm việc gì. Phân biệt quên thực hiện hành động với quên nơi đã để đồ.",
        "example": "我忘了拔钥匙。",
        "translation": "Tôi quên rút chìa khóa."
      },
      {
        "title": "想起来 và 想 không cùng nghĩa",
        "explanation": "想 có thể là nghĩ hoặc muốn; 想起来 trong ngữ cảnh bài nghĩa là nhớ ra. Nắm cả cụm thay vì dịch riêng 起来 thành đứng lên. Với 拿出来, thao tác lấy ra được nhìn cùng hướng chuyển động.",
        "example": "我想起来了。",
        "translation": "Tôi nhớ ra rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你怎么了？",
        "pinyin": "nǐ zěn me le？",
        "meaning": "Bạn sao vậy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我突然想起来了。",
        "pinyin": "wǒ tū rán xiǎng qǐ lái le。",
        "meaning": "Tôi chợt nhớ ra."
      },
      {
        "speaker": "An",
        "hanzi": "什么事？",
        "pinyin": "shén me shì？",
        "meaning": "Chuyện gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我忘了拔钥匙。",
        "pinyin": "wǒ wàng le bá yào shi。",
        "meaning": "Tôi quên rút chìa khóa."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong ngữ cảnh quên một việc rồi nhớ ra, 想起来 nghĩa là gì?",
        "options": [
          "Nhớ ra",
          "Không bao giờ nghĩ",
          "Muốn đứng lên trong mọi trường hợp"
        ],
        "answer": "Nhớ ra",
        "explanation": "Cụm mang nghĩa kết quả nhớ ra; không dịch 起来 từng chữ.",
        "id": "hanngu-q3-b09-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我",
          "拔钥匙",
          "忘了"
        ],
        "answer": "我忘了拔钥匙",
        "explanation": "Câu hoàn chỉnh: 我忘了拔钥匙。 钥匙忘拔下来了 là cách nói dựa vào vật đang được nhắc trong tình huống. Khi luyện cho rõ, có thể dùng 我忘了拔钥匙: ai quên làm việc gì. Phân biệt quên thực hiện hành động với quên nơi đã để đồ.",
        "id": "hanngu-q3-b09-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “发现” có nghĩa nào?",
        "options": [
          "đóng",
          "xuống/tách ra hướng về điểm nhìn",
          "phát hiện",
          "lấy ra"
        ],
        "answer": "phát hiện",
        "explanation": "发现 (fā xiàn): phát hiện. Ví dụ: 关门以前，我发现钥匙还在锁上。 — Trước khi đóng cửa, tôi phát hiện chìa khóa vẫn ở ổ khóa.",
        "id": "hanngu-q3-b09-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “检查” có nghĩa nào?",
        "options": [
          "kiểm tra",
          "phát hiện",
          "chìa khóa",
          "mở"
        ],
        "answer": "kiểm tra",
        "explanation": "检查 (jiǎn chá): kiểm tra. Ví dụ: 我已经写完了作业，请你检查一下。 — Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp.",
        "id": "hanngu-q3-b09-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “钥匙” có nghĩa nào?",
        "options": [
          "chìa khóa",
          "phát hiện",
          "nhớ ra",
          "lấy ra"
        ],
        "answer": "chìa khóa",
        "explanation": "钥匙 (yào shi): chìa khóa. Ví dụ: 我忘了拔钥匙。 — Tôi quên rút chìa khóa.",
        "id": "hanngu-q3-b09-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “拔” có nghĩa nào?",
        "options": [
          "khóa",
          "rút/nhổ",
          "đột nhiên",
          "kiểm tra"
        ],
        "answer": "rút/nhổ",
        "explanation": "拔 (bá): rút/nhổ. Ví dụ: 我忘了拔钥匙。 — Tôi quên rút chìa khóa.",
        "id": "hanngu-q3-b09-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “nhớ ra” (xiǎng qǐ lái). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "想起来",
        "alternatives": [],
        "explanation": "想起来 (xiǎng qǐ lái) nghĩa là nhớ ra. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b09-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “quên” (wàng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "忘",
        "alternatives": [],
        "explanation": "忘 (wàng) nghĩa là quên. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b09-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Quên rút chìa khóa: kết quả và hướng”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “想起来 và 想 không cùng nghĩa”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 9, mốc PDF 106. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-b10",
    "level": 3,
    "unit": "Quyển 3 · Bài nguồn 10",
    "title": "Cửa phòng họp đang mở: trạng thái với 着",
    "subtitle": "会议厅的门开着。",
    "minutes": 30,
    "order": 26,
    "objectives": [
      "Dùng mẫu “会议厅的门开着。” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 着 nhìn trạng thái còn duy trì / Nơi + động từ 着 + sự vật.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: cửa phòng họp đang mở: trạng thái với 着. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 着 nhìn trạng thái còn duy trì.",
    "vocabulary": [
      {
        "id": "hnl-lex-5e8478aad9475aaa",
        "hanzi": "会议厅",
        "pinyin": "huì yì tīng",
        "meaning": "phòng họp/hội trường họp",
        "example": "会议厅的门开着吗？",
        "examplePinyin": "huì yì tīng de mén kāi zhe ma？",
        "exampleMeaning": "Cửa phòng họp có đang mở không?"
      },
      {
        "id": "hnl-lex-06508b78455cf141",
        "hanzi": "开着",
        "pinyin": "kāi zhe",
        "meaning": "đang mở trạng thái",
        "example": "会议厅的门开着吗？",
        "examplePinyin": "huì yì tīng de mén kāi zhe ma？",
        "exampleMeaning": "Cửa phòng họp có đang mở không?"
      },
      {
        "id": "hnl-lex-3314b3bea094e6c4",
        "hanzi": "关着",
        "pinyin": "guān zhe",
        "meaning": "đang đóng trạng thái",
        "example": "门关着，灯亮着。",
        "examplePinyin": "mén guān zhe， dēng liàng zhe。",
        "exampleMeaning": "Cửa đóng, đèn đang sáng."
      },
      {
        "id": "hnl-lex-bff22964b807d03f",
        "hanzi": "着",
        "pinyin": "zhe",
        "meaning": "trợ từ trạng thái",
        "example": "会议厅的门开着吗？",
        "examplePinyin": "huì yì tīng de mén kāi zhe ma？",
        "exampleMeaning": "Cửa phòng họp có đang mở không?"
      },
      {
        "id": "hnl-lex-6b187093db93a728",
        "hanzi": "墙",
        "pinyin": "qiáng",
        "meaning": "tường",
        "example": "墙上挂着什么？",
        "examplePinyin": "qiáng shàng guà zhe shén me？",
        "exampleMeaning": "Trên tường treo gì?"
      },
      {
        "id": "hnl-lex-b1f606a7d5766629",
        "hanzi": "挂",
        "pinyin": "guà",
        "meaning": "treo",
        "example": "墙上挂着什么？",
        "examplePinyin": "qiáng shàng guà zhe shén me？",
        "exampleMeaning": "Trên tường treo gì?"
      },
      {
        "id": "hnl-lex-5dd185662f7ade64",
        "hanzi": "穿着",
        "pinyin": "chuān zhe",
        "meaning": "mặc trên người",
        "example": "他穿着蓝色的衣服。",
        "examplePinyin": "tā chuān zhe lán sè de yī fú。",
        "exampleMeaning": "Bạn ấy đang mặc quần áo màu xanh lam."
      },
      {
        "id": "hnl-lex-04e2785ed46599f1",
        "hanzi": "坐着",
        "pinyin": "zuò zhe",
        "meaning": "ngồi trạng thái",
        "example": "他坐着看书，我站着等他。",
        "examplePinyin": "tā zuò zhe kàn shū， wǒ zhàn zhe děng tā。",
        "exampleMeaning": "Bạn ấy ngồi đọc sách, tôi đứng đợi bạn ấy."
      },
      {
        "id": "hnl-lex-18013538a41a2a41",
        "hanzi": "站着",
        "pinyin": "zhàn zhe",
        "meaning": "đứng trạng thái",
        "example": "他坐着看书，我站着等他。",
        "examplePinyin": "tā zuò zhe kàn shū， wǒ zhàn zhe děng tā。",
        "exampleMeaning": "Bạn ấy ngồi đọc sách, tôi đứng đợi bạn ấy."
      },
      {
        "id": "hnl-lex-9bc825a7c47b3c9b",
        "hanzi": "里面",
        "pinyin": "lǐ miàn",
        "meaning": "bên trong",
        "example": "开着，里面有人。",
        "examplePinyin": "kāi zhe， lǐ miàn yǒu rén。",
        "exampleMeaning": "Đang mở, bên trong có người."
      },
      {
        "id": "hnl-lex-c910c35a21a8b1ae",
        "hanzi": "外面",
        "pinyin": "wài miàn",
        "meaning": "bên ngoài",
        "example": "我在外面，老师在里面。",
        "examplePinyin": "wǒ zài wài miàn， lǎo shī zài lǐ miàn。",
        "exampleMeaning": "Tôi ở bên ngoài, giáo viên ở bên trong."
      },
      {
        "id": "hnl-lex-6f154ffda28c3b41",
        "hanzi": "照片",
        "pinyin": "zhào piān",
        "meaning": "ảnh",
        "example": "挂着一张照片。",
        "examplePinyin": "guà zhe yī zhāng zhào piān。",
        "exampleMeaning": "Treo một tấm ảnh."
      },
      {
        "id": "hnl-lex-5c4670423090d887",
        "hanzi": "灯",
        "pinyin": "dēng",
        "meaning": "đèn",
        "example": "门关着，灯亮着。",
        "examplePinyin": "mén guān zhe， dēng liàng zhe。",
        "exampleMeaning": "Cửa đóng, đèn đang sáng."
      },
      {
        "id": "hnl-lex-3d150a1a0cab3853",
        "hanzi": "亮",
        "pinyin": "liàng",
        "meaning": "sáng",
        "example": "这张照片很漂亮。",
        "examplePinyin": "zhè zhāng zhào piān hěn piào liàng。",
        "exampleMeaning": "Tấm ảnh này rất đẹp."
      }
    ],
    "grammar": [
      {
        "title": "着 nhìn trạng thái còn duy trì",
        "explanation": "门开着 nhấn cửa ở trạng thái mở. So với 正在开门 nói hành động mở cửa đang diễn ra, hai câu nhìn hai mặt khác nhau. Không tự thêm 正在 trước mọi vị ngữ có 着.",
        "example": "会议厅的门开着。",
        "translation": "Cửa phòng họp đang mở."
      },
      {
        "title": "Nơi + động từ 着 + sự vật",
        "explanation": "墙上挂着一张照片 giới thiệu một tấm ảnh ở trạng thái treo trên tường. Tập xác định chỗ đặt khung rồi đến sự vật; không ghép thành câu sở hữu với 有 nếu muốn giữ rõ trạng thái treo.",
        "example": "墙上挂着一张照片。",
        "translation": "Trên tường treo một tấm ảnh."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "会议厅的门开着吗？",
        "pinyin": "huì yì tīng de mén kāi zhe ma？",
        "meaning": "Cửa phòng họp có đang mở không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "开着，里面有人。",
        "pinyin": "kāi zhe， lǐ miàn yǒu rén。",
        "meaning": "Đang mở, bên trong có người."
      },
      {
        "speaker": "An",
        "hanzi": "墙上挂着什么？",
        "pinyin": "qiáng shàng guà zhe shén me？",
        "meaning": "Trên tường treo gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "挂着一张照片。",
        "pinyin": "guà zhe yī zhāng zhào piān。",
        "meaning": "Treo một tấm ảnh."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "门开着 nhấn điều gì?",
        "options": [
          "Cửa chưa từng được mở",
          "Trạng thái cửa đang mở",
          "Chắc chắn có ai đang thực hiện động tác mở"
        ],
        "answer": "Trạng thái cửa đang mở",
        "explanation": "着 giữ cách nhìn trạng thái, khác với hành động 正在开门.",
        "id": "hanngu-q3-b10-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "开",
          "着",
          "会议厅的门"
        ],
        "answer": "会议厅的门开着",
        "explanation": "Câu hoàn chỉnh: 会议厅的门开着。 门开着 nhấn cửa ở trạng thái mở. So với 正在开门 nói hành động mở cửa đang diễn ra, hai câu nhìn hai mặt khác nhau. Không tự thêm 正在 trước mọi vị ngữ có 着.",
        "id": "hanngu-q3-b10-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “站着” có nghĩa nào?",
        "options": [
          "trợ từ trạng thái",
          "ngồi trạng thái",
          "đứng trạng thái",
          "đèn"
        ],
        "answer": "đứng trạng thái",
        "explanation": "站着 (zhàn zhe): đứng trạng thái. Ví dụ: 他坐着看书，我站着等他。 — Bạn ấy ngồi đọc sách, tôi đứng đợi bạn ấy.",
        "id": "hanngu-q3-b10-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “穿着” có nghĩa nào?",
        "options": [
          "mặc trên người",
          "bên trong",
          "đứng trạng thái",
          "sáng"
        ],
        "answer": "mặc trên người",
        "explanation": "穿着 (chuān zhe): mặc trên người. Ví dụ: 他穿着蓝色的衣服。 — Bạn ấy đang mặc quần áo màu xanh lam.",
        "id": "hanngu-q3-b10-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “坐着” có nghĩa nào?",
        "options": [
          "ảnh",
          "ngồi trạng thái",
          "trợ từ trạng thái",
          "đang đóng trạng thái"
        ],
        "answer": "ngồi trạng thái",
        "explanation": "坐着 (zuò zhe): ngồi trạng thái. Ví dụ: 他坐着看书，我站着等他。 — Bạn ấy ngồi đọc sách, tôi đứng đợi bạn ấy.",
        "id": "hanngu-q3-b10-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “外面” có nghĩa nào?",
        "options": [
          "ngồi trạng thái",
          "bên ngoài",
          "treo",
          "đang mở trạng thái"
        ],
        "answer": "bên ngoài",
        "explanation": "外面 (wài miàn): bên ngoài. Ví dụ: 我在外面，老师在里面。 — Tôi ở bên ngoài, giáo viên ở bên trong.",
        "id": "hanngu-q3-b10-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tường” (qiáng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "墙",
        "alternatives": [],
        "explanation": "墙 (qiáng) nghĩa là tường. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b10-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “treo” (guà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "挂",
        "alternatives": [],
        "explanation": "挂 (guà) nghĩa là treo. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q3-b10-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Cửa phòng họp đang mở: trạng thái với 着”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Nơi + động từ 着 + sự vật”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 3, bài 10, mốc PDF 149. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q3-on-tap",
    "level": 3,
    "unit": "Ôn tập quyển 3",
    "title": "Nhìn lại quyển 3 — Dùng được điều đã học",
    "subtitle": "Ôn ý nghĩa · Chọn cấu trúc · Tự nói lại",
    "minutes": 30,
    "order": 27,
    "objectives": [
      "Nhớ lại từ đã học mà không nhìn nghĩa trước.",
      "Chọn cấu trúc theo ý muốn nói, không chỉ theo một từ khóa.",
      "Đọc phản hồi và quay lại đúng bài đang nhầm."
    ],
    "introduction": "Đây là điểm dừng ôn tập sau toàn bộ quyển 3. Các câu hỏi được lấy lại có chủ đích từ những tình huống đã học để kiểm tra khả năng nhớ sau một khoảng cách. Làm trước rồi đọc lời giải; khi chưa đúng, ghi tên chủ đề và quay lại bài tương ứng. Không cần chạy đua điểm số.",
    "vocabulary": [
      {
        "id": "hnl-lex-6684aa6f8e2e22a5",
        "hanzi": "比",
        "pinyin": "bǐ",
        "meaning": "so với",
        "example": "我比你更喜欢音乐。",
        "examplePinyin": "wǒ bǐ nǐ gèng xǐ huān yīn yuè。",
        "exampleMeaning": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "id": "hnl-lex-4fa73f6141c990e2",
        "hanzi": "更",
        "pinyin": "gèng",
        "meaning": "hơn nữa",
        "example": "我比你更喜欢音乐。",
        "examplePinyin": "wǒ bǐ nǐ gèng xǐ huān yīn yuè。",
        "exampleMeaning": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "id": "hnl-lex-df150fa1044124fa",
        "hanzi": "音乐",
        "pinyin": "yīn yuè",
        "meaning": "âm nhạc",
        "example": "你喜欢音乐吗？",
        "examplePinyin": "nǐ xǐ huān yīn yuè ma？",
        "exampleMeaning": "Bạn thích âm nhạc không?"
      },
      {
        "id": "hnl-lex-65a12bc6190ace4f",
        "hanzi": "比较",
        "pinyin": "bǐ jiào",
        "meaning": "tương đối/so sánh",
        "example": "这本书比较容易。",
        "examplePinyin": "zhè běn shū bǐ jiào róng yì。",
        "exampleMeaning": "Quyển sách này tương đối dễ."
      },
      {
        "id": "hnl-lex-11026950edee08f3",
        "hanzi": "喜欢",
        "pinyin": "xǐ huān",
        "meaning": "thích",
        "example": "你喜欢音乐吗？",
        "examplePinyin": "nǐ xǐ huān yīn yuè ma？",
        "exampleMeaning": "Bạn thích âm nhạc không?"
      },
      {
        "id": "hnl-lex-8cf1abc4dd910944",
        "hanzi": "一样",
        "pinyin": "yī yàng",
        "meaning": "giống nhau",
        "example": "我的书和你的书一样。",
        "examplePinyin": "wǒ de shū hé nǐ de shū yī yàng。",
        "exampleMeaning": "Sách của tôi giống sách của bạn."
      },
      {
        "id": "hnl-lex-7864fde65033a6c8",
        "hanzi": "不一样",
        "pinyin": "bù yí yàng",
        "meaning": "không giống",
        "example": "我们喜欢的音乐不一样。",
        "examplePinyin": "wǒ men xǐ huān de yīn yuè bù yí yàng。",
        "exampleMeaning": "Âm nhạc chúng tôi thích không giống nhau."
      },
      {
        "id": "hnl-lex-504f579ff6b83759",
        "hanzi": "没有",
        "pinyin": "méi yǒu",
        "meaning": "không bằng trong so sánh",
        "example": "我没有他那么喜欢唱歌。",
        "examplePinyin": "wǒ méi yǒu tā nà me xǐ huān chàng gē。",
        "exampleMeaning": "Tôi không thích hát đến mức như bạn ấy."
      },
      {
        "id": "hnl-lex-f0ad931d5d166ccc",
        "hanzi": "觉得",
        "pinyin": "jué de",
        "meaning": "cảm thấy/cho rằng",
        "example": "我们都觉得音乐很有意思。",
        "examplePinyin": "wǒ men dōu jué de yīn yuè hěn yǒu yì si。",
        "exampleMeaning": "Chúng ta đều thấy âm nhạc rất thú vị."
      },
      {
        "id": "hnl-lex-adfdbfac4ad35aae",
        "hanzi": "有意思",
        "pinyin": "yǒu yì si",
        "meaning": "thú vị",
        "example": "我们都觉得音乐很有意思。",
        "examplePinyin": "wǒ men dōu jué de yīn yuè hěn yǒu yì si。",
        "exampleMeaning": "Chúng ta đều thấy âm nhạc rất thú vị."
      },
      {
        "id": "hnl-lex-d0bd40a4c491723b",
        "hanzi": "一点儿",
        "pinyin": "yī diǎnr",
        "meaning": "một chút",
        "example": "请说慢一点儿。",
        "examplePinyin": "qǐng shuō màn yì diǎnr。",
        "exampleMeaning": "Xin nói chậm một chút."
      },
      {
        "id": "hnl-lex-0873af5bb909233e",
        "hanzi": "多了",
        "pinyin": "duō le",
        "meaning": "hơn nhiều",
        "example": "这里比那儿暖和多了。",
        "examplePinyin": "zhè lǐ bǐ nàr nuǎn huo duō le。",
        "exampleMeaning": "Ở đây ấm hơn kia nhiều."
      },
      {
        "id": "hnl-lex-7d1f5438cf5f2062",
        "hanzi": "兴趣",
        "pinyin": "xìng qù",
        "meaning": "hứng thú",
        "example": "我对京剧感兴趣。",
        "examplePinyin": "wǒ duì jīng jù gǎn xìng qù。",
        "exampleMeaning": "Tôi có hứng thú với Kinh kịch."
      },
      {
        "id": "hnl-lex-8fad55eeb7206040",
        "hanzi": "唱歌",
        "pinyin": "chàng gē",
        "meaning": "hát",
        "example": "我没有他那么喜欢唱歌。",
        "examplePinyin": "wǒ méi yǒu tā nà me xǐ huān chàng gē。",
        "exampleMeaning": "Tôi không thích hát đến mức như bạn ấy."
      },
      {
        "id": "hnl-lex-4c8df1576225486b",
        "hanzi": "冬天",
        "pinyin": "dōng tiān",
        "meaning": "mùa đông",
        "example": "你们那儿冬天冷吗？",
        "examplePinyin": "nǐ men nàr dōng tiān lěng ma？",
        "exampleMeaning": "Mùa đông chỗ bạn có lạnh không?"
      },
      {
        "id": "hnl-lex-aecc93d361954a2a",
        "hanzi": "夏天",
        "pinyin": "xià tiān",
        "meaning": "mùa hè",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-e84a55380c8dfdaf",
        "hanzi": "春天",
        "pinyin": "chūn tiān",
        "meaning": "mùa xuân",
        "example": "我更喜欢春天。",
        "examplePinyin": "wǒ gèng xǐ huān chūn tiān。",
        "exampleMeaning": "Tôi thích mùa xuân hơn."
      },
      {
        "id": "hnl-lex-979ed96961999a26",
        "hanzi": "秋天",
        "pinyin": "qiū tiān",
        "meaning": "mùa thu",
        "example": "秋天不太热，也不太冷。",
        "examplePinyin": "qiū tiān bù tài rè， yě bù tài lěng。",
        "exampleMeaning": "Mùa thu không quá nóng cũng không quá lạnh."
      },
      {
        "id": "hnl-lex-821fede84bed15e2",
        "hanzi": "天气",
        "pinyin": "tiān qì",
        "meaning": "thời tiết",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-a1de625a0986ff38",
        "hanzi": "冷",
        "pinyin": "lěng",
        "meaning": "lạnh",
        "example": "你们那儿冬天冷吗？",
        "examplePinyin": "nǐ men nàr dōng tiān lěng ma？",
        "exampleMeaning": "Mùa đông chỗ bạn có lạnh không?"
      },
      {
        "id": "hnl-lex-f5eba528609c6420",
        "hanzi": "热",
        "pinyin": "rè",
        "meaning": "nóng",
        "example": "夏天天气热，冬天天气冷。",
        "examplePinyin": "xià tiān tiān qì rè， dōng tiān tiān qì lěng。",
        "exampleMeaning": "Mùa hè thời tiết nóng, mùa đông thời tiết lạnh."
      },
      {
        "id": "hnl-lex-6591706be05fbb9c",
        "hanzi": "下雪",
        "pinyin": "xià xuě",
        "meaning": "tuyết rơi",
        "example": "今天下雪，昨天还下雨了。",
        "examplePinyin": "jīn tiān xià xuě， zuó tiān hái xià yǔ le。",
        "exampleMeaning": "Hôm nay tuyết rơi, hôm qua còn mưa."
      },
      {
        "id": "hnl-lex-eb0b169e62b2e7fc",
        "hanzi": "下雨",
        "pinyin": "xià yǔ",
        "meaning": "mưa",
        "example": "今天下雪，昨天还下雨了。",
        "examplePinyin": "jīn tiān xià xuě， zuó tiān hái xià yǔ le。",
        "exampleMeaning": "Hôm nay tuyết rơi, hôm qua còn mưa."
      },
      {
        "id": "hnl-lex-f0bdf7995eca5d35",
        "hanzi": "温度",
        "pinyin": "wēn dù",
        "meaning": "nhiệt độ",
        "example": "现在的温度是零下五度。",
        "examplePinyin": "xiàn zài de wēn dù shì líng xià wǔ dù。",
        "exampleMeaning": "Nhiệt độ hiện tại là âm năm độ."
      },
      {
        "id": "hnl-lex-0ac655718ea477d0",
        "hanzi": "零下",
        "pinyin": "líng xià",
        "meaning": "dưới không độ",
        "example": "现在的温度是零下五度。",
        "examplePinyin": "xiàn zài de wēn dù shì líng xià wǔ dù。",
        "exampleMeaning": "Nhiệt độ hiện tại là âm năm độ."
      },
      {
        "id": "hnl-lex-01cea0883c107adb",
        "hanzi": "暖和",
        "pinyin": "nuǎn huo",
        "meaning": "ấm áp",
        "example": "这里比那儿暖和多了。",
        "examplePinyin": "zhè lǐ bǐ nàr nuǎn huo duō le。",
        "exampleMeaning": "Ở đây ấm hơn kia nhiều."
      },
      {
        "id": "hnl-lex-7a7cb0fb3b61fc25",
        "hanzi": "季节",
        "pinyin": "jì jié",
        "meaning": "mùa",
        "example": "你喜欢哪个季节？",
        "examplePinyin": "nǐ xǐ huān nǎ ge jì jié？",
        "exampleMeaning": "Bạn thích mùa nào?"
      },
      {
        "id": "hnl-lex-b0432e7119ebe15c",
        "hanzi": "地方",
        "pinyin": "dì fāng",
        "meaning": "nơi/chỗ",
        "example": "你去过那个地方吗？",
        "examplePinyin": "nǐ qù guo nà ge dì fāng ma？",
        "exampleMeaning": "Bạn từng đến nơi đó chưa?"
      },
      {
        "id": "hnl-lex-37e5422296e36382",
        "hanzi": "快要",
        "pinyin": "kuài yào",
        "meaning": "sắp",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-c95555516c6d5dee",
        "hanzi": "就要",
        "pinyin": "jiù yào",
        "meaning": "sắp",
        "example": "明天就要考试了。",
        "examplePinyin": "míng tiān jiù yào kǎo shì le。",
        "exampleMeaning": "Ngày mai thi rồi."
      },
      {
        "id": "hnl-lex-df1ae3bd89dc6cad",
        "hanzi": "快",
        "pinyin": "kuài",
        "meaning": "sắp/nhanh",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-763624bbb7b7de52",
        "hanzi": "了",
        "pinyin": "le",
        "meaning": "trợ từ báo thay đổi",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-1545cc48551fde8b",
        "hanzi": "放假",
        "pinyin": "fàng jià",
        "meaning": "nghỉ học/nghỉ lễ",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      },
      {
        "id": "hnl-lex-568a79d645fb2670",
        "hanzi": "考试",
        "pinyin": "kǎo shì",
        "meaning": "thi",
        "example": "明天就要考试了。",
        "examplePinyin": "míng tiān jiù yào kǎo shì le。",
        "exampleMeaning": "Ngày mai thi rồi."
      },
      {
        "id": "hnl-lex-8ed8446b7ea0617c",
        "hanzi": "准备",
        "pinyin": "zhǔn bèi",
        "meaning": "chuẩn bị",
        "example": "她正在准备考试，没有看电视。",
        "examplePinyin": "tā zhèng zài zhǔn bèi kǎo shì， méi yǒu kàn diàn shì。",
        "exampleMeaning": "Bạn ấy đang chuẩn bị thi, không xem ti vi."
      },
      {
        "id": "hnl-lex-e18cf85a5e297388",
        "hanzi": "计划",
        "pinyin": "jì huà",
        "meaning": "kế hoạch",
        "example": "快要放假了，你有什么计划？",
        "examplePinyin": "kuài yào fàng jià le， nǐ yǒu shén me jì huà？",
        "exampleMeaning": "Sắp nghỉ rồi, bạn có kế hoạch gì?"
      }
    ],
    "grammar": [
      {
        "title": "A比B + tính chất",
        "explanation": "A và B là hai đối tượng được đặt lên cùng một mặt so sánh. Trong 我比你更喜欢音乐, điều so là mức độ thích âm nhạc. Không biến câu thành bảng xếp hạng ai giỏi hay có giá trị hơn.",
        "example": "我比你更喜欢音乐。",
        "translation": "Tôi thích âm nhạc hơn bạn."
      },
      {
        "title": "是…的 nói chi tiết của việc đã biết xảy ra",
        "explanation": "我是坐火车来的 thường dùng khi việc đến đã được biết, còn cần nhấn cách đến. Không dùng nó như công thức biến mọi câu tương lai thành quá khứ. Xác định thông tin nào đang cần được làm rõ: lúc nào, ở đâu, bằng cách nào.",
        "example": "我是坐火车来的。",
        "translation": "Tôi đến bằng tàu hỏa."
      },
      {
        "title": "着 nhìn trạng thái còn duy trì",
        "explanation": "门开着 nhấn cửa ở trạng thái mở. So với 正在开门 nói hành động mở cửa đang diễn ra, hai câu nhìn hai mặt khác nhau. Không tự thêm 正在 trước mọi vị ngữ có 着.",
        "example": "会议厅的门开着。",
        "translation": "Cửa phòng họp đang mở."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你是怎么来的？",
        "pinyin": "nǐ shì zěn me lái de？",
        "meaning": "Bạn đến bằng cách nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我是坐火车来的。",
        "pinyin": "wǒ shì zuò huǒ chē lái de。",
        "meaning": "Tôi đến bằng tàu hỏa."
      },
      {
        "speaker": "An",
        "hanzi": "你的护照找到了吗？",
        "pinyin": "nǐ de hù zhào zhǎo dào le ma？",
        "meaning": "Bạn tìm thấy hộ chiếu chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "找到了，在包里。",
        "pinyin": "zhǎo dào le， zài bāo lǐ。",
        "meaning": "Tìm thấy rồi, ở trong túi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 我比你更喜欢音乐, hai người được so về điều gì?",
        "options": [
          "Chiều cao",
          "Số tiền có trong ví",
          "Mức độ thích âm nhạc"
        ],
        "answer": "Mức độ thích âm nhạc",
        "explanation": "喜欢音乐 là nội dung được so; 更 nhấn mức độ hơn.",
        "id": "hanngu-q3-on-tap-q1"
      },
      {
        "type": "choice",
        "prompt": "今天比昨天冷 so sánh theo mặt nào?",
        "options": [
          "Sở hữu một vật",
          "Giá hai món đồ",
          "Độ lạnh ở hai thời điểm"
        ],
        "answer": "Độ lạnh ở hai thời điểm",
        "explanation": "今天 và 昨天 đặt hai thời điểm trên cùng mặt so sánh 冷.",
        "id": "hanngu-q3-on-tap-q2"
      },
      {
        "type": "choice",
        "prompt": "冬天快要到了 biểu đạt thời điểm nào?",
        "options": [
          "Sắp đến",
          "Không bao giờ đến",
          "Đã qua rất lâu"
        ],
        "answer": "Sắp đến",
        "explanation": "快要…了 nhấn một tình huống sắp xảy ra.",
        "id": "hanngu-q3-on-tap-q3"
      },
      {
        "type": "choice",
        "prompt": "Người nói ở trên xe gọi người dưới đất về phía mình. Cụm nào hợp?",
        "options": [
          "出去",
          "下去",
          "上来"
        ],
        "answer": "上来",
        "explanation": "Lên về phía người nói nên dùng 上来 trong tình huống này.",
        "id": "hanngu-q3-on-tap-q4"
      },
      {
        "type": "choice",
        "prompt": "没去过 chủ yếu phủ định điều gì?",
        "options": [
          "Trải nghiệm đã từng đến",
          "Chỉ việc đang diễn ra",
          "Khả năng đi lại vĩnh viễn"
        ],
        "answer": "Trải nghiệm đã từng đến",
        "explanation": "过 trong mẫu này nhìn việc đã từng có trong trải nghiệm.",
        "id": "hanngu-q3-on-tap-q5"
      },
      {
        "type": "choice",
        "prompt": "Khi việc đến đã rõ, 我是坐火车来的 làm nổi bật gì?",
        "options": [
          "Số người trong gia đình",
          "Một lời cấm",
          "Phương tiện đến"
        ],
        "answer": "Phương tiện đến",
        "explanation": "坐火车 là chi tiết cách thức được nhấn trong mẫu 是…的.",
        "id": "hanngu-q3-on-tap-q6"
      },
      {
        "type": "choice",
        "prompt": "Trong ngữ cảnh quên một việc rồi nhớ ra, 想起来 nghĩa là gì?",
        "options": [
          "Nhớ ra",
          "Không bao giờ nghĩ",
          "Muốn đứng lên trong mọi trường hợp"
        ],
        "answer": "Nhớ ra",
        "explanation": "Cụm mang nghĩa kết quả nhớ ra; không dịch 起来 từng chữ.",
        "id": "hanngu-q3-on-tap-q7"
      },
      {
        "type": "choice",
        "prompt": "摔坏 so với 摔 cho thêm thông tin nào?",
        "options": [
          "Giá mua kính",
          "Kết quả bị hỏng",
          "Thời điểm chính xác đến từng phút"
        ],
        "answer": "Kết quả bị hỏng",
        "explanation": "坏 nêu kết quả, không chỉ thao tác rơi.",
        "id": "hanngu-q3-on-tap-q8"
      },
      {
        "type": "choice",
        "prompt": "Bạn đã đi tìm nhưng chưa thấy. Câu nào giữ đúng cả ý?",
        "options": [
          "我找了，所以一定找到了。",
          "找和找到永远一样。",
          "我找了，但是还没找到。"
        ],
        "answer": "我找了，但是还没找到。",
        "explanation": "Quá trình tìm và kết quả tìm thấy là hai thông tin khác nhau.",
        "id": "hanngu-q3-on-tap-q9"
      },
      {
        "type": "choice",
        "prompt": "门开着 nhấn điều gì?",
        "options": [
          "Cửa chưa từng được mở",
          "Trạng thái cửa đang mở",
          "Chắc chắn có ai đang thực hiện động tác mở"
        ],
        "answer": "Trạng thái cửa đang mở",
        "explanation": "着 giữ cách nhìn trạng thái, khác với hành động 正在开门.",
        "id": "hanngu-q3-on-tap-q10"
      }
    ],
    "summary": "Hãy chọn một tình huống trong quyển và nói lại bằng thông tin của chính bạn. Ôn từ còn quên trước khi sang quyển mới. Điểm ôn tập giúp nhận diện chỗ cần học lại, không phải chứng nhận năng lực thi HSK hay chấm phát âm.",
    "provenance": "Hán Ngữ Lab tự biên soạn điểm ôn bằng kiến thức trong quyển; câu hỏi lặp có chủ đích để gợi nhớ. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b11",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 11",
    "title": "Đọc cảnh chờ xe: sự xuất hiện và biến đổi",
    "subtitle": "前边开过来一辆空车。",
    "minutes": 30,
    "order": 28,
    "objectives": [
      "Dùng mẫu “前边开过来一辆空车。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Câu tồn hiện: nơi chốn trước, thông tin mới sau / 越来越 và 越…越….",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: đọc cảnh chờ xe: sự xuất hiện và biến đổi. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Câu tồn hiện: nơi chốn trước, thông tin mới sau.",
    "vocabulary": [
      {
        "id": "hnl-lex-4130169aa3cf59da",
        "hanzi": "前边",
        "pinyin": "qián biān",
        "meaning": "phía trước",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-9cad08e594714c98",
        "hanzi": "辆",
        "pinyin": "liàng",
        "meaning": "lượng từ cho xe",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-b98f334be1ec9f4e",
        "hanzi": "空车",
        "pinyin": "kōng chē",
        "meaning": "xe không có khách",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-1f0c7ff186712229",
        "hanzi": "院子",
        "pinyin": "yuàn zi",
        "meaning": "sân",
        "example": "我家院子里有一棵树。",
        "examplePinyin": "wǒ jiā yuàn zi lǐ yǒu yī kē shù。",
        "exampleMeaning": "Trong sân nhà tôi có một cái cây."
      },
      {
        "id": "hnl-lex-29670501ee5bebb4",
        "hanzi": "种",
        "pinyin": "zhǒng",
        "meaning": "trồng",
        "example": "院子里种着很多花。",
        "examplePinyin": "yuàn zi lǐ zhǒng zhe hěn duō huā。",
        "exampleMeaning": "Trong sân trồng nhiều hoa."
      },
      {
        "id": "hnl-lex-bf907f9a4e537b7a",
        "hanzi": "棵",
        "pinyin": "kē",
        "meaning": "lượng từ cho cây",
        "example": "我家院子里有一棵树。",
        "examplePinyin": "wǒ jiā yuàn zi lǐ yǒu yī kē shù。",
        "exampleMeaning": "Trong sân nhà tôi có một cái cây."
      },
      {
        "id": "hnl-lex-b19eda44f0c3ed7c",
        "hanzi": "越来越",
        "pinyin": "yuè lái yuè",
        "meaning": "càng ngày càng",
        "example": "等车的人越来越多了。",
        "examplePinyin": "děng chē de rén yuè lái yuè duō le。",
        "exampleMeaning": "Người chờ xe càng ngày càng đông."
      },
      {
        "id": "hnl-lex-f1bc08caa34e4799",
        "hanzi": "越",
        "pinyin": "yuè",
        "meaning": "càng",
        "example": "等车的人越来越多了。",
        "examplePinyin": "děng chē de rén yuè lái yuè duō le。",
        "exampleMeaning": "Người chờ xe càng ngày càng đông."
      },
      {
        "id": "hnl-lex-7a119fe65f4ab0a8",
        "hanzi": "出租车",
        "pinyin": "chū zū chē",
        "meaning": "taxi",
        "example": "那就坐出租车去吧。",
        "examplePinyin": "nà jiù zuò chū zū chē qù ba。",
        "exampleMeaning": "Vậy đi taxi nhé."
      },
      {
        "id": "hnl-lex-d70892e4a91e890d",
        "hanzi": "正好",
        "pinyin": "zhèng hǎo",
        "meaning": "vừa đúng lúc",
        "example": "正好，我也不想再等了。",
        "examplePinyin": "zhèng hǎo， wǒ yě bù xiǎng zài děng le。",
        "exampleMeaning": "Vừa hay, tôi cũng không muốn đợi nữa."
      }
    ],
    "grammar": [
      {
        "title": "Câu tồn hiện: nơi chốn trước, thông tin mới sau",
        "explanation": "Trong 前边开过来一辆空车, phía trước là nền không gian; một chiếc xe xuất hiện là thông tin mới. Danh ngữ sau động từ thường chưa xác định trong ngữ cảnh. Đây không phải cách đảo tùy ý mọi câu có 在.",
        "example": "前边开过来一辆空车。",
        "translation": "Phía trước có một chiếc xe trống chạy tới."
      },
      {
        "title": "越来越 và 越…越…",
        "explanation": "越来越多 tả số lượng tăng theo thời gian; 越等越着急 liên kết hai biến đổi: càng đợi càng sốt ruột. Không dùng hai mẫu như các từ đồng nghĩa có thể thay ở mọi vị trí.",
        "example": "等车的人越来越多了。",
        "translation": "Người chờ xe càng ngày càng đông."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "等车的人越来越多了。",
        "pinyin": "děng chē de rén yuè lái yuè duō le。",
        "meaning": "Người chờ xe càng ngày càng đông."
      },
      {
        "speaker": "Minh",
        "hanzi": "前边有一辆空车。",
        "pinyin": "qián biān yǒu yī liàng kōng chē。",
        "meaning": "Phía trước có một chiếc xe trống."
      },
      {
        "speaker": "An",
        "hanzi": "那就坐出租车去吧。",
        "pinyin": "nà jiù zuò chū zū chē qù ba。",
        "meaning": "Vậy đi taxi nhé."
      },
      {
        "speaker": "Minh",
        "hanzi": "正好，我也不想再等了。",
        "pinyin": "zhèng hǎo， wǒ yě bù xiǎng zài děng le。",
        "meaning": "Vừa hay, tôi cũng không muốn đợi nữa."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 前边开过来一辆空车, thông tin mới được giới thiệu là gì?",
        "options": [
          "Một quy tắc cấm đi xe",
          "Một chiếc xe chạy tới",
          "Tên riêng của người nói"
        ],
        "answer": "Một chiếc xe chạy tới",
        "explanation": "Câu đặt nơi chốn làm nền rồi giới thiệu sự vật xuất hiện.",
        "id": "hanngu-q4-b11-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "开过来",
          "前边",
          "一辆空车"
        ],
        "answer": "前边开过来一辆空车",
        "explanation": "Câu hoàn chỉnh: 前边开过来一辆空车。 Trong 前边开过来一辆空车, phía trước là nền không gian; một chiếc xe xuất hiện là thông tin mới. Danh ngữ sau động từ thường chưa xác định trong ngữ cảnh. Đây không phải cách đảo tùy ý mọi câu có 在.",
        "id": "hanngu-q4-b11-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “辆” có nghĩa nào?",
        "options": [
          "càng",
          "lượng từ cho xe",
          "trồng",
          "taxi"
        ],
        "answer": "lượng từ cho xe",
        "explanation": "辆 (liàng): lượng từ cho xe. Ví dụ: 前边有一辆空车。 — Phía trước có một chiếc xe trống.",
        "id": "hanngu-q4-b11-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “空车” có nghĩa nào?",
        "options": [
          "xe không có khách",
          "càng ngày càng",
          "lượng từ cho xe",
          "vừa đúng lúc"
        ],
        "answer": "xe không có khách",
        "explanation": "空车 (kōng chē): xe không có khách. Ví dụ: 前边有一辆空车。 — Phía trước có một chiếc xe trống.",
        "id": "hanngu-q4-b11-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “种” có nghĩa nào?",
        "options": [
          "phía trước",
          "sân",
          "xe không có khách",
          "trồng"
        ],
        "answer": "trồng",
        "explanation": "种 (zhǒng): trồng. Ví dụ: 院子里种着很多花。 — Trong sân trồng nhiều hoa.",
        "id": "hanngu-q4-b11-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “出租车” có nghĩa nào?",
        "options": [
          "taxi",
          "càng",
          "càng ngày càng",
          "vừa đúng lúc"
        ],
        "answer": "taxi",
        "explanation": "出租车 (chū zū chē): taxi. Ví dụ: 那就坐出租车去吧。 — Vậy đi taxi nhé.",
        "id": "hanngu-q4-b11-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “lượng từ cho cây” (kē). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "棵",
        "alternatives": [],
        "explanation": "棵 (kē) nghĩa là lượng từ cho cây. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b11-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “vừa đúng lúc” (zhèng hǎo). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "正好",
        "alternatives": [],
        "explanation": "正好 (zhèng hǎo) nghĩa là vừa đúng lúc. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b11-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Đọc cảnh chờ xe: sự xuất hiện và biến đổi”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “越来越 và 越…越…”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 11, mốc PDF 8. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b12",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 12",
    "title": "Đọc về chữ Phúc: miêu tả cách sắp xếp",
    "subtitle": "我们把桌子摆好了。",
    "minutes": 30,
    "order": 29,
    "objectives": [
      "Dùng mẫu “我们把桌子摆好了。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 把 + vật đã biết + hành động và kết quả / 倒贴 và sắc thái văn hóa trong ngữ cảnh.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: đọc về chữ phúc: miêu tả cách sắp xếp. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 把 + vật đã biết + hành động và kết quả.",
    "vocabulary": [
      {
        "id": "hnl-lex-38b676530be46345",
        "hanzi": "福",
        "pinyin": "fú",
        "meaning": "phúc",
        "example": "这个福字贴在哪儿？",
        "examplePinyin": "zhè ge fú zì tiē zài nǎr？",
        "exampleMeaning": "Chữ Phúc này dán ở đâu?"
      },
      {
        "id": "hnl-lex-5860dbcbaf42eadd",
        "hanzi": "倒",
        "pinyin": "dào",
        "meaning": "dốc ngược/đảo ngược",
        "example": "他被撞倒后，被送到了医院。",
        "examplePinyin": "tā bèi zhuàng dào hòu， bèi sòng dào le yī yuàn。",
        "exampleMeaning": "Sau khi bị va ngã, bạn ấy được đưa đến bệnh viện."
      },
      {
        "id": "hnl-lex-1c9374fa2e8213f1",
        "hanzi": "贴",
        "pinyin": "tiē",
        "meaning": "dán",
        "example": "这个福字贴在哪儿？",
        "examplePinyin": "zhè ge fú zì tiē zài nǎr？",
        "exampleMeaning": "Chữ Phúc này dán ở đâu?"
      },
      {
        "id": "hnl-lex-a62b4a6869d2c799",
        "hanzi": "布置",
        "pinyin": "bù zhì",
        "meaning": "bố trí/trang trí",
        "example": "你们在布置会场吗？",
        "examplePinyin": "nǐ men zài bù zhì huì chǎng ma？",
        "exampleMeaning": "Các bạn đang trang trí nơi tổ chức buổi gặp mặt à?"
      },
      {
        "id": "hnl-lex-022b7bf94040bea3",
        "hanzi": "会场",
        "pinyin": "huì chǎng",
        "meaning": "địa điểm tổ chức buổi họp",
        "example": "你们在布置会场吗？",
        "examplePinyin": "nǐ men zài bù zhì huì chǎng ma？",
        "exampleMeaning": "Các bạn đang trang trí nơi tổ chức buổi gặp mặt à?"
      },
      {
        "id": "hnl-lex-6f8f03a89052f9e6",
        "hanzi": "摆",
        "pinyin": "bǎi",
        "meaning": "đặt/bày",
        "example": "对，我们把桌子摆好了。",
        "examplePinyin": "duì， wǒ men bǎ zhuō zi bǎi hǎo le。",
        "exampleMeaning": "Đúng, chúng tôi bày bàn xong rồi."
      },
      {
        "id": "hnl-lex-6b187093db93a728",
        "hanzi": "墙",
        "pinyin": "qiáng",
        "meaning": "tường",
        "example": "墙上挂着什么？",
        "examplePinyin": "qiáng shàng guà zhe shén me？",
        "exampleMeaning": "Trên tường treo gì?"
      },
      {
        "id": "hnl-lex-7f8d4eafcae3a9d3",
        "hanzi": "装饰",
        "pinyin": "zhuāng shì",
        "meaning": "trang trí",
        "example": "我们用彩灯装饰教室。",
        "examplePinyin": "wǒ men yòng cǎi dēng zhuāng shì jiào shì。",
        "exampleMeaning": "Chúng tôi dùng đèn màu trang trí lớp học."
      },
      {
        "id": "hnl-lex-c736053896b367e2",
        "hanzi": "春节",
        "pinyin": "chūn jié",
        "meaning": "Tết Nguyên đán",
        "example": "春节的时候，家家都很热闹。",
        "examplePinyin": "chūn jié de shí hòu， jiā jiā dōu hěn rè nào。",
        "exampleMeaning": "Vào Tết Nguyên đán, nhà nào cũng náo nhiệt."
      },
      {
        "id": "hnl-lex-02a5b098db594e24",
        "hanzi": "特色",
        "pinyin": "tè sè",
        "meaning": "nét đặc sắc",
        "example": "这道菜很有地方特色。",
        "examplePinyin": "zhè dào cài hěn yǒu dì fāng tè sè。",
        "exampleMeaning": "Món ăn này có nét đặc sắc địa phương."
      }
    ],
    "grammar": [
      {
        "title": "把 + vật đã biết + hành động và kết quả",
        "explanation": "把 làm nổi bật cách xử lý một đối tượng đã xác định. Trong 把桌子摆好, 好 cho biết kết quả bày xong/ổn thỏa; không bỏ hết phần sau động từ thành một công thức trống.",
        "example": "我们把桌子摆好了。",
        "translation": "Chúng tôi bày bàn xong rồi."
      },
      {
        "title": "倒贴 và sắc thái văn hóa trong ngữ cảnh",
        "explanation": "倒贴 ở chủ đề này là dán ngược. Liên hệ âm 倒 với 到 giải thích lối chơi chữ trong phong tục; không suy thành mọi gia đình, mọi vị trí đều bắt buộc dán ngược chữ 福.",
        "example": "他把福字贴在门上了。",
        "translation": "Bạn ấy dán chữ Phúc lên cửa rồi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你们在布置会场吗？",
        "pinyin": "nǐ men zài bù zhì huì chǎng ma？",
        "meaning": "Các bạn đang trang trí nơi tổ chức buổi gặp mặt à?"
      },
      {
        "speaker": "Minh",
        "hanzi": "对，我们把桌子摆好了。",
        "pinyin": "duì， wǒ men bǎ zhuō zi bǎi hǎo le。",
        "meaning": "Đúng, chúng tôi bày bàn xong rồi."
      },
      {
        "speaker": "An",
        "hanzi": "这个福字贴在哪儿？",
        "pinyin": "zhè ge fú zì tiē zài nǎr？",
        "meaning": "Chữ Phúc này dán ở đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "贴在门上吧。",
        "pinyin": "tiē zài mén shàng ba。",
        "meaning": "Dán lên cửa nhé."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 把桌子摆好, 好 đóng vai trò gì?",
        "options": [
          "Nêu chủ thể thực hiện",
          "Khen bàn luôn đắt tiền",
          "Nêu kết quả của việc bày bàn"
        ],
        "answer": "Nêu kết quả của việc bày bàn",
        "explanation": "摆好 diễn đạt hành động và kết quả; 好 không phải lời chào trong câu này.",
        "id": "hanngu-q4-b12-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "摆好了",
          "我们",
          "把桌子"
        ],
        "answer": "我们把桌子摆好了",
        "explanation": "Câu hoàn chỉnh: 我们把桌子摆好了。 把 làm nổi bật cách xử lý một đối tượng đã xác định. Trong 把桌子摆好, 好 cho biết kết quả bày xong/ổn thỏa; không bỏ hết phần sau động từ thành một công thức trống.",
        "id": "hanngu-q4-b12-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “倒” có nghĩa nào?",
        "options": [
          "địa điểm tổ chức buổi họp",
          "đặt/bày",
          "dốc ngược/đảo ngược",
          "dán"
        ],
        "answer": "dốc ngược/đảo ngược",
        "explanation": "倒 (dào): dốc ngược/đảo ngược. Ví dụ: 他被撞倒后，被送到了医院。 — Sau khi bị va ngã, bạn ấy được đưa đến bệnh viện.",
        "id": "hanngu-q4-b12-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “春节” có nghĩa nào?",
        "options": [
          "đặt/bày",
          "phúc",
          "địa điểm tổ chức buổi họp",
          "Tết Nguyên đán"
        ],
        "answer": "Tết Nguyên đán",
        "explanation": "春节 (chūn jié): Tết Nguyên đán. Ví dụ: 春节的时候，家家都很热闹。 — Vào Tết Nguyên đán, nhà nào cũng náo nhiệt.",
        "id": "hanngu-q4-b12-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “装饰” có nghĩa nào?",
        "options": [
          "tường",
          "nét đặc sắc",
          "Tết Nguyên đán",
          "trang trí"
        ],
        "answer": "trang trí",
        "explanation": "装饰 (zhuāng shì): trang trí. Ví dụ: 我们用彩灯装饰教室。 — Chúng tôi dùng đèn màu trang trí lớp học.",
        "id": "hanngu-q4-b12-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “墙” có nghĩa nào?",
        "options": [
          "Tết Nguyên đán",
          "địa điểm tổ chức buổi họp",
          "đặt/bày",
          "tường"
        ],
        "answer": "tường",
        "explanation": "墙 (qiáng): tường. Ví dụ: 墙上挂着什么？ — Trên tường treo gì?",
        "id": "hanngu-q4-b12-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đặt/bày” (bǎi). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "摆",
        "alternatives": [],
        "explanation": "摆 (bǎi) nghĩa là đặt/bày. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b12-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bố trí/trang trí” (bù zhì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "布置",
        "alternatives": [],
        "explanation": "布置 (bù zhì) nghĩa là bố trí/trang trí. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b12-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Đọc về chữ Phúc: miêu tả cách sắp xếp”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “倒贴 và sắc thái văn hóa trong ngữ cảnh”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 12, mốc PDF 22. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b13",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 13",
    "title": "Làm thủ tục bay: điều kiện dùng câu 把",
    "subtitle": "请把护照给我。",
    "minutes": 30,
    "order": 30,
    "objectives": [
      "Dùng mẫu “请把护照给我。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Chọn đối tượng cụ thể trong câu 把 / Phủ định và động từ năng nguyện đứng trước 把.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: làm thủ tục bay: điều kiện dùng câu 把. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Chọn đối tượng cụ thể trong câu 把.",
    "vocabulary": [
      {
        "id": "hnl-lex-1cfe2eba25d53c48",
        "hanzi": "护照",
        "pinyin": "hù zhào",
        "meaning": "hộ chiếu",
        "example": "请把护照给我。",
        "examplePinyin": "qǐng bǎ hù zhào gěi wǒ。",
        "exampleMeaning": "Xin đưa hộ chiếu cho tôi."
      },
      {
        "id": "hnl-lex-49d6683ed0b3cd41",
        "hanzi": "机票",
        "pinyin": "jī piào",
        "meaning": "vé máy bay",
        "example": "请把机票给我看一下。",
        "examplePinyin": "qǐng bǎ jī piào gěi wǒ kàn yī xià。",
        "exampleMeaning": "Xin cho tôi xem vé máy bay một chút."
      },
      {
        "id": "hnl-lex-9e52297a3d52e6b3",
        "hanzi": "登机牌",
        "pinyin": "dēng jī pái",
        "meaning": "thẻ lên máy bay",
        "example": "这是我的登机牌。",
        "examplePinyin": "zhè shì wǒ de dēng jī pái。",
        "exampleMeaning": "Đây là thẻ lên máy bay của tôi."
      },
      {
        "id": "hnl-lex-c035845de31306cf",
        "hanzi": "托运",
        "pinyin": "tuō yùn",
        "meaning": "gửi hành lý ký gửi",
        "example": "哪个箱子要托运？",
        "examplePinyin": "nǎ ge xiāng zi yào tuō yùn？",
        "exampleMeaning": "Va li nào cần ký gửi?"
      },
      {
        "id": "hnl-lex-44a795eab3962ad5",
        "hanzi": "行李",
        "pinyin": "xíng lǐ",
        "meaning": "hành lý",
        "example": "等一等，我拿行李。",
        "examplePinyin": "děng yī děng， wǒ ná xíng lǐ。",
        "exampleMeaning": "Đợi chút, tôi lấy hành lý."
      },
      {
        "id": "hnl-lex-ad90963262a5d811",
        "hanzi": "手续",
        "pinyin": "shǒu xù",
        "meaning": "thủ tục",
        "example": "办好手续以后就可以登机了。",
        "examplePinyin": "bàn hǎo shǒu xù yǐ hòu jiù kě yǐ dēng jī le。",
        "exampleMeaning": "Làm xong thủ tục thì có thể lên máy bay."
      },
      {
        "id": "hnl-lex-5739dd705f55324c",
        "hanzi": "检查",
        "pinyin": "jiǎn chá",
        "meaning": "kiểm tra",
        "example": "我已经写完了作业，请你检查一下。",
        "examplePinyin": "wǒ yǐ jīng xiě wán le zuò yè， qǐng nǐ jiǎn chá yī xià。",
        "exampleMeaning": "Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp."
      },
      {
        "id": "hnl-lex-3a250b75dc6bd8fa",
        "hanzi": "口袋",
        "pinyin": "kǒu dài",
        "meaning": "túi áo/quần",
        "example": "请把手机放在口袋里。",
        "examplePinyin": "qǐng bǎ shǒu jī fàng zài kǒu dài lǐ。",
        "exampleMeaning": "Xin đặt điện thoại vào túi."
      },
      {
        "id": "hnl-lex-a9180ef310dc90c0",
        "hanzi": "掏",
        "pinyin": "tāo",
        "meaning": "lấy/móc ra",
        "example": "请把口袋里的东西掏出来。",
        "examplePinyin": "qǐng bǎ kǒu dài lǐ de dōng xī tāo chū lái。",
        "exampleMeaning": "Xin lấy đồ trong túi ra."
      },
      {
        "id": "hnl-lex-baae1f4974bcec86",
        "hanzi": "箱子",
        "pinyin": "xiāng zi",
        "meaning": "va li/thùng",
        "example": "哪个箱子要托运？",
        "examplePinyin": "nǎ ge xiāng zi yào tuō yùn？",
        "exampleMeaning": "Va li nào cần ký gửi?"
      }
    ],
    "grammar": [
      {
        "title": "Chọn đối tượng cụ thể trong câu 把",
        "explanation": "Người nghe cần biết đối tượng được xử lý là gì. 请把护照给我 nói đến hộ chiếu của người đang làm thủ tục, không giới thiệu một vật bất kỳ chưa có bối cảnh. Vị ngữ phải phù hợp với ý tác động hoặc xử lý.",
        "example": "请把护照给我。",
        "translation": "Xin đưa hộ chiếu cho tôi."
      },
      {
        "title": "Phủ định và động từ năng nguyện đứng trước 把",
        "explanation": "没 hoặc 不 đứng trước 把 trong những mẫu đang luyện. 没把…拿出来 phủ định việc lấy ra đã xảy ra; 不要把…放在这儿 là yêu cầu đừng để ở đây. Không đổi 没 và 不要 mà giữ nguyên ý.",
        "example": "我还没把护照拿出来。",
        "translation": "Tôi vẫn chưa lấy hộ chiếu ra."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "请把护照给我。",
        "pinyin": "qǐng bǎ hù zhào gěi wǒ。",
        "meaning": "Xin đưa hộ chiếu cho tôi."
      },
      {
        "speaker": "Minh",
        "hanzi": "好的，请等一下。",
        "pinyin": "hǎo de， qǐng děng yí xià。",
        "meaning": "Vâng, xin đợi một lát."
      },
      {
        "speaker": "An",
        "hanzi": "哪个箱子要托运？",
        "pinyin": "nǎ ge xiāng zi yào tuō yùn？",
        "meaning": "Va li nào cần ký gửi?"
      },
      {
        "speaker": "Minh",
        "hanzi": "请把这个箱子托运了。",
        "pinyin": "qǐng bǎ zhè ge xiāng zi tuō yùn le。",
        "meaning": "Xin làm thủ tục ký gửi va li này."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu nói “Tôi chưa lấy hộ chiếu ra”.",
        "options": [
          "我把护照没。",
          "我没把护照拿出来。",
          "我把没护照拿出来。"
        ],
        "answer": "我没把护照拿出来。",
        "explanation": "没 đặt trước 把 để phủ định việc xử lý đối tượng.",
        "id": "hanngu-q4-b13-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "拿出来",
          "还没把护照",
          "我"
        ],
        "answer": "我还没把护照拿出来",
        "explanation": "Câu hoàn chỉnh: 我还没把护照拿出来。 Người nghe cần biết đối tượng được xử lý là gì. 请把护照给我 nói đến hộ chiếu của người đang làm thủ tục, không giới thiệu một vật bất kỳ chưa có bối cảnh. Vị ngữ phải phù hợp với ý tác động hoặc xử lý.",
        "id": "hanngu-q4-b13-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “口袋” có nghĩa nào?",
        "options": [
          "túi áo/quần",
          "gửi hành lý ký gửi",
          "hộ chiếu",
          "thủ tục"
        ],
        "answer": "túi áo/quần",
        "explanation": "口袋 (kǒu dài): túi áo/quần. Ví dụ: 请把手机放在口袋里。 — Xin đặt điện thoại vào túi.",
        "id": "hanngu-q4-b13-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “机票” có nghĩa nào?",
        "options": [
          "hộ chiếu",
          "lấy/móc ra",
          "vé máy bay",
          "kiểm tra"
        ],
        "answer": "vé máy bay",
        "explanation": "机票 (jī piào): vé máy bay. Ví dụ: 请把机票给我看一下。 — Xin cho tôi xem vé máy bay một chút.",
        "id": "hanngu-q4-b13-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “护照” có nghĩa nào?",
        "options": [
          "va li/thùng",
          "kiểm tra",
          "hộ chiếu",
          "thủ tục"
        ],
        "answer": "hộ chiếu",
        "explanation": "护照 (hù zhào): hộ chiếu. Ví dụ: 请把护照给我。 — Xin đưa hộ chiếu cho tôi.",
        "id": "hanngu-q4-b13-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “行李” có nghĩa nào?",
        "options": [
          "hành lý",
          "vé máy bay",
          "kiểm tra",
          "thủ tục"
        ],
        "answer": "hành lý",
        "explanation": "行李 (xíng lǐ): hành lý. Ví dụ: 等一等，我拿行李。 — Đợi chút, tôi lấy hành lý.",
        "id": "hanngu-q4-b13-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “gửi hành lý ký gửi” (tuō yùn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "托运",
        "alternatives": [],
        "explanation": "托运 (tuō yùn) nghĩa là gửi hành lý ký gửi. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b13-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “thẻ lên máy bay” (dēng jī pái). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "登机牌",
        "alternatives": [],
        "explanation": "登机牌 (dēng jī pái) nghĩa là thẻ lên máy bay. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b13-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Làm thủ tục bay: điều kiện dùng câu 把”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Phủ định và động từ năng nguyện đứng trước 把”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 13, mốc PDF 38. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b14",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 14",
    "title": "Kể một sự cố: câu bị động 被",
    "subtitle": "我的自行车被撞坏了。",
    "minutes": 30,
    "order": 31,
    "objectives": [
      "Dùng mẫu “我的自行车被撞坏了。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 被 đặt người/vật chịu tác động lên trước / Kết quả và trình tự khi kể sự cố.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: kể một sự cố: câu bị động 被. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 被 đặt người/vật chịu tác động lên trước.",
    "vocabulary": [
      {
        "id": "hnl-lex-bf48c887b2ce4f3e",
        "hanzi": "腿",
        "pinyin": "tuǐ",
        "meaning": "chân",
        "example": "我的腿还有一点儿疼。",
        "examplePinyin": "wǒ de tuǐ hái yǒu yì diǎnr téng。",
        "exampleMeaning": "Chân tôi vẫn hơi đau."
      },
      {
        "id": "hnl-lex-acf68c5dc5284566",
        "hanzi": "被",
        "pinyin": "bèi",
        "meaning": "bị/được trong câu bị động",
        "example": "被撞坏了。",
        "examplePinyin": "bèi zhuàng huài le。",
        "exampleMeaning": "Bị đâm hỏng rồi."
      },
      {
        "id": "hnl-lex-2fd692b734b9486a",
        "hanzi": "撞",
        "pinyin": "zhuàng",
        "meaning": "đâm/va vào",
        "example": "被撞坏了。",
        "examplePinyin": "bèi zhuàng huài le。",
        "exampleMeaning": "Bị đâm hỏng rồi."
      },
      {
        "id": "hnl-lex-e55ebd1b275af7e1",
        "hanzi": "伤",
        "pinyin": "shāng",
        "meaning": "bị thương",
        "example": "人受伤了吗？",
        "examplePinyin": "rén shòu shāng le ma？",
        "exampleMeaning": "Có ai bị thương không?"
      },
      {
        "id": "hnl-lex-687aa8c2e0d3cc85",
        "hanzi": "摔",
        "pinyin": "shuāi",
        "meaning": "ngã/đánh rơi",
        "example": "摔坏了。",
        "examplePinyin": "shuāi huài le。",
        "exampleMeaning": "Rơi hỏng rồi."
      },
      {
        "id": "hnl-lex-2510a7efc494e80c",
        "hanzi": "流血",
        "pinyin": "liú xiě",
        "meaning": "chảy máu",
        "example": "伤口没有流血了。",
        "examplePinyin": "shāng kǒu méi yǒu liú xiě le。",
        "exampleMeaning": "Vết thương không còn chảy máu nữa."
      },
      {
        "id": "hnl-lex-e442c875ee268e0a",
        "hanzi": "骨头",
        "pinyin": "gǔ tou",
        "meaning": "xương",
        "example": "医生说没有伤着骨头。",
        "examplePinyin": "yī shēng shuō méi yǒu shāng zhe gǔ tou。",
        "exampleMeaning": "Bác sĩ nói không bị thương vào xương."
      },
      {
        "id": "hnl-lex-233064792119681e",
        "hanzi": "故意",
        "pinyin": "gù yì",
        "meaning": "cố ý",
        "example": "我不是故意的。",
        "examplePinyin": "wǒ bú shì gù yì de。",
        "exampleMeaning": "Tôi không cố ý."
      },
      {
        "id": "hnl-lex-01bce1f295f35881",
        "hanzi": "要紧",
        "pinyin": "yào jǐn",
        "meaning": "nghiêm trọng/quan trọng",
        "example": "这点儿小伤不要紧。",
        "examplePinyin": "zhè diǎnr xiǎo shāng bú yào jǐn。",
        "exampleMeaning": "Vết thương nhỏ này không nghiêm trọng."
      },
      {
        "id": "hnl-lex-e107bf3894afbb03",
        "hanzi": "送",
        "pinyin": "sòng",
        "meaning": "đưa/tiễn",
        "example": "他被撞倒后，被送到了医院。",
        "examplePinyin": "tā bèi zhuàng dào hòu， bèi sòng dào le yī yuàn。",
        "exampleMeaning": "Sau khi bị va ngã, bạn ấy được đưa đến bệnh viện."
      }
    ],
    "grammar": [
      {
        "title": "被 đặt người/vật chịu tác động lên trước",
        "explanation": "我的自行车被撞坏了 nói xe đạp chịu tác động và bị hỏng. Thành phần sau 被 có thể nêu người gây tác động; nếu ngữ cảnh không cần, một số câu không nêu tác nhân. Không dịch 被 máy móc chỉ bằng một chữ “bị” ở mọi văn cảnh.",
        "example": "我的自行车被撞坏了。",
        "translation": "Xe đạp của tôi bị đâm hỏng rồi."
      },
      {
        "title": "Kết quả và trình tự khi kể sự cố",
        "explanation": "Phân biệt 撞倒 là va làm ngã, 撞伤 là va gây thương tích. Chỉ kể kết quả mình biết; đây là bài luyện ngôn ngữ, không dùng chi tiết truyện làm hướng dẫn chẩn đoán hoặc xử trí y tế.",
        "example": "他被撞倒后，被送到了医院。",
        "translation": "Sau khi bị va ngã, bạn ấy được đưa đến bệnh viện."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你的自行车怎么了？",
        "pinyin": "nǐ de zì xíng chē zěn me le？",
        "meaning": "Xe đạp của bạn sao vậy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "被撞坏了。",
        "pinyin": "bèi zhuàng huài le。",
        "meaning": "Bị đâm hỏng rồi."
      },
      {
        "speaker": "An",
        "hanzi": "人受伤了吗？",
        "pinyin": "rén shòu shāng le ma？",
        "meaning": "Có ai bị thương không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "没有，人没事。",
        "pinyin": "méi yǒu， rén méi shì。",
        "meaning": "Không, người không sao."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 自行车被撞坏了, xe đạp có vai trò nào?",
        "options": [
          "Động từ hành động",
          "Đối tượng chịu tác động",
          "Người lái mọi phương tiện"
        ],
        "answer": "Đối tượng chịu tác động",
        "explanation": "Chủ ngữ câu bị động là đối tượng chịu tác động, không phải tác nhân gây ra va chạm.",
        "id": "hanngu-q4-b14-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "被",
          "撞坏了",
          "我的自行车"
        ],
        "answer": "我的自行车被撞坏了",
        "explanation": "Câu hoàn chỉnh: 我的自行车被撞坏了。 我的自行车被撞坏了 nói xe đạp chịu tác động và bị hỏng. Thành phần sau 被 có thể nêu người gây tác động; nếu ngữ cảnh không cần, một số câu không nêu tác nhân. Không dịch 被 máy móc chỉ bằng một chữ “bị” ở mọi văn cảnh.",
        "id": "hanngu-q4-b14-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “腿” có nghĩa nào?",
        "options": [
          "đưa/tiễn",
          "chân",
          "xương",
          "ngã/đánh rơi"
        ],
        "answer": "chân",
        "explanation": "腿 (tuǐ): chân. Ví dụ: 我的腿还有一点儿疼。 — Chân tôi vẫn hơi đau.",
        "id": "hanngu-q4-b14-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “故意” có nghĩa nào?",
        "options": [
          "chân",
          "cố ý",
          "xương",
          "chảy máu"
        ],
        "answer": "cố ý",
        "explanation": "故意 (gù yì): cố ý. Ví dụ: 我不是故意的。 — Tôi không cố ý.",
        "id": "hanngu-q4-b14-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “被” có nghĩa nào?",
        "options": [
          "đâm/va vào",
          "nghiêm trọng/quan trọng",
          "đưa/tiễn",
          "bị/được trong câu bị động"
        ],
        "answer": "bị/được trong câu bị động",
        "explanation": "被 (bèi): bị/được trong câu bị động. Ví dụ: 被撞坏了。 — Bị đâm hỏng rồi.",
        "id": "hanngu-q4-b14-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “撞” có nghĩa nào?",
        "options": [
          "chân",
          "bị/được trong câu bị động",
          "đâm/va vào",
          "cố ý"
        ],
        "answer": "đâm/va vào",
        "explanation": "撞 (zhuàng): đâm/va vào. Ví dụ: 被撞坏了。 — Bị đâm hỏng rồi.",
        "id": "hanngu-q4-b14-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bị thương” (shāng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "伤",
        "alternatives": [],
        "explanation": "伤 (shāng) nghĩa là bị thương. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b14-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “xương” (gǔ tou). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "骨头",
        "alternatives": [],
        "explanation": "骨头 (gǔ tou) nghĩa là xương. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b14-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Kể một sự cố: câu bị động 被”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Kết quả và trình tự khi kể sự cố”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 14, mốc PDF 53. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b15",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 15",
    "title": "Xem Kinh kịch: phân biệt hiểu được và đã hiểu",
    "subtitle": "这句话我听得懂。",
    "minutes": 30,
    "order": 32,
    "objectives": [
      "Dùng mẫu “这句话我听得懂。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: V + 得/不 + bổ ngữ: khả năng đạt kết quả / 但是 nối hai nhận xét có đối lập.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: xem kinh kịch: phân biệt hiểu được và đã hiểu. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: V + 得/不 + bổ ngữ: khả năng đạt kết quả.",
    "vocabulary": [
      {
        "id": "hnl-lex-5ca546b0b3e9c533",
        "hanzi": "京剧",
        "pinyin": "jīng jù",
        "meaning": "Kinh kịch",
        "example": "你看过京剧吗？",
        "examplePinyin": "nǐ kàn guo jīng jù ma？",
        "exampleMeaning": "Bạn từng xem Kinh kịch chưa?"
      },
      {
        "id": "hnl-lex-9c3ad6be0aed1ee1",
        "hanzi": "演员",
        "pinyin": "yǎn yuán",
        "meaning": "diễn viên",
        "example": "演员正在舞台上表演。",
        "examplePinyin": "yǎn yuán zhèng zài wǔ tái shàng biǎo yǎn。",
        "exampleMeaning": "Diễn viên đang biểu diễn trên sân khấu."
      },
      {
        "id": "hnl-lex-f99f19003b9656f5",
        "hanzi": "脸谱",
        "pinyin": "liǎn pǔ",
        "meaning": "mặt nạ/hóa trang khuôn mặt trong hí kịch",
        "example": "京剧脸谱很有特点。",
        "examplePinyin": "jīng jù liǎn pǔ hěn yǒu tè diǎn。",
        "exampleMeaning": "Mặt nạ Kinh kịch có nét rất đặc biệt."
      },
      {
        "id": "hnl-lex-f98e62dc646df3d8",
        "hanzi": "服装",
        "pinyin": "fú zhuāng",
        "meaning": "trang phục",
        "example": "这件服装很适合表演。",
        "examplePinyin": "zhè jiàn fú zhuāng hěn shì hé biǎo yǎn。",
        "exampleMeaning": "Bộ trang phục này rất hợp biểu diễn."
      },
      {
        "id": "hnl-lex-c370b9f16b8ed15c",
        "hanzi": "表演",
        "pinyin": "biǎo yǎn",
        "meaning": "biểu diễn",
        "example": "看过，表演很精彩。",
        "examplePinyin": "kàn guo， biǎo yǎn hěn jīng cǎi。",
        "exampleMeaning": "Rồi, buổi diễn rất đặc sắc."
      },
      {
        "id": "hnl-lex-a861c864b4ae8679",
        "hanzi": "精彩",
        "pinyin": "jīng cǎi",
        "meaning": "đặc sắc",
        "example": "看过，表演很精彩。",
        "examplePinyin": "kàn guo， biǎo yǎn hěn jīng cǎi。",
        "exampleMeaning": "Rồi, buổi diễn rất đặc sắc."
      },
      {
        "id": "hnl-lex-595ec7fef63b3d39",
        "hanzi": "听懂",
        "pinyin": "tīng dǒng",
        "meaning": "nghe hiểu",
        "example": "现在听懂了吗？",
        "examplePinyin": "xiàn zài tīng dǒng le ma？",
        "exampleMeaning": "Bây giờ đã nghe hiểu chưa?"
      },
      {
        "id": "hnl-lex-6e5d4fa14ccd205e",
        "hanzi": "猜",
        "pinyin": "cāi",
        "meaning": "đoán",
        "example": "我猜他今天不会来了。",
        "examplePinyin": "wǒ cāi tā jīn tiān bú huì lái le。",
        "exampleMeaning": "Tôi đoán hôm nay bạn ấy không đến."
      },
      {
        "id": "hnl-lex-07d59e9f8282544f",
        "hanzi": "影响",
        "pinyin": "yǐng xiǎng",
        "meaning": "ảnh hưởng",
        "example": "老师对我的影响很大。",
        "examplePinyin": "lǎo shī duì wǒ de yǐng xiǎng hěn dà。",
        "exampleMeaning": "Ảnh hưởng của giáo viên đối với tôi rất lớn."
      },
      {
        "id": "hnl-lex-4adfb4c244a261d2",
        "hanzi": "大概",
        "pinyin": "dà gài",
        "meaning": "đại khái",
        "example": "大概十分钟就到了。",
        "examplePinyin": "dà gài shí fēn zhōng jiù dào le。",
        "exampleMeaning": "Khoảng mười phút là đến."
      }
    ],
    "grammar": [
      {
        "title": "V + 得/不 + bổ ngữ: khả năng đạt kết quả",
        "explanation": "听得懂 nói có khả năng nghe hiểu trong điều kiện đang nói; 听懂了 nói kết quả đã nghe hiểu. Đặt hai câu vào hai thời điểm để phân biệt khả năng và kết quả thực tế.",
        "example": "这句话我听得懂。",
        "translation": "Câu này tôi nghe hiểu được."
      },
      {
        "title": "但是 nối hai nhận xét có đối lập",
        "explanation": "看得懂，但是听不懂 đối chiếu việc theo dõi phần nhìn với việc nghe lời diễn. Nó không khẳng định đã hiểu mọi chi tiết văn hóa của Kinh kịch.",
        "example": "表演很精彩，但是我听不懂。",
        "translation": "Buổi diễn rất đặc sắc, nhưng tôi nghe không hiểu."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你看过京剧吗？",
        "pinyin": "nǐ kàn guo jīng jù ma？",
        "meaning": "Bạn từng xem Kinh kịch chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "看过，表演很精彩。",
        "pinyin": "kàn guo， biǎo yǎn hěn jīng cǎi。",
        "meaning": "Rồi, buổi diễn rất đặc sắc."
      },
      {
        "speaker": "An",
        "hanzi": "你听得懂吗？",
        "pinyin": "nǐ tīng de dǒng ma？",
        "meaning": "Bạn nghe hiểu được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有的听得懂，有的听不懂。",
        "pinyin": "yǒu de tīng de dǒng， yǒu de tīng bù dǒng。",
        "meaning": "Có chỗ hiểu được, có chỗ không."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào nêu khả năng nghe hiểu, thay vì kết quả đã xảy ra?",
        "options": [
          "我听得懂。",
          "我昨天听了。",
          "我听懂了。"
        ],
        "answer": "我听得懂。",
        "explanation": "得 đứng giữa động từ và bổ ngữ tạo dạng khẳng định khả năng.",
        "id": "hanngu-q4-b15-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "听得懂",
          "我",
          "这句话"
        ],
        "answer": "这句话我听得懂",
        "explanation": "Câu hoàn chỉnh: 这句话我听得懂。 听得懂 nói có khả năng nghe hiểu trong điều kiện đang nói; 听懂了 nói kết quả đã nghe hiểu. Đặt hai câu vào hai thời điểm để phân biệt khả năng và kết quả thực tế.",
        "id": "hanngu-q4-b15-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “演员” có nghĩa nào?",
        "options": [
          "trang phục",
          "diễn viên",
          "biểu diễn",
          "nghe hiểu"
        ],
        "answer": "diễn viên",
        "explanation": "演员 (yǎn yuán): diễn viên. Ví dụ: 演员正在舞台上表演。 — Diễn viên đang biểu diễn trên sân khấu.",
        "id": "hanngu-q4-b15-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “听懂” có nghĩa nào?",
        "options": [
          "đoán",
          "nghe hiểu",
          "diễn viên",
          "trang phục"
        ],
        "answer": "nghe hiểu",
        "explanation": "听懂 (tīng dǒng): nghe hiểu. Ví dụ: 现在听懂了吗？ — Bây giờ đã nghe hiểu chưa?",
        "id": "hanngu-q4-b15-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “大概” có nghĩa nào?",
        "options": [
          "biểu diễn",
          "đại khái",
          "Kinh kịch",
          "đặc sắc"
        ],
        "answer": "đại khái",
        "explanation": "大概 (dà gài): đại khái. Ví dụ: 大概十分钟就到了。 — Khoảng mười phút là đến.",
        "id": "hanngu-q4-b15-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “京剧” có nghĩa nào?",
        "options": [
          "trang phục",
          "Kinh kịch",
          "nghe hiểu",
          "ảnh hưởng"
        ],
        "answer": "Kinh kịch",
        "explanation": "京剧 (jīng jù): Kinh kịch. Ví dụ: 你看过京剧吗？ — Bạn từng xem Kinh kịch chưa?",
        "id": "hanngu-q4-b15-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “trang phục” (fú zhuāng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "服装",
        "alternatives": [],
        "explanation": "服装 (fú zhuāng) nghĩa là trang phục. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b15-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “mặt nạ/hóa trang khuôn mặt trong hí kịch” (liǎn pǔ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "脸谱",
        "alternatives": [],
        "explanation": "脸谱 (liǎn pǔ) nghĩa là mặt nạ/hóa trang khuôn mặt trong hí kịch. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b15-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Xem Kinh kịch: phân biệt hiểu được và đã hiểu”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “但是 nối hai nhận xét có đối lập”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 15, mốc PDF 68. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b16",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 16",
    "title": "Leo núi: khả năng theo điều kiện thực tế",
    "subtitle": "这座山不高，我爬得上去。",
    "minutes": 30,
    "order": 33,
    "objectives": [
      "Dùng mẫu “这座山不高，我爬得上去。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 爬得上去: làm được một chuyển động có hướng / V得动/V不动 nói sức làm chuyển động.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: leo núi: khả năng theo điều kiện thực tế. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 爬得上去: làm được một chuyển động có hướng.",
    "vocabulary": [
      {
        "id": "hnl-lex-be9f655d95904413",
        "hanzi": "爬",
        "pinyin": "pá",
        "meaning": "leo",
        "example": "不太高，我爬得上去。",
        "examplePinyin": "bù tài gāo， wǒ pá de shàng qù。",
        "exampleMeaning": "Không cao lắm, tôi leo lên được."
      },
      {
        "id": "hnl-lex-251152a9d33f90a9",
        "hanzi": "缆车",
        "pinyin": "lǎn chē",
        "meaning": "cáp treo",
        "example": "我们坐缆车上山。",
        "examplePinyin": "wǒ men zuò lǎn chē shàng shān。",
        "exampleMeaning": "Chúng tôi đi cáp treo lên núi."
      },
      {
        "id": "hnl-lex-ed3ab028f8af7d19",
        "hanzi": "坚持",
        "pinyin": "jiān chí",
        "meaning": "kiên trì",
        "example": "坚持学习一定会有进步。",
        "examplePinyin": "jiān chí xué xí yí dìng huì yǒu jìn bù。",
        "exampleMeaning": "Kiên trì học chắc chắn sẽ tiến bộ."
      },
      {
        "id": "hnl-lex-143e5859ab3f1b0b",
        "hanzi": "胜利",
        "pinyin": "shèng lì",
        "meaning": "thắng lợi",
        "example": "坚持到底就是一种胜利。",
        "examplePinyin": "jiān chí dào dǐ jiù shì yī zhǒng shèng lì。",
        "exampleMeaning": "Kiên trì đến cùng cũng là một thắng lợi."
      },
      {
        "id": "hnl-lex-70ddc6beb1ca5910",
        "hanzi": "汗",
        "pinyin": "hàn",
        "meaning": "mồ hôi",
        "example": "跑完步出了很多汗。",
        "examplePinyin": "pǎo wán bù chū le hěn duō hàn。",
        "exampleMeaning": "Chạy xong thì toát nhiều mồ hôi."
      },
      {
        "id": "hnl-lex-190242da16da9132",
        "hanzi": "继续",
        "pinyin": "jì xù",
        "meaning": "tiếp tục",
        "example": "我最近一直在学习汉语，想继续学下去。",
        "examplePinyin": "wǒ zuì jìn yì zhí zài xué xí hàn yǔ， xiǎng jì xù xué xià qù。",
        "exampleMeaning": "Gần đây tôi vẫn đang học tiếng Trung và muốn học tiếp."
      },
      {
        "id": "hnl-lex-f41cef111e4716da",
        "hanzi": "搬",
        "pinyin": "bān",
        "meaning": "chuyển/mang vật",
        "example": "这个箱子太重，我搬不动。",
        "examplePinyin": "zhè ge xiāng zi tài zhòng， wǒ bān bù dòng。",
        "exampleMeaning": "Va li này nặng quá, tôi chuyển không nổi."
      },
      {
        "id": "hnl-lex-7c6a1974d82bc609",
        "hanzi": "动",
        "pinyin": "dòng",
        "meaning": "di chuyển/động",
        "example": "这个箱子太重，我搬不动。",
        "examplePinyin": "zhè ge xiāng zi tài zhòng， wǒ bān bù dòng。",
        "exampleMeaning": "Va li này nặng quá, tôi chuyển không nổi."
      },
      {
        "id": "hnl-lex-197332ddc5cdde83",
        "hanzi": "累",
        "pinyin": "lèi",
        "meaning": "mệt",
        "example": "累了就休息一会儿。",
        "examplePinyin": "lèi le jiù xiū xī yī huì er。",
        "exampleMeaning": "Mệt thì nghỉ một lát."
      },
      {
        "id": "hnl-lex-c5036e142cc7625c",
        "hanzi": "休息",
        "pinyin": "xiū xī",
        "meaning": "nghỉ ngơi",
        "example": "累了就休息一会儿。",
        "examplePinyin": "lèi le jiù xiū xī yī huì er。",
        "exampleMeaning": "Mệt thì nghỉ một lát."
      }
    ],
    "grammar": [
      {
        "title": "爬得上去: làm được một chuyển động có hướng",
        "explanation": "上去 cho hướng đi lên rời điểm nhìn; 得 biến cụm thành khả năng thực hiện. Đừng bỏ 去 nếu tình huống cần thể hiện điểm nhìn.",
        "example": "这座山不高，我爬得上去。",
        "translation": "Ngọn núi này không cao, tôi leo lên được."
      },
      {
        "title": "V得动/V不动 nói sức làm chuyển động",
        "explanation": "搬不动 nói không đủ sức hoặc điều kiện để di chuyển vật; không có nghĩa người đó không biết phương pháp di chuyển. Lời cổ vũ trong bài không yêu cầu cố sức khi không an toàn.",
        "example": "这个箱子太重，我搬不动。",
        "translation": "Va li này nặng quá, tôi chuyển không nổi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这座山高吗？",
        "pinyin": "zhè zuò shān gāo ma？",
        "meaning": "Ngọn núi này có cao không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不太高，我爬得上去。",
        "pinyin": "bù tài gāo， wǒ pá de shàng qù。",
        "meaning": "Không cao lắm, tôi leo lên được."
      },
      {
        "speaker": "An",
        "hanzi": "累了就休息一会儿。",
        "pinyin": "lèi le jiù xiū xī yī huì er。",
        "meaning": "Mệt thì nghỉ một lát."
      },
      {
        "speaker": "Minh",
        "hanzi": "好，我们慢慢走。",
        "pinyin": "hǎo， wǒ men màn màn zǒu。",
        "meaning": "Được, chúng ta đi từ từ."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "搬不动 chủ yếu cho biết điều gì trong câu về va li nặng?",
        "options": [
          "Không được phép nghỉ",
          "Chưa từng thấy va li",
          "Không chuyển nổi theo điều kiện hiện tại"
        ],
        "answer": "Không chuyển nổi theo điều kiện hiện tại",
        "explanation": "动 làm bổ ngữ khả năng, nói có thể làm vật di chuyển hay không.",
        "id": "hanngu-q4-b16-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我搬不动",
          "这个箱子",
          "太重"
        ],
        "answer": "这个箱子太重我搬不动",
        "explanation": "Câu hoàn chỉnh: 这个箱子太重我搬不动。 上去 cho hướng đi lên rời điểm nhìn; 得 biến cụm thành khả năng thực hiện. Đừng bỏ 去 nếu tình huống cần thể hiện điểm nhìn.",
        "id": "hanngu-q4-b16-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “搬” có nghĩa nào?",
        "options": [
          "nghỉ ngơi",
          "chuyển/mang vật",
          "leo",
          "cáp treo"
        ],
        "answer": "chuyển/mang vật",
        "explanation": "搬 (bān): chuyển/mang vật. Ví dụ: 这个箱子太重，我搬不动。 — Va li này nặng quá, tôi chuyển không nổi.",
        "id": "hanngu-q4-b16-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “汗” có nghĩa nào?",
        "options": [
          "mệt",
          "tiếp tục",
          "kiên trì",
          "mồ hôi"
        ],
        "answer": "mồ hôi",
        "explanation": "汗 (hàn): mồ hôi. Ví dụ: 跑完步出了很多汗。 — Chạy xong thì toát nhiều mồ hôi.",
        "id": "hanngu-q4-b16-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “休息” có nghĩa nào?",
        "options": [
          "thắng lợi",
          "di chuyển/động",
          "tiếp tục",
          "nghỉ ngơi"
        ],
        "answer": "nghỉ ngơi",
        "explanation": "休息 (xiū xī): nghỉ ngơi. Ví dụ: 累了就休息一会儿。 — Mệt thì nghỉ một lát.",
        "id": "hanngu-q4-b16-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “累” có nghĩa nào?",
        "options": [
          "chuyển/mang vật",
          "cáp treo",
          "mệt",
          "mồ hôi"
        ],
        "answer": "mệt",
        "explanation": "累 (lèi): mệt. Ví dụ: 累了就休息一会儿。 — Mệt thì nghỉ một lát.",
        "id": "hanngu-q4-b16-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tiếp tục” (jì xù). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "继续",
        "alternatives": [],
        "explanation": "继续 (jì xù) nghĩa là tiếp tục. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b16-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cáp treo” (lǎn chē). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "缆车",
        "alternatives": [],
        "explanation": "缆车 (lǎn chē) nghĩa là cáp treo. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b16-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Leo núi: khả năng theo điều kiện thực tế”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “V得动/V不动 nói sức làm chuyển động”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 16, mốc PDF 86. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b17",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 17",
    "title": "Nhớ ra rồi: nghĩa mở rộng của hướng",
    "subtitle": "听到这个故事，大家都笑起来了。",
    "minutes": 30,
    "order": 34,
    "objectives": [
      "Dùng mẫu “听到这个故事，大家都笑起来了。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 起来 có thể mang nghĩa bắt đầu hoặc nhớ ra / 出来 có thể nêu kết quả nhận biết.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: nhớ ra rồi: nghĩa mở rộng của hướng. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 起来 có thể mang nghĩa bắt đầu hoặc nhớ ra.",
    "vocabulary": [
      {
        "id": "hnl-lex-43049be980237ef6",
        "hanzi": "想起来",
        "pinyin": "xiǎng qǐ lái",
        "meaning": "nhớ ra",
        "example": "啊，我想起来了！",
        "examplePinyin": "a， wǒ xiǎng qǐ lái le！",
        "exampleMeaning": "À, tôi nhớ ra rồi!"
      },
      {
        "id": "hnl-lex-154bf814eaf8e11a",
        "hanzi": "认出来",
        "pinyin": "rèn chū lái",
        "meaning": "nhận ra",
        "example": "我一听声音就认出来了。",
        "examplePinyin": "wǒ yī tīng shēng yīn jiù rèn chū lái le。",
        "exampleMeaning": "Vừa nghe giọng là tôi nhận ra ngay."
      },
      {
        "id": "hnl-lex-acba948cb077b85d",
        "hanzi": "听出来",
        "pinyin": "tīng chū lái",
        "meaning": "nghe nhận ra",
        "example": "我听出来了，是你的声音。",
        "examplePinyin": "wǒ tīng chū lái le， shì nǐ de shēng yīn。",
        "exampleMeaning": "Tôi nghe nhận ra rồi, là giọng của bạn."
      },
      {
        "id": "hnl-lex-64cf792d68c97e12",
        "hanzi": "笑起来",
        "pinyin": "xiào qǐ lái",
        "meaning": "bắt đầu cười",
        "example": "听到这个故事，大家都笑起来了。",
        "examplePinyin": "tīng dào zhè ge gù shì， dà jiā dōu xiào qǐ lái le。",
        "exampleMeaning": "Nghe câu chuyện này, mọi người đều bật cười."
      },
      {
        "id": "hnl-lex-61301083ead4ddbf",
        "hanzi": "租",
        "pinyin": "zū",
        "meaning": "thuê",
        "example": "那就坐出租车去吧。",
        "examplePinyin": "nà jiù zuò chū zū chē qù ba。",
        "exampleMeaning": "Vậy đi taxi nhé."
      },
      {
        "id": "hnl-lex-31bdc5bf187d7830",
        "hanzi": "交流",
        "pinyin": "jiāo liú",
        "meaning": "giao lưu",
        "example": "同学之间要多交流。",
        "examplePinyin": "tóng xué zhī jiān yào duō jiāo liú。",
        "exampleMeaning": "Các bạn học nên giao lưu nhiều hơn."
      },
      {
        "id": "hnl-lex-b242ab175ddfcab3",
        "hanzi": "邀请",
        "pinyin": "yāo qǐng",
        "meaning": "mời",
        "example": "老师邀请我们参加活动。",
        "examplePinyin": "lǎo shī yāo qǐng wǒ men cān jiā huó dòng。",
        "exampleMeaning": "Giáo viên mời chúng tôi tham gia hoạt động."
      },
      {
        "id": "hnl-lex-3a69c277ede03ee3",
        "hanzi": "原来",
        "pinyin": "yuán lái",
        "meaning": "thì ra/ban đầu",
        "example": "原来你也在这里。",
        "examplePinyin": "yuán lái nǐ yě zài zhè lǐ。",
        "exampleMeaning": "Thì ra bạn cũng ở đây."
      },
      {
        "id": "hnl-lex-932a0dca93fa51bd",
        "hanzi": "突然",
        "pinyin": "tū rán",
        "meaning": "đột nhiên",
        "example": "他突然哭了。",
        "examplePinyin": "tā tū rán kū le。",
        "exampleMeaning": "Bạn ấy đột nhiên khóc."
      },
      {
        "id": "hnl-lex-ff562f75e550e4eb",
        "hanzi": "电话",
        "pinyin": "diàn huà",
        "meaning": "điện thoại",
        "example": "这是我的电话号码。",
        "examplePinyin": "zhè shì wǒ de diàn huà hào mǎ。",
        "exampleMeaning": "Đây là số điện thoại của tôi."
      }
    ],
    "grammar": [
      {
        "title": "起来 có thể mang nghĩa bắt đầu hoặc nhớ ra",
        "explanation": "笑起来 nói bắt đầu cười; 想起来 là nhớ ra một điều. Cùng hình thức 起来 nhưng phải học theo cụm và ngữ cảnh, không gán duy nhất nghĩa đứng dậy.",
        "example": "听到这个故事，大家都笑起来了。",
        "translation": "Nghe câu chuyện này, mọi người đều bật cười."
      },
      {
        "title": "出来 có thể nêu kết quả nhận biết",
        "explanation": "听出来 nhận biết qua âm thanh; 认出来 nhận ra qua dấu hiệu. Khi không thể nhớ ra dùng 想不起来, không lấy 听不懂 thay cho mọi khó khăn về trí nhớ.",
        "example": "我听出来了，是你的声音。",
        "translation": "Tôi nghe nhận ra rồi, là giọng của bạn."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你还记得我吗？",
        "pinyin": "nǐ hái jì de wǒ ma？",
        "meaning": "Bạn còn nhớ tôi không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "声音很熟，可是一时想不起来。",
        "pinyin": "shēng yīn hěn shú， kě shì yī shí xiǎng bù qǐ lái。",
        "meaning": "Giọng rất quen nhưng nhất thời tôi chưa nhớ ra."
      },
      {
        "speaker": "An",
        "hanzi": "我们以前一起学习过。",
        "pinyin": "wǒ men yǐ qián yì qǐ xué xí guò。",
        "meaning": "Trước đây chúng ta từng học cùng nhau."
      },
      {
        "speaker": "Minh",
        "hanzi": "啊，我想起来了！",
        "pinyin": "a， wǒ xiǎng qǐ lái le！",
        "meaning": "À, tôi nhớ ra rồi!"
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong ngữ cảnh trí nhớ, 想不起来 nghĩa là gì?",
        "options": [
          "Không nghe được bất kỳ âm thanh nào",
          "Không muốn đứng dậy",
          "Không nhớ ra"
        ],
        "answer": "Không nhớ ra",
        "explanation": "Nghĩa mở rộng của 想起来 gắn với việc nhớ lại.",
        "id": "hanngu-q4-b17-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "啊",
          "想起来了",
          "我"
        ],
        "answer": "啊我想起来了",
        "explanation": "Câu hoàn chỉnh: 啊我想起来了。 笑起来 nói bắt đầu cười; 想起来 là nhớ ra một điều. Cùng hình thức 起来 nhưng phải học theo cụm và ngữ cảnh, không gán duy nhất nghĩa đứng dậy.",
        "id": "hanngu-q4-b17-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “邀请” có nghĩa nào?",
        "options": [
          "đột nhiên",
          "thuê",
          "thì ra/ban đầu",
          "mời"
        ],
        "answer": "mời",
        "explanation": "邀请 (yāo qǐng): mời. Ví dụ: 老师邀请我们参加活动。 — Giáo viên mời chúng tôi tham gia hoạt động.",
        "id": "hanngu-q4-b17-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “听出来” có nghĩa nào?",
        "options": [
          "giao lưu",
          "điện thoại",
          "nghe nhận ra",
          "nhớ ra"
        ],
        "answer": "nghe nhận ra",
        "explanation": "听出来 (tīng chū lái): nghe nhận ra. Ví dụ: 我听出来了，是你的声音。 — Tôi nghe nhận ra rồi, là giọng của bạn.",
        "id": "hanngu-q4-b17-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “笑起来” có nghĩa nào?",
        "options": [
          "mời",
          "nhớ ra",
          "nghe nhận ra",
          "bắt đầu cười"
        ],
        "answer": "bắt đầu cười",
        "explanation": "笑起来 (xiào qǐ lái): bắt đầu cười. Ví dụ: 听到这个故事，大家都笑起来了。 — Nghe câu chuyện này, mọi người đều bật cười.",
        "id": "hanngu-q4-b17-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “认出来” có nghĩa nào?",
        "options": [
          "điện thoại",
          "đột nhiên",
          "nhớ ra",
          "nhận ra"
        ],
        "answer": "nhận ra",
        "explanation": "认出来 (rèn chū lái): nhận ra. Ví dụ: 我一听声音就认出来了。 — Vừa nghe giọng là tôi nhận ra ngay.",
        "id": "hanngu-q4-b17-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “giao lưu” (jiāo liú). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "交流",
        "alternatives": [],
        "explanation": "交流 (jiāo liú) nghĩa là giao lưu. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b17-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “điện thoại” (diàn huà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "电话",
        "alternatives": [],
        "explanation": "电话 (diàn huà) nghĩa là điện thoại. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b17-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Nhớ ra rồi: nghĩa mở rộng của hướng”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “出来 có thể nêu kết quả nhận biết”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 17, mốc PDF 100. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b18",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 18",
    "title": "Kế hoạch nghỉ đông: đại từ nghi vấn dùng linh hoạt",
    "subtitle": "你去哪儿，我就去哪儿。",
    "minutes": 30,
    "order": 35,
    "objectives": [
      "Dùng mẫu “你去哪儿，我就去哪儿。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Đại từ nghi vấn không phải lúc nào cũng là câu hỏi / 谁都/什么都 nêu phạm vi bao quát.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: kế hoạch nghỉ đông: đại từ nghi vấn dùng linh hoạt. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Đại từ nghi vấn không phải lúc nào cũng là câu hỏi.",
    "vocabulary": [
      {
        "id": "hnl-lex-fcd1b24ed4191dc3",
        "hanzi": "寒假",
        "pinyin": "hán jià",
        "meaning": "kỳ nghỉ đông",
        "example": "寒假你想去哪儿？",
        "examplePinyin": "hán jià nǐ xiǎng qù nǎr？",
        "exampleMeaning": "Nghỉ đông bạn muốn đi đâu?"
      },
      {
        "id": "hnl-lex-4d3536718299001c",
        "hanzi": "旅行",
        "pinyin": "lǚ xíng",
        "meaning": "du lịch",
        "example": "寒假我想去旅行。",
        "examplePinyin": "hán jià wǒ xiǎng qù lǚ xíng。",
        "exampleMeaning": "Kỳ nghỉ đông tôi muốn đi du lịch."
      },
      {
        "id": "hnl-lex-121cf8845cb3b059",
        "hanzi": "打算",
        "pinyin": "dǎ suàn",
        "meaning": "dự định",
        "example": "你打算怎么学？",
        "examplePinyin": "nǐ dǎ suàn zěn me xué？",
        "exampleMeaning": "Bạn định học như thế nào?"
      },
      {
        "id": "hnl-lex-e40e43d01614b605",
        "hanzi": "随便",
        "pinyin": "suí biàn",
        "meaning": "tùy ý",
        "example": "你随便坐吧。",
        "examplePinyin": "nǐ suí biàn zuò ba。",
        "exampleMeaning": "Bạn cứ ngồi tự nhiên."
      },
      {
        "id": "hnl-lex-fa85dad27bed241a",
        "hanzi": "商量",
        "pinyin": "shāng liáng",
        "meaning": "bàn bạc",
        "example": "还没决定，想先和朋友商量。",
        "examplePinyin": "hái méi jué dìng， xiǎng xiān hé péng yǒu shāng liáng。",
        "exampleMeaning": "Chưa quyết định, tôi muốn bàn với bạn trước."
      },
      {
        "id": "hnl-lex-da5bcccbf6c9c911",
        "hanzi": "决定",
        "pinyin": "jué dìng",
        "meaning": "quyết định",
        "example": "还没决定，想先和朋友商量。",
        "examplePinyin": "hái méi jué dìng， xiǎng xiān hé péng yǒu shāng liáng。",
        "exampleMeaning": "Chưa quyết định, tôi muốn bàn với bạn trước."
      },
      {
        "id": "hnl-lex-388c1f4d98874f18",
        "hanzi": "哪里",
        "pinyin": "nǎ lǐ",
        "meaning": "đâu/nơi nào",
        "example": "你想去哪里都可以。",
        "examplePinyin": "nǐ xiǎng qù nǎ li dōu kě yǐ。",
        "exampleMeaning": "Bạn muốn đi đâu cũng được."
      },
      {
        "id": "hnl-lex-542c0851e496a7b1",
        "hanzi": "谁",
        "pinyin": "shuí",
        "meaning": "ai",
        "example": "是。你找谁？",
        "examplePinyin": "shì。 nǐ zhǎo shuí？",
        "exampleMeaning": "Đúng. Bạn tìm ai?"
      },
      {
        "id": "hnl-lex-c06a510c26782116",
        "hanzi": "什么",
        "pinyin": "shén me",
        "meaning": "cái gì",
        "example": "什么地方我都想看看。",
        "examplePinyin": "shén me dì fāng wǒ dōu xiǎng kàn kàn。",
        "exampleMeaning": "Nơi nào tôi cũng muốn đi xem thử."
      },
      {
        "id": "hnl-lex-b55b0968750346ee",
        "hanzi": "都",
        "pinyin": "dōu",
        "meaning": "đều",
        "example": "什么地方我都想看看。",
        "examplePinyin": "shén me dì fāng wǒ dōu xiǎng kàn kàn。",
        "exampleMeaning": "Nơi nào tôi cũng muốn đi xem thử."
      }
    ],
    "grammar": [
      {
        "title": "Đại từ nghi vấn không phải lúc nào cũng là câu hỏi",
        "explanation": "你去哪儿，我就去哪儿 lặp đại từ để nói hai lựa chọn phụ thuộc nhau. Đọc quan hệ giữa hai vế trước khi cố tìm dấu hỏi hoặc dịch thành hai câu hỏi riêng.",
        "example": "你去哪儿，我就去哪儿。",
        "translation": "Bạn đi đâu thì tôi đi đó."
      },
      {
        "title": "谁都/什么都 nêu phạm vi bao quát",
        "explanation": "谁都可以参加 nghĩa là ai cũng có thể tham gia. Phủ định cần nhìn vị trí và phạm vi: 谁都不去 khác với 不是谁都去. Bài chỉ luyện phạm vi đã nêu, không thay tùy tiện 都 và 也 trong mọi câu.",
        "example": "什么地方我都想看看。",
        "translation": "Nơi nào tôi cũng muốn đi xem thử."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "寒假你想去哪儿？",
        "pinyin": "hán jià nǐ xiǎng qù nǎr？",
        "meaning": "Nghỉ đông bạn muốn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "还没决定，想先和朋友商量。",
        "pinyin": "hái méi jué dìng， xiǎng xiān hé péng yǒu shāng liáng。",
        "meaning": "Chưa quyết định, tôi muốn bàn với bạn trước."
      },
      {
        "speaker": "An",
        "hanzi": "我去哪儿，你就去哪儿吗？",
        "pinyin": "wǒ qù nǎr， nǐ jiù qù nǎr ma？",
        "meaning": "Tôi đi đâu thì bạn đi đó à?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我们先看看时间吧。",
        "pinyin": "wǒ men xiān kàn kàn shí jiān ba。",
        "meaning": "Chúng ta xem thời gian trước nhé."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "谁都可以参加 có nghĩa nào?",
        "options": [
          "Không ai được tham gia",
          "Chỉ một người tên 谁 được tham gia",
          "Ai cũng có thể tham gia"
        ],
        "answer": "Ai cũng có thể tham gia",
        "explanation": "谁 phối hợp với 都 ở đây mở rộng phạm vi đến mọi người.",
        "id": "hanngu-q4-b18-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "想看看",
          "我都",
          "什么地方"
        ],
        "answer": "什么地方我都想看看",
        "explanation": "Câu hoàn chỉnh: 什么地方我都想看看。 你去哪儿，我就去哪儿 lặp đại từ để nói hai lựa chọn phụ thuộc nhau. Đọc quan hệ giữa hai vế trước khi cố tìm dấu hỏi hoặc dịch thành hai câu hỏi riêng.",
        "id": "hanngu-q4-b18-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “决定” có nghĩa nào?",
        "options": [
          "dự định",
          "quyết định",
          "ai",
          "tùy ý"
        ],
        "answer": "quyết định",
        "explanation": "决定 (jué dìng): quyết định. Ví dụ: 还没决定，想先和朋友商量。 — Chưa quyết định, tôi muốn bàn với bạn trước.",
        "id": "hanngu-q4-b18-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “旅行” có nghĩa nào?",
        "options": [
          "cái gì",
          "ai",
          "du lịch",
          "bàn bạc"
        ],
        "answer": "du lịch",
        "explanation": "旅行 (lǚ xíng): du lịch. Ví dụ: 寒假我想去旅行。 — Kỳ nghỉ đông tôi muốn đi du lịch.",
        "id": "hanngu-q4-b18-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “谁” có nghĩa nào?",
        "options": [
          "du lịch",
          "kỳ nghỉ đông",
          "ai",
          "dự định"
        ],
        "answer": "ai",
        "explanation": "谁 (shuí): ai. Ví dụ: 是。你找谁？ — Đúng. Bạn tìm ai?",
        "id": "hanngu-q4-b18-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “寒假” có nghĩa nào?",
        "options": [
          "kỳ nghỉ đông",
          "đều",
          "bàn bạc",
          "tùy ý"
        ],
        "answer": "kỳ nghỉ đông",
        "explanation": "寒假 (hán jià): kỳ nghỉ đông. Ví dụ: 寒假你想去哪儿？ — Nghỉ đông bạn muốn đi đâu?",
        "id": "hanngu-q4-b18-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tùy ý” (suí biàn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "随便",
        "alternatives": [],
        "explanation": "随便 (suí biàn) nghĩa là tùy ý. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b18-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cái gì” (shén me). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "什么",
        "alternatives": [],
        "explanation": "什么 (shén me) nghĩa là cái gì. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b18-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Kế hoạch nghỉ đông: đại từ nghi vấn dùng linh hoạt”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “谁都/什么都 nêu phạm vi bao quát”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 18, mốc PDF 116. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b19",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 19",
    "title": "Gặp khó khăn: hiểu quan hệ giữa các vế",
    "subtitle": "有问题，先问老师。",
    "minutes": 30,
    "order": 36,
    "objectives": [
      "Dùng mẫu “有问题，先问老师。” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Không có từ nối vẫn có quan hệ điều kiện / Nhìn logic, không chỉ nhìn dấu phẩy.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: gặp khó khăn: hiểu quan hệ giữa các vế. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Không có từ nối vẫn có quan hệ điều kiện.",
    "vocabulary": [
      {
        "id": "hnl-lex-61b6647189a95f5c",
        "hanzi": "困难",
        "pinyin": "kùn nán",
        "meaning": "khó khăn",
        "example": "遇到困难要先冷静。",
        "examplePinyin": "yù dào kùn nán yào xiān lěng jìng。",
        "exampleMeaning": "Gặp khó khăn thì trước hết phải bình tĩnh."
      },
      {
        "id": "hnl-lex-5086f833f1e1dd8e",
        "hanzi": "警察",
        "pinyin": "jǐng chá",
        "meaning": "cảnh sát",
        "example": "有困难可以找警察。",
        "examplePinyin": "yǒu kùn nán kě yǐ zhǎo jǐng chá。",
        "exampleMeaning": "Gặp khó khăn có thể tìm cảnh sát."
      },
      {
        "id": "hnl-lex-922d7f67f222c371",
        "hanzi": "帮助",
        "pinyin": "bāng zhù",
        "meaning": "giúp đỡ",
        "example": "谢谢你的帮助。",
        "examplePinyin": "xiè xiè nǐ de bāng zhù。",
        "exampleMeaning": "Cảm ơn sự giúp đỡ của bạn."
      },
      {
        "id": "hnl-lex-95871f90d973b4c5",
        "hanzi": "迷路",
        "pinyin": "mí lù",
        "meaning": "lạc đường",
        "example": "要是迷路了怎么办？",
        "examplePinyin": "yào shì mí lù le zěn me bàn？",
        "exampleMeaning": "Nếu lạc đường thì làm sao?"
      },
      {
        "id": "hnl-lex-e34970f81446f492",
        "hanzi": "地址",
        "pinyin": "dì zhǐ",
        "meaning": "địa chỉ",
        "example": "你知道这个地址在哪儿吗？",
        "examplePinyin": "nǐ zhī dào zhè ge dì zhǐ zài nǎr ma？",
        "exampleMeaning": "Bạn biết địa chỉ này ở đâu không?"
      },
      {
        "id": "hnl-lex-e20d9fe82d3be869",
        "hanzi": "问",
        "pinyin": "wèn",
        "meaning": "hỏi",
        "example": "不太清楚，我们问问吧。",
        "examplePinyin": "bù tài qīng chǔ， wǒ men wèn wèn ba。",
        "exampleMeaning": "Không rõ lắm, chúng ta hỏi thử nhé."
      },
      {
        "id": "hnl-lex-3fded231431e9476",
        "hanzi": "需要",
        "pinyin": "xū yào",
        "meaning": "cần",
        "example": "需要帮助就告诉我。",
        "examplePinyin": "xū yào bāng zhù jiù gào sù wǒ。",
        "exampleMeaning": "Cần giúp đỡ thì nói cho tôi."
      },
      {
        "id": "hnl-lex-816d7409baf35718",
        "hanzi": "联系",
        "pinyin": "lián xì",
        "meaning": "liên hệ",
        "example": "先找安全的地方，再联系朋友。",
        "examplePinyin": "xiān zhǎo ān quán de dì fāng， zài lián xì péng yǒu。",
        "exampleMeaning": "Tìm chỗ an toàn trước rồi liên hệ bạn bè."
      },
      {
        "id": "hnl-lex-d814fc34cd010070",
        "hanzi": "赶快",
        "pinyin": "gǎn kuài",
        "meaning": "mau lên",
        "example": "赶快上车吧。",
        "examplePinyin": "gǎn kuài shàng chē ba。",
        "exampleMeaning": "Mau lên xe đi."
      },
      {
        "id": "hnl-lex-f9b60878d08a37f3",
        "hanzi": "办法",
        "pinyin": "bàn fǎ",
        "meaning": "cách/biện pháp",
        "example": "我们想了一个办法，结果很不错。",
        "examplePinyin": "wǒ men xiǎng le yí gè bàn fǎ， jié guǒ hěn bú cuò。",
        "exampleMeaning": "Chúng tôi nghĩ ra một cách, kết quả khá tốt."
      }
    ],
    "grammar": [
      {
        "title": "Không có từ nối vẫn có quan hệ điều kiện",
        "explanation": "有困难找警察 là câu khẩu ngữ rút gọn: khi có khó khăn thì tìm cảnh sát giúp. Nghĩa dựa trên quan hệ logic của các vế, không nhất thiết phải thêm 如果 và 就 để câu mới đúng.",
        "example": "有问题，先问老师。",
        "translation": "Có vấn đề thì hỏi giáo viên trước."
      },
      {
        "title": "Nhìn logic, không chỉ nhìn dấu phẩy",
        "explanation": "累了就休息 là điều kiện và phản ứng; 到了车站再联系 là trình tự. Dấu phẩy một mình không chứng minh hai vế có cùng quan hệ.",
        "example": "到了车站，再给我打电话。",
        "translation": "Đến bến xe rồi hãy gọi cho tôi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你知道这个地址在哪儿吗？",
        "pinyin": "nǐ zhī dào zhè ge dì zhǐ zài nǎr ma？",
        "meaning": "Bạn biết địa chỉ này ở đâu không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不太清楚，我们问问吧。",
        "pinyin": "bù tài qīng chǔ， wǒ men wèn wèn ba。",
        "meaning": "Không rõ lắm, chúng ta hỏi thử nhé."
      },
      {
        "speaker": "An",
        "hanzi": "要是迷路了怎么办？",
        "pinyin": "yào shì mí lù le zěn me bàn？",
        "meaning": "Nếu lạc đường thì làm sao?"
      },
      {
        "speaker": "Minh",
        "hanzi": "先找安全的地方，再联系朋友。",
        "pinyin": "xiān zhǎo ān quán de dì fāng， zài lián xì péng yǒu。",
        "meaning": "Tìm chỗ an toàn trước rồi liên hệ bạn bè."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 有问题，先问老师, quan hệ giữa hai vế gần nhất là gì?",
        "options": [
          "So sánh chiều cao",
          "Hai số lượng bằng nhau",
          "Điều kiện và cách ứng xử"
        ],
        "answer": "Điều kiện và cách ứng xử",
        "explanation": "Vế đầu đặt tình huống có vấn đề, vế sau nêu cách làm khi tình huống ấy xảy ra.",
        "id": "hanngu-q4-b19-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "问老师",
          "先",
          "有问题"
        ],
        "answer": "有问题先问老师",
        "explanation": "Câu hoàn chỉnh: 有问题先问老师。 有困难找警察 là câu khẩu ngữ rút gọn: khi có khó khăn thì tìm cảnh sát giúp. Nghĩa dựa trên quan hệ logic của các vế, không nhất thiết phải thêm 如果 và 就 để câu mới đúng.",
        "id": "hanngu-q4-b19-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “迷路” có nghĩa nào?",
        "options": [
          "hỏi",
          "liên hệ",
          "mau lên",
          "lạc đường"
        ],
        "answer": "lạc đường",
        "explanation": "迷路 (mí lù): lạc đường. Ví dụ: 要是迷路了怎么办？ — Nếu lạc đường thì làm sao?",
        "id": "hanngu-q4-b19-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “联系” có nghĩa nào?",
        "options": [
          "khó khăn",
          "mau lên",
          "liên hệ",
          "giúp đỡ"
        ],
        "answer": "liên hệ",
        "explanation": "联系 (lián xì): liên hệ. Ví dụ: 先找安全的地方，再联系朋友。 — Tìm chỗ an toàn trước rồi liên hệ bạn bè.",
        "id": "hanngu-q4-b19-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “办法” có nghĩa nào?",
        "options": [
          "lạc đường",
          "mau lên",
          "liên hệ",
          "cách/biện pháp"
        ],
        "answer": "cách/biện pháp",
        "explanation": "办法 (bàn fǎ): cách/biện pháp. Ví dụ: 我们想了一个办法，结果很不错。 — Chúng tôi nghĩ ra một cách, kết quả khá tốt.",
        "id": "hanngu-q4-b19-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “困难” có nghĩa nào?",
        "options": [
          "khó khăn",
          "cách/biện pháp",
          "địa chỉ",
          "hỏi"
        ],
        "answer": "khó khăn",
        "explanation": "困难 (kùn nán): khó khăn. Ví dụ: 遇到困难要先冷静。 — Gặp khó khăn thì trước hết phải bình tĩnh.",
        "id": "hanngu-q4-b19-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cảnh sát” (jǐng chá). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "警察",
        "alternatives": [],
        "explanation": "警察 (jǐng chá) nghĩa là cảnh sát. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b19-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “mau lên” (gǎn kuài). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "赶快",
        "alternatives": [],
        "explanation": "赶快 (gǎn kuài) nghĩa là mau lên. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b19-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Gặp khó khăn: hiểu quan hệ giữa các vế”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Nhìn logic, không chỉ nhìn dấu phẩy”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 19, mốc PDF 130. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-b20",
    "level": 4,
    "unit": "Quyển 4 · Bài nguồn 20",
    "title": "Con số may mắn: nhận ra câu phản vấn",
    "subtitle": "难道你不想试一试吗？",
    "minutes": 30,
    "order": 37,
    "objectives": [
      "Dùng mẫu “难道你不想试一试吗？” trong tình huống phù hợp.",
      "Nhận diện 10 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Phản vấn phải đọc ý định của người nói / Phong tục không phải dự đoán chắc chắn.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: con số may mắn: nhận ra câu phản vấn. Hãy học thành 2 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Trước khi học mới, thử nhớ một mẫu ở bài trước. Khi sai, xác định mình sai nghĩa, vị trí từ hay cấu trúc rồi làm lại. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Phản vấn phải đọc ý định của người nói.",
    "vocabulary": [
      {
        "id": "hnl-lex-aadd29bd156e8e2a",
        "hanzi": "数字",
        "pinyin": "shù zì",
        "meaning": "con số",
        "example": "这个数字很容易记。",
        "examplePinyin": "zhè ge shù zì hěn róng yì jì。",
        "exampleMeaning": "Con số này rất dễ nhớ."
      },
      {
        "id": "hnl-lex-06154be8914d3c91",
        "hanzi": "吉利",
        "pinyin": "jí lì",
        "meaning": "may mắn",
        "example": "不是因为它吉利吗？",
        "examplePinyin": "bú shì yīn wèi tā jí lì ma？",
        "exampleMeaning": "Không phải vì nó may mắn à?"
      },
      {
        "id": "hnl-lex-ee9affdc60e931f2",
        "hanzi": "谐音",
        "pinyin": "xié yīn",
        "meaning": "đồng âm/gần âm",
        "example": "这是一个有趣的谐音。",
        "examplePinyin": "zhè shì yí gè yǒu qù de xié yīn。",
        "exampleMeaning": "Đây là một cách chơi đồng âm thú vị."
      },
      {
        "id": "hnl-lex-7ec32cd969256881",
        "hanzi": "难道",
        "pinyin": "nán dào",
        "meaning": "lẽ nào",
        "example": "难道你不想试一试吗？",
        "examplePinyin": "nán dào nǐ bù xiǎng shì yī shì ma？",
        "exampleMeaning": "Lẽ nào bạn không muốn thử sao?"
      },
      {
        "id": "hnl-lex-3ce767f804c2f6d9",
        "hanzi": "号码",
        "pinyin": "hào mǎ",
        "meaning": "số hiệu/số điện thoại",
        "example": "你为什么选这个号码？",
        "examplePinyin": "nǐ wèi shén me xuǎn zhè ge hào mǎ？",
        "exampleMeaning": "Vì sao bạn chọn số này?"
      },
      {
        "id": "hnl-lex-5183945687908c3a",
        "hanzi": "习惯",
        "pinyin": "xí guàn",
        "meaning": "thói quen",
        "example": "我还不习惯这里的天气。",
        "examplePinyin": "wǒ hái bù xí guàn zhè lǐ de tiān qì。",
        "exampleMeaning": "Tôi vẫn chưa quen thời tiết ở đây."
      },
      {
        "id": "hnl-lex-ea663a30701f19ad",
        "hanzi": "相信",
        "pinyin": "xiāng xìn",
        "meaning": "tin",
        "example": "我相信你能做到。",
        "examplePinyin": "wǒ xiāng xìn nǐ néng zuò dào。",
        "exampleMeaning": "Tôi tin bạn có thể làm được."
      },
      {
        "id": "hnl-lex-4c35f303bc71332e",
        "hanzi": "选择",
        "pinyin": "xuǎn zé",
        "meaning": "lựa chọn",
        "example": "不同的人有不同的选择。",
        "examplePinyin": "bù tóng de rén yǒu bù tóng de xuǎn zé。",
        "exampleMeaning": "Những người khác nhau có lựa chọn khác nhau."
      },
      {
        "id": "hnl-lex-219b9e55eaacd85e",
        "hanzi": "意义",
        "pinyin": "yì yì",
        "meaning": "ý nghĩa",
        "example": "这件事有什么意义？",
        "examplePinyin": "zhè jiàn shì yǒu shén me yì yì？",
        "exampleMeaning": "Việc này có ý nghĩa gì?"
      },
      {
        "id": "hnl-lex-58935dc8d904801d",
        "hanzi": "文化",
        "pinyin": "wén huà",
        "meaning": "văn hóa",
        "example": "学习语言也要了解文化。",
        "examplePinyin": "xué xí yǔ yán yě yào liǎo jiě wén huà。",
        "exampleMeaning": "Học ngôn ngữ cũng cần hiểu văn hóa."
      }
    ],
    "grammar": [
      {
        "title": "Phản vấn phải đọc ý định của người nói",
        "explanation": "难道你不知道吗 thường nhấn mạnh điều người nói cho rằng người nghe biết. Không chấm nghĩa chỉ bằng hình thức phủ định; ngữ điệu và quan hệ giữa hai người cũng quan trọng.",
        "example": "难道你不想试一试吗？",
        "translation": "Lẽ nào bạn không muốn thử sao?"
      },
      {
        "title": "Phong tục không phải dự đoán chắc chắn",
        "explanation": "Một số con số có liên tưởng âm hoặc văn hóa, nhưng sở thích khác nhau giữa người và vùng. Bài luyện cách giải thích một quan niệm, không khẳng định con số quyết định kết quả đời sống.",
        "example": "不同的人有不同的选择。",
        "translation": "Những người khác nhau có lựa chọn khác nhau."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你为什么选这个号码？",
        "pinyin": "nǐ wèi shén me xuǎn zhè ge hào mǎ？",
        "meaning": "Vì sao bạn chọn số này?"
      },
      {
        "speaker": "Minh",
        "hanzi": "因为容易记。",
        "pinyin": "yīn wèi róng yì jì。",
        "meaning": "Vì dễ nhớ."
      },
      {
        "speaker": "An",
        "hanzi": "不是因为它吉利吗？",
        "pinyin": "bú shì yīn wèi tā jí lì ma？",
        "meaning": "Không phải vì nó may mắn à?"
      },
      {
        "speaker": "Minh",
        "hanzi": "每个人的想法不一样。",
        "pinyin": "měi gè rén de xiǎng fǎ bù yí yàng。",
        "meaning": "Suy nghĩ của mỗi người khác nhau."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Đọc phản vấn nên ưu tiên kiểm điều gì?",
        "options": [
          "Luôn coi đó là câu hỏi xin thông tin trung lập",
          "Chỉ đếm số chữ 不",
          "Ý định nhấn mạnh trong ngữ cảnh"
        ],
        "answer": "Ý định nhấn mạnh trong ngữ cảnh",
        "explanation": "Phản vấn có thể dùng hình thức hỏi để nhấn một nhận định.",
        "id": "hanngu-q4-b20-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "不同的人",
          "不同的选择",
          "有"
        ],
        "answer": "不同的人有不同的选择",
        "explanation": "Câu hoàn chỉnh: 不同的人有不同的选择。 难道你不知道吗 thường nhấn mạnh điều người nói cho rằng người nghe biết. Không chấm nghĩa chỉ bằng hình thức phủ định; ngữ điệu và quan hệ giữa hai người cũng quan trọng.",
        "id": "hanngu-q4-b20-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “谐音” có nghĩa nào?",
        "options": [
          "số hiệu/số điện thoại",
          "lẽ nào",
          "đồng âm/gần âm",
          "tin"
        ],
        "answer": "đồng âm/gần âm",
        "explanation": "谐音 (xié yīn): đồng âm/gần âm. Ví dụ: 这是一个有趣的谐音。 — Đây là một cách chơi đồng âm thú vị.",
        "id": "hanngu-q4-b20-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “习惯” có nghĩa nào?",
        "options": [
          "văn hóa",
          "con số",
          "thói quen",
          "số hiệu/số điện thoại"
        ],
        "answer": "thói quen",
        "explanation": "习惯 (xí guàn): thói quen. Ví dụ: 我还不习惯这里的天气。 — Tôi vẫn chưa quen thời tiết ở đây.",
        "id": "hanngu-q4-b20-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “相信” có nghĩa nào?",
        "options": [
          "văn hóa",
          "lựa chọn",
          "tin",
          "số hiệu/số điện thoại"
        ],
        "answer": "tin",
        "explanation": "相信 (xiāng xìn): tin. Ví dụ: 我相信你能做到。 — Tôi tin bạn có thể làm được.",
        "id": "hanngu-q4-b20-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “号码” có nghĩa nào?",
        "options": [
          "đồng âm/gần âm",
          "số hiệu/số điện thoại",
          "thói quen",
          "văn hóa"
        ],
        "answer": "số hiệu/số điện thoại",
        "explanation": "号码 (hào mǎ): số hiệu/số điện thoại. Ví dụ: 你为什么选这个号码？ — Vì sao bạn chọn số này?",
        "id": "hanngu-q4-b20-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “văn hóa” (wén huà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "文化",
        "alternatives": [],
        "explanation": "文化 (wén huà) nghĩa là văn hóa. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b20-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ý nghĩa” (yì yì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "意义",
        "alternatives": [],
        "explanation": "意义 (yì yì) nghĩa là ý nghĩa. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q4-b20-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Con số may mắn: nhận ra câu phản vấn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Phong tục không phải dự đoán chắc chắn”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 4, bài 20, mốc PDF 143. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q4-on-tap",
    "level": 4,
    "unit": "Ôn tập quyển 4",
    "title": "Nhìn lại quyển 4 — Dùng được điều đã học",
    "subtitle": "Ôn ý nghĩa · Chọn cấu trúc · Tự nói lại",
    "minutes": 30,
    "order": 38,
    "objectives": [
      "Nhớ lại từ đã học mà không nhìn nghĩa trước.",
      "Chọn cấu trúc theo ý muốn nói, không chỉ theo một từ khóa.",
      "Đọc phản hồi và quay lại đúng bài đang nhầm."
    ],
    "introduction": "Đây là điểm dừng ôn tập sau toàn bộ quyển 4. Các câu hỏi được lấy lại có chủ đích từ những tình huống đã học để kiểm tra khả năng nhớ sau một khoảng cách. Làm trước rồi đọc lời giải; khi chưa đúng, ghi tên chủ đề và quay lại bài tương ứng. Không cần chạy đua điểm số.",
    "vocabulary": [
      {
        "id": "hnl-lex-4130169aa3cf59da",
        "hanzi": "前边",
        "pinyin": "qián biān",
        "meaning": "phía trước",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-9cad08e594714c98",
        "hanzi": "辆",
        "pinyin": "liàng",
        "meaning": "lượng từ cho xe",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-b98f334be1ec9f4e",
        "hanzi": "空车",
        "pinyin": "kōng chē",
        "meaning": "xe không có khách",
        "example": "前边有一辆空车。",
        "examplePinyin": "qián biān yǒu yī liàng kōng chē。",
        "exampleMeaning": "Phía trước có một chiếc xe trống."
      },
      {
        "id": "hnl-lex-1f0c7ff186712229",
        "hanzi": "院子",
        "pinyin": "yuàn zi",
        "meaning": "sân",
        "example": "我家院子里有一棵树。",
        "examplePinyin": "wǒ jiā yuàn zi lǐ yǒu yī kē shù。",
        "exampleMeaning": "Trong sân nhà tôi có một cái cây."
      },
      {
        "id": "hnl-lex-29670501ee5bebb4",
        "hanzi": "种",
        "pinyin": "zhǒng",
        "meaning": "trồng",
        "example": "院子里种着很多花。",
        "examplePinyin": "yuàn zi lǐ zhǒng zhe hěn duō huā。",
        "exampleMeaning": "Trong sân trồng nhiều hoa."
      },
      {
        "id": "hnl-lex-bf907f9a4e537b7a",
        "hanzi": "棵",
        "pinyin": "kē",
        "meaning": "lượng từ cho cây",
        "example": "我家院子里有一棵树。",
        "examplePinyin": "wǒ jiā yuàn zi lǐ yǒu yī kē shù。",
        "exampleMeaning": "Trong sân nhà tôi có một cái cây."
      },
      {
        "id": "hnl-lex-b19eda44f0c3ed7c",
        "hanzi": "越来越",
        "pinyin": "yuè lái yuè",
        "meaning": "càng ngày càng",
        "example": "等车的人越来越多了。",
        "examplePinyin": "děng chē de rén yuè lái yuè duō le。",
        "exampleMeaning": "Người chờ xe càng ngày càng đông."
      },
      {
        "id": "hnl-lex-f1bc08caa34e4799",
        "hanzi": "越",
        "pinyin": "yuè",
        "meaning": "càng",
        "example": "等车的人越来越多了。",
        "examplePinyin": "děng chē de rén yuè lái yuè duō le。",
        "exampleMeaning": "Người chờ xe càng ngày càng đông."
      },
      {
        "id": "hnl-lex-7a119fe65f4ab0a8",
        "hanzi": "出租车",
        "pinyin": "chū zū chē",
        "meaning": "taxi",
        "example": "那就坐出租车去吧。",
        "examplePinyin": "nà jiù zuò chū zū chē qù ba。",
        "exampleMeaning": "Vậy đi taxi nhé."
      },
      {
        "id": "hnl-lex-d70892e4a91e890d",
        "hanzi": "正好",
        "pinyin": "zhèng hǎo",
        "meaning": "vừa đúng lúc",
        "example": "正好，我也不想再等了。",
        "examplePinyin": "zhèng hǎo， wǒ yě bù xiǎng zài děng le。",
        "exampleMeaning": "Vừa hay, tôi cũng không muốn đợi nữa."
      },
      {
        "id": "hnl-lex-38b676530be46345",
        "hanzi": "福",
        "pinyin": "fú",
        "meaning": "phúc",
        "example": "这个福字贴在哪儿？",
        "examplePinyin": "zhè ge fú zì tiē zài nǎr？",
        "exampleMeaning": "Chữ Phúc này dán ở đâu?"
      },
      {
        "id": "hnl-lex-5860dbcbaf42eadd",
        "hanzi": "倒",
        "pinyin": "dào",
        "meaning": "dốc ngược/đảo ngược",
        "example": "他被撞倒后，被送到了医院。",
        "examplePinyin": "tā bèi zhuàng dào hòu， bèi sòng dào le yī yuàn。",
        "exampleMeaning": "Sau khi bị va ngã, bạn ấy được đưa đến bệnh viện."
      },
      {
        "id": "hnl-lex-1c9374fa2e8213f1",
        "hanzi": "贴",
        "pinyin": "tiē",
        "meaning": "dán",
        "example": "这个福字贴在哪儿？",
        "examplePinyin": "zhè ge fú zì tiē zài nǎr？",
        "exampleMeaning": "Chữ Phúc này dán ở đâu?"
      },
      {
        "id": "hnl-lex-a62b4a6869d2c799",
        "hanzi": "布置",
        "pinyin": "bù zhì",
        "meaning": "bố trí/trang trí",
        "example": "你们在布置会场吗？",
        "examplePinyin": "nǐ men zài bù zhì huì chǎng ma？",
        "exampleMeaning": "Các bạn đang trang trí nơi tổ chức buổi gặp mặt à?"
      },
      {
        "id": "hnl-lex-022b7bf94040bea3",
        "hanzi": "会场",
        "pinyin": "huì chǎng",
        "meaning": "địa điểm tổ chức buổi họp",
        "example": "你们在布置会场吗？",
        "examplePinyin": "nǐ men zài bù zhì huì chǎng ma？",
        "exampleMeaning": "Các bạn đang trang trí nơi tổ chức buổi gặp mặt à?"
      },
      {
        "id": "hnl-lex-6f8f03a89052f9e6",
        "hanzi": "摆",
        "pinyin": "bǎi",
        "meaning": "đặt/bày",
        "example": "对，我们把桌子摆好了。",
        "examplePinyin": "duì， wǒ men bǎ zhuō zi bǎi hǎo le。",
        "exampleMeaning": "Đúng, chúng tôi bày bàn xong rồi."
      },
      {
        "id": "hnl-lex-6b187093db93a728",
        "hanzi": "墙",
        "pinyin": "qiáng",
        "meaning": "tường",
        "example": "墙上挂着什么？",
        "examplePinyin": "qiáng shàng guà zhe shén me？",
        "exampleMeaning": "Trên tường treo gì?"
      },
      {
        "id": "hnl-lex-7f8d4eafcae3a9d3",
        "hanzi": "装饰",
        "pinyin": "zhuāng shì",
        "meaning": "trang trí",
        "example": "我们用彩灯装饰教室。",
        "examplePinyin": "wǒ men yòng cǎi dēng zhuāng shì jiào shì。",
        "exampleMeaning": "Chúng tôi dùng đèn màu trang trí lớp học."
      },
      {
        "id": "hnl-lex-c736053896b367e2",
        "hanzi": "春节",
        "pinyin": "chūn jié",
        "meaning": "Tết Nguyên đán",
        "example": "春节的时候，家家都很热闹。",
        "examplePinyin": "chūn jié de shí hòu， jiā jiā dōu hěn rè nào。",
        "exampleMeaning": "Vào Tết Nguyên đán, nhà nào cũng náo nhiệt."
      },
      {
        "id": "hnl-lex-02a5b098db594e24",
        "hanzi": "特色",
        "pinyin": "tè sè",
        "meaning": "nét đặc sắc",
        "example": "这道菜很有地方特色。",
        "examplePinyin": "zhè dào cài hěn yǒu dì fāng tè sè。",
        "exampleMeaning": "Món ăn này có nét đặc sắc địa phương."
      },
      {
        "id": "hnl-lex-1cfe2eba25d53c48",
        "hanzi": "护照",
        "pinyin": "hù zhào",
        "meaning": "hộ chiếu",
        "example": "请把护照给我。",
        "examplePinyin": "qǐng bǎ hù zhào gěi wǒ。",
        "exampleMeaning": "Xin đưa hộ chiếu cho tôi."
      },
      {
        "id": "hnl-lex-49d6683ed0b3cd41",
        "hanzi": "机票",
        "pinyin": "jī piào",
        "meaning": "vé máy bay",
        "example": "请把机票给我看一下。",
        "examplePinyin": "qǐng bǎ jī piào gěi wǒ kàn yī xià。",
        "exampleMeaning": "Xin cho tôi xem vé máy bay một chút."
      },
      {
        "id": "hnl-lex-9e52297a3d52e6b3",
        "hanzi": "登机牌",
        "pinyin": "dēng jī pái",
        "meaning": "thẻ lên máy bay",
        "example": "这是我的登机牌。",
        "examplePinyin": "zhè shì wǒ de dēng jī pái。",
        "exampleMeaning": "Đây là thẻ lên máy bay của tôi."
      },
      {
        "id": "hnl-lex-c035845de31306cf",
        "hanzi": "托运",
        "pinyin": "tuō yùn",
        "meaning": "gửi hành lý ký gửi",
        "example": "哪个箱子要托运？",
        "examplePinyin": "nǎ ge xiāng zi yào tuō yùn？",
        "exampleMeaning": "Va li nào cần ký gửi?"
      },
      {
        "id": "hnl-lex-44a795eab3962ad5",
        "hanzi": "行李",
        "pinyin": "xíng lǐ",
        "meaning": "hành lý",
        "example": "等一等，我拿行李。",
        "examplePinyin": "děng yī děng， wǒ ná xíng lǐ。",
        "exampleMeaning": "Đợi chút, tôi lấy hành lý."
      },
      {
        "id": "hnl-lex-ad90963262a5d811",
        "hanzi": "手续",
        "pinyin": "shǒu xù",
        "meaning": "thủ tục",
        "example": "办好手续以后就可以登机了。",
        "examplePinyin": "bàn hǎo shǒu xù yǐ hòu jiù kě yǐ dēng jī le。",
        "exampleMeaning": "Làm xong thủ tục thì có thể lên máy bay."
      },
      {
        "id": "hnl-lex-5739dd705f55324c",
        "hanzi": "检查",
        "pinyin": "jiǎn chá",
        "meaning": "kiểm tra",
        "example": "我已经写完了作业，请你检查一下。",
        "examplePinyin": "wǒ yǐ jīng xiě wán le zuò yè， qǐng nǐ jiǎn chá yī xià。",
        "exampleMeaning": "Tôi đã viết xong bài tập, nhờ bạn kiểm tra giúp."
      },
      {
        "id": "hnl-lex-3a250b75dc6bd8fa",
        "hanzi": "口袋",
        "pinyin": "kǒu dài",
        "meaning": "túi áo/quần",
        "example": "请把手机放在口袋里。",
        "examplePinyin": "qǐng bǎ shǒu jī fàng zài kǒu dài lǐ。",
        "exampleMeaning": "Xin đặt điện thoại vào túi."
      },
      {
        "id": "hnl-lex-a9180ef310dc90c0",
        "hanzi": "掏",
        "pinyin": "tāo",
        "meaning": "lấy/móc ra",
        "example": "请把口袋里的东西掏出来。",
        "examplePinyin": "qǐng bǎ kǒu dài lǐ de dōng xī tāo chū lái。",
        "exampleMeaning": "Xin lấy đồ trong túi ra."
      },
      {
        "id": "hnl-lex-baae1f4974bcec86",
        "hanzi": "箱子",
        "pinyin": "xiāng zi",
        "meaning": "va li/thùng",
        "example": "哪个箱子要托运？",
        "examplePinyin": "nǎ ge xiāng zi yào tuō yùn？",
        "exampleMeaning": "Va li nào cần ký gửi?"
      },
      {
        "id": "hnl-lex-bf48c887b2ce4f3e",
        "hanzi": "腿",
        "pinyin": "tuǐ",
        "meaning": "chân",
        "example": "我的腿还有一点儿疼。",
        "examplePinyin": "wǒ de tuǐ hái yǒu yì diǎnr téng。",
        "exampleMeaning": "Chân tôi vẫn hơi đau."
      },
      {
        "id": "hnl-lex-acf68c5dc5284566",
        "hanzi": "被",
        "pinyin": "bèi",
        "meaning": "bị/được trong câu bị động",
        "example": "被撞坏了。",
        "examplePinyin": "bèi zhuàng huài le。",
        "exampleMeaning": "Bị đâm hỏng rồi."
      },
      {
        "id": "hnl-lex-2fd692b734b9486a",
        "hanzi": "撞",
        "pinyin": "zhuàng",
        "meaning": "đâm/va vào",
        "example": "被撞坏了。",
        "examplePinyin": "bèi zhuàng huài le。",
        "exampleMeaning": "Bị đâm hỏng rồi."
      },
      {
        "id": "hnl-lex-e55ebd1b275af7e1",
        "hanzi": "伤",
        "pinyin": "shāng",
        "meaning": "bị thương",
        "example": "人受伤了吗？",
        "examplePinyin": "rén shòu shāng le ma？",
        "exampleMeaning": "Có ai bị thương không?"
      },
      {
        "id": "hnl-lex-687aa8c2e0d3cc85",
        "hanzi": "摔",
        "pinyin": "shuāi",
        "meaning": "ngã/đánh rơi",
        "example": "摔坏了。",
        "examplePinyin": "shuāi huài le。",
        "exampleMeaning": "Rơi hỏng rồi."
      },
      {
        "id": "hnl-lex-2510a7efc494e80c",
        "hanzi": "流血",
        "pinyin": "liú xiě",
        "meaning": "chảy máu",
        "example": "伤口没有流血了。",
        "examplePinyin": "shāng kǒu méi yǒu liú xiě le。",
        "exampleMeaning": "Vết thương không còn chảy máu nữa."
      }
    ],
    "grammar": [
      {
        "title": "Câu tồn hiện: nơi chốn trước, thông tin mới sau",
        "explanation": "Trong 前边开过来一辆空车, phía trước là nền không gian; một chiếc xe xuất hiện là thông tin mới. Danh ngữ sau động từ thường chưa xác định trong ngữ cảnh. Đây không phải cách đảo tùy ý mọi câu có 在.",
        "example": "前边开过来一辆空车。",
        "translation": "Phía trước có một chiếc xe trống chạy tới."
      },
      {
        "title": "爬得上去: làm được một chuyển động có hướng",
        "explanation": "上去 cho hướng đi lên rời điểm nhìn; 得 biến cụm thành khả năng thực hiện. Đừng bỏ 去 nếu tình huống cần thể hiện điểm nhìn.",
        "example": "这座山不高，我爬得上去。",
        "translation": "Ngọn núi này không cao, tôi leo lên được."
      },
      {
        "title": "Phản vấn phải đọc ý định của người nói",
        "explanation": "难道你不知道吗 thường nhấn mạnh điều người nói cho rằng người nghe biết. Không chấm nghĩa chỉ bằng hình thức phủ định; ngữ điệu và quan hệ giữa hai người cũng quan trọng.",
        "example": "难道你不想试一试吗？",
        "translation": "Lẽ nào bạn không muốn thử sao?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你遇到困难怎么办？",
        "pinyin": "nǐ yù dào kùn nán zěn me bàn？",
        "meaning": "Bạn làm gì khi gặp khó khăn?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有问题，先问老师。",
        "pinyin": "yǒu wèn tí， xiān wèn lǎo shī。",
        "meaning": "Có vấn đề thì hỏi giáo viên trước."
      },
      {
        "speaker": "An",
        "hanzi": "你听得懂京剧吗？",
        "pinyin": "nǐ tīng de dǒng jīng jù ma？",
        "meaning": "Bạn nghe hiểu Kinh kịch được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有的听得懂，有的听不懂。",
        "pinyin": "yǒu de tīng de dǒng， yǒu de tīng bù dǒng。",
        "meaning": "Có chỗ hiểu được, có chỗ không."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Trong 前边开过来一辆空车, thông tin mới được giới thiệu là gì?",
        "options": [
          "Một quy tắc cấm đi xe",
          "Một chiếc xe chạy tới",
          "Tên riêng của người nói"
        ],
        "answer": "Một chiếc xe chạy tới",
        "explanation": "Câu đặt nơi chốn làm nền rồi giới thiệu sự vật xuất hiện.",
        "id": "hanngu-q4-on-tap-q1"
      },
      {
        "type": "choice",
        "prompt": "Trong 把桌子摆好, 好 đóng vai trò gì?",
        "options": [
          "Nêu chủ thể thực hiện",
          "Khen bàn luôn đắt tiền",
          "Nêu kết quả của việc bày bàn"
        ],
        "answer": "Nêu kết quả của việc bày bàn",
        "explanation": "摆好 diễn đạt hành động và kết quả; 好 không phải lời chào trong câu này.",
        "id": "hanngu-q4-on-tap-q2"
      },
      {
        "type": "choice",
        "prompt": "Chọn câu nói “Tôi chưa lấy hộ chiếu ra”.",
        "options": [
          "我把护照没。",
          "我没把护照拿出来。",
          "我把没护照拿出来。"
        ],
        "answer": "我没把护照拿出来。",
        "explanation": "没 đặt trước 把 để phủ định việc xử lý đối tượng.",
        "id": "hanngu-q4-on-tap-q3"
      },
      {
        "type": "choice",
        "prompt": "Trong 自行车被撞坏了, xe đạp có vai trò nào?",
        "options": [
          "Động từ hành động",
          "Đối tượng chịu tác động",
          "Người lái mọi phương tiện"
        ],
        "answer": "Đối tượng chịu tác động",
        "explanation": "Chủ ngữ câu bị động là đối tượng chịu tác động, không phải tác nhân gây ra va chạm.",
        "id": "hanngu-q4-on-tap-q4"
      },
      {
        "type": "choice",
        "prompt": "Câu nào nêu khả năng nghe hiểu, thay vì kết quả đã xảy ra?",
        "options": [
          "我听得懂。",
          "我昨天听了。",
          "我听懂了。"
        ],
        "answer": "我听得懂。",
        "explanation": "得 đứng giữa động từ và bổ ngữ tạo dạng khẳng định khả năng.",
        "id": "hanngu-q4-on-tap-q5"
      },
      {
        "type": "choice",
        "prompt": "搬不动 chủ yếu cho biết điều gì trong câu về va li nặng?",
        "options": [
          "Không được phép nghỉ",
          "Chưa từng thấy va li",
          "Không chuyển nổi theo điều kiện hiện tại"
        ],
        "answer": "Không chuyển nổi theo điều kiện hiện tại",
        "explanation": "动 làm bổ ngữ khả năng, nói có thể làm vật di chuyển hay không.",
        "id": "hanngu-q4-on-tap-q6"
      },
      {
        "type": "choice",
        "prompt": "Trong ngữ cảnh trí nhớ, 想不起来 nghĩa là gì?",
        "options": [
          "Không nghe được bất kỳ âm thanh nào",
          "Không muốn đứng dậy",
          "Không nhớ ra"
        ],
        "answer": "Không nhớ ra",
        "explanation": "Nghĩa mở rộng của 想起来 gắn với việc nhớ lại.",
        "id": "hanngu-q4-on-tap-q7"
      },
      {
        "type": "choice",
        "prompt": "谁都可以参加 có nghĩa nào?",
        "options": [
          "Không ai được tham gia",
          "Chỉ một người tên 谁 được tham gia",
          "Ai cũng có thể tham gia"
        ],
        "answer": "Ai cũng có thể tham gia",
        "explanation": "谁 phối hợp với 都 ở đây mở rộng phạm vi đến mọi người.",
        "id": "hanngu-q4-on-tap-q8"
      },
      {
        "type": "choice",
        "prompt": "Trong 有问题，先问老师, quan hệ giữa hai vế gần nhất là gì?",
        "options": [
          "So sánh chiều cao",
          "Hai số lượng bằng nhau",
          "Điều kiện và cách ứng xử"
        ],
        "answer": "Điều kiện và cách ứng xử",
        "explanation": "Vế đầu đặt tình huống có vấn đề, vế sau nêu cách làm khi tình huống ấy xảy ra.",
        "id": "hanngu-q4-on-tap-q9"
      },
      {
        "type": "choice",
        "prompt": "Đọc phản vấn nên ưu tiên kiểm điều gì?",
        "options": [
          "Luôn coi đó là câu hỏi xin thông tin trung lập",
          "Chỉ đếm số chữ 不",
          "Ý định nhấn mạnh trong ngữ cảnh"
        ],
        "answer": "Ý định nhấn mạnh trong ngữ cảnh",
        "explanation": "Phản vấn có thể dùng hình thức hỏi để nhấn một nhận định.",
        "id": "hanngu-q4-on-tap-q10"
      }
    ],
    "summary": "Hãy chọn một tình huống trong quyển và nói lại bằng thông tin của chính bạn. Ôn từ còn quên trước khi sang quyển mới. Điểm ôn tập giúp nhận diện chỗ cần học lại, không phải chứng nhận năng lực thi HSK hay chấm phát âm.",
    "provenance": "Hán Ngữ Lab tự biên soạn điểm ôn bằng kiến thức trong quyển; câu hỏi lặp có chủ đích để gợi nhớ. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  }
]);
