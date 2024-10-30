// let winningNumber = 9;
// let userGuess = +prompt("guess a number: ");

// if(userGuess === winningNumber){
//     console.log("You guessed it right.");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!");
//     }else{
//         console.log("too high !!");
//     }
// }


// elseif
let temp = 39;

if(temp < 0){
    console.log("too cold outside");
}else if(temp < 25){
    console.log("weather is normal");
}else if(temp < 35){
    console.log("go swim");
}else if(temp < 45){
    console.log("turn on AC");
}else{
    console.log("too hot");
}
 

// switch statement
let day = 2;

switch(day){
    case 0 :
        console.log("Monday");
        break;

    case 1 :
        console.log("Tues");
        break;

    case 2 :
        console.log("Wednesday");
        break;

    case 3 :
        console.log("Thursday");
        break;

    case 4 :
        console.log("Friday");
        break;

    case 5 :
        console.log("Saturday");
        break;
    
    case 6 :
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day")
}

// while loop
let i = 0;

while(i<=9){
    console.log(i);
    i++;
}

let m = 10;
let total = 0;
let n = 0;

while(n<= 10){
    total = total + n;
    n++
}
console.log(total);

// without while loop but optimized
let num = 100;
let t = (num*(num+1))/2;
console.log(t);

// for loop
for(let y=0; y<=9; y++){
    console.log(y);
}

// console.log(y); this will not be printed outside the loop
// this can be printed only if variable is  declared outside the loop or using var in loop 



