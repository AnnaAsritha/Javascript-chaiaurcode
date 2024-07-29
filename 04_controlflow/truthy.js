const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


//falsy values

//0, false,-0,bigInt 0n,"",null,undefined,NaN,


//truthy value

// true,"0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log('array');
}

const emptyObject = {}

if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// if the value first vaule is null or undefined then it will give other vlaue
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

//ternary operator
//condition ? true:false

const price = 230;

price>=300 ? console.log("graater than 300") : console.log('jetsrr');

// console.log(price)

