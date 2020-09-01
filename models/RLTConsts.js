/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * RLTConsts.js
 * ********************************************************/
import assert from "assert";

export const RL_PART_OF = "0000";
export const RL_HAS_PART = "1000";
//-----------------
export const RL_MADE_BY = "0001";
export const RL_MAKES = "1001";
//-----------------
export const RL_MADE_OF = "0002";
//export const RL_MADE = "1002";
//-----------------
export const RL_CONNECTED_WITH = "0003";
export const RL_CONNECT_WITH = "1003";
//-----------------
export const RL_BOSSED_BY = "0004";
export const RL_BOSS_OF = "1004";
//-----------------
export const RL_MALE_OF = "0005";
export const RL_HAS_MALE = "1005";
//-----------------
export const RL_FEMALE_OF = "0006";
export const RL_HAS_FEMALE = "1006";
//-----------------
export const RL_CHILD_OF = "0007";
export const RL_HAS_CHILD = "1007";
//-----------------
export const RL_OWNED_BY = "0008";
export const RL_OWNING = "1008";
//-----------------
export const RL_CONTAINED_BY = "0009";
export const RL_CONTAINING = "1009";
//-----------------
export const RL_DOCUMENT_OF = "000A";
export const RL_HAS_DOCUMENT = "100A";
//-----------------
export const RL_BELONG_TO = "000B";
export const RL_POSSESS = "100B";
//-----------------
export const RL_ASSOCIATED_WITH = "000C";
export const RL_ASSOCIATES = "1001";
//-----------------
export const RL_RESIDED_BY = "000D";
export const RL_RESIDES = "100D";
//-----------------
export const RL_INSIDE_OF = "000E";
export const RL_ENCOMPASSES = "100E";
//-----------------
export const RL_CONTROLED_BY = "000F";
export const RL_cONTROLS = "100F";
//-----------------
export const RL_OVERSEEN_BY = "000G";
export const RL_OVERSEES = "100G";
//-----------------
export const RL_OBEYING_TO = "000H";
export const RL_COMMANDS = "100H";
//-----------------
export const RL_MARR_BOND_OF = "000I";
export const RL_HAS_MARR_BOND = "100I";
//-----------------
export const RL_RULED_BY = "000J";
export const RL_RULES = "100J";
//-----------------
export const RL_GOVERNED_BY = "000K";
export const RL_GOVERNS = "100K";
//-----------------
export const RL_SUBORDINATED_TO = "000L";
export const RL_SUPERVISES = "100L";
//-----------------
export const RL_MASTERED_BY = "000M";
export const RL_MASTERS = "100M";
//-----------------
export const RL_DEPENDENT_ON = "000N";
export const RL_NECESSARY_TO = "100N";
//-----------------
export const RL_AUTHORED_BY = "000P";
export const RL_AUTHORS = "100P";
//-----------------
export const RL_COMMENTED_BY = "000Q";
export const RL_COMMENTS = "100Q";
//-----------------
export const RL_EVALUATED_BY = "000R";
export const RL_EVALUATES = "100R";
//-----------------
export const RL_MEASURED_BY = "000S";
export const RL_MADE_MEASUREMENT_TO = "100S";
//-----------------
export const RL_MEASURED_WITH = "000T";
export const RL_MEASURES = "100T";
//-----------------
export const RL_QA_CONTROLLED_BY = "000U";
export const RL_QA_CONTROLLS = "100U";
//-----------------
export const RL_APPROVED_BY = "000V";
export const RL_APPROVES = "100V";
//-----------------
export const RL_PURCHASED_BY = "000W";
export const RL_PURCHASES = "100W";
//-----------------
export const RL_INSTANCE_OF = "000X";
export const RL_GENERALIZATION_OF = "100X";
//-----------------
export const RL_SUBCLASS_OF = "000Y";
export const RL_SUPERCLASS_OF = "100Y";
//-----------------
export const RL_SUPPLIED_BY = "000Z";
export const RL_SUPPLIES = "100Z";
//-----------------
export const RL_OFFERED_BY = "0010";
export const RL_OFFERS = "1010";
//-----------------
export const RL_DELIVERED_BY = "0011";
export const RL_DELIVERS = "1011";
//-----------------
export const RL_SPECIFIED_BY = "0012";
export const RL_SPECIFIES = "1012";
//-----------------
export const RL_ACTED_BY = "0013"; // META-RLT-0013-PA9-PA1
export const RL_ACTING_AS = "1013"; // META-RLT-1013-PA1-PA9

// -------------------------------------------------------
// get _id of a document in RLT collection in a META:
//     META-RLT-<cat1:3>-<cat2:3>-<rl-type:4>
// -------------------------------------------------------
export const get_RLT_id = (subcat_string, cat1, cat2) => {
  // all three must be given
  if (!subcat_string || !cat1 || !cat2) return "";
  return `META-RLT-${cat1}-${cat2}-${subcat_string}`;
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
