/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * itu.js
 * ********************************************************/
const itus = [ // META-ITU-<subcat>
    // numer units
    {   
        subcat: '0000',  // plain count
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'plain count: 1,2,3,..',
    },
    {   
        subcat: '0001',  // tens
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10, 20, 30,..'
    },
    {   
        subcat: '0002',  // 100
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 100, 200, 300,..'
    },
    {   
        subcat: '0003',  // kilos
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 1000, 2000,...'
    },
    {   
        subcat: '0004',  // tens of kilo
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0005',  // hundreds of kilo
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0006',  // million
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0007',  // tens of million
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0008',  // hundred of million
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0009',  // mega = kilo million
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0010',  // tens of mega 
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0011',  // hundred mega 
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    {   
        subcat: '0012',  // tera = kilo mega
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'count: 10000, 20000, 30000,..'
    },
    // --------------- byte count
    {   
        subcat: '0021',  // byte
        name: 'en:byte',
        title:'',
        symbol: 'B',
        icon: '',
        descr: 'count byte'
    },
    {   
        subcat: '0022',  // kilo byte
        name: 'en:kilo-byte',
        title:'',
        symbol: 'KB',
        icon: '',
        descr: 'count 1KB,2KB...'
    },
    {   
        subcat: '0023',  // mega byte
        name: 'en:mega-byte',
        title:'',
        symbol: 'MB',
        icon: '',
        descr: 'count 1,2,3,..'
    },
    {   
        subcat: '0024',  // giga byte
        name: 'en:giga byte',
        title:'',
        symbol: 'GB',
        icon: '',
        descr: 'count 1GB,2GB,..'
    },
    {   
        subcat: '0025',  // tera byte
        name: 'en:tera-byte',
        title:'',
        symbol: 'TB',
        icon: '',
        descr: 'count 1TB,2TB,..'
    },
    {   
        subcat: '0026',  // peta byte
        name: 'en:peta-byte',
        title:'',
        symbol: 'PB',
        icon: '',
        descr: 'count 1PB,2PB,..'
    },
    {   
        subcat: '0027',  //  exa byte
        name: 'en:exa-byte',
        title:'',
        symbol: 'EB',
        icon: '',
        descr: 'count 1EB,2EB,..'
    },
    {   
        subcat: '0028',  // zetta byte
        name: 'en:zetta-byte',
        title:'',
        symbol: 'ZB',
        icon: '',
        descr: 'count 1ZB,2ZB,..'
    },
    {   
        subcat: '0029',  // yotta byte
        name: 'en:yotta-byte',
        title:'',
        symbol: 'YB',
        icon: '',
        descr: 'count 1YB,2YB,..'
    },
    // --------------- length
    {
        subcat: '1100',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'metric length units'
    },
    {
        subcat: '1101',
        name: 'en:millimeter',
        title:'en:millimeter',
        symbol: 'mm',
        icon: '',
        descr: 'metric length millimeter mm'
    },
    {
        subcat: '1102',
        name: 'en:centmeter',
        title:'en:centmeter',
        symbol: 'cm',
        icon: '',
        descr: 'metric length centimeter cm'
    },
    {
        subcat: '1103',
        name: 'en:meter',
        title:'en:meter',
        symbol: 'm',
        icon: '',
        descr: 'metric length meter'
    },
    {
        subcat: '1104',
        name: 'en:kilometer',
        title:'en:kilometer',
        symbol: 'km',
        icon: '',
        descr: 'metric length kilometer'
    },
    {
        subcat: '1200',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'us length units'
    },
    {
        subcat: '1201',
        name: 'en:inch',
        title:'en:inch',
        symbol: 'inch',
        icon: '',
        descr: 'us length inch'
    },
    {
        subcat: '1202',
        name: 'en:feet',
        title:'en:feet',
        symbol: 'feet',
        icon: '',
        descr: 'us length feet'
    },
    {
        subcat: '1203',
        name: 'en:mile',
        title:'en:mile',
        symbol: 'mile',
        icon: '',
        descr: 'us length mile'
    },
    // ------------------ volume
    {
        subcat: '2100',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric volume'
    },
    {
        subcat: '2101',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric volume cubic mm'
    },
    {
        subcat: '2102',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric volume cubic cm'
    },
    {
        subcat: '2103',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric volume liter'
    },
    {
        subcat: '2104',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric volume cubic meter'
    },
    // ------------- weight
    {
        subcat: '3100',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight'
    },
    {
        subcat: '3101',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight g'
    },
    {
        subcat: '3103',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight mg 10**(-3) g'
    },
    {
        subcat: '3104',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight micro g 10**(-6) g'
    },
    {
        subcat: '3105',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight kg'
    },
    {
        subcat: '3106',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight ton 10**3 kg'
    },
    {
        subcat: '3107',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight kilo-ton 10**6 kg'
    },
    {
        subcat: '3108',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric weight mega-ton 10**9 kg'
    },
    {
        subcat: '3109',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial weight. ounce 28.3495 g'
    },
    {
        subcat: '3110',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial weight. pound: 16 ounce, 453.592 g'
    },
    {
        subcat: '3111',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial weight grain(gr) 1/7000 pound, 0.06479 g'
    },
    {
        subcat: '3112',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial weight drachm(dr) 1/256 pound, 1.772 g'
    },
    {
        subcat: '3113',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial weight stone 14 pound, 6350.3 g'
    },
    {
        subcat: '3114',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial quarter, 28 pounds'
    },
    {
        subcat: '3115',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'imperial ton, 2240 pounds'
    },
    // -------------- temperature
    {
        subcat: '4100',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'meteric temperature celsius'
    },
    {
        subcat: '4101',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'us temperature fahrenheit'
    },
    {
        subcat: '4103',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'metric temperature kelvin'
    },
    // --------------- time
    {
        subcat: '4104',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time hour'
    },
    {
        subcat: '4105',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time minute'
    },
    {
        subcat: '4106',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time second'
    },
    {
        subcat: '4107',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time millisecond'
    },
    {
        subcat: '4108',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time micro-second 10**(-6) second'
    },
    {
        subcat: '4109',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time nano-second 10**(-9) second'
    },
    {
        subcat: '4110',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time day'
    },
    {
        subcat: '4111',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time month'
    },
    {
        subcat: '4112',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time year'
    },
    {
        subcat: '4113',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time year b.c.'
    },
    {
        subcat: '4114',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'time year upon naming'
    },
    // --------------- electric
    // --------------- electric current: amperes
    {
        subcat: '4201',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric current: ampare'
    },
    {
        subcat: '4202',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric current: milli-ampare'
    },
    {
        subcat: '4203',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric current: micro-ampare'
    },
    {
        subcat: '4205',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric current: kilo-ampare'
    },
    {
        subcat: '4206',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric current: mega-ampare'
    },
    // --------------- electric voltage
    {
        subcat: '4210',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric volt'
    },
    {
        subcat: '4211',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric milli-volt'
    },
    {
        subcat: '4212',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric micro-volt'
    },
    {
        subcat: '4213',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric kilo-volt'
    },
    {
        subcat: '4214',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric mega-volt'
    },
    {
        subcat: '4215',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric 10-kilo-volt/wan-volt'
    },
    // --------------- electric watt
    {
        subcat: '4220',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric watt'
    },
    {
        subcat: '4221',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric milli-watt'
    },
    {
        subcat: '4222',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric micro-watt'
    },
    {
        subcat: '4223',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric kilo-watt'
    },
    {
        subcat: '4224',
        name: '',
        title:'',
        symbol: '',
        icon: '',
        descr: 'electric mega-watt'
    },
];

module.exports = {
    itus: itus
}