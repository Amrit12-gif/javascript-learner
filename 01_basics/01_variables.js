const accountId = 1212  // const are not changeable
let accountEmail = "hari@g,ail.com"
var password = "12345"
accountCity = "ktm"



// accountId = "22" // not allowed 

accountEmail = "reule@gmail.com"
accountCity = "lalitpur"
let accountState; // it is undefined state because it is not fullfill.
let ram;

console.log(accountId);

/*
prefer not to used var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountState, ram])