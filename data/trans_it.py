from procInitialData import b64DC, b64EC, genID, currentTS

def transIt(it, dics, idmap):
    _id = ce['_id']
    _cid = _id[:7]
    _cat = 'DC2'
    if it['type'] == 'F':
        _subcat = '0003'    # folder
    else:
        _subcat = '0002'    # multi-mime doc
    dic = {
        '_id': genID(_cid, _cat, _subcat),
        'cat': _cat,
        'subcat': _subcat,
        'TS': currentTS,
        'card': {
        }
    }
