// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023, 12, 25) // Month starts from 0 in JavaScript
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDateNew = new Date("2023-01-14"); // YYYY-MM-DD
// console.log(myCreatedDateNew);

// let myDate = new Date("01-14-2023");
// console.log(myDate.toLocaleDateString());

// let myTimeStamp = Date.now()
// let myDate = new Date("01-14-2023");

// // console.log(myTimeStamp);
// // console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert to seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long",
    month:"numeric",
})

console.log(newDate)