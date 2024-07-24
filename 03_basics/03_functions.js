function myName(){
    console.log('A');
    console.log('N');
    console.log('N');
    console.log('A');
}

// myName();

function addToNum(num1,num2){
    
    console.log(num1 + num2);
}

// const num = addToNum(3,4);
// console.log(num);// result will be undefined because we are not returning anything from the function

function addToNum(num1,num2){
//    let number =  num1 + num2;
//    return number;

   return num1+num2// we can even return in this way
}

const num = addToNum(5,6);
// console.log(num);// this gives the result because we are returning the value from the function

function userlogin(userName ='Anna'){// passing the name directly in parameters will always have default value
    if(userName === undefined){
        console.log('please enter username');
        return;
    }
    return `the logged in user is ${userName}`;
}

// console.log(userlogin());

// ... is called as rest operator this helps when the values given is more that the parameter , it makes all the values into an array
function calculatePriceCart(...num1){
    return num1;
}
// console.log(calculatePriceCart(20,30,40));

function calculatePriceCarts(val1,val2,...num2){
    return num2;
}
// console.log(calculatePriceCarts(20,30,40,90,80));

/**************object function **************/

const user = {
    userName : "ipiu",
    price :700,
}

function handleObject(anyObject){
    // console.log(`the username is ${anyObject.userName} and the prices are ${anyObject.price}`);// this is how we will be able to fetch from object
}
// console.log(handleObject(user));// passing the object from where to fetch the valyes

 handleObject({
    userName: 'ier',
    price :100,
 })
//  console.log(handleObject(user));

/*********************array function****************************/

const mynewArray = [10,20,30];
function getArray(Array){
    return Array[1];

}

// console.log(getArray(mynewArray))
// console.log(getArray([50,60,60]));// can we assign the values while calling the function


// nested funciton
//In nested function we can access variable from parent but parent cannot access the child variable
function one(){
    const username = "anna"

    function two(){
        const website = "199"
        console.log(username);
    }

    // console.log(website);// tthis gives the error because we are accessing from child to parent

    two();

}

one();


// 
if(true){
    const username = 'anaa';
    if(username == 'anaa'){
        const name = 'iiiii';
        console.log(username);
    }
    // console.log(name);

}
// console.log(username);/


/*++++++++++++++++++++++++++++++++++++++++++++++++Intresting +++++++++++++++++++++++++++++++++++*/
console.log(addFive(5));// can be intialized before the function
function addFive(num1){
    return num1+5;
}

// console.log(addFive(5));// this function can even be intialized before the function

console.log(addition(4)); //cannot intialize before the function because the it is assigned to a varible
const addition= function(num2){
    return num2+9;
}

// console.log(addition(4));




