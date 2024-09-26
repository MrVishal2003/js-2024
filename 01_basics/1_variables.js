const accountId = 144553
let accountEmail = "hadiyal123vvv@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState = "gujarat"
// accountId = 2

accountEmail = "vv@vv.com"
accountPassword = "1211"
accountCity = "rajkot"

console.log(accountId);

/*Prefer not to use var 
because of issue in block scope 
and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])