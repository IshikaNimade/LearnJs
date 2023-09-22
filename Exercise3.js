//array exercise

//array for range
function arrayFromRange(min,max){
    const output = [];
     for(let i=min;i<=max;i++){
        output.push(i);
        return output;
     }

}

console.log(arrayFromRange(1,20));

//includes
const numbers=[1,2,4,6];


console.log(includes(numbers,1));

function includes(array,seachelement){
    for(let element of array)
        if(element === seachelement)
            return true;
    else return false;
}

//except
console.log(except(numbers,[1,2]));

function except(array,excluded){
    const output=[];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output;
}

//moving element
console.log(move(numbers, 0, 3));

function move(array,index,offset){

    const position= index+offset;
    if(position>=array.length){
        console.error("invalid offset");
        return;
    }

    const output = [...array];
    const element= output.splice(index,1)[0];
    output.splice(position,0,element);
    return output;
}

//Movies
const movies = [
    {title:'a',year:2018,rating:4.3},
    {title:'b',year:2018,rating:4.5},
    {title:'c',year:2018,rating:3},
    {title:'d',year:2017,rating:2.0},
];

//movies in 2018 with rating >4     2>sort them by rating      3>decending order    4>title 

const titles = movies.filter(m=> m.year===2018 && m.rating>4)
                    .sort((a,b) => a.rating-b.rating)
                    .reverse()
                    .map(m=>m.title)

console.log(titles)