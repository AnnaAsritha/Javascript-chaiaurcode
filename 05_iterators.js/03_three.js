// for of loop
//It lets you loop over iterable data structures such as Arrays, Strings ,for of statement loops through the values of an iterable object.
const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const string = 'asritha'

for (const alpha of string) {
    console.log(alpha);
}


//maps
// maps remembers the insertion order of the array

const map = new Map();

map.set("IN","india");
map.set("USA", "United States America");
map.set("FR","France");

map.set("IN","India");// again it will enter india because maps gives only unique value a

// console.log(map);

for (const [key,value] of map) {
    console.log(key ,":-", value);
}

const myobj = {
    "game1": "checss",
    "game2":"carrom",
}

for (const key of myobj){
    console.log(key);
}