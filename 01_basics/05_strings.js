const name = 'asritha';
const repoCount = 80;

// console.log(name + repoCount);

// console.log(`i am ${name} and my repocount is ${repoCount}`);

const gameName = new String('candycrush');//other way to declare the string
// console.log(gameName[0]);

// console.log(gameName.__proto__);// To get the prototype

// console.log(gameName.length);// To get the lenght

// console.log(gameName.toUpperCase());// to change to uppercase

// console.log(gameName.charAt(3)); // to find which charecter is in this index

// console.log(gameName.indexOf('h')); // to find the charecter index

const newGame =  gameName.slice(-8,2);// we can even take negatives in slice

console.log(newGame);

const anotherName = gameName.substring(0,5);

const newOnGame = '  candy   ';
console.log(newOnGame.trim());// this is used to trim spaces in variable
console.log(newOnGame.trimEnd());
console.log(newOnGame.trimStart());

const url = 'https://hitesh.com/hitesh%20choudary';
console.log(url.replace('%20' , '-'));

const strign = 'asrit-anna-0000';
console.log(strign.split('-'));// split is used to convert the string into array

