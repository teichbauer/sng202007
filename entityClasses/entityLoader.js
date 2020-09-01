/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * entityLoader.js
 * ********************************************************/

// import { DPACKEY, pas } from "./sample_data/pa_sample1.js";
import Util from "../models/util.js";
import PAClass from "./PAClass.js";

let log_lines;

export default function entityLoader(cid, pas, nameMap) {
  const find_id_in_map = (v, map) => {
    if (v in map) {
      return map[v];
    } else {
      console.log(`Error: ${v} not in nameMap`);
      return "";
    }
  };

  let ent;
  // let card;
  let ents = [];
  // loop-1: create each with it's _id
  for (let pa of pas) {
    if (!pa.card) {
      pa.card = {
        Name: Util.getDescrValue(pa.descr, "NAME"),
        Descr: { ...pa.descr },
      };
    }

    ent = new PAClass(cid, pa);
    ents.push(ent);
    nameMap[pa[DPACKEY]] = ent._id;
  }
  // loop-2: set rels:
  for (ent of ents) {
    for (let key in ent.rels) {
      let v = ent.rels[key];
      if (typeof v == typeof "") {
        // a single
        if (v.length < 28) {
          // generated _id.length > 28: it is DPACKEY
          ent.rels[key] = find_id_in_map(v, nameMap);
        }
      } else if (typeof v == typeof []) {
        let ar = [];
        for (let e of v) {
          ar.push(find_id_in_map(e, nameMap));
        }
        ent.rels[key] = ar.slice();
      }
    }
  }
  // loop-3: save in db
  for (ent of ents) {
    ent.save_db();
  }
} // end of function entityLoader()
