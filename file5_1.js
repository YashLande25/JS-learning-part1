// Object inside array --> very usefull in real world application 
const users = [
    {userId : 1, userName: "abc", gender: "female"},
    {userId : 2, userName: "xyz", gender: "male"},
    {userId : 3, userName: "fhg", gender: "male"},
]
console.log(users);

for(let user of users){
    // console.log(user);
    // console.log(user.userId);
    console.log(user.userName);
}



//Nested destructuring
// const users = [
//     {userId : 1, userName: "abc", gender: "male"},
//     {userId : 2, userName: "xyz", gender: "male"},
//     {userId : 3, userName: "fhg", gender: "male"},
// ]
// const [user1,user2,user3] = users;
// console.log(user1);
const [{userName : user1FirstName, userId}, ,{gender}] = users; //in case we want only name of fisrt  and gender of the user third
console.log(user1FirstName," : ",  gender);
console.log(userId);



// function
function singHbday(){
    console.log("happy birthday to you ");

}

singHbday();
singHbday();
singHbday(); //we can call a function again and again 

function sum(a, b, C){
    return a + b + C ;
}
let addedNum = sum(5,6,8);
console.log(addedNum);

