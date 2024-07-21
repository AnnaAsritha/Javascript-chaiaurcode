// onbject created as new object. is called single ton rest other objectare non single ton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const someLogged = {
    email : "email@123.com",
    fullName : {
        username : {
            firstname : "Asma",
            lastname : "ji",
        }
    }
}

// console.log(someLogged.fullName.username.lastname);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"t",4:"u"};

// const obj3 = {obj1,obj2};
/* giving {} at first of object is that object is target rest other or  else the whole object will be pushed to obj1*/
// const obj3 = Object.assign({}.obj1,obj2); // to combine two array 

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const arrObj = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    },
    {
        id: 3,
        name: "c"
    }

];

//To fetch values of object when array and object are combined
// console.log(arrObj[2].name);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// gives the keys of an object
// console.log(Object.values(tinderUser)); // gives the values of an object
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty("isLoggedIn"));// to if this property exist in object
const course = {
    courseName : "js",
    courseId : 1,
    courseInstructor : "hitesh",
}

const {courseInstructor: instructor} = course;// this is called as destructuring // we can even fetch by giving the other name as instructor 

// console.log(courseInstructor);
// console.log(instructor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]