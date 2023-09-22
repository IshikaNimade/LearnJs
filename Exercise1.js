
//max of two
function maxOfTwo(a,b){
    if(a>b) return a;
    else return b;
}

let num = maxOfTwo(15,20);
console.log(num);





// landscape
function isLandscape(width,height){
   return (width>height);
}

console.log(isLandscape(30,12));






//fizzBuzz-->num is devisible by 3 we get fizz else we get buzz else if num id devisible by 3 and 5 we get fizzbuzz else num
const output = fizzBuzz(' 7');
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number') return "not a number";
    else if(input%3==0 && input%5==0) return "FizzBuzz";
    else if(input%3==0) return "Fizz";
    else if(input%5==0) return "Buzz";
    else return input;
}




//Demerits Points
//speet limit=70
//speed<=70-->ok
//5-->1point 
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerHour = 5;

    if(speed<speedLimit+kmPerHour) console.log("ok");
    else{
        let points = Math.floor((speed - speedLimit)/kmPerHour);
        if(points>=12) console.log("lisence suspended");
        else console.log("points : ", points)
    }
}

checkSpeed(130)





//count truthy
const array= [0, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value) count++;
    }
    return count;
}




//string properties
const movie = {
 title: 'a',
 director:'b',
 producer:'c',
 releaseDate:2013,
 ratings:4.6
}

showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] ==='string') console.log(key,obj[key]);
    }
}




//sum of multiple of 3 and 5 in a limit
function sum(num){
    let sum =0;
    for(let i=0;i<=num;i++)
        if(i%3===0||i%5===0) 
        sum+=i;
    return sum;
}

console.log(sum(10))




//calculate grade
const marks =[80,80,50];

console.log(calculateGrade(marks));

function calculateGrade(marks){

    let totalMarks = 0;
    for(let mark of marks){
        totalMarks+=mark;
    }
    let average=totalMarks/marks.length;

    if(average<60) return 'F';
    else if(average<70) return 'D';
    else if(average<80) return 'C';
    else if(average<90) return 'B';
    else return 'A';
}



//stars printing
stars(5)

function stars(num){
    for(let row=1;row<=num;row++){
        let pattern;
        for(let col=0;col<row;col++){
            pattern += "*";
        }
        console.log(pattern)
    }
}



//prime Number
showPrime(20);

function showPrime(limit){
    for(let number=2;number<=limit;number++){
        if(isPrime(number)) console.log(number)
    }
}

function isPrime(number){
        for(let factor=2;factor<number;factor++){
            if(number%factor===0) return false;
            
        return true;
        }
}
