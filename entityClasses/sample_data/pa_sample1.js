import {
  RL_types,
  get_RLT_id,
  reverse_RLT_id,
} from "../../models/RLTConsts.js";

export const DPACKEY = "TC6H-0001"; // <cid>-<version>
// -------- all rls -----------------------------------------
export const CHILD_OF = get_RLT_id(RL_types.RL_CHILD_OF, "PA1", "PA2");
// RL_HAS_CHILD, reverse cat1/cat2
export const HAS_CHILD = reverse_RLT_id(CHILD_OF);

export const MALE_OF = get_RLT_id(RL_types.RL_MALE_OF, "PA1", "PA2");
export const HAS_MALE = reverse_RLT_id(MALE_OF); // RL_HAS_MALE

export const FEMALE_OF = get_RLT_id(RL_types.RL_FEMALE_OF, "PA1", "PA2");
export const HAS_FEMALE = reverse_RLT_id(FEMALE_OF); // RL_HAS_FEMALE

export const HAS_MARR_BOND = get_RLT_id(
  RL_types.RL_HAS_MARR_BOND,
  "PA1",
  "PA2"
);
export const MARR_BOND_OF = reverse_RLT_id(HAS_MARR_BOND); // RL_MARRIAGE_BOND_OF
// -------- end of all rls -----------------------------------------

export const pas = [
  {
    // 毛泽东
    [DPACKEY]: "PA1-001",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze-Dong||zh:毛泽东",
      GENDER: "male",
      DOB: "1893-12-26",
      DOD: "1976-09-09",
    },
    rels: {
      [CHILD_OF]: ["PA2-001"],
      [HAS_MARR_BOND]: ["PA2-002"], // marriage with ykh
    },
  },
  {
    // 毛泽民
    [DPACKEY]: "PA1-002",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze-Min||zh:毛泽民",
      GENDER: "male",
      DOB: "1895-02-26",
      DOD: "1943-09-09",
    },
    rels: {
      [CHILD_OF]: ["PA2-001"],
    },
  },
  {
    // 毛泽覃
    [DPACKEY]: "PA1-003",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze Tan||zh:毛泽覃",
      GENDER: "male",
      DOB: "1900-10-26",
      DOD: "1945-09-09",
    },
    rels: {
      [CHILD_OF]: ["PA2-001"],
    },
  },
  {
    [DPACKEY]: "PA1-004",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Yang Kai Hui||zh:杨开慧",
      GENDER: "female",
      DOB: "1899-02-26",
    },
    rels: {
      [HAS_MARR_BOND]: ["PA2-002"], // marriage with mzd
    },
  },
  {
    [DPACKEY]: "PA1-005",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Ying||zh:毛岸英",
      GENDER: "male",
      DOB: "1923-02-26",
    },
    rels: {
      [CHILD_OF]: ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-006",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛岸青",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [CHILD_OF]: ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-007",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛岸龙",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [CHILD_OF]: ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-008",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛宜昌",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [HAS_MARR_BOND]: ["PA2-001"], // marriage with ykh
    },
  },
  {
    [DPACKEY]: "PA1-009",
    cat: "PA1",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Wen Su Qin||zh:文素勤）",
      GENDER: "female",
      DOB: "1893-12-26",
    },
    rels: {
      [HAS_MARR_BOND]: ["PA2-001"], // marriage with ykh
    },
  },
  // PA2 -------------------------------------------------
  {
    // marriage(毛宜昌 and 文素勤）
    [DPACKEY]: "PA2-001",
    cat: "PA2",
    descr: {
      NAME: "marriage(Mao Yi Chang, Wen Su Qing)",
    },
    rels: {
      [HAS_CHILD]: [
        "PA1-001", // Mao ZD
        "PA1-002", // Mao ZM
        "PA1-003", // Mao ZT
      ],
      [HAS_MALE]: "PA1-008", // Mao YC
      [HAS_FEMALE]: "PA1-009", // Wen SQ
    },
  },
  {
    // marriage（毛泽东 and 杨开慧）
    [DPACKEY]: "PA2-002",
    cat: "PA2",
    descr: {
      NAME: "marriage(Mao ZeDong, Yang Kai-Hui)",
    },
    rels: {
      [HAS_CHILD]: [
        "PA1-005", // Mao AY
        "PA1-006", // Mao AQ
        "PA1-007", // Mao AL
      ],
      [HAS_MALE]: "PA1-001", // Mao zd
      [HAS_FEMALE]: "PA1-004", // yang kh
    },
  },
];
