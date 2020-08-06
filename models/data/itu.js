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
    name: "plain count: 1,2,3,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0001", // tens
    name: "count: 10, 20, 30,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0002", // 100
    name: "count: 100, 200, 300,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0003", // kilos
    name: "count: 1000, 2000,...",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0004", // tens of kilo
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0005", // hundreds of kilo
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0006", // million
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0007", // tens of million
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0008", // hundred of million
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0009", // mega = kilo million
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0010", // tens of mega
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0011", // hundred mega
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0012", // tera = kilo mega
    name: "count: 10000, 20000, 30000,..",
    descr: {},
  },
  // --------------- byte count
  {
    cat: "ITU",
    subcat: "0021", // byte
    name: "en:byte",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "0022", // kilo byte
    name: "en:kilo-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:kB",
    },
  },
  {
    cat: "ITU",
    subcat: "0023", // mega byte
    name: "en:mega-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:MB",
    },
  },
  {
    cat: "ITU",
    subcat: "0024", // giga byte
    name: "en:giga byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:GB",
    },
  },
  {
    cat: "ITU",
    subcat: "0025", // tera byte
    name: "en:tera-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "TB",
    },
  },
  {
    cat: "ITU",
    subcat: "0026", // peta byte
    name: "en:peta-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:PB",
    },
  },
  {
    cat: "ITU",
    subcat: "0027", //  exa byte
    name: "en:exa-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:EB",
    },
  },
  {
    cat: "ITU",
    subcat: "0028", // zetta byte
    name: "en:zetta-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:ZB",
    },
  },
  {
    cat: "ITU",
    subcat: "0029", // yotta byte
    name: "en:yotta-byte",
    descr: {
      LSS: ["symbol"],
      symbol: "en:YB",
    },
  },
  // --------------- length
  {
    cat: "ITU",
    subcat: "1100",
    name: "metric length units",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "1101",
    name: "en:millimeter",
    descr: {
      LSS: ["title"],
      symbol: "mm",
      title: "en:millimeter",
    },
  },
  {
    cat: "ITU",
    subcat: "1102",
    name: "metric length centimeter cm",
    descr: {
      LSS: ["title"],
      title: "en:centmeter",
      symbol: "cm",
    },
  },
  {
    cat: "ITU",
    subcat: "1103",
    name: "meter",
    descr: {
      LSS: ["title"],
      title: "en:meter",
      symbol: "m",
    },
  },
  {
    cat: "ITU",
    subcat: "1104",
    name: "en:kilometer",
    descr: {
      LSS: ["title"],
      title: "en:kilometer",
      symbol: "km",
    },
  },
  {
    cat: "ITU",
    subcat: "1200",
    name: "us length units",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "1201",
    name: "en:inch",
    descr: {
      LSS: ["title"],
      title: "en:inch",
      symbol: "inch",
    },
  },
  {
    cat: "ITU",
    subcat: "1202",
    name: "us length feet",
    descr: {
      LSS: ["title", "symbol"],
      title: "en:feet",
      symbol: "en:feet||zh:英尺",
    },
  },
  {
    cat: "ITU",
    subcat: "1203",
    name: "us length mile",
    descr: {
      LSS: ["title", "symbol"],
      title: "en:mile",
      symbol: "en:mile||zh:英里",
    },
  },
  // ------------------ volume
  {
    cat: "ITU",
    subcat: "2100",
    name: "meteric volume",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "2101",
    name: "meteric volume cubic mm",
    descr: {
      LSS: ["title"],
      title: "en:cubic mm||zh:立方毫米",
      symbol: "mm3",
    },
  },
  {
    cat: "ITU",
    subcat: "2102",
    name: "meteric volume cubic cm",
    descr: {
      LSS: ["title"],
      title: "en:cubic cm||zh:立方厘米",
      symbol: "cm^3",
    },
  },
  {
    cat: "ITU",
    subcat: "2103",
    name: "",
    descr: {
      LSS: ["title", "symbol"],
      title: "en:liter||zh:公升",
      symbol: "en:L||zh:公升",
    },
  },
  {
    cat: "ITU",
    subcat: "2104",
    name: "meteric volume cubic meter",
    descr: {
      LSS: ["title"],
      title: "en:cubic meter||zh:立方米",
      symbol: "m3",
    },
  },
  // ------------- weight
  {
    cat: "ITU",
    subcat: "3100",
    name: "meteric weight",
    descr: {},
  },
  {
    cat: "ITU",
    subcat: "3101",
    name: "meteric weight g",
    descr: {
      LSS: ["title", "symbol"],
      title: "en:gram||zh:克",
      symbol: "en:g||zh:克",
    },
  },
  {
    cat: "ITU",
    subcat: "3103",
    name: "meteric weight mg 10**(-3) g",
    descr: {
      LSS: ["title", "symbol"],
      title: "en:milligram||zh:毫克",
      symbol: "en:mg||zh:毫克",
    },
  },
  {
    cat: "ITU",
    subcat: "3104",
    name: "meteric weight micro g 10**(-6) g",
    descr: {
      LSS: ["title"],
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3105",
    name: "meteric weight kg",
    descr: {
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3106",
    name: "meteric weight ton 10**3 kg",
    descr: {
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3107",
    name: "meteric weight kilo-ton 10**6 kg",
    descr: {
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3108",
    name: "meteric weight mega-ton 10**9 kg",
    descr: {
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3109",
    name: "imperial weight. ounce 28.3495 g",
    descr: {
      title: "",
      symbol: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3110",
    name: "imperial weight. pound: 16 ounce, 453.592 g",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3111",
    name: "imperial weight grain(gr) 1/7000 pound, 0.06479 g",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3112",
    name: "imperial weight drachm(dr) 1/256 pound, 1.772 g",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3113",
    name: "imperial weight stone 14 pound, 6350.3 g",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3114",
    name: "imperial quarter, 28 pounds",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "3115",
    name: "imperial ton, 2240 pounds",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  // -------------- temperature
  {
    cat: "ITU",
    subcat: "4100",
    name: "meteric temperature celsius",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4101",
    name: "us temperature fahrenheit",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4103",
    name: "metric temperature kelvin",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  // --------------- time
  {
    cat: "ITU",
    subcat: "4104",
    name: "time hour",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4105",
    name: "time minute",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4106",
    name: "time second",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4107",
    name: "time millisecond",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4108",
    name: "time micro-second 10**(-6) second",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4109",
    name: "time nano-second 10**(-9) second",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4110",
    name: "time day",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4111",
    name: "time month",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4112",
    name: "time year",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4113",
    name: "time year b.c.",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4114",
    name: "time year upon naming",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  // --------------- electric
  // --------------- electric current: amperes
  {
    cat: "ITU",
    subcat: "4201",
    name: "electric current: ampare",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4202",
    name: "electric current: milli-ampare",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4203",
    name: "electric current: micro-ampare",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4205",
    name: "electric current: kilo-ampare",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4206",
    name: "electric current: mega-ampare",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  // --------------- electric voltage
  {
    cat: "ITU",
    subcat: "4210",
    name: "electric volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4211",
    name: "electric milli-volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4212",
    name: "electric micro-volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4213",
    name: "electric kilo-volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4214",
    name: "electric mega-volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4215",
    name: "electric 10-kilo-volt/wan-volt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  // --------------- electric watt
  {
    cat: "ITU",
    subcat: "4220",
    name: "electric watt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4221",
    name: "electric milli-watt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4222",
    name: "electric micro-watt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4223",
    name: "electric kilo-watt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
  {
    cat: "ITU",
    subcat: "4224",
    name: "electric mega-watt",
    descr: {
      title: "",
      symbol: "",
      icon: "",
    },
  },
];

module.exports = {
  itus: itus,
};
