//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type (Non-Primitive)

// Array, Objects, Fucntions

// Examples

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outSideTemp = null
let userEmail; // undefined
// or
// let userEmail = undefined 
const id = Symbol('123') // Symbol : for unique data
const anotherId = Symbol('123')

console.log(id === anotherId)

// BigInt
const bigNumber = 345678907778888499999999999999999999999999n
console.log(typeof bigNumber)

// Array
const heros = ["Shaktiman", "Naagraj", "Doga"]

// Object
const userData = {
    name : "Pushpak",
    age : 25
}

// function
const myFunc = function() {
    console.log("Hello world")
}

console.log(typeof heros, typeof userData, typeof myFunc)


// -------------------------- Memory Management ---------------------------

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "T-Series"
let anotherName = myYoutubeName
anotherName = "T-series Marathi"
console.log(anotherName);

let userOne = {
    email : "User1@gmail.com",
    upi : "user1@ybl"
}

let userTwo = userOne

console.log(userOne, userTwo)

userTwo.email = "User2@gmail.com"
console.log(userOne, userTwo)