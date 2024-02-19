const accountId = 144553
let accountEmail = "pushpak@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;


// accountId = 2 // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and fucntional scope
*/

accountEmail = "pushpakk@gmail.com"
accountPassword = "2121"
accountCity = "Mumbai"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])