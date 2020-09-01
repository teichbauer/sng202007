import * as R from "../../models/RLTConsts.js";

export const pas = [
  {
    // 毛泽东
    [DPACKEY]: "PA1-001",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze-Dong||zh:毛泽东",
      GENDER: "male",
      DOB: "1893-12-26",
      DOD: "1976-09-09",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-001"],
      [R.RL_HAS_MARR_BOND]: ["PA2-002"], // marriage with ykh
    },
  },
  {
    // 毛泽民
    [DPACKEY]: "PA1-002",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze-Min||zh:毛泽民",
      GENDER: "male",
      DOB: "1895-02-26",
      DOD: "1943-09-09",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-001"],
    },
  },
  {
    // 毛泽覃
    [DPACKEY]: "PA1-003",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao Ze Tan||zh:毛泽覃",
      GENDER: "male",
      DOB: "1900-10-26",
      DOD: "1945-09-09",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-001"],
      // "0007": ["PA2-001"],
    },
  },
  {
    [DPACKEY]: "PA1-004",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Yang Kai Hui||zh:杨开慧",
      GENDER: "female",
      DOB: "1899-02-26",
    },
    rels: {
      [R.RL_HAS_MARR_BOND]: ["PA2-002"], // marriage with mzd
      // "100I":  ["PA2-002"], // marriage with mzd
    },
  },
  {
    [DPACKEY]: "PA1-005",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Ying||zh:毛岸英",
      GENDER: "male",
      DOB: "1923-02-26",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-006",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛岸青",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-002"],
      // "0007": ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-007",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛岸龙",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [R.RL_CHILD_OF]: ["PA2-002"],
      // "0007": ["PA2-002"],
    },
  },
  {
    [DPACKEY]: "PA1-008",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Mao An Qing||zh:毛宜昌",
      GENDER: "male",
      DOB: "1893-12-26",
    },
    rels: {
      [R.RL_HAS_MARR_BOND]: ["PA2-001"], // marriage with ykh
      // "100I": ["PA2-001"], // marriage with ykh
    },
  },
  {
    [DPACKEY]: "PA1-009",
    cat: "PA1",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      LSS: ["NAME"],
      NAME: "en:Wen Su Qin||zh:文素勤）",
      GENDER: "female",
      DOB: "1893-12-26",
    },
    rels: {
      [R.RL_HAS_MARR_BOND]: ["PA2-001"], // marriage with ykh
      // "100I": ["PA2-001"], // marriage with ykh
    },
  },
  // PA2 -------------------------------------------------
  {
    // marriage(毛宜昌 and 文素勤）
    [DPACKEY]: "PA2-001",
    cat: "PA2",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      NAME: "marriage(Mao Yi Chang, Wen Su Qing)",
    },
    rels: {
      [R.RL_HAS_CHILD]: [ 
        "PA1-001", // Mao ZD
        "PA1-002", // Mao ZM
        "PA1-003", // Mao ZT
      ],
      // : "PA1-008", // Mao YC
      [R.RL_HAS_MALE]: "PA1-008", // Mao YC
      [RL_HAS_MALE]: "PA1-009", // : Wen SQ
    },
  },
  {
    // marriage（毛泽东 and 杨开慧）
    [DPACKEY]: "PA2-002",
    cat: "PA2",
    subcat: "AUEA", // AI: AC, I(18*100), U: unknown; EA: east asia
    descr: {
      NAME: "marriage(Mao ZeDong, Yang Kai-Hui)",
    },
    rels: {
      [R.RL_HAS_CHILD]: [
        "PA1-005", // Mao AY
        "PA1-006", // Mao AQ
        "PA1-007", // Mao AL
      ],
      [R.RL_HAS_MALE]: "PA1-001", //  Mao zd
      [R.RL_HAS_FEMALE]: "PA1-004", //  yang kh
    },
  },
];
