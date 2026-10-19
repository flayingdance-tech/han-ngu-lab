"""Build a Mandarin phrase lexicon from the curriculum's marked Pinyin.

This controls readings, not human approval of the curriculum or the waveform.
"""
import re
import unicodedata
from functools import lru_cache
from pypinyin.constants import PINYIN_DICT
from pypinyin.contrib.tone_convert import to_normal, to_tone3

SYLLABLES = set()
for readings in PINYIN_DICT.values():
    for reading in readings.split(','):
        value = unicodedata.normalize('NFC', reading.lower())
        if re.fullmatch(r'[a-züêāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹḿ]+', value):
            SYLLABLES.update((value, to_normal(value)))


def split_pinyin(value, count):
    value = re.sub(r"[\s'’]", '', unicodedata.normalize('NFC', value.lower()))

    @lru_cache(None)
    def walk(offset, remaining):
        if not remaining:
            return () if offset == len(value) else None
        for end in range(min(len(value), offset+7), offset, -1):
            syllable = value[offset:end]
            if syllable not in SYLLABLES:
                continue
            rest = walk(end, remaining-1)
            if rest is not None:
                return (syllable,)+rest
        return None

    result = walk(0, count)
    if result is None:
        raise ValueError(f'Cannot align {count} characters with Pinyin: {value}')
    return list(result)


def curriculum_lexicon(targets):
    lexicon = {'还书': ['huán', 'shū']}
    for item in targets:
        text = item['text']
        # Sentences retain the frontend's phrasing, tone sandhi and erhua.
        if not re.fullmatch(r'[\u4e00-\u9fff]{1,6}', text):
            continue
        syllables = split_pinyin(item['pinyin'], len(text))
        if text in lexicon and lexicon[text] != syllables:
            raise ValueError(f'Conflicting readings for {text}; use an entry-specific override')
        lexicon[text] = syllables
    return lexicon


def install_lexicon(lexicon):
    import jieba
    from pypinyin import load_phrases_dict
    for text in lexicon:
        if len(text) > 1:
            jieba.add_word(text, freq=100000)
    load_phrases_dict({text: [[to_tone3(p, neutral_tone_with_five=True)] for p in syllables]
                       for text, syllables in lexicon.items()})


def word_phonemes(frontend, text):
    """Honor the lesson's lexical tones; apply only third-tone sandhi.

    The general sentence frontend can turn lexical fourth tones into neutral
    tones (e.g. 打算). That is inappropriate for an isolated vocabulary button
    whose displayed Pinyin explicitly marks that syllable.
    """
    from misaki.zh_frontend import ZH_MAP
    initials, finals = frontend._get_initials_finals(text)
    finals = frontend.tone_modifier._three_sandhi(text, finals)
    result = ''
    for initial, final in zip(initials, finals):
        parts = [initial]+re.split(r'([1-5])', final)
        result += ''.join(ZH_MAP[part] for part in parts if part)
    return result
