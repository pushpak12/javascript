const name = "hitesh"
const repoCount = 50;

// console.log(name + repoCount);

console.log(`Hello my name  is ${name} and my repo count is ${repoCount}`); // string interpolation

// string decalration
const gameName = new String("PushpakK-Katkar")
console.log(gameName[0]); // P
console.log(gameName.__proto__); // {} just for object 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('p'));

const newGameName = gameName.substring(0,7)
console.log(newGameName);

const anotherString = gameName.slice(-8,7)
console.log(anotherString)

const newString = "    pushpak     "
console.log(newString);
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

