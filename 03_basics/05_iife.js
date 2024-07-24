// iife == immediatly invoked function Expression syntax == ()()

/* This iffe is used to to avoid the problem of global scope pollution we use this iife */

(function chai(){
    console.log('DB conected');
})();

//()()

(() => {
    console.log("DB Connected toe");
})();

// to pass the parameter in arrow function

((name)=>{
    console.log(name);
})("annna")