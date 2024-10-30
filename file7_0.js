// parameter destructuring 
// used in object and react
const person = {
    name1 : "yash",
    gender : "male"
}
// function printDetails(obj){
//     console.log(obj.name1);
//     console.log(obj.gender);
// }
function printDetails({name1, gender}){
    console.log(name1);
    console.log(gender);
}
printDetails(person);




// CALLBACK function
function proj(a){
    console.log(a);
    console.log("how are you");
}
// proj([1,2,3,4]) ; it can be array 
// proj("rgnenn"); it can be string
// proj({namea : "abcd"}); it can be object
 // the value of a depends on the function we called 

function myFunc2 (name){
    console.log("i m inside function 2");
    console.log(`my name is ${name}`);
}
function myFunc(callback){
    console.log("hello there");
    callback("Virat Kohli");
}
myFunc((myFunc2));
//this is called callback function 





// function returning function 
function retFunc(){
    function helo(){
        return "im in function returning function "
    }
    return helo;
}
const tp = retFunc();
console.log(tp());
// if function has callback function or reurns function or both it is called High order function  





// IMPORTANT ARRAY METHODS 
// 1) for each 
// 2) map   
// 3) filter 
// 4) reduce

// 1) for each 
const numbers = [0,2,8,4,5];
function multi2(num, index){
    console.log("index is ", index);
    console.log(`${num}*2 = ${num*2}`);
}
// multi2(numbers[0],0);

// for(let i = 0; i < numbers.length; i++){
//     multi2(numbers[i],i);
// }

numbers.forEach(multi2);


const rollNo = [24,56,3,35,6,10];
rollNo.forEach(function(roll,student){
    console.log(`roll no is ${roll} and student index is ${student}`);
})


const users = [
    {userId : 1, userName: "abc", gender: "female"},
    {userId : 2, userName: "xyz", gender: "male"},
    {userId : 3, userName: "fhg", gender: "male"},
]
users.forEach((user)=>{
    console.log(user.userName);
})




// 2) map   
const sqNum = [2,5,3,4,6];
// const square = function(sqNum){
//     return sqNum * sqNum;
// }
// const sqAns = (sqNum.map(square)); //map function stores values in form of array. it imp to return value in function than to print.
// console.log(sqAns);

const sqAns = sqNum.map(function(sqNum){
    return sqNum * sqNum;
})
console.log(sqAns);




// 3) filter 
const filNum = [2,1,4,5,6,3];
const even = function(filnumber){
    return filnumber%2 === 0;
}
console.log(filNum.filter(even));





// 4) reduce
const reNum = [1,4,2,5,6,9]
const add = reNum.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
})
console.log(add);


const userCart = [
    {userId : 1, userProd: "tv", price: 10000},
    {userId : 2, userProd: "smartphonr", price: 25000},
    {userId : 3, userProd: "mixer", price: 3000},
]
const totalAmount = userCart.reduce((totalPrice, currentProduct)=> {
    return totalPrice + currentProduct.price
}, 0);
console.log(totalAmount);