from procInitialData import genID, currentTS

def transBa(ba, dics, idmap):
    _id = ba['_id']
    _cid = _id[:7]  #_id = 'TC6H8EU' from TC6H8EU-BA-AKmFZi1408857744219
    _cat = 'PA2'
    _subcat = '0000'
    _rels = {}
    for k, v in ba['iddict'].items():
        if k == 'male':
            _rels["1005"] = v # RL_HAS_MALE
        elif k == 'female':
            _rels["1006"] = v # RL_HAS_FEMALE
        elif k == "children":
            _rels["1007"] = v # RL_HAS_CHILD
    dic = {
        '_id' : genID(_cid, _cat, _subcat),
        'cat': _cat,
        'subcat': _subcat,
        'TS': currentTS,
        'card': {
            'Name': '',
            'Descr': {
                'LSS': [],
                'NAME':'',
            }
        },
        'rels': _rels
    }
    idmap[ba['_id']] = dic['_id']
    dics.append(dic)
