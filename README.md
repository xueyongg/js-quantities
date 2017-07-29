
#Expand a string with quantities

Say you have the following string: *"5GB"*, you can expand it to its numeric representation using this module.

It's actually very simple to use... 


```javascript

var parse_quantity = require('parse-quantities');


var measure = '5GB';
var qty = parse_quantity(measure);

console.log(qty);

```

Output:

```

{
    "scalar": 5,
    "baseScalar": 5000000000,
    "signature": 25600000000,
    "_conversionCache": {},
    "numerator: [ "<gigabyte>" ],
    denominator": [ "<1>" ],
    "initValue": "5GB",
    "_isBase": false,
    "_units": "GB"
}

  ```