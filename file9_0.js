// Sets
// it is iterable 
// stores data 
// sets also have its own methods 
// no index based access
// order is not guaranteed 
// unique items only no duplicates allowed 

const numbers = new Set([1,2,3]);
console.log(numbers);

const setNumber = new Set();
setNumber.add(1);
setNumber.add(2);
setNumber.add(5);
setNumber.add(4);
setNumber.add(3);
setNumber.add(['items1', 'items2']);

if(setNumber.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

for(let number of setNumber){
    console.log(number); 
}

console.log(setNumber);

const myArr = [1,2,3,9,6,9,5,6,5,6];
const uniqueElement = new Set(myArr);
let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length);




// Maps 
const person = new Map();
person.set('firstName','yash');
person.set('roll',25);
person.set(1,'one');
console.log(person);
console.log(person.get(1));
console.log(person.keys());

const xyz = new Map([['firstName','yash'],['roll',25],[1,'one']])
console.log(xyz);

const person1 = {id : 1 , firstName : "thalla"};
const extraInfo = new Map();
extraInfo.set(person1, {age : 10, gender : "male" });
console.log(person1.id);
console.log(extraInfo.get(person1).age);



// Clone using Object.assign 
const obj = {k1 : "value1" , k2 : "value2", k3 :"value3"};
// const obj2 = {...obj};
const obj2 = Object.assign({},obj);
obj.k4 = "value4";
console.log(obj);
console.log(obj2);




// Optional chaining 
const user = {
    firstName : "bambani",
    // address : {houseNo : '900'}
}
console.log(user);
console.log(user?.address?.houseNo);