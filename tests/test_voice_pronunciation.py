import sys
import unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from voice_pronunciation import split_pinyin, curriculum_lexicon, install_lexicon, word_phonemes


class PronunciationTests(unittest.TestCase):
    def test_joined_pinyin_retains_neutral_and_marked_tones(self):
        self.assertEqual(split_pinyin('Xièxie',2),['xiè','xie'])
        self.assertEqual(split_pinyin('zhǔnbèi',2),['zhǔn','bèi'])
        self.assertEqual(split_pinyin('nǐ hǎo',2),['nǐ','hǎo'])
        with self.assertRaises(ValueError):split_pinyin('not-pinyin',2)

    def test_ambiguous_hanzi_cannot_silently_use_one_global_reading(self):
        with self.assertRaisesRegex(ValueError,'Conflicting'):
            curriculum_lexicon([{'text':'行','pinyin':'xíng'},{'text':'行','pinyin':'háng'}])

    def test_frontend_preserves_distinct_tones_and_contextual_polyphone(self):
        from misaki.zh import ZHG2P
        g2p=ZHG2P(version='1.1',en_callable=lambda text:'')
        install_lexicon(curriculum_lexicon([{'text':'过','pinyin':'guo'},{'text':'打算','pinyin':'dǎsuàn'},{'text':'谢谢','pinyin':'xièxie'}]))
        self.assertEqual(word_phonemes(g2p.frontend,'打算'),'ㄉㄚ3ㄙ万4')
        self.assertEqual(word_phonemes(g2p.frontend,'谢谢'),'ㄒㄝ4ㄒㄝ5')
        self.assertEqual(word_phonemes(g2p.frontend,'你好'),'ㄋㄧ2ㄏㄠ3')
        self.assertEqual([g2p(word)[0][-1] for word in ['妈','麻','马','骂']],list('1234'))
        self.assertIn('ㄏ万2ㄕㄨ1',g2p('我还要还书。')[0])
        self.assertIn('ㄏㄞ2要4',g2p('我还要还书。')[0])
        self.assertIn('ㄍ我5',g2p('过')[0])
        self.assertIn('ㄋㄧ2ㄏㄠ3',g2p('你好')[0])


if __name__=='__main__':unittest.main()
