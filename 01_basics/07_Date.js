//typeof date is object

let myDate = new Date();
// console.log(myDate.toDateString());//Thu Jul 18 2024

// console.log(myDate.getDate());//18

// console.log(myDate.toLocaleDateString());//7/18/2024

// console.log(myDate.toTimeString());//09:15:07 GMT+0000 (Coordinated Universal Time)

console.log(myDate.getMonth()+1 );//6,7

// console.log(myDate.toJSON());//2024-07-18T09:15:07.377Z

console.log(myDate.getUTCDate());

console.log(`the time is ${myDate.getTime()}`);


let createdDate = new Date('2024,9,1');// in js month starts from 0
//can be declared in other ways 2024-00-12(mm-dd-yyyy)
// console.log(createdDate.toLocaleDateString());//9/11/2024
// console.log(createdDate.toLocaleString());

let myTimestamp = Date.now()//new Date can also be done

// console.log(myTimestamp);// will get the time in timestamp format

// console.log(createdDate.getTime());// to get the normal date format to timestamp(milli seconds)

// console.log(Math.floor(Date.now()/1000));// to convert milliseconds to seconds


myDate.toLocaleString('default',{

    weekday:"long",
   
})





