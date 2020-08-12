/**********************************************************
 * Digital-Work(c) 2020
 * -----------------------------
 * Authored: Raymond Wei 2020-08
 * --------------------------------
 * util.js
 * ********************************************************/

// import 2 meta-models
import Meta from "./Meta.js";
const { RLT, ITU } = Meta;
// import data
import rlts from "./metadata/rlt.js";
import itus from "./metadata/itu.js";

/** global settings for string Localization
 * ------------------------------------------
 * regular expression pattern for
 * en: English, zh: Chinese, de: German
 */
const LS_REGEXP = new RegExp(/\ben\:|\bzh\:|\bde\:/g);
const DEFAULT_LOCALE = "en"; // locale-string: en | zh | ...

export default class Util {
  static get default_LS() {
    return DEFAULT_LOCALE;
  }

  static getDescrValue(Descr, key, ls = null) {
    if (!(key in Descr)) return "";
    if (!Descr.LSS || !Descr.LSS.includes(key)) return Descr[key];

    // Descr.LSS exists, key is in it
    ls = ls || Util.default_LS;
    let msg = Descr[key];
    if (msg.search(LS_REGEXP) > -1) {
      // msg has locale in it
      let splt = msg.split("||");
      let defLS = "";
      for (let m of splt) {
        if (m.startsWith(ls)) {
          return m.split(":")[1];
        } else if (m.startsWith(Util.default_LS)) {
          defLS = m.split(":")[1];
        }
        // msg doesn't contain ls as locale
        if (defLS.length > 0) {
          // but DOES have default LS: return default msg
          return defLS;
        } else {
          // not having default LS.
          // use the very first | separated msg
          if (splt[0].search(":") > -1) {
            // having a :, split with : and return body
            return splt[0].split(":")[1];
          } else {
            // no : in it - return the whole body
            return splt[0];
          }
        }
      }
    } else {
      return msg;
    }
  }

  static make_radom(n) {
    var result = "";
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
    var charactersLength = chars.length;
    for (var i = 0; i < n; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generate_rlt_id(cat1, cat2, rltype) {
    // RLT id diff from Entity id: META-RLT-<3char>-<3char>-<4char>
    return `META-RLT-${cat1}-${cat2}-${rltype}`;
  }

  static generate_id(
    custid, // 4 char customer-id(db-name) ACSII string
    cat, // 3 char category-id
    subcat, // 4 char subtype
    rs = true, // 6 char random string, if false, opt-out
    TS = true // 13 char from getTime(milsec) if false, opt out
  ) {
    // 13 digits of msec can run to date of 2286-11-20T17:46:39
    //-----------total length: 30 chars ---------------------------------
    subcat = subcat ? subcat : "0000";
    let msg = `${custid}-${cat}-${subcat}`;
    if (rs) {
      msg = `${msg}-${Util.make_radom(6)}`;
    }
    let the_id;
    if (TS) {
      let ts = new Date().getTime().toString();
      the_id = `${msg}-${ts}`;
    } else {
      the_id = msg;
    }
    return the_id;
  } // end of generate_id --------------------------------------

  static read_id(id_string) {
    let splt = id_string.split("-");
    let dt = new Date();
    dt.setTime(Number(splt[4]));
    return {
      custid: splt[0],
      typeid: splt[1],
      subtype: splt[2],
      rs: splt[3],
      TS: dt.toISOString(),
    };
  } // end of read_id ------------------------------------------

  static make_entity = (M, ele, id, useRandom = true, useTS = true) => {
    id = id || Util.generate_id("META", ele.cat, ele.subcat, useRandom, useTS);
    let rec = new M({
      _id: id,
      cat: ele.cat,
      subcat: ele.subcat || id.substr(9, 4),
      card: {
        Name: ele.name,
        Descr: { LSS: [], NAME: ele.name, ...ele.descr },
      },
    });
    if (ele.name.search(LS_REGEXP) > -1) {
      rec.card.Descr["LSS"].push("Name");
    }
    return rec;
  }; // end of make_entity = (m, ele) =>

  static make_meta(db) {
    // RLT or ITU
    const metas = [
      [RLT, rlts],
      [ITU, itus],
    ];

    const make_rlt = (M, ele) => {
      let rec = new M({
        _id: Util.generate_rlt_id(ele.cat1, ele.cat2, ele.rltype),
        card: {
          Name: ele.name,
          Descr: ele.descr,
        },
      });
      return rec;
    }; // end of make_rlt = (M, ele) =>

    metas.forEach((meta) => {
      let [M, data] = meta;
      db.collection(M.modelName + "s").drop((err) => {
        console.log("dropping rlts collection failed:" + err);
      });

      data.forEach((ele) => {
        let rec =
          M === RLT
            ? make_rlt(M, ele)
            : Util.make_entity(
                M,
                ele,
                null, // _id null: let generate
                false, // useRandome: false
                false // useTS: false
              );
        rec
          .save()
          .then((r) => console.log(`saved in db: ${M.modelName}`))
          .catch((err) => console.log(`save failed with: ${err}`));
      });
    });
  }
}
