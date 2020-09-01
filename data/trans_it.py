from procInitialData import genID, currentTS, b64LSExtract, flatLSDic

def transIt(it, dics, idmap):
    _id = it['_id']
    _cid = _id[:7]
    _cat = 'DC2'
    _name = b64LSExtract(it['name'])
    if it['type'] == 'F':
        _subcat = '0003'    # folder
    else:
        _subcat = '0002'    # multi-mime doc
    access_level = ['M7117','M7119','M7118'].index(it.get('pk','M7117'))
    _rels = {}
    for k, v in it['iddict'].items():
        if k == 'folders':
            _rels["1009"] = v  # 1009: RL_CONTAINING
        elif k == 'facets':
            _rels["1009"] = v  # 1009: RL_CONTAINING
        elif k == 'owner':
            _rels["0009"] = v  # 0009: RL_CONTAINED_BY
        elif k == 'docs':
            _rels["1009"] = v  # 1009: RL_CONTAINING
        elif k == 'ownerpa':
            _rels["0008"] = v  # 0008 RL_OWNED_BY
    dic = {
        '_id': genID(_cid, _cat, _subcat),
        'cat': _cat,
        'subcat': _subcat,
        'TS': currentTS,
        'card': {
            'Name': _name,
            'Descr': {
                'LSS': ['NAME'],
                'NAME': flatLSDic(it['name']),
                'ACCESSLEVEL': access_level,
                'TITLE': flatLSDic(it['title'])
            }
        },
        'rels': _rels
    }
    dics.append(dic)
    idmap[it['_id']] = dic['_id']
