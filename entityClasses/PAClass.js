/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * PAClass.js
 * ********************************************************/

const EntityClass = require('./EntityClass');
const { PA } = require('../models/Meta');

class PAClass extends EntityClass {
    constructor(cid, cat, subcat, card, _id=null){
        super(cid, cat, subcat, card, _id);
        this.model = PA;
    }
    // save_db(){
    //     super.save_db(this.model);
    // }
    // update_db(){
    //     super.update_db(this.model);
    // }
    //------------------------------------

}// end of PAClass

module.exports = PAClass;