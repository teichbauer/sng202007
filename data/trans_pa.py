from procInitialData import b64DC, b64EC, genID, currentTS, b64LSExtract

def makeAC1(pa):
    if 'M7519' in pa['cfg']:
        theme = pa['cfg']['M7519']
    else:
        theme = 'default'
    if "M1507" in pa['cfg']: # 'Title'
        pagetitle = pa['cfg']['M1507']
    else:
        pagetitle = "TXkgRmFtaWx5"
    if "M1504" in pa['cfg']:
        loginpwd = pa['cfg']['M1504']['login'][0]
    else:
        loginpwd = '******'
    if "M1508" in pa['cfg']:
        lang = pa['cfg']['M1508']
    else:
        lang = 'en'
    if "M1502" in pa['cfg']:
        email = pa['cfg']['M1502']
    else:
        email = ''
    if "M7534" in pa['cfg']:
        trustees = pa['cfg']['M7534']
    else:
        trustees = []
    ac1 = {
        '_id': genID(_cid, "AC1"), # cat: AC1: user-account, no subcat
        'TS': currentTS,
        'cat': 'AC1',
        'subcat': '0000',
        'card': {
            'Name': 'user account',
            'Descr': {
                'LSS': ['PAGETITLE','NAME'],
                'NAME': 'en:dXNlciBhY2NvdW50', # user account
                'PAGETITLE': pagetitle,
                'LOGINPWD': loginpwd,
                'LANG': lang,
                'EMAIL': email,
                'TRUSTEES': trustees
            }
        },
        'rels': {
            "0008":[pa['_id']] # RL_OWNED_BY
        }
    }
    return ac1
    
def transPa(pa, dics, idmap):
    _id = pa['_id']
    _cid = _id[:7]  #_id = 'TC6H8EU-PA-<6><ts>'
    _cat = 'PA1'
    _subcat = 'AUEA'
    _rels = {}
    for k, v in pa.get('iddict',{}).items():
        if k == "nutshell":
            _rels["1008"] = v # RL_OWNING nutshell
        elif k == "parents":
            _rels["0007"] = v # RL_CHILD_OF
        elif k == "portrait":
            _rels["1008"] = v # RL_OWNING portrait
        elif k == "spouses":
            _rels["100I"] = v # RL_HAS_MARR_BOND
        elif k == "ips":
            _rels["1008"] = v # RL_OWNING info-pane (DC2)
        else:
            print('pa has unknown iddict-key: ' + k)
    dic = { 
        '_id': genID(_cid, _cat, _subcat),
        'TS': currentTS,
        'cat': _cat,
        'subcat': _subcat,
        'card': {
            'Name': b64LSExtract(pa['tname']),
            'Descr': {
                'LSS': ['NAME'],
                'DOB': pa['dob'],
                'DOD': pa['dod'],
                'POB': pa.get('pob',''),
                'POD': pa.get('pod',''),
                'GENDER': pa.get('sex','male'),
                'ROLE': pa.get('role','1'),                
            }
        },
        'rels': _rels
    }
    
    if 'cfg' in pa: # theme
        ac1 = makeAC1(pa)
        dic['rels']['1008'] = ac1['_id']
        dics.append(ac1)
        
    dics.append(dic)
    idmap[pa['_id'] = dic['_id']

