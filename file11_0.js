// New keyword 

// so createUser1 is called constructor function 
function createUser1(firstName, lastName, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
}
createUser1.prototype.about = function(){
    return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
};
createUser1.prototype.is18 = function(){
    return this.age >= 18;
};
createUser1.prototype.sing = function(){
    return " lalala ";
};
const user1 = new createUser1('rohit', 'sharma ', 9, 'myaddress');
const user2 = new createUser1('virat', 'kohli ', 9, 'myaddress');
const user3 = new createUser1('fnvfs', 'vsnwa ', 9, 'myaddress');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

// has own property
for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}




// More about prototype
let num = [1,23,4];
console.log(Array.prototype);
console.log(Object.getPrototypeOf(num));   // its an array 

// in function  
function hello(){
    console.log("hello");
}
console.log(hello.prototype);           // object
hello.prototype = [];                   // object to array 
console.log(hello.prototype);           // array
hello.prototype.push('1');
console.log(hello.prototype); 




// Class keyword 

class createUser{
    constructor (firstName, lastName, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return " lalala ";
    }
}

const user12 = new createUser('rohit', 'sharma ', 99, 'myaddress');
const user23 = new createUser('virat', 'kohli ', 19, 'myaddress');
const user33 = new createUser('fnvfs', 'vsnwa ', 89, 'myaddress');
console.log(user12.is18());




// Class practice 
class Animal{
    constructor (firstName, age, want){
        this.firstName = firstName;
        this.age = age;
        this.want = want;
    }
    ate(){
        return `${this.firstName} ate ${this.want}`;
    }
}
const animal1 = new Animal('Lion', 20, 'deer');
console.log(animal1.ate());

// Sub class 
class Dog extends Animal{

}
const animal2 = new Animal('Tommy', 5, 'pedigree');
console.log(animal2.ate());
