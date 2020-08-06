/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * rlt.js
 * ********************************************************/
const { RL_cats, RL_subcats } = require("../Consts");

const rlts = [
  // META-RLT-<subcat>
  {
    cat: RL_cats.RLI, // physical item
    subcat: RL_subcats.RLI.PART_OF,
    name: "part-of",
    descr: {},
  },
  {
    cat: RL_cats.RLI, // physical item
    subcat: RL_subcats.RLI.MADE_OF,
    name: "made-of",
    descr: {},
  },
  {
    cat: RL_cats.RLp, // physical item made by a PA
    subcat: RL_subcats.RLp.MADE_BY,
    name: "made-by",
    descr: {},
  },
  {
    cat: RL_cats.RLP,
    subcat: RL_subcats.RLP.BOSSED_BY,
    name: "reporting-to",
    descr: {},
  },
  {
    cat: RL_cats.RLD,
    subcat: RL_subcats.RLD.PART_OF,
    name: "part-of",
    descr: {},
  },
  {
    cat: RL_cats.RLP,
    subcat: RL_subcats.RLP.PARENTS_OF,
    name: "associated-with",
    descr: {},
  },
  {
    cat: RL_cats.RLP,
    subcat: RL_subcats.RLP.SCHOOLMATE_OF,
    name: "school-mate-of",
    descr: {},
  },
];

module.exports = {
  rlts: rlts,
};
