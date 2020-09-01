import sys, os,time, random, string, re, json
from base64 import b64encode, b64decode
from glob import glob

defaultLS = 'en'
LSPattern = re.compile(r'\b(en|zh|de)\:')

# time stamp (UTC) in milisecs as string
currentTS = "{:.3f}".format(time.time()).replace('.','')

b64keys = ["NAME"]

def b64EC(msg): # msg is of type string
    if type(msg) == type(b''):
        byte_m = b64encode(msg)
    elif type(msg) == type(''):
        byte_m = b64encode(msg.encode('utf-8')) # byte-array
    return byte_m.decode()                  # convert-to/return: string 

def b64DC(msg):
    if  type(msg) == type(b''):
        byte_msg = b64decode(msg)
    elif type(msg) == type(''):
        byte_msg = b64decode(msg.encode('utf-8'))
    return byte_msg.decode('utf-8')

def getRLTConsts():
    dic = {}
    with open('../models/RLTConsts.js') as infile:
        for line in infile.readlines():
            if line.startswith('export const RL_'):
                # line like: export const RL_HAS_PART = "1000";
                splt = line.split() # ['export','const','RL_','=','"1000";']
                dic[splt[2]] = splt[4].strip(';"')
    return dic

def genRand(n):
    randchars = string.ascii_uppercase + string.ascii_lowercase + '123456789'
    msg = ''
    while len(msg) < n:
        index = random.randrange(len(randchars))
        msg += randchars[index]
    return msg
    
def genID(cid, cat, subcat='0000'):
    TS = currentTS
    six = genRand(6)
    return "{}-{}-{}-{}-{}".format(cid,cat,subcat,six,TS)

# returns two things:
# 1. defaultLS-string from msg
# 2. b64-encoded msg (playload becomes base64 encoded ASCII string)
def b64LS(msg):
    if LSPattern.search(msg):
        firstLS = ''
        def_msg = ''
        splt = msg.split('||')
        m = ''
        for seg in splt:
            ssplt = seg.split(':')
            if len(firstLS) == 0:
                firstLS = ssplt[1]
            if ssplt[0] == defaultLS:
                def_msg = ssplt[1]
            m += ssplt[0]+':' + b64EC(ssplt[1]) + '||'
        if len(def_msg) == 0:
            def_msg = firstLS
        return def_msg, m.strip('||')
    else:
        return msg, b64EC(msg)
    
def b64LSExtract(msg, lang=defaultLS):
    if type(msg) == type({}):
        if _lang in msg:
            return b64DC(msg[lang])
        else:
            _lang = list(msg.keys())[0]
            return b64DC(msg[_lang])
    lst = msg.split('||')
        firstLS = ''
        for e in lst:
            if e.count(':') > 0: # : in it
                _lang, m = e.split(':')
                if len(firstLS) == 0:
                    firstLS = m
                if _lang == lang:
                    return b64DC(m)
        return b64DC(firstLS)

def procDescr(descr):
    if 'LSS' not in descr:
        descr['LSS'] = ['NAME']
    _descr = json.loads(json.dumps(descr)) # make a complete clone
    lss = _descr.pop('LSS')
    for k,v in _descr.items():
        if k in lss:
            name, msg = b64LS(v)
            descr[k] = msg
    return name, descr
        
def nameFromDescr(descr):
    name = descr.get('NAME','')
    if cardNamePattern.search(name):
        res = ''
        firstLS = None
        splt = name.split('||')
        for e in splt:
            pair = e.split(':')
            if not firstLS:
                firstLS = pair[1]
            if e.startswith(defaultLS):
                res = pair[1]
        if len(res) == 0:  # if  defaultLS is not in, use the firstLS
            res = firstLS
    else: # when there is no ||, there is only 1 LS-string: name
        return name  # use name
                

def parseEnts(cid, lst, constdic, objdic, mapdic):
    for e in lst:
        obj = {}
        # generate _id
        obj['_id'] = genID(cid, e['cat'], e['subcat'])
        mapdic[e['DKEY']] = obj['_id']
        obj['cat'] = e['cat']
        obj['subcat'] = e['subcat']
        obj['TS'] = currentTS
        name, descr = procDescr(e['descr'])
        obj['card'] = {
                'Name': name,
                'Descr': descr
            }
        objdic[obj['_id']] = obj
        # check all keys in rels are in RLTConsts
        if 'rels' in e:
            obj['rels'] = {}
            for k in e['rels']:
                if k not in constdic:
                    raise Exception("{} is not in RLTConsts".format(k))
                else:
                    obj['rels'][constdic[k]] = e['rels'][k]
        
        
def fillRels(objdic, mapdic):
    for obj in objdic.values():
        if 'rels' in obj:
            for k, v in obj['rels'].items():
                if type(v) == type([]):
                    ar = []
                    for av in v:
                        if av in mapdic:
                            ar.append(mapdic[av])
                        else:
                            print("{} not in map".format(av))
                    obj['rels'][k] = ar
                elif type(v) == type(''):
                    if v in mapdic:
                        obj['rels'][k] = mapdic[v]
                    else:
                        print("{} not in map".format(v))

def saveJson(cid, objdic, mapdic):
    with open("./{}/record0001.json".format(cid), 'w') as ofile:
        ofile.write(json.dumps(objdic, indent=4))

    with open("./{}/initmap.json".format(cid),'w') as ofile:
        ofile.write(json.dumps(mapdic, indent=4))

def proc(cid, ver="initial"):
    consts = getRLTConsts()
    lst = glob('./{}/{}/*'.format(cid,ver))
    flst = []
    for fname in lst:
        splt = fname.split('/')
        if splt[-1].endswith('py'):
            flst.append(fname)
    objDic = {}
    mapDic = {}
    for fi in flst:
        data = open(fi).read()
        lst = eval(data)
        parseEnts(cid, lst, consts, objDic, mapDic)
    
    fillRels(objDic, mapDic)
    saveJson(cid, objDic, mapDic)
    # print(consts)
    
if __name__ == '__main__':
    proc('TC6H')
