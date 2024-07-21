const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// To merge one array in another array use concat assign to anaother variable and pring that variable
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] // this is speread operator where you will get the values seperatly of an array

// console.log(all_new_heros);

const subarrays = [1,2,3,[4,5,6],7,[8,9,[0,12]]];

const real_array = subarrays.flat(Infinity);// this flat method is used to make the sub arrays into single array

// console.log(real_array);

console.log(Array.isArray("Asritha"));// to check if thegiven value is array// true

console.log(Array.isArray(['iu','oi']));// false

console.log(Array.from("hitesh"));//This converts the string into array [ 'h', 'i', 't', 'e', 's', 'h' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));// it will merge all the values to array


