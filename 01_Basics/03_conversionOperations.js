let score = "33"
//console.log(typeof(score))
//console.log(typeof score)

let valueInNumber = Number(score) // string to number conversion
//console.log(valueInNumber);
//console.log(typeof valueInNumber);

// "33" -> 33 (number)
// "33abc" -> NaN
// true -> 1; false -> 0

let isLoggedIn = 3
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(isLoggedIn,booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn,typeof isLoggedIn);

// 1 -> true
// 0 -> false
// "" -> false
// "Pushpak" -> true
// 2 -> true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(someNumber, stringNumber);
// console.log(typeof someNumber, typeof stringNumber);




/* ----------------- Operations---------------- */

let value = 3
let negValue = -value
// console.log(value, negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) // 2 raise to power 2
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = "Pushpak"
// console.log(str1 + str2)

// console.log("2" + 3)
// console.log(2 + "3")
// console.log("1" + 2 + 2) // output : 122
// console.log(1 + 2 +"2"); // output : 32

// console.log(+true) // output : 1
// console.log(true+) // error
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)
++gameCounter;
console.log(gameCounter)