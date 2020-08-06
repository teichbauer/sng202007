/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * Meta.js
 * --------------------------------------------------------
 * Design considerations:
 * 1. use nested structure for sub-unit of info, in stead of
 *    sub-schema. Because sub-schema has to be new-ed, if not
 *    will have undefined - this increase error
 *    Here I use card sub-unit, as nexted, but without schema:
 *    card: {
 *      Name:  String, // Localized-String(LS),
 *      Title: String, // Localized-String(LS),
 *      Descr: String, // Localized-String(LS),
 *      Symbol:String, // plain ASCII. No LS
 *      Icon:  String, // plain ASCII: file-path to a media-file
 *    }
 * 2. every doc, regardless Entity or meta schema, must have
 *    cat:    3 char which is included in doc._id
 *    subcat: 4 char which is included in doc._id
 *    define index with cat/subcat
 *    This makes query possible and fast
 * ********************************************************/
const mongoose = require('mongoose');
const Util = require('./util').Util;
const Schema = mongoose.Schema;

// Create Schema for relational tag
const RlSchema = new Schema({
    _id: {
        type: String,  // <4>-<3>-<4>-<6>-<13>, total: 30 chars
        required: true // custid-cat-subcat-rand-TS
    },
    cat: { type: String, required: true },    // 3 char, in index
    sybcat: { type: String, required: true }, // 4 char, in index
    card: {
        Name:   String, // Localized String
        Title:  String, // LS
        Descr:  String, // LS
        Symbol: String, // no LS, plain ASCII
        Icon:   String  // path to a media-file
    }
});
RlSchema.index({cat:1, subcat:1});// 1: ascending, -1: descending

// Log collection Schema
const LgSchema = new Schema({
    _id: {
        type: String, // <4>-LGn-<subcat>-<6>-<13>, total: 30 chars
        required: true
    },
    ActionType: String, // R/W/D/LI/LO Read,write,delete,login/out
    paid: {
        type: String, // _id of entity, that triggered this log
    },
    descr: String
});
LgSchema.index({ActionType: 1});

const EntitySchema = new Schema({
    // valid for IT, PA, DC, AC, PB
    _id: {
        type: String, // <4>-<3>-<6>-<13>, total: 26 chars
        required: true
    },
    cat: { type: String, required: true },    // 3 char, in index
    sybcat: { type: String, required: true }, // 4 char, in index
    card: {
        Name:   String,  // Localized String
        Title:  String, // LS
        Descr:  String, // LS
        Symbol: String, // no LS, plain ASCII
        Icon:   String  // path to a media-file
    },
    // data is only in PB (parameter-block).
    // in IT, PA, DC and AC, there is one or more pd-id,
    // where parameter-block(s) are referred.
    data: {
        type: Schema.Types.Mixed,
        required: false
    },
    rels: {} // {<RLT-tag(s) as key>:<id of child-obj>,..}
});
EntitySchema.index({cat: 1, subcat: 1});

module.exports = {
    // For each, mongoose will create a collection, the name of it
    // will be the plural of the 2-char used here: it -> its,... 
    // --------------------------------------------------------------
    // IT for items
    IT: mongoose.model('it', EntitySchema),
    ITU: mongoose.model('itu', EntitySchema),
    // PA for a person, an organization or institution
    PA: mongoose.model('pa', EntitySchema),
    // DC for description, documentation
    DC: mongoose.model('dc', EntitySchema),
    // AC for account (access)
    AC: mongoose.model('ac', EntitySchema),
    // AT for action, transaction record
    AT: mongoose.model('ac', EntitySchema),
    // PB for parameter-/data-block
    PB: mongoose.model('pb', EntitySchema),
    // RL: relationship
    RL: mongoose.model('rl', RlSchema),
    RLT: mongoose.model('rlt', RlSchema),
    // LG for logging record
    LG: mongoose.model.toString('lg', LgSchema)
};