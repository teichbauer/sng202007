/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * rlt.js
 * ********************************************************/
import * as R  from "../RLTConsts.js";

const rlts = [
  // META-RLT-<subcat>
  {
    cat1: "IT1", // physical item
    cat2: "IT1",
    rltype: R.RL_PART_OF,
    name: "thing2 is part-of thing1",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "LO1",
    rltype: R.RL_RESIDED_BY,
    name: "live at a location",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "IT1",
    rltype: R.RL_MADE_BY,
    name: "person made a thing",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "IT1",
    rltype: R.RL_CONTROLED_BY,
    name: "person controls a thing",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "PA2",
    rltype: R.RL_MALE_OF,
    name: "male of a marriage",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "PA2",
    rltype: R.RL_FEMALE_OF,
    name: "female of a marriage",
    descr: {},
  },
  {
    cat1: "PA2",
    cat2: "PA1",
    rltype: R.RL_CHILD_OF,
    name: "child of a marriage-bond",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "IT1",
    rltype: R.RL_OWNED_BY,
    name: "person owns a thing",
    descr: {},
  },
  {
    cat1: "DC1",
    cat2: "DC1",
    rltype: R.RL_PART_OF,
    name: "doc2 is part of doc1",
    descr: {},
  },
  {
    cat1: "PA3",
    cat2: "IT3",
    rltype: R.RL_OWNED_BY,
    name: "group owns equipment",
    descr: {},
  },
  {
    cat1: "PA5",
    cat2: "IT3",
    rltype: R.RL_OWNED_BY,
    name: "biz owns equipment",
    descr: {},
  },
  {
    cat1: "PA1",
    cat2: "IT3",
    rltype: R.RL_GOVERNED_BY,
    name: "person governs equipment",
    descr: {},
  },
  {
    cat1: "PA6",
    cat2: "IT3",
    rltype: R.RL_GOVERNED_BY,
    name: "department governs equipment",
    descr: {},
  },
];

export default rlts;
