// Methods
// function inside object

const person = {
    firstName : "Yash",
    age : 10,
    about : function(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`)
    }
}
person.about();

const personInfo = function() {
    console.log(`person name is ${this.firstName} and person's age is ${this.age} `)
}
const person1 = {
    firstName : "Yash",
    age : 20,
    about : personInfo
}
const person2 = {
    firstName : "Rohit",
    age : 35,
    about : personInfo
}
const person3 = {
    firstName : "Virat",
    age : 30,
    about : personInfo
}
person1.about();
person2.about();
person3.about();




// This keyword 
function myFunc(){
    console.log(this)
}
myFunc();




// Call 
const user1 = {
    firstName : "hp",
    age : "40",
    about : function(){
        console.log(`person name is ${this.firstName} and person's age is ${this.age} `);
    }
}
const user2 = {
    firstName : "dell",
    age : "29",
}
user1.about.call(user1);
user1.about.call(user2);


// // Apply 
// about.apply(user1,["guitar", "bach"]);
// // Bind 
// const func = about.bind(user2, "guitar" , "bach");
// func();