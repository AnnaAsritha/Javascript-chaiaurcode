/* obbject created with constructor is singleton
and any object with literalles is not singleton(object literalers) and instance can be created*/

// singleton
// Object.create();


//object literalls
const mysym = Symbol['mykley'];


const jsUser = {
    name : "Asritha",
    "fullName" : "Anna Asritha",
    [mysym]: "mykey", // to get the symbol with out chnaging it , if the array is not given the value is converted to string
    age : 18,
    location :'bengaluru',
    email:"hotesh@gmail.com",
    logged:"false",
    lastLoginDays : ['monday','sat'],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"])//when the key value os given in quotes the we have to use it in double quotes
// console.log(jsUser.mysym); 
// console.log(jsUser[mysym]); // to fetch the symbol with out chnaging the data type

jsUser.email= 'hitesh@gmail.com' ;
// Object.freeze(jsUser); // To freeze the object and you cannot the values    
jsUser.email = 'ghitesh@chatgpt.com';

// console.log(jsUser);

jsUser.greeting = function(){
    console.log('greetings');
}
jsUser.greetingTwo= function(){
    console.log(`hello js user ${this.name}`);
}
// console.log(jsUser.greeting); // this is the wrong way

// console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());