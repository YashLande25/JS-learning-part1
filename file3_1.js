// for loop exMPLE
let total = 0;
let num = 100;

for(let i=0; i<= num; i++){
    total = total + i;
}
console.log(total);

// break 
for(let x=0; x<=10; x++){
    if(x==4){
        break;
    }
    console.log(x);
}
console.log("heloooooo");

// continue 
for(let y=0; y<=10; y++){
    if(y==4){
        continue;
    }
    console.log(y);
}

// do while loop 
let m = 10;
do{
    console.log(m);
    m++;
}while(m<=9);
console.log(m);


// Arrays
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// Arrays numbers 
let numbers = [1,2,3];
console.log(numbers);
// arrays can store mixed data types 
let mixed = ["apple", 1,2,3, null, undefined];
console.log(mixed);
// to change index in arrays i.e in fruits array to change from apple to banana 
// let fruits = ["apple", "mango", "grapes"]; 
fruits[0] = "banana";
console.log(fruits);
console.log(typeof fruits);
// array is an object 
console.log(typeof fruits);
// to check array 
console.log(Array.isArray(fruits));

// array push 
// to add an item in an array push method is used
let bikes = ["ninja", "classic", "vespa"];
console.log(bikes); 

bikes.push("activa");
console.log(bikes);

//array pop is used to remove last item from the array and it not only removes but also returns it
bikes.pop();
console.log(bikes); //activa has been removed 
let removedBikes = bikes.pop();
console.log("the bike that is removed from the showroom is ", removedBikes); //here we can see that pop returns the removed item and we can store it anywhere

// array unshift is used to add item at the start of the array 
bikes.unshift("bullet350");
console.log(bikes); 

// array shift 
// shift removes first Element from array and also returns it 
let removedfruits = fruits.shift();
console.log(fruits);
console.log("removed fruits from baskets are : ", removedfruits);

// push pop is faster than shift unshift 
// because push and pop adds and removes elemnt from last and in shift unshift it does it at starting place this requires more momory to shift every element and then add them 


