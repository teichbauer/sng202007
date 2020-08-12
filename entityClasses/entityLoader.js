/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * entityLoader.js
 * ********************************************************/

import { DPACKEY, pas } from "./sample_data/pa_sample1.js";
import Util from "../models/util.js";
import PAClass from "./PAClass.js";
// import fs from "fs.js";

const [cid, load_number] = DPACKEY.split("-");

// fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
const fsCallback = (err, data) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("write log file done.");
  }
};

const fsWriteLog = function (fname, data, callback) {};

let log_lines;

export default function entityLoader() {
  let nameMap = {};
  let p;
  let card;
  let ents = [];
  for (let pa of pas) {
    card = {
      Name: Util.getDescrValue(pa.descr, "NAME"),
      Descr: { ...pa.descr },
    };
    p = new PAClass(cid, pa.cat, "0000", card);
    ents.push(p);
    nameMap[pa[DPACKEY]] = pa._id;
  }
}
