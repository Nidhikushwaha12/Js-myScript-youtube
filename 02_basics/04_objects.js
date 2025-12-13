//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "nidhikush2006@gmail.com",
    fullname: {
        userfullname: {
           firstName: "Nidhi",
           lastName: "kushwaha"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = {obj1 , obj2}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)