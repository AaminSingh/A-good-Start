// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// it can be accessed from both [] & . 
// console.log(JsUser["email"])//this one more convenient than others
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // here it is used to access the keys that is defined other thann this

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // while making the value freeze it means no longer change can be done
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // to acess any values  from the JsUser
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());