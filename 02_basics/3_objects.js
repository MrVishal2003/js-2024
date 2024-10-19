//singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "vishal",
    "full name": "vishal hadiyal",
    [mySym]: "mykey1",
    age: 21,
    location: "rajkot",
    email: "vishal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vishal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vishal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());