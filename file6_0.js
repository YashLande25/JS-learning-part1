// function to find number is even is not  
function evenn(x){
    return x % 2 === 0 ;
}
console.log (evenn(4));


// function which take input as string and returns first character of the string 
function stringFirst(stringInput){
    return stringInput[0];
}
console.log(stringFirst("yash"));


// function to find target number in array 
// input will be array , target (number) 
// output should be index of target if target is prsent 
function targetValue(array, target){
    for(let i=0; i<=array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
} 
const myArray = [1,2,3,4,9];
const output = targetValue(myArray, 10);
console.log(output);






// FUNCTION EXPRESSION 
// function yourName(){
//     console.log("yash");
// }
// yourName();
// above one is function declaration 
//The function expression will be :
const yourName = function(){
    console.log("yash");
}
yourName();

const sumThree = function(num1,num2,num3){
    return num1+num2+num3;
}
console.log(sumThree(3,2,4));

// similar for other examples 






// Arrow functions 
// function congrats(){
//     console.log("Congratulations to you ");
// }
//above one is function declaration 
//The Arrow function will be :
const congrats = () => {
    console.log("Congratulations to you ");
}
congrats();

const sumThreeNum = (nums1,nums2,nums3) => {
    return nums1+nums2+nums3;
}
console.log(sumThreeNum(12,3,0));

// const evenNum = (p) => {
//     return p % 2 === 0 ;
// }
// we can also code arrow function in other way 
const evenNum = p =>  p % 2 === 0 ;

console.log (evenNum(8));
// similarly we can do this for other examples 
// we can only use one function either functions declaration, functions Expression or Arrow function    





// HOISTING 
hello(); // as we can see here we have called function first and then declared it.
//This will only work in case of function declaration and not for othes. 
function hello(){
    console.log("Hello World ");
}
// const hello = function(){
//     console.log("Hello World ");
// } this will give error 
// This is called Hoitsing

// console.log (hello);
// var hello = "helo wrld";
// let hello = "helo wrld";
// const hello = "helo wrld";
// console.log (hello); we will study this later 
