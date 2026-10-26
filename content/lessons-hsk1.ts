// HSK1 beta bundle derived from the owner's OCR-authored Quyển 1 companions. PDF/OCR originals stay private.
import { lessonSchema, type Lesson } from '../lib/domain';

export const hsk1BookLessons: Lesson[] = lessonSchema.array().parse([
  {
    "id": "hanngu-q1-b01",
    "level": 1,
    "unit": "Giáo trình Hán ngữ · Quyển 1 / Bài 1",
    "title": "Xin chào — Bắt đầu học đúng cách",
    "subtitle": "你好 · nǐ hǎo",
    "minutes": 45,
    "order": 1,
    "objectives": [
      "Chào và đáp lại bằng 你好; nhận biết hai lượt lời trong bài.",
      "Nhận diện 12 từ/cụm từ, giữ đúng chữ Hán, Pinyin và nghĩa Việt.",
      "Làm quen các nhóm thanh mẫu, vận mẫu và bốn thanh có trong bài.",
      "Phân biệt cách viết nǐ hǎo với cách đọc nối; tự ôn và giải thích lỗi trong bài tập."
    ],
    "introduction": "Đây là giáo án Hán Ngữ Lab biên soạn bổ sung theo khung bài 1, không phải bản chép nguyên văn sách. Hãy học thành ba lượt khoảng 15 phút: lượt đầu nghe lời chào và học nhóm từ đầu; lượt hai luyện các nhóm âm nhỏ rồi quay lại từ vựng; lượt ba đóng vai hội thoại và tự kiểm tra. Không cần thuộc cả bảng âm ngay trong lần đầu. Với mỗi từ, đi theo thứ tự nghe → nhìn chữ → đọc lại → nhớ nghĩa. Có thể che Pinyin bằng công tắc sẵn có khi đã quen. Chỉ dùng chữ Hán, Pinyin và tiếng Việt; phần giải thích và bài tập bổ sung đều được ghi rõ trong giáo án.",
    "vocabulary": [
      {
        "id": "hnl-q1-b01-w01",
        "hanzi": "你",
        "pinyin": "nǐ",
        "meaning": "anh, chị, bạn, ông, bà...",
        "example": "你好！",
        "examplePinyin": "Nǐ hǎo!",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-q1-b01-w02",
        "hanzi": "好",
        "pinyin": "hǎo",
        "meaning": "tốt, đẹp, hay, ngon...",
        "example": "你好！",
        "examplePinyin": "Nǐ hǎo!",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-q1-b01-w03",
        "hanzi": "你好",
        "pinyin": "nǐ hǎo",
        "meaning": "xin chào",
        "example": "你好！",
        "examplePinyin": "Nǐ hǎo!",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-q1-b01-w04",
        "hanzi": "一",
        "pinyin": "yī",
        "meaning": "một",
        "example": "我买一个苹果。",
        "examplePinyin": "wǒ mǎi yí gè píng guǒ。",
        "exampleMeaning": "Tôi mua một quả táo."
      },
      {
        "id": "hnl-q1-b01-w05",
        "hanzi": "五",
        "pinyin": "wǔ",
        "meaning": "năm",
        "example": "这里有五个人。",
        "examplePinyin": "zhè lǐ yǒu wǔ gè rén。",
        "exampleMeaning": "Ở đây có năm người."
      },
      {
        "id": "hnl-q1-b01-w06",
        "hanzi": "八",
        "pinyin": "bā",
        "meaning": "tám",
        "example": "我每天八点去学校。",
        "examplePinyin": "wǒ měi tiān bā diǎn qù xué xiào。",
        "exampleMeaning": "Mỗi ngày tôi đến trường lúc tám giờ."
      },
      {
        "id": "hnl-q1-b01-w07",
        "hanzi": "大",
        "pinyin": "dà",
        "meaning": "to, lớn",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      },
      {
        "id": "hnl-q1-b01-w08",
        "hanzi": "不",
        "pinyin": "bù",
        "meaning": "không, chẳng",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-q1-b01-w09",
        "hanzi": "口",
        "pinyin": "kǒu",
        "meaning": "miệng, nhân khẩu",
        "example": "我家有四口人。",
        "examplePinyin": "wǒ jiā yǒu sì kǒu rén。",
        "exampleMeaning": "Gia đình tôi có bốn người."
      },
      {
        "id": "hnl-q1-b01-w10",
        "hanzi": "白",
        "pinyin": "bái",
        "meaning": "trắng",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      },
      {
        "id": "hnl-q1-b01-w11",
        "hanzi": "女",
        "pinyin": "nǚ",
        "meaning": "nữ, phụ nữ",
        "example": "这是一位女老师。",
        "examplePinyin": "zhè shì yī wèi nǚ lǎo shī。",
        "exampleMeaning": "Đây là một cô giáo."
      },
      {
        "id": "hnl-q1-b01-w12",
        "hanzi": "马",
        "pinyin": "mǎ",
        "meaning": "con ngựa",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      }
    ],
    "grammar": [
      {
        "title": "1. Bắt đầu bằng một lời chào",
        "explanation": "你好 là lời chào thông dụng. 你 chỉ người đang được nói chuyện cùng; 好 có nghĩa cơ bản là tốt. Trong lời chào, hãy hiểu cả cụm 你好 là “Xin chào”, không ghép máy móc thành “bạn tốt”. Nghe một lần, nhìn chữ một lần, rồi thử nói lại mà không nhìn Pinyin. Hôm nay chưa cần học thêm các mẫu chào ngoài bài.",
        "example": "你好！",
        "translation": "Xin chào!"
      },
      {
        "title": "2. Đọc chữ Hán, Pinyin và nghĩa Việt đúng vai trò",
        "explanation": "Chữ Hán là phần cần dần nhận ra; Pinyin giúp đọc; tiếng Việt giúp hiểu. Đừng chỉ nhìn dòng tiếng Việt hoặc chỉ học thuộc mặt chữ Latin. Với mỗi từ: nhìn chữ Hán → đọc Pinyin → hiểu nghĩa → che Pinyin rồi thử nhớ. Giữ âm và nghĩa đi cùng nhau, không dùng âm Hán–Việt để thay cách đọc tiếng Trung.",
        "example": "你 · nǐ",
        "translation": "bạn; cách xưng gọi người đang nghe tùy ngữ cảnh"
      },
      {
        "title": "3. Bốn thanh: học đường đi của giọng",
        "explanation": "Thanh 1: giữ giọng cao và bằng, như bā trong 八. Thanh 2: đi từ mức vừa lên cao, như bái trong 白. Thanh 3: xuống thấp rồi có thể lên lại khi đọc rời, như mǎ trong 马. Thanh 4: từ cao xuống thấp gọn, như dà trong 大. Đây là mô tả để bắt đầu nghe; không coi bốn thanh là bốn dấu tương ứng chính xác trong tiếng Việt. Dấu thanh thuộc về âm tiết, có thể làm đổi từ.",
        "example": "八 bā · 白 bái · 马 mǎ · 大 dà",
        "translation": "tám · trắng · con ngựa · to, lớn"
      },
      {
        "title": "4. Vì sao 你好 viết nǐ hǎo nhưng nghe khác khi nói liền?",
        "explanation": "你 và 好 đều mang thanh 3 ở dạng từ điển. Khi hai thanh 3 nối liền trong 你好, âm tiết đầu đổi sang thanh 2: nghe gần “ní hǎo”. Trong bài này vẫn viết Pinyin theo thanh gốc nǐ hǎo; dòng “ní hǎo” chỉ giải thích cách đọc nối. Không cố đọc hai đường xuống–lên đầy đủ rồi ngắt giữa hai tiếng. Hãy nghe cả cụm và bắt chước.",
        "example": "你好 · nǐ hǎo → đọc nối gần ní hǎo",
        "translation": "Xin chào; biến đổi ở thanh điệu khi nói liền, không đổi nghĩa."
      },
      {
        "title": "5. Thanh mẫu: chia nhóm nhỏ để luyện",
        "explanation": "Bài làm quen b p m f / d t n l / g k h. Thanh mẫu thường nằm ở đầu âm tiết. Trước hết nghe và bắt chước từng cặp b–p, d–t, g–k: b/d/g ít hơi hơn; p/t/k bật hơi rõ hơn. Có thể đặt một mẩu giấy mỏng trước miệng để cảm nhận luồng hơi, nhưng đây chỉ là mẹo tự quan sát, không phải cách chấm phát âm. Không đọc tên chữ cái tiếng Việt thay âm tiếng Trung.",
        "example": "b p m f · d t n l · g k h",
        "translation": "Ba nhóm để luyện lần lượt; mỗi lượt chỉ tập một nhóm."
      },
      {
        "title": "6. Sáu vận mẫu đơn và cách nhận ra ü",
        "explanation": "Làm quen a o e i u ü theo đúng thứ tự trong bài. Khi tập ü, bắt đầu từ vị trí lưỡi của i, giữ lưỡi rồi làm tròn môi. Đừng thay ü bằng u: nǚ trong 女 phải giữ âm ü. Luyện chậm trước gương và so với âm mẫu; mô tả bằng chữ không thay được việc nghe. Chỉ tập đủ rõ từng âm, chưa cần tăng tốc.",
        "example": "a o e i u ü · 女 nǚ",
        "translation": "女: nữ, phụ nữ. Hai dấu chấm của ü là một phần của chữ cái."
      },
      {
        "title": "7. Vận mẫu đôi: chuyển âm liền trong một âm tiết",
        "explanation": "Bài tiếp tục với ai, ei, ao, ou. Di chuyển miệng từ âm đầu sang âm sau trong cùng một âm tiết; không chèn khoảng dừng thành hai tiếng tách rời. Luyện mỗi nhóm vài lần rồi nghỉ. Ưu tiên nghe rồi nhắc lại, không chỉ nhìn chữ để đoán âm.",
        "example": "ai · ei · ao · ou",
        "translation": "Bốn vận mẫu đôi để làm quen trong bài."
      },
      {
        "title": "8. Đọc đúng dấu trong Pinyin",
        "explanation": "Quan sát nǐ và hǎo: dấu đặt trên nguyên âm. Khi i mang dấu thanh, dấu chấm của i được bỏ để đặt dấu. Với ü, vẫn giữ hai dấu chấm như nǚ. Đừng bỏ dấu khi đang học phát âm: ni, nǐ và ní không thể dùng thay nhau để luyện thanh. Các quy tắc ghép và đánh dấu phức tạp sẽ được củng cố theo đúng tiến trình bài học.",
        "example": "nǐ · hǎo · nǚ",
        "translation": "Giữ đủ dấu để nhìn ra thanh điệu và phân biệt i/u/ü."
      },
      {
        "title": "9. Chia 12 thẻ từ thành ba lượt học",
        "explanation": "Lượt 1: 你, 好, 你好 và 一. Lượt 2: 五, 八, 大 và 不. Lượt 3: 口, 白, 女 và 马. Với các từ đang đọc riêng trong bài, giữ cách ghi yī của 一 và bù của 不; chưa tự áp dụng quy tắc biến điệu ngoài ngữ cảnh. Che Pinyin để nhớ âm, che nghĩa để nhớ ý. Hôm sau ôn lại từ đã quên trước khi học bài tiếp.",
        "example": "你 · 好 · 你好 · 一",
        "translation": "Ưu tiên lời chào trước; các nhóm còn lại luyện nhận diện và đọc từ."
      },
      {
        "title": "10. Tự luyện và nhận ra giới hạn của bài kiểm tra",
        "explanation": "Trong thẻ Hội thoại, nghe từng lượt rồi tự đóng vai người chào và người đáp. Khi sẵn sàng, chuyển sang Luyện tập. Câu hỏi giúp kiểm tra nghĩa, mặt chữ và quy tắc đã học; điểm trên web không chứng minh bạn đã phát âm đúng thanh điệu. Có thể tự ghi âm để so với âm mẫu, nhưng bài này chưa có chức năng nhận xét giọng nói tự động.",
        "example": "A: 你好！ B: 你好！",
        "translation": "A: Xin chào! B: Xin chào!"
      }
    ],
    "dialogue": [
      {
        "speaker": "Người chào",
        "hanzi": "你好！",
        "pinyin": "Nǐ hǎo!",
        "meaning": "Xin chào!"
      },
      {
        "speaker": "Người đáp",
        "hanzi": "你好！",
        "pinyin": "Nǐ hǎo!",
        "meaning": "Xin chào!"
      }
    ],
    "exercises": [
      {
        "id": "hnl-q1-b01-q01",
        "type": "choice",
        "prompt": "Bạn gặp một người và muốn chào. Chọn cụm đúng trong bài.",
        "options": [
          "你好",
          "马",
          "白"
        ],
        "answer": "你好",
        "explanation": "你好 (nǐ hǎo) là lời chào. 白 là trắng; 马 là con ngựa."
      },
      {
        "id": "hnl-q1-b01-q02",
        "type": "choice",
        "prompt": "Pinyin thanh gốc của 你 là gì?",
        "options": [
          "ní",
          "nǐ",
          "nī"
        ],
        "answer": "nǐ",
        "explanation": "你 mang thanh 3 khi đọc riêng; khi nối với 好 có biến điệu ở tiếng đầu."
      },
      {
        "id": "hnl-q1-b01-q03",
        "type": "choice",
        "prompt": "Nghĩa của 好 trong lời chào 你好 nên hiểu thế nào?",
        "options": [
          "Tên của người đang nghe",
          "Luôn dịch từng chữ thành bạn tốt",
          "Hiểu cả cụm là Xin chào"
        ],
        "answer": "Hiểu cả cụm là Xin chào",
        "explanation": "Nghĩa của cụm trong ngữ cảnh quan trọng hơn cách ghép từng nghĩa rời."
      },
      {
        "id": "hnl-q1-b01-q04",
        "type": "choice",
        "prompt": "Trong bā của 八, thanh 1 đi như thế nào?",
        "options": [
          "Cao và bằng",
          "Cao rồi đi xuống",
          "Đi lên"
        ],
        "answer": "Cao và bằng",
        "explanation": "Thanh 1 giữ mức cao và tương đối bằng; đừng đổi thành dấu tiếng Việt theo thói quen."
      },
      {
        "id": "hnl-q1-b01-q05",
        "type": "choice",
        "prompt": "Khi nói liền 你好, tiếng đầu thường đọc gần dạng nào?",
        "options": [
          "nǐ đầy đủ rồi ngắt lâu",
          "ní",
          "nì"
        ],
        "answer": "ní",
        "explanation": "Hai thanh 3 liền nhau trong cụm này khiến tiếng đầu đổi sang thanh 2; dạng Pinyin từ điển vẫn là nǐ hǎo."
      },
      {
        "id": "hnl-q1-b01-q06",
        "type": "choice",
        "prompt": "Khi luyện b và p, điểm cần chú ý trong bài là gì?",
        "options": [
          "Mức bật hơi",
          "Bắt buộc đọc theo tên chữ cái tiếng Việt",
          "Chỉ cần thay đổi âm lượng"
        ],
        "answer": "Mức bật hơi",
        "explanation": "b ít hơi hơn; p bật hơi rõ. Tăng âm lượng không thay việc đặt miệng và điều khiển hơi."
      },
      {
        "id": "hnl-q1-b01-q07",
        "type": "choice",
        "prompt": "Để bắt đầu tập ü, nên làm gì?",
        "options": [
          "Đọc thành u và bỏ hai chấm",
          "Bỏ luôn dấu thanh",
          "Giữ vị trí lưỡi của i rồi làm tròn môi"
        ],
        "answer": "Giữ vị trí lưỡi của i rồi làm tròn môi",
        "explanation": "ü khác u; nǚ cần giữ âm ü và dấu thanh."
      },
      {
        "id": "hnl-q1-b01-q08",
        "type": "choice",
        "prompt": "Dòng nào giữ đúng Pinyin của 女 trong bài?",
        "options": [
          "nu",
          "nǔ",
          "nǚ"
        ],
        "answer": "nǚ",
        "explanation": "女 đọc nǚ; hai chấm của ü và dấu thanh đều cần được giữ."
      },
      {
        "id": "hnl-q1-b01-q09",
        "type": "choice",
        "prompt": "Từ nào nghĩa là “tám”?",
        "options": [
          "一",
          "五",
          "八"
        ],
        "answer": "八",
        "explanation": "八 (bā) là tám; 五 (wǔ) là năm; 一 (yī) là một khi đọc riêng."
      },
      {
        "id": "hnl-q1-b01-q10",
        "type": "choice",
        "prompt": "口 có những nghĩa nào được học trong bài?",
        "options": [
          "miệng, nhân khẩu",
          "trắng",
          "to, lớn"
        ],
        "answer": "miệng, nhân khẩu",
        "explanation": "口 (kǒu) được ghi trong bài với nghĩa miệng, nhân khẩu; cách dùng cụ thể sẽ học qua ngữ cảnh."
      },
      {
        "id": "hnl-q1-b01-q11",
        "type": "input",
        "prompt": "Viết chữ Hán cho “xin chào” (nǐ hǎo). Nếu chưa gõ được tiếng Trung, bạn có thể sao chép chữ từ thẻ từ rồi đọc lại.",
        "answer": "你好",
        "alternatives": [],
        "explanation": "你好 (nǐ hǎo): xin chào. Đối chiếu mặt chữ và dấu Pinyin sau khi làm."
      },
      {
        "id": "hnl-q1-b01-q12",
        "type": "input",
        "prompt": "Viết chữ Hán cho “con ngựa” (mǎ). Nếu chưa gõ được tiếng Trung, bạn có thể sao chép chữ từ thẻ từ rồi đọc lại.",
        "answer": "马",
        "alternatives": [],
        "explanation": "马 (mǎ): con ngựa. Đối chiếu mặt chữ và dấu Pinyin sau khi làm."
      }
    ],
    "summary": "Bạn vừa luyện lời chào 你好, 12 từ/cụm từ và cách bắt đầu học âm. Trước khi sang bài tiếp, thử chào và đáp mà không nhìn Pinyin, tự nhớ lại nghĩa của các thẻ từ, rồi xem lời giải những câu còn nhầm. Ngày mai dành vài phút ôn lại. Điểm làm bài chỉ phản ánh câu trả lời trên web, chưa chấm được phát âm hoặc nét viết. Giáo án vẫn đang chờ duyệt chuyên môn độc lập.",
    "provenance": "Giáo án Hán Ngữ Lab tự biên soạn cho người Việt mới học, tham chiếu khung quyển 1/bài 1; giải thích, lộ trình luyện và bài tập là phần bổ sung. Chưa được người kiểm duyệt độc lập. Không xuất bản PDF/scan/tiếng Anh.",
    "standard": "HNL-TEACHER-DRAFT-2026; trình tự theo sách, chưa chứng nhận ánh xạ đầy đủ HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b01-ung-dung",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 1",
    "title": "Chào một người và tự tin đáp lại",
    "subtitle": "你好！",
    "minutes": 25,
    "order": 2,
    "objectives": [
      "Dùng mẫu “你好！” trong tình huống phù hợp.",
      "Nhận diện 13 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 你好: học cả cụm trong tình huống / Nhìn Pinyin nhưng dần nhớ chữ.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: chào một người và tự tin đáp lại. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 你好: học cả cụm trong tình huống.",
    "vocabulary": [
      {
        "id": "hnl-lex-2e1299ace18156b8",
        "hanzi": "你",
        "pinyin": "nǐ",
        "meaning": "bạn",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-42a4a3e5cc6ec269",
        "hanzi": "好",
        "pinyin": "hǎo",
        "meaning": "tốt/khỏe",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-b5944c5da6ba78cb",
        "hanzi": "你好",
        "pinyin": "nǐ hǎo",
        "meaning": "xin chào",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-85ba52136a2616d0",
        "hanzi": "我",
        "pinyin": "wǒ",
        "meaning": "tôi",
        "example": "我买一个苹果。",
        "examplePinyin": "wǒ mǎi yí gè píng guǒ。",
        "exampleMeaning": "Tôi mua một quả táo."
      },
      {
        "id": "hnl-lex-d25a2d02ac2716c9",
        "hanzi": "一",
        "pinyin": "yī",
        "meaning": "một",
        "example": "我买一个苹果。",
        "examplePinyin": "wǒ mǎi yí gè píng guǒ。",
        "exampleMeaning": "Tôi mua một quả táo."
      },
      {
        "id": "hnl-lex-175ec9124f2b5ccb",
        "hanzi": "五",
        "pinyin": "wǔ",
        "meaning": "năm",
        "example": "这里有五个人。",
        "examplePinyin": "zhè lǐ yǒu wǔ gè rén。",
        "exampleMeaning": "Ở đây có năm người."
      },
      {
        "id": "hnl-lex-0d859dd4ad63c620",
        "hanzi": "八",
        "pinyin": "bā",
        "meaning": "tám",
        "example": "我每天八点去学校。",
        "examplePinyin": "wǒ měi tiān bā diǎn qù xué xiào。",
        "exampleMeaning": "Mỗi ngày tôi đến trường lúc tám giờ."
      },
      {
        "id": "hnl-lex-10c9411e20eea6ef",
        "hanzi": "大",
        "pinyin": "dà",
        "meaning": "to/lớn",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      },
      {
        "id": "hnl-lex-4c6cd0153a3030d1",
        "hanzi": "不",
        "pinyin": "bù",
        "meaning": "không",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-b4e9f3c65706a337",
        "hanzi": "口",
        "pinyin": "kǒu",
        "meaning": "miệng/nhân khẩu",
        "example": "我家有四口人。",
        "examplePinyin": "wǒ jiā yǒu sì kǒu rén。",
        "exampleMeaning": "Gia đình tôi có bốn người."
      },
      {
        "id": "hnl-lex-c296b97217428c0c",
        "hanzi": "白",
        "pinyin": "bái",
        "meaning": "trắng",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      },
      {
        "id": "hnl-lex-89886f6a86f598e5",
        "hanzi": "女",
        "pinyin": "nǚ",
        "meaning": "nữ",
        "example": "这是一位女老师。",
        "examplePinyin": "zhè shì yī wèi nǚ lǎo shī。",
        "exampleMeaning": "Đây là một cô giáo."
      },
      {
        "id": "hnl-lex-b9537b6760df16a2",
        "hanzi": "马",
        "pinyin": "mǎ",
        "meaning": "con ngựa",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      }
    ],
    "grammar": [
      {
        "title": "你好: học cả cụm trong tình huống",
        "explanation": "Khi gặp một người, dùng 你好 rồi nghe người ấy đáp lại. Hiểu cả cụm là lời chào; không ghép máy móc từng chữ thành “bạn tốt”. Hãy nói đủ nghe và giữ giọng tự nhiên, chưa cần học thêm lời chào khác trong lượt đầu.",
        "example": "你好！",
        "translation": "Xin chào!"
      },
      {
        "title": "Nhìn Pinyin nhưng dần nhớ chữ",
        "explanation": "Đọc nǐ và hǎo riêng để nhận dấu thanh. Khi nói liền 你好, thanh đầu chuyển gần thanh 2; cách viết theo thanh gốc vẫn là nǐ hǎo. Nghe cả cụm rồi nhắc lại, sau đó che Pinyin để nhận ra hai chữ.",
        "example": "你好。",
        "translation": "Xin chào."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你好！",
        "pinyin": "nǐ hǎo！",
        "meaning": "Xin chào!"
      },
      {
        "speaker": "Minh",
        "hanzi": "你好！",
        "pinyin": "nǐ hǎo！",
        "meaning": "Xin chào!"
      },
      {
        "speaker": "An",
        "hanzi": "你好。",
        "pinyin": "nǐ hǎo。",
        "meaning": "Xin chào."
      },
      {
        "speaker": "Minh",
        "hanzi": "你好。",
        "pinyin": "nǐ hǎo。",
        "meaning": "Xin chào."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn vừa gặp một người trong lớp. Nên nói gì trước?",
        "options": [
          "白",
          "马",
          "你好！"
        ],
        "answer": "你好！",
        "explanation": "你好 là lời chào; hai từ còn lại chỉ sự vật hoặc màu sắc.",
        "id": "hanngu-q1-b01-ung-dung-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "好",
          "你"
        ],
        "answer": "你好",
        "explanation": "Câu hoàn chỉnh: 你好。 Khi gặp một người, dùng 你好 rồi nghe người ấy đáp lại. Hiểu cả cụm là lời chào; không ghép máy móc từng chữ thành “bạn tốt”. Hãy nói đủ nghe và giữ giọng tự nhiên, chưa cần học thêm lời chào khác trong lượt đầu.",
        "id": "hanngu-q1-b01-ung-dung-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “五” có nghĩa nào?",
        "options": [
          "trắng",
          "con ngựa",
          "năm",
          "tốt/khỏe"
        ],
        "answer": "năm",
        "explanation": "五 (wǔ): năm. Ví dụ: 这里有五个人。 — Ở đây có năm người.",
        "id": "hanngu-q1-b01-ung-dung-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “口” có nghĩa nào?",
        "options": [
          "miệng/nhân khẩu",
          "tôi",
          "con ngựa",
          "không"
        ],
        "answer": "miệng/nhân khẩu",
        "explanation": "口 (kǒu): miệng/nhân khẩu. Ví dụ: 我家有四口人。 — Gia đình tôi có bốn người.",
        "id": "hanngu-q1-b01-ung-dung-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “你好” có nghĩa nào?",
        "options": [
          "tôi",
          "xin chào",
          "bạn",
          "miệng/nhân khẩu"
        ],
        "answer": "xin chào",
        "explanation": "你好 (nǐ hǎo): xin chào. Ví dụ: 你好！ — Xin chào!",
        "id": "hanngu-q1-b01-ung-dung-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “我” có nghĩa nào?",
        "options": [
          "năm",
          "tôi",
          "to/lớn",
          "tám"
        ],
        "answer": "tôi",
        "explanation": "我 (wǒ): tôi. Ví dụ: 我买一个苹果。 — Tôi mua một quả táo.",
        "id": "hanngu-q1-b01-ung-dung-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “to/lớn” (dà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "大",
        "alternatives": [],
        "explanation": "大 (dà) nghĩa là to/lớn. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b01-ung-dung-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bạn” (nǐ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "你",
        "alternatives": [],
        "explanation": "你 (nǐ) nghĩa là bạn. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b01-ung-dung-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Chào một người và tự tin đáp lại”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Nhìn Pinyin nhưng dần nhớ chữ”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 1, mốc PDF 19. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b02",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 2",
    "title": "Tiếng Trung không khó lắm: hỏi và đáp ngắn",
    "subtitle": "你忙吗？",
    "minutes": 25,
    "order": 3,
    "objectives": [
      "Dùng mẫu “你忙吗？” trong tình huống phù hợp.",
      "Nhận diện 11 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Câu hỏi với 吗 / 不太: phủ định ở mức vừa.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: tiếng trung không khó lắm: hỏi và đáp ngắn. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Câu hỏi với 吗.",
    "vocabulary": [
      {
        "id": "hnl-lex-79bd6ae44ef592d2",
        "hanzi": "汉语",
        "pinyin": "hàn yǔ",
        "meaning": "tiếng Hán/tiếng Trung",
        "example": "汉语难吗？",
        "examplePinyin": "hàn yǔ nán ma？",
        "exampleMeaning": "Tiếng Trung có khó không?"
      },
      {
        "id": "hnl-lex-62f218a6663fa49a",
        "hanzi": "难",
        "pinyin": "nán",
        "meaning": "khó",
        "example": "汉语难吗？",
        "examplePinyin": "hàn yǔ nán ma？",
        "exampleMeaning": "Tiếng Trung có khó không?"
      },
      {
        "id": "hnl-lex-5b9968921dcebf9e",
        "hanzi": "太",
        "pinyin": "tài",
        "meaning": "quá",
        "example": "我不太忙。",
        "examplePinyin": "wǒ bù tài máng。",
        "exampleMeaning": "Tôi không bận lắm."
      },
      {
        "id": "hnl-lex-993dc3df19a981fe",
        "hanzi": "忙",
        "pinyin": "máng",
        "meaning": "bận",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-d8a783f7aebf128a",
        "hanzi": "很",
        "pinyin": "hěn",
        "meaning": "rất",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      },
      {
        "id": "hnl-lex-9a0051dd27c2c8cb",
        "hanzi": "吗",
        "pinyin": "ma",
        "meaning": "trợ từ hỏi",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-e1a7d74c07990d7e",
        "hanzi": "也",
        "pinyin": "yě",
        "meaning": "cũng",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-7b31265221813dda",
        "hanzi": "不太",
        "pinyin": "bù tài",
        "meaning": "không quá/không lắm",
        "example": "我不太忙。",
        "examplePinyin": "wǒ bù tài máng。",
        "exampleMeaning": "Tôi không bận lắm."
      },
      {
        "id": "hnl-lex-0aefbd9832c036ef",
        "hanzi": "容易",
        "pinyin": "róng yì",
        "meaning": "dễ",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-1b8dad60e3c077fc",
        "hanzi": "今天",
        "pinyin": "jīn tiān",
        "meaning": "hôm nay",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-2e8c07ecbb2b01b4",
        "hanzi": "学习",
        "pinyin": "xué xí",
        "meaning": "học tập",
        "example": "我在语言大学学习。",
        "examplePinyin": "wǒ zài yǔ yán dà xué xué xí。",
        "exampleMeaning": "Tôi học ở đại học ngôn ngữ."
      }
    ],
    "grammar": [
      {
        "title": "Câu hỏi với 吗",
        "explanation": "Đặt 吗 cuối một câu trần thuật để hỏi có hay không. Câu trả lời có thể lặp lại từ mang nội dung chính: hỏi 忙吗 thì đáp 很忙 hoặc 不忙. Không cần dịch 吗 thành một từ riêng đứng giữa câu tiếng Việt.",
        "example": "你忙吗？",
        "translation": "Bạn có bận không?"
      },
      {
        "title": "不太: phủ định ở mức vừa",
        "explanation": "不太难 nghĩa là không khó lắm, nhẹ hơn khẳng định hoàn toàn không khó. Đừng bỏ 太 nếu muốn giữ sắc thái này. Trong câu tính từ, không tự thêm 是 chỉ vì tiếng Việt thường dùng “là”.",
        "example": "汉语不太难。",
        "translation": "Tiếng Trung không khó lắm."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你今天忙吗？",
        "pinyin": "nǐ jīn tiān máng ma？",
        "meaning": "Hôm nay bạn có bận không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我不太忙。",
        "pinyin": "wǒ bù tài máng。",
        "meaning": "Tôi không bận lắm."
      },
      {
        "speaker": "An",
        "hanzi": "汉语难吗？",
        "pinyin": "hàn yǔ nán ma？",
        "meaning": "Tiếng Trung có khó không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不太难。",
        "pinyin": "bù tài nán。",
        "meaning": "Không khó lắm."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn câu diễn đạt “Tiếng Trung không khó lắm”.",
        "options": [
          "汉语是难。",
          "汉语太不。",
          "汉语不太难。"
        ],
        "answer": "汉语不太难。",
        "explanation": "Giữ đúng cụm 不太 đứng trước tính từ 难.",
        "id": "hanngu-q1-b02-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "不太",
          "汉语",
          "难"
        ],
        "answer": "汉语不太难",
        "explanation": "Câu hoàn chỉnh: 汉语不太难。 Đặt 吗 cuối một câu trần thuật để hỏi có hay không. Câu trả lời có thể lặp lại từ mang nội dung chính: hỏi 忙吗 thì đáp 很忙 hoặc 不忙. Không cần dịch 吗 thành một từ riêng đứng giữa câu tiếng Việt.",
        "id": "hanngu-q1-b02-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “吗” có nghĩa nào?",
        "options": [
          "cũng",
          "dễ",
          "trợ từ hỏi",
          "tiếng Hán/tiếng Trung"
        ],
        "answer": "trợ từ hỏi",
        "explanation": "吗 (ma): trợ từ hỏi. Ví dụ: 你今天忙吗？ — Hôm nay bạn có bận không?",
        "id": "hanngu-q1-b02-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “忙” có nghĩa nào?",
        "options": [
          "bận",
          "khó",
          "tiếng Hán/tiếng Trung",
          "học tập"
        ],
        "answer": "bận",
        "explanation": "忙 (máng): bận. Ví dụ: 你今天忙吗？ — Hôm nay bạn có bận không?",
        "id": "hanngu-q1-b02-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “学习” có nghĩa nào?",
        "options": [
          "quá",
          "trợ từ hỏi",
          "học tập",
          "dễ"
        ],
        "answer": "học tập",
        "explanation": "学习 (xué xí): học tập. Ví dụ: 我在语言大学学习。 — Tôi học ở đại học ngôn ngữ.",
        "id": "hanngu-q1-b02-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “汉语” có nghĩa nào?",
        "options": [
          "không quá/không lắm",
          "bận",
          "khó",
          "tiếng Hán/tiếng Trung"
        ],
        "answer": "tiếng Hán/tiếng Trung",
        "explanation": "汉语 (hàn yǔ): tiếng Hán/tiếng Trung. Ví dụ: 汉语难吗？ — Tiếng Trung có khó không?",
        "id": "hanngu-q1-b02-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “hôm nay” (jīn tiān). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "今天",
        "alternatives": [],
        "explanation": "今天 (jīn tiān) nghĩa là hôm nay. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b02-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “không quá/không lắm” (bù tài). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "不太",
        "alternatives": [],
        "explanation": "不太 (bù tài) nghĩa là không quá/không lắm. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b02-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Tiếng Trung không khó lắm: hỏi và đáp ngắn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “不太: phủ định ở mức vừa”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 2, mốc PDF 31. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b03",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 3",
    "title": "Hẹn ngày mai: nói việc đi và việc học",
    "subtitle": "我学汉语。",
    "minutes": 25,
    "order": 4,
    "objectives": [
      "Dùng mẫu “我学汉语。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: Chủ ngữ + động từ + đối tượng / Động từ 去 và lời hẹn 明天见.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: hẹn ngày mai: nói việc đi và việc học. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: Chủ ngữ + động từ + đối tượng.",
    "vocabulary": [
      {
        "id": "hnl-lex-242103860e5507c8",
        "hanzi": "明天",
        "pinyin": "míng tiān",
        "meaning": "ngày mai",
        "example": "你明天学习汉语吗？",
        "examplePinyin": "nǐ míng tiān xué xí hàn yǔ ma？",
        "exampleMeaning": "Ngày mai bạn học tiếng Trung phải không?"
      },
      {
        "id": "hnl-lex-f5580a52759f5f5d",
        "hanzi": "见",
        "pinyin": "jiàn",
        "meaning": "gặp",
        "example": "对，明天见！",
        "examplePinyin": "duì， míng tiān jiàn！",
        "exampleMeaning": "Đúng, ngày mai gặp lại!"
      },
      {
        "id": "hnl-lex-6a24fb8f15777044",
        "hanzi": "去",
        "pinyin": "qù",
        "meaning": "đi",
        "example": "你去邮局吗？",
        "examplePinyin": "nǐ qù yóu jú ma？",
        "exampleMeaning": "Bạn đi bưu điện phải không?"
      },
      {
        "id": "hnl-lex-3e634f00a8887c57",
        "hanzi": "北京",
        "pinyin": "běi jīng",
        "meaning": "Bắc Kinh",
        "example": "我明天去北京，再见！",
        "examplePinyin": "wǒ míng tiān qù běi jīng， zài jiàn！",
        "exampleMeaning": "Ngày mai tôi đi Bắc Kinh, tạm biệt!"
      },
      {
        "id": "hnl-lex-be3ef3ecc4a3d05c",
        "hanzi": "邮局",
        "pinyin": "yóu jú",
        "meaning": "bưu điện",
        "example": "你去邮局吗？",
        "examplePinyin": "nǐ qù yóu jú ma？",
        "exampleMeaning": "Bạn đi bưu điện phải không?"
      },
      {
        "id": "hnl-lex-ddb7c4648be06705",
        "hanzi": "寄",
        "pinyin": "jì",
        "meaning": "gửi",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-cf97937e48a399d5",
        "hanzi": "信",
        "pinyin": "xìn",
        "meaning": "thư",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-f6ad57b9c3214a6b",
        "hanzi": "对",
        "pinyin": "duì",
        "meaning": "đúng",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-ab41756b732f0bc7",
        "hanzi": "再见",
        "pinyin": "zài jiàn",
        "meaning": "tạm biệt",
        "example": "我明天去北京，再见！",
        "examplePinyin": "wǒ míng tiān qù běi jīng， zài jiàn！",
        "exampleMeaning": "Ngày mai tôi đi Bắc Kinh, tạm biệt!"
      },
      {
        "id": "hnl-lex-45f449b50029a827",
        "hanzi": "学",
        "pinyin": "xué",
        "meaning": "học",
        "example": "你明天学习汉语吗？",
        "examplePinyin": "nǐ míng tiān xué xí hàn yǔ ma？",
        "exampleMeaning": "Ngày mai bạn học tiếng Trung phải không?"
      },
      {
        "id": "hnl-lex-0153c35493518fa4",
        "hanzi": "说",
        "pinyin": "shuō",
        "meaning": "nói",
        "example": "他说中文。",
        "examplePinyin": "tā shuō zhōng wén。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung."
      },
      {
        "id": "hnl-lex-b6573dbba46a7dd5",
        "hanzi": "中文",
        "pinyin": "zhōng wén",
        "meaning": "tiếng Trung",
        "example": "他说中文。",
        "examplePinyin": "tā shuō zhōng wén。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung."
      }
    ],
    "grammar": [
      {
        "title": "Chủ ngữ + động từ + đối tượng",
        "explanation": "我学汉语 nêu ai học và học gì. Giữ động từ 学 trước đối tượng 汉语; không đảo theo cách bạn muốn nhấn trong tiếng Việt. Đọc thành một cụm nghĩa trước khi đọc từng chữ.",
        "example": "我学汉语。",
        "translation": "Tôi học tiếng Trung."
      },
      {
        "title": "Động từ 去 và lời hẹn 明天见",
        "explanation": "去 thường đi trước nơi đến. 明天见 là lời hẹn gặp lại vào ngày mai, nên chỉ dùng khi thời gian ấy phù hợp. Không dùng nó để thay mọi lời tạm biệt bất kể hoàn cảnh.",
        "example": "明天见！",
        "translation": "Ngày mai gặp lại!"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你去邮局吗？",
        "pinyin": "nǐ qù yóu jú ma？",
        "meaning": "Bạn đi bưu điện phải không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "对，我去寄信。",
        "pinyin": "duì， wǒ qù jì xìn。",
        "meaning": "Đúng, tôi đi gửi thư."
      },
      {
        "speaker": "An",
        "hanzi": "你明天学习汉语吗？",
        "pinyin": "nǐ míng tiān xué xí hàn yǔ ma？",
        "meaning": "Ngày mai bạn học tiếng Trung phải không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "对，明天见！",
        "pinyin": "duì， míng tiān jiàn！",
        "meaning": "Đúng, ngày mai gặp lại!"
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Hai bạn hẹn gặp lại vào ngày mai. Cụm nào phù hợp?",
        "options": [
          "明天见！",
          "我去北京。",
          "你说中文。"
        ],
        "answer": "明天见！",
        "explanation": "明天 nêu ngày mai; 见 mang ý gặp lại trong lời hẹn.",
        "id": "hanngu-q1-b03-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我",
          "邮局",
          "去"
        ],
        "answer": "我去邮局",
        "explanation": "Câu hoàn chỉnh: 我去邮局。 我学汉语 nêu ai học và học gì. Giữ động từ 学 trước đối tượng 汉语; không đảo theo cách bạn muốn nhấn trong tiếng Việt. Đọc thành một cụm nghĩa trước khi đọc từng chữ.",
        "id": "hanngu-q1-b03-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “见” có nghĩa nào?",
        "options": [
          "nói",
          "Bắc Kinh",
          "gặp",
          "đúng"
        ],
        "answer": "gặp",
        "explanation": "见 (jiàn): gặp. Ví dụ: 对，明天见！ — Đúng, ngày mai gặp lại!",
        "id": "hanngu-q1-b03-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “邮局” có nghĩa nào?",
        "options": [
          "đúng",
          "tiếng Trung",
          "học",
          "bưu điện"
        ],
        "answer": "bưu điện",
        "explanation": "邮局 (yóu jú): bưu điện. Ví dụ: 你去邮局吗？ — Bạn đi bưu điện phải không?",
        "id": "hanngu-q1-b03-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “再见” có nghĩa nào?",
        "options": [
          "đi",
          "ngày mai",
          "tạm biệt",
          "thư"
        ],
        "answer": "tạm biệt",
        "explanation": "再见 (zài jiàn): tạm biệt. Ví dụ: 我明天去北京，再见！ — Ngày mai tôi đi Bắc Kinh, tạm biệt!",
        "id": "hanngu-q1-b03-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “北京” có nghĩa nào?",
        "options": [
          "tiếng Trung",
          "học",
          "nói",
          "Bắc Kinh"
        ],
        "answer": "Bắc Kinh",
        "explanation": "北京 (běi jīng): Bắc Kinh. Ví dụ: 我明天去北京，再见！ — Ngày mai tôi đi Bắc Kinh, tạm biệt!",
        "id": "hanngu-q1-b03-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ngày mai” (míng tiān). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "明天",
        "alternatives": [],
        "explanation": "明天 (míng tiān) nghĩa là ngày mai. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b03-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đúng” (duì). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "对",
        "alternatives": [],
        "explanation": "对 (duì) nghĩa là đúng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b03-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Hẹn ngày mai: nói việc đi và việc học”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Động từ 去 và lời hẹn 明天见”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 3, mốc PDF 37. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b04",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 4",
    "title": "Bạn đi đâu: hỏi nơi đến và thứ trong tuần",
    "subtitle": "你去哪儿？",
    "minutes": 25,
    "order": 5,
    "objectives": [
      "Dùng mẫu “你去哪儿？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 哪儿 ở vị trí nơi cần hỏi / 今天星期几: hỏi thứ, không hỏi ngày tháng.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn đi đâu: hỏi nơi đến và thứ trong tuần. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 哪儿 ở vị trí nơi cần hỏi.",
    "vocabulary": [
      {
        "id": "hnl-lex-004eaa30b401b4ef",
        "hanzi": "哪儿",
        "pinyin": "nǎr",
        "meaning": "đâu",
        "example": "你去哪儿？",
        "examplePinyin": "nǐ qù nǎr？",
        "exampleMeaning": "Bạn đi đâu?"
      },
      {
        "id": "hnl-lex-1b8dad60e3c077fc",
        "hanzi": "今天",
        "pinyin": "jīn tiān",
        "meaning": "hôm nay",
        "example": "今天星期几？",
        "examplePinyin": "jīn tiān xīng qī jǐ？",
        "exampleMeaning": "Hôm nay là thứ mấy?"
      },
      {
        "id": "hnl-lex-da747b39f8775bb5",
        "hanzi": "星期",
        "pinyin": "xīng qī",
        "meaning": "tuần/thứ",
        "example": "今天星期几？",
        "examplePinyin": "jīn tiān xīng qī jǐ？",
        "exampleMeaning": "Hôm nay là thứ mấy?"
      },
      {
        "id": "hnl-lex-90103c3de8aab47e",
        "hanzi": "二",
        "pinyin": "èr",
        "meaning": "hai",
        "example": "今天星期二。",
        "examplePinyin": "jīn tiān xīng qī èr。",
        "exampleMeaning": "Hôm nay là thứ ba."
      },
      {
        "id": "hnl-lex-59ddeaf7d25efb0e",
        "hanzi": "三",
        "pinyin": "sān",
        "meaning": "ba",
        "example": "今天星期三，明天星期四。",
        "examplePinyin": "jīn tiān xīng qī sān， míng tiān xīng qī sì。",
        "exampleMeaning": "Hôm nay thứ tư, ngày mai thứ năm."
      },
      {
        "id": "hnl-lex-ae344d8173ef545b",
        "hanzi": "四",
        "pinyin": "sì",
        "meaning": "bốn",
        "example": "我家有四口人。",
        "examplePinyin": "wǒ jiā yǒu sì kǒu rén。",
        "exampleMeaning": "Gia đình tôi có bốn người."
      },
      {
        "id": "hnl-lex-503f7ef5674d7229",
        "hanzi": "六",
        "pinyin": "liù",
        "meaning": "sáu",
        "example": "我星期六回家，星期天去学校。",
        "examplePinyin": "wǒ xīng qī liù huí jiā， xīng qī tiān qù xué xiào。",
        "exampleMeaning": "Tôi về nhà thứ bảy, chủ nhật đến trường."
      },
      {
        "id": "hnl-lex-9a606c9ddd5eaeb7",
        "hanzi": "七",
        "pinyin": "qī",
        "meaning": "bảy",
        "example": "我七点回家。",
        "examplePinyin": "wǒ qī diǎn huí jiā。",
        "exampleMeaning": "Tôi về nhà lúc bảy giờ."
      },
      {
        "id": "hnl-lex-8592d9752f9a540b",
        "hanzi": "天",
        "pinyin": "tiān",
        "meaning": "ngày",
        "example": "今天星期几？",
        "examplePinyin": "jīn tiān xīng qī jǐ？",
        "exampleMeaning": "Hôm nay là thứ mấy?"
      },
      {
        "id": "hnl-lex-53f06c6176af5733",
        "hanzi": "学校",
        "pinyin": "xué xiào",
        "meaning": "trường học",
        "example": "我去学校。",
        "examplePinyin": "wǒ qù xué xiào。",
        "exampleMeaning": "Tôi đến trường."
      },
      {
        "id": "hnl-lex-a1002a3455a24ab5",
        "hanzi": "回",
        "pinyin": "huí",
        "meaning": "về",
        "example": "我星期六回家，星期天去学校。",
        "examplePinyin": "wǒ xīng qī liù huí jiā， xīng qī tiān qù xué xiào。",
        "exampleMeaning": "Tôi về nhà thứ bảy, chủ nhật đến trường."
      },
      {
        "id": "hnl-lex-586a4a7eb69a55c8",
        "hanzi": "家",
        "pinyin": "jiā",
        "meaning": "nhà",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      }
    ],
    "grammar": [
      {
        "title": "哪儿 ở vị trí nơi cần hỏi",
        "explanation": "Trong 你去哪儿, 哪儿 thay phần nơi đến sau 去. Đừng đưa tất cả từ hỏi lên đầu như một khuôn cố định. Khi trả lời, thay 哪儿 bằng nơi cụ thể.",
        "example": "你去哪儿？",
        "translation": "Bạn đi đâu?"
      },
      {
        "title": "今天星期几: hỏi thứ, không hỏi ngày tháng",
        "explanation": "星期几 hỏi thứ trong tuần. 星期一 đến 星期六 đi với số; chủ nhật thường dùng 星期天 hoặc 星期日. Bài này tập trả lời ngắn, chưa cần thêm ngày tháng để làm câu dài.",
        "example": "今天星期二。",
        "translation": "Hôm nay là thứ ba."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "今天星期几？",
        "pinyin": "jīn tiān xīng qī jǐ？",
        "meaning": "Hôm nay là thứ mấy?"
      },
      {
        "speaker": "Minh",
        "hanzi": "今天星期二。",
        "pinyin": "jīn tiān xīng qī èr。",
        "meaning": "Hôm nay là thứ ba."
      },
      {
        "speaker": "An",
        "hanzi": "你去哪儿？",
        "pinyin": "nǐ qù nǎr？",
        "meaning": "Bạn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我去学校。",
        "pinyin": "wǒ qù xué xiào。",
        "meaning": "Tôi đến trường."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu hỏi 你去哪儿 cần thông tin gì?",
        "options": [
          "Nơi đến",
          "Tuổi của bạn",
          "Giá tiền"
        ],
        "answer": "Nơi đến",
        "explanation": "哪儿 ở sau 去 hỏi người ấy đi đến đâu.",
        "id": "hanngu-q1-b04-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "学校",
          "去",
          "我"
        ],
        "answer": "我去学校",
        "explanation": "Câu hoàn chỉnh: 我去学校。 Trong 你去哪儿, 哪儿 thay phần nơi đến sau 去. Đừng đưa tất cả từ hỏi lên đầu như một khuôn cố định. Khi trả lời, thay 哪儿 bằng nơi cụ thể.",
        "id": "hanngu-q1-b04-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “四” có nghĩa nào?",
        "options": [
          "ngày",
          "trường học",
          "đâu",
          "bốn"
        ],
        "answer": "bốn",
        "explanation": "四 (sì): bốn. Ví dụ: 我家有四口人。 — Gia đình tôi có bốn người.",
        "id": "hanngu-q1-b04-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “星期” có nghĩa nào?",
        "options": [
          "tuần/thứ",
          "hôm nay",
          "hai",
          "bốn"
        ],
        "answer": "tuần/thứ",
        "explanation": "星期 (xīng qī): tuần/thứ. Ví dụ: 今天星期几？ — Hôm nay là thứ mấy?",
        "id": "hanngu-q1-b04-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “七” có nghĩa nào?",
        "options": [
          "hai",
          "ba",
          "sáu",
          "bảy"
        ],
        "answer": "bảy",
        "explanation": "七 (qī): bảy. Ví dụ: 我七点回家。 — Tôi về nhà lúc bảy giờ.",
        "id": "hanngu-q1-b04-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “天” có nghĩa nào?",
        "options": [
          "ba",
          "tuần/thứ",
          "ngày",
          "trường học"
        ],
        "answer": "ngày",
        "explanation": "天 (tiān): ngày. Ví dụ: 今天星期几？ — Hôm nay là thứ mấy?",
        "id": "hanngu-q1-b04-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “hai” (èr). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "二",
        "alternatives": [],
        "explanation": "二 (èr) nghĩa là hai. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b04-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “về” (huí). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "回",
        "alternatives": [],
        "explanation": "回 (huí) nghĩa là về. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b04-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn đi đâu: hỏi nơi đến và thứ trong tuần”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “今天星期几: hỏi thứ, không hỏi ngày tháng”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 4, mốc PDF 46. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b05",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 5",
    "title": "Giới thiệu người quen và mời lịch sự",
    "subtitle": "这是我的老师。",
    "minutes": 25,
    "order": 6,
    "objectives": [
      "Dùng mẫu “这是我的老师。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 这 + 是 + danh từ / 请 để mời, 您 để xưng hô kính trọng.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: giới thiệu người quen và mời lịch sự. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 这 + 是 + danh từ.",
    "vocabulary": [
      {
        "id": "hnl-lex-e3231c61ba1a6095",
        "hanzi": "这",
        "pinyin": "zhè",
        "meaning": "đây/này",
        "example": "这是我的老师。",
        "examplePinyin": "zhè shì wǒ de lǎo shī。",
        "exampleMeaning": "Đây là giáo viên của tôi."
      },
      {
        "id": "hnl-lex-50a9d275d316f87d",
        "hanzi": "是",
        "pinyin": "shì",
        "meaning": "là",
        "example": "这是我的老师。",
        "examplePinyin": "zhè shì wǒ de lǎo shī。",
        "exampleMeaning": "Đây là giáo viên của tôi."
      },
      {
        "id": "hnl-lex-e8a34470934f0dd8",
        "hanzi": "老师",
        "pinyin": "lǎo shī",
        "meaning": "giáo viên",
        "example": "这是我的老师。",
        "examplePinyin": "zhè shì wǒ de lǎo shī。",
        "exampleMeaning": "Đây là giáo viên của tôi."
      },
      {
        "id": "hnl-lex-0f2090408f7d75d9",
        "hanzi": "爸爸",
        "pinyin": "bà bà",
        "meaning": "bố",
        "example": "爸爸和妈妈在家喝茶。",
        "examplePinyin": "bà bà hé mā mā zài jiā hē chá。",
        "exampleMeaning": "Bố và mẹ uống trà ở nhà."
      },
      {
        "id": "hnl-lex-9261b1e015509ee0",
        "hanzi": "妈妈",
        "pinyin": "mā mā",
        "meaning": "mẹ",
        "example": "爸爸和妈妈在家喝茶。",
        "examplePinyin": "bà bà hé mā mā zài jiā hē chá。",
        "exampleMeaning": "Bố và mẹ uống trà ở nhà."
      },
      {
        "id": "hnl-lex-c8e345fafc7f9a45",
        "hanzi": "您",
        "pinyin": "nín",
        "meaning": "ngài/ông/bà kính trọng",
        "example": "老师，您好！",
        "examplePinyin": "lǎo shī， nín hǎo！",
        "exampleMeaning": "Em chào thầy/cô!"
      },
      {
        "id": "hnl-lex-20c364c14fc03c03",
        "hanzi": "请",
        "pinyin": "qǐng",
        "meaning": "mời/làm ơn",
        "example": "请进，请坐。",
        "examplePinyin": "qǐng jìn， qǐng zuò。",
        "exampleMeaning": "Mời vào, mời ngồi."
      },
      {
        "id": "hnl-lex-4dd2a02c8e858417",
        "hanzi": "进",
        "pinyin": "jìn",
        "meaning": "vào",
        "example": "请进，请坐。",
        "examplePinyin": "qǐng jìn， qǐng zuò。",
        "exampleMeaning": "Mời vào, mời ngồi."
      },
      {
        "id": "hnl-lex-196788df6a1e9978",
        "hanzi": "坐",
        "pinyin": "zuò",
        "meaning": "ngồi",
        "example": "请进，请坐。",
        "examplePinyin": "qǐng jìn， qǐng zuò。",
        "exampleMeaning": "Mời vào, mời ngồi."
      },
      {
        "id": "hnl-lex-1b189d25deee2ea3",
        "hanzi": "喝",
        "pinyin": "hē",
        "meaning": "uống",
        "example": "爸爸和妈妈在家喝茶。",
        "examplePinyin": "bà bà hé mā mā zài jiā hē chá。",
        "exampleMeaning": "Bố và mẹ uống trà ở nhà."
      },
      {
        "id": "hnl-lex-afad51ff54cb7485",
        "hanzi": "茶",
        "pinyin": "chá",
        "meaning": "trà",
        "example": "爸爸和妈妈在家喝茶。",
        "examplePinyin": "bà bà hé mā mā zài jiā hē chá。",
        "exampleMeaning": "Bố và mẹ uống trà ở nhà."
      },
      {
        "id": "hnl-lex-7dcc0533c891b845",
        "hanzi": "谢谢",
        "pinyin": "xiè xiè",
        "meaning": "cảm ơn",
        "example": "谢谢！",
        "examplePinyin": "xiè xiè！",
        "exampleMeaning": "Cảm ơn!"
      }
    ],
    "grammar": [
      {
        "title": "这 + 是 + danh từ",
        "explanation": "这是老师 giới thiệu người ở gần hoặc người đang được chỉ đến. 是 nối người/vật với danh tính, không dùng nó trước mọi tính từ. Đọc liền 这是 rồi đến danh từ để câu rõ ý.",
        "example": "这是我的老师。",
        "translation": "Đây là giáo viên của tôi."
      },
      {
        "title": "请 để mời, 您 để xưng hô kính trọng",
        "explanation": "请坐 và 请喝茶 là lời mời ngắn, lịch sự. 您 thường thể hiện kính trọng hơn 你, nhưng vẫn cần chọn cách xưng gọi theo quan hệ thực tế. Không biến lời mời thành mệnh lệnh chỉ vì đọc quá gấp.",
        "example": "您好，请坐！",
        "translation": "Xin chào, mời ngồi!"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这是我的老师。",
        "pinyin": "zhè shì wǒ de lǎo shī。",
        "meaning": "Đây là giáo viên của tôi."
      },
      {
        "speaker": "Minh",
        "hanzi": "老师，您好！",
        "pinyin": "lǎo shī， nín hǎo！",
        "meaning": "Em chào thầy/cô!"
      },
      {
        "speaker": "An",
        "hanzi": "请进，请坐。",
        "pinyin": "qǐng jìn， qǐng zuò。",
        "meaning": "Mời vào, mời ngồi."
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
        "prompt": "Bạn mời khách ngồi. Chọn lời phù hợp.",
        "options": [
          "我是老师。",
          "这是茶。",
          "请坐。"
        ],
        "answer": "请坐。",
        "explanation": "请 + động từ tạo lời mời hoặc yêu cầu lịch sự.",
        "id": "hanngu-q1-b05-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "这",
          "我的老师",
          "是"
        ],
        "answer": "这是我的老师",
        "explanation": "Câu hoàn chỉnh: 这是我的老师。 这是老师 giới thiệu người ở gần hoặc người đang được chỉ đến. 是 nối người/vật với danh tính, không dùng nó trước mọi tính từ. Đọc liền 这是 rồi đến danh từ để câu rõ ý.",
        "id": "hanngu-q1-b05-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “请” có nghĩa nào?",
        "options": [
          "vào",
          "là",
          "mời/làm ơn",
          "đây/này"
        ],
        "answer": "mời/làm ơn",
        "explanation": "请 (qǐng): mời/làm ơn. Ví dụ: 请进，请坐。 — Mời vào, mời ngồi.",
        "id": "hanngu-q1-b05-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “进” có nghĩa nào?",
        "options": [
          "là",
          "bố",
          "vào",
          "ngài/ông/bà kính trọng"
        ],
        "answer": "vào",
        "explanation": "进 (jìn): vào. Ví dụ: 请进，请坐。 — Mời vào, mời ngồi.",
        "id": "hanngu-q1-b05-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “是” có nghĩa nào?",
        "options": [
          "vào",
          "là",
          "ngài/ông/bà kính trọng",
          "đây/này"
        ],
        "answer": "là",
        "explanation": "是 (shì): là. Ví dụ: 这是我的老师。 — Đây là giáo viên của tôi.",
        "id": "hanngu-q1-b05-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “这” có nghĩa nào?",
        "options": [
          "vào",
          "uống",
          "đây/này",
          "giáo viên"
        ],
        "answer": "đây/này",
        "explanation": "这 (zhè): đây/này. Ví dụ: 这是我的老师。 — Đây là giáo viên của tôi.",
        "id": "hanngu-q1-b05-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bố” (bà bà). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "爸爸",
        "alternatives": [],
        "explanation": "爸爸 (bà bà) nghĩa là bố. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b05-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ngài/ông/bà kính trọng” (nín). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "您",
        "alternatives": [],
        "explanation": "您 (nín) nghĩa là ngài/ông/bà kính trọng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b05-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Giới thiệu người quen và mời lịch sự”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “请 để mời, 您 để xưng hô kính trọng”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 5, mốc PDF 55. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b06",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 6",
    "title": "Họ và tên: giới thiệu việc học",
    "subtitle": "我姓王。",
    "minutes": 25,
    "order": 7,
    "objectives": [
      "Dùng mẫu “我姓王。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 姓 và 叫 không thay nhau hoàn toàn / 什么 đứng ở chỗ thông tin còn thiếu.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: họ và tên: giới thiệu việc học. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 姓 và 叫 không thay nhau hoàn toàn.",
    "vocabulary": [
      {
        "id": "hnl-lex-a4513b012e3b645a",
        "hanzi": "请问",
        "pinyin": "qǐng wèn",
        "meaning": "xin hỏi",
        "example": "请问，你贵姓？",
        "examplePinyin": "qǐng wèn， nǐ guì xìng？",
        "exampleMeaning": "Xin hỏi, bạn họ gì?"
      },
      {
        "id": "hnl-lex-a3f80d3707cfc4f1",
        "hanzi": "贵姓",
        "pinyin": "guì xìng",
        "meaning": "quý tính/họ của ông bà",
        "example": "请问，你贵姓？",
        "examplePinyin": "qǐng wèn， nǐ guì xìng？",
        "exampleMeaning": "Xin hỏi, bạn họ gì?"
      },
      {
        "id": "hnl-lex-b514fa3b65b91bfb",
        "hanzi": "姓",
        "pinyin": "xìng",
        "meaning": "mang họ",
        "example": "请问，你贵姓？",
        "examplePinyin": "qǐng wèn， nǐ guì xìng？",
        "exampleMeaning": "Xin hỏi, bạn họ gì?"
      },
      {
        "id": "hnl-lex-4e2d560a6d001d99",
        "hanzi": "叫",
        "pinyin": "jiào",
        "meaning": "tên là/được gọi là",
        "example": "我姓王。你叫什么名字？",
        "examplePinyin": "wǒ xìng wáng。 nǐ jiào shén me míng zì？",
        "exampleMeaning": "Tôi họ Vương. Bạn tên gì?"
      },
      {
        "id": "hnl-lex-75d7ad8e8aef9d6b",
        "hanzi": "什么",
        "pinyin": "shén me",
        "meaning": "gì",
        "example": "我姓王。你叫什么名字？",
        "examplePinyin": "wǒ xìng wáng。 nǐ jiào shén me míng zì？",
        "exampleMeaning": "Tôi họ Vương. Bạn tên gì?"
      },
      {
        "id": "hnl-lex-413d5c22565fafef",
        "hanzi": "名字",
        "pinyin": "míng zi",
        "meaning": "tên",
        "example": "我姓王。你叫什么名字？",
        "examplePinyin": "wǒ xìng wáng。 nǐ jiào shén me míng zì？",
        "exampleMeaning": "Tôi họ Vương. Bạn tên gì?"
      },
      {
        "id": "hnl-lex-2e8c07ecbb2b01b4",
        "hanzi": "学习",
        "pinyin": "xué xí",
        "meaning": "học tập",
        "example": "你学习汉语吗？",
        "examplePinyin": "nǐ xué xí hàn yǔ ma？",
        "exampleMeaning": "Bạn có học tiếng Trung không?"
      },
      {
        "id": "hnl-lex-1dd294f81d42240c",
        "hanzi": "学生",
        "pinyin": "xué shēng",
        "meaning": "học sinh/sinh viên",
        "example": "你们都是留学生吗？",
        "examplePinyin": "nǐ men dōu shì liú xué shēng ma？",
        "exampleMeaning": "Các em đều là du học sinh phải không?"
      },
      {
        "id": "hnl-lex-be8e751e237af968",
        "hanzi": "中国",
        "pinyin": "zhōng guó",
        "meaning": "Trung Quốc",
        "example": "他是中国人。",
        "examplePinyin": "tā shì zhōng guó rén。",
        "exampleMeaning": "Bạn ấy là người Trung Quốc."
      },
      {
        "id": "hnl-lex-3b6ac47bc5bfdf85",
        "hanzi": "越南",
        "pinyin": "yuè nán",
        "meaning": "Việt Nam",
        "example": "我叫安。我是越南人。",
        "examplePinyin": "wǒ jiào ān。 wǒ shì yuè nán rén。",
        "exampleMeaning": "Tôi tên An. Tôi là người Việt Nam."
      },
      {
        "id": "hnl-lex-efe9b158e2be300b",
        "hanzi": "人",
        "pinyin": "rén",
        "meaning": "người",
        "example": "我叫安。我是越南人。",
        "examplePinyin": "wǒ jiào ān。 wǒ shì yuè nán rén。",
        "exampleMeaning": "Tôi tên An. Tôi là người Việt Nam."
      },
      {
        "id": "hnl-lex-e93ee19ac5114e0f",
        "hanzi": "认识",
        "pinyin": "rèn shi",
        "meaning": "quen/biết",
        "example": "认识你很高兴。",
        "examplePinyin": "rèn shí nǐ hěn gāo xìng。",
        "exampleMeaning": "Rất vui được biết bạn."
      }
    ],
    "grammar": [
      {
        "title": "姓 và 叫 không thay nhau hoàn toàn",
        "explanation": "姓 dùng để nói họ; 叫 thường giới thiệu tên hoặc họ tên. Khi được hỏi 贵姓, trả lời lịch sự bằng 我姓…; không ghép 我贵姓… như thể 贵 là bộ phận bắt buộc của câu.",
        "example": "我姓王。",
        "translation": "Tôi họ Vương."
      },
      {
        "title": "什么 đứng ở chỗ thông tin còn thiếu",
        "explanation": "Trong 你叫什么名字, 什么 hỏi phần tên. Câu trả lời điền thẳng tên vào vị trí ấy. Với 我是越南人, 是 giới thiệu quốc tịch; đừng bỏ 人 nếu muốn nói mình là người Việt Nam.",
        "example": "我是越南人。",
        "translation": "Tôi là người Việt Nam."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "请问，你贵姓？",
        "pinyin": "qǐng wèn， nǐ guì xìng？",
        "meaning": "Xin hỏi, bạn họ gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我姓王。你叫什么名字？",
        "pinyin": "wǒ xìng wáng。 nǐ jiào shén me míng zì？",
        "meaning": "Tôi họ Vương. Bạn tên gì?"
      },
      {
        "speaker": "An",
        "hanzi": "我叫安。我是越南人。",
        "pinyin": "wǒ jiào ān。 wǒ shì yuè nán rén。",
        "meaning": "Tôi tên An. Tôi là người Việt Nam."
      },
      {
        "speaker": "Minh",
        "hanzi": "你学习汉语吗？",
        "pinyin": "nǐ xué xí hàn yǔ ma？",
        "meaning": "Bạn có học tiếng Trung không?"
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn muốn nói họ mình là Vương. Chọn câu đúng.",
        "options": [
          "我贵姓王。",
          "我姓王。",
          "王我姓。"
        ],
        "answer": "我姓王。",
        "explanation": "贵姓 dùng khi hỏi kính trọng; tự giới thiệu họ bằng 姓.",
        "id": "hanngu-q1-b06-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "汉语",
          "学习",
          "我"
        ],
        "answer": "我学习汉语",
        "explanation": "Câu hoàn chỉnh: 我学习汉语。 姓 dùng để nói họ; 叫 thường giới thiệu tên hoặc họ tên. Khi được hỏi 贵姓, trả lời lịch sự bằng 我姓…; không ghép 我贵姓… như thể 贵 là bộ phận bắt buộc của câu.",
        "id": "hanngu-q1-b06-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “人” có nghĩa nào?",
        "options": [
          "Việt Nam",
          "Trung Quốc",
          "người",
          "xin hỏi"
        ],
        "answer": "người",
        "explanation": "人 (rén): người. Ví dụ: 我叫安。我是越南人。 — Tôi tên An. Tôi là người Việt Nam.",
        "id": "hanngu-q1-b06-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “中国” có nghĩa nào?",
        "options": [
          "quen/biết",
          "Việt Nam",
          "Trung Quốc",
          "quý tính/họ của ông bà"
        ],
        "answer": "Trung Quốc",
        "explanation": "中国 (zhōng guó): Trung Quốc. Ví dụ: 他是中国人。 — Bạn ấy là người Trung Quốc.",
        "id": "hanngu-q1-b06-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “学生” có nghĩa nào?",
        "options": [
          "người",
          "mang họ",
          "xin hỏi",
          "học sinh/sinh viên"
        ],
        "answer": "học sinh/sinh viên",
        "explanation": "学生 (xué shēng): học sinh/sinh viên. Ví dụ: 你们都是留学生吗？ — Các em đều là du học sinh phải không?",
        "id": "hanngu-q1-b06-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “什么” có nghĩa nào?",
        "options": [
          "Việt Nam",
          "học tập",
          "gì",
          "xin hỏi"
        ],
        "answer": "gì",
        "explanation": "什么 (shén me): gì. Ví dụ: 我姓王。你叫什么名字？ — Tôi họ Vương. Bạn tên gì?",
        "id": "hanngu-q1-b06-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “mang họ” (xìng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "姓",
        "alternatives": [],
        "explanation": "姓 (xìng) nghĩa là mang họ. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b06-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “tên” (míng zi). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "名字",
        "alternatives": [],
        "explanation": "名字 (míng zi) nghĩa là tên. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b06-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Họ và tên: giới thiệu việc học”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “什么 đứng ở chỗ thông tin còn thiếu”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 6, mốc PDF 64. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b07",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 7",
    "title": "Bạn ăn gì: chọn món ở nhà ăn",
    "subtitle": "你吃什么？",
    "minutes": 25,
    "order": 8,
    "objectives": [
      "Dùng mẫu “你吃什么？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 吃什么: hỏi món, không hỏi nơi / Số + lượng từ + món.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: bạn ăn gì: chọn món ở nhà ăn. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 吃什么: hỏi món, không hỏi nơi.",
    "vocabulary": [
      {
        "id": "hnl-lex-dbf0935b043a865d",
        "hanzi": "吃",
        "pinyin": "chī",
        "meaning": "ăn",
        "example": "中午你去哪儿吃饭？",
        "examplePinyin": "zhōng wǔ nǐ qù nǎr chī fàn？",
        "exampleMeaning": "Trưa bạn đi đâu ăn?"
      },
      {
        "id": "hnl-lex-0bcf881d8d22ebb1",
        "hanzi": "饭",
        "pinyin": "fàn",
        "meaning": "cơm/bữa ăn",
        "example": "中午你去哪儿吃饭？",
        "examplePinyin": "zhōng wǔ nǐ qù nǎr chī fàn？",
        "exampleMeaning": "Trưa bạn đi đâu ăn?"
      },
      {
        "id": "hnl-lex-43f28c10686479ad",
        "hanzi": "食堂",
        "pinyin": "shí táng",
        "meaning": "nhà ăn",
        "example": "我去食堂。",
        "examplePinyin": "wǒ qù shí táng。",
        "exampleMeaning": "Tôi đến nhà ăn."
      },
      {
        "id": "hnl-lex-5487ef2e952ad6ba",
        "hanzi": "米饭",
        "pinyin": "mǐ fàn",
        "meaning": "cơm",
        "example": "我吃米饭，喝汤。",
        "examplePinyin": "wǒ chī mǐ fàn， hē tāng。",
        "exampleMeaning": "Tôi ăn cơm, uống canh."
      },
      {
        "id": "hnl-lex-c5b6beb3f7b7fd36",
        "hanzi": "面条",
        "pinyin": "miàn tiáo",
        "meaning": "mì",
        "example": "我要一碗面条和一个鸡蛋。",
        "examplePinyin": "wǒ yào yī wǎn miàn tiáo hé yí gè jī dàn。",
        "exampleMeaning": "Tôi lấy một bát mì và một quả trứng."
      },
      {
        "id": "hnl-lex-1878fcb1a86dc612",
        "hanzi": "馒头",
        "pinyin": "mán tou",
        "meaning": "màn thầu",
        "example": "我要两个馒头。",
        "examplePinyin": "wǒ yào liǎng gè mán tou。",
        "exampleMeaning": "Tôi lấy hai chiếc màn thầu."
      },
      {
        "id": "hnl-lex-b1739eba44e0ad51",
        "hanzi": "鸡蛋",
        "pinyin": "jī dàn",
        "meaning": "trứng gà",
        "example": "我要一碗面条和一个鸡蛋。",
        "examplePinyin": "wǒ yào yī wǎn miàn tiáo hé yí gè jī dàn。",
        "exampleMeaning": "Tôi lấy một bát mì và một quả trứng."
      },
      {
        "id": "hnl-lex-0f3f1ae80ca5c663",
        "hanzi": "汤",
        "pinyin": "tāng",
        "meaning": "canh/súp",
        "example": "我吃米饭，喝汤。",
        "examplePinyin": "wǒ chī mǐ fàn， hē tāng。",
        "exampleMeaning": "Tôi ăn cơm, uống canh."
      },
      {
        "id": "hnl-lex-d7a3ec5e799dc7a7",
        "hanzi": "要",
        "pinyin": "yào",
        "meaning": "muốn/lấy",
        "example": "我要一碗面条和一个鸡蛋。",
        "examplePinyin": "wǒ yào yī wǎn miàn tiáo hé yí gè jī dàn。",
        "exampleMeaning": "Tôi lấy một bát mì và một quả trứng."
      },
      {
        "id": "hnl-lex-668707af77dc777e",
        "hanzi": "碗",
        "pinyin": "wǎn",
        "meaning": "bát",
        "example": "我要一碗面条和一个鸡蛋。",
        "examplePinyin": "wǒ yào yī wǎn miàn tiáo hé yí gè jī dàn。",
        "exampleMeaning": "Tôi lấy một bát mì và một quả trứng."
      },
      {
        "id": "hnl-lex-77d179986e8269b6",
        "hanzi": "中午",
        "pinyin": "zhōng wǔ",
        "meaning": "buổi trưa",
        "example": "中午你去哪儿吃饭？",
        "examplePinyin": "zhōng wǔ nǐ qù nǎr chī fàn？",
        "exampleMeaning": "Trưa bạn đi đâu ăn?"
      },
      {
        "id": "hnl-lex-197ac65a6d9b8d19",
        "hanzi": "教室",
        "pinyin": "jiào shì",
        "meaning": "phòng học",
        "example": "老师在教室里。",
        "examplePinyin": "lǎo shī zài jiào shì lǐ。",
        "exampleMeaning": "Giáo viên ở trong phòng học."
      }
    ],
    "grammar": [
      {
        "title": "吃什么: hỏi món, không hỏi nơi",
        "explanation": "什么 thay cho món ăn sau 吃. Nếu muốn hỏi chỗ ăn thì dùng 在哪儿 hoặc 去哪儿 tùy ý định. Tập trả lời bằng món thật cụ thể thay vì đọc lại nguyên câu hỏi.",
        "example": "你吃什么？",
        "translation": "Bạn ăn gì?"
      },
      {
        "title": "Số + lượng từ + món",
        "explanation": "一碗面条 có lượng từ 碗 cho phần mì đựng trong bát. Khi gọi món, 我要… nêu nhu cầu; thêm lượng từ giúp người nghe biết số phần. Không chuyển thẳng “một mì” thành 一面条.",
        "example": "我要一碗面条。",
        "translation": "Tôi lấy một bát mì."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "中午你去哪儿吃饭？",
        "pinyin": "zhōng wǔ nǐ qù nǎr chī fàn？",
        "meaning": "Trưa bạn đi đâu ăn?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我去食堂。",
        "pinyin": "wǒ qù shí táng。",
        "meaning": "Tôi đến nhà ăn."
      },
      {
        "speaker": "An",
        "hanzi": "你吃什么？",
        "pinyin": "nǐ chī shén me？",
        "meaning": "Bạn ăn gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我要一碗面条和一个鸡蛋。",
        "pinyin": "wǒ yào yī wǎn miàn tiáo hé yí gè jī dàn。",
        "meaning": "Tôi lấy một bát mì và một quả trứng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn cách nói một bát mì.",
        "options": [
          "一碗面条",
          "一面条",
          "面条一是"
        ],
        "answer": "一碗面条",
        "explanation": "碗 là lượng từ thích hợp cho phần mì trong bát.",
        "id": "hanngu-q1-b07-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "要",
          "一碗面条",
          "我"
        ],
        "answer": "我要一碗面条",
        "explanation": "Câu hoàn chỉnh: 我要一碗面条。 什么 thay cho món ăn sau 吃. Nếu muốn hỏi chỗ ăn thì dùng 在哪儿 hoặc 去哪儿 tùy ý định. Tập trả lời bằng món thật cụ thể thay vì đọc lại nguyên câu hỏi.",
        "id": "hanngu-q1-b07-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “面条” có nghĩa nào?",
        "options": [
          "cơm/bữa ăn",
          "mì",
          "cơm",
          "trứng gà"
        ],
        "answer": "mì",
        "explanation": "面条 (miàn tiáo): mì. Ví dụ: 我要一碗面条和一个鸡蛋。 — Tôi lấy một bát mì và một quả trứng.",
        "id": "hanngu-q1-b07-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “吃” có nghĩa nào?",
        "options": [
          "ăn",
          "mì",
          "trứng gà",
          "màn thầu"
        ],
        "answer": "ăn",
        "explanation": "吃 (chī): ăn. Ví dụ: 中午你去哪儿吃饭？ — Trưa bạn đi đâu ăn?",
        "id": "hanngu-q1-b07-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “教室” có nghĩa nào?",
        "options": [
          "canh/súp",
          "phòng học",
          "buổi trưa",
          "ăn"
        ],
        "answer": "phòng học",
        "explanation": "教室 (jiào shì): phòng học. Ví dụ: 老师在教室里。 — Giáo viên ở trong phòng học.",
        "id": "hanngu-q1-b07-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “要” có nghĩa nào?",
        "options": [
          "ăn",
          "bát",
          "muốn/lấy",
          "cơm/bữa ăn"
        ],
        "answer": "muốn/lấy",
        "explanation": "要 (yào): muốn/lấy. Ví dụ: 我要一碗面条和一个鸡蛋。 — Tôi lấy một bát mì và một quả trứng.",
        "id": "hanngu-q1-b07-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “nhà ăn” (shí táng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "食堂",
        "alternatives": [],
        "explanation": "食堂 (shí táng) nghĩa là nhà ăn. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b07-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “bát” (wǎn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "碗",
        "alternatives": [],
        "explanation": "碗 (wǎn) nghĩa là bát. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b07-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Bạn ăn gì: chọn món ở nhà ăn”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Số + lượng từ + món”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 7, mốc PDF 74. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b08",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 8",
    "title": "Mua trái cây: hỏi giá và số lượng",
    "subtitle": "苹果多少钱一斤？",
    "minutes": 25,
    "order": 9,
    "objectives": [
      "Dùng mẫu “苹果多少钱一斤？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 多少钱 hỏi giá / 斤 và 公斤 khác đơn vị.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: mua trái cây: hỏi giá và số lượng. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 多少钱 hỏi giá.",
    "vocabulary": [
      {
        "id": "hnl-lex-738f3a0b5a83e77e",
        "hanzi": "买",
        "pinyin": "mǎi",
        "meaning": "mua",
        "example": "你买什么？",
        "examplePinyin": "nǐ mǎi shén me？",
        "exampleMeaning": "Bạn mua gì?"
      },
      {
        "id": "hnl-lex-f0c9922916310234",
        "hanzi": "卖",
        "pinyin": "mài",
        "meaning": "bán",
        "example": "这儿卖水果，苹果很便宜。",
        "examplePinyin": "zhèr mài shuǐ guǒ， píng guǒ hěn pián yi。",
        "exampleMeaning": "Ở đây bán trái cây, táo rất rẻ."
      },
      {
        "id": "hnl-lex-37264a02341cde50",
        "hanzi": "水果",
        "pinyin": "shuǐ guǒ",
        "meaning": "trái cây",
        "example": "这儿卖水果，苹果很便宜。",
        "examplePinyin": "zhèr mài shuǐ guǒ， píng guǒ hěn pián yi。",
        "exampleMeaning": "Ở đây bán trái cây, táo rất rẻ."
      },
      {
        "id": "hnl-lex-3b0259df48b80048",
        "hanzi": "苹果",
        "pinyin": "píng guǒ",
        "meaning": "táo",
        "example": "我买苹果。多少钱一斤？",
        "examplePinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "exampleMeaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      },
      {
        "id": "hnl-lex-19b459f828d47836",
        "hanzi": "斤",
        "pinyin": "jīn",
        "meaning": "cân Trung Quốc",
        "example": "我买苹果。多少钱一斤？",
        "examplePinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "exampleMeaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      },
      {
        "id": "hnl-lex-fdfda6fefaf3508e",
        "hanzi": "多少",
        "pinyin": "duō shao",
        "meaning": "bao nhiêu",
        "example": "我买苹果。多少钱一斤？",
        "examplePinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "exampleMeaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      },
      {
        "id": "hnl-lex-0b7b752a31b8993a",
        "hanzi": "钱",
        "pinyin": "qián",
        "meaning": "tiền",
        "example": "我买苹果。多少钱一斤？",
        "examplePinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "exampleMeaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      },
      {
        "id": "hnl-lex-d4a4725501f19def",
        "hanzi": "块",
        "pinyin": "kuài",
        "meaning": "đồng khẩu ngữ",
        "example": "五块钱一斤。",
        "examplePinyin": "wǔ kuài qián yī jīn。",
        "exampleMeaning": "Năm đồng một cân."
      },
      {
        "id": "hnl-lex-ef1a353f3391a526",
        "hanzi": "贵",
        "pinyin": "guì",
        "meaning": "đắt",
        "example": "请问，你贵姓？",
        "examplePinyin": "qǐng wèn， nǐ guì xìng？",
        "exampleMeaning": "Xin hỏi, bạn họ gì?"
      },
      {
        "id": "hnl-lex-077efb2405fa7be8",
        "hanzi": "便宜",
        "pinyin": "pián yi",
        "meaning": "rẻ",
        "example": "这儿卖水果，苹果很便宜。",
        "examplePinyin": "zhèr mài shuǐ guǒ， píng guǒ hěn pián yi。",
        "exampleMeaning": "Ở đây bán trái cây, táo rất rẻ."
      },
      {
        "id": "hnl-lex-f1f828b5e37183e6",
        "hanzi": "两",
        "pinyin": "liǎng",
        "meaning": "hai trước lượng từ",
        "example": "我要两斤。",
        "examplePinyin": "wǒ yào liǎng jīn。",
        "exampleMeaning": "Tôi lấy hai cân."
      },
      {
        "id": "hnl-lex-afff9783f0a5f5cf",
        "hanzi": "公斤",
        "pinyin": "gōng jīn",
        "meaning": "kilôgam",
        "example": "我要一公斤苹果。",
        "examplePinyin": "wǒ yào yī gōng jīn píng guǒ。",
        "exampleMeaning": "Tôi lấy một kilôgam táo."
      }
    ],
    "grammar": [
      {
        "title": "多少钱 hỏi giá",
        "explanation": "Đặt 多少钱 sau món cần hỏi. Trong giao dịch, 块 thường được dùng trong cách nói số tiền. Mọi giá ở bài chỉ là tình huống luyện nói, không phải giá hay tỷ giá hiện hành.",
        "example": "苹果多少钱一斤？",
        "translation": "Táo bao nhiêu tiền một cân?"
      },
      {
        "title": "斤 và 公斤 khác đơn vị",
        "explanation": "Trong cách dùng phổ biến tại Trung Quốc đại lục, 一斤 bằng nửa kilôgam; 一公斤 bằng một kilôgam. Cần xác nhận đơn vị khi mua. 两斤 dùng 两 trước lượng từ, không áp máy móc mọi cách nói số hai vào cùng vị trí.",
        "example": "我要两斤苹果。",
        "translation": "Tôi lấy hai cân Trung Quốc táo."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你买什么？",
        "pinyin": "nǐ mǎi shén me？",
        "meaning": "Bạn mua gì?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我买苹果。多少钱一斤？",
        "pinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "meaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      },
      {
        "speaker": "An",
        "hanzi": "五块钱一斤。",
        "pinyin": "wǔ kuài qián yī jīn。",
        "meaning": "Năm đồng một cân."
      },
      {
        "speaker": "Minh",
        "hanzi": "我要两斤。",
        "pinyin": "wǒ yào liǎng jīn。",
        "meaning": "Tôi lấy hai cân."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn muốn mua hai cân táo. Cụm nào đúng?",
        "options": [
          "两斤苹果",
          "苹果两是",
          "两苹果斤"
        ],
        "answer": "两斤苹果",
        "explanation": "Giữ thứ tự số + lượng từ + danh từ.",
        "id": "hanngu-q1-b08-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "两斤苹果",
          "买",
          "我"
        ],
        "answer": "我买两斤苹果",
        "explanation": "Câu hoàn chỉnh: 我买两斤苹果。 Đặt 多少钱 sau món cần hỏi. Trong giao dịch, 块 thường được dùng trong cách nói số tiền. Mọi giá ở bài chỉ là tình huống luyện nói, không phải giá hay tỷ giá hiện hành.",
        "id": "hanngu-q1-b08-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “块” có nghĩa nào?",
        "options": [
          "hai trước lượng từ",
          "trái cây",
          "rẻ",
          "đồng khẩu ngữ"
        ],
        "answer": "đồng khẩu ngữ",
        "explanation": "块 (kuài): đồng khẩu ngữ. Ví dụ: 五块钱一斤。 — Năm đồng một cân.",
        "id": "hanngu-q1-b08-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “多少” có nghĩa nào?",
        "options": [
          "bao nhiêu",
          "rẻ",
          "cân Trung Quốc",
          "đồng khẩu ngữ"
        ],
        "answer": "bao nhiêu",
        "explanation": "多少 (duō shao): bao nhiêu. Ví dụ: 我买苹果。多少钱一斤？ — Tôi mua táo. Một cân bao nhiêu tiền?",
        "id": "hanngu-q1-b08-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “贵” có nghĩa nào?",
        "options": [
          "đồng khẩu ngữ",
          "bán",
          "đắt",
          "cân Trung Quốc"
        ],
        "answer": "đắt",
        "explanation": "贵 (guì): đắt. Ví dụ: 请问，你贵姓？ — Xin hỏi, bạn họ gì?",
        "id": "hanngu-q1-b08-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “苹果” có nghĩa nào?",
        "options": [
          "tiền",
          "táo",
          "rẻ",
          "kilôgam"
        ],
        "answer": "táo",
        "explanation": "苹果 (píng guǒ): táo. Ví dụ: 我买苹果。多少钱一斤？ — Tôi mua táo. Một cân bao nhiêu tiền?",
        "id": "hanngu-q1-b08-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “trái cây” (shuǐ guǒ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "水果",
        "alternatives": [],
        "explanation": "水果 (shuǐ guǒ) nghĩa là trái cây. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b08-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “kilôgam” (gōng jīn). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "公斤",
        "alternatives": [],
        "explanation": "公斤 (gōng jīn) nghĩa là kilôgam. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b08-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Mua trái cây: hỏi giá và số lượng”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “斤 và 公斤 khác đơn vị”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 8, mốc PDF 81. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b09",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 9",
    "title": "Đổi tiền: nói mục đích và hỏi cách làm",
    "subtitle": "我去银行换钱。",
    "minutes": 25,
    "order": 10,
    "objectives": [
      "Dùng mẫu “我去银行换钱。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 去 + nơi + làm việc gì / 怎么 hỏi cách thức.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: đổi tiền: nói mục đích và hỏi cách làm. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 去 + nơi + làm việc gì.",
    "vocabulary": [
      {
        "id": "hnl-lex-1b160e9af2b2fdb8",
        "hanzi": "换",
        "pinyin": "huàn",
        "meaning": "đổi",
        "example": "我去银行换人民币。",
        "examplePinyin": "wǒ qù yín háng huàn rén mín bì。",
        "exampleMeaning": "Tôi đến ngân hàng đổi nhân dân tệ."
      },
      {
        "id": "hnl-lex-85cd7e718a0d0c0f",
        "hanzi": "人民币",
        "pinyin": "rén mín bì",
        "meaning": "nhân dân tệ",
        "example": "我去银行换人民币。",
        "examplePinyin": "wǒ qù yín háng huàn rén mín bì。",
        "exampleMeaning": "Tôi đến ngân hàng đổi nhân dân tệ."
      },
      {
        "id": "hnl-lex-9d51bca3da95ed05",
        "hanzi": "银行",
        "pinyin": "yín háng",
        "meaning": "ngân hàng",
        "example": "我去银行换人民币。",
        "examplePinyin": "wǒ qù yín háng huàn rén mín bì。",
        "exampleMeaning": "Tôi đến ngân hàng đổi nhân dân tệ."
      },
      {
        "id": "hnl-lex-12fa2e046c08c0b3",
        "hanzi": "美元",
        "pinyin": "měi yuán",
        "meaning": "đô la Mỹ",
        "example": "我去银行换美元。",
        "examplePinyin": "wǒ qù yín háng huàn měi yuán。",
        "exampleMeaning": "Tôi đến ngân hàng đổi đô la Mỹ."
      },
      {
        "id": "hnl-lex-79e27bc811329b06",
        "hanzi": "现在",
        "pinyin": "xiàn zài",
        "meaning": "bây giờ",
        "example": "你现在去吗？",
        "examplePinyin": "nǐ xiàn zài qù ma？",
        "exampleMeaning": "Bây giờ bạn đi à?"
      },
      {
        "id": "hnl-lex-7fb7f23a2cfaaebf",
        "hanzi": "下午",
        "pinyin": "xià wǔ",
        "meaning": "buổi chiều",
        "example": "你下午去哪儿？",
        "examplePinyin": "nǐ xià wǔ qù nǎr？",
        "exampleMeaning": "Chiều bạn đi đâu?"
      },
      {
        "id": "hnl-lex-34fbbd9042b5ba1a",
        "hanzi": "图书馆",
        "pinyin": "tú shū guǎn",
        "meaning": "thư viện",
        "example": "下午我去图书馆。",
        "examplePinyin": "xià wǔ wǒ qù tú shū guǎn。",
        "exampleMeaning": "Buổi chiều tôi đến thư viện."
      },
      {
        "id": "hnl-lex-7821d5f6c5a2bead",
        "hanzi": "用",
        "pinyin": "yòng",
        "meaning": "dùng",
        "example": "请问，这个怎么用？",
        "examplePinyin": "qǐng wèn， zhè ge zěn me yòng？",
        "exampleMeaning": "Xin hỏi, cái này dùng thế nào?"
      },
      {
        "id": "hnl-lex-55727fba7024912a",
        "hanzi": "怎么",
        "pinyin": "zěn me",
        "meaning": "thế nào/bằng cách nào",
        "example": "请问，这个怎么用？",
        "examplePinyin": "qǐng wèn， zhè ge zěn me yòng？",
        "exampleMeaning": "Xin hỏi, cái này dùng thế nào?"
      },
      {
        "id": "hnl-lex-ec0e6589a117563e",
        "hanzi": "给",
        "pinyin": "gěi",
        "meaning": "đưa/cho",
        "example": "请给我这本书。",
        "examplePinyin": "qǐng gěi wǒ zhè běn shū。",
        "exampleMeaning": "Làm ơn đưa tôi quyển sách này."
      },
      {
        "id": "hnl-lex-4b77f300cbf103e8",
        "hanzi": "百",
        "pinyin": "bǎi",
        "meaning": "trăm",
        "example": "这个一百块，那个一千块。",
        "examplePinyin": "zhè ge yì bǎi kuài， nà ge yī qiān kuài。",
        "exampleMeaning": "Cái này một trăm đồng, cái kia một nghìn đồng."
      },
      {
        "id": "hnl-lex-02cbd7f31c5b6d86",
        "hanzi": "千",
        "pinyin": "qiān",
        "meaning": "nghìn",
        "example": "这个一百块，那个一千块。",
        "examplePinyin": "zhè ge yì bǎi kuài， nà ge yī qiān kuài。",
        "exampleMeaning": "Cái này một trăm đồng, cái kia một nghìn đồng."
      }
    ],
    "grammar": [
      {
        "title": "去 + nơi + làm việc gì",
        "explanation": "我去银行换钱 nêu nơi đến rồi mục đích. Không cần chèn hai chủ ngữ hoặc hai từ 是. Khi tập, thay nơi và việc làm nhưng vẫn giữ trật tự ấy.",
        "example": "我去银行换钱。",
        "translation": "Tôi đến ngân hàng đổi tiền."
      },
      {
        "title": "怎么 hỏi cách thức",
        "explanation": "这个怎么用 hỏi cách sử dụng; không tự hiểu mọi 怎么 là vì sao. Với giao dịch thật phải hỏi đơn vị, phí và thông tin tại nơi giao dịch; bài chỉ dạy ngôn ngữ, không cung cấp tỷ giá hoặc khuyến nghị đổi tiền.",
        "example": "请问，这个怎么用？",
        "translation": "Xin hỏi, cái này dùng thế nào?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你下午去哪儿？",
        "pinyin": "nǐ xià wǔ qù nǎr？",
        "meaning": "Chiều bạn đi đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我去银行换人民币。",
        "pinyin": "wǒ qù yín háng huàn rén mín bì。",
        "meaning": "Tôi đến ngân hàng đổi nhân dân tệ."
      },
      {
        "speaker": "An",
        "hanzi": "你现在去吗？",
        "pinyin": "nǐ xiàn zài qù ma？",
        "meaning": "Bây giờ bạn đi à?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不，我下午去。",
        "pinyin": "bù， wǒ xià wǔ qù。",
        "meaning": "Không, chiều tôi đi."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "我去银行换钱 diễn tả điều gì?",
        "options": [
          "Một phép so sánh",
          "Nơi đến và mục đích",
          "Ngày sinh"
        ],
        "answer": "Nơi đến và mục đích",
        "explanation": "银行 là nơi đến, 换钱 là việc định làm ở đó.",
        "id": "hanngu-q1-b09-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "去银行",
          "我",
          "换钱"
        ],
        "answer": "我去银行换钱",
        "explanation": "Câu hoàn chỉnh: 我去银行换钱。 我去银行换钱 nêu nơi đến rồi mục đích. Không cần chèn hai chủ ngữ hoặc hai từ 是. Khi tập, thay nơi và việc làm nhưng vẫn giữ trật tự ấy.",
        "id": "hanngu-q1-b09-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “现在” có nghĩa nào?",
        "options": [
          "ngân hàng",
          "buổi chiều",
          "thư viện",
          "bây giờ"
        ],
        "answer": "bây giờ",
        "explanation": "现在 (xiàn zài): bây giờ. Ví dụ: 你现在去吗？ — Bây giờ bạn đi à?",
        "id": "hanngu-q1-b09-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “百” có nghĩa nào?",
        "options": [
          "bây giờ",
          "trăm",
          "đô la Mỹ",
          "ngân hàng"
        ],
        "answer": "trăm",
        "explanation": "百 (bǎi): trăm. Ví dụ: 这个一百块，那个一千块。 — Cái này một trăm đồng, cái kia một nghìn đồng.",
        "id": "hanngu-q1-b09-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “怎么” có nghĩa nào?",
        "options": [
          "trăm",
          "thế nào/bằng cách nào",
          "đổi",
          "ngân hàng"
        ],
        "answer": "thế nào/bằng cách nào",
        "explanation": "怎么 (zěn me): thế nào/bằng cách nào. Ví dụ: 请问，这个怎么用？ — Xin hỏi, cái này dùng thế nào?",
        "id": "hanngu-q1-b09-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “换” có nghĩa nào?",
        "options": [
          "đổi",
          "thư viện",
          "dùng",
          "buổi chiều"
        ],
        "answer": "đổi",
        "explanation": "换 (huàn): đổi. Ví dụ: 我去银行换人民币。 — Tôi đến ngân hàng đổi nhân dân tệ.",
        "id": "hanngu-q1-b09-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đưa/cho” (gěi). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "给",
        "alternatives": [],
        "explanation": "给 (gěi) nghĩa là đưa/cho. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b09-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “ngân hàng” (yín háng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "银行",
        "alternatives": [],
        "explanation": "银行 (yín háng) nghĩa là ngân hàng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b09-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Đổi tiền: nói mục đích và hỏi cách làm”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “怎么 hỏi cách thức”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 9, mốc PDF 88. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b10",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 10",
    "title": "Tìm người và hỏi nơi ở",
    "subtitle": "老师在办公室。",
    "minutes": 25,
    "order": 11,
    "objectives": [
      "Dùng mẫu “老师在办公室。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 在 hỏi người có mặt ở đâu / 谁 và 哪儿 hỏi hai loại thông tin.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: tìm người và hỏi nơi ở. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 在 hỏi người có mặt ở đâu.",
    "vocabulary": [
      {
        "id": "hnl-lex-076cba1d2476f68e",
        "hanzi": "他",
        "pinyin": "tā",
        "meaning": "anh ấy",
        "example": "我找老师。他在吗？",
        "examplePinyin": "wǒ zhǎo lǎo shī。 tā zài ma？",
        "exampleMeaning": "Tôi tìm thầy. Thầy có ở đây không?"
      },
      {
        "id": "hnl-lex-c1f29e69768d09e9",
        "hanzi": "她",
        "pinyin": "tā",
        "meaning": "cô ấy",
        "example": "她在公司工作。",
        "examplePinyin": "tā zài gōng sī gōng zuò。",
        "exampleMeaning": "Chị ấy làm việc ở công ty."
      },
      {
        "id": "hnl-lex-f5807f1673b214e0",
        "hanzi": "住",
        "pinyin": "zhù",
        "meaning": "sống/ở",
        "example": "他住在那儿。",
        "examplePinyin": "tā zhù zài nàr。",
        "exampleMeaning": "Bạn ấy sống ở kia."
      },
      {
        "id": "hnl-lex-ac6cb8f24388c6c2",
        "hanzi": "找",
        "pinyin": "zhǎo",
        "meaning": "tìm",
        "example": "是。你找谁？",
        "examplePinyin": "shì。 nǐ zhǎo shuí？",
        "exampleMeaning": "Đúng. Bạn tìm ai?"
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
        "id": "hnl-lex-a776d78719c01eeb",
        "hanzi": "办公室",
        "pinyin": "bàn gōng shì",
        "meaning": "văn phòng",
        "example": "请问，这是办公室吗？",
        "examplePinyin": "qǐng wèn， zhè shì bàn gōng shì ma？",
        "exampleMeaning": "Xin hỏi, đây có phải văn phòng không?"
      },
      {
        "id": "hnl-lex-967e4534cc7edbce",
        "hanzi": "在",
        "pinyin": "zài",
        "meaning": "ở/có mặt",
        "example": "我找老师。他在吗？",
        "examplePinyin": "wǒ zhǎo lǎo shī。 tā zài ma？",
        "exampleMeaning": "Tôi tìm thầy. Thầy có ở đây không?"
      },
      {
        "id": "hnl-lex-4437406dfdffcee7",
        "hanzi": "这儿",
        "pinyin": "zhèr",
        "meaning": "ở đây",
        "example": "他不在这儿。",
        "examplePinyin": "tā bù zài zhèr。",
        "exampleMeaning": "Thầy không ở đây."
      },
      {
        "id": "hnl-lex-8adcf77692b6974e",
        "hanzi": "那儿",
        "pinyin": "nàr",
        "meaning": "ở kia",
        "example": "他住在那儿。",
        "examplePinyin": "tā zhù zài nàr。",
        "exampleMeaning": "Bạn ấy sống ở kia."
      },
      {
        "id": "hnl-lex-b7bf21fc6ae5b692",
        "hanzi": "楼",
        "pinyin": "lóu",
        "meaning": "tòa nhà/tầng",
        "example": "我的房间在三楼。",
        "examplePinyin": "wǒ de fáng jiān zài sān lóu。",
        "exampleMeaning": "Phòng tôi ở tầng ba."
      },
      {
        "id": "hnl-lex-928848f0f5c3d4af",
        "hanzi": "房间",
        "pinyin": "fáng jiān",
        "meaning": "phòng",
        "example": "我的房间在三楼。",
        "examplePinyin": "wǒ de fáng jiān zài sān lóu。",
        "exampleMeaning": "Phòng tôi ở tầng ba."
      },
      {
        "id": "hnl-lex-d1ccf915facb6f64",
        "hanzi": "号码",
        "pinyin": "hào mǎ",
        "meaning": "số/mã số",
        "example": "这是我的电话号码。",
        "examplePinyin": "zhè shì wǒ de diàn huà hào mǎ。",
        "exampleMeaning": "Đây là số điện thoại của tôi."
      }
    ],
    "grammar": [
      {
        "title": "在 hỏi người có mặt ở đâu",
        "explanation": "老师在吗 hỏi giáo viên có ở đó không. 在 + địa điểm cho biết vị trí. Phân biệt 在 dùng để nêu vị trí với 是 dùng để xác nhận danh tính.",
        "example": "老师在办公室。",
        "translation": "Giáo viên ở văn phòng."
      },
      {
        "title": "谁 và 哪儿 hỏi hai loại thông tin",
        "explanation": "你找谁 hỏi người cần tìm; 他住哪儿 hỏi nơi ở. Khi trả lời hãy chọn đúng người hoặc nơi, không chỉ nhớ một câu mẫu rồi đáp cho mọi câu hỏi.",
        "example": "你找谁？",
        "translation": "Bạn tìm ai?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "请问，这是办公室吗？",
        "pinyin": "qǐng wèn， zhè shì bàn gōng shì ma？",
        "meaning": "Xin hỏi, đây có phải văn phòng không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "是。你找谁？",
        "pinyin": "shì。 nǐ zhǎo shuí？",
        "meaning": "Đúng. Bạn tìm ai?"
      },
      {
        "speaker": "An",
        "hanzi": "我找老师。他在吗？",
        "pinyin": "wǒ zhǎo lǎo shī。 tā zài ma？",
        "meaning": "Tôi tìm thầy. Thầy có ở đây không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "他不在这儿。",
        "pinyin": "tā bù zài zhèr。",
        "meaning": "Thầy không ở đây."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "你找谁 cần câu trả lời thuộc loại nào?",
        "options": [
          "Một giá tiền",
          "Một người",
          "Một ngày trong tuần"
        ],
        "answer": "Một người",
        "explanation": "谁 hỏi người; 哪儿 mới hỏi nơi chốn.",
        "id": "hanngu-q1-b10-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "这儿",
          "住",
          "他"
        ],
        "answer": "他住这儿",
        "explanation": "Câu hoàn chỉnh: 他住这儿。 老师在吗 hỏi giáo viên có ở đó không. 在 + địa điểm cho biết vị trí. Phân biệt 在 dùng để nêu vị trí với 是 dùng để xác nhận danh tính.",
        "id": "hanngu-q1-b10-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “这儿” có nghĩa nào?",
        "options": [
          "tòa nhà/tầng",
          "ở/có mặt",
          "số/mã số",
          "ở đây"
        ],
        "answer": "ở đây",
        "explanation": "这儿 (zhèr): ở đây. Ví dụ: 他不在这儿。 — Thầy không ở đây.",
        "id": "hanngu-q1-b10-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “谁” có nghĩa nào?",
        "options": [
          "sống/ở",
          "ai",
          "tòa nhà/tầng",
          "ở kia"
        ],
        "answer": "ai",
        "explanation": "谁 (shuí): ai. Ví dụ: 是。你找谁？ — Đúng. Bạn tìm ai?",
        "id": "hanngu-q1-b10-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “他” có nghĩa nào?",
        "options": [
          "văn phòng",
          "anh ấy",
          "phòng",
          "ở/có mặt"
        ],
        "answer": "anh ấy",
        "explanation": "他 (tā): anh ấy. Ví dụ: 我找老师。他在吗？ — Tôi tìm thầy. Thầy có ở đây không?",
        "id": "hanngu-q1-b10-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “找” có nghĩa nào?",
        "options": [
          "tìm",
          "ở đây",
          "ở/có mặt",
          "tòa nhà/tầng"
        ],
        "answer": "tìm",
        "explanation": "找 (zhǎo): tìm. Ví dụ: 是。你找谁？ — Đúng. Bạn tìm ai?",
        "id": "hanngu-q1-b10-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cô ấy” (tā). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "她",
        "alternatives": [],
        "explanation": "她 (tā) nghĩa là cô ấy. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b10-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “sống/ở” (zhù). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "住",
        "alternatives": [],
        "explanation": "住 (zhù) nghĩa là sống/ở. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b10-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Tìm người và hỏi nơi ở”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “谁 và 哪儿 hỏi hai loại thông tin”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 10, mốc PDF 94. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b11",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 11",
    "title": "Chúng tôi đều là du học sinh",
    "subtitle": "我们都是留学生。",
    "minutes": 25,
    "order": 12,
    "objectives": [
      "Dùng mẫu “我们都是留学生。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 都 đứng trước vị ngữ / 这位 và giới thiệu lịch sự.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: chúng tôi đều là du học sinh. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 都 đứng trước vị ngữ.",
    "vocabulary": [
      {
        "id": "hnl-lex-b788d9264a2f77ab",
        "hanzi": "我们",
        "pinyin": "wǒ men",
        "meaning": "chúng tôi/chúng ta",
        "example": "是，我们都是留学生。",
        "examplePinyin": "shì， wǒ men dōu shì liú xué shēng。",
        "exampleMeaning": "Vâng, chúng em đều là du học sinh."
      },
      {
        "id": "hnl-lex-066c8090ddf436a0",
        "hanzi": "你们",
        "pinyin": "nǐ men",
        "meaning": "các bạn",
        "example": "你们都是留学生吗？",
        "examplePinyin": "nǐ men dōu shì liú xué shēng ma？",
        "exampleMeaning": "Các em đều là du học sinh phải không?"
      },
      {
        "id": "hnl-lex-b2b2d2fee8626c6b",
        "hanzi": "他们",
        "pinyin": "tā men",
        "meaning": "họ",
        "example": "他们是我的同学，也是我的朋友。",
        "examplePinyin": "tā men shì wǒ de tóng xué， yě shì wǒ de péng yǒu。",
        "exampleMeaning": "Họ là bạn học và cũng là bạn của tôi."
      },
      {
        "id": "hnl-lex-b55b0968750346ee",
        "hanzi": "都",
        "pinyin": "dōu",
        "meaning": "đều",
        "example": "你们都是留学生吗？",
        "examplePinyin": "nǐ men dōu shì liú xué shēng ma？",
        "exampleMeaning": "Các em đều là du học sinh phải không?"
      },
      {
        "id": "hnl-lex-368211f5f4b1d5f1",
        "hanzi": "留学生",
        "pinyin": "liú xué shēng",
        "meaning": "du học sinh",
        "example": "你们都是留学生吗？",
        "examplePinyin": "nǐ men dōu shì liú xué shēng ma？",
        "exampleMeaning": "Các em đều là du học sinh phải không?"
      },
      {
        "id": "hnl-lex-a51368de8122c59c",
        "hanzi": "教授",
        "pinyin": "jiào shòu",
        "meaning": "giáo sư",
        "example": "秘书给校长介绍王教授。",
        "examplePinyin": "mì shū gěi xiào zhǎng jiè shào wáng jiào shòu。",
        "exampleMeaning": "Thư ký giới thiệu giáo sư Vương với hiệu trưởng."
      },
      {
        "id": "hnl-lex-3dedd5dce56e2329",
        "hanzi": "校长",
        "pinyin": "xiào zhǎng",
        "meaning": "hiệu trưởng",
        "example": "秘书给校长介绍王教授。",
        "examplePinyin": "mì shū gěi xiào zhǎng jiè shào wáng jiào shòu。",
        "exampleMeaning": "Thư ký giới thiệu giáo sư Vương với hiệu trưởng."
      },
      {
        "id": "hnl-lex-3f1a3b386d0b2574",
        "hanzi": "秘书",
        "pinyin": "mì shū",
        "meaning": "thư ký",
        "example": "秘书给校长介绍王教授。",
        "examplePinyin": "mì shū gěi xiào zhǎng jiè shào wáng jiào shòu。",
        "exampleMeaning": "Thư ký giới thiệu giáo sư Vương với hiệu trưởng."
      },
      {
        "id": "hnl-lex-e750715ad4afaabd",
        "hanzi": "介绍",
        "pinyin": "jiè shào",
        "meaning": "giới thiệu",
        "example": "秘书给校长介绍王教授。",
        "examplePinyin": "mì shū gěi xiào zhǎng jiè shào wáng jiào shòu。",
        "exampleMeaning": "Thư ký giới thiệu giáo sư Vương với hiệu trưởng."
      },
      {
        "id": "hnl-lex-83faf92f5d41b726",
        "hanzi": "位",
        "pinyin": "wèi",
        "meaning": "vị lượng từ lịch sự",
        "example": "这位是我的老师。",
        "examplePinyin": "zhè wèi shì wǒ de lǎo shī。",
        "exampleMeaning": "Đây là giáo viên của tôi."
      },
      {
        "id": "hnl-lex-a5566812e8992dd0",
        "hanzi": "同学",
        "pinyin": "tóng xué",
        "meaning": "bạn học",
        "example": "他们是我的同学，也是我的朋友。",
        "examplePinyin": "tā men shì wǒ de tóng xué， yě shì wǒ de péng yǒu。",
        "exampleMeaning": "Họ là bạn học và cũng là bạn của tôi."
      },
      {
        "id": "hnl-lex-406c49c01d5465ee",
        "hanzi": "朋友",
        "pinyin": "péng yǒu",
        "meaning": "bạn bè",
        "example": "他们是我的同学，也是我的朋友。",
        "examplePinyin": "tā men shì wǒ de tóng xué， yě shì wǒ de péng yǒu。",
        "exampleMeaning": "Họ là bạn học và cũng là bạn của tôi."
      }
    ],
    "grammar": [
      {
        "title": "都 đứng trước vị ngữ",
        "explanation": "我们都是留学生 nói mọi người trong nhóm đều là du học sinh. Đặt 都 sau chủ ngữ và trước 是 hoặc động từ chính; không để nó trôi ra cuối câu theo thói quen dịch từng từ.",
        "example": "我们都是留学生。",
        "translation": "Chúng tôi đều là du học sinh."
      },
      {
        "title": "这位 và giới thiệu lịch sự",
        "explanation": "位 dùng lịch sự khi nói về người. Trong 这位是我的老师, người được chỉ đến đã rõ nên có thể giới thiệu tiếp danh tính. Học cả cụm để dùng tự nhiên, chưa cần thay mọi 个 thành 位.",
        "example": "这位是我的老师。",
        "translation": "Vị này là giáo viên của tôi."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这位是我的老师。",
        "pinyin": "zhè wèi shì wǒ de lǎo shī。",
        "meaning": "Đây là giáo viên của tôi."
      },
      {
        "speaker": "Minh",
        "hanzi": "老师，您好！",
        "pinyin": "lǎo shī， nín hǎo！",
        "meaning": "Em chào thầy/cô!"
      },
      {
        "speaker": "An",
        "hanzi": "你们都是留学生吗？",
        "pinyin": "nǐ men dōu shì liú xué shēng ma？",
        "meaning": "Các em đều là du học sinh phải không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "是，我们都是留学生。",
        "pinyin": "shì， wǒ men dōu shì liú xué shēng。",
        "meaning": "Vâng, chúng em đều là du học sinh."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn đúng vị trí của 都.",
        "options": [
          "都我们是学生。",
          "我们是学生都。",
          "我们都是学生。"
        ],
        "answer": "我们都是学生。",
        "explanation": "Đặt 都 sau chủ ngữ 我们, trước vị ngữ 是学生.",
        "id": "hanngu-q1-b11-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我们",
          "是留学生",
          "都"
        ],
        "answer": "我们都是留学生",
        "explanation": "Câu hoàn chỉnh: 我们都是留学生。 我们都是留学生 nói mọi người trong nhóm đều là du học sinh. Đặt 都 sau chủ ngữ và trước 是 hoặc động từ chính; không để nó trôi ra cuối câu theo thói quen dịch từng từ.",
        "id": "hanngu-q1-b11-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “秘书” có nghĩa nào?",
        "options": [
          "thư ký",
          "bạn bè",
          "du học sinh",
          "đều"
        ],
        "answer": "thư ký",
        "explanation": "秘书 (mì shū): thư ký. Ví dụ: 秘书给校长介绍王教授。 — Thư ký giới thiệu giáo sư Vương với hiệu trưởng.",
        "id": "hanngu-q1-b11-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “校长” có nghĩa nào?",
        "options": [
          "vị lượng từ lịch sự",
          "hiệu trưởng",
          "giới thiệu",
          "chúng tôi/chúng ta"
        ],
        "answer": "hiệu trưởng",
        "explanation": "校长 (xiào zhǎng): hiệu trưởng. Ví dụ: 秘书给校长介绍王教授。 — Thư ký giới thiệu giáo sư Vương với hiệu trưởng.",
        "id": "hanngu-q1-b11-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “我们” có nghĩa nào?",
        "options": [
          "chúng tôi/chúng ta",
          "bạn bè",
          "vị lượng từ lịch sự",
          "du học sinh"
        ],
        "answer": "chúng tôi/chúng ta",
        "explanation": "我们 (wǒ men): chúng tôi/chúng ta. Ví dụ: 是，我们都是留学生。 — Vâng, chúng em đều là du học sinh.",
        "id": "hanngu-q1-b11-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “同学” có nghĩa nào?",
        "options": [
          "chúng tôi/chúng ta",
          "bạn học",
          "giáo sư",
          "họ"
        ],
        "answer": "bạn học",
        "explanation": "同学 (tóng xué): bạn học. Ví dụ: 他们是我的同学，也是我的朋友。 — Họ là bạn học và cũng là bạn của tôi.",
        "id": "hanngu-q1-b11-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “giới thiệu” (jiè shào). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "介绍",
        "alternatives": [],
        "explanation": "介绍 (jiè shào) nghĩa là giới thiệu. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b11-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đều” (dōu). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "都",
        "alternatives": [],
        "explanation": "都 (dōu) nghĩa là đều. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b11-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Chúng tôi đều là du học sinh”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “这位 và giới thiệu lịch sự”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 11, mốc PDF 104. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b12",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 12",
    "title": "Học ở đâu và cảm nhận thế nào",
    "subtitle": "我在学校学习。",
    "minutes": 25,
    "order": 13,
    "objectives": [
      "Dùng mẫu “我在学校学习。” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 在 + nơi + động từ / 觉得 nêu cảm nhận của người nói.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: học ở đâu và cảm nhận thế nào. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 在 + nơi + động từ.",
    "vocabulary": [
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
        "id": "hnl-lex-61966b12543ed4b8",
        "hanzi": "怎么样",
        "pinyin": "zěn me yàng",
        "meaning": "thế nào",
        "example": "你觉得汉语怎么样？",
        "examplePinyin": "nǐ jué de hàn yǔ zěn me yàng？",
        "exampleMeaning": "Bạn thấy tiếng Trung thế nào?"
      },
      {
        "id": "hnl-lex-8fbf8261faf72fca",
        "hanzi": "大学",
        "pinyin": "dà xué",
        "meaning": "đại học",
        "example": "我在大学学习。",
        "examplePinyin": "wǒ zài dà xué xué xí。",
        "exampleMeaning": "Tôi học ở đại học."
      },
      {
        "id": "hnl-lex-a5309dbc47ee46d2",
        "hanzi": "语言",
        "pinyin": "yǔ yán",
        "meaning": "ngôn ngữ",
        "example": "我在语言大学学习。",
        "examplePinyin": "wǒ zài yǔ yán dà xué xué xí。",
        "exampleMeaning": "Tôi học ở đại học ngôn ngữ."
      },
      {
        "id": "hnl-lex-e11225ecb282c210",
        "hanzi": "发音",
        "pinyin": "fā yīn",
        "meaning": "phát âm",
        "example": "我每天听录音，练习发音。",
        "examplePinyin": "wǒ měi tiān tīng lù yīn， liàn xí fā yīn。",
        "exampleMeaning": "Mỗi ngày tôi nghe bản ghi âm, luyện phát âm."
      },
      {
        "id": "hnl-lex-be8bf748bf438043",
        "hanzi": "语法",
        "pinyin": "yǔ fǎ",
        "meaning": "ngữ pháp",
        "example": "你觉得语法难吗？",
        "examplePinyin": "nǐ jué de yǔ fǎ nán ma？",
        "exampleMeaning": "Bạn thấy ngữ pháp khó không?"
      },
      {
        "id": "hnl-lex-5830f3e56f43d03d",
        "hanzi": "听",
        "pinyin": "tīng",
        "meaning": "nghe",
        "example": "我每天听录音，练习发音。",
        "examplePinyin": "wǒ měi tiān tīng lù yīn， liàn xí fā yīn。",
        "exampleMeaning": "Mỗi ngày tôi nghe bản ghi âm, luyện phát âm."
      },
      {
        "id": "hnl-lex-38ca0a69df7e2321",
        "hanzi": "读",
        "pinyin": "dú",
        "meaning": "đọc",
        "example": "我们一起读书、写字。",
        "examplePinyin": "wǒ men yì qǐ dú shū、 xiě zì。",
        "exampleMeaning": "Chúng tôi cùng đọc sách và viết chữ."
      },
      {
        "id": "hnl-lex-e954d6598f5c397b",
        "hanzi": "写",
        "pinyin": "xiě",
        "meaning": "viết",
        "example": "我们一起读书、写字。",
        "examplePinyin": "wǒ men yì qǐ dú shū、 xiě zì。",
        "exampleMeaning": "Chúng tôi cùng đọc sách và viết chữ."
      },
      {
        "id": "hnl-lex-c136a85248f8db87",
        "hanzi": "练习",
        "pinyin": "liàn xí",
        "meaning": "luyện tập",
        "example": "我每天听录音，练习发音。",
        "examplePinyin": "wǒ měi tiān tīng lù yīn， liàn xí fā yīn。",
        "exampleMeaning": "Mỗi ngày tôi nghe bản ghi âm, luyện phát âm."
      },
      {
        "id": "hnl-lex-0494876e00c0db11",
        "hanzi": "每天",
        "pinyin": "měi tiān",
        "meaning": "mỗi ngày",
        "example": "我每天听录音，练习发音。",
        "examplePinyin": "wǒ měi tiān tīng lù yīn， liàn xí fā yīn。",
        "exampleMeaning": "Mỗi ngày tôi nghe bản ghi âm, luyện phát âm."
      },
      {
        "id": "hnl-lex-673491d8d7b48657",
        "hanzi": "一起",
        "pinyin": "yì qǐ",
        "meaning": "cùng nhau",
        "example": "我们一起读书、写字。",
        "examplePinyin": "wǒ men yì qǐ dú shū、 xiě zì。",
        "exampleMeaning": "Chúng tôi cùng đọc sách và viết chữ."
      }
    ],
    "grammar": [
      {
        "title": "在 + nơi + động từ",
        "explanation": "我在学校学习 nêu bối cảnh địa điểm trước hoạt động. Đừng đặt 学习在学校 như thể chuyển nguyên thứ tự “học ở trường” mà không điều chỉnh cấu trúc.",
        "example": "我在学校学习。",
        "translation": "Tôi học ở trường."
      },
      {
        "title": "觉得 nêu cảm nhận của người nói",
        "explanation": "我觉得语法不太难 là cảm nhận cá nhân, không phải kết luận cho mọi người. 怎么样 mở câu hỏi rộng để người nghe nhận xét; trả lời bằng một ý ngắn, rõ trước khi thêm lý do.",
        "example": "你觉得汉语怎么样？",
        "translation": "Bạn thấy tiếng Trung thế nào?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你在哪儿学习汉语？",
        "pinyin": "nǐ zài nǎr xué xí hàn yǔ？",
        "meaning": "Bạn học tiếng Trung ở đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我在大学学习。",
        "pinyin": "wǒ zài dà xué xué xí。",
        "meaning": "Tôi học ở đại học."
      },
      {
        "speaker": "An",
        "hanzi": "你觉得语法难吗？",
        "pinyin": "nǐ jué de yǔ fǎ nán ma？",
        "meaning": "Bạn thấy ngữ pháp khó không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我觉得不太难。",
        "pinyin": "wǒ jué de bù tài nán。",
        "meaning": "Tôi thấy không khó lắm."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Chọn cách nói “Tôi học ở trường”.",
        "options": [
          "我学习在是学校。",
          "在我学习学校。",
          "我在学校学习。"
        ],
        "answer": "我在学校学习。",
        "explanation": "Trong mẫu cơ bản, cụm 在学校 đứng trước hoạt động 学习.",
        "id": "hanngu-q1-b12-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "我",
          "学习汉语",
          "在学校"
        ],
        "answer": "我在学校学习汉语",
        "explanation": "Câu hoàn chỉnh: 我在学校学习汉语。 我在学校学习 nêu bối cảnh địa điểm trước hoạt động. Đừng đặt 学习在学校 như thể chuyển nguyên thứ tự “học ở trường” mà không điều chỉnh cấu trúc.",
        "id": "hanngu-q1-b12-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “语法” có nghĩa nào?",
        "options": [
          "phát âm",
          "cùng nhau",
          "ngữ pháp",
          "đại học"
        ],
        "answer": "ngữ pháp",
        "explanation": "语法 (yǔ fǎ): ngữ pháp. Ví dụ: 你觉得语法难吗？ — Bạn thấy ngữ pháp khó không?",
        "id": "hanngu-q1-b12-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “每天” có nghĩa nào?",
        "options": [
          "mỗi ngày",
          "đại học",
          "ngôn ngữ",
          "đọc"
        ],
        "answer": "mỗi ngày",
        "explanation": "每天 (měi tiān): mỗi ngày. Ví dụ: 我每天听录音，练习发音。 — Mỗi ngày tôi nghe bản ghi âm, luyện phát âm.",
        "id": "hanngu-q1-b12-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “练习” có nghĩa nào?",
        "options": [
          "thế nào",
          "luyện tập",
          "ngôn ngữ",
          "mỗi ngày"
        ],
        "answer": "luyện tập",
        "explanation": "练习 (liàn xí): luyện tập. Ví dụ: 我每天听录音，练习发音。 — Mỗi ngày tôi nghe bản ghi âm, luyện phát âm.",
        "id": "hanngu-q1-b12-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “写” có nghĩa nào?",
        "options": [
          "thế nào",
          "viết",
          "cảm thấy/cho rằng",
          "đọc"
        ],
        "answer": "viết",
        "explanation": "写 (xiě): viết. Ví dụ: 我们一起读书、写字。 — Chúng tôi cùng đọc sách và viết chữ.",
        "id": "hanngu-q1-b12-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “đại học” (dà xué). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "大学",
        "alternatives": [],
        "explanation": "大学 (dà xué) nghĩa là đại học. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b12-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cùng nhau” (yì qǐ). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "一起",
        "alternatives": [],
        "explanation": "一起 (yì qǐ) nghĩa là cùng nhau. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b12-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Học ở đâu và cảm nhận thế nào”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “觉得 nêu cảm nhận của người nói”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 12, mốc PDF 116. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b13",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 13",
    "title": "Xác nhận đồ vật: có phải cái này không",
    "subtitle": "这是不是你的箱子？",
    "minutes": 25,
    "order": 14,
    "objectives": [
      "Dùng mẫu “这是不是你的箱子？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 是不是 là câu hỏi chính–phản / Có và không có: 有/没有.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: xác nhận đồ vật: có phải cái này không. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 是不是 là câu hỏi chính–phản.",
    "vocabulary": [
      {
        "id": "hnl-lex-a25d2977bda5184c",
        "hanzi": "这个",
        "pinyin": "zhè ge",
        "meaning": "cái này",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-e5d249e4a3273c21",
        "hanzi": "那个",
        "pinyin": "nà ge",
        "meaning": "cái kia",
        "example": "这个一百块，那个一千块。",
        "examplePinyin": "zhè ge yì bǎi kuài， nà ge yī qiān kuài。",
        "exampleMeaning": "Cái này một trăm đồng, cái kia một nghìn đồng."
      },
      {
        "id": "hnl-lex-fea84e3a75ec8a89",
        "hanzi": "箱子",
        "pinyin": "xiāng zi",
        "meaning": "va li/hòm",
        "example": "这是不是你的箱子？",
        "examplePinyin": "zhè shì bú shì nǐ de xiāng zi？",
        "exampleMeaning": "Đây có phải va li của bạn không?"
      },
      {
        "id": "hnl-lex-04dc00d66ba62b15",
        "hanzi": "重",
        "pinyin": "zhòng",
        "meaning": "nặng",
        "example": "重不重？",
        "examplePinyin": "zhòng bù zhòng？",
        "exampleMeaning": "Có nặng không?"
      },
      {
        "id": "hnl-lex-9faa2d82b065403f",
        "hanzi": "轻",
        "pinyin": "qīng",
        "meaning": "nhẹ",
        "example": "那个箱子很轻，这个很重。",
        "examplePinyin": "nà ge xiāng zi hěn qīng， zhè ge hěn zhòng。",
        "exampleMeaning": "Va li kia rất nhẹ, cái này rất nặng."
      },
      {
        "id": "hnl-lex-3afa7b0c46d6e2f2",
        "hanzi": "中药",
        "pinyin": "zhōng yào",
        "meaning": "thuốc Đông y",
        "example": "中药和西药都在这里。",
        "examplePinyin": "zhōng yào hé xī yào dōu zài zhè lǐ。",
        "exampleMeaning": "Thuốc Đông y và thuốc Tây đều ở đây."
      },
      {
        "id": "hnl-lex-53de4330425c9b0a",
        "hanzi": "西药",
        "pinyin": "xī yào",
        "meaning": "thuốc Tây",
        "example": "中药和西药都在这里。",
        "examplePinyin": "zhōng yào hé xī yào dōu zài zhè lǐ。",
        "exampleMeaning": "Thuốc Đông y và thuốc Tây đều ở đây."
      },
      {
        "id": "hnl-lex-d1f1b53bc518e6c7",
        "hanzi": "东西",
        "pinyin": "dōng xi",
        "meaning": "đồ/vật",
        "example": "我没有东西放在那里。",
        "examplePinyin": "wǒ méi yǒu dōng xī fàng zài nà lǐ。",
        "exampleMeaning": "Tôi không có đồ để ở kia."
      },
      {
        "id": "hnl-lex-cd7e840813d94e38",
        "hanzi": "没有",
        "pinyin": "méi yǒu",
        "meaning": "không có/chưa",
        "example": "我没有东西放在那里。",
        "examplePinyin": "wǒ méi yǒu dōng xī fàng zài nà lǐ。",
        "exampleMeaning": "Tôi không có đồ để ở kia."
      },
      {
        "id": "hnl-lex-46ea5f4b50133601",
        "hanzi": "这里",
        "pinyin": "zhè lǐ",
        "meaning": "ở đây",
        "example": "这里有五个人。",
        "examplePinyin": "zhè lǐ yǒu wǔ gè rén。",
        "exampleMeaning": "Ở đây có năm người."
      },
      {
        "id": "hnl-lex-cbc1cb5b6ef69af4",
        "hanzi": "那里",
        "pinyin": "nà lǐ",
        "meaning": "ở kia",
        "example": "我没有东西放在那里。",
        "examplePinyin": "wǒ méi yǒu dōng xī fàng zài nà lǐ。",
        "exampleMeaning": "Tôi không có đồ để ở kia."
      },
      {
        "id": "hnl-lex-3d4ee83d3e8eddfc",
        "hanzi": "黑",
        "pinyin": "hēi",
        "meaning": "đen",
        "example": "这个箱子是黑的。",
        "examplePinyin": "zhè ge xiāng zi shì hēi de。",
        "exampleMeaning": "Va li này màu đen."
      }
    ],
    "grammar": [
      {
        "title": "是不是 là câu hỏi chính–phản",
        "explanation": "这是中药 đổi sang 这是不是中药 để hỏi xác nhận. Khi đã dùng dạng chính–phản cơ bản, không cần thêm 吗 ở cuối. Tập nhận ra cấu trúc hỏi, không suy ra công dụng hay cách dùng thuốc từ tên gọi.",
        "example": "这是不是你的箱子？",
        "translation": "Đây có phải va li của bạn không?"
      },
      {
        "title": "Có và không có: 有/没有",
        "explanation": "我有箱子 và 我没有箱子 nói về sở hữu. Không dùng 不有 trong mẫu này. Với 我的在这儿, danh từ có thể lược khi cả hai người đều biết đang nói đến vật gì.",
        "example": "我的箱子在这儿。",
        "translation": "Va li của tôi ở đây."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这是不是你的箱子？",
        "pinyin": "zhè shì bú shì nǐ de xiāng zi？",
        "meaning": "Đây có phải va li của bạn không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "是，是我的。",
        "pinyin": "shì， shì wǒ de。",
        "meaning": "Đúng, là của tôi."
      },
      {
        "speaker": "An",
        "hanzi": "重不重？",
        "pinyin": "zhòng bù zhòng？",
        "meaning": "Có nặng không?"
      },
      {
        "speaker": "Minh",
        "hanzi": "不重。",
        "pinyin": "bù zhòng。",
        "meaning": "Không nặng."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Cách nói “Tôi không có va li” là gì?",
        "options": [
          "我有不箱子。",
          "我不有箱子。",
          "我没有箱子。"
        ],
        "answer": "我没有箱子。",
        "explanation": "Phủ định sở hữu với 有 dùng 没有 trong mẫu đang học.",
        "id": "hanngu-q1-b13-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "你的箱子",
          "这",
          "是不是"
        ],
        "answer": "这是不是你的箱子",
        "explanation": "Câu hoàn chỉnh: 这是不是你的箱子。 这是中药 đổi sang 这是不是中药 để hỏi xác nhận. Khi đã dùng dạng chính–phản cơ bản, không cần thêm 吗 ở cuối. Tập nhận ra cấu trúc hỏi, không suy ra công dụng hay cách dùng thuốc từ tên gọi.",
        "id": "hanngu-q1-b13-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “箱子” có nghĩa nào?",
        "options": [
          "ở đây",
          "va li/hòm",
          "nhẹ",
          "cái kia"
        ],
        "answer": "va li/hòm",
        "explanation": "箱子 (xiāng zi): va li/hòm. Ví dụ: 这是不是你的箱子？ — Đây có phải va li của bạn không?",
        "id": "hanngu-q1-b13-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “轻” có nghĩa nào?",
        "options": [
          "va li/hòm",
          "không có/chưa",
          "nhẹ",
          "cái kia"
        ],
        "answer": "nhẹ",
        "explanation": "轻 (qīng): nhẹ. Ví dụ: 那个箱子很轻，这个很重。 — Va li kia rất nhẹ, cái này rất nặng.",
        "id": "hanngu-q1-b13-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “那里” có nghĩa nào?",
        "options": [
          "đồ/vật",
          "cái kia",
          "ở kia",
          "cái này"
        ],
        "answer": "ở kia",
        "explanation": "那里 (nà lǐ): ở kia. Ví dụ: 我没有东西放在那里。 — Tôi không có đồ để ở kia.",
        "id": "hanngu-q1-b13-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “这里” có nghĩa nào?",
        "options": [
          "thuốc Đông y",
          "đen",
          "ở kia",
          "ở đây"
        ],
        "answer": "ở đây",
        "explanation": "这里 (zhè lǐ): ở đây. Ví dụ: 这里有五个人。 — Ở đây có năm người.",
        "id": "hanngu-q1-b13-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “nặng” (zhòng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "重",
        "alternatives": [],
        "explanation": "重 (zhòng) nghĩa là nặng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b13-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “cái kia” (nà ge). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "那个",
        "alternatives": [],
        "explanation": "那个 (nà ge) nghĩa là cái kia. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b13-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Xác nhận đồ vật: có phải cái này không”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “Có và không có: 有/没有”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 13, mốc PDF 128. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b14",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 14",
    "title": "Mới hay cũ: hỏi và chọn rõ ràng",
    "subtitle": "你的车是新的还是旧的？",
    "minutes": 25,
    "order": 15,
    "objectives": [
      "Dùng mẫu “你的车是新的还是旧的？” trong tình huống phù hợp.",
      "Nhận diện 12 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 还是 nối lựa chọn trong câu hỏi / 的 giúp nhận ra phần được lược.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: mới hay cũ: hỏi và chọn rõ ràng. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 还是 nối lựa chọn trong câu hỏi.",
    "vocabulary": [
      {
        "id": "hnl-lex-3a0ee8a7dc15bc19",
        "hanzi": "车",
        "pinyin": "chē",
        "meaning": "xe",
        "example": "这是谁的自行车？",
        "examplePinyin": "zhè shì shéi de zì xíng chē？",
        "exampleMeaning": "Đây là xe đạp của ai?"
      },
      {
        "id": "hnl-lex-b0ec4bc715059910",
        "hanzi": "新",
        "pinyin": "xīn",
        "meaning": "mới",
        "example": "是新的还是旧的？",
        "examplePinyin": "shì xīn de hái shì jiù de？",
        "exampleMeaning": "Là xe mới hay cũ?"
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
        "id": "hnl-lex-5d4aef3a3e131d39",
        "hanzi": "还是",
        "pinyin": "hái shì",
        "meaning": "hay trong câu hỏi",
        "example": "是新的还是旧的？",
        "examplePinyin": "shì xīn de hái shì jiù de？",
        "exampleMeaning": "Là xe mới hay cũ?"
      },
      {
        "id": "hnl-lex-117831c261f03b4f",
        "hanzi": "的",
        "pinyin": "de",
        "meaning": "trợ từ sở hữu/bổ nghĩa",
        "example": "这是谁的自行车？",
        "examplePinyin": "zhè shì shéi de zì xíng chē？",
        "exampleMeaning": "Đây là xe đạp của ai?"
      },
      {
        "id": "hnl-lex-c49ae759647a65df",
        "hanzi": "自行车",
        "pinyin": "zì xíng chē",
        "meaning": "xe đạp",
        "example": "这是谁的自行车？",
        "examplePinyin": "zhè shì shéi de zì xíng chē？",
        "exampleMeaning": "Đây là xe đạp của ai?"
      },
      {
        "id": "hnl-lex-507c650ab82dc0e2",
        "hanzi": "颜色",
        "pinyin": "yán sè",
        "meaning": "màu sắc",
        "example": "你喜欢什么颜色，红的还是蓝的？",
        "examplePinyin": "nǐ xǐ huān shén me yán sè， hóng de hái shì lán de？",
        "exampleMeaning": "Bạn thích màu gì, đỏ hay xanh lam?"
      },
      {
        "id": "hnl-lex-7243ca534091f5a7",
        "hanzi": "红",
        "pinyin": "hóng",
        "meaning": "đỏ",
        "example": "你喜欢什么颜色，红的还是蓝的？",
        "examplePinyin": "nǐ xǐ huān shén me yán sè， hóng de hái shì lán de？",
        "exampleMeaning": "Bạn thích màu gì, đỏ hay xanh lam?"
      },
      {
        "id": "hnl-lex-5b6a10618d50ffd7",
        "hanzi": "蓝",
        "pinyin": "lán",
        "meaning": "xanh lam",
        "example": "你喜欢什么颜色，红的还是蓝的？",
        "examplePinyin": "nǐ xǐ huān shén me yán sè， hóng de hái shì lán de？",
        "exampleMeaning": "Bạn thích màu gì, đỏ hay xanh lam?"
      },
      {
        "id": "hnl-lex-1e81bd0d64835c0f",
        "hanzi": "白色",
        "pinyin": "bái sè",
        "meaning": "màu trắng",
        "example": "妹妹喜欢白色，哥哥喜欢黑色。",
        "examplePinyin": "mèi mèi xǐ huān bái sè， gē gē xǐ huān hēi sè。",
        "exampleMeaning": "Em gái thích màu trắng, anh trai thích màu đen."
      },
      {
        "id": "hnl-lex-6c9e46b1d8d9b4b5",
        "hanzi": "黑色",
        "pinyin": "hēi sè",
        "meaning": "màu đen",
        "example": "妹妹喜欢白色，哥哥喜欢黑色。",
        "examplePinyin": "mèi mèi xǐ huān bái sè， gē gē xǐ huān hēi sè。",
        "exampleMeaning": "Em gái thích màu trắng, anh trai thích màu đen."
      },
      {
        "id": "hnl-lex-774299cd59b158c9",
        "hanzi": "哪",
        "pinyin": "nǎ",
        "meaning": "mà/nào",
        "example": "你去哪儿？",
        "examplePinyin": "nǐ qù nǎr？",
        "exampleMeaning": "Bạn đi đâu?"
      }
    ],
    "grammar": [
      {
        "title": "还是 nối lựa chọn trong câu hỏi",
        "explanation": "新的还是旧的 đưa hai lựa chọn để người nghe chọn. Câu trả lời nên chọn một ý cụ thể. Không dùng một tiếng “vâng” để thay phần thông tin đang được hỏi.",
        "example": "你的车是新的还是旧的？",
        "translation": "Xe của bạn mới hay cũ?"
      },
      {
        "title": "的 giúp nhận ra phần được lược",
        "explanation": "新的 có thể mang nghĩa cái mới khi danh từ đã rõ trong ngữ cảnh. Đừng bỏ cả chủ đề khiến người nghe không biết mới là cái gì. Với 我的车, 的 nối người sở hữu với vật.",
        "example": "我的车是新的。",
        "translation": "Xe của tôi là xe mới."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "这是谁的自行车？",
        "pinyin": "zhè shì shéi de zì xíng chē？",
        "meaning": "Đây là xe đạp của ai?"
      },
      {
        "speaker": "Minh",
        "hanzi": "是我的。",
        "pinyin": "shì wǒ de。",
        "meaning": "Là của tôi."
      },
      {
        "speaker": "An",
        "hanzi": "是新的还是旧的？",
        "pinyin": "shì xīn de hái shì jiù de？",
        "meaning": "Là xe mới hay cũ?"
      },
      {
        "speaker": "Minh",
        "hanzi": "是新的。",
        "pinyin": "shì xīn de。",
        "meaning": "Là xe mới."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Câu hỏi 还是 trong bài nên được đáp thế nào?",
        "options": [
          "Luôn chỉ nói 对",
          "Đổi sang hỏi giá",
          "Chọn một phương án cụ thể"
        ],
        "answer": "Chọn một phương án cụ thể",
        "explanation": "Người hỏi muốn biết lựa chọn nào đúng trong hai lựa chọn đã nêu.",
        "id": "hanngu-q1-b14-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "新的",
          "是",
          "我的车"
        ],
        "answer": "我的车是新的",
        "explanation": "Câu hoàn chỉnh: 我的车是新的。 新的还是旧的 đưa hai lựa chọn để người nghe chọn. Câu trả lời nên chọn một ý cụ thể. Không dùng một tiếng “vâng” để thay phần thông tin đang được hỏi.",
        "id": "hanngu-q1-b14-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “车” có nghĩa nào?",
        "options": [
          "màu đen",
          "đỏ",
          "xe",
          "trợ từ sở hữu/bổ nghĩa"
        ],
        "answer": "xe",
        "explanation": "车 (chē): xe. Ví dụ: 这是谁的自行车？ — Đây là xe đạp của ai?",
        "id": "hanngu-q1-b14-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “的” có nghĩa nào?",
        "options": [
          "mà/nào",
          "mới",
          "trợ từ sở hữu/bổ nghĩa",
          "đỏ"
        ],
        "answer": "trợ từ sở hữu/bổ nghĩa",
        "explanation": "的 (de): trợ từ sở hữu/bổ nghĩa. Ví dụ: 这是谁的自行车？ — Đây là xe đạp của ai?",
        "id": "hanngu-q1-b14-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “蓝” có nghĩa nào?",
        "options": [
          "hay trong câu hỏi",
          "màu trắng",
          "xanh lam",
          "màu sắc"
        ],
        "answer": "xanh lam",
        "explanation": "蓝 (lán): xanh lam. Ví dụ: 你喜欢什么颜色，红的还是蓝的？ — Bạn thích màu gì, đỏ hay xanh lam?",
        "id": "hanngu-q1-b14-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “自行车” có nghĩa nào?",
        "options": [
          "đỏ",
          "màu đen",
          "xe đạp",
          "trợ từ sở hữu/bổ nghĩa"
        ],
        "answer": "xe đạp",
        "explanation": "自行车 (zì xíng chē): xe đạp. Ví dụ: 这是谁的自行车？ — Đây là xe đạp của ai?",
        "id": "hanngu-q1-b14-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “màu sắc” (yán sè). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "颜色",
        "alternatives": [],
        "explanation": "颜色 (yán sè) nghĩa là màu sắc. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b14-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “màu trắng” (bái sè). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "白色",
        "alternatives": [],
        "explanation": "白色 (bái sè) nghĩa là màu trắng. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b14-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Mới hay cũ: hỏi và chọn rõ ràng”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “的 giúp nhận ra phần được lược”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 14, mốc PDF 142. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-b15",
    "level": 1,
    "unit": "Quyển 1 · Bài nguồn 15",
    "title": "Gia đình và số người trong công ty",
    "subtitle": "你家有几口人？",
    "minutes": 25,
    "order": 16,
    "objectives": [
      "Dùng mẫu “你家有几口人？” trong tình huống phù hợp.",
      "Nhận diện 14 từ/cụm từ và tự nhớ lại ít nhất nhóm đang luyện.",
      "Phân biệt hai trọng tâm: 几 và 多少 hỏi số lượng / 口 chỉ số người trong gia đình ở mẫu này.",
      "Làm bài và đọc phản hồi; không dùng điểm chữ viết để tự kết luận phát âm đã chính xác."
    ],
    "introduction": "Bài này tập trung vào tình huống: gia đình và số người trong công ty. Hãy học thành 3 lượt ngắn, dừng sau mỗi nhóm từ để tự nhớ lại thay vì đọc liên tục. Lượt đầu nghe/đọc hội thoại và nhận ra ý chính; lượt sau đối chiếu quy tắc, che Pinyin rồi thử nói lại; cuối cùng làm bài tập và đọc phản hồi. Với người mới, chỉ cần dùng được một mẫu ngắn trước; các từ còn lại được ôn dần. Bạn có thể sao chép chữ Hán khi chưa cài bàn phím tiếng Trung. Giải thích tiếng Việt và bài luyện là phần Hán Ngữ Lab bổ sung theo chủ đề sách, không phải bản chép nguyên văn. Mục trọng tâm: 几 và 多少 hỏi số lượng.",
    "vocabulary": [
      {
        "id": "hnl-lex-4d3930c73656b993",
        "hanzi": "家人",
        "pinyin": "jiā rén",
        "meaning": "người nhà",
        "example": "照片里有我的家人。",
        "examplePinyin": "zhào piān lǐ yǒu wǒ de jiā rén。",
        "exampleMeaning": "Trong ảnh có người nhà của tôi."
      },
      {
        "id": "hnl-lex-8af1284c5ed6e6b6",
        "hanzi": "有",
        "pinyin": "yǒu",
        "meaning": "có",
        "example": "你家有几口人？",
        "examplePinyin": "nǐ jiā yǒu jǐ kǒu rén？",
        "exampleMeaning": "Gia đình bạn có mấy người?"
      },
      {
        "id": "hnl-lex-b51a9eb6213da878",
        "hanzi": "几",
        "pinyin": "jǐ",
        "meaning": "mấy",
        "example": "你家有几口人？",
        "examplePinyin": "nǐ jiā yǒu jǐ kǒu rén？",
        "exampleMeaning": "Gia đình bạn có mấy người?"
      },
      {
        "id": "hnl-lex-b0b13e77507532ee",
        "hanzi": "公司",
        "pinyin": "gōng sī",
        "meaning": "công ty",
        "example": "她在公司工作。",
        "examplePinyin": "tā zài gōng sī gōng zuò。",
        "exampleMeaning": "Chị ấy làm việc ở công ty."
      },
      {
        "id": "hnl-lex-e0051ac6165f766c",
        "hanzi": "职员",
        "pinyin": "zhí yuán",
        "meaning": "nhân viên",
        "example": "我们公司有二十个职员。",
        "examplePinyin": "wǒ men gōng sī yǒu èr shí gè zhí yuán。",
        "exampleMeaning": "Công ty chúng tôi có hai mươi nhân viên."
      },
      {
        "id": "hnl-lex-1fb51b3dc2afa2d4",
        "hanzi": "哥哥",
        "pinyin": "gē gē",
        "meaning": "anh trai",
        "example": "妹妹喜欢白色，哥哥喜欢黑色。",
        "examplePinyin": "mèi mèi xǐ huān bái sè， gē gē xǐ huān hēi sè。",
        "exampleMeaning": "Em gái thích màu trắng, anh trai thích màu đen."
      },
      {
        "id": "hnl-lex-65303f8e84862011",
        "hanzi": "姐姐",
        "pinyin": "jiě jiě",
        "meaning": "chị gái",
        "example": "你姐姐在哪儿工作？",
        "examplePinyin": "nǐ jiě jiě zài nǎr gōng zuò？",
        "exampleMeaning": "Chị gái bạn làm việc ở đâu?"
      },
      {
        "id": "hnl-lex-1dc10a6fdb998a9f",
        "hanzi": "弟弟",
        "pinyin": "dì di",
        "meaning": "em trai",
        "example": "我弟弟在学校学习。",
        "examplePinyin": "wǒ dì di zài xué xiào xué xí。",
        "exampleMeaning": "Em trai tôi học ở trường."
      },
      {
        "id": "hnl-lex-2de5d094293f9079",
        "hanzi": "妹妹",
        "pinyin": "mèi mèi",
        "meaning": "em gái",
        "example": "妹妹喜欢白色，哥哥喜欢黑色。",
        "examplePinyin": "mèi mèi xǐ huān bái sè， gē gē xǐ huān hēi sè。",
        "exampleMeaning": "Em gái thích màu trắng, anh trai thích màu đen."
      },
      {
        "id": "hnl-lex-6f154ffda28c3b41",
        "hanzi": "照片",
        "pinyin": "zhào piān",
        "meaning": "ảnh",
        "example": "照片里有我的家人。",
        "examplePinyin": "zhào piān lǐ yǒu wǒ de jiā rén。",
        "exampleMeaning": "Trong ảnh có người nhà của tôi."
      },
      {
        "id": "hnl-lex-f2bf506e0c0696ca",
        "hanzi": "个",
        "pinyin": "gè",
        "meaning": "lượng từ phổ biến",
        "example": "我们公司有二十个职员。",
        "examplePinyin": "wǒ men gōng sī yǒu èr shí gè zhí yuán。",
        "exampleMeaning": "Công ty chúng tôi có hai mươi nhân viên."
      },
      {
        "id": "hnl-lex-95c4fe4eebda24e2",
        "hanzi": "工作",
        "pinyin": "gōng zuò",
        "meaning": "công việc/làm việc",
        "example": "你姐姐在哪儿工作？",
        "examplePinyin": "nǐ jiě jiě zài nǎr gōng zuò？",
        "exampleMeaning": "Chị gái bạn làm việc ở đâu?"
      },
      {
        "id": "hnl-lex-ca7c7862debbc5ac",
        "hanzi": "两",
        "pinyin": "liǎng",
        "meaning": "hai",
        "example": "我要两个馒头。",
        "examplePinyin": "wǒ yào liǎng gè mán tou。",
        "exampleMeaning": "Tôi lấy hai chiếc màn thầu."
      },
      {
        "id": "hnl-lex-fdfda6fefaf3508e",
        "hanzi": "多少",
        "pinyin": "duō shao",
        "meaning": "bao nhiêu",
        "example": "我买苹果。多少钱一斤？",
        "examplePinyin": "wǒ mǎi píng guǒ。 duō shǎo qián yī jīn？",
        "exampleMeaning": "Tôi mua táo. Một cân bao nhiêu tiền?"
      }
    ],
    "grammar": [
      {
        "title": "几 và 多少 hỏi số lượng",
        "explanation": "几 thường dùng khi dự kiến một số nhỏ; 多少 có phạm vi hỏi rộng hơn. Đây là xu hướng dùng trong mẫu cơ bản, không phải ranh giới cứng cho mọi cuộc nói chuyện. Hãy giữ lượng từ cần thiết như 几口人 hoặc 几个人.",
        "example": "你家有几口人？",
        "translation": "Gia đình bạn có mấy người?"
      },
      {
        "title": "口 chỉ số người trong gia đình ở mẫu này",
        "explanation": "你家有几口人 và 我家有四口人 là cụm thường gặp khi giới thiệu gia đình. Không mang lượng từ 口 sang mọi nhóm người như công ty; với nhân viên có thể dùng 个 hoặc danh từ số lượng phù hợp.",
        "example": "我们公司有二十个职员。",
        "translation": "Công ty chúng tôi có hai mươi nhân viên."
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你家有几口人？",
        "pinyin": "nǐ jiā yǒu jǐ kǒu rén？",
        "meaning": "Gia đình bạn có mấy người?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我家有四口人。",
        "pinyin": "wǒ jiā yǒu sì kǒu rén。",
        "meaning": "Gia đình tôi có bốn người."
      },
      {
        "speaker": "An",
        "hanzi": "你姐姐在哪儿工作？",
        "pinyin": "nǐ jiě jiě zài nǎr gōng zuò？",
        "meaning": "Chị gái bạn làm việc ở đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "她在公司工作。",
        "pinyin": "tā zài gōng sī gōng zuò。",
        "meaning": "Chị ấy làm việc ở công ty."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Khi hỏi số người trong gia đình bằng mẫu của bài, chọn câu nào?",
        "options": [
          "你家有几斤人？",
          "你家有几口人？",
          "你家是几钱？"
        ],
        "answer": "你家有几口人？",
        "explanation": "Trong mẫu này dùng 口 để hỏi số thành viên gia đình, không dùng đơn vị cân nặng.",
        "id": "hanngu-q1-b15-q01"
      },
      {
        "type": "order",
        "prompt": "Sắp xếp các cụm để thành câu tự nhiên theo mẫu vừa học.",
        "options": [
          "四口人",
          "我家",
          "有"
        ],
        "answer": "我家有四口人",
        "explanation": "Câu hoàn chỉnh: 我家有四口人。 几 thường dùng khi dự kiến một số nhỏ; 多少 có phạm vi hỏi rộng hơn. Đây là xu hướng dùng trong mẫu cơ bản, không phải ranh giới cứng cho mọi cuộc nói chuyện. Hãy giữ lượng từ cần thiết như 几口人 hoặc 几个人.",
        "id": "hanngu-q1-b15-q02"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “姐姐” có nghĩa nào?",
        "options": [
          "em trai",
          "chị gái",
          "người nhà",
          "công việc/làm việc"
        ],
        "answer": "chị gái",
        "explanation": "姐姐 (jiě jiě): chị gái. Ví dụ: 你姐姐在哪儿工作？ — Chị gái bạn làm việc ở đâu?",
        "id": "hanngu-q1-b15-q03"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “职员” có nghĩa nào?",
        "options": [
          "nhân viên",
          "công việc/làm việc",
          "em trai",
          "có"
        ],
        "answer": "nhân viên",
        "explanation": "职员 (zhí yuán): nhân viên. Ví dụ: 我们公司有二十个职员。 — Công ty chúng tôi có hai mươi nhân viên.",
        "id": "hanngu-q1-b15-q04"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “工作” có nghĩa nào?",
        "options": [
          "bao nhiêu",
          "có",
          "em gái",
          "công việc/làm việc"
        ],
        "answer": "công việc/làm việc",
        "explanation": "工作 (gōng zuò): công việc/làm việc. Ví dụ: 你姐姐在哪儿工作？ — Chị gái bạn làm việc ở đâu?",
        "id": "hanngu-q1-b15-q05"
      },
      {
        "type": "choice",
        "prompt": "Trong nhóm từ của bài, “多少” có nghĩa nào?",
        "options": [
          "anh trai",
          "ảnh",
          "bao nhiêu",
          "có"
        ],
        "answer": "bao nhiêu",
        "explanation": "多少 (duō shao): bao nhiêu. Ví dụ: 我买苹果。多少钱一斤？ — Tôi mua táo. Một cân bao nhiêu tiền?",
        "id": "hanngu-q1-b15-q06"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “em trai” (dì di). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "弟弟",
        "alternatives": [],
        "explanation": "弟弟 (dì di) nghĩa là em trai. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b15-q07"
      },
      {
        "type": "input",
        "prompt": "Điền chữ Hán cho “hai” (liǎng). Nếu chưa gõ được tiếng Trung, có thể sao chép từ thẻ từ rồi đọc lại.",
        "answer": "两",
        "alternatives": [],
        "explanation": "两 (liǎng) nghĩa là hai. Chú ý dấu Pinyin khi tự đọc, dù câu này chỉ chấm chữ Hán.",
        "id": "hanngu-q1-b15-q08"
      }
    ],
    "summary": "Bạn vừa luyện tình huống “Gia đình và số người trong công ty”. Thử thay một thông tin bằng điều thật về bạn rồi nói lại hai lượt lời. Nếu còn vướng, quay lại mục “口 chỉ số người trong gia đình ở mẫu này”, sau đó ôn các từ đã quên vào ngày tiếp theo. Phần luyện do Hán Ngữ Lab biên soạn bổ sung; giáo án vẫn chưa được người có chuyên môn duyệt độc lập.",
    "provenance": "Hán Ngữ Lab tự biên soạn cho người Việt; theo chủ đề quyển 1, bài 15, mốc PDF 155. OCR không được coi là bản duyệt; lời giải và hoạt động là bổ sung riêng. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; lộ trình nội bộ, chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  },
  {
    "id": "hanngu-q1-on-tap",
    "level": 1,
    "unit": "Ôn tập quyển 1",
    "title": "Nhìn lại quyển 1 — Dùng được điều đã học",
    "subtitle": "Ôn ý nghĩa · Chọn cấu trúc · Tự nói lại",
    "minutes": 30,
    "order": 17,
    "objectives": [
      "Nhớ lại từ đã học mà không nhìn nghĩa trước.",
      "Chọn cấu trúc theo ý muốn nói, không chỉ theo một từ khóa.",
      "Đọc phản hồi và quay lại đúng bài đang nhầm."
    ],
    "introduction": "Đây là điểm dừng ôn tập sau toàn bộ quyển 1. Các câu hỏi được lấy lại có chủ đích từ những tình huống đã học để kiểm tra khả năng nhớ sau một khoảng cách. Làm trước rồi đọc lời giải; khi chưa đúng, ghi tên chủ đề và quay lại bài tương ứng. Không cần chạy đua điểm số.",
    "vocabulary": [
      {
        "id": "hnl-lex-2e1299ace18156b8",
        "hanzi": "你",
        "pinyin": "nǐ",
        "meaning": "bạn",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-42a4a3e5cc6ec269",
        "hanzi": "好",
        "pinyin": "hǎo",
        "meaning": "tốt/khỏe",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-b5944c5da6ba78cb",
        "hanzi": "你好",
        "pinyin": "nǐ hǎo",
        "meaning": "xin chào",
        "example": "你好！",
        "examplePinyin": "nǐ hǎo！",
        "exampleMeaning": "Xin chào!"
      },
      {
        "id": "hnl-lex-85ba52136a2616d0",
        "hanzi": "我",
        "pinyin": "wǒ",
        "meaning": "tôi",
        "example": "我买一个苹果。",
        "examplePinyin": "wǒ mǎi yí gè píng guǒ。",
        "exampleMeaning": "Tôi mua một quả táo."
      },
      {
        "id": "hnl-lex-d25a2d02ac2716c9",
        "hanzi": "一",
        "pinyin": "yī",
        "meaning": "một",
        "example": "我买一个苹果。",
        "examplePinyin": "wǒ mǎi yí gè píng guǒ。",
        "exampleMeaning": "Tôi mua một quả táo."
      },
      {
        "id": "hnl-lex-175ec9124f2b5ccb",
        "hanzi": "五",
        "pinyin": "wǔ",
        "meaning": "năm",
        "example": "这里有五个人。",
        "examplePinyin": "zhè lǐ yǒu wǔ gè rén。",
        "exampleMeaning": "Ở đây có năm người."
      },
      {
        "id": "hnl-lex-0d859dd4ad63c620",
        "hanzi": "八",
        "pinyin": "bā",
        "meaning": "tám",
        "example": "我每天八点去学校。",
        "examplePinyin": "wǒ měi tiān bā diǎn qù xué xiào。",
        "exampleMeaning": "Mỗi ngày tôi đến trường lúc tám giờ."
      },
      {
        "id": "hnl-lex-10c9411e20eea6ef",
        "hanzi": "大",
        "pinyin": "dà",
        "meaning": "to/lớn",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      },
      {
        "id": "hnl-lex-4c6cd0153a3030d1",
        "hanzi": "不",
        "pinyin": "bù",
        "meaning": "không",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-b4e9f3c65706a337",
        "hanzi": "口",
        "pinyin": "kǒu",
        "meaning": "miệng/nhân khẩu",
        "example": "我家有四口人。",
        "examplePinyin": "wǒ jiā yǒu sì kǒu rén。",
        "exampleMeaning": "Gia đình tôi có bốn người."
      },
      {
        "id": "hnl-lex-c296b97217428c0c",
        "hanzi": "白",
        "pinyin": "bái",
        "meaning": "trắng",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      },
      {
        "id": "hnl-lex-89886f6a86f598e5",
        "hanzi": "女",
        "pinyin": "nǚ",
        "meaning": "nữ",
        "example": "这是一位女老师。",
        "examplePinyin": "zhè shì yī wèi nǚ lǎo shī。",
        "exampleMeaning": "Đây là một cô giáo."
      },
      {
        "id": "hnl-lex-b9537b6760df16a2",
        "hanzi": "马",
        "pinyin": "mǎ",
        "meaning": "con ngựa",
        "example": "我喜欢白马。",
        "examplePinyin": "wǒ xǐ huān bái mǎ。",
        "exampleMeaning": "Tôi thích ngựa trắng."
      },
      {
        "id": "hnl-lex-79bd6ae44ef592d2",
        "hanzi": "汉语",
        "pinyin": "hàn yǔ",
        "meaning": "tiếng Hán/tiếng Trung",
        "example": "汉语难吗？",
        "examplePinyin": "hàn yǔ nán ma？",
        "exampleMeaning": "Tiếng Trung có khó không?"
      },
      {
        "id": "hnl-lex-62f218a6663fa49a",
        "hanzi": "难",
        "pinyin": "nán",
        "meaning": "khó",
        "example": "汉语难吗？",
        "examplePinyin": "hàn yǔ nán ma？",
        "exampleMeaning": "Tiếng Trung có khó không?"
      },
      {
        "id": "hnl-lex-5b9968921dcebf9e",
        "hanzi": "太",
        "pinyin": "tài",
        "meaning": "quá",
        "example": "我不太忙。",
        "examplePinyin": "wǒ bù tài máng。",
        "exampleMeaning": "Tôi không bận lắm."
      },
      {
        "id": "hnl-lex-993dc3df19a981fe",
        "hanzi": "忙",
        "pinyin": "máng",
        "meaning": "bận",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-d8a783f7aebf128a",
        "hanzi": "很",
        "pinyin": "hěn",
        "meaning": "rất",
        "example": "我的家很大。",
        "examplePinyin": "wǒ de jiā hěn dà。",
        "exampleMeaning": "Nhà của tôi rất rộng."
      },
      {
        "id": "hnl-lex-9a0051dd27c2c8cb",
        "hanzi": "吗",
        "pinyin": "ma",
        "meaning": "trợ từ hỏi",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-e1a7d74c07990d7e",
        "hanzi": "也",
        "pinyin": "yě",
        "meaning": "cũng",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-7b31265221813dda",
        "hanzi": "不太",
        "pinyin": "bù tài",
        "meaning": "không quá/không lắm",
        "example": "我不太忙。",
        "examplePinyin": "wǒ bù tài máng。",
        "exampleMeaning": "Tôi không bận lắm."
      },
      {
        "id": "hnl-lex-0aefbd9832c036ef",
        "hanzi": "容易",
        "pinyin": "róng yì",
        "meaning": "dễ",
        "example": "这个字不太难，也不太容易。",
        "examplePinyin": "zhè ge zì bù tài nán， yě bù tài róng yì。",
        "exampleMeaning": "Chữ này không khó lắm, cũng không dễ lắm."
      },
      {
        "id": "hnl-lex-1b8dad60e3c077fc",
        "hanzi": "今天",
        "pinyin": "jīn tiān",
        "meaning": "hôm nay",
        "example": "你今天忙吗？",
        "examplePinyin": "nǐ jīn tiān máng ma？",
        "exampleMeaning": "Hôm nay bạn có bận không?"
      },
      {
        "id": "hnl-lex-2e8c07ecbb2b01b4",
        "hanzi": "学习",
        "pinyin": "xué xí",
        "meaning": "học tập",
        "example": "我在语言大学学习。",
        "examplePinyin": "wǒ zài yǔ yán dà xué xué xí。",
        "exampleMeaning": "Tôi học ở đại học ngôn ngữ."
      },
      {
        "id": "hnl-lex-242103860e5507c8",
        "hanzi": "明天",
        "pinyin": "míng tiān",
        "meaning": "ngày mai",
        "example": "你明天学习汉语吗？",
        "examplePinyin": "nǐ míng tiān xué xí hàn yǔ ma？",
        "exampleMeaning": "Ngày mai bạn học tiếng Trung phải không?"
      },
      {
        "id": "hnl-lex-f5580a52759f5f5d",
        "hanzi": "见",
        "pinyin": "jiàn",
        "meaning": "gặp",
        "example": "对，明天见！",
        "examplePinyin": "duì， míng tiān jiàn！",
        "exampleMeaning": "Đúng, ngày mai gặp lại!"
      },
      {
        "id": "hnl-lex-6a24fb8f15777044",
        "hanzi": "去",
        "pinyin": "qù",
        "meaning": "đi",
        "example": "你去邮局吗？",
        "examplePinyin": "nǐ qù yóu jú ma？",
        "exampleMeaning": "Bạn đi bưu điện phải không?"
      },
      {
        "id": "hnl-lex-3e634f00a8887c57",
        "hanzi": "北京",
        "pinyin": "běi jīng",
        "meaning": "Bắc Kinh",
        "example": "我明天去北京，再见！",
        "examplePinyin": "wǒ míng tiān qù běi jīng， zài jiàn！",
        "exampleMeaning": "Ngày mai tôi đi Bắc Kinh, tạm biệt!"
      },
      {
        "id": "hnl-lex-be3ef3ecc4a3d05c",
        "hanzi": "邮局",
        "pinyin": "yóu jú",
        "meaning": "bưu điện",
        "example": "你去邮局吗？",
        "examplePinyin": "nǐ qù yóu jú ma？",
        "exampleMeaning": "Bạn đi bưu điện phải không?"
      },
      {
        "id": "hnl-lex-ddb7c4648be06705",
        "hanzi": "寄",
        "pinyin": "jì",
        "meaning": "gửi",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-cf97937e48a399d5",
        "hanzi": "信",
        "pinyin": "xìn",
        "meaning": "thư",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-f6ad57b9c3214a6b",
        "hanzi": "对",
        "pinyin": "duì",
        "meaning": "đúng",
        "example": "对，我去寄信。",
        "examplePinyin": "duì， wǒ qù jì xìn。",
        "exampleMeaning": "Đúng, tôi đi gửi thư."
      },
      {
        "id": "hnl-lex-ab41756b732f0bc7",
        "hanzi": "再见",
        "pinyin": "zài jiàn",
        "meaning": "tạm biệt",
        "example": "我明天去北京，再见！",
        "examplePinyin": "wǒ míng tiān qù běi jīng， zài jiàn！",
        "exampleMeaning": "Ngày mai tôi đi Bắc Kinh, tạm biệt!"
      },
      {
        "id": "hnl-lex-45f449b50029a827",
        "hanzi": "学",
        "pinyin": "xué",
        "meaning": "học",
        "example": "你明天学习汉语吗？",
        "examplePinyin": "nǐ míng tiān xué xí hàn yǔ ma？",
        "exampleMeaning": "Ngày mai bạn học tiếng Trung phải không?"
      },
      {
        "id": "hnl-lex-0153c35493518fa4",
        "hanzi": "说",
        "pinyin": "shuō",
        "meaning": "nói",
        "example": "他说中文。",
        "examplePinyin": "tā shuō zhōng wén。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung."
      },
      {
        "id": "hnl-lex-b6573dbba46a7dd5",
        "hanzi": "中文",
        "pinyin": "zhōng wén",
        "meaning": "tiếng Trung",
        "example": "他说中文。",
        "examplePinyin": "tā shuō zhōng wén。",
        "exampleMeaning": "Bạn ấy nói tiếng Trung."
      }
    ],
    "grammar": [
      {
        "title": "你好: học cả cụm trong tình huống",
        "explanation": "Khi gặp một người, dùng 你好 rồi nghe người ấy đáp lại. Hiểu cả cụm là lời chào; không ghép máy móc từng chữ thành “bạn tốt”. Hãy nói đủ nghe và giữ giọng tự nhiên, chưa cần học thêm lời chào khác trong lượt đầu.",
        "example": "你好！",
        "translation": "Xin chào!"
      },
      {
        "title": "多少钱 hỏi giá",
        "explanation": "Đặt 多少钱 sau món cần hỏi. Trong giao dịch, 块 thường được dùng trong cách nói số tiền. Mọi giá ở bài chỉ là tình huống luyện nói, không phải giá hay tỷ giá hiện hành.",
        "example": "苹果多少钱一斤？",
        "translation": "Táo bao nhiêu tiền một cân?"
      },
      {
        "title": "几 và 多少 hỏi số lượng",
        "explanation": "几 thường dùng khi dự kiến một số nhỏ; 多少 có phạm vi hỏi rộng hơn. Đây là xu hướng dùng trong mẫu cơ bản, không phải ranh giới cứng cho mọi cuộc nói chuyện. Hãy giữ lượng từ cần thiết như 几口人 hoặc 几个人.",
        "example": "你家有几口人？",
        "translation": "Gia đình bạn có mấy người?"
      }
    ],
    "dialogue": [
      {
        "speaker": "An",
        "hanzi": "你好，你在哪儿学习？",
        "pinyin": "nǐ hǎo， nǐ zài nǎr xué xí？",
        "meaning": "Xin chào, bạn học ở đâu?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我在学校学习。",
        "pinyin": "wǒ zài xué xiào xué xí。",
        "meaning": "Tôi học ở trường."
      },
      {
        "speaker": "An",
        "hanzi": "你家有几口人？",
        "pinyin": "nǐ jiā yǒu jǐ kǒu rén？",
        "meaning": "Gia đình bạn có mấy người?"
      },
      {
        "speaker": "Minh",
        "hanzi": "我家有四口人。",
        "pinyin": "wǒ jiā yǒu sì kǒu rén。",
        "meaning": "Gia đình tôi có bốn người."
      }
    ],
    "exercises": [
      {
        "type": "choice",
        "prompt": "Bạn vừa gặp một người trong lớp. Nên nói gì trước?",
        "options": [
          "白",
          "马",
          "你好！"
        ],
        "answer": "你好！",
        "explanation": "你好 là lời chào; hai từ còn lại chỉ sự vật hoặc màu sắc.",
        "id": "hanngu-q1-on-tap-q1"
      },
      {
        "type": "choice",
        "prompt": "Chọn câu diễn đạt “Tiếng Trung không khó lắm”.",
        "options": [
          "汉语是难。",
          "汉语太不。",
          "汉语不太难。"
        ],
        "answer": "汉语不太难。",
        "explanation": "Giữ đúng cụm 不太 đứng trước tính từ 难.",
        "id": "hanngu-q1-on-tap-q2"
      },
      {
        "type": "choice",
        "prompt": "Hai bạn hẹn gặp lại vào ngày mai. Cụm nào phù hợp?",
        "options": [
          "明天见！",
          "我去北京。",
          "你说中文。"
        ],
        "answer": "明天见！",
        "explanation": "明天 nêu ngày mai; 见 mang ý gặp lại trong lời hẹn.",
        "id": "hanngu-q1-on-tap-q3"
      },
      {
        "type": "choice",
        "prompt": "Câu hỏi 你去哪儿 cần thông tin gì?",
        "options": [
          "Nơi đến",
          "Tuổi của bạn",
          "Giá tiền"
        ],
        "answer": "Nơi đến",
        "explanation": "哪儿 ở sau 去 hỏi người ấy đi đến đâu.",
        "id": "hanngu-q1-on-tap-q4"
      },
      {
        "type": "choice",
        "prompt": "Bạn mời khách ngồi. Chọn lời phù hợp.",
        "options": [
          "我是老师。",
          "这是茶。",
          "请坐。"
        ],
        "answer": "请坐。",
        "explanation": "请 + động từ tạo lời mời hoặc yêu cầu lịch sự.",
        "id": "hanngu-q1-on-tap-q5"
      },
      {
        "type": "choice",
        "prompt": "Bạn muốn nói họ mình là Vương. Chọn câu đúng.",
        "options": [
          "我贵姓王。",
          "我姓王。",
          "王我姓。"
        ],
        "answer": "我姓王。",
        "explanation": "贵姓 dùng khi hỏi kính trọng; tự giới thiệu họ bằng 姓.",
        "id": "hanngu-q1-on-tap-q6"
      },
      {
        "type": "choice",
        "prompt": "Chọn cách nói một bát mì.",
        "options": [
          "一碗面条",
          "一面条",
          "面条一是"
        ],
        "answer": "一碗面条",
        "explanation": "碗 là lượng từ thích hợp cho phần mì trong bát.",
        "id": "hanngu-q1-on-tap-q7"
      },
      {
        "type": "choice",
        "prompt": "Bạn muốn mua hai cân táo. Cụm nào đúng?",
        "options": [
          "两斤苹果",
          "苹果两是",
          "两苹果斤"
        ],
        "answer": "两斤苹果",
        "explanation": "Giữ thứ tự số + lượng từ + danh từ.",
        "id": "hanngu-q1-on-tap-q8"
      },
      {
        "type": "choice",
        "prompt": "我去银行换钱 diễn tả điều gì?",
        "options": [
          "Một phép so sánh",
          "Nơi đến và mục đích",
          "Ngày sinh"
        ],
        "answer": "Nơi đến và mục đích",
        "explanation": "银行 là nơi đến, 换钱 là việc định làm ở đó.",
        "id": "hanngu-q1-on-tap-q9"
      },
      {
        "type": "choice",
        "prompt": "你找谁 cần câu trả lời thuộc loại nào?",
        "options": [
          "Một giá tiền",
          "Một người",
          "Một ngày trong tuần"
        ],
        "answer": "Một người",
        "explanation": "谁 hỏi người; 哪儿 mới hỏi nơi chốn.",
        "id": "hanngu-q1-on-tap-q10"
      },
      {
        "type": "choice",
        "prompt": "Chọn đúng vị trí của 都.",
        "options": [
          "都我们是学生。",
          "我们是学生都。",
          "我们都是学生。"
        ],
        "answer": "我们都是学生。",
        "explanation": "Đặt 都 sau chủ ngữ 我们, trước vị ngữ 是学生.",
        "id": "hanngu-q1-on-tap-q11"
      },
      {
        "type": "choice",
        "prompt": "Chọn cách nói “Tôi học ở trường”.",
        "options": [
          "我学习在是学校。",
          "在我学习学校。",
          "我在学校学习。"
        ],
        "answer": "我在学校学习。",
        "explanation": "Trong mẫu cơ bản, cụm 在学校 đứng trước hoạt động 学习.",
        "id": "hanngu-q1-on-tap-q12"
      },
      {
        "type": "choice",
        "prompt": "Cách nói “Tôi không có va li” là gì?",
        "options": [
          "我有不箱子。",
          "我不有箱子。",
          "我没有箱子。"
        ],
        "answer": "我没有箱子。",
        "explanation": "Phủ định sở hữu với 有 dùng 没有 trong mẫu đang học.",
        "id": "hanngu-q1-on-tap-q13"
      },
      {
        "type": "choice",
        "prompt": "Câu hỏi 还是 trong bài nên được đáp thế nào?",
        "options": [
          "Luôn chỉ nói 对",
          "Đổi sang hỏi giá",
          "Chọn một phương án cụ thể"
        ],
        "answer": "Chọn một phương án cụ thể",
        "explanation": "Người hỏi muốn biết lựa chọn nào đúng trong hai lựa chọn đã nêu.",
        "id": "hanngu-q1-on-tap-q14"
      },
      {
        "type": "choice",
        "prompt": "Khi hỏi số người trong gia đình bằng mẫu của bài, chọn câu nào?",
        "options": [
          "你家有几斤人？",
          "你家有几口人？",
          "你家是几钱？"
        ],
        "answer": "你家有几口人？",
        "explanation": "Trong mẫu này dùng 口 để hỏi số thành viên gia đình, không dùng đơn vị cân nặng.",
        "id": "hanngu-q1-on-tap-q15"
      }
    ],
    "summary": "Hãy chọn một tình huống trong quyển và nói lại bằng thông tin của chính bạn. Ôn từ còn quên trước khi sang quyển mới. Điểm ôn tập giúp nhận diện chỗ cần học lại, không phải chứng nhận năng lực thi HSK hay chấm phát âm.",
    "provenance": "Hán Ngữ Lab tự biên soạn điểm ôn bằng kiến thức trong quyển; câu hỏi lặp có chủ đích để gợi nhớ. Chưa duyệt chuyên môn.",
    "standard": "HNL-BOOKORDER-2026; chưa chứng nhận đủ đại cương thi HSK",
    "humanReviewed": false
  }
]);
