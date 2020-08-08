// import 2 meta-models
const { RLT, ITU } = require("./Meta"); // models
// import data
const { rlts } = require("./metadata/rlt");
const { itus } = require("./metadata/itu");


class Util {
  static make_radom(n) {
    var result = "";
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
    var charactersLength = chars.length;
    for (var i = 0; i < n; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generate_rlt_id(cat1,cat2,rltype){
    // RLT id diff from Entity id: META-RLT-<3char>-<3char>-<4char> 
    return `META-RLT-${cat1}-${cat2}-${rltype}`;
  }

  static generate_id(
    custid, // 4 char customer-id(db-name) ACSII string
    cat,    // 3 char category-id
    subcat, // 4 char subtype
    rs = true, // 6 char random string, if false, opt-out
    TS = true  // 13 char from getTime(milsec) if false, opt out
  ) {     // 13 digits of msec can run to date of 2286-11-20T17:46:39
    //-----------total length: 30 chars ---------------------------------
    subcat = subcat ? subcat : "0000";
    let msg = `${custid}-${cat}-${subcat}`;
    if (rs) {
      msg = `${msg}-${Util.make_radom(6)}`;
    }
    let the_id;
    if (TS) {
      let ts = new Date().getTime().toString();
      let the_id = `${msg}-${ts}`;
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

  static make_entity = (M, ele) => {
    let rec = new M({
      _id: Util.generate_id("META", 
              ele.cat, ele.subcat, 
              false, false),
      cat: ele.cat,
      subcat: ele.subcat,
      card: {
        Name: ele.name,
        Descr: ele.descr,
      },
    });
    return rec;
  } // end of make_entity = (m, ele) =>

  static make_meta(db) { // RLT or ITU
    const metas = [[RLT, rlts],[ITU, itus]];

    const make_rlt = (M, ele) => {
      let rec = new M({
        _id: Util.generate_rlt_id(ele.cat1, ele.cat2, ele.rltype),
        card: {
          Name: ele.name,
          Descr: ele.descr
        }
      });
      return rec;
    } // end of make_rlt = (M, ele) =>

    let rec; // for model instance
    metas.forEach(meta => {
      let [M, data] = meta;
      db.collection(M.modelName + 's').drop((err) => {
        console.log("dropping rlts collection failed:" + err);
      });

      data.forEach((ele) => {
        rec = M === RLT? make_rlt(M, ele) : Util.make_entity(M, ele);
        console.log(`saving rec: ${rec} ...`);
        rec.save()
          .then((r) => console.log(`saved in db: ${r}`))
          .catch((err) => console.log(`save failed with: ${err}`));
      });  
    });
  }
}

module.exports = {
  Util: Util,
};
