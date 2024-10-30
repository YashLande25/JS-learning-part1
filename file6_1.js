// function inside function 
// we can use any funstions 
const app = () => {
    console.log("inside app")
}
app();


function myApp(){
    const myFunc = () => {
        console.log("running myFunc from myApp");
    }
    const addTwo =(a, b)=> {
        return a+b;
    }
    const mul = (c,d) => c*d ;

    myFunc();
    console.log(addTwo(3,4));
    console.log(mul(2,5));
}
myApp();





// LEXICAL SCOPE 
const myVar = "value1";

function myApplic(){
    // const myVar = "value1";

    function myFunc1(){
        // const myVar = "value69"
        console.log("my application", myVar);
    }

    console.log(myVar);
    myFunc1();
}
myApplic();

//2
const myVariable = "value2";

function myApplication(){
    // const myVariable = "value2";

    function myFunc2(){
        // const myVariable = "value100"
        function myFunc3(){
            console.log("my application", myVariable);
        }
        myFunc3();
    }

    console.log(myVariable);
    myFunc2();
}
myApplication();





// Block scope v/s Function scope 
// --> let and const are block scope 
// --> var is function scope 

//BLock 1
{
    let firstName = ("virat");
    console.log(firstName);
}
// console.log(firstName); //This will give error as let and const are block scope. We can only use the above variable in above block. 

//Block 2
{
    let firstName = ("rohit");
    console.log(firstName);
}
// as we can see here every block created are different they have there own variables 

const firstName = ("sachin");
console.log(firstName);   // this comes under Global Block 

// Block 3 
{
    var mood = ("happy");
}
console.log(mood); // in case of var we can use the variable outside the block

// In case of if 
if(true){
    var mood1 = ("sad");
    console.log(mood1);    
}
console.log(mood1);    

// it can be also used in function in similar manner 





//Default parameters
// function addition(a,b){
//     if(typeof b === "undefined"){
//         b = ;
//     }
//     return a + b ;
// }

// using default parameter

function addition(a,b = 0){
    return a + b ;
}

console.log(addition(4));




// REST parameters 
function rest(a, b, ...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
rest(1,3,5,3,5,6,3,2);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number ; 
    } 
    return total;
}
console.log(addAll(1,2,3,4));