const userMethod = {
    about : function(){
        return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return " lalala "
    }
} 
function createUser1(firstName, lastName, age, address){
    const user = Object.create(userMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    user.sing = userMethod.sing;
    return user;
}
const user10 = createUser1('rohit', 'sharma ', 9, 'myaddress');
console.log(user10);
console.log(user10.about());
console.log(user10.is18());
console.log(user10.sing());




// What is prototype 
function hello(){
    console.log("hello world");
}
console.log(hello.name);

// you can add your own properties 
hello.myOwnProperty = "unique value ";
console.log(hello.myOwnProperty);

console.log(hello.prototype);        //function gives us free space i.e an object is called prototype 

if(hello.prototype){
    console.log("prototype present");
}else{
    console.log("not present");
}
// prototype is only presnt in function others such as array object doesnt have prototype

// we can add any thing in this prototype 
hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return "abcd efghi jklm nopqrst uvwx yz"
}
console.log(hello.prototype);
console.log(hello.prototype.sing());





// Use prototype 

// const userMethod = {
//     about : function(){
//         return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return "lalala "
//     }
// } 
function createUser2(firstName, lastName, age, address){
    const user = Object.create(createUser2.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    return user;
}
createUser2.prototype.about = function(){
    return `${this.firstName} ${this.lastName} age: ${this.age} address: ${this.address}`;
};
createUser2.prototype.is18 = function(){
    return this.age >= 18;
};
createUser2.prototype.sing = function(){
    return " lalala ";
};
const user = createUser2('rohit', 'sharma ', 9, 'myaddress');
console.log(user);
console.log(user.about());
console.log(user.is18());
console.log(user.sing());