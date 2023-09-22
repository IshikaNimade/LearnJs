const _ = require("lodash"); 
  
// Applying _.after() method
var gfg = _.after(2, function () {
  console.log('Successful');
});
  
gfg(); // Print nothing
gfg(); // Print Successful

// Applying _.ary() method
console.log(_.map(['6', '8', '10'],_.ary(parseInt, 2)));

var before = _.before(2, function () {
    console.log('Successful');
});
 
// It will print Successful
before();
 
// It will print nothing
before();

// Function
var fun = function(Geeks) { 
    return 'Company Name : ' + this.Company 
        + '\nAddress : ' + this.Address 
        + '\nContact : ' + this.Contact 
}; 
    
// Use of bind() function
var func = _.bind(fun, { 
    Company: 'GeeksforGeeks', 
    Address: 'Noida', 
    Contact: '+91 9876543210' 
}); 
    
console.log(func());

