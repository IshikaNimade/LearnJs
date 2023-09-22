const _ = require("lodash");

var obj1 = (['tee', 'cee', 'dee', 'bee', 'eee' ]);
var obj2 = (['q', 'r', 's', 'p' ]);
 
// Use of _.countBy() method
console.log(_.countBy(obj1, 'length'),_.countBy(obj2, 'length'));

// Check value is found or not by _.includes() method
console.log(_.includes(obj1, 'dee'));

// Use of _.every() method
console.log(_.every(obj1, Boolean),_.every(obj2, Boolean));

// Use of _.flatMap() method
console.log(_.flatMap(obj2, function duplicate(n) {return [n, n];}));

// Use of _.find() method
let x = [-1, 29, 7, 10, 13, 15];
console.log(_.find(x, function(n) {if (n > 10) {return true;}}, 2));

// Use of _.forEach() method
_.forEach({ 'x': 1, 'y': 2 }, function(value, key) {
    console.log(key);
  });

 // Using the _.filter() method
var users = [
    { 'user': 'luv',
      'salary': 36000,
      'active': true },
    { 'user': 'kush', 
      'salary': 40000,
      'active': false }
  ];
    
  console.log(_.filter(users, function(o) {return !o.active;}));

  // Using of _.groupBy() method
console.log( _.groupBy(users, 'length'));




