const name = "nidhi"

const repoCount = 50 

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('nidhi-lh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)   
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const anotherStringOne = "  nifhi  "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "https://hitessd.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('hitessd'))


console.log(gameName.split("-"))