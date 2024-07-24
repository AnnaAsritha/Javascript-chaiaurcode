// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);// this power will give the error because when let or const is declared then it will accessble only to its scope

// short hand notation
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");// it is very unreadable code, not a best practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // both condition should be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // anyonce condition can be true    
    console.log("User logged in"); 
}