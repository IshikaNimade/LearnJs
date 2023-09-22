const _ = require("lodash"); 

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
 var result=  _.filter(users, function(o) { return !o.active; });

 console.log(result);


 // Getting the timestamp
console.log(_.now());