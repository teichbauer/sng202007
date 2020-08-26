/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * customer(cid) data is under ROOT/data/<cid>
 * For the purpose of
 * loading/dumping data to/from DB/data/<cid>/*
 * ----------------------------------------------
 * LDManager.js
 * ********************************************************/
/**
 * ROOT/
 *   data
 *     TC6H             // cid for one customer
 *        initial       // initial data input: pas.js, its.js, ...
 *          pas.js
 *          ...
 *        repo001
 *          ents.js
 *        repo002.js    // delta: relative to repo001: NEW | MOD | DEL
 *          ents.js
 *        repo002
 *          ents.js     // delta: relative to repo002: NEW | MOD | DEL
 *  periodically(E.G. weekly or monthly) dump DB for a cid (customer)
 *  record the history in DB-collection cat:HRP for keeping track
 *   LDManager.js offers methods for
 *     - generate repo<nnn>.js a snapshot of DB, combine from repos
 */
import fs from "fs";
import entityLoader from "./entityClasses/entityLoader.js";

let cid = "TC6H";
let pas_data = fs.readFileSync(`./data/${cid}/pas.js`);
let pas = JSON.parse(pas_data);

entityLoader(cid, pas);
