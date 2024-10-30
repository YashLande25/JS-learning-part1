// Small warning 
const person = {
    firstName : "Yash",
    age : 10,
    about : function(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`)
    }
}
// const myFunc = person.about();
// console.log(myFunc);                // dont do this mistake 
const myFunc = person.about.bind(person);
myFunc();




// Arrow function 
const person1 = {
    firstName : "Yash",
    age : 10,
    about : () => {
        console.log(`person name is ${this.firstName} and person age is ${this.age}`)
    }
}
person1.about(); // this will give undefined because in arrow func this keyword will take value from its surrounding 




// Short syntax 
const user = {
    firstName : "short",
    age : 3,
    about(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`)
    }
}
user.about();




// Create function to create multiple objects 
function createUser(firstName, lastName, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser('virat', 'kohli', 19, 'myaddress');
console.log(user1);
const y18 = user1.is18();
console.log(y18);
const u1about = user1.about();
console.log(u1about);




// Store methods in different objects
const userMethod = {
    about : function(){
        return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`
    },
    is18 : function(){
        return this.age >= 18;
    }
} 
function createUser1(firstName, lastName, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
const user10 = createUser1('rohit', 'sharma ', 9, 'myaddress');
console.log(user10);
console.log(user10.about());
console.log(user10.is18());




// Object.create 
const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
}
const obj2 = Object.create(obj1);        //{}
obj2.key3 = 'value3';                
// obj2.key2 = 'value20';
console.log(obj2.key2);

console.log(obj2.__proto__);