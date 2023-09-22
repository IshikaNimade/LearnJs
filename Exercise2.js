//Address object
const address ={
    street:'abc',
    city:'indore',
    zipCode:452009
};

function showAddress(address){
    for(let key in address){
            console.log(key,":",address[key])
    }
}

showAddress(address)

//factory function
function showAddressFactory(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}

const factory = new showAddressFactory('a','b',123);
console.log(factory);

//constructor function
function ConstructorShowAddress(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}

const constructor = new ConstructorShowAddress('a','b',123);
console.log(constructor);

//Blog post object
let post={
    title:'a',
    body:'b',
    author:'c',
    views:10,
    comments:[
        {author:'a',body:'b'},
        {author:'c',body:'d'},
    ],
    isLive:true
};

console.log(post);

//this is constructor for post 
function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}

const post2 =new Post('a','b','c');
console.log(post2);
