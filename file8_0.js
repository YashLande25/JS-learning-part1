//Sort method 
const numbers = [34,5,24,55,90];
numbers.sort((a,b)=> a-b)
console.log(numbers);

// price from low to high 
const userCart = [
    {userId : 1, userProd: "tv", price: 10000},
    {userId : 2, userProd: "smartphonr", price: 25000},
    {userId : 3, userProd: "mixer", price: 3000},
]
const lowtoHigh = userCart.slice(0).sort((a,b)=> a.price-b.price);
console.log(userCart);
console.log(lowtoHigh);




//Find method 
const myArray = ["hello", "dog", "cat", "phone"];
function strLength3(word){
    return word.length === 3;
}
const op = myArray.find(strLength3);
console.log(op);

//to find user by using its user id 
const users = [
    {userId : 1, userName: "virat"},
    {userId : 2, userName: "dhoni"},
    {userId : 3, userName: "rohit"},
    {userId : 4, userName: "gambhir"},
    {userId : 5, userName: "sachin"},
]
const findId = users.find((user)=> user.userId===3);
console.log(findId);




// Every method 
const everyN = [2,4,6,8,10];
const emethod = everyN.every((num)=> num%2 === 0);
console.log(emethod);

// check every product price is less than 30000
const userEVcart = [
    {userId : 1, userProd: "tv", price: 10000},
    {userId : 2, userProd: "smartphonr", price: 25000},
    {userId : 3, userProd: "mixer", price: 3000},
]
const lessPro = userEVcart.every((product) => product.price<=30000);
console.log(lessPro);




// Some method 
const someNum = [1,3,5,7,9,22];
const smethod = someNum.some((num)=> num%2 === 0);
console.log(smethod);

// check any product price is more than 50000
const userScart = [
    {userId : 1, userProd: "tv", price: 10000},
    {userId : 2, userProd: "smartphonr", price: 25000},
    {userId : 3, userProd: "mixer", price: 3000},
    {userId : 3, userProd: "mac", price: 25000},
]
const morePro = userScart.some((product) => product.price>=50000);
console.log(morePro);




// Fill method 
const myArr = new Array(10).fill(-1);
console.log(myArr);

// value, start, end 
const fillArr = [2,5,2,6,2,9,4];
fillArr.fill(0, 2, 5);
console.log(fillArr);




// Splice method 
// start, delete, insert 
const arrMd = ["item1", "item2", "item3", "item4"];

//delete 
// const deletedItem = arrMd.splice(1,1);
// console.log("deleted item is " , deletedItem);

// insert 
// arrMd.splice(1, 0, "inserted item");
// console.log(arrMd);

//insert and delete together
arrMd.splice(1, 3, "inserted item1", "inserted item2");
console.log(arrMd);