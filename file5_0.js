// Object 
// const person = {name:"YASH" ,age:21 };
const person = {
    name:"YASH" ,
    age:21,
    hobbies: ["gym", "gaming", "sleeping"] // we can also use array in object and array can treated similar to array i.e we can perform each things we have learned in array

}
console.log(person);

// how to access data from object 
console.log(person["name"]); //so here we can see name is written in string the reason in javascript object each key is in string by default.
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair in object 
// person.gender = "male";
// we can do it the other way 
person["gender"] = "male";
console.log(person);


// difference between dot and bracket notation 
const key = "email";
const persons = {
    name:"abcd" ,
    age:20,
    "persons hobbies": ["gym", "gaming", "sleeping"]
}
console.log(persons["persons hobbies"]);
persons[key] = "abcd12@gmail.com"; //value enter here will be assigned to email with the help of variable key
console.log(persons);


// how to iterate object 
const personss = {
    name:"xyz" ,
    age:29,
    "personss hobbies": ["gym", "gaming", "sleeping"]
}
// we can use for in 
// for(let x in personss){
//     console.log(personss[x]);
// }
for(let x in personss){
    // console.log(`${x} : ${personss[x]}`); we can do it the other way
    console.log(x ,":", personss[x]);
}



// Object.keys
console.log(typeof(Object.keys(person)));
const val =Array.isArray((Object.keys(person)));
console.log(val); // so here we can see that it is an array 

for(let y of Object.keys(person)){     //here we have used for of 
    console.log(y, ":" , person[y]);
}



// computed properties 
const key1 = "objvalue1";
const key2 = "objvalue2";

const values1 = "myvalue1";
const values2 = "myvalue2";

const obj = {
    [key1] : values1, // [key1] is called computed properties
    [key2] : values2,
}
console.log(obj);



// spread opeator 
const a1 = [1,2,3];
const b1 = [6,4,7];
const spreadArr = [...a1, ...b1, 98];
console.log(spreadArr);
const exampArr = [..."13134707"];
//const exampArr = [...13134707]; //this will give error string is compulsory 
console.log(exampArr);


// spread operator in object 
const obj1 = {
    k1 : "v1",
    k2 : "v2"
}
const obj2 = {
    k1 : "v1changed",
    k3 : "v3",
    k4 : "v4"
}

const spreadObj = {...obj1, ...obj2};
console.log(spreadObj);




// Object destructuring 
const band = {
    bandName : "Ajay Atul",
    bandSong : "sairat",
    year : 1999,
    famousSong : "xyz"
}
// let bandName = band.bandName;
// const bandSong = band.bandSong;
// console.log(bandName, bandSong);
// above one is normal method 

// const {bandName, bandSong} = band; 
// console.log(bandName, bandSong);
// if we want another name than bandName we can use the following 
const {bandName : var1, bandSong : var2 , ...restProper} = band; 
// console.log(bandName, bandSong); //this will give error as name is stored in var1 and var2
console.log(var1, var2);
console.log(restProper); 
