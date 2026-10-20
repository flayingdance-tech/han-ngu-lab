"""Bind authored captions to the existing narration timeline, never to ASR text."""
import re

def timed_captions(rows,timeline,duration):
    assert len(rows)==len(timeline) and rows,'Subtitle count differs from narration'
    result=[]
    previous=0.
    for row,segment in zip(rows,timeline):
        assert row['zh']==segment['text'],'Stale Chinese subtitle text'
        assert row['pinyin'].strip() and not re.search(r'[\u4e00-\u9fff]',row['pinyin']),'Invalid Pinyin'
        assert row['vi'].strip(),'Missing Vietnamese translation'
        start,end=segment['start'],segment['end']
        assert previous<=start<end<=duration,'Invalid subtitle timeline'
        result.append({**row,'speaker':'Người dẫn','start':start,'end':end})
        previous=end
    return result
