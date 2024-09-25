// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());  //here it includes the date  alongwith the day
// console.log(myDate.toLocaleString());  // here it includes the time alongwith the date
// console.log(typeof myDate);  // it shows that type of date is object 

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); //gives us the exact date of the input we put in the value
// ususally gives the location as well 


let myTimeStamp = Date.now()  //especially used to deign qizzes and poles

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
