//BASIC COMPARISONS

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); ---> true (CONVERTS IT TO NUMBER AND THEN RETURNS TRUE)
// console.log("02" > 1);

console.log(null > 0); //false (not converted)
console.log(null == 0); // false (not converted......... == is equality operator) 
console.log(null >= 0); // true (here the null is converted to zero first and then it is compared)
// equality and comparison operators work differently 

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 
 
console.log("2" === 2); // strict check (it also checks the datatype)
 
/*The reason is that an equality check == and comparisons >< >= <= woek diferently.
Comparisons convert null to a number treating it as 0.*/

//clean code is more expected
//Primitive
//Types :String,Number,Boolean,null,undefined,Symbol,BigInt

// we don't define language in js
//JS is statically typed

//coont score = false

//Reference (Non Primitive )

//Array,Objects,Functions

/*const score = 200
const scoreValue = 200.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('345')
const anotherId = Symbol('345')
console.log(id === anotherId);
const bigNumber  = 453859438943749394223n */

//ARRAYS,OBJECTS,FUNCTIONS

/*const heros = ["shaktiman","naagraj","Chote bheem"]
let myObj = {
    name:"arya",
    age:17
}

const myFunction = function(){
console.log("hello world!");

}
console.log(typeof myFunction);*/

//============================

//Stack(Primitive), Heap(Non-primitive)


 /*let myYoutubeName = "Arya.in"

 let anothername = myYoutubeName

 anothername = "armanai"
 console.log(myYoutubeName);
 console.log(anothername);*/

//doesn't gives the orginal value it gives the copy of it to make changes

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email= "ash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);