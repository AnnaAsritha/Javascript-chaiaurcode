
//interview ---- the global objects in browser are  window objects, this value is vi is {},, in browser iswindow

const user = {
    username : "hitesh",
    price : 78,

    welcomeMessage: function(){
        // console.log(`${this.username} is the user`);// this key work is used to get the current context  
        // console.log(this);
    }
}

// user.welcomeMessage();

// user.username = "anna";

// user.welcomeMessage();

// console.log(this);

// function havan(){
//     let username = "hitesh";
//     // console.log(this.username);// cannot use this in the function we will get undefined error
// }

// havan();

// const havan = function(){
//     let username = "hitesh";
//         console.log(this.username);// in this way also we will the undefined error
// }

// havan();
/************************************************* ARROW function**********************************
 syntax is (params) => {}*/
const havan = () => {
    let username = "hitesh";
        console.log(this.username);// in this way also we will the undefined error
}


const chai = (num1,num2) => {
    return num1-num2;
}
console.log(chai(9,7));


const chat = (num3,num4) => (num3+num4); // using curly bracket then return keyword should be given if parenthesis is give then no need of return keyword

console.log(chat(3,4));

//object in arrow function

const chate = () => ({username:"annna"}); // we fetch object in this way with arrow function

console.log(chate());