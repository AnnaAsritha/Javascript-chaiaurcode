//for in loop

const myObj = {
    "js":"javascript",
    "cpp":"c++",
    "Rb":"ruby",
    "swift":"swift"
}

for (const key in myObj) {
    // console.log(`${key} shortcut key is ${myObj[key]}` );
}

const programming = ["js", "rb", "py", "java", "cpp"] 

for (const key in programming) {
    // console.log(key);// for array also we have key which is 0,1,2,3,4
    //console.log(programming[key]);
}


const map = new Map();

map.set("IN","india");
map.set("USA", "United States America");
map.set("FR","France");

map.set("IN","India");


for (const key in map) {
   console.log(key)// map is not iteratable so for in loop cannot be used in map
}
