// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){  
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==  //checks its types

//  '==='  ---> it is used to check the datatypes as well

// const score = 200

// if (score > 100) {
//     let power = "fly"                   //scope of var is completely global so we don't need to use it
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  //IMPLICIT SCOPE: cannot be written in multiple lines or with the help of ',' well shouldn't be prectised

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  // it is to check the possibility of true outcomes
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // here it is used for making the outcome  with options
    console.log("User logged in");
}