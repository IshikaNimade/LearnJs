//object oriented programming (oops)
//objects-->collection of key value pair
//when a function is part of the object it is known as method

let circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisable:true,
    draw:function(){
        console.log('draw')
    }
};

circle.draw();//method


//factory function ---> used to produce objects
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


//Constructor function
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}

const circleer = new Circle(1);
console.log(circleer);

//dynamic nature of object
circleer.color='yellow';
console.log(circleer)

delete circleer.draw;
console.log(circleer)


//clonning the object
const another = Object.assign({
    color: 'yellow'
},circle);
console.log(another);

//spread operator
const other = {...circle};

console.log(other);

//builtin objects
//Math
console.log(Math.random());
console.log(Math.max(1,2,4,7))
console.log(Math.round(1.9))

//String
const msg = 'hi';
console.log(msg.length);
console.log(msg.includes('i'));
console.log(msg.replace('hi','hello'));
console.log(msg.toUpperCase())

const string = new String('hi');//object

