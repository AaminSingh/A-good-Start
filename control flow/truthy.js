
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all. 
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}        //cz they are in string 

// if (userEmail.length === 0) {                  // here the length property is called to check the value in array
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {         //by using this function it makes the array of the keys from which again we can again use the array poperty
    console.log("Object is empty");
}
//false == 0
// RESULT: true
// RESULT: true
//false == ''
//RESULT: true
// 0 == ''
//RESULT:true


// Nullish Coalescing Operator (??): null undefined

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10            
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100                                                           //
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
