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