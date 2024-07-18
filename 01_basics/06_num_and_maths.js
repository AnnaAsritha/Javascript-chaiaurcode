const num = 400;
// console.log(num);
const anaothernum = new Number(700);//another way to create the number
// console.log(anaothernum);


// console.log(anaothernum.toString());// to convert the number to string and after conversion we can use string functions

// console.log(anaothernum.toFixed(2))//gives the no of digit after the number. Must be in the range 0 - 20, inclusive.

const othernumber = 9834.67;
// console.log(othernumber.toPrecision(4));// precision is used to round off for the number provided but the value will be string format

const zero = 1000000;
// console.log(zero.toLocaleString());//changes the number to comma serperated value by default it is british format 
// console.log(zero.toLocaleString('en-IN')); // to get the number in indian format


/************************************** Maths *****************************/

// console.log(Math);

// console.log(Math.PI);// gives the pi values

// console.log(Math.ceil(9.8));// value will be rounded off to upper number

// console.log(Math.floor(9.8)); // value will be rounded to lower numer

// console.log(Math.round(4.6)); // it will round off the values

// console.log(Math.cosh(3.14)); //it will give the cos value

// // const arr = (9,8,65,8);

// console.log(Math.min(9,8,65,8));

// console.log(Math.max(9,8,65,8));
console.log(Math,random());//random method gives the randon number then you can perform actions like addtion ,multiplication random method gives the values between 1 to 9 like 0.1,0.9
console.log((Math.random()*10) +1); // to avoid the value 0 we are adding  with 1
console.log(Math.floor(Math.random()*10)+1); // It will round off to the lower values to get the single value

const min =  10;
const max =  30;

console.log(Math.floor(Math.random() * (max-min +1)+1) + min); // here this formula define we are multiplying with min max values and if we want it in range above 10 then we are adding he min value









