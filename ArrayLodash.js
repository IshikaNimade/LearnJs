let _ = require("lodash");

let arr = [1, 2, 3, 4, 5, 6,"a", "b", "c", "d"];

console.log("Before: ", arr)
 
// Making chunks of size 3
console.log("After: ", _.chunk(arr, 3))

//comapct
let array = [0, 1, false, 2, '', 3];
console.log(_.compact(array))

//concat
let first = [1, 2, 3];
let second = [0, 5, "a", "b"]
console.log(_.concat(first, second));

//difference
console.log(_.difference(first, second));

//drop
console.log(_.drop(first, 2));

//fill
console.log(_.fill(array, 10, 0, 4));

