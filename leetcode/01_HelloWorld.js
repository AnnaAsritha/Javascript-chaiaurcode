//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// function helloworld(){
//     console.log('HEllo world');
// }


//  function createHelloWorld(){
//     return helloworld;

// }

// const fun = createHelloWorld();

// fun();


//leet code 

/**
 * @return {Function}
 */
function createHelloWorld() {
    return function() { return "Hello World" }
  }
  
  
   const f = createHelloWorld();
    console.log( f()); // "Hello World"
  