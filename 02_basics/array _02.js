const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //  array can take any element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // to add two different arrays  
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // returns all the arrays in new in the one array only
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // makes array from the name
console.log(Array.from({name: "hitesh"})) // interesting case: we need to specify(to whether make of keys or values) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));