import PAClass from "./PAClass.js";
import { pas } from "./sample_data/pa_sample1.js";

const test = () => {
  let pa, card;
  pas.forEach((ele) => {
    card = {
      Name: ele.name,
      ...ele.descr,
    };
    pa = new PAClass("TEST", ele.cat, ele.subcat, card);
    pa.save_db();
  });
};

export default test;
