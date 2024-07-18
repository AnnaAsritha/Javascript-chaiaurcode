/***********************************Arrays********************************/

myArray = [0,1,3,5,5];

strarr = ["shaki","man","wpman"];

newarr = new Array('irewuo',3,9);

// console.log(myArray[0]);

/***********************************Arrays Methods********************************/

// myArray.push(3)// to add the element in array
// myArray.pop(); // to remove the value from array by defualt it will remove lastone else the ,mentions value

// myArray.unshift(9); // this will add the at starting of the array this will cause the memory 

// myArray.shift(); // it will remove the first value

// console.log(myArray.indexOf(3)); // it gives the index of the value 3 in array

// console.log(myArray.includes(9));

const otherArr = myArray.join();//join the vlaues of array in comma seperated
// console.log(otherArr);

console.log("A" , myArray);

/*The slice() method can be used to create a copy of an array or return a portion of an array. 
It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
he splice() method will change the contents of the original array. 
The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
 */
const myn1 = myArray.splice(1,3); 
console.log("B",myArray);
console.log(myn1);

// const myn2 = myArray.slice(1,3);
// console.log("c",myArray);
// console.log(myn2);



