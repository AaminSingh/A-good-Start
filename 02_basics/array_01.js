// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //to push some values
// myArr.push(7)
// myArr.pop() // tp takeout some values

// myArr.unshift(9)  // it start in the starting
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // adds all the element of an array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // here the potion is shown except the last last limit being taken

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //the portion all is taken out and the rest are shown
console.log("C ", myArr);
console.log(myn2);