/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * RLTConsts.js
 * ********************************************************/

// -------------------------------------------------------
// _id of a RLT collection in a META:
//     META-RLT-<cat1:3>-<cat2:3>-<rl-type:4>
// -------------------------------------------------------
export const RL_types = {
  RL_PART_OF: "0000",
  RL_HAS_PART: "1000",
  //-----------------
  RL_MADE_BY: "0001",
  RL_MADE: "1001",
  //-----------------
  RL_MADE_OF: "0002",
  RL_MADE: "1001",
  //-----------------
  RL_CONNECTED_WITH: "0003",
  RL_MADE: "1001",
  //-----------------
  RL_BOSSED_BY: "0004",
  RL_MADE: "1001",
  //-----------------
  RL_MALE_OF: "0005",
  RL_MADE: "1001",
  //-----------------
  RL_FEMALE_OF: "0006",
  RL_MADE: "1001",
  //-----------------
  RL_CHILD_OF: "0007",
  RL_MADE: "1001",
  //-----------------
  RL_OWNED_BY: "0008",
  RL_MADE: "1001",
  //-----------------
  RL_CONTAINED_BY: "0009",
  RL_MADE: "1001",
  //-----------------
  RL_DOCUMENT_OF: "000A",
  RL_MADE: "1001",
  //-----------------
  RL_BELONG_TO: "000B",
  RL_MADE: "1001",
  //-----------------
  RL_ASSOCIATED_WITH: "000C",
  RL_MADE: "1001",
  //-----------------
  RL_RESIDED_BY: "000D",
  RL_MADE: "1001",
  //-----------------
  RL_INSIDE_OF: "000E",
  RL_MADE: "1001",
  //-----------------
  RL_CONTROLED_BY: "000F",
  RL_MADE: "1001",
  //-----------------
  RL_OVERSEEN_BY: "000G",
  RL_MADE: "1001",
  //-----------------
  RL_OBEYING_TO: "000H",
  RL_MADE: "1001",
  //-----------------
  RL_RULED_BY: "000J",
  RL_MADE: "1001",
  //-----------------
  RL_GOVERNED_BY: "000K",
  RL_MADE: "1001",
  //-----------------
  RL_SUBORDINATED_TO: "000L",
  RL_MADE: "1001",
  //-----------------
  RL_MASTERED_BY: "000M",
  RL_MADE: "1001",
  //-----------------
  RL_DEPENDENT_ON: "000N",
  RL_MADE: "1001",
  //-----------------
  RL_AUTHORED_BY: "000P",
  RL_MADE: "1001",
  //-----------------
  RL_COMMENTED_BY: "000Q",
  RL_MADE: "1001",
  //-----------------
  RL_EVALUATED_BY: "000R",
  RL_MADE: "1001",
  //-----------------
  RL_MEASURED_BY: "000S",
  RL_MADE: "1001",
  //-----------------
  RL_MEASURED_WITH: "000T",
  RL_MADE: "1001",
  //-----------------
  RL_QA_CONTROLLED_BY: "000U",
  //-----------------
  RL_APPROVED_BY: "000V",
  //-----------------
  RL_PURCHASED_BY: "000W",
  //-----------------
  RL_INSTANCE_OF: "000X",
  //-----------------
  RL_SUBCLASS_OF: "000Y",
  //-----------------
  RL_SUPPLIED_BY: "000Z",
  //-----------------
  RL_OFFERED_BY: "0010",
  //-----------------
  RL_DELIVERED_BY: "0011",
  //-----------------
  RL_SPECIFIED_BY: "0012",
};

export const get_RLT_id = (rltype, cat1, cat2) => {
  // all three must be given
  if (!rltype || !cat1 || !cat3) return "";
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
