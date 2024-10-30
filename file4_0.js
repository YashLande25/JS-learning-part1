let array1 = ["item1", " item2"];
// let array2 = ["item1", " item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// new way i.e spread operator
let array2 = [...array1];
array1.push("item3");

array2 = array1.slice(0).concat(["item3","item4"]);
console.log(array1===array2);
console.log(array1);
console.log(array2);

// concat with spread operator
let newArray = ["item90", "item80"];
array2 = [...array1, ...newArray];
console.log(array2);



// for loop in array 
let fruits = ["apple", "mango", "banana", "grapes"];
for(let i=0; i < fruits.length; i++ ){
    // console.log(fruits[i]);
    console.log(fruits[i].toUpperCase());
}

let bikes2 = [];
let bikes = ["ninja", "classic", "vespa"];
for(let i=0; i < bikes.length; i++ ){
    // console.log(bikes[i]);
    bikes2.push(bikes[i].toUpperCase());
}
console.log(bikes2);



// use const for creating array 
const basket = ["kela", "seb", "sitafal"];
// basket = ["mosambi", "peru"]; here we changing array which is a constant i.e this willtry to change array s address
basket.push("tarbuj"); // address is not changed 
console.log(basket);
// 90 perc developer use const to create an array



// while loop in array 
const cars = ["innova", "fortuner", "rapid", "vista"];
const cars2 = [];
let j = 0;
while(j<cars.length){
    cars2.push(cars[j].toUpperCase());
    j++;
}
console.log(cars2);



