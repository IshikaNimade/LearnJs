const _ = require("lodash");  

// Use of _.inRange method 
console.log(_.inRange(12, 10)); 
console.log(_.inRange(10, 12)); 
console.log(_.inRange(5.6, 5)); 
console.log(_.inRange(5.6, 6));

// Use of _.random method 
console.log(_.random(10)); 
console.log(_.random(10, 12)); 
console.log(_.random(10, 12)); 
console.log(_.random(10.3, 12.5)); 
  
// Use of _.clamp method 
console.log(_.clamp(15, -13, 13)); 
console.log(_.clamp(-15, -13, 13)); 

//math 
console.log(_.add(12, 38));
console.log(_.ceil(2.4));
console.log(_.divide(12, 5));
console.log(_.floor(2.4));
console.log(_.multiply(15, 8));
console.log(_.max([15, 7, 38, 46, 82]));
console.log(_.min([15, 7, 38, 46, 82]));
console.log(_.mean([15, 7, 38, 46, 82]));
console.log(_.sum([15, 7, 38, 46, 82]));
console.log(_.subtract(50, 18));
console.log(_.round(9.005, 2));