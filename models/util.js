
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
    generate_id(
        custid,   // customer-id(db-name): 4 char ACSII string
        typeid,   // 3 char category-id
        c6=null,  // 6 char random string. Can be used as reserved info digits
        useTS=true){ // if set to false, skip time-stamp part. 13 char shorter
        //--------------------------------------------------------------------
        let msg = '';
        if (c6){
            if(c6.length == 6){
                msg = `${custid}-${typeid}-${c6}`;
            } else {
                msg = `${custid}-${typeid}-${c6}${make_radom(6-c6.length)}`;
            }
        } else {
            msg = `${custid}-${typeid}-${make_radom(6)}`;
        }
        let the_id;
        if (useTS){
            let ts = (new Date()).getTime().toString();
            let the_id = `${msg}-${ts}`;    
        } else {
            the_id = msg;
        }
        console.log("length: " + the_id.length);
        return the_id;
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