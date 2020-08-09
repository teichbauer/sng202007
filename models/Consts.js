/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * Consts.js
 * ********************************************************/

// -------------------------------------------------------
// _id of a RLT collection in a META:
//     META-RLT-<cat1:3>-<cat2:3>-<rl-type:4>
// -------------------------------------------------------
const RL_types = {
  PART_OF:          "0000", // 
  MADE_BY:          "0001",
  MADE_OF:          "0002",
  CONNECTED_WITH:   "0003",
  BOSSED_BY:        "0004",
  MALE_OF:          "0005",
  FEMALE_OF:        "0006",
  CHILD_OF:         "0007",
  OWNED_BY:         "0008",
  CONTAINED_BY:     "0009",
  DOCUMENT_OF:      "000A",
  BELONG_TO:        "000B",
  ASSOCIATED_WITH:  "000C",
  RESIDED_BY:       "000D",
  INSIDE_OF:        "000E",
  CONTROLED_BY:     "000F",
  OVERSEEN_BY:      "000G",
  OBEYING_TO:       "000H",
  RULED_BY:         "000J",
  GOVERNED_BY:      "000K",
  SUBORDINATED_TO:  "000L",
  MASTERED_BY:      "000M",
  DEPENDENT_ON:     "000N",
  AUTHORED_BY:      "000P",
  COMMENTED_BY:     "000Q",
  EVALUATED_BY:     "000R",
  MEASURED_BY:      "000S",
  MEASURED_WITH:    "000T",
  QA_CONTROLLED_BY: "000U",
  APPROVED_BY:      "000V",
  PURCHASED_BY:     "000W",
  INSTANCE_OF:      "000X",
  SUBCLASS_OF:      "000Y",
  SUPPLIED_BY:      "000Z",
  OFFERED_BY:       "0010",
  DELIVERED_BY:     "0011",
  SPECIFIED_BY:     "0012",
  BIRTH_PLACE_OF:   "0013",
  DEATH_PLACE_OF:   "0014",
  BURIAL_PLACE_OF:  "0015",
  PARENTS_OF:       "0016",
};


module.exports = {
  RL_types: RL_types
};
