import { lessonSchema, type Lesson } from '../lib/domain';

// HSK5–6 beta bundle. Derived lesson companions; private source PDFs are never imported.
export const hsk56Lessons: Lesson[] = lessonSchema.array().parse([
  {
    "id": "hanngu-q5-b01",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 1",
    "title": "离家的时候",
    "subtitle": "从……起",
    "minutes": 35,
    "order": 71,
    "objectives": [
      "Hiểu và dùng trọng tâm “从……起” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “离家的时候”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-ae0c3d80059116f6",
        "hanzi": "愿望",
        "pinyin": "yuàn wàng",
        "meaning": "nguyện vọng",
        "example": "从去年夏天起，我就开始学习汉语。",
        "examplePinyin": "cóng qù nián xià tiān qǐ， wǒ jiù kāi shǐ xué xí hàn yǔ。",
        "exampleMeaning": "Từ mùa hè năm ngoái, tôi bắt đầu học tiếng Trung."
      },
      {
        "id": "hnl-lex-a90f01d8a94e15f1",
        "hanzi": "实现",
        "pinyin": "shí xiàn",
        "meaning": "thực hiện",
        "example": "她瞒着父母办好了手续。",
        "examplePinyin": "tā mán zhe fù mǔ bàn hǎo le shǒu xù。",
        "exampleMeaning": "Cô ấy giấu bố mẹ làm xong thủ tục."
      },
      {
        "id": "hnl-lex-ad90963262a5d811",
        "hanzi": "手续",
        "pinyin": "shǒu xù",
        "meaning": "thủ tục",
        "example": "从去年夏天起，我就开始学习汉语。",
        "examplePinyin": "cóng qù nián xià tiān qǐ， wǒ jiù kāi shǐ xué xí hàn yǔ。",
        "exampleMeaning": "Từ mùa hè năm ngoái, tôi bắt đầu học tiếng Trung."
      },
      {
        "id": "hnl-lex-fa85dad27bed241a",
        "hanzi": "商量",
        "pinyin": "shāng liáng",
        "meaning": "bàn bạc",
        "example": "她瞒着父母办好了手续。",
        "examplePinyin": "tā mán zhe fù mǔ bàn hǎo le shǒu xù。",
        "exampleMeaning": "Cô ấy giấu bố mẹ làm xong thủ tục."
      },
      {
        "id": "hnl-lex-c2423749f80a5c2b",
        "hanzi": "果然",
        "pinyin": "guǒ rán",
        "meaning": "quả nhiên",
        "example": "从去年夏天起，我就开始学习汉语。",
        "examplePinyin": "cóng qù nián xià tiān qǐ， wǒ jiù kāi shǐ xué xí hàn yǔ。",
        "exampleMeaning": "Từ mùa hè năm ngoái, tôi bắt đầu học tiếng Trung."
      },
      {
        "id": "hnl-lex-63428b3e9caffe76",
        "hanzi": "独生女",
        "pinyin": "dú shēng nǚ",
        "meaning": "con gái duy nhất",
        "example": "她瞒着父母办好了手续。",
        "examplePinyin": "tā mán zhe fù mǔ bàn hǎo le shǒu xù。",
        "exampleMeaning": "Cô ấy giấu bố mẹ làm xong thủ tục."
      }
    ],
    "grammar": [
      {
        "title": "从……起",
        "explanation": "từ mốc thời gian trở đi Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "从去年夏天起，我就开始学习汉语。",
        "translation": "Từ mùa hè năm ngoái, tôi bắt đầu học tiếng Trung."
      },
      {
        "title": "瞒着",
        "explanation": "giấu, không cho biết Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "她瞒着父母办好了手续。",
        "translation": "Cô ấy giấu bố mẹ làm xong thủ tục."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你什么时候开始准备的？",
        "pinyin": "nǐ shén me shí hòu kāi shǐ zhǔn bèi de？",
        "meaning": "Bạn bắt đầu chuẩn bị từ khi nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "从去年夏天起，我就开始准备了。",
        "pinyin": "cóng qù nián xià tiān qǐ， wǒ jiù kāi shǐ zhǔn bèi le。",
        "meaning": "Từ mùa hè năm ngoái tôi đã bắt đầu chuẩn bị."
      },
      {
        "speaker": "An",
        "hanzi": "家人同意吗？",
        "pinyin": "jiā rén tóng yì ma？",
        "meaning": "Gia đình có đồng ý không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "他们后来理解了我的选择。",
        "pinyin": "tā men hòu lái lǐ jiě le wǒ de xuǎn zé。",
        "meaning": "Sau đó họ đã hiểu lựa chọn của tôi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào nói về một việc bắt đầu từ một mốc thời gian?",
        "options": [
          "从去年夏天起，我就开始准备了。",
          "我昨天没有准备。",
          "这是我的新书。"
        ],
        "answer": "从去年夏天起，我就开始准备了。",
        "explanation": "从……起 đặt mốc bắt đầu và nhấn mạnh trạng thái tiếp tục sau mốc đó。",
        "id": "hanngu-q5-b01-q01"
      },
      {
        "type": "choice",
        "prompt": "“愿望”的意思是什么？（yuàn wàng）",
        "options": [
          "nguyện vọng",
          "thực hiện",
          "thủ tục",
          "bàn bạc"
        ],
        "answer": "nguyện vọng",
        "explanation": "愿望（yuàn wàng） nghĩa là nguyện vọng。",
        "id": "hanngu-q5-b01-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “thực hiện” (shí xiàn).",
        "answer": "实现",
        "alternatives": [],
        "explanation": "实现 (shí xiàn) nghĩa là thực hiện。",
        "id": "hanngu-q5-b01-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “离家的时候”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 17–17; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b02",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 2",
    "title": "一封信",
    "subtitle": "互相 + động từ",
    "minutes": 35,
    "order": 72,
    "objectives": [
      "Hiểu và dùng trọng tâm “互相 + động từ” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “一封信”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-321fdef0e5a71946",
        "hanzi": "放心",
        "pinyin": "fàng xīn",
        "meaning": "yên tâm",
        "example": "同学们互相关心，互相帮助。",
        "examplePinyin": "tóng xué men hù xiāng guān xīn， hù xiāng bāng zhù。",
        "exampleMeaning": "Các bạn học quan tâm và giúp đỡ lẫn nhau."
      },
      {
        "id": "hnl-lex-9147c77e495aefe1",
        "hanzi": "习惯",
        "pinyin": "xí guàn",
        "meaning": "quen với",
        "example": "你习惯这里的生活了吗？",
        "examplePinyin": "nǐ xí guàn zhè lǐ de shēng huó le ma？",
        "exampleMeaning": "Bạn đã quen cuộc sống ở đây chưa?"
      },
      {
        "id": "hnl-lex-9ab5e9b73eeaa1a3",
        "hanzi": "情景",
        "pinyin": "qíng jǐng",
        "meaning": "cảnh tượng",
        "example": "同学们互相关心，互相帮助。",
        "examplePinyin": "tóng xué men hù xiāng guān xīn， hù xiāng bāng zhù。",
        "exampleMeaning": "Các bạn học quan tâm và giúp đỡ lẫn nhau."
      },
      {
        "id": "hnl-lex-68e8ef4f4d0d9ded",
        "hanzi": "分别",
        "pinyin": "fēn bié",
        "meaning": "lần lượt",
        "example": "同学们分别来自五大洲。",
        "examplePinyin": "tóng xué men fēn bié lái zì wǔ dà zhōu。",
        "exampleMeaning": "Các bạn học đến từ năm châu."
      },
      {
        "id": "hnl-lex-dd502526c9ac4fa2",
        "hanzi": "互相",
        "pinyin": "hù xiāng",
        "meaning": "lẫn nhau",
        "example": "大家互相关心，互相帮助。",
        "examplePinyin": "dà jiā hù xiāng guān xīn， hù xiāng bāng zhù。",
        "exampleMeaning": "Mọi người quan tâm và giúp đỡ lẫn nhau."
      },
      {
        "id": "hnl-lex-a96d8f8c5fefccaf",
        "hanzi": "团结",
        "pinyin": "tuán jié",
        "meaning": "đoàn kết",
        "example": "同学们分别来自五大洲。",
        "examplePinyin": "tóng xué men fēn bié lái zì wǔ dà zhōu。",
        "exampleMeaning": "Các bạn học đến từ năm châu."
      }
    ],
    "grammar": [
      {
        "title": "互相 + động từ",
        "explanation": "hành động qua lại Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "同学们互相关心，互相帮助。",
        "translation": "Các bạn học quan tâm và giúp đỡ lẫn nhau."
      },
      {
        "title": "分别 + động từ",
        "explanation": "lần lượt hoặc theo từng nhóm Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "同学们分别来自五大洲。",
        "translation": "Các bạn học đến từ năm châu."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你习惯这里的生活了吗？",
        "pinyin": "nǐ xí guàn zhè lǐ de shēng huó le ma？",
        "meaning": "Bạn đã quen cuộc sống ở đây chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "基本上习惯了，也交了很多朋友。",
        "pinyin": "jī běn shàng xí guàn le， yě jiāo le hěn duō péng yǒu。",
        "meaning": "Về cơ bản đã quen và còn kết bạn được nhiều."
      },
      {
        "speaker": "An",
        "hanzi": "同学们相处得怎么样？",
        "pinyin": "tóng xué men xiāng chǔ dé zěn me yàng？",
        "meaning": "Các bạn học hòa hợp thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "大家互相关心，互相帮助。",
        "pinyin": "dà jiā hù xiāng guān xīn， hù xiāng bāng zhù。",
        "meaning": "Mọi người quan tâm và giúp đỡ lẫn nhau."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 互相 đúng。",
        "options": [
          "同学们互相关心。",
          "互相同学们很高。",
          "我互相一本书。"
        ],
        "answer": "同学们互相关心。",
        "explanation": "互相 đứng trước động từ để nói hành động tác động qua lại giữa các bên。",
        "id": "hanngu-q5-b02-q01"
      },
      {
        "type": "choice",
        "prompt": "“放心”的意思是什么？（fàng xīn）",
        "options": [
          "yên tâm",
          "quen với",
          "cảnh tượng",
          "lần lượt"
        ],
        "answer": "yên tâm",
        "explanation": "放心（fàng xīn） nghĩa là yên tâm。",
        "id": "hanngu-q5-b02-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “quen với” (xí guàn).",
        "answer": "习惯",
        "alternatives": [],
        "explanation": "习惯 (xí guàn) nghĩa là quen với。",
        "id": "hanngu-q5-b02-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “一封信”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 31–31; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b03",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 3",
    "title": "北京的四季",
    "subtitle": "拿……来说",
    "minutes": 35,
    "order": 73,
    "objectives": [
      "Hiểu và dùng trọng tâm “拿……来说” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “北京的四季”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
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
        "id": "hnl-lex-01cea0883c107adb",
        "hanzi": "暖和",
        "pinyin": "nuǎn huo",
        "meaning": "ấm áp",
        "example": "天气暖和，公园里有很多游人。",
        "examplePinyin": "tiān qì nuǎn huo， gōng yuán lǐ yǒu hěn duō yóu rén。",
        "exampleMeaning": "Thời tiết ấm áp, công viên có nhiều du khách."
      },
      {
        "id": "hnl-lex-d01244893cb32443",
        "hanzi": "打扮",
        "pinyin": "dǎ bàn",
        "meaning": "ăn diện",
        "example": "拿北京来说，一年有四个季节。",
        "examplePinyin": "ná běi jīng lái shuō， yī nián yǒu sì gè jì jié。",
        "exampleMeaning": "Lấy Bắc Kinh làm ví dụ, một năm có bốn mùa."
      },
      {
        "id": "hnl-lex-2c202e6e6a551b2a",
        "hanzi": "散步",
        "pinyin": "sàn bù",
        "meaning": "đi dạo",
        "example": "春天一到，天气就暖和起来了。",
        "examplePinyin": "chūn tiān yī dào， tiān qì jiù nuǎn huo qǐ lái le。",
        "exampleMeaning": "Mùa xuân vừa đến, thời tiết liền ấm lên."
      },
      {
        "id": "hnl-lex-1bf667118c266be5",
        "hanzi": "充满",
        "pinyin": "chōng mǎn",
        "meaning": "tràn đầy",
        "example": "拿北京来说，一年有四个季节。",
        "examplePinyin": "ná běi jīng lái shuō， yī nián yǒu sì gè jì jié。",
        "exampleMeaning": "Lấy Bắc Kinh làm ví dụ, một năm có bốn mùa."
      },
      {
        "id": "hnl-lex-13b3fdc7a37cfcaa",
        "hanzi": "游人",
        "pinyin": "yóu rén",
        "meaning": "du khách",
        "example": "天气暖和，公园里有很多游人。",
        "examplePinyin": "tiān qì nuǎn huo， gōng yuán lǐ yǒu hěn duō yóu rén。",
        "exampleMeaning": "Thời tiết ấm áp, công viên có nhiều du khách."
      }
    ],
    "grammar": [
      {
        "title": "拿……来说",
        "explanation": "lấy làm ví dụ Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "拿北京来说，一年有四个季节。",
        "translation": "Lấy Bắc Kinh làm ví dụ, một năm có bốn mùa."
      },
      {
        "title": "一……就……",
        "explanation": "vừa…… thì…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "春天一到，天气就暖和起来了。",
        "translation": "Mùa xuân vừa đến, thời tiết liền ấm lên."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "北京春天怎么样？",
        "pinyin": "běi jīng chūn tiān zěn me yàng？",
        "meaning": "Mùa xuân ở Bắc Kinh thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "天气暖和，公园里有很多游人。",
        "pinyin": "tiān qì nuǎn huo， gōng yuán lǐ yǒu hěn duō yóu rén。",
        "meaning": "Thời tiết ấm áp, công viên có nhiều du khách."
      },
      {
        "speaker": "An",
        "hanzi": "你喜欢哪个季节？",
        "pinyin": "nǐ xǐ huān nǎ ge jì jié？",
        "meaning": "Bạn thích mùa nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我喜欢秋天，天气不冷也不热。",
        "pinyin": "wǒ xǐ huān qiū tiān， tiān qì bù lěng yě bù rè。",
        "meaning": "Tôi thích mùa thu, thời tiết không lạnh cũng không nóng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào dùng 拿……来说 để nêu ví dụ?",
        "options": [
          "拿北京来说，一年有四个季节。",
          "北京拿四个季节。",
          "来说北京昨天去。"
        ],
        "answer": "拿北京来说，一年有四个季节。",
        "explanation": "拿……来说 đưa một đối tượng ra làm ví dụ để giải thích nhận xét chung。",
        "id": "hanngu-q5-b03-q01"
      },
      {
        "type": "choice",
        "prompt": "“季节”的意思是什么？（jì jié）",
        "options": [
          "mùa",
          "ấm áp",
          "ăn diện",
          "đi dạo"
        ],
        "answer": "mùa",
        "explanation": "季节（jì jié） nghĩa là mùa。",
        "id": "hanngu-q5-b03-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “ấm áp” (nuǎn huo).",
        "answer": "暖和",
        "alternatives": [],
        "explanation": "暖和 (nuǎn huo) nghĩa là ấm áp。",
        "id": "hanngu-q5-b03-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “北京的四季”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 44–44; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b04",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 4",
    "title": "理想 · Bài học",
    "subtitle": "不是……而是……",
    "minutes": 35,
    "order": 74,
    "objectives": [
      "Hiểu và dùng trọng tâm “不是……而是……” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “理想”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-9b35451909cc3674",
        "hanzi": "理想",
        "pinyin": "lǐ xiǎng",
        "meaning": "lý tưởng",
        "example": "你的理想是什么？",
        "examplePinyin": "nǐ de lǐ xiǎng shì shén me？",
        "exampleMeaning": "Lý tưởng của bạn là gì?"
      },
      {
        "id": "hnl-lex-12684486c4c7bb17",
        "hanzi": "专业",
        "pinyin": "zhuān yè",
        "meaning": "chuyên ngành",
        "example": "为什么选择这个专业？",
        "examplePinyin": "wèi shén me xuǎn zé zhè ge zhuān yè？",
        "exampleMeaning": "Vì sao bạn chọn chuyên ngành này?"
      },
      {
        "id": "hnl-lex-95ca74ac40cba5ed",
        "hanzi": "翻译",
        "pinyin": "fān yì",
        "meaning": "biên dịch",
        "example": "我想做一名翻译。",
        "examplePinyin": "wǒ xiǎng zuò yī míng fān yì。",
        "exampleMeaning": "Tôi muốn làm biên dịch viên."
      },
      {
        "id": "hnl-lex-7e3dfe2d1785636c",
        "hanzi": "著名",
        "pinyin": "zhù míng",
        "meaning": "nổi tiếng",
        "example": "只有努力学习，才能实现理想。",
        "examplePinyin": "zhǐ yǒu nǔ lì xué xí， cái néng shí xiàn lǐ xiǎng。",
        "exampleMeaning": "Chỉ khi học tập nỗ lực mới có thể thực hiện lý tưởng."
      },
      {
        "id": "hnl-lex-a347a426bfbfe1e8",
        "hanzi": "了解",
        "pinyin": "liǎo jiě",
        "meaning": "tìm hiểu",
        "example": "因为我喜欢语言，也想了解不同的文化。",
        "examplePinyin": "yīn wèi wǒ xǐ huān yǔ yán， yě xiǎng liǎo jiě bù tóng de wén huà。",
        "exampleMeaning": "Vì tôi thích ngôn ngữ và muốn tìm hiểu các nền văn hóa khác nhau."
      },
      {
        "id": "hnl-lex-0a3d06a84e5358e5",
        "hanzi": "依靠",
        "pinyin": "yī kào",
        "meaning": "dựa vào",
        "example": "只有努力学习，才能实现理想。",
        "examplePinyin": "zhǐ yǒu nǔ lì xué xí， cái néng shí xiàn lǐ xiǎng。",
        "exampleMeaning": "Chỉ khi học tập nỗ lực mới có thể thực hiện lý tưởng."
      }
    ],
    "grammar": [
      {
        "title": "不是……而是……",
        "explanation": "không phải…… mà là…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "我想学的不是英语，而是汉语。",
        "translation": "Điều tôi muốn học không phải tiếng Anh mà là tiếng Trung."
      },
      {
        "title": "只有……才……",
        "explanation": "chỉ khi…… mới…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "只有努力学习，才能实现理想。",
        "translation": "Chỉ khi học tập nỗ lực mới có thể thực hiện lý tưởng."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你的理想是什么？",
        "pinyin": "nǐ de lǐ xiǎng shì shén me？",
        "meaning": "Lý tưởng của bạn là gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我想做一名翻译。",
        "pinyin": "wǒ xiǎng zuò yī míng fān yì。",
        "meaning": "Tôi muốn làm biên dịch viên."
      },
      {
        "speaker": "An",
        "hanzi": "为什么选择这个专业？",
        "pinyin": "wèi shén me xuǎn zé zhè ge zhuān yè？",
        "meaning": "Vì sao bạn chọn chuyên ngành này?"
      },
      {
        "speaker": "Minh",
        "hanzi": "因为我喜欢语言，也想了解不同的文化。",
        "pinyin": "yīn wèi wǒ xǐ huān yǔ yán， yě xiǎng liǎo jiě bù tóng de wén huà。",
        "meaning": "Vì tôi thích ngôn ngữ và muốn tìm hiểu các nền văn hóa khác nhau."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 只有……才…… đúng。",
        "options": [
          "只有努力学习，才能实现理想。",
          "只有理想努力学习。",
          "才能只有今天下雨。"
        ],
        "answer": "只有努力学习，才能实现理想。",
        "explanation": "只有 nêu điều kiện cần; 才 nêu kết quả chỉ xuất hiện khi điều kiện được đáp ứng。",
        "id": "hanngu-q5-b04-q01"
      },
      {
        "type": "choice",
        "prompt": "“理想”的意思是什么？（lǐ xiǎng）",
        "options": [
          "lý tưởng",
          "chuyên ngành",
          "biên dịch",
          "nổi tiếng"
        ],
        "answer": "lý tưởng",
        "explanation": "理想（lǐ xiǎng） nghĩa là lý tưởng。",
        "id": "hanngu-q5-b04-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “chuyên ngành” (zhuān yè).",
        "answer": "专业",
        "alternatives": [],
        "explanation": "专业 (zhuān yè) nghĩa là chuyên ngành。",
        "id": "hanngu-q5-b04-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “理想”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 55–55; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b05",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 5",
    "title": "回头再说",
    "subtitle": "回头再说",
    "minutes": 35,
    "order": 75,
    "objectives": [
      "Hiểu và dùng trọng tâm “回头再说” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “回头再说”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-14d72633afa07947",
        "hanzi": "口头语",
        "pinyin": "kǒu tóu yǔ",
        "meaning": "khẩu ngữ",
        "example": "这件事回头再说吧。",
        "examplePinyin": "zhè jiàn shì huí tóu zài shuō ba。",
        "exampleMeaning": "Việc này để lúc khác hãy bàn nhé."
      },
      {
        "id": "hnl-lex-c578d56856706ab2",
        "hanzi": "邻座",
        "pinyin": "lín zuò",
        "meaning": "người ngồi cạnh",
        "example": "我一到北京就给他打电话。",
        "examplePinyin": "wǒ yī dào běi jīng jiù gěi tā dǎ diàn huà。",
        "exampleMeaning": "Tôi vừa đến Bắc Kinh đã gọi điện cho anh ấy."
      },
      {
        "id": "hnl-lex-8d37db56558adfad",
        "hanzi": "地道",
        "pinyin": "dì dào",
        "meaning": "chuẩn, tự nhiên",
        "example": "这件事回头再说吧。",
        "examplePinyin": "zhè jiàn shì huí tóu zài shuō ba。",
        "exampleMeaning": "Việc này để lúc khác hãy bàn nhé."
      },
      {
        "id": "hnl-lex-583187acc5616870",
        "hanzi": "名片",
        "pinyin": "míng piàn",
        "meaning": "danh thiếp",
        "example": "我一到北京就给他打电话。",
        "examplePinyin": "wǒ yī dào běi jīng jiù gěi tā dǎ diàn huà。",
        "exampleMeaning": "Tôi vừa đến Bắc Kinh đã gọi điện cho anh ấy."
      },
      {
        "id": "hnl-lex-b242ab175ddfcab3",
        "hanzi": "邀请",
        "pinyin": "yāo qǐng",
        "meaning": "mời",
        "example": "这件事回头再说吧。",
        "examplePinyin": "zhè jiàn shì huí tóu zài shuō ba。",
        "exampleMeaning": "Việc này để lúc khác hãy bàn nhé."
      },
      {
        "id": "hnl-lex-3d9b34f4f46d5468",
        "hanzi": "实在",
        "pinyin": "shí zài",
        "meaning": "chân thật, thực tế",
        "example": "我一到北京就给他打电话。",
        "examplePinyin": "wǒ yī dào běi jīng jiù gěi tā dǎ diàn huà。",
        "exampleMeaning": "Tôi vừa đến Bắc Kinh đã gọi điện cho anh ấy."
      }
    ],
    "grammar": [
      {
        "title": "回头再说",
        "explanation": "để lúc khác bàn Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "这件事回头再说吧。",
        "translation": "Việc này để lúc khác hãy bàn nhé."
      },
      {
        "title": "一……就……",
        "explanation": "vừa…… đã…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "我一到北京就给他打电话。",
        "translation": "Tôi vừa đến Bắc Kinh đã gọi điện cho anh ấy."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "周末来我家玩吗？",
        "pinyin": "zhōu mò lái wǒ jiā wán ma？",
        "meaning": "Cuối tuần đến nhà tôi chơi không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "好啊，我什么时候去？",
        "pinyin": "hǎo a， wǒ shén me shí hòu qù？",
        "meaning": "Được, tôi đi lúc nào?"
      },
      {
        "speaker": "An",
        "hanzi": "这几天工作太忙，回头再说吧。",
        "pinyin": "zhè jǐ tiān gōng zuò tài máng， huí tóu zài shuō ba。",
        "meaning": "Mấy hôm nay công việc bận quá, để lúc khác hãy nói nhé."
      },
      {
        "speaker": "Minh",
        "hanzi": "好，等你有时间再联系。",
        "pinyin": "hǎo， děng nǐ yǒu shí jiān zài lián xì。",
        "meaning": "Được, khi bạn có thời gian thì liên lạc lại nhé."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "回头再说 thể hiện ý nào?",
        "options": [
          "Để sau hãy bàn hoặc sắp xếp。",
          "Đã hoàn thành ngay lập tức。",
          "Không hiểu câu hỏi。"
        ],
        "answer": "Để sau hãy bàn hoặc sắp xếp。",
        "explanation": "回头再说 thường trì hoãn việc quyết định hoặc trao đổi sang thời điểm sau。",
        "id": "hanngu-q5-b05-q01"
      },
      {
        "type": "choice",
        "prompt": "“口头语”的意思是什么？（kǒu tóu yǔ）",
        "options": [
          "khẩu ngữ",
          "người ngồi cạnh",
          "chuẩn, tự nhiên",
          "danh thiếp"
        ],
        "answer": "khẩu ngữ",
        "explanation": "口头语（kǒu tóu yǔ） nghĩa là khẩu ngữ。",
        "id": "hanngu-q5-b05-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “người ngồi cạnh” (lín zuò).",
        "answer": "邻座",
        "alternatives": [],
        "explanation": "邻座 (lín zuò) nghĩa là người ngồi cạnh。",
        "id": "hanngu-q5-b05-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “回头再说”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 68–68; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b06",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 6",
    "title": "吃葡萄",
    "subtitle": "不料……",
    "minutes": 35,
    "order": 87,
    "objectives": [
      "Hiểu và dùng trọng tâm “不料……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “吃葡萄”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-e3e935174ab2472b",
        "hanzi": "葡萄",
        "pinyin": "pú táo",
        "meaning": "quả nho",
        "example": "我以为很容易，不料问题更多。",
        "examplePinyin": "wǒ yǐ wéi hěn róng yì， bù liào wèn tí gèng duō。",
        "exampleMeaning": "Tôi tưởng rất dễ, không ngờ vấn đề lại nhiều hơn."
      },
      {
        "id": "hnl-lex-d2c34ba7aae83019",
        "hanzi": "半死不活",
        "pinyin": "bàn sǐ bù huó",
        "meaning": "thoi thóp, uể oải",
        "example": "她一边学习，一边分享自己的收获。",
        "examplePinyin": "tā yī biān xué xí， yī biān fēn xiǎng zì jǐ de shōu huò。",
        "exampleMeaning": "Cô ấy vừa học vừa chia sẻ thành quả của mình."
      },
      {
        "id": "hnl-lex-a5bf81ca19068704",
        "hanzi": "不料",
        "pinyin": "bù liào",
        "meaning": "không ngờ",
        "example": "我以为很容易，不料问题更多。",
        "examplePinyin": "wǒ yǐ wéi hěn róng yì， bù liào wèn tí gèng duō。",
        "exampleMeaning": "Tôi tưởng rất dễ, không ngờ vấn đề lại nhiều hơn."
      },
      {
        "id": "hnl-lex-0aa35ef58bdbbf52",
        "hanzi": "竟然",
        "pinyin": "jìng rán",
        "meaning": "thế mà, lại còn",
        "example": "她一边学习，一边分享自己的收获。",
        "examplePinyin": "tā yī biān xué xí， yī biān fēn xiǎng zì jǐ de shōu huò。",
        "exampleMeaning": "Cô ấy vừa học vừa chia sẻ thành quả của mình."
      },
      {
        "id": "hnl-lex-7526741e07a0f7bd",
        "hanzi": "分享",
        "pinyin": "fēn xiǎng",
        "meaning": "chia sẻ",
        "example": "我学会了分享，也更有耐心了。",
        "examplePinyin": "wǒ xué huì le fēn xiǎng， yě gèng yǒu nài xīn le。",
        "exampleMeaning": "Tôi học được cách chia sẻ và kiên nhẫn hơn."
      },
      {
        "id": "hnl-lex-2d779142168e3c6d",
        "hanzi": "收获",
        "pinyin": "shōu huò",
        "meaning": "thu hoạch",
        "example": "你今天有什么收获？",
        "examplePinyin": "nǐ jīn tiān yǒu shén me shōu huò？",
        "exampleMeaning": "Hôm nay bạn thu hoạch được gì?"
      },
      {
        "id": "hnl-lex-dd98ba9d977b8a02",
        "hanzi": "喜悦",
        "pinyin": "xǐ yuè",
        "meaning": "niềm vui",
        "example": "我以为很容易，不料问题更多。",
        "examplePinyin": "wǒ yǐ wéi hěn róng yì， bù liào wèn tí gèng duō。",
        "exampleMeaning": "Tôi tưởng rất dễ, không ngờ vấn đề lại nhiều hơn."
      },
      {
        "id": "hnl-lex-1f0dd0808cd99ae1",
        "hanzi": "注视",
        "pinyin": "zhù shì",
        "meaning": "chăm chú nhìn",
        "example": "她一边学习，一边分享自己的收获。",
        "examplePinyin": "tā yī biān xué xí， yī biān fēn xiǎng zì jǐ de shōu huò。",
        "exampleMeaning": "Cô ấy vừa học vừa chia sẻ thành quả của mình."
      }
    ],
    "grammar": [
      {
        "title": "不料……",
        "explanation": "dẫn vào kết quả bất ngờ Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "我以为很容易，不料问题更多。",
        "translation": "Tôi tưởng rất dễ, không ngờ vấn đề lại nhiều hơn."
      },
      {
        "title": "一边……一边……",
        "explanation": "hai hành động diễn ra đồng thời Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "她一边学习，一边分享自己的收获。",
        "translation": "Cô ấy vừa học vừa chia sẻ thành quả của mình."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你今天有什么收获？",
        "pinyin": "nǐ jīn tiān yǒu shén me shōu huò？",
        "meaning": "Hôm nay bạn thu hoạch được gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我学会了分享，也更有耐心了。",
        "pinyin": "wǒ xué huì le fēn xiǎng， yě gèng yǒu nài xīn le。",
        "meaning": "Tôi học được cách chia sẻ và kiên nhẫn hơn."
      },
      {
        "speaker": "An",
        "hanzi": "遇到意外怎么办？",
        "pinyin": "yù dào yì wài zěn me bàn？",
        "meaning": "Gặp chuyện bất ngờ thì làm sao?"
      },
      {
        "speaker": "Minh",
        "hanzi": "先观察，再决定下一步。",
        "pinyin": "xiān guān chá， zài jué dìng xià yī bù。",
        "meaning": "Trước hết quan sát rồi quyết định bước tiếp theo."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 不料 để nói về kết quả bất ngờ.",
        "options": [
          "我以为很容易，不料问题更多。",
          "不料我是学生。",
          "今天不料星期三。"
        ],
        "answer": "我以为很容易，不料问题更多。",
        "explanation": "不料 nối dự đoán ban đầu với kết quả trái dự đoán.",
        "id": "hanngu-q5-b06-q01"
      },
      {
        "type": "choice",
        "prompt": "“葡萄”的意思是什么？（pú táo）",
        "options": [
          "quả nho",
          "thoi thóp, uể oải",
          "không ngờ",
          "thế mà, lại còn"
        ],
        "answer": "quả nho",
        "explanation": "葡萄（pú táo） nghĩa là quả nho。",
        "id": "hanngu-q5-b06-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “thoi thóp, uể oải” (bàn sǐ bù huó).",
        "answer": "半死不活",
        "alternatives": [],
        "explanation": "半死不活 (bàn sǐ bù huó) nghĩa là thoi thóp, uể oải。",
        "id": "hanngu-q5-b06-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “吃葡萄”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 82–93; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b07",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 7",
    "title": "成语故事",
    "subtitle": "因此",
    "minutes": 35,
    "order": 76,
    "objectives": [
      "Hiểu và dùng trọng tâm “因此” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “成语故事”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-f119f199e4578c78",
        "hanzi": "成语",
        "pinyin": "chéng yǔ",
        "meaning": "thành ngữ",
        "example": "你喜欢成语故事吗？",
        "examplePinyin": "nǐ xǐ huān chéng yǔ gù shì ma？",
        "exampleMeaning": "Bạn thích truyện thành ngữ không?"
      },
      {
        "id": "hnl-lex-94d9c10f1dc4edc0",
        "hanzi": "故事",
        "pinyin": "gù shì",
        "meaning": "câu chuyện",
        "example": "你喜欢成语故事吗？",
        "examplePinyin": "nǐ xǐ huān chéng yǔ gù shì ma？",
        "exampleMeaning": "Bạn thích truyện thành ngữ không?"
      },
      {
        "id": "hnl-lex-4135665e44033f9b",
        "hanzi": "寓意",
        "pinyin": "yù yì",
        "meaning": "ngụ ý",
        "example": "喜欢，因为故事短，寓意很深。",
        "examplePinyin": "xǐ huān， yīn wèi gù shì duǎn， yù yì hěn shēn。",
        "exampleMeaning": "Thích, vì truyện ngắn mà ngụ ý sâu."
      },
      {
        "id": "hnl-lex-6db7eb2ed74af14e",
        "hanzi": "结果",
        "pinyin": "jié guǒ",
        "meaning": "kết quả",
        "example": "只要坚持，就能看到结果。",
        "examplePinyin": "zhǐ yào jiān chí， jiù néng kàn dào jié guǒ。",
        "exampleMeaning": "Chỉ cần kiên trì thì sẽ thấy kết quả."
      },
      {
        "id": "hnl-lex-39dd1d26c08a4187",
        "hanzi": "耐心",
        "pinyin": "nài xīn",
        "meaning": "kiên nhẫn",
        "example": "他每天练习，因此进步很快。",
        "examplePinyin": "tā měi tiān liàn xí， yīn cǐ jìn bù hěn kuài。",
        "exampleMeaning": "Mỗi ngày anh ấy luyện tập, vì vậy tiến bộ rất nhanh."
      },
      {
        "id": "hnl-lex-ed3ab028f8af7d19",
        "hanzi": "坚持",
        "pinyin": "jiān chí",
        "meaning": "kiên trì",
        "example": "只要坚持，就能看到结果。",
        "examplePinyin": "zhǐ yào jiān chí， jiù néng kàn dào jié guǒ。",
        "exampleMeaning": "Chỉ cần kiên trì thì sẽ thấy kết quả."
      }
    ],
    "grammar": [
      {
        "title": "因此",
        "explanation": "vì vậy Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "他每天练习，因此进步很快。",
        "translation": "Mỗi ngày anh ấy luyện tập, vì vậy tiến bộ rất nhanh."
      },
      {
        "title": "只要……就……",
        "explanation": "chỉ cần…… thì…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "只要坚持，就能看到结果。",
        "translation": "Chỉ cần kiên trì thì sẽ thấy kết quả."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你喜欢成语故事吗？",
        "pinyin": "nǐ xǐ huān chéng yǔ gù shì ma？",
        "meaning": "Bạn thích truyện thành ngữ không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "喜欢，因为故事短，寓意很深。",
        "pinyin": "xǐ huān， yīn wèi gù shì duǎn， yù yì hěn shēn。",
        "meaning": "Thích, vì truyện ngắn mà ngụ ý sâu."
      },
      {
        "speaker": "An",
        "hanzi": "学习成语有什么方法？",
        "pinyin": "xué xí chéng yǔ yǒu shén me fāng fǎ？",
        "meaning": "Học thành ngữ bằng cách nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "先了解故事，再练习使用。",
        "pinyin": "xiān liǎo jiě gù shì， zài liàn xí shǐ yòng。",
        "meaning": "Trước hết hiểu câu chuyện, sau đó luyện cách dùng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "只要……就…… nói quan hệ gì?",
        "options": [
          "Điều kiện và kết quả",
          "Địa điểm và phương hướng",
          "So sánh hai đồ vật"
        ],
        "answer": "Điều kiện và kết quả",
        "explanation": "只要 nêu điều kiện đủ; 就 giới thiệu kết quả sẽ xảy ra khi điều kiện đó được đáp ứng。",
        "id": "hanngu-q5-b07-q01"
      },
      {
        "type": "choice",
        "prompt": "“成语”的意思是什么？（chéng yǔ）",
        "options": [
          "thành ngữ",
          "câu chuyện",
          "ngụ ý",
          "kết quả"
        ],
        "answer": "thành ngữ",
        "explanation": "成语（chéng yǔ） nghĩa là thành ngữ。",
        "id": "hanngu-q5-b07-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “câu chuyện” (gù shì).",
        "answer": "故事",
        "alternatives": [],
        "explanation": "故事 (gù shì) nghĩa là câu chuyện。",
        "id": "hanngu-q5-b07-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “成语故事”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 94–94; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b08",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 8",
    "title": "恋爱故事",
    "subtitle": "即使……也……",
    "minutes": 35,
    "order": 77,
    "objectives": [
      "Hiểu và dùng trọng tâm “即使……也……” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “恋爱故事”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-a5c13bf8207c5c9d",
        "hanzi": "恋爱",
        "pinyin": "liàn ài",
        "meaning": "tình yêu",
        "example": "即使有误会，也应该诚实地沟通。",
        "examplePinyin": "jí shǐ yǒu wù huì， yě yīng gāi chéng shí dì gōu tōng。",
        "exampleMeaning": "Cho dù có hiểu lầm cũng nên trao đổi thành thật."
      },
      {
        "id": "hnl-lex-b6bf3998e36899bb",
        "hanzi": "误会",
        "pinyin": "wù huì",
        "meaning": "hiểu lầm",
        "example": "你们为什么产生误会？",
        "examplePinyin": "nǐ men wèi shén me chǎn shēng wù huì？",
        "exampleMeaning": "Vì sao hai bạn nảy sinh hiểu lầm?"
      },
      {
        "id": "hnl-lex-c28361d8bdfd6deb",
        "hanzi": "诚实",
        "pinyin": "chéng shí",
        "meaning": "thành thật",
        "example": "即使有误会，也应该诚实地沟通。",
        "examplePinyin": "jí shǐ yǒu wù huì， yě yīng gāi chéng shí dì gōu tōng。",
        "exampleMeaning": "Cho dù có hiểu lầm cũng nên trao đổi thành thật."
      },
      {
        "id": "hnl-lex-29d283071342465f",
        "hanzi": "信任",
        "pinyin": "xìn rèn",
        "meaning": "tin tưởng",
        "example": "不管发生什么，我们都要互相信任。",
        "examplePinyin": "bù guǎn fā shēng shén me， wǒ men dōu yào hù xiāng xìn rèn。",
        "exampleMeaning": "Dù xảy ra chuyện gì, chúng ta vẫn phải tin tưởng nhau."
      },
      {
        "id": "hnl-lex-0434badcbdde0c9a",
        "hanzi": "性格",
        "pinyin": "xìng gé",
        "meaning": "tính cách",
        "example": "即使有误会，也应该诚实地沟通。",
        "examplePinyin": "jí shǐ yǒu wù huì， yě yīng gāi chéng shí dì gōu tōng。",
        "exampleMeaning": "Cho dù có hiểu lầm cũng nên trao đổi thành thật."
      },
      {
        "id": "hnl-lex-3cc7e0fcf477dd92",
        "hanzi": "解决",
        "pinyin": "jiě jué",
        "meaning": "giải quyết",
        "example": "现在解决了吗？",
        "examplePinyin": "xiàn zài jiě jué le ma？",
        "exampleMeaning": "Bây giờ giải quyết xong chưa?"
      }
    ],
    "grammar": [
      {
        "title": "即使……也……",
        "explanation": "cho dù…… cũng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "即使有误会，也应该诚实地沟通。",
        "translation": "Cho dù có hiểu lầm cũng nên trao đổi thành thật."
      },
      {
        "title": "不管……都……",
        "explanation": "dù…… thế nào cũng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "不管发生什么，我们都要互相信任。",
        "translation": "Dù xảy ra chuyện gì, chúng ta vẫn phải tin tưởng nhau."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你们为什么产生误会？",
        "pinyin": "nǐ men wèi shén me chǎn shēng wù huì？",
        "meaning": "Vì sao hai bạn nảy sinh hiểu lầm?"
      },
      {
        "speaker": "Minh",
        "hanzi": "因为没有及时说明情况。",
        "pinyin": "yīn wèi méi yǒu jí shí shuō míng qíng kuàng。",
        "meaning": "Vì không kịp thời giải thích tình hình."
      },
      {
        "speaker": "An",
        "hanzi": "现在解决了吗？",
        "pinyin": "xiàn zài jiě jué le ma？",
        "meaning": "Bây giờ giải quyết xong chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "解决了，我们学会了好好沟通。",
        "pinyin": "jiě jué le， wǒ men xué huì le hǎo hǎo gōu tōng。",
        "meaning": "Xong rồi, chúng tôi đã học cách trao đổi tốt hơn."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào thể hiện sự nhượng bộ?",
        "options": [
          "即使有误会，也应该诚实地沟通。",
          "他昨天买了一本书。",
          "这里有三个人。"
        ],
        "answer": "即使有误会，也应该诚实地沟通。",
        "explanation": "即使 đưa ra điều kiện giả định bất lợi nhưng mệnh đề sau vẫn giữ nguyên。",
        "id": "hanngu-q5-b08-q01"
      },
      {
        "type": "choice",
        "prompt": "“恋爱”的意思是什么？（liàn ài）",
        "options": [
          "tình yêu",
          "hiểu lầm",
          "thành thật",
          "tin tưởng"
        ],
        "answer": "tình yêu",
        "explanation": "恋爱（liàn ài） nghĩa là tình yêu。",
        "id": "hanngu-q5-b08-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “hiểu lầm” (wù huì).",
        "answer": "误会",
        "alternatives": [],
        "explanation": "误会 (wù huì) nghĩa là hiểu lầm。",
        "id": "hanngu-q5-b08-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “恋爱故事”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 108–108; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b09",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 9",
    "title": "幸福的感觉",
    "subtitle": "因为……所以……",
    "minutes": 35,
    "order": 88,
    "objectives": [
      "Hiểu và dùng trọng tâm “因为……所以……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “幸福的感觉”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-1aa3298c831faec9",
        "hanzi": "幸福",
        "pinyin": "xìng fú",
        "meaning": "hạnh phúc",
        "example": "你觉得幸福是什么？",
        "examplePinyin": "nǐ jué de xìng fú shì shén me？",
        "exampleMeaning": "Bạn nghĩ hạnh phúc là gì?"
      },
      {
        "id": "hnl-lex-273158d7db75ddf0",
        "hanzi": "权力",
        "pinyin": "quán lì",
        "meaning": "quyền lực",
        "example": "只要心里有希望，就能感到幸福。",
        "examplePinyin": "zhǐ yào xīn lǐ yǒu xī wàng， jiù néng gǎn dào xìng fú。",
        "exampleMeaning": "Chỉ cần trong lòng có hy vọng thì có thể cảm thấy hạnh phúc."
      },
      {
        "id": "hnl-lex-b4c9f66cb0495913",
        "hanzi": "感情",
        "pinyin": "gǎn qíng",
        "meaning": "tình cảm",
        "example": "因为幸福没有统一标准，所以每个人的感觉不同。",
        "examplePinyin": "yīn wèi xìng fú méi yǒu tǒng yī biāo zhǔn， suǒ yǐ měi gè rén de gǎn jué bù tóng。",
        "exampleMeaning": "Vì hạnh phúc không có tiêu chuẩn chung nên cảm nhận của mỗi người khác nhau."
      },
      {
        "id": "hnl-lex-1d158a4aa4c03ea5",
        "hanzi": "标准",
        "pinyin": "biāo zhǔn",
        "meaning": "tiêu chuẩn",
        "example": "幸福有统一的标准吗？",
        "examplePinyin": "xìng fú yǒu tǒng yī de biāo zhǔn ma？",
        "exampleMeaning": "Hạnh phúc có tiêu chuẩn chung không?"
      },
      {
        "id": "hnl-lex-44aef9ed354cc44a",
        "hanzi": "感觉",
        "pinyin": "gǎn jué",
        "meaning": "cảm giác",
        "example": "没有，每个人都有自己的感觉。",
        "examplePinyin": "méi yǒu， měi gè rén dōu yǒu zì jǐ de gǎn jué。",
        "exampleMeaning": "Không, mỗi người có cảm nhận riêng."
      },
      {
        "id": "hnl-lex-4f7a5d1240615d0a",
        "hanzi": "贫穷",
        "pinyin": "pín qióng",
        "meaning": "nghèo khó",
        "example": "只要心里有希望，就能感到幸福。",
        "examplePinyin": "zhǐ yào xīn lǐ yǒu xī wàng， jiù néng gǎn dào xìng fú。",
        "exampleMeaning": "Chỉ cần trong lòng có hy vọng thì có thể cảm thấy hạnh phúc."
      },
      {
        "id": "hnl-lex-68c10ce5dc296aa7",
        "hanzi": "富翁",
        "pinyin": "fù wēng",
        "meaning": "người giàu",
        "example": "因为幸福没有统一标准，所以每个人的感觉不同。",
        "examplePinyin": "yīn wèi xìng fú méi yǒu tǒng yī biāo zhǔn， suǒ yǐ měi gè rén de gǎn jué bù tóng。",
        "exampleMeaning": "Vì hạnh phúc không có tiêu chuẩn chung nên cảm nhận của mỗi người khác nhau."
      },
      {
        "id": "hnl-lex-65f78064a8c08ee0",
        "hanzi": "慈善家",
        "pinyin": "cí shàn jiā",
        "meaning": "nhà từ thiện",
        "example": "只要心里有希望，就能感到幸福。",
        "examplePinyin": "zhǐ yào xīn lǐ yǒu xī wàng， jiù néng gǎn dào xìng fú。",
        "exampleMeaning": "Chỉ cần trong lòng có hy vọng thì có thể cảm thấy hạnh phúc."
      }
    ],
    "grammar": [
      {
        "title": "因为……所以……",
        "explanation": "nêu nguyên nhân và kết quả Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "因为幸福没有统一标准，所以每个人的感觉不同。",
        "translation": "Vì hạnh phúc không có tiêu chuẩn chung nên cảm nhận của mỗi người khác nhau."
      },
      {
        "title": "只要……就……",
        "explanation": "điều kiện đủ dẫn tới kết quả Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "只要心里有希望，就能感到幸福。",
        "translation": "Chỉ cần trong lòng có hy vọng thì có thể cảm thấy hạnh phúc."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你觉得幸福是什么？",
        "pinyin": "nǐ jué de xìng fú shì shén me？",
        "meaning": "Bạn nghĩ hạnh phúc là gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "对我来说，平安和家人的陪伴就是幸福。",
        "pinyin": "duì wǒ lái shuō， píng ān hé jiā rén de péi bàn jiù shì xìng fú。",
        "meaning": "Với tôi, bình an và sự đồng hành của gia đình là hạnh phúc."
      },
      {
        "speaker": "An",
        "hanzi": "幸福有统一的标准吗？",
        "pinyin": "xìng fú yǒu tǒng yī de biāo zhǔn ma？",
        "meaning": "Hạnh phúc có tiêu chuẩn chung không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "没有，每个人都有自己的感觉。",
        "pinyin": "méi yǒu， měi gè rén dōu yǒu zì jǐ de gǎn jué。",
        "meaning": "Không, mỗi người có cảm nhận riêng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu nêu quan điểm cá nhân về hạnh phúc.",
        "options": [
          "对我来说，平安就是幸福。",
          "幸福在昨天。",
          "标准跑得很快。"
        ],
        "answer": "对我来说，平安就是幸福。",
        "explanation": "对……来说 giới thiệu góc nhìn của một người về một khái niệm.",
        "id": "hanngu-q5-b09-q01"
      },
      {
        "type": "choice",
        "prompt": "“幸福”的意思是什么？（xìng fú）",
        "options": [
          "hạnh phúc",
          "quyền lực",
          "tình cảm",
          "tiêu chuẩn"
        ],
        "answer": "hạnh phúc",
        "explanation": "幸福（xìng fú） nghĩa là hạnh phúc。",
        "id": "hanngu-q5-b09-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “quyền lực” (quán lì).",
        "answer": "权力",
        "alternatives": [],
        "explanation": "权力 (quán lì) nghĩa là quyền lực。",
        "id": "hanngu-q5-b09-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “幸福的感觉”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 120–132; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b10",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 10",
    "title": "提高自己",
    "subtitle": "对于……来说",
    "minutes": 35,
    "order": 89,
    "objectives": [
      "Hiểu và dùng trọng tâm “对于……来说” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “提高自己”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-4b7cb4aac22d5ed1",
        "hanzi": "提高",
        "pinyin": "tí gāo",
        "meaning": "nâng cao",
        "example": "我发现自己还有很多能力需要提高。",
        "examplePinyin": "wǒ fā xiàn zì jǐ hái yǒu hěn duō néng lì xū yào tí gāo。",
        "exampleMeaning": "Tôi nhận ra mình còn nhiều năng lực cần nâng cao."
      },
      {
        "id": "hnl-lex-a87a25b512387076",
        "hanzi": "贸易",
        "pinyin": "mào yì",
        "meaning": "thương mại",
        "example": "除了提高能力以外，还要学会承担责任。",
        "examplePinyin": "chú le tí gāo néng lì yǐ wài， hái yào xué huì chéng dān zé rèn。",
        "exampleMeaning": "Ngoài nâng cao năng lực còn phải học cách đảm nhận trách nhiệm."
      },
      {
        "id": "hnl-lex-f7707e7b30c49d24",
        "hanzi": "愤怒",
        "pinyin": "fèn nù",
        "meaning": "tức giận",
        "example": "对于新员工来说，先了解业务很重要。",
        "examplePinyin": "duì yú xīn yuán gōng lái shuō， xiān liǎo jiě yè wù hěn zhòng yào。",
        "exampleMeaning": "Đối với nhân viên mới, trước hết hiểu nghiệp vụ là rất quan trọng."
      },
      {
        "id": "hnl-lex-d46b9126c89dc65b",
        "hanzi": "辞职",
        "pinyin": "cí zhí",
        "meaning": "từ chức",
        "example": "你为什么想辞职？",
        "examplePinyin": "nǐ wèi shén me xiǎng cí zhí？",
        "exampleMeaning": "Vì sao bạn muốn xin nghỉ việc?"
      },
      {
        "id": "hnl-lex-e5eb62903a9578ff",
        "hanzi": "能力",
        "pinyin": "néng lì",
        "meaning": "năng lực",
        "example": "我发现自己还有很多能力需要提高。",
        "examplePinyin": "wǒ fā xiàn zì jǐ hái yǒu hěn duō néng lì xū yào tí gāo。",
        "exampleMeaning": "Tôi nhận ra mình còn nhiều năng lực cần nâng cao."
      },
      {
        "id": "hnl-lex-dd6b5d1b9313c614",
        "hanzi": "刻苦",
        "pinyin": "kè kǔ",
        "meaning": "chăm chỉ, khổ luyện",
        "example": "除了提高能力以外，还要学会承担责任。",
        "examplePinyin": "chú le tí gāo néng lì yǐ wài， hái yào xué huì chéng dān zé rèn。",
        "exampleMeaning": "Ngoài nâng cao năng lực còn phải học cách đảm nhận trách nhiệm."
      },
      {
        "id": "hnl-lex-c8137a5c209182ef",
        "hanzi": "责任",
        "pinyin": "zé rèn",
        "meaning": "trách nhiệm",
        "example": "对于新员工来说，先了解业务很重要。",
        "examplePinyin": "duì yú xīn yuán gōng lái shuō， xiān liǎo jiě yè wù hěn zhòng yào。",
        "exampleMeaning": "Đối với nhân viên mới, trước hết hiểu nghiệp vụ là rất quan trọng."
      },
      {
        "id": "hnl-lex-84f5abb8143a59a3",
        "hanzi": "收获",
        "pinyin": "shōu huò",
        "meaning": "thành quả",
        "example": "除了提高能力以外，还要学会承担责任。",
        "examplePinyin": "chú le tí gāo néng lì yǐ wài， hái yào xué huì chéng dān zé rèn。",
        "exampleMeaning": "Ngoài nâng cao năng lực còn phải học cách đảm nhận trách nhiệm."
      }
    ],
    "grammar": [
      {
        "title": "对于……来说",
        "explanation": "xét theo góc độ của…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "对于新员工来说，先了解业务很重要。",
        "translation": "Đối với nhân viên mới, trước hết hiểu nghiệp vụ là rất quan trọng."
      },
      {
        "title": "除了……以外，还……",
        "explanation": "ngoài…… ra còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "除了提高能力以外，还要学会承担责任。",
        "translation": "Ngoài nâng cao năng lực còn phải học cách đảm nhận trách nhiệm."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你为什么想辞职？",
        "pinyin": "nǐ wèi shén me xiǎng cí zhí？",
        "meaning": "Vì sao bạn muốn xin nghỉ việc?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我发现自己还有很多能力需要提高。",
        "pinyin": "wǒ fā xiàn zì jǐ hái yǒu hěn duō néng lì xū yào tí gāo。",
        "meaning": "Tôi nhận ra mình còn nhiều năng lực cần nâng cao."
      },
      {
        "speaker": "An",
        "hanzi": "那你准备怎么做？",
        "pinyin": "nà nǐ zhǔn bèi zěn me zuò？",
        "meaning": "Vậy bạn định làm thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "先把工作学好，再决定下一步。",
        "pinyin": "xiān bǎ gōng zuò xué hǎo， zài jué dìng xià yī bù。",
        "meaning": "Trước hết học tốt công việc rồi quyết định bước tiếp theo."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 除了……以外，还…… đúng.",
        "options": [
          "除了提高能力以外，还要学会承担责任。",
          "除了能力还以外提高。",
          "还要除了工作能力。"
        ],
        "answer": "除了提高能力以外，还要学会承担责任。",
        "explanation": "Mẫu câu nối thêm một điều bên cạnh điều đã nêu.",
        "id": "hanngu-q5-b10-q01"
      },
      {
        "type": "choice",
        "prompt": "“提高”的意思是什么？（tí gāo）",
        "options": [
          "nâng cao",
          "thương mại",
          "tức giận",
          "từ chức"
        ],
        "answer": "nâng cao",
        "explanation": "提高（tí gāo） nghĩa là nâng cao。",
        "id": "hanngu-q5-b10-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “thương mại” (mào yì).",
        "answer": "贸易",
        "alternatives": [],
        "explanation": "贸易 (mào yì) nghĩa là thương mại。",
        "id": "hanngu-q5-b10-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “提高自己”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 133–145; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b11",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 11",
    "title": "我看见了飞碟",
    "subtitle": "据说",
    "minutes": 35,
    "order": 78,
    "objectives": [
      "Hiểu và dùng trọng tâm “据说” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “我看见了飞碟”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-44432b723814a33a",
        "hanzi": "飞碟",
        "pinyin": "fēi dié",
        "meaning": "đĩa bay",
        "example": "你真的看见飞碟了吗？",
        "examplePinyin": "nǐ zhēn de kàn jiàn fēi dié le ma？",
        "exampleMeaning": "Bạn thật sự đã nhìn thấy đĩa bay à?"
      },
      {
        "id": "hnl-lex-22a78295e8e78bba",
        "hanzi": "发现",
        "pinyin": "fā xiàn",
        "meaning": "phát hiện",
        "example": "你到底看见了什么？",
        "examplePinyin": "nǐ dào dǐ kàn jiàn le shén me？",
        "exampleMeaning": "Rốt cuộc bạn đã nhìn thấy gì?"
      },
      {
        "id": "hnl-lex-ea663a30701f19ad",
        "hanzi": "相信",
        "pinyin": "xiāng xìn",
        "meaning": "tin",
        "example": "据说那里出现过奇怪的光。",
        "examplePinyin": "jù shuō nà lǐ chū xiàn guò qí guài de guāng。",
        "exampleMeaning": "Nghe nói nơi đó từng xuất hiện ánh sáng kỳ lạ."
      },
      {
        "id": "hnl-lex-8e86aa93090451d5",
        "hanzi": "现象",
        "pinyin": "xiàn xiàng",
        "meaning": "hiện tượng",
        "example": "没有，所以我只是在描述现象。",
        "examplePinyin": "méi yǒu， suǒ yǐ wǒ zhǐ shì zài miáo shù xiàn xiàng。",
        "exampleMeaning": "Không có, nên tôi chỉ mô tả hiện tượng."
      },
      {
        "id": "hnl-lex-4633434cf54cc436",
        "hanzi": "解释",
        "pinyin": "jiě shì",
        "meaning": "giải thích",
        "example": "据说那里出现过奇怪的光。",
        "examplePinyin": "jù shuō nà lǐ chū xiàn guò qí guài de guāng。",
        "exampleMeaning": "Nghe nói nơi đó từng xuất hiện ánh sáng kỳ lạ."
      },
      {
        "id": "hnl-lex-33e343cf14b49dd8",
        "hanzi": "证据",
        "pinyin": "zhèng jù",
        "meaning": "bằng chứng",
        "example": "你有证据吗？",
        "examplePinyin": "nǐ yǒu zhèng jù ma？",
        "exampleMeaning": "Bạn có bằng chứng không?"
      }
    ],
    "grammar": [
      {
        "title": "据说",
        "explanation": "nghe nói Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "据说那里出现过奇怪的光。",
        "translation": "Nghe nói nơi đó từng xuất hiện ánh sáng kỳ lạ."
      },
      {
        "title": "到底",
        "explanation": "rốt cuộc Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "你到底看见了什么？",
        "translation": "Rốt cuộc bạn đã nhìn thấy gì?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你真的看见飞碟了吗？",
        "pinyin": "nǐ zhēn de kàn jiàn fēi dié le ma？",
        "meaning": "Bạn thật sự đã nhìn thấy đĩa bay à?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我看见了奇怪的光，但不确定是什么。",
        "pinyin": "wǒ kàn jiàn le qí guài de guāng， dàn bù què dìng shì shén me。",
        "meaning": "Tôi thấy ánh sáng kỳ lạ nhưng không chắc là gì."
      },
      {
        "speaker": "An",
        "hanzi": "你有证据吗？",
        "pinyin": "nǐ yǒu zhèng jù ma？",
        "meaning": "Bạn có bằng chứng không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "没有，所以我只是在描述现象。",
        "pinyin": "méi yǒu， suǒ yǐ wǒ zhǐ shì zài miáo shù xiàn xiàng。",
        "meaning": "Không có, nên tôi chỉ mô tả hiện tượng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "据说 thường dùng để làm gì?",
        "options": [
          "Dẫn thông tin được nghe nói",
          "Chỉ vị trí người nói",
          "Nêu kết quả chắc chắn"
        ],
        "answer": "Dẫn thông tin được nghe nói",
        "explanation": "据说 báo hiệu thông tin truyền lại, người nói không nhất thiết tự mình xác nhận。",
        "id": "hanngu-q5-b11-q01"
      },
      {
        "type": "choice",
        "prompt": "“飞碟”的意思是什么？（fēi dié）",
        "options": [
          "đĩa bay",
          "phát hiện",
          "tin",
          "hiện tượng"
        ],
        "answer": "đĩa bay",
        "explanation": "飞碟（fēi dié） nghĩa là đĩa bay。",
        "id": "hanngu-q5-b11-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “phát hiện” (fā xiàn).",
        "answer": "发现",
        "alternatives": [],
        "explanation": "发现 (fā xiàn) nghĩa là phát hiện。",
        "id": "hanngu-q5-b11-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “我看见了飞碟”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 146–146; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b12",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 12",
    "title": "好人难当",
    "subtitle": "难 + động từ",
    "minutes": 35,
    "order": 79,
    "objectives": [
      "Hiểu và dùng trọng tâm “难 + động từ” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “好人难当”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-b1573dcf1e7e0ad1",
        "hanzi": "好人",
        "pinyin": "hǎo rén",
        "meaning": "người tốt",
        "example": "好人难当，帮助别人也要讲方法。",
        "examplePinyin": "hǎo rén nán dāng， bāng zhù bié rén yě yào jiǎng fāng fǎ。",
        "exampleMeaning": "Làm người tốt khó, giúp người khác cũng cần phương pháp."
      },
      {
        "id": "hnl-lex-922d7f67f222c371",
        "hanzi": "帮助",
        "pinyin": "bāng zhù",
        "meaning": "giúp đỡ",
        "example": "为什么帮助别人也会被误解？",
        "examplePinyin": "wèi shén me bāng zhù bié rén yě huì bèi wù jiě？",
        "exampleMeaning": "Vì sao giúp người khác cũng bị hiểu lầm?"
      },
      {
        "id": "hnl-lex-0c80710d57623c0c",
        "hanzi": "误解",
        "pinyin": "wù jiě",
        "meaning": "hiểu lầm",
        "example": "为什么帮助别人也会被误解？",
        "examplePinyin": "wèi shén me bāng zhù bié rén yě huì bèi wù jiě？",
        "exampleMeaning": "Vì sao giúp người khác cũng bị hiểu lầm?"
      },
      {
        "id": "hnl-lex-4c35f303bc71332e",
        "hanzi": "选择",
        "pinyin": "xuǎn zé",
        "meaning": "lựa chọn",
        "example": "既然决定帮助，就要有耐心。",
        "examplePinyin": "jì rán jué dìng bāng zhù， jiù yào yǒu nài xīn。",
        "exampleMeaning": "Đã quyết định giúp thì phải kiên nhẫn."
      },
      {
        "id": "hnl-lex-9bfa4ba5d28fe988",
        "hanzi": "善意",
        "pinyin": "shàn yì",
        "meaning": "thiện ý",
        "example": "好人难当，帮助别人也要讲方法。",
        "examplePinyin": "hǎo rén nán dāng， bāng zhù bié rén yě yào jiǎng fāng fǎ。",
        "exampleMeaning": "Làm người tốt khó, giúp người khác cũng cần phương pháp."
      },
      {
        "id": "hnl-lex-b43033dcad0cd13a",
        "hanzi": "后悔",
        "pinyin": "hòu huǐ",
        "meaning": "hối hận",
        "example": "既然决定帮助，就要有耐心。",
        "examplePinyin": "jì rán jué dìng bāng zhù， jiù yào yǒu nài xīn。",
        "exampleMeaning": "Đã quyết định giúp thì phải kiên nhẫn."
      }
    ],
    "grammar": [
      {
        "title": "难 + động từ",
        "explanation": "khó làm việc gì Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "好人难当，帮助别人也要讲方法。",
        "translation": "Làm người tốt khó, giúp người khác cũng cần phương pháp."
      },
      {
        "title": "既然……就……",
        "explanation": "đã…… thì…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "既然决定帮助，就要有耐心。",
        "translation": "Đã quyết định giúp thì phải kiên nhẫn."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "为什么帮助别人也会被误解？",
        "pinyin": "wèi shén me bāng zhù bié rén yě huì bèi wù jiě？",
        "meaning": "Vì sao giúp người khác cũng bị hiểu lầm?"
      },
      {
        "speaker": "Minh",
        "hanzi": "因为每个人的想法不一样。",
        "pinyin": "yīn wèi měi gè rén de xiǎng fǎ bù yí yàng。",
        "meaning": "Vì suy nghĩ của mỗi người khác nhau."
      },
      {
        "speaker": "An",
        "hanzi": "那还要不要帮助？",
        "pinyin": "nà hái yào bù yào bāng zhù？",
        "meaning": "Vậy có nên tiếp tục giúp không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "要先沟通，再决定怎么做。",
        "pinyin": "yào xiān gōu tōng， zài jué dìng zěn me zuò。",
        "meaning": "Nên trao đổi trước rồi quyết định cách làm."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "既然……就…… diễn đạt quan hệ nào?",
        "options": [
          "Đã có điều kiện đó thì đưa ra hành động phù hợp",
          "Miêu tả màu sắc",
          "Nêu thời tiết"
        ],
        "answer": "Đã có điều kiện đó thì đưa ra hành động phù hợp",
        "explanation": "既然 thừa nhận một sự việc đã biết; 就 nêu kết luận hoặc hành động tiếp theo。",
        "id": "hanngu-q5-b12-q01"
      },
      {
        "type": "choice",
        "prompt": "“好人”的意思是什么？（hǎo rén）",
        "options": [
          "người tốt",
          "giúp đỡ",
          "hiểu lầm",
          "lựa chọn"
        ],
        "answer": "người tốt",
        "explanation": "好人（hǎo rén） nghĩa là người tốt。",
        "id": "hanngu-q5-b12-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “giúp đỡ” (bāng zhù).",
        "answer": "帮助",
        "alternatives": [],
        "explanation": "帮助 (bāng zhù) nghĩa là giúp đỡ。",
        "id": "hanngu-q5-b12-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “好人难当”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 161–161; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q5-b13",
    "level": 5,
    "unit": "Quyển 5 · Bài nguồn 13",
    "title": "百姓话题",
    "subtitle": "随着……",
    "minutes": 35,
    "order": 80,
    "objectives": [
      "Hiểu và dùng trọng tâm “随着……” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “百姓话题”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-7c869538234ea4c0",
        "hanzi": "百姓",
        "pinyin": "bǎi xìng",
        "meaning": "người dân",
        "example": "随着社会变化，人们的生活也在变化。",
        "examplePinyin": "suí zhe shè huì biàn huà， rén men de shēng huó yě zài biàn huà。",
        "exampleMeaning": "Cùng với xã hội thay đổi, cuộc sống con người cũng thay đổi."
      },
      {
        "id": "hnl-lex-c5ea7d6325fba3d3",
        "hanzi": "话题",
        "pinyin": "huà tí",
        "meaning": "chủ đề",
        "example": "最近大家关心什么话题？",
        "examplePinyin": "zuì jìn dà jiā guān xīn shén me huà tí？",
        "exampleMeaning": "Gần đây mọi người quan tâm chủ đề gì?"
      },
      {
        "id": "hnl-lex-a84a78c8a6d5eaf4",
        "hanzi": "生活",
        "pinyin": "shēng huó",
        "meaning": "cuộc sống",
        "example": "大家关心工作、健康和生活质量。",
        "examplePinyin": "dà jiā guān xīn gōng zuò、 jiàn kāng hé shēng huó zhì liàng。",
        "exampleMeaning": "Mọi người quan tâm công việc, sức khỏe và chất lượng cuộc sống."
      },
      {
        "id": "hnl-lex-100a6a7e8806efef",
        "hanzi": "变化",
        "pinyin": "biàn huà",
        "meaning": "thay đổi",
        "example": "社会变化快吗？",
        "examplePinyin": "shè huì biàn huà kuài ma？",
        "exampleMeaning": "Xã hội thay đổi nhanh không?"
      },
      {
        "id": "hnl-lex-b3a20b5b563fd057",
        "hanzi": "关心",
        "pinyin": "guān xīn",
        "meaning": "quan tâm",
        "example": "最近大家关心什么话题？",
        "examplePinyin": "zuì jìn dà jiā guān xīn shén me huà tí？",
        "exampleMeaning": "Gần đây mọi người quan tâm chủ đề gì?"
      },
      {
        "id": "hnl-lex-766ef9b9462fe53d",
        "hanzi": "社会",
        "pinyin": "shè huì",
        "meaning": "xã hội",
        "example": "社会变化快吗？",
        "examplePinyin": "shè huì biàn huà kuài ma？",
        "exampleMeaning": "Xã hội thay đổi nhanh không?"
      }
    ],
    "grammar": [
      {
        "title": "随着……",
        "explanation": "cùng với…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "随着社会变化，人们的生活也在变化。",
        "translation": "Cùng với xã hội thay đổi, cuộc sống con người cũng thay đổi."
      },
      {
        "title": "越来越……",
        "explanation": "ngày càng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "大家越来越关心生活质量。",
        "translation": "Mọi người ngày càng quan tâm chất lượng cuộc sống."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "最近大家关心什么话题？",
        "pinyin": "zuì jìn dà jiā guān xīn shén me huà tí？",
        "meaning": "Gần đây mọi người quan tâm chủ đề gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "大家关心工作、健康和生活质量。",
        "pinyin": "dà jiā guān xīn gōng zuò、 jiàn kāng hé shēng huó zhì liàng。",
        "meaning": "Mọi người quan tâm công việc, sức khỏe và chất lượng cuộc sống."
      },
      {
        "speaker": "An",
        "hanzi": "社会变化快吗？",
        "pinyin": "shè huì biàn huà kuài ma？",
        "meaning": "Xã hội thay đổi nhanh không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "变化很快，我们也要不断学习。",
        "pinyin": "biàn huà hěn kuài， wǒ men yě yào bù duàn xué xí。",
        "meaning": "Thay đổi rất nhanh, chúng ta cũng phải không ngừng học."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "越来越…… diễn đạt điều gì?",
        "options": [
          "Mức độ tăng dần theo thời gian",
          "Một sự việc đã kết thúc",
          "Một địa điểm cụ thể"
        ],
        "answer": "Mức độ tăng dần theo thời gian",
        "explanation": "越来越 nêu sự biến đổi tăng dần của mức độ hoặc số lượng。",
        "id": "hanngu-q5-b13-q01"
      },
      {
        "type": "choice",
        "prompt": "“百姓”的意思是什么？（bǎi xìng）",
        "options": [
          "người dân",
          "chủ đề",
          "cuộc sống",
          "thay đổi"
        ],
        "answer": "người dân",
        "explanation": "百姓（bǎi xìng） nghĩa là người dân。",
        "id": "hanngu-q5-b13-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “chủ đề” (huà tí).",
        "answer": "话题",
        "alternatives": [],
        "explanation": "话题 (huà tí) nghĩa là chủ đề。",
        "id": "hanngu-q5-b13-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “百姓话题”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/5.pdf, trang PDF 174–174; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b14",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 14",
    "title": "谁当家",
    "subtitle": "由……决定",
    "minutes": 35,
    "order": 90,
    "objectives": [
      "Hiểu và dùng trọng tâm “由……决定” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “谁当家”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-2b93194821b6077a",
        "hanzi": "当家",
        "pinyin": "dāng jiā",
        "meaning": "quản lý gia đình",
        "example": "你们家谁当家？",
        "examplePinyin": "nǐ men jiā shuí dāng jiā？",
        "exampleMeaning": "Nhà bạn ai là người quyết định?"
      },
      {
        "id": "hnl-lex-847361acd8057927",
        "hanzi": "规定",
        "pinyin": "guī dìng",
        "meaning": "quy định",
        "example": "家里有什么规定？",
        "examplePinyin": "jiā lǐ yǒu shén me guī dìng？",
        "exampleMeaning": "Nhà bạn có quy định gì?"
      },
      {
        "id": "hnl-lex-38a11454c2e420e1",
        "hanzi": "小事",
        "pinyin": "xiǎo shì",
        "meaning": "việc nhỏ",
        "example": "大事一起商量，小事轮流负责。",
        "examplePinyin": "dà shì yì qǐ shāng liáng， xiǎo shì lún liú fù zé。",
        "exampleMeaning": "Việc lớn cùng bàn, việc nhỏ luân phiên phụ trách."
      },
      {
        "id": "hnl-lex-ddc0f37e1000fc75",
        "hanzi": "大事",
        "pinyin": "dà shì",
        "meaning": "việc lớn",
        "example": "大事一起商量，小事轮流负责。",
        "examplePinyin": "dà shì yì qǐ shāng liáng， xiǎo shì lún liú fù zé。",
        "exampleMeaning": "Việc lớn cùng bàn, việc nhỏ luân phiên phụ trách."
      },
      {
        "id": "hnl-lex-63818b7a57668325",
        "hanzi": "做主",
        "pinyin": "zuò zhǔ",
        "meaning": "quyết định",
        "example": "小事由大家商量决定。",
        "examplePinyin": "xiǎo shì yóu dà jiā shāng liáng jué dìng。",
        "exampleMeaning": "Việc nhỏ do mọi người bàn bạc quyết định."
      },
      {
        "id": "hnl-lex-3e69fe6714f95696",
        "hanzi": "讲究",
        "pinyin": "jiǎng jiū",
        "meaning": "chú trọng",
        "example": "他不但会做饭，而且很讲究卫生。",
        "examplePinyin": "tā bù dàn huì zuò fàn， ér qiě hěn jiǎng jiū wèi shēng。",
        "exampleMeaning": "Anh ấy không những biết nấu ăn mà còn rất chú trọng vệ sinh."
      },
      {
        "id": "hnl-lex-bc46096bdc464dc8",
        "hanzi": "卫生",
        "pinyin": "wèi shēng",
        "meaning": "vệ sinh",
        "example": "人人有责，保持卫生。",
        "examplePinyin": "rén rén yǒu zé， bǎo chí wèi shēng。",
        "exampleMeaning": "Mọi người đều có trách nhiệm giữ vệ sinh."
      },
      {
        "id": "hnl-lex-c8137a5c209182ef",
        "hanzi": "责任",
        "pinyin": "zé rèn",
        "meaning": "trách nhiệm",
        "example": "他不但会做饭，而且很讲究卫生。",
        "examplePinyin": "tā bù dàn huì zuò fàn， ér qiě hěn jiǎng jiū wèi shēng。",
        "exampleMeaning": "Anh ấy không những biết nấu ăn mà còn rất chú trọng vệ sinh."
      }
    ],
    "grammar": [
      {
        "title": "由……决定",
        "explanation": "do…… quyết định Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "小事由大家商量决定。",
        "translation": "Việc nhỏ do mọi người bàn bạc quyết định."
      },
      {
        "title": "不但……而且……",
        "explanation": "không những…… mà còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "他不但会做饭，而且很讲究卫生。",
        "translation": "Anh ấy không những biết nấu ăn mà còn rất chú trọng vệ sinh."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你们家谁当家？",
        "pinyin": "nǐ men jiā shuí dāng jiā？",
        "meaning": "Nhà bạn ai là người quyết định?"
      },
      {
        "speaker": "Minh",
        "hanzi": "大事一起商量，小事轮流负责。",
        "pinyin": "dà shì yì qǐ shāng liáng， xiǎo shì lún liú fù zé。",
        "meaning": "Việc lớn cùng bàn, việc nhỏ luân phiên phụ trách."
      },
      {
        "speaker": "An",
        "hanzi": "家里有什么规定？",
        "pinyin": "jiā lǐ yǒu shén me guī dìng？",
        "meaning": "Nhà bạn có quy định gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "人人有责，保持卫生。",
        "pinyin": "rén rén yǒu zé， bǎo chí wèi shēng。",
        "meaning": "Mọi người đều có trách nhiệm giữ vệ sinh."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 由……决定 đúng.",
        "options": [
          "小事由大家商量决定。",
          "由小事大家。",
          "大家决定由卫生。"
        ],
        "answer": "小事由大家商量决定。",
        "explanation": "由 giới thiệu người hoặc nhóm chịu trách nhiệm quyết định.",
        "id": "hanngu-q6-b14-q01"
      },
      {
        "type": "choice",
        "prompt": "“当家”的意思是什么？（dāng jiā）",
        "options": [
          "quản lý gia đình",
          "quy định",
          "việc nhỏ",
          "việc lớn"
        ],
        "answer": "quản lý gia đình",
        "explanation": "当家（dāng jiā） nghĩa là quản lý gia đình。",
        "id": "hanngu-q6-b14-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “quy định” (guī dìng).",
        "answer": "规定",
        "alternatives": [],
        "explanation": "规定 (guī dìng) nghĩa là quy định。",
        "id": "hanngu-q6-b14-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “谁当家”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 11–23; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b15",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 15",
    "title": "受伤以后",
    "subtitle": "以后",
    "minutes": 35,
    "order": 81,
    "objectives": [
      "Hiểu và dùng trọng tâm “以后” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “受伤以后”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-1cf284cf1cd440da",
        "hanzi": "受伤",
        "pinyin": "shòu shāng",
        "meaning": "bị thương",
        "example": "受伤以后，他每天都做检查。",
        "examplePinyin": "shòu shāng yǐ hòu， tā měi tiān dōu zuò jiǎn chá。",
        "exampleMeaning": "Sau khi bị thương, mỗi ngày anh ấy đều kiểm tra."
      },
      {
        "id": "hnl-lex-d32bfdab5974bd6d",
        "hanzi": "恢复",
        "pinyin": "huī fù",
        "meaning": "hồi phục",
        "example": "听到这个消息，她忍不住哭了。",
        "examplePinyin": "tīng dào zhè ge xiāo xī， tā rěn bú zhù kū le。",
        "exampleMeaning": "Nghe tin này, cô ấy không kìm được mà khóc."
      },
      {
        "id": "hnl-lex-4cc723f783316a54",
        "hanzi": "照顾",
        "pinyin": "zhào gù",
        "meaning": "chăm sóc",
        "example": "谁在照顾你？",
        "examplePinyin": "shuí zài zhào gù nǐ？",
        "exampleMeaning": "Ai đang chăm sóc bạn?"
      },
      {
        "id": "hnl-lex-5739dd705f55324c",
        "hanzi": "检查",
        "pinyin": "jiǎn chá",
        "meaning": "kiểm tra",
        "example": "听到这个消息，她忍不住哭了。",
        "examplePinyin": "tīng dào zhè ge xiāo xī， tā rěn bú zhù kū le。",
        "exampleMeaning": "Nghe tin này, cô ấy không kìm được mà khóc."
      },
      {
        "id": "hnl-lex-7eaf5bef5c5acb6d",
        "hanzi": "忍不住",
        "pinyin": "rěn bú zhù",
        "meaning": "không kìm được",
        "example": "受伤以后，他每天都做检查。",
        "examplePinyin": "shòu shāng yǐ hòu， tā měi tiān dōu zuò jiǎn chá。",
        "exampleMeaning": "Sau khi bị thương, mỗi ngày anh ấy đều kiểm tra."
      },
      {
        "id": "hnl-lex-3ec87d8325f28e3c",
        "hanzi": "鼓励",
        "pinyin": "gǔ lì",
        "meaning": "động viên",
        "example": "家人和朋友都在鼓励我。",
        "examplePinyin": "jiā rén hé péng yǒu dōu zài gǔ lì wǒ。",
        "exampleMeaning": "Gia đình và bạn bè đều động viên tôi."
      }
    ],
    "grammar": [
      {
        "title": "以后",
        "explanation": "sau khi Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "受伤以后，他每天都做检查。",
        "translation": "Sau khi bị thương, mỗi ngày anh ấy đều kiểm tra."
      },
      {
        "title": "忍不住 + động từ",
        "explanation": "không kìm được việc gì Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "听到这个消息，她忍不住哭了。",
        "translation": "Nghe tin này, cô ấy không kìm được mà khóc."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你现在感觉怎么样？",
        "pinyin": "nǐ xiàn zài gǎn jué zěn me yàng？",
        "meaning": "Bây giờ bạn cảm thấy thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "好多了，还要继续休息。",
        "pinyin": "hǎo duō le， hái yào jì xù xiū xī。",
        "meaning": "Đỡ hơn nhiều, vẫn cần tiếp tục nghỉ."
      },
      {
        "speaker": "An",
        "hanzi": "谁在照顾你？",
        "pinyin": "shuí zài zhào gù nǐ？",
        "meaning": "Ai đang chăm sóc bạn?"
      },
      {
        "speaker": "Minh",
        "hanzi": "家人和朋友都在鼓励我。",
        "pinyin": "jiā rén hé péng yǒu dōu zài gǔ lì wǒ。",
        "meaning": "Gia đình và bạn bè đều động viên tôi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "受伤以后表示什么关系？",
        "options": [
          "Sau khi bị thương",
          "Trước khi bị thương",
          "Không liên quan thời gian"
        ],
        "answer": "Sau khi bị thương",
        "explanation": "以后 đặt sau một sự việc để chỉ thời gian kể từ khi việc đó xảy ra。",
        "id": "hanngu-q6-b15-q01"
      },
      {
        "type": "choice",
        "prompt": "“受伤”的意思是什么？（shòu shāng）",
        "options": [
          "bị thương",
          "hồi phục",
          "chăm sóc",
          "kiểm tra"
        ],
        "answer": "bị thương",
        "explanation": "受伤（shòu shāng） nghĩa là bị thương。",
        "id": "hanngu-q6-b15-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “hồi phục” (huī fù).",
        "answer": "恢复",
        "alternatives": [],
        "explanation": "恢复 (huī fù) nghĩa là hồi phục。",
        "id": "hanngu-q6-b15-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “受伤以后”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 24–24; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b16",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 16",
    "title": "话说“慢点儿”",
    "subtitle": "别……了",
    "minutes": 35,
    "order": 82,
    "objectives": [
      "Hiểu và dùng trọng tâm “别……了” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “话说“慢点儿””. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-5eea26533c007219",
        "hanzi": "慢点儿",
        "pinyin": "màn diǎn ér",
        "meaning": "chậm một chút",
        "example": "好的，我慢点儿。",
        "examplePinyin": "hǎo de， wǒ màn diǎn ér。",
        "exampleMeaning": "Được, tôi sẽ chậm lại một chút."
      },
      {
        "id": "hnl-lex-427501fff8b9d738",
        "hanzi": "着急",
        "pinyin": "zháo jí",
        "meaning": "sốt ruột",
        "example": "越着急，越容易出错。",
        "examplePinyin": "yuè zháo jí， yuè róng yì chū cuò。",
        "exampleMeaning": "Càng sốt ruột càng dễ mắc lỗi."
      },
      {
        "id": "hnl-lex-cc8e375a078edf06",
        "hanzi": "安全",
        "pinyin": "ān quán",
        "meaning": "an toàn",
        "example": "安全比速度更重要。",
        "examplePinyin": "ān quán bǐ sù dù gèng zhòng yào。",
        "exampleMeaning": "An toàn quan trọng hơn tốc độ."
      },
      {
        "id": "hnl-lex-28dd11f74f67de0f",
        "hanzi": "速度",
        "pinyin": "sù dù",
        "meaning": "tốc độ",
        "example": "安全比速度更重要。",
        "examplePinyin": "ān quán bǐ sù dù gèng zhòng yào。",
        "exampleMeaning": "An toàn quan trọng hơn tốc độ."
      },
      {
        "id": "hnl-lex-2cb3a97282aad7e4",
        "hanzi": "提醒",
        "pinyin": "tí xǐng",
        "meaning": "nhắc nhở",
        "example": "别着急了，慢慢说。",
        "examplePinyin": "bié zháo jí le， màn màn shuō。",
        "exampleMeaning": "Đừng sốt ruột nữa, cứ từ từ nói."
      },
      {
        "id": "hnl-lex-39dd1d26c08a4187",
        "hanzi": "耐心",
        "pinyin": "nài xīn",
        "meaning": "kiên nhẫn",
        "example": "越着急，越容易出错。",
        "examplePinyin": "yuè zháo jí， yuè róng yì chū cuò。",
        "exampleMeaning": "Càng sốt ruột càng dễ mắc lỗi."
      }
    ],
    "grammar": [
      {
        "title": "别……了",
        "explanation": "đừng tiếp tục…… nữa Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "别着急了，慢慢说。",
        "translation": "Đừng sốt ruột nữa, cứ từ từ nói."
      },
      {
        "title": "越……越……",
        "explanation": "càng…… càng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "越着急，越容易出错。",
        "translation": "Càng sốt ruột càng dễ mắc lỗi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你走得太快了。",
        "pinyin": "nǐ zǒu dé tài kuài le。",
        "meaning": "Bạn đi nhanh quá."
      },
      {
        "speaker": "Minh",
        "hanzi": "好的，我慢点儿。",
        "pinyin": "hǎo de， wǒ màn diǎn ér。",
        "meaning": "Được, tôi sẽ chậm lại một chút."
      },
      {
        "speaker": "An",
        "hanzi": "为什么要慢一点？",
        "pinyin": "wèi shén me yào màn yì diǎn？",
        "meaning": "Vì sao phải chậm hơn?"
      },
      {
        "speaker": "Minh",
        "hanzi": "安全比速度更重要。",
        "pinyin": "ān quán bǐ sù dù gèng zhòng yào。",
        "meaning": "An toàn quan trọng hơn tốc độ."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu khuyên ai đó bình tĩnh hơn。",
        "options": [
          "别着急了，慢慢说。",
          "你越快越好。",
          "我昨天买了书。"
        ],
        "answer": "别着急了，慢慢说。",
        "explanation": "别……了 dùng để khuyên dừng một trạng thái hoặc hành động đang diễn ra。",
        "id": "hanngu-q6-b16-q01"
      },
      {
        "type": "choice",
        "prompt": "“慢点儿”的意思是什么？（màn diǎn ér）",
        "options": [
          "chậm một chút",
          "sốt ruột",
          "an toàn",
          "tốc độ"
        ],
        "answer": "chậm một chút",
        "explanation": "慢点儿（màn diǎn ér） nghĩa là chậm một chút。",
        "id": "hanngu-q6-b16-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “sốt ruột” (zháo jí).",
        "answer": "着急",
        "alternatives": [],
        "explanation": "着急 (zháo jí) nghĩa là sốt ruột。",
        "id": "hanngu-q6-b16-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “话说“慢点儿””. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 37–37; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b17",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 17",
    "title": "再试一次",
    "subtitle": "可是……却……",
    "minutes": 35,
    "order": 91,
    "objectives": [
      "Hiểu và dùng trọng tâm “可是……却……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “再试一次”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-eb765c84a16e2478",
        "hanzi": "考研究生",
        "pinyin": "kǎo yán jiū shēng",
        "meaning": "thi cao học",
        "example": "我很努力，可是却没有考上。",
        "examplePinyin": "wǒ hěn nǔ lì， kě shì què méi yǒu kǎo shàng。",
        "exampleMeaning": "Tôi rất nỗ lực nhưng lại không thi đỗ."
      },
      {
        "id": "hnl-lex-74013730804d4086",
        "hanzi": "打击",
        "pinyin": "dǎ jī",
        "meaning": "cú sốc",
        "example": "经过练习，我对自己更有信心了。",
        "examplePinyin": "jīng guò liàn xí， wǒ duì zì jǐ gèng yǒu xìn xīn le。",
        "exampleMeaning": "Sau khi luyện tập, tôi tự tin hơn."
      },
      {
        "id": "hnl-lex-cc4ff89ddb093fa5",
        "hanzi": "招聘",
        "pinyin": "zhāo pìn",
        "meaning": "tuyển dụng",
        "example": "我很努力，可是却没有考上。",
        "examplePinyin": "wǒ hěn nǔ lì， kě shì què méi yǒu kǎo shàng。",
        "exampleMeaning": "Tôi rất nỗ lực nhưng lại không thi đỗ."
      },
      {
        "id": "hnl-lex-d31e297a0aced35b",
        "hanzi": "报名",
        "pinyin": "bào míng",
        "meaning": "đăng ký",
        "example": "经过练习，我对自己更有信心了。",
        "examplePinyin": "jīng guò liàn xí， wǒ duì zì jǐ gèng yǒu xìn xīn le。",
        "exampleMeaning": "Sau khi luyện tập, tôi tự tin hơn."
      },
      {
        "id": "hnl-lex-63bd818bab5ca118",
        "hanzi": "试讲",
        "pinyin": "shì jiǎng",
        "meaning": "dạy thử",
        "example": "试讲前紧张吗？",
        "examplePinyin": "shì jiǎng qián jǐn zhāng ma？",
        "exampleMeaning": "Trước khi dạy thử có căng thẳng không?"
      },
      {
        "id": "hnl-lex-c27df804bca780b9",
        "hanzi": "沉着",
        "pinyin": "chén zhuó",
        "meaning": "bình tĩnh",
        "example": "有一点儿，但我提醒自己要沉着。",
        "examplePinyin": "yǒu yì diǎn ér， dàn wǒ tí xǐng zì jǐ yào chén zhuó。",
        "exampleMeaning": "Có một chút, nhưng tôi nhắc mình phải bình tĩnh."
      },
      {
        "id": "hnl-lex-1ddf95b1ab049032",
        "hanzi": "集中",
        "pinyin": "jí zhōng",
        "meaning": "tập trung",
        "example": "我很努力，可是却没有考上。",
        "examplePinyin": "wǒ hěn nǔ lì， kě shì què méi yǒu kǎo shàng。",
        "exampleMeaning": "Tôi rất nỗ lực nhưng lại không thi đỗ."
      },
      {
        "id": "hnl-lex-a09ae47124fe3d11",
        "hanzi": "自信",
        "pinyin": "zì xìn",
        "meaning": "tự tin",
        "example": "经过练习，我对自己更有信心了。",
        "examplePinyin": "jīng guò liàn xí， wǒ duì zì jǐ gèng yǒu xìn xīn le。",
        "exampleMeaning": "Sau khi luyện tập, tôi tự tin hơn."
      }
    ],
    "grammar": [
      {
        "title": "可是……却……",
        "explanation": "tạo quan hệ tương phản Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "我很努力，可是却没有考上。",
        "translation": "Tôi rất nỗ lực nhưng lại không thi đỗ."
      },
      {
        "title": "经过……",
        "explanation": "sau khi trải qua…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "经过练习，我对自己更有信心了。",
        "translation": "Sau khi luyện tập, tôi tự tin hơn."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这次失败以后，你怎么办？",
        "pinyin": "zhè cì shī bài yǐ hòu， nǐ zěn me bàn？",
        "meaning": "Sau thất bại lần này bạn làm gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我先调整心情，再试一次。",
        "pinyin": "wǒ xiān tiáo zhěng xīn qíng， zài shì yī cì。",
        "meaning": "Tôi điều chỉnh tâm trạng trước rồi thử lại."
      },
      {
        "speaker": "An",
        "hanzi": "试讲前紧张吗？",
        "pinyin": "shì jiǎng qián jǐn zhāng ma？",
        "meaning": "Trước khi dạy thử có căng thẳng không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "有一点儿，但我提醒自己要沉着。",
        "pinyin": "yǒu yì diǎn ér， dàn wǒ tí xǐng zì jǐ yào chén zhuó。",
        "meaning": "Có một chút, nhưng tôi nhắc mình phải bình tĩnh."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu thể hiện quyết tâm thử lại.",
        "options": [
          "我先调整心情，再试一次。",
          "我永远不学习。",
          "失败就是成功。"
        ],
        "answer": "我先调整心情，再试一次。",
        "explanation": "再……一次 biểu thị hành động được thực hiện thêm một lần.",
        "id": "hanngu-q6-b17-q01"
      },
      {
        "type": "choice",
        "prompt": "“考研究生”的意思是什么？（kǎo yán jiū shēng）",
        "options": [
          "thi cao học",
          "cú sốc",
          "tuyển dụng",
          "đăng ký"
        ],
        "answer": "thi cao học",
        "explanation": "考研究生（kǎo yán jiū shēng） nghĩa là thi cao học。",
        "id": "hanngu-q6-b17-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “cú sốc” (dǎ jī).",
        "answer": "打击",
        "alternatives": [],
        "explanation": "打击 (dǎ jī) nghĩa là cú sốc。",
        "id": "hanngu-q6-b17-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “再试一次”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 50–64; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b19",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 19",
    "title": "无声的泪",
    "subtitle": "不仅……而且……",
    "minutes": 35,
    "order": 92,
    "objectives": [
      "Hiểu và dùng trọng tâm “不仅……而且……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “无声的泪”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-f0658380804b97f6",
        "hanzi": "意外",
        "pinyin": "yì wài",
        "meaning": "tai nạn, sự cố",
        "example": "这份工作不仅适合我，而且我也能胜任。",
        "examplePinyin": "zhè fèn gōng zuò bù jǐn shì hé wǒ， ér qiě wǒ yě néng shèng rèn。",
        "exampleMeaning": "Công việc này không những hợp với tôi mà tôi còn đảm nhiệm tốt."
      },
      {
        "id": "hnl-lex-ea8e09be961bd8b5",
        "hanzi": "残疾人",
        "pinyin": "cán jí rén",
        "meaning": "người khuyết tật",
        "example": "为了生活，我不得不再三求职。",
        "examplePinyin": "wèi le shēng huó， wǒ bù dé bù zài sān qiú zhí。",
        "exampleMeaning": "Vì cuộc sống, tôi buộc phải nhiều lần tìm việc."
      },
      {
        "id": "hnl-lex-ea91887b9d5f2fad",
        "hanzi": "歧视",
        "pinyin": "qí shì",
        "meaning": "phân biệt đối xử",
        "example": "这份工作不仅适合我，而且我也能胜任。",
        "examplePinyin": "zhè fèn gōng zuò bù jǐn shì hé wǒ， ér qiě wǒ yě néng shèng rèn。",
        "exampleMeaning": "Công việc này không những hợp với tôi mà tôi còn đảm nhiệm tốt."
      },
      {
        "id": "hnl-lex-3cb0dbdba37f83e9",
        "hanzi": "求职",
        "pinyin": "qiú zhí",
        "meaning": "tìm việc",
        "example": "为了生活，我不得不再三求职。",
        "examplePinyin": "wèi le shēng huó， wǒ bù dé bù zài sān qiú zhí。",
        "exampleMeaning": "Vì cuộc sống, tôi buộc phải nhiều lần tìm việc."
      },
      {
        "id": "hnl-lex-8c224b6795e6c9a7",
        "hanzi": "报社",
        "pinyin": "bào shè",
        "meaning": "tòa soạn",
        "example": "这份工作不仅适合我，而且我也能胜任。",
        "examplePinyin": "zhè fèn gōng zuò bù jǐn shì hé wǒ， ér qiě wǒ yě néng shèng rèn。",
        "exampleMeaning": "Công việc này không những hợp với tôi mà tôi còn đảm nhiệm tốt."
      },
      {
        "id": "hnl-lex-b3fd9ce61a1c33a1",
        "hanzi": "资料",
        "pinyin": "zī liào",
        "meaning": "tài liệu",
        "example": "为了生活，我不得不再三求职。",
        "examplePinyin": "wèi le shēng huó， wǒ bù dé bù zài sān qiú zhí。",
        "exampleMeaning": "Vì cuộc sống, tôi buộc phải nhiều lần tìm việc."
      },
      {
        "id": "hnl-lex-614fa7ee4d4bd7a1",
        "hanzi": "胜任",
        "pinyin": "shèng rèn",
        "meaning": "đảm nhiệm tốt",
        "example": "这份工作不仅适合我，而且我也能胜任。",
        "examplePinyin": "zhè fèn gōng zuò bù jǐn shì hé wǒ， ér qiě wǒ yě néng shèng rèn。",
        "exampleMeaning": "Công việc này không những hợp với tôi mà tôi còn đảm nhiệm tốt."
      },
      {
        "id": "hnl-lex-88096f53c9212d92",
        "hanzi": "保证",
        "pinyin": "bǎo zhèng",
        "meaning": "cam kết",
        "example": "为了生活，我不得不再三求职。",
        "examplePinyin": "wèi le shēng huó， wǒ bù dé bù zài sān qiú zhí。",
        "exampleMeaning": "Vì cuộc sống, tôi buộc phải nhiều lần tìm việc."
      }
    ],
    "grammar": [
      {
        "title": "不仅……而且……",
        "explanation": "không những…… mà còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "这份工作不仅适合我，而且我也能胜任。",
        "translation": "Công việc này không những hợp với tôi mà tôi còn đảm nhiệm tốt."
      },
      {
        "title": "不得不……",
        "explanation": "buộc phải…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "为了生活，我不得不再三求职。",
        "translation": "Vì cuộc sống, tôi buộc phải nhiều lần tìm việc."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "遇到困难时，你会怎么做？",
        "pinyin": "yù dào kùn nán shí， nǐ huì zěn me zuò？",
        "meaning": "Khi gặp khó khăn bạn sẽ làm gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我会说明情况，也会继续学习。",
        "pinyin": "wǒ huì shuō míng qíng kuàng， yě huì jì xù xué xí。",
        "meaning": "Tôi sẽ giải thích tình hình và tiếp tục học."
      },
      {
        "speaker": "An",
        "hanzi": "别人误解你怎么办？",
        "pinyin": "bié rén wù jiě nǐ zěn me bàn？",
        "meaning": "Nếu người khác hiểu lầm bạn thì sao?"
      },
      {
        "speaker": "Minh",
        "hanzi": "先沟通，再用行动证明自己。",
        "pinyin": "xiān gōu tōng， zài yòng xíng dòng zhèng míng zì jǐ。",
        "meaning": "Trước hết trao đổi, sau đó dùng hành động chứng minh bản thân."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 不得不 đúng.",
        "options": [
          "为了生活，我不得不再三求职。",
          "不得不今天很蓝。",
          "我不不得不学习。"
        ],
        "answer": "为了生活，我不得不再三求职。",
        "explanation": "不得不 nói về việc bắt buộc phải làm dù không muốn hoặc gặp khó khăn.",
        "id": "hanngu-q6-b19-q01"
      },
      {
        "type": "choice",
        "prompt": "“意外”的意思是什么？（yì wài）",
        "options": [
          "tai nạn, sự cố",
          "người khuyết tật",
          "phân biệt đối xử",
          "tìm việc"
        ],
        "answer": "tai nạn, sự cố",
        "explanation": "意外（yì wài） nghĩa là tai nạn, sự cố。",
        "id": "hanngu-q6-b19-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “người khuyết tật” (cán jí rén).",
        "answer": "残疾人",
        "alternatives": [],
        "explanation": "残疾人 (cán jí rén) nghĩa là người khuyết tật。",
        "id": "hanngu-q6-b19-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “无声的泪”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 81–94; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b20",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 20",
    "title": "什么最重要",
    "subtitle": "对……来说",
    "minutes": 35,
    "order": 83,
    "objectives": [
      "Hiểu và dùng trọng tâm “对……来说” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “什么最重要”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-8306382e45cfdfd3",
        "hanzi": "重要",
        "pinyin": "zhòng yào",
        "meaning": "quan trọng",
        "example": "对你来说什么最重要？",
        "examplePinyin": "duì nǐ lái shuō shén me zuì zhòng yào？",
        "exampleMeaning": "Đối với bạn điều gì quan trọng nhất?"
      },
      {
        "id": "hnl-lex-4c35f303bc71332e",
        "hanzi": "选择",
        "pinyin": "xuǎn zé",
        "meaning": "lựa chọn",
        "example": "你怎么做选择？",
        "examplePinyin": "nǐ zěn me zuò xuǎn zé？",
        "exampleMeaning": "Bạn lựa chọn thế nào?"
      },
      {
        "id": "hnl-lex-3bde63221228db14",
        "hanzi": "健康",
        "pinyin": "jiàn kāng",
        "meaning": "sức khỏe",
        "example": "对我来说，健康和家人最重要。",
        "examplePinyin": "duì wǒ lái shuō， jiàn kāng hé jiā rén zuì zhòng yào。",
        "exampleMeaning": "Đối với tôi, sức khỏe và gia đình quan trọng nhất."
      },
      {
        "id": "hnl-lex-c8137a5c209182ef",
        "hanzi": "责任",
        "pinyin": "zé rèn",
        "meaning": "trách nhiệm",
        "example": "我会先想清楚自己的责任。",
        "examplePinyin": "wǒ huì xiān xiǎng qīng chǔ zì jǐ de zé rèn。",
        "exampleMeaning": "Tôi sẽ nghĩ rõ trách nhiệm của mình trước."
      },
      {
        "id": "hnl-lex-ee99d6a0b765e769",
        "hanzi": "陪伴",
        "pinyin": "péi bàn",
        "meaning": "đồng hành",
        "example": "对我来说，健康最重要。",
        "examplePinyin": "duì wǒ lái shuō， jiàn kāng zuì zhòng yào。",
        "exampleMeaning": "Đối với tôi, sức khỏe là quan trọng nhất."
      },
      {
        "id": "hnl-lex-6cad55e35a7f94af",
        "hanzi": "价值",
        "pinyin": "jià zhí",
        "meaning": "giá trị",
        "example": "与其担心，不如马上行动。",
        "examplePinyin": "yǔ qí dān xīn， bù rú mǎ shàng xíng dòng。",
        "exampleMeaning": "Thà lo lắng còn hơn là hành động ngay."
      }
    ],
    "grammar": [
      {
        "title": "对……来说",
        "explanation": "đối với…… mà nói Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "对我来说，健康最重要。",
        "translation": "Đối với tôi, sức khỏe là quan trọng nhất."
      },
      {
        "title": "与其……不如……",
        "explanation": "thà…… còn hơn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "与其担心，不如马上行动。",
        "translation": "Thà lo lắng còn hơn là hành động ngay."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "对你来说什么最重要？",
        "pinyin": "duì nǐ lái shuō shén me zuì zhòng yào？",
        "meaning": "Đối với bạn điều gì quan trọng nhất?"
      },
      {
        "speaker": "Minh",
        "hanzi": "对我来说，健康和家人最重要。",
        "pinyin": "duì wǒ lái shuō， jiàn kāng hé jiā rén zuì zhòng yào。",
        "meaning": "Đối với tôi, sức khỏe và gia đình quan trọng nhất."
      },
      {
        "speaker": "An",
        "hanzi": "你怎么做选择？",
        "pinyin": "nǐ zěn me zuò xuǎn zé？",
        "meaning": "Bạn lựa chọn thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我会先想清楚自己的责任。",
        "pinyin": "wǒ huì xiān xiǎng qīng chǔ zì jǐ de zé rèn。",
        "meaning": "Tôi sẽ nghĩ rõ trách nhiệm của mình trước."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu nào nêu quan điểm của một người?",
        "options": [
          "对我来说，健康最重要。",
          "健康在桌子上。",
          "我昨天很早回家。"
        ],
        "answer": "对我来说，健康最重要。",
        "explanation": "对……来说 giới thiệu góc nhìn hoặc đối tượng được dùng làm 기준 đánh giá。",
        "id": "hanngu-q6-b20-q01"
      },
      {
        "type": "choice",
        "prompt": "“重要”的意思是什么？（zhòng yào）",
        "options": [
          "quan trọng",
          "lựa chọn",
          "sức khỏe",
          "trách nhiệm"
        ],
        "answer": "quan trọng",
        "explanation": "重要（zhòng yào） nghĩa là quan trọng。",
        "id": "hanngu-q6-b20-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “lựa chọn” (xuǎn zé).",
        "answer": "选择",
        "alternatives": [],
        "explanation": "选择 (xuǎn zé) nghĩa là lựa chọn。",
        "id": "hanngu-q6-b20-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “什么最重要”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 95–95; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b21",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 21",
    "title": "理发 · Bài học",
    "subtitle": "V + 得 + tính từ",
    "minutes": 35,
    "order": 84,
    "objectives": [
      "Hiểu và dùng trọng tâm “V + 得 + tính từ” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “理发”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-fc2d98a653d2f004",
        "hanzi": "理发",
        "pinyin": "lǐ fà",
        "meaning": "cắt tóc",
        "example": "理发师剪得很仔细。",
        "examplePinyin": "lǐ fà shī jiǎn dé hěn zǐ xì。",
        "exampleMeaning": "Thợ cắt tóc cắt rất tỉ mỉ."
      },
      {
        "id": "hnl-lex-5f8db62f13df4c80",
        "hanzi": "镜子",
        "pinyin": "jìng zi",
        "meaning": "gương",
        "example": "虽然头发不长，但是我想换发型。",
        "examplePinyin": "suī rán tóu fà bù zhǎng， dàn shì wǒ xiǎng huàn fà xíng。",
        "exampleMeaning": "Mặc dù tóc không dài nhưng tôi muốn đổi kiểu."
      },
      {
        "id": "hnl-lex-fa73d2d8106682ce",
        "hanzi": "发型",
        "pinyin": "fà xíng",
        "meaning": "kiểu tóc",
        "example": "您想剪什么发型？",
        "examplePinyin": "nín xiǎng jiǎn shén me fà xíng？",
        "exampleMeaning": "Bạn muốn cắt kiểu tóc nào?"
      },
      {
        "id": "hnl-lex-012a9bb01540b63e",
        "hanzi": "舒服",
        "pinyin": "shū fú",
        "meaning": "thoải mái",
        "example": "请剪短一点儿，舒服就好。",
        "examplePinyin": "qǐng jiǎn duǎn yì diǎn ér， shū fú jiù hǎo。",
        "exampleMeaning": "Xin cắt ngắn hơn một chút, thoải mái là được."
      },
      {
        "id": "hnl-lex-b969c61536106794",
        "hanzi": "推荐",
        "pinyin": "tuī jiàn",
        "meaning": "giới thiệu",
        "example": "理发师剪得很仔细。",
        "examplePinyin": "lǐ fà shī jiǎn dé hěn zǐ xì。",
        "exampleMeaning": "Thợ cắt tóc cắt rất tỉ mỉ."
      },
      {
        "id": "hnl-lex-b8f43fb31a8f83f7",
        "hanzi": "满意",
        "pinyin": "mǎn yì",
        "meaning": "hài lòng",
        "example": "很好，我很满意。",
        "examplePinyin": "hěn hǎo， wǒ hěn mǎn yì。",
        "exampleMeaning": "Rất tốt, tôi rất hài lòng."
      }
    ],
    "grammar": [
      {
        "title": "V + 得 + tính từ",
        "explanation": "mức độ của hành động Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "理发师剪得很仔细。",
        "translation": "Thợ cắt tóc cắt rất tỉ mỉ."
      },
      {
        "title": "虽然……但是……",
        "explanation": "mặc dù…… nhưng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "虽然头发不长，但是我想换发型。",
        "translation": "Mặc dù tóc không dài nhưng tôi muốn đổi kiểu."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "您想剪什么发型？",
        "pinyin": "nín xiǎng jiǎn shén me fà xíng？",
        "meaning": "Bạn muốn cắt kiểu tóc nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "请剪短一点儿，舒服就好。",
        "pinyin": "qǐng jiǎn duǎn yì diǎn ér， shū fú jiù hǎo。",
        "meaning": "Xin cắt ngắn hơn một chút, thoải mái là được."
      },
      {
        "speaker": "An",
        "hanzi": "这个发型可以吗？",
        "pinyin": "zhè ge fà xíng kě yǐ ma？",
        "meaning": "Kiểu tóc này được không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "很好，我很满意。",
        "pinyin": "hěn hǎo， wǒ hěn mǎn yì。",
        "meaning": "Rất tốt, tôi rất hài lòng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "虽然……但是…… biểu đạt quan hệ nào?",
        "options": [
          "Mặc dù…… nhưng……",
          "Vì…… nên……",
          "Nếu…… thì……"
        ],
        "answer": "Mặc dù…… nhưng……",
        "explanation": "虽然 nêu điều kiện trái với dự đoán, 但是 giới thiệu kết quả hoặc nhận xét đối lập。",
        "id": "hanngu-q6-b21-q01"
      },
      {
        "type": "choice",
        "prompt": "“理发”的意思是什么？（lǐ fà）",
        "options": [
          "cắt tóc",
          "gương",
          "kiểu tóc",
          "thoải mái"
        ],
        "answer": "cắt tóc",
        "explanation": "理发（lǐ fà） nghĩa là cắt tóc。",
        "id": "hanngu-q6-b21-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “gương” (jìng zi).",
        "answer": "镜子",
        "alternatives": [],
        "explanation": "镜子 (jìng zi) nghĩa là gương。",
        "id": "hanngu-q6-b21-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “理发”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 111–111; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b22",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 22",
    "title": "母亲的心",
    "subtitle": "为了……",
    "minutes": 35,
    "order": 93,
    "objectives": [
      "Hiểu và dùng trọng tâm “为了……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “母亲的心”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-925f73178705e79b",
        "hanzi": "母亲",
        "pinyin": "mǔ qīn",
        "meaning": "mẹ",
        "example": "母亲最担心什么？",
        "examplePinyin": "mǔ qīn zuì dān xīn shén me？",
        "exampleMeaning": "Người mẹ lo điều gì nhất?"
      },
      {
        "id": "hnl-lex-914d856c53173e4f",
        "hanzi": "医疗事故",
        "pinyin": "yī liáo shì gù",
        "meaning": "sự cố y tế",
        "example": "一听到孩子的声音，母亲就很紧张。",
        "examplePinyin": "yī tīng dào hái zi de shēng yīn， mǔ qīn jiù hěn jǐn zhāng。",
        "exampleMeaning": "Vừa nghe tiếng con, người mẹ đã rất lo lắng."
      },
      {
        "id": "hnl-lex-5b884e58e850b8f8",
        "hanzi": "聋哑学校",
        "pinyin": "lóng yǎ xué xiào",
        "meaning": "trường dành cho người khiếm thính",
        "example": "为了不失去语言能力，他每天练习。",
        "examplePinyin": "wèi le bù shī qù yǔ yán néng lì， tā měi tiān liàn xí。",
        "exampleMeaning": "Để không mất khả năng ngôn ngữ, cậu ấy luyện tập mỗi ngày."
      },
      {
        "id": "hnl-lex-ef769e75e8e921be",
        "hanzi": "听力",
        "pinyin": "tīng lì",
        "meaning": "thính lực",
        "example": "一听到孩子的声音，母亲就很紧张。",
        "examplePinyin": "yī tīng dào hái zi de shēng yīn， mǔ qīn jiù hěn jǐn zhāng。",
        "exampleMeaning": "Vừa nghe tiếng con, người mẹ đã rất lo lắng."
      },
      {
        "id": "hnl-lex-72930b580d996fff",
        "hanzi": "语言能力",
        "pinyin": "yǔ yán néng lì",
        "meaning": "khả năng ngôn ngữ",
        "example": "为了不失去语言能力，他每天练习。",
        "examplePinyin": "wèi le bù shī qù yǔ yán néng lì， tā měi tiān liàn xí。",
        "exampleMeaning": "Để không mất khả năng ngôn ngữ, cậu ấy luyện tập mỗi ngày."
      },
      {
        "id": "hnl-lex-3365b1b87bc4ecb4",
        "hanzi": "口形",
        "pinyin": "kǒu xíng",
        "meaning": "khẩu hình",
        "example": "她让孩子看口形，一句一句地练习。",
        "examplePinyin": "tā ràng hái zi kàn kǒu xíng， yī jù yī jù dì liàn xí。",
        "exampleMeaning": "Bà để con nhìn khẩu hình và luyện từng câu."
      },
      {
        "id": "hnl-lex-adee935d8cb78e6d",
        "hanzi": "耐力",
        "pinyin": "nài lì",
        "meaning": "sức chịu đựng",
        "example": "为了不失去语言能力，他每天练习。",
        "examplePinyin": "wèi le bù shī qù yǔ yán néng lì， tā měi tiān liàn xí。",
        "exampleMeaning": "Để không mất khả năng ngôn ngữ, cậu ấy luyện tập mỗi ngày."
      },
      {
        "id": "hnl-lex-730ad020eb5bacab",
        "hanzi": "希望",
        "pinyin": "xī wàng",
        "meaning": "hy vọng",
        "example": "她担心孩子失去沟通的希望。",
        "examplePinyin": "tā dān xīn hái zi shī qù gōu tōng de xī wàng。",
        "exampleMeaning": "Bà lo con mất hy vọng giao tiếp."
      }
    ],
    "grammar": [
      {
        "title": "为了……",
        "explanation": "vì mục đích…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "为了不失去语言能力，他每天练习。",
        "translation": "Để không mất khả năng ngôn ngữ, cậu ấy luyện tập mỗi ngày."
      },
      {
        "title": "一……就……",
        "explanation": "vừa…… thì…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "一听到孩子的声音，母亲就很紧张。",
        "translation": "Vừa nghe tiếng con, người mẹ đã rất lo lắng."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "母亲最担心什么？",
        "pinyin": "mǔ qīn zuì dān xīn shén me？",
        "meaning": "Người mẹ lo điều gì nhất?"
      },
      {
        "speaker": "Minh",
        "hanzi": "她担心孩子失去沟通的希望。",
        "pinyin": "tā dān xīn hái zi shī qù gōu tōng de xī wàng。",
        "meaning": "Bà lo con mất hy vọng giao tiếp."
      },
      {
        "speaker": "An",
        "hanzi": "她怎样帮助孩子？",
        "pinyin": "tā zěn yàng bāng zhù hái zi？",
        "meaning": "Bà giúp con thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "她让孩子看口形，一句一句地练习。",
        "pinyin": "tā ràng hái zi kàn kǒu xíng， yī jù yī jù dì liàn xí。",
        "meaning": "Bà để con nhìn khẩu hình và luyện từng câu."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu nêu mục đích dùng 为了.",
        "options": [
          "为了保持语言能力，他每天练习。",
          "为了昨天是星期天。",
          "他为了很高。"
        ],
        "answer": "为了保持语言能力，他每天练习。",
        "explanation": "为了 đứng trước mục đích của hành động.",
        "id": "hanngu-q6-b22-q01"
      },
      {
        "type": "choice",
        "prompt": "“母亲”的意思是什么？（mǔ qīn）",
        "options": [
          "mẹ",
          "sự cố y tế",
          "trường dành cho người khiếm thính",
          "thính lực"
        ],
        "answer": "mẹ",
        "explanation": "母亲（mǔ qīn） nghĩa là mẹ。",
        "id": "hanngu-q6-b22-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “sự cố y tế” (yī liáo shì gù).",
        "answer": "医疗事故",
        "alternatives": [],
        "explanation": "医疗事故 (yī liáo shì gù) nghĩa là sự cố y tế。",
        "id": "hanngu-q6-b22-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “母亲的心”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 128–143; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b23",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 23",
    "title": "网络学校",
    "subtitle": "只要……就……",
    "minutes": 35,
    "order": 94,
    "objectives": [
      "Hiểu và dùng trọng tâm “只要……就……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “网络学校”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-4b6ef9df1b45a842",
        "hanzi": "网络学校",
        "pinyin": "wǎng luò xué xiào",
        "meaning": "trường học trực tuyến",
        "example": "只要打开电脑，就可以开始学习。",
        "examplePinyin": "zhǐ yào dǎ kāi diàn nǎo， jiù kě yǐ kāi shǐ xué xí。",
        "exampleMeaning": "Chỉ cần mở máy tính là có thể bắt đầu học."
      },
      {
        "id": "hnl-lex-e81e886dad1dceb6",
        "hanzi": "教师",
        "pinyin": "jiào shī",
        "meaning": "giáo viên",
        "example": "我们通过网络交换学习资料。",
        "examplePinyin": "wǒ men tōng guò wǎng luò jiāo huàn xué xí zī liào。",
        "exampleMeaning": "Chúng tôi trao đổi tài liệu học thông qua mạng."
      },
      {
        "id": "hnl-lex-d4b825780cae1fd0",
        "hanzi": "教学安排",
        "pinyin": "jiào xué ān pái",
        "meaning": "安排 dạy học",
        "example": "只要打开电脑，就可以开始学习。",
        "examplePinyin": "zhǐ yào dǎ kāi diàn nǎo， jiù kě yǐ kāi shǐ xué xí。",
        "exampleMeaning": "Chỉ cần mở máy tính là có thể bắt đầu học."
      },
      {
        "id": "hnl-lex-a77e8dea02edb057",
        "hanzi": "电子邮件",
        "pinyin": "diàn zi yóu jiàn",
        "meaning": "email",
        "example": "通过电子邮件和在线讨论联系。",
        "examplePinyin": "tōng guò diàn zi yóu jiàn hé zài xiàn tǎo lùn lián xì。",
        "exampleMeaning": "Liên lạc qua email và thảo luận trực tuyến."
      },
      {
        "id": "hnl-lex-0efd13258c19f30c",
        "hanzi": "多媒体",
        "pinyin": "duō méi tǐ",
        "meaning": "đa phương tiện",
        "example": "只要打开电脑，就可以开始学习。",
        "examplePinyin": "zhǐ yào dǎ kāi diàn nǎo， jiù kě yǐ kāi shǐ xué xí。",
        "exampleMeaning": "Chỉ cần mở máy tính là có thể bắt đầu học."
      },
      {
        "id": "hnl-lex-2cc3576cd9b34899",
        "hanzi": "课程",
        "pinyin": "kè chéng",
        "meaning": "khóa học",
        "example": "方便，我可以在家查看课程安排。",
        "examplePinyin": "fāng biàn， wǒ kě yǐ zài jiā chá kàn kè chéng ān pái。",
        "exampleMeaning": "Thuận tiện, tôi có thể xem lịch học ở nhà."
      },
      {
        "id": "hnl-lex-7b58ff283a192e37",
        "hanzi": "讨论",
        "pinyin": "tǎo lùn",
        "meaning": "thảo luận",
        "example": "通过电子邮件和在线讨论联系。",
        "examplePinyin": "tōng guò diàn zi yóu jiàn hé zài xiàn tǎo lùn lián xì。",
        "exampleMeaning": "Liên lạc qua email và thảo luận trực tuyến."
      },
      {
        "id": "hnl-lex-b84f757c20e0c5b9",
        "hanzi": "方便",
        "pinyin": "fāng biàn",
        "meaning": "thuận tiện",
        "example": "网络学习方便吗？",
        "examplePinyin": "wǎng luò xué xí fāng biàn ma？",
        "exampleMeaning": "Học trực tuyến có thuận tiện không?"
      }
    ],
    "grammar": [
      {
        "title": "只要……就……",
        "explanation": "chỉ cần…… thì…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "只要打开电脑，就可以开始学习。",
        "translation": "Chỉ cần mở máy tính là có thể bắt đầu học."
      },
      {
        "title": "通过……",
        "explanation": "thông qua…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "我们通过网络交换学习资料。",
        "translation": "Chúng tôi trao đổi tài liệu học thông qua mạng."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "网络学习方便吗？",
        "pinyin": "wǎng luò xué xí fāng biàn ma？",
        "meaning": "Học trực tuyến có thuận tiện không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "方便，我可以在家查看课程安排。",
        "pinyin": "fāng biàn， wǒ kě yǐ zài jiā chá kàn kè chéng ān pái。",
        "meaning": "Thuận tiện, tôi có thể xem lịch học ở nhà."
      },
      {
        "speaker": "An",
        "hanzi": "怎样和老师联系？",
        "pinyin": "zěn yàng hé lǎo shī lián xì？",
        "meaning": "Liên lạc với giáo viên thế nào?"
      },
      {
        "speaker": "Minh",
        "hanzi": "通过电子邮件和在线讨论联系。",
        "pinyin": "tōng guò diàn zi yóu jiàn hé zài xiàn tǎo lùn lián xì。",
        "meaning": "Liên lạc qua email và thảo luận trực tuyến."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 通过 để nói về phương tiện.",
        "options": [
          "我们通过网络交换学习资料。",
          "通过昨天很冷。",
          "网络通过是老师。"
        ],
        "answer": "我们通过网络交换学习资料。",
        "explanation": "通过 giới thiệu phương tiện hoặc con đường để thực hiện việc gì.",
        "id": "hanngu-q6-b23-q01"
      },
      {
        "type": "choice",
        "prompt": "“网络学校”的意思是什么？（wǎng luò xué xiào）",
        "options": [
          "trường học trực tuyến",
          "giáo viên",
          "安排 dạy học",
          "email"
        ],
        "answer": "trường học trực tuyến",
        "explanation": "网络学校（wǎng luò xué xiào） nghĩa là trường học trực tuyến。",
        "id": "hanngu-q6-b23-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “giáo viên” (jiào shī).",
        "answer": "教师",
        "alternatives": [],
        "explanation": "教师 (jiào shī) nghĩa là giáo viên。",
        "id": "hanngu-q6-b23-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “网络学校”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 144–155; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b24",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 24",
    "title": "情商 · Bài học",
    "subtitle": "即使……也……",
    "minutes": 35,
    "order": 85,
    "objectives": [
      "Hiểu và dùng trọng tâm “即使……也……” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “情商”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-568271717617ebe0",
        "hanzi": "情商",
        "pinyin": "qíng shāng",
        "meaning": "trí tuệ cảm xúc",
        "example": "什么是情商？",
        "examplePinyin": "shén me shì qíng shāng？",
        "exampleMeaning": "Trí tuệ cảm xúc là gì?"
      },
      {
        "id": "hnl-lex-297719013427a7de",
        "hanzi": "情绪",
        "pinyin": "qíng xù",
        "meaning": "cảm xúc",
        "example": "情商包括控制情绪和体谅别人。",
        "examplePinyin": "qíng shāng bāo kuò kòng zhì qíng xù hé tǐ liàng bié rén。",
        "exampleMeaning": "Trí tuệ cảm xúc gồm kiểm soát cảm xúc và thông cảm người khác."
      },
      {
        "id": "hnl-lex-34cf2a6b3e8f5497",
        "hanzi": "体谅",
        "pinyin": "tǐ liàng",
        "meaning": "thông cảm",
        "example": "情商包括控制情绪和体谅别人。",
        "examplePinyin": "qíng shāng bāo kuò kòng zhì qíng xù hé tǐ liàng bié rén。",
        "exampleMeaning": "Trí tuệ cảm xúc gồm kiểm soát cảm xúc và thông cảm người khác."
      },
      {
        "id": "hnl-lex-b8f1d0e6af9445d9",
        "hanzi": "主动",
        "pinyin": "zhǔ dòng",
        "meaning": "chủ động",
        "example": "他不但聪明，而且很主动。",
        "examplePinyin": "tā bù dàn cōng míng， ér qiě hěn zhǔ dòng。",
        "exampleMeaning": "Bạn ấy không những thông minh mà còn rất chủ động."
      },
      {
        "id": "hnl-lex-8e700148deb36812",
        "hanzi": "关系",
        "pinyin": "guān xì",
        "meaning": "mối quan hệ",
        "example": "即使遇到困难，也要保持耐心。",
        "examplePinyin": "jí shǐ yù dào kùn nán， yě yào bǎo chí nài xīn。",
        "exampleMeaning": "Cho dù gặp khó khăn cũng phải giữ kiên nhẫn."
      },
      {
        "id": "hnl-lex-3e56bfc0b1c80e5c",
        "hanzi": "成功",
        "pinyin": "chéng gōng",
        "meaning": "thành công",
        "example": "他不但聪明，而且很主动。",
        "examplePinyin": "tā bù dàn cōng míng， ér qiě hěn zhǔ dòng。",
        "exampleMeaning": "Bạn ấy không những thông minh mà còn rất chủ động."
      }
    ],
    "grammar": [
      {
        "title": "即使……也……",
        "explanation": "cho dù…… cũng…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "即使遇到困难，也要保持耐心。",
        "translation": "Cho dù gặp khó khăn cũng phải giữ kiên nhẫn."
      },
      {
        "title": "不但……而且……",
        "explanation": "không những…… mà còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "他不但聪明，而且很主动。",
        "translation": "Bạn ấy không những thông minh mà còn rất chủ động."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "什么是情商？",
        "pinyin": "shén me shì qíng shāng？",
        "meaning": "Trí tuệ cảm xúc là gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "情商包括控制情绪和体谅别人。",
        "pinyin": "qíng shāng bāo kuò kòng zhì qíng xù hé tǐ liàng bié rén。",
        "meaning": "Trí tuệ cảm xúc gồm kiểm soát cảm xúc và thông cảm người khác."
      },
      {
        "speaker": "An",
        "hanzi": "情商能不能提高？",
        "pinyin": "qíng shāng néng bù néng tí gāo？",
        "meaning": "Trí tuệ cảm xúc có thể nâng cao không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "可以，通过练习和反思慢慢提高。",
        "pinyin": "kě yǐ， tōng guò liàn xí hé fǎn sī màn màn tí gāo。",
        "meaning": "Có, có thể nâng cao dần qua luyện tập và suy ngẫm."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 不但……而且…… đúng。",
        "options": [
          "他不但聪明，而且很主动。",
          "不但他昨天去，而且书。",
          "而且不但天气下雨。"
        ],
        "answer": "他不但聪明，而且很主动。",
        "explanation": "不但 và 而且 nối hai đặc điểm hoặc hành động cùng chiều。",
        "id": "hanngu-q6-b24-q01"
      },
      {
        "type": "choice",
        "prompt": "“情商”的意思是什么？（qíng shāng）",
        "options": [
          "trí tuệ cảm xúc",
          "cảm xúc",
          "thông cảm",
          "chủ động"
        ],
        "answer": "trí tuệ cảm xúc",
        "explanation": "情商（qíng shāng） nghĩa là trí tuệ cảm xúc。",
        "id": "hanngu-q6-b24-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “cảm xúc” (qíng xù).",
        "answer": "情绪",
        "alternatives": [],
        "explanation": "情绪 (qíng xù) nghĩa là cảm xúc。",
        "id": "hanngu-q6-b24-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “情商”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 156–156; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b25",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 25",
    "title": "你喜欢什么颜色",
    "subtitle": "不但……而且……",
    "minutes": 35,
    "order": 86,
    "objectives": [
      "Hiểu và dùng trọng tâm “不但……而且……” trong tình huống phù hợp.",
      "Nhận diện 6 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “你喜欢什么颜色”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-507c650ab82dc0e2",
        "hanzi": "颜色",
        "pinyin": "yán sè",
        "meaning": "màu sắc",
        "example": "你喜欢什么颜色？",
        "examplePinyin": "nǐ xǐ huān shén me yán sè？",
        "exampleMeaning": "Bạn thích màu gì?"
      },
      {
        "id": "hnl-lex-0434badcbdde0c9a",
        "hanzi": "性格",
        "pinyin": "xìng gé",
        "meaning": "tính cách",
        "example": "颜色能说明性格吗？",
        "examplePinyin": "yán sè néng shuō míng xìng gé ma？",
        "exampleMeaning": "Màu sắc có thể cho biết tính cách không?"
      },
      {
        "id": "hnl-lex-07d59e9f8282544f",
        "hanzi": "影响",
        "pinyin": "yǐng xiǎng",
        "meaning": "ảnh hưởng",
        "example": "可能有影响，但不能简单判断。",
        "examplePinyin": "kě néng yǒu yǐng xiǎng， dàn bù néng jiǎn dān pàn duàn。",
        "exampleMeaning": "Có thể có ảnh hưởng nhưng không thể phán đoán đơn giản."
      },
      {
        "id": "hnl-lex-19f305f1fef8749b",
        "hanzi": "热烈",
        "pinyin": "rè liè",
        "meaning": "nồng nhiệt",
        "example": "这个说法是否正确，还要研究。",
        "examplePinyin": "zhè ge shuō fǎ shì fǒu zhèng què， hái yào yán jiū。",
        "exampleMeaning": "Cách nói này có đúng hay không còn cần nghiên cứu."
      },
      {
        "id": "hnl-lex-685db69e19b2f191",
        "hanzi": "纯洁",
        "pinyin": "chún jié",
        "meaning": "trong sáng",
        "example": "颜色不但影响情绪，而且影响表达。",
        "examplePinyin": "yán sè bù dàn yǐng xiǎng qíng xù， ér qiě yǐng xiǎng biǎo dá。",
        "exampleMeaning": "Màu sắc không những ảnh hưởng cảm xúc mà còn ảnh hưởng cách biểu đạt."
      },
      {
        "id": "hnl-lex-8ecc8a50178ad673",
        "hanzi": "宁静",
        "pinyin": "níng jìng",
        "meaning": "yên tĩnh",
        "example": "这个说法是否正确，还要研究。",
        "examplePinyin": "zhè ge shuō fǎ shì fǒu zhèng què， hái yào yán jiū。",
        "exampleMeaning": "Cách nói này có đúng hay không còn cần nghiên cứu."
      }
    ],
    "grammar": [
      {
        "title": "不但……而且……",
        "explanation": "không những…… mà còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "颜色不但影响情绪，而且影响表达。",
        "translation": "Màu sắc không những ảnh hưởng cảm xúc mà còn ảnh hưởng cách biểu đạt."
      },
      {
        "title": "是否……",
        "explanation": "có…… hay không Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "这个说法是否正确，还要研究。",
        "translation": "Cách nói này có đúng hay không còn cần nghiên cứu."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你喜欢什么颜色？",
        "pinyin": "nǐ xǐ huān shén me yán sè？",
        "meaning": "Bạn thích màu gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我喜欢蓝色，因为它让我觉得安静。",
        "pinyin": "wǒ xǐ huān lán sè， yīn wèi tā ràng wǒ jué de ān jìng。",
        "meaning": "Tôi thích màu xanh lam vì nó khiến tôi thấy yên tĩnh."
      },
      {
        "speaker": "An",
        "hanzi": "颜色能说明性格吗？",
        "pinyin": "yán sè néng shuō míng xìng gé ma？",
        "meaning": "Màu sắc có thể cho biết tính cách không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "可能有影响，但不能简单判断。",
        "pinyin": "kě néng yǒu yǐng xiǎng， dàn bù néng jiǎn dān pàn duàn。",
        "meaning": "Có thể có ảnh hưởng nhưng không thể phán đoán đơn giản."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "是否…… dùng để làm gì?",
        "options": [
          "Nêu vấn đề có…… hay không",
          "Nêu địa điểm",
          "Nêu số lượng"
        ],
        "answer": "Nêu vấn đề có…… hay không",
        "explanation": "是否 đặt trước tính từ hoặc động từ để tạo câu hỏi gián tiếp về tính đúng sai hoặc khả năng。",
        "id": "hanngu-q6-b25-q01"
      },
      {
        "type": "choice",
        "prompt": "“颜色”的意思是什么？（yán sè）",
        "options": [
          "màu sắc",
          "tính cách",
          "ảnh hưởng",
          "nồng nhiệt"
        ],
        "answer": "màu sắc",
        "explanation": "颜色（yán sè） nghĩa là màu sắc。",
        "id": "hanngu-q6-b25-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “tính cách” (xìng gé).",
        "answer": "性格",
        "alternatives": [],
        "explanation": "性格 (xìng gé) nghĩa là tính cách。",
        "id": "hanngu-q6-b25-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “你喜欢什么颜色”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 172–172; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q6-b26",
    "level": 6,
    "unit": "Quyển 6 · Bài nguồn 26",
    "title": "梁山伯与祝英台",
    "subtitle": "不仅……而且……",
    "minutes": 35,
    "order": 95,
    "objectives": [
      "Hiểu và dùng trọng tâm “不仅……而且……” trong tình huống phù hợp.",
      "Nhận diện 8 từ và cụm từ của bài.",
      "Làm bài tập rồi tự đối chiếu phản hồi; chưa dùng điểm số để kết luận năng lực thi."
    ],
    "introduction": "Bài bổ trợ theo chủ đề “梁山伯与祝英台”. Học chậm theo ba lượt: đọc hiểu, luyện mẫu câu, rồi tự nói lại bằng thông tin của bạn. Nội dung tiếng Việt và hoạt động do Hán Ngữ Lab biên soạn để học online; không phải bản chép nguyên văn giáo trình.",
    "vocabulary": [
      {
        "id": "hnl-lex-35cddee1702c22ae",
        "hanzi": "家喻户晓",
        "pinyin": "jiā yù hù xiǎo",
        "meaning": "nhà nhà đều biết",
        "example": "听过，这是一个家喻户晓的故事。",
        "examplePinyin": "tīng guò， zhè shì yí gè jiā yù hù xiǎo de gù shì。",
        "exampleMeaning": "Rồi, đây là câu chuyện nhà nhà đều biết."
      },
      {
        "id": "hnl-lex-a0686dd9572124c5",
        "hanzi": "女扮男装",
        "pinyin": "nǚ bàn nán zhuāng",
        "meaning": "cải trang nam",
        "example": "祝英台为什么女扮男装？",
        "examplePinyin": "zhù yīng tái wèi shén me nǚ bàn nán zhuāng？",
        "exampleMeaning": "Vì sao Chúc Anh Đài cải trang nam?"
      },
      {
        "id": "hnl-lex-b2f96e7abe985ad2",
        "hanzi": "聪明好学",
        "pinyin": "cōng míng hào xué",
        "meaning": "thông minh ham học",
        "example": "她不仅聪明，而且好学。",
        "examplePinyin": "tā bù jǐn cōng míng， ér qiě hào xué。",
        "exampleMeaning": "Cô ấy không những thông minh mà còn ham học."
      },
      {
        "id": "hnl-lex-25546165f1f7ddd1",
        "hanzi": "书院",
        "pinyin": "shū yuàn",
        "meaning": "thư viện trường, học viện",
        "example": "从此，两人成了好朋友。",
        "examplePinyin": "cóng cǐ， liǎng rén chéng le hǎo péng yǒu。",
        "exampleMeaning": "Từ đó, hai người trở thành bạn tốt."
      },
      {
        "id": "hnl-lex-587e1afb37298111",
        "hanzi": "一见如故",
        "pinyin": "yī jiàn rú gù",
        "meaning": "vừa gặp đã thân",
        "example": "她不仅聪明，而且好学。",
        "examplePinyin": "tā bù jǐn cōng míng， ér qiě hào xué。",
        "exampleMeaning": "Cô ấy không những thông minh mà còn ham học."
      },
      {
        "id": "hnl-lex-a410e890bfb761f2",
        "hanzi": "相识",
        "pinyin": "xiāng shí",
        "meaning": "quen biết",
        "example": "从此，两人成了好朋友。",
        "examplePinyin": "cóng cǐ， liǎng rén chéng le hǎo péng yǒu。",
        "exampleMeaning": "Từ đó, hai người trở thành bạn tốt."
      },
      {
        "id": "hnl-lex-25c2966df3ef8e76",
        "hanzi": "答应",
        "pinyin": "dā yìng",
        "meaning": "đồng ý",
        "example": "她不仅聪明，而且好学。",
        "examplePinyin": "tā bù jǐn cōng míng， ér qiě hào xué。",
        "exampleMeaning": "Cô ấy không những thông minh mà còn ham học."
      },
      {
        "id": "hnl-lex-94d9c10f1dc4edc0",
        "hanzi": "故事",
        "pinyin": "gù shì",
        "meaning": "câu chuyện",
        "example": "你听过这个故事吗？",
        "examplePinyin": "nǐ tīng guò zhè ge gù shì ma？",
        "exampleMeaning": "Bạn từng nghe câu chuyện này chưa?"
      }
    ],
    "grammar": [
      {
        "title": "不仅……而且……",
        "explanation": "không những…… mà còn…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "她不仅聪明，而且好学。",
        "translation": "Cô ấy không những thông minh mà còn ham học."
      },
      {
        "title": "从此……",
        "explanation": "từ đó về sau…… Đây là phần giải thích bổ trợ của Hán Ngữ Lab, cần được duyệt chuyên môn trước khi xuất bản.",
        "example": "从此，两人成了好朋友。",
        "translation": "Từ đó, hai người trở thành bạn tốt."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你听过这个故事吗？",
        "pinyin": "nǐ tīng guò zhè ge gù shì ma？",
        "meaning": "Bạn từng nghe câu chuyện này chưa?"
      },
      {
        "speaker": "Minh",
        "hanzi": "听过，这是一个家喻户晓的故事。",
        "pinyin": "tīng guò， zhè shì yí gè jiā yù hù xiǎo de gù shì。",
        "meaning": "Rồi, đây là câu chuyện nhà nhà đều biết."
      },
      {
        "speaker": "An",
        "hanzi": "祝英台为什么女扮男装？",
        "pinyin": "zhù yīng tái wèi shén me nǚ bàn nán zhuāng？",
        "meaning": "Vì sao Chúc Anh Đài cải trang nam?"
      },
      {
        "speaker": "Minh",
        "hanzi": "因为她想去读书。",
        "pinyin": "yīn wèi tā xiǎng qù dú shū。",
        "meaning": "Vì cô ấy muốn đi học."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu dùng 不仅……而且…… đúng.",
        "options": [
          "她不仅聪明，而且好学。",
          "不仅她去而且书。",
          "而且不学习聪明。"
        ],
        "answer": "她不仅聪明，而且好学。",
        "explanation": "不仅……而且…… nối hai đặc điểm cùng chiều của một đối tượng.",
        "id": "hanngu-q6-b26-q01"
      },
      {
        "type": "choice",
        "prompt": "“家喻户晓”的意思是什么？（jiā yù hù xiǎo）",
        "options": [
          "nhà nhà đều biết",
          "cải trang nam",
          "thông minh ham học",
          "thư viện trường, học viện"
        ],
        "answer": "nhà nhà đều biết",
        "explanation": "家喻户晓（jiā yù hù xiǎo） nghĩa là nhà nhà đều biết。",
        "id": "hanngu-q6-b26-q02"
      },
      {
        "type": "input",
        "prompt": "Viết chữ Hán cho “cải trang nam” (nǚ bàn nán zhuāng).",
        "answer": "女扮男装",
        "alternatives": [],
        "explanation": "女扮男装 (nǚ bàn nán zhuāng) nghĩa là cải trang nam。",
        "id": "hanngu-q6-b26-q03"
      }
    ],
    "summary": "Bạn vừa luyện chủ đề “梁山伯与祝英台”. Hãy nói lại một câu bằng trải nghiệm của bạn và ôn lại từ còn quên sau một ngày. Bài vẫn ở trạng thái draft-unreviewed.",
    "provenance": "Đã đối chiếu trực tiếp PDF gốc PDF_GOC/6.pdf, trang PDF 189–191; giáo án là bản bổ trợ do Hán Ngữ Lab biên soạn, không chép nguyên văn và chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; private draft, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  }
]);
