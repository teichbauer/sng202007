/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * itu.js
 * ********************************************************/
const itus = [
  // META-ITU-<subcat>
  // numer units
  {
    cat: "ITU",
    subcat: "0000", // plain count
    descr: { LSS: ["NAME"], NAME: "en:-" },
  },
  {
    cat: "ITU",
    subcat: "0001", // tens
    card: {
      descr: { LSS: ["NAME"], NAME: "en:-" },
    },
  },
  {
    cat: "ITU",
    subcat: "0002", // 100
    descr: { LSS: ["NAME"], NAME: "en:-" },
  },
  {
    cat: "ITU",
    subcat: "0003", // kilos
    descr: { LSS: ["NAME"], NAME: "en:kilo" },
  },
  {
    cat: "ITU",
    subcat: "0004", // tens of kilo
    descr: { LSS: ["NAME"], NAME: "en:-" },
  },
  {
    cat: "ITU",
    subcat: "0005", // hundreds of kilo
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0006", // million
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0007", // tens of million
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0008", // hundred of million
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0009", // mega = kilo million
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0010", // tens of mega
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0011", // hundred mega
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  {
    cat: "ITU",
    subcat: "0012", // tera = kilo mega
    descr: { LSS: ["NAME"], NAME: "en:count: 10000, 20000, 30000,.." },
  },
  // --------------- byte count
  {
    cat: "ITU",
    subcat: "0021", // byte
    descr: { LSS: ["NAME"], NAME: "en:byte" },
  },
  {
    cat: "ITU",
    subcat: "0022", // kilo byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:kilo-byte",
      SYMBOL: "en:kB",
    },
  },
  {
    cat: "ITU",
    subcat: "0023", // mega byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:mega-byte",
      SYMBOL: "en:MB",
    },
  },
  {
    cat: "ITU",
    subcat: "0024", // giga byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:giga byte",
      SYMBOL: "en:GB",
    },
  },
  {
    cat: "ITU",
    subcat: "0025", // tera byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:tera-byte",
      SYMBOL: "TB",
    },
  },
  {
    cat: "ITU",
    subcat: "0026", // peta byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:peta-byte",
      SYMBOL: "en:PB",
    },
  },
  {
    cat: "ITU",
    subcat: "0027", //  exa byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:exa-byte",
      SYMBOL: "en:EB",
    },
  },
  {
    cat: "ITU",
    subcat: "0028", // zetta byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:zetta-byte",
      SYMBOL: "en:ZB",
    },
  },
  {
    cat: "ITU",
    subcat: "0029", // yotta byte
    descr: {
      LSS: ["NAME", "SYMBOL"],
      NAME: "en:yotta-byte",
      SYMBOL: "en:YB",
    },
  },
  // --------------- length
  {
    cat: "ITU",
    subcat: "1100",
    NAME: "en:metric length units",
    descr: { LSS: ["NAME"], NAME: "en:-" },
  },
  {
    cat: "ITU",
    subcat: "1101",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:millimeter",
      SYMBOL: "mm",
      TITLE: "en:millimeter",
    },
  },
  {
    cat: "ITU",
    subcat: "1102",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:metric length centimeter cm",
      TITLE: "en:centmeter",
      SYMBOL: "cm",
    },
  },
  {
    cat: "ITU",
    subcat: "1103",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:meter",
      TITLE: "en:meter",
      SYMBOL: "m",
    },
  },
  {
    cat: "ITU",
    subcat: "1104",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:kilometer",
      TITLE: "en:kilometer",
      SYMBOL: "km",
    },
  },
  {
    cat: "ITU",
    subcat: "1200",
    descr: {
      LSS: ["NAME"],
      NAME: "en:us length units",
    },
  },
  {
    cat: "ITU",
    subcat: "1201",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:inch",
      TITLE: "en:inch",
      SYMBOL: "inch",
    },
  },
  {
    cat: "ITU",
    subcat: "1202",
    descr: {
      LSS: ["NAME", "TITLE", "SYMBOL"],
      NAME: "en:us length feet",
      TITLE: "en:feet",
      SYMBOL: "en:feet||zh:英尺",
    },
  },
  {
    cat: "ITU",
    subcat: "1203",
    descr: {
      LSS: ["NAME", "TITLE", "SYMBOL"],
      NAME: "en:us length mile",
      TITLE: "en:mile",
      SYMBOL: "en:mile||zh:英里",
    },
  },
  // ------------------ volume
  {
    cat: "ITU",
    subcat: "2100",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric volume",
    },
  },
  {
    cat: "ITU",
    subcat: "2101",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:meteric volume cubic mm",
      TITLE: "en:cubic mm||zh:立方毫米",
      SYMBOL: "mm3",
    },
  },
  {
    cat: "ITU",
    subcat: "2102",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:meteric volume cubic cm",
      TITLE: "en:cubic cm||zh:立方厘米",
      SYMBOL: "cm^3",
    },
  },
  {
    cat: "ITU",
    subcat: "2103",
    descr: {
      LSS: ["NAME", "TITLE", "SYMBOL"],
      NAME: "en:",
      TITLE: "en:liter||zh:公升",
      SYMBOL: "en:L||zh:公升",
    },
  },
  {
    cat: "ITU",
    subcat: "2104",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:meteric volume cubic meter",
      TITLE: "en:cubic meter||zh:立方米",
      SYMBOL: "m3",
    },
  },
  // ------------- weight
  {
    cat: "ITU",
    subcat: "3100",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric weight",
    },
  },
  {
    cat: "ITU",
    subcat: "3101",
    descr: {
      LSS: ["NAME", "TITLE", "SYMBOL"],
      NAME: "en:meteric weight g",
      TITLE: "en:gram||zh:克",
      SYMBOL: "en:g||zh:克",
    },
  },
  {
    cat: "ITU",
    subcat: "3103",
    descr: {
      LSS: ["NAME", "TITLE", "SYMBOL"],
      NAME: "en:meteric weight mg 10**(-3) g",
      TITLE: "en:milligram||zh:毫克",
      SYMBOL: "en:mg||zh:毫克",
    },
  },
  {
    cat: "ITU",
    subcat: "3104",
    descr: {
      LSS: ["NAME", "TITLE"],
      NAME: "en:meteric weight micro g 10**(-6) g",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3105",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric weight kg",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3106",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric weight ton 10**3 kg",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3107",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric weight kilo-ton 10**6 kg",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3108",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric weight mega-ton 10**9 kg",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3109",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial weight. ounce 28.3495 g",
      TITLE: "",
      SYMBOL: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3110",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial weight. pound: 16 ounce, 453.592 g",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3111",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial weight grain(gr) 1/7000 pound, 0.06479 g",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3112",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial weight drachm(dr) 1/256 pound, 1.772 g",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3113",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial weight stone 14 pound, 6350.3 g",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3114",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial quarter, 28 pounds",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3115",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial ton, 2240 pounds",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // -------------- temperature
  {
    cat: "ITU",
    subcat: "4100",
    descr: {
      LSS: ["NAME"],
      NAME: "en:meteric temperature celsius",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4101",
    descr: {
      LSS: ["NAME"],
      NAME: "en:us temperature fahrenheit",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4103",
    descr: {
      LSS: ["NAME"],
      NAME: "en:metric temperature kelvin",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // --------------- time
  {
    cat: "ITU",
    subcat: "4104",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time hour",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4105",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time minute",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4106",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time second",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4107",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time millisecond",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4108",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time micro-second 10**(-6) second",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4109",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time nano-second 10**(-9) second",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4110",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time day",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4111",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time month",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4112",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time year",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4113",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time year b.c.",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4114",
    descr: {
      LSS: ["NAME"],
      NAME: "en:time year upon naming",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // --------------- electric
  // --------------- electric current: amperes
  {
    cat: "ITU",
    subcat: "4201",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric current: ampare",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4202",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric current: milli-ampare",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4203",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric current: micro-ampare",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4205",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric current: kilo-ampare",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4206",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric current: mega-ampare",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // --------------- electric voltage
  {
    cat: "ITU",
    subcat: "4210",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4211",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric milli-volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4212",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric micro-volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4213",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric kilo-volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4214",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric mega-volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4215",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric 10-kilo-volt/wan-volt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // --------------- electric watt
  {
    cat: "ITU",
    subcat: "4220",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric watt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4221",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric milli-watt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4222",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric micro-watt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4223",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric kilo-watt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4224",
    descr: {
      LSS: ["NAME"],
      NAME: "en:electric mega-watt",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  // --------------- preasure
  {
    cat: "ITU",
    subcat: "5000",
    descr: {
      LSS: ["NAME"],
      NAME: "en:mtric",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "5001",
    descr: {
      LSS: ["NAME"],
      NAME: "en:Pascal",
      TITLE: "Pascal",
      SYMBOL: "pa",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "5002",
    descr: {
      LSS: ["NAME"],
      NAME: "en:bar",
      TITLE: "",
      info: "100,000 pa",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "5003",
    descr: {
      LSS: ["NAME"],
      NAME: "en:milli bar/hectoPascal",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "5100",
    descr: {
      LSS: ["NAME"],
      NAME: "en:imperial preasure unit",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "5101",
    descr: {
      LSS: ["NAME"],
      NAME: "en:pound / square inch",
      TITLE: "psi",
      SYMBOL: "psi",
      ICON: "",
    },
  },
  // ---------------- speed
  {
    cat: "ITU",
    subcat: "6000",
    descr: {
      LSS: ["NAME"],
      NAME: "en:metric speed",
      TITLE: "psi",
      SYMBOL: "psi",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "6001",
    descr: {
      LSS: ["NAME"],
      NAME: "en:km/hour",
      TITLE: "km per hour",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "6002",
    descr: {
      LSS: ["NAME"],
      NAME: "en:km/sec",
      TITLE: "km per second",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "6100",
    descr: {
      LSS: ["NAME"],
      NAME: "en:non-metric speed",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
  {
    cat: "ITU",
    subcat: "6101",
    descr: {
      LSS: ["NAME"],
      NAME: "en:mile per hour",
      TITLE: "",
      SYMBOL: "",
      ICON: "",
    },
  },
];

export default itus;
