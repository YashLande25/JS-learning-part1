// trim
let name1 = "    yash      ";
console.log(name1);
console.log(name1.length);

name1 = name1.trim();
console.log(name1);
console.log(name1.length);

// uppercase
let name2 = "harSHit";
name2 = name2.toUpperCase();
console.log(name2);

// lowercase
name2 = name2.toLowerCase();
console.log(name2);

// slice
let newString = name2.slice(0,5);
console.log(newString);

// typeof
let age = 18;
console.log(typeof age);

// convert nmber to string 
age = 18 + "";
console.log(typeof age);

// convert string to number 
age = +"18";
console.log(typeof age);

// string concatenation
let string1 = "yash";
let string2 = "lande";
let newString12 = string1 + " " + string2;
console.log(newString12);

// converting string to number and adding
let num1 = "10";
let num2 = "20"; 
let additionn = +num1 + +num2;
console.log(additionn);

// template concatenation
// let name1 = "yash";
// let age = 18;
let aboutme = "My name is "+ name1 + " and my age is "+age;
console.log(aboutme);

aboutme = `my name ${name1} and my age is ${age}`;
console.log(aboutme);


// ==
// ===
// !=
// !==

// if else 
let num = 12;

if(num%2 === 0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 
let firstName = ""; //0,null,undefinrf

if (firstName){
    console.log(firstName);
}else{
    console.log("empty");
}

// truthy values
let firsstName = "abcd";

if (firsstName){
    console.log(firsstName);
}else{
    console.log("empty");
}


//ternary operator
age = 10;
drink = age>=5 ? "coffee" : "milk";
console.log(drink);

// AND op
let nameAnd = "yash";
let ageAnd = 19;

if(nameAnd[0] === "y" && ageAnd >= 19){
    console.log("AND operator ");
}else{
    console.log("not an AND");
}

//OR op
let nameOR = "yash";
let ageOR = 8;

if(nameOR[0] === "y" || ageOR > 18){
    console.log("OR operator");
}else{
    console.log("not an OR");
}