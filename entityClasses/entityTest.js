const PAClass = require('./PAClass');
const pas = require('./sample_data/pa_sample1');

const test = () => {
    let pa, card;
    pas.forEach(ele => {
        card = {
            Name: ele.name,
            ...ele.descr
        }
        pa = new PAClass('TEST',
                ele.cat, ele.subcat, card)
        pa.save_db();
    });
}

module.exports = test;