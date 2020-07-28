/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-07
 * --------------------------------
 * Meta.js
 * ********************************************************/
const mongoose = require('mongoose');
const Util = require('./util').Util;
const Schema = mongoose.Schema;

// Create Schema for relational tag
const RlSchema = new Schema({
    _id: {
        type: String, // <4>-<3>-<6>-<13>, total: 26 chars
        required: true
    },
    descr: {
        type: String, // free style string descibin simantics
        required: true
    }
});

// Log collection Schema
const LgSchema = new Schema({
    _id: {
        type: String, // <4>-LGn-<6>-<13>, total: 26 chars
        required: true
    },
    paid: {
        type: String, // _id of entity, that triggered this log
    },
    sinfo: {
        type: String, // record more info.
        required: true
    },
});

const EntitySchema = new Schema({
    // valid for IT, PA, DC, AC, PB
    _id: {
        type: String, // <4>-<3>-<6>-<13>, total: 26 chars
        required: true
    },
    sinfo: {
        type: String, // synopsis string "en:--|zh:--", or '--'
        required: true
    },
    // data is only in PB (parameter-block).
    // in IT, PA, DC and AC, there is one or more pd-id,
    // where parameter-block(s) are referred.
    data: {
        type: Schema.Types.Mixed,
        required: false
    },
    reldict: {
        type: Schema.Types.Mixed,
        required: true
    }
});

const _init_Rlt = () => {
    let Tag = mongoose.model('rlt', RlSchema);
    let util = new Util();
    let tag;
    // generate_id with useTS: false, not time-stamp
    // they are unique already
    rtls.forEach(rlt => {
        tag = new Tag({
            _id: util.generate_id('META','RLT',rlt.subtype,false,false),
            descr: rlt.descr
        });
        tag.save().then(t => {console.log(`saved in db: ${t}`)});
    });

    // // ------000100
    // tag = new Tag({
    //     // subtype: '0100', rs: false, TS false
    //     _id: util.generate_id('META','RLT','0100',false,false),
    //     descr: 'part-of'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
    // // ------000200
    // tag = new Tag({
    //     _id: util.generate_id('META','RLT','0200',false,false),
    //     descr: 'made-by'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
    // // ------000300
    // tag = new Tag({
    //     _id: util.generate_id('META','RLT','0300',false,false),
    //     descr: 'reporting-to'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
    // // ------000400
    // tag = new Tag({
    //     _id: util.generate_id('META','RLT','0400',false,false),
    //     descr: 'describing'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
    // // ------000500
    // tag = new Tag({
    //     _id: util.generate_id('META','RLT','0500',false,false),
    //     descr: 'associated-with'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
    // // ------000600
    // tag = new Tag({
    //     _id: util.generate_id('META','RLT','0600',false,false),
    //     descr: 'partnership-with'
    // });
    // tag.save().then(t => {console.log(`saved in db: ${t}`)});
};  // ------------ end of _init_Rlt ----------------

module.exports = {
    // For each, mongoose will create a collection, the name of it
    // will be the plural of the 2-char used here: it -> its,... 
    // --------------------------------------------------------------
    // IT for items
    IT: mongoose.model('it', EntitySchema),
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