/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * PAClass.js
 * ********************************************************/

import EntityClass from "./EntityClass.js";
import Meta from "../models/Meta.js";
import * as R from "../models/RLTConsts.js";

const PA = Meta.PA;
// -------------------------------------------------------------
const CHILD_OF = R.get_RLT_id(R.RL_CHILD_OF, "PA1", "PA2");
const HAS_CHILD = R.reverse_RLT_id(CHILD_OF);
const HAS_MARR_BOND = R.get_RLT_id(R.RL_HAS_MARR_BOND, "PA1", "PA2");
const HAS_MALE = R.get_RLT_id(R.RL_HAS_MALE, "PA2", "PA1");
const HAS_FEMALE = R.get_RLT_id(R.RL_HAS_FEMALE, "PA2", "PA1");

export default class PAClass extends EntityClass {
  // constructor(cid, cat, subcat, card, _id = null) {
  constructor(cid, record) {
    super(cid, record);
    // super(cid, cat, subcat, card, _id);
    this.model = PA;
  }

  // parent-bond handling ---------for PA1---------------
  setParentBond(pa2_id, index = 0) {
    if (!this.rels[CHILD_OF]) {
      this.rels[CHILD_OF] = [];
    }
    this.rels[CHILD_OF].splice(index, 0, pa2_id);
    return this;
  } // end of addParentBond(pa2_id, index = 0)

  getParentBond(index = 0) {
    if (!this.rels[CHILD_OF] || this.rels[CHILD_OF].length === 0) return null;
    return this.rels[CHILD_OF][index];
  }

  // children handling ------for PA2----------------
  addChild(pa1_id, index = 0) {
    if (!this.rels[HAS_CHILD]) {
      this.rels[HAS_CHILD] = [];
    }
    this.rels[HAS_CHILD].splice(index, 0, pa2_id);
    return this;
  } // end of addParentBond(pa2_id, index = 0)

  getChild(index = 0) {
    if (!this.rels[HAS_CHILD] || this.rels[HAS_CHILD].length === 0) return null;
    return this.rels[HAS_CHILD][index];
  }

  // male/female handling ------for PA2----------------
  setMarriageParty(pa1_id, isMale) {
    if (isMale) {
      this.rels[HAS_MALE] = pa1_id;
    } else {
      this.rels[HAS_FEMALE] = pa1_id;
    }
    return this;
  } // end of addParentBond(pa2_id, index = 0)

  getMarriageParty(isMale) {
    if (isMale) {
      return this.rels[HAS_MALE];
    } else {
      return this.rels[HAS_FEMALE];
    }
  }

  // marriage-bond handling ------for PA1----------------
  setMarriageBond(pa2_id, index = 0) {
    if (!this.rels[HAS_MARR_BOND]) {
      this.rels[HAS_MARR_BOND] = [];
    }
    this.rels[HAS_MARR_BOND].splice(index, 0, pa2_id);
    return this;
  } // end of addParentBond(pa2_id, index = 0)

  getMarriageBond(index = 0) {
    if (!this.rels[HAS_MARR_BOND] || this.rels[HAS_MARR_BOND].length === 0)
      return null;
    return this.rels[HAS_MARR_BOND][index];
  }
  // GENDER property getter setter ---------for PA1------------------------
  set gender(sex) {
    this.card.Descr.GENDER = sex;
  }
  get gender() {
    return this.card.DESCR.GENDER;
  }

  // DOB property getter setter ---------------------------------
  set dob(date_string) {
    this.card.Descr.DOB = date_string;
  }
  get dob() {
    return this.card.DESCR.DOB;
  }

  // DOD property getter setter ---------------------------------
  set dod(date_string) {
    this.card.Descr.DOD = date_string;
  }
  get dod() {
    return this.card.DESCR.DOD;
  }
  // * property getter setter ---------------------------------
  // set gender(sex) {
  //   this.card.Descr.GENDER = sex;
  // }
  // get gender() {
  //   return this.card.DESCR.GENDER;
  // }
} // end of PAClass

//module.exports = PAClass;
