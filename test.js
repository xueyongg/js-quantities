var parse_quantity = require('./');


var measure = '5GB';
var qty = parse_quantity(measure);

console.log(qty);