/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * PAClass.js
 * ********************************************************/

import EntityClass from "./EntityClass.js";
import Meta from "../models/Meta.js";
const PA = Meta.PA;

export default class PAClass extends EntityClass {
  constructor(cid, cat, subcat, card, _id = null) {
    super(cid, cat, subcat, card, _id);
    this.model = PA;
  }
  set gender(sex) {
    this.card.gender = sex;
  }
  get gender() {
    return this.card.gender;
  }
} // end of PAClass

//module.exports = PAClass;
