//arrays
const array=[1,2,3];

//adding an element
//end
array.push(6,7);
//begining
array.unshift(0,9);
//middle
array.splice(2,0,5,9)

console.log(array)

//finding the elements
console.log(array.indexOf(5))
console.log(array.lastIndexOf(0))
console.log(array.includes(2))

//Arrow Function
const cources= [
    {id:1,name:'a'},
    {id:2,name:'b'}
];

const arrow = cources.find(() => cources.name==='a');
console.log(arrow);

//Removing an array
//end
array.pop();
//beggining
array.shift();
//middle
array.splice(2,2)

console.log(array)

//emptying an array
//array=[];-->solution 1
//array.length=0;---->solution 2
//array.slice(0,array.length);----->solution 3