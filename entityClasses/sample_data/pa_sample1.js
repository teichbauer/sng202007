import { RL_types, get_RLT_id } from "../models/RLTConsts";

const DPAC = "DP001";

const RID_1 = get_RLT_id(RL_types.CHILD_OF, "PA1", "PA2");
const RID_2 = get_RLT_id(RL_types.MALE_OF, "PA1", "PA2");
const RID_3 = get_RLT_id(RL_types.FEMALE_OF, "PA1", "PA2");

export const pas = [
  {
    [`${DPAC}_PA`]: "PA-001",
    cat: "PA1",
    name: "en:Mao Ze Dong||zh:---",
    descr: {
      gender: "male",
      dob: "1893-12-26",
      dod: "1976-09-09",
    },
    rels: {
      [`${get_RLT_id(RL_types.CHILD_OF)}`]: ["xxx"],
    },
  },
  {
    [`${DPAC}_PA`]: "PA-001",
    cat: "PA1",
    name: "en:Yang Kai Hui||zh:---",
    descr: {
      gender: "female",
      dob: "1899-02-26",
    },
  },
  {
    [`${DPAC}_PA`]: "PA-001",
    cat: "PA1",
    name: "en:Mao An Ying||zh:---",
    descr: {
      gender: "male",
      dob: "1923-02-26",
    },
  },
  {
    [`${DPAC}_PA`]: "PA-001",
    cat: "PA1",
    name: "en:Mao An Qing||zh:---",
    descr: {
      gender: "male",
      dob: "1893-12-26",
    },
  },

  {
    [`${DPAC}_PA`]: "PA-001",
    cat: "PA1",
    name: "en:Mao An Qing||zh:---",
    descr: {
      gender: "male",
      dob: "1893-12-26",
    },
  },
];
