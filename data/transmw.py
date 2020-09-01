from procInitialData import b64DC, b64EC, genID, currentTS
from trans_ce import transCe
from trans_pa import transPa
from trans_ba import transBa
from trans_it import transIt
from trans_ip import transIp

#fid = 'TC6H8EU'
#datafile = 'TC6H8EU110-20181031.data'

def convertFile(fid,datafile):
    ents = []
    with open('{dirname}/{fname}'.format(dirname=fid, fname=datafile)) as datafile:
        data = datafile.read()
        lines = data.split('@:@')[1].split()
        for line in lines:
            dic_line = b64DC(line)
            if dic_line.count('null'):
                dic_line = dic_line.replace('null','None')
            print(dic_line)
            ents.append(eval(dic_line))
    return ents

def convertBase(ent, dics, idmap):
    dic = {}
    _id = ent['_id']
    cat = _id[8:10]
    dic['cid'] = _id[:7]  # fid -> cid
    dic['TS'] = ent['tx'] # _id[17:]  # Time-stamp
    if cat != 'CE':       # 
        rand = _id[11:17] # random 6 chars
    
    if cat == 'PA':
        dic['cat'] = 'PA1'
        dic['subcat'] = 'AUEA'
    elif cat == 'BA':
        dic['cat'] = 'PA2'
        dic['subcat'] = 'AUEA'
    elif cat == 'IP':
        dic['cat'] = 'DC2'          # documentation
        dic['subcat'] = '0003'      # folder
    elif cat == 'IT':
        dic['cat'] = 'DC2'          # documentation
        if ent['type'] == 'F':
            dic['subcat'] = '0003'  # folder
        elif ent['type'] == 'D':
            dic['subcat'] = '0002'  # mixture of mime doc
    elif cat in ('FC','RS'):
        dic['cat'] = 'DC2'
        dic['subcat'] = '0004'      # media with a mime
    elif cat == 'TD':
        dic['cat'] = 'DC2'
        dic['subcat'] = '0005'      # editable txt
    elif cat == 'UR':
        dic['cat'] = 'DC8'          # credential record
        dic['subcat'] = '0001'
    elif cat == 'CE':
        transCe(ent, dics, idmap)
    else:
        print('unknown cat: ' + cat)
        
    if cat != 'CE':
        dic['_id'] = "{}-{}-{}-{}-{}".format(
            dic['cid'],dic['cat'],dic['subcat'],rand,dic['TS'])
        dics.append(dic)
        idmap[_id] = dic['_id']
    return cat
    
def convertEnts(ents):
    dics = []
    idmap = {}
    for ent in ents:
        mwcid = convertBase(ent, dics, idmap)
    return dics

if __name__ == '__main__':
    ents = convertFile('TC6H8EU','TC6H8EU110-20181031.data')
    
    dics = convertEnts(ents)
    x = 1
    
