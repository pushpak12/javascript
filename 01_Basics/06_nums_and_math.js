/*
const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString()); // its converted to string.
console.log(balance.toFixed(2)); // convert it to decimal number, 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // it will round of the number on basis of precision

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); // it will append commas in the number as per american standards. to change it to Indian standards then use 'en-IN'

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
*/

// ---------------------------- Maths ---------------------------

// commonly used Math operation
// console.log(Math.abs(-4))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6)); 
// console.log(Math.PI)

// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))
