//primitive(call by value)

//7 types: strings, number, boolean, null, undefined, symbol, BigInt 

const score=100
const scoreValue=100.3

const isloggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


const bigNumber = 345678573345n

//Reference (non primitive)

//Array, objects, functions

const heros=["shktiman","superman", "doga"];
let myObj={
    name:"nidhi",
    age:19,
}
 const myFunction = function(){
    console.log("Hello World");
 }
console.log(typeof heros)

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive) #it gives always a copy that's why value is changable ,
// heap(non-primitive) #it gives a reference not a copy and value can't be change cuz it's not copy .it's a reference

let youtubeName ="hiteshchoudhary"

let anotherName = youtubeName
anotherName = "chaiorcode"

console.log(anotherName)
console.log(youtubeName)

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email )
