// Loops --> repeating actions 
//for / while /do...while

//for loop
for(let i = 1; i <= 5; i++){
    console.log("Hello World! ", i);
}

//odd number
for(let i = 1; i<=5;i++){
    if(i%2!==0){
        console.log("odd number ", i);
    }
}

//While Loop
let i = 1;

while(i<=5){
    if(i%2==0){
    console.log("even number ", i);
    }
    i++;
}

//do....while loop
let j = 1;

do{
    if(j%2==0){
        console.log("even number ", j);
        }
        j++;
}while(j<=5)


//for....in loop
const person ={
    name: 'ishika',
    age: 20
}

for(let key in person){
    console.log(key, person[key]);
}

const colors = ['red','green','blue'];

for(let color in colors){
    console.log( color, colors[color])
}


//for...of loop
for(let color of colors){
    console.log(color)
}


