/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * Consts.js
 * ********************************************************/

const RL_cats = {
  RLP: "RLP", // between PA
  RLp: "RLp", // PA related (one of 2 parties is a PA)
  RLI: "RLI", // between IT
  RLi: "RLi", // No PA, one of 2 parties is IT
  RLD: "RLD", // between DC
  RLd: "RLd", // np PA,IT. DC related
  RLA: "RLA", // between accounts
  RLa: "RLa", // account related
  RLB: "RLB", // between data blocks
  RLb: "RLb", // data block related
};

const RL_subcats = {
  RLP: {
    CHILD_OF: "0100", // between marriage-bond and child
    PARTNER_OF: "0200", // between two PAs
    MALE_OF: "0201", // between husband and marriage-bond
    FEMALE_OF: "0202", // between husband and marriage-bond
    PARENTS_OF: "0203", // between child and parents-bond
    ASSOCIATED_WITH: "0204",
    SCHOOLMATE_OF: "0205",
    CLASSMATE_OF: "0206",
    ROOMMATE_OF: "0207",
    INMATE_OF: "0208",
    OFFICEMATE_OF: "0209",
    BOSSED_BY: "0300",
    TENANT_OF: "0301",
    LANDLOARD_OF: "0302",
    INDEBT_TO: "0303",
  },
  RLp: {
    MADE_BY: "0100", // PA-IT
    MADE_IN: "0200", // PA-IT
    OWNED_BY: "0300", // PA-IT
  },
  RLI: {
    PART_OF: "0100",
    MADE_OF: "0200",
  },
  RLi: {
    DESCRIBED_BY: "0100",
  },
  RLD: {
    PART_OF: "0100",
  },
  RLd: {},
  RLA: {
    PART_OF: "0100",
    JOINTED_WITH: "0200",
  },
  RLa: {
    PART_OF: "0100",
  },
  RLB: {
    PART_OF: "0100",
  },
  RLb: {
    PART_OF: "0100",
  },
};

module.exports = {
  RL_cats: RL_cats,
  RL_subcats: RL_subcats,
};
