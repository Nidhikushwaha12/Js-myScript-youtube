//Singleton
// Object.create

// object.literals

const mySym = Symbol("key1")

const myUser={
    name:"nidhi",
    "full name":"Nidhi Kushwaha",
    [mySym] : "myKey1",
    age:18,
    location:"jaipur",
    email:"nidhikush@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]   
}


console.log(myUser.email);
console.log(myUser["full name"]);
console.log(myUser[mySym]);

myUser.email = "nidhi@google.com" 
// Object.freeze(myUser)
myUser.email = "nidhi@chatgpt.com" 
console.log(myUser);

myUser.greeting = function(){
    console.log("hello Js user");

}
myUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);

}
console.log(myUser.greeting());
console.log(myUser.greetingTwo());

