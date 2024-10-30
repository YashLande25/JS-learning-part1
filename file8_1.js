// Iterables 

const name1 = "samsung";
for(let char of name1){
    console.log(char);
}                               //strings are iterable 

const items = ["item1", "item2", "item3"];
for(let item of items){
    console.log(item);
}                               // arrays are iterable

// const ob1 = {'key1': 'pair1', 'key2': 'pair2'};
// for(let ob of ob1){
//     console.log(ob);
// }                               // objects are not iterable




// Array like object 
// having lenght property

const firstName = "yash";
console.log(firstName.length);
console.log(firstName[1]);          