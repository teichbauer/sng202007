/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * EntityClass.js
 * ********************************************************/

const { Util } = require('../models/util');

class EntityClass {
    constructor(cid, cat, subcat, card, _id=null){
        // if subcat missing, fill it with '0000' in _id
        this._id = _id || Util.generate_id(cid,cat,subcat);
        this.cid = cid;
        this.cat = cat;
        this.subcat = subcat || this._id.substr(9,4);
        this.card = card;
    }

    // load entity from a data file.
    // rec must have _id
    load(rec){
        this._id = rec._id;
        this.cid = rec._id.substr(0,4);
        this.cat = rec.cat;
        this.subcat = rec.subcat;
        this.card = rec.card;
    }

    update_db(){
        this.model.deleteOne({_id: this._id})
          .then(e => console.log(`deleted: ${this._id}`))
          .catch(err => console.log(`delete ${this._id} failed: ${err}`));
    }

    // method save (to DB)
    save_db(){
        let ent = Util.make_entity(this.model, 
            {
                name: this.card.Name,
                cat: this.cat,
                subcat: this.subcat,
                descr: this.card
            },
            this._id
        );
        ent.save()
            .then(e => console.log(`${this.card.Name} saved.`))
            .catch(err => console.log(
                `saving ${this.card.name} failed: ${err}`));
        return ent;
    }// end of save(db){
}// end of EntityClass

module.exports = EntityClass;