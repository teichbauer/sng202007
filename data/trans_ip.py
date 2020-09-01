from procInitialData import b64DC, b64EC, genID, currentTS

def transIp(ip, dics, idmap):
    _id = ip['_id']
    _cid = _id[:7]  #_id = 'TC6H8EU-CE-01'
