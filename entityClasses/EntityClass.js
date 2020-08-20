/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * EntityClass.js
 * ********************************************************/

import Util from "../models/util.js";

class EntityClass {
  // constructor(cid, cat, subcat, card, _id = null) {
  constructor(cid, record) {
    // if subcat missing, fill it with '0000' in _id
    this._id = record._id || Util.generate_id(cid, record.cat, record.subcat);
    this.cid = cid;
    this.cat = record.cat;
    this.subcat = record.subcat || this._id.substr(9, 4);
    this.card = record.card;
    this.rels = record.rels;
  }

  // load entity from a data file.
  // rec must have _id
  load(rec) {
    this._id = rec._id;
    this.cid = rec._id.substr(0, 4);
    this.cat = rec.cat;
    this.subcat = rec.subcat;
    this.card = rec.card;
    this.rels = rec.rels;
    if (rec.data) {
      this.data = rec.data;
    }
  }

  update_db() {
    this.model
      .deleteOne({ _id: this._id })
      .then((e) => console.log(`deleted: ${this._id}`))
      .catch((err) => console.log(`delete ${this._id} failed: ${err}`));
  }

  // method save (to DB)
  save_db() {
    let ent = Util.make_entity(this.model, {
      cid: this.cid,
      cat: this.cat,
      subcat: this.subcat,
      descr: this.card,
    });
    ent
      .save()
      .then((e) => console.log(`${this.card.Name} saved.`))
      .catch((err) => console.log(`saving ${this.card.name} failed: ${err}`));
    return ent;
  } // end of save(db){
} // end of EntityClass

export default EntityClass;
