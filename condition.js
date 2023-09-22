// conditional - if...else / switch case

// if else
let hours = 7;

if(hours >= 6 && hours < 12){
    console.log("Good Morning!");
}
else if(hours >= 12 && hours < 18){
    console.log("Good Afternoon!");

}
else{
    console.log("Good Evening!");
}


//switch case
let role = 'guest';

switch(role){
    case 'guest':
        console.log("guest user");
        break;
    
    case 'moderator':
        console.log("moderator user");
        break;
    
    default:
        console.log("unknown user");
}