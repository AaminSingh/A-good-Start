const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  // It will give the value but its type will now bw a string so we have acess to other properties as well

// console.log(balance.toFixed(1)); // converts a number to a string


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //gives precise value upto the digit asked......

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //absolute value
// console.log(Math.round(4.6));  //taking raiund off
// console.log(Math.ceil(4.2));  // takes upper value even its slight more than that
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   //this fxn always gives value  between 0 and 1
console.log((Math.random()*10) + 1);   //1 is to avoid zero case
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)