// for of loop in array 
const fruits = ["apple", "mango", "banana"];
for(let fruit of fruits){
    console.log(fruit);
}


// for in loop in array 
const basket = ["kela", "seb", "sitafal"];
for(let index in basket){
    // console.log(index);
    console.log(basket[index]);

}






// array destructuring 
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is : ", myvar1);
// console.log("value of myvar2 is : ", myvar2);
// so to do the above one there is a short cut 
// let [myvar1, myvar2] = myArray;
let [myvar1, myvar2, ...myNewArray] = myArray;

console.log("value of myvar1 is : ", myvar1);
console.log("value of myvar2 is : ", myvar2);
console.log(myNewArray);
// if we 3 items in array and we have to assign 3rd item by skipping 2nd item
// const myArray = ["value1", "value2","value3"];
// let [myvar1, ,myvar2] = myArray;
// console.log("value of myvar1 is : ", myvar1);
// console.log("value of myvar2 is : ", myvar2);