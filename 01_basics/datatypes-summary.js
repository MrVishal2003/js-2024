// Primitive

// 7 types : Srting , Number , Boolean , Null, Undefined, Symbol, BgInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vishal",
    age: 21,
}

const MyFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);