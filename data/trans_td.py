from procInitialData import b64DC, b64EC, genID, currentTS

def transTd(td, dics, idmap):
    _id = td['_id']
    _cid = _id[:7]  #_id = 'TC6H8EU-CE-01'
