/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * RLTConsts.js
 * ********************************************************/
import assert from "assert";

export const RL_types = {
  RL_PART_OF: "0000",
  RL_HAS_PART: "1000",
  //-----------------
  RL_MADE_BY: "0001",
  RL_MADE: "1001",
  //-----------------
  RL_MADE_OF: "0002",
  RL_MADE: "1002",
  //-----------------
  RL_CONNECTED_WITH: "0003",
  RL_CONNECT_WITH: "1003",
  //-----------------
  RL_BOSSED_BY: "0004",
  RL_BOSS_OF: "1004",
  //-----------------
  RL_MALE_OF: "0005",
  RL_HAS_MALE: "1005",
  //-----------------
  RL_FEMALE_OF: "0006",
  RL_HAS_FEMALE: "1006",
  //-----------------
  RL_CHILD_OF: "0007",
  RL_HAS_CHILD: "1007",
  //-----------------
  RL_OWNED_BY: "0008",
  RL_OWNING: "1008",
  //-----------------
  RL_CONTAINED_BY: "0009",
  RL_CONTAINING: "1009",
  //-----------------
  RL_DOCUMENT_OF: "000A",
  RL_HAS_DOCUMENT: "100A",
  //-----------------
  RL_BELONG_TO: "000B",
  RL_POSSESS: "100B",
  //-----------------
  RL_ASSOCIATED_WITH: "000C",
  RL_ASSOCIATES: "1001",
  //-----------------
  RL_RESIDED_BY: "000D",
  RL_RESIDES: "100D",
  //-----------------
  RL_INSIDE_OF: "000E",
  RL_ENCOMPASSES: "100E",
  //-----------------
  RL_CONTROLED_BY: "000F",
  RL_cONTROLS: "100F",
  //-----------------
  RL_OVERSEEN_BY: "000G",
  RL_OVERSEES: "100G",
  //-----------------
  RL_OBEYING_TO: "000H",
  RL_COMMANDS: "100H",
  //-----------------
  RL_MARR_BOND_OF: "000I",
  RL_HAS_MARR_BOND: "100I",
  //-----------------
  RL_RULED_BY: "000J",
  RL_RULES: "100J",
  //-----------------
  RL_GOVERNED_BY: "000K",
  RL_GOVERNS: "100K",
  //-----------------
  RL_SUBORDINATED_TO: "000L",
  RL_SUPERVISES: "100L",
  //-----------------
  RL_MASTERED_BY: "000M",
  RL_MASTERS: "100M",
  //-----------------
  RL_DEPENDENT_ON: "000N",
  RL_NECESSARY_TO: "100N",
  //-----------------
  RL_AUTHORED_BY: "000P",
  RL_AUTHORS: "100P",
  //-----------------
  RL_COMMENTED_BY: "000Q",
  RL_COMMENTS: "100Q",
  //-----------------
  RL_EVALUATED_BY: "000R",
  RL_EVALUATES: "100R",
  //-----------------
  RL_MEASURED_BY: "000S",
  RL_MADE_MEASUREMENT_TO: "100S",
  //-----------------
  RL_MEASURED_WITH: "000T",
  RL_MEASURES: "100T",
  //-----------------
  RL_QA_CONTROLLED_BY: "000U",
  RL_QA_CONTROLLS: "100U",
  //-----------------
  RL_APPROVED_BY: "000V",
  RL_APPROVES: "100V",
  //-----------------
  RL_PURCHASED_BY: "000W",
  RL_PURCHASES: "100W",
  //-----------------
  RL_INSTANCE_OF: "000X",
  RL_GENERALIZATION_OF: "100X",
  //-----------------
  RL_SUBCLASS_OF: "000Y",
  RL_SUPERCLASS_OF: "100Y",
  //-----------------
  RL_SUPPLIED_BY: "000Z",
  RL_SUPPLIES: "100Z",
  //-----------------
  RL_OFFERED_BY: "0010",
  RL_OFFERS: "1010",
  //-----------------
  RL_DELIVERED_BY: "0011",
  RL_DELIVERS: "1011",
  //-----------------
  RL_SPECIFIED_BY: "0012",
  RL_SPECIFIES: "1012",
};

// -------------------------------------------------------
// get _id of a document in RLT collection in a META:
//     META-RLT-<cat1:3>-<cat2:3>-<rl-type:4>
// -------------------------------------------------------
export const get_RLT_id = (rltype, cat1, cat2) => {
  // all three must be given
  if (!rltype || !cat1 || !cat2) return "";

  let subcat_string;
  if (rltype in RL_types) {
    subcat_string = RL_types[rltype];
    return `META-RLT-${cat1}-${cat2}-${subcat_string}`;
  } // rltype is a subcat-string like "000P" already
  else if (Object.values(RL_types).indexOf(rltype) > -1) {
    subcat_string = rltype;
    return `META-RLT-${cat1}-${cat2}-${subcat_string}`;
  } else {
    return "";
  }
};

export const reverse_RLT_id = (
  type_or_subcat_or_id,
  cat1 = null,
  cat2 = null
) => {
  // it is 'RL_*' or '0nnn' | '1nnn'
  // has no '-' in it: it is NOT an id-string lie 'META-RLT-*-*-*'
  if (type_or_subcat_or_id.indexOf("-") === -1) {
    var subcat = type_or_subcat_or_id;
    if (type_or_subcat_or_id.startsWith("RL_")) {
      subcat = RL_types[type_or_subcat_or_id];
    }
    var opp_char = subcat.startsWith("0") ? "1" : "0";
    subcat = opp_char + subcat.substr(1);
    return `META-RLT-${cat1}-${cat2}-${subcat}`;
  }
  // it has '-' in it: it is a an id-string:'META-RLT-cat1-cat2-subcat'
  else {
    let splt = type_or_subcat_or_id.split("-");
    assert(splt.length, 5);
    var opp_char = splt[4].startsWith("0") ? "1" : "0";
    subcat = opp_char + splt[4].substr(1);
    return `${splt[0]}-${splt[1]}-${splt[3]}-${splt[2]}-${subcat}`;
  }
};

//export RL_types;
