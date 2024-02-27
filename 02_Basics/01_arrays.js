// arrays

const myArr = [0, 1, 2, 3, 5]
// const courses = ["Java 0 to Hero", "Python Ninja", "JavaScript Mastery", "Instagram Management"]

// console.log(myArr)
// console.log(myArr[0])
// console.log(courses)

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)
// console.log(myArr2[1])

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes last value

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5)) // if the element is not present in an array it will return -1 as result

// const newArr = myArr.join() // convert into string
// console.log(myArr)
// console.log(newArr,"-",typeof newArr)

// slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B", myArr)


const myn2 = myArr.splice(1,3) // slice operation will manipulate the original array
console.log(myn2)
console.log("C ",myArr)
