const marvel_heros = ["Thor",  "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dcHeros)
// console.log(marvel_heros[3][0])

// const allHeros = marvel_heros.concat(dcHeros)
// console.log(allHeros)

// const allNewHeros = [...marvel_heros, ...dcHeros] // spread operator (...)
// console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Pushpak"));
console.log(Array.from("Pushpak"));
console.log(Array.from({name: "Pushpak"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))
