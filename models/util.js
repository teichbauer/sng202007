const { rlts } = require('./data/rlt');
const models = require('./Meta');



function make_radom(n) {
    var result           = '';
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    var charactersLength = chars.length;
    for ( var i = 0; i < n; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
class Util {
    constructor(db){
        // console.log('constructor called with db:',db);
        this.db = db;
    }
    generate_id(
        custid,   // 4 char customer-id(db-name) ACSII string
        typeid,   // 3 char category-id
        subtype,  // 4 char subtype
        rs=true,  // 6 char random string, if false, opt-out
        TS=true){ // 13 char from getTime(milsec) if false, opt out
                  // 13 digits of msec can run to date of 2286-11-20T17:46:39
        //-----------total length: 30 chars ---------------------------------
        subtype = subtype? subtype : '0000';
        let msg = `${custid}-${typeid}-${subtype}`;
        if (rs){
            msg = `${msg}-${make_radom(6)}`;
        }
        let the_id;
        if (TS){
            let ts = (new Date()).getTime().toString();
            let the_id = `${msg}-${ts}`;    
        } else {
            the_id = msg;
        }
        console.log("length: " + the_id.length);
        return the_id;
    } // end of generate_id --------------------------------------

    read_id(id_string){
        let splt = id_string.split('-');
        let dt = new Date();
        dt.setTime(Number(splt[4]));
        return {
            custid: splt[0],
            typeid: splt[1],
            subtype: splt[2],
            rs: splt[3],
            TS: dt.toISOString()
        }
    } // end of read_id ------------------------------------------

    make_rlts(){
        this.db.collection('rlts').drop(err => {
            console.log('dropping rlts collection failed:' + err);
        })
        let Tag = models.RLT;
        let tag;
        // generate_id with useTS: false, not time-stamp
        // they are unique already
        rlts.forEach(rlt => {
            tag = new Tag({
                _id: this.generate_id('META','RLT',rlt.subtype,false,false),
                descr: rlt.descr
            });
            tag.save().then(t => {console.log(`saved in db: ${t}`)});
        });
    
    }

    make_it = () => {

    }
    make_pa = () => {
        
    }
    make_dc = () => {
        
    }
    make_ac = () => {
        
    }
    make_pb = () => {
        
    }
    make_lg = () => {
        
    }
}

module.exports = {
    Util: Util
}