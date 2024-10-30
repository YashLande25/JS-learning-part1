// Super keyword 

class Animal{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating `
    }
     isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
 
class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}
const Tommy = new Dog("tommy", 5, 45);
console.log(Tommy);
console.log(Tommy.run());




// Same method in base class 

class Animal1{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating `
    }
     isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
 
class Dog1 extends Animal1{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    eat(){
        return `Modified eat : ${this.name} is eating`
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}
const jerry = new Dog1("Jery", 5, 95);
console.log(jerry);
console.log(jerry.run());
console.log(jerry.eat());




// Getters and Setters 
class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(fullname){
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
const Person1 = new Person("abd" ,"viller", 39);
console.log(Person1.fullname);
Person1.fullname = "abd villers";
console.log(Person1);




// Static methods and properties 
// we can directly print from classes itself and cannot be accessed through objects 
class StatPerson{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    static classInfo(){
        return `this is a person class `
    }

    static desc = "static property";

    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(fullname){
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
    eat(){
        return `${this.firstname} is eating `
    }
     isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
const hii = new StatPerson("abd" ,"viller", 39);
console.log(hii.fullname);
hii.fullname = "abd villers";
console.log(hii);
console.log(StatPerson.classInfo());
console.log(StatPerson.desc);







// ------------------>   PART 1 COMPLETED   <------------------ //