// for loop 

num = 10
for (let i = 0; i <= num; i++) {
    const element = i;
    if(element == 5){
        // console.log("best no",element);
    }
    // console.log(element);


}

// console.log(element);

//tables function
for (let i = 1; i < 10; i++) {
    // console.log(`out side loop ${i}`);
    for(let j=0;j<=10;j++){
        // console.log(`inside loop ${j}`);
        // console.log(i + '*' +j+ '=' +i*j);
    }
    
}

myArray = ['anna','tax','lam'];
for (let index = 0; index < myArray.length; index++) {
//    console.log( myArray[index]);
    
}

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('detected 5');
//         break;
//     }
//     console.log(`valeu of i is ${index}`); 
// }

// console.log('pout');

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log('detected 5');
        continue;
    }
    console.log(`valeu of i is ${index}`); 
}
