// primitive 

//7 types :string,Number,Boolean,null , undefined, bigInt

const string = "asrith";
const number =  90;
const point = 90.3 //in js we dont have decimal
const bool = true
const nullies = null;
let definite;

const sym = Symbol('123');
const add = Symbol('123');

// console.log(sym === add);

const BigNumber = 39874879873287n;


//Reference (Non Primitive)
//Array , object , function

Array = ['shal','ioii','lllll'];

myObj = {
    name: 'fdiuew',
    age: 22
}

const myfunction = function(){
    console.log('888');
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

/*what is the difference between callbyvalue and callbyreference 
it is just the difference how the memory is stored and how the memory is being accessd

and for primitive datatype we will not get the original memory but the copied memory 
but for reference datatype we will get the original memory


*/

// stack (primitive datatype --> get the copied value)  Heap (reference datatype -- gets the original value);

let primitive = "you";
 let copied = primitive;
 copied = 'pppp';
 console.log(copied);
 console.log(primitive);

 // In object what ever the changes are done original values will only be changes

 let user = {
    name : "user1",
    email : 'user1@gmail.com',
 }
 let user2 = user
 user2.email = 'user2@gmail.com';

console.log(user);
console.log(user2);