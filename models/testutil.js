const Util = require('./util').Util;

const u = new Util();

let id = u.generate_id('ABCD','XYZ');
console.log(`The result 1 is: ` + id);

id = u.generate_id('ABCD','XYZ','AZ');
console.log(`The result 2 is: ` + id);