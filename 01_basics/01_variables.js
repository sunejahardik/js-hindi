const accountId=10
let accountEmail="hardiksuneja@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;


// accountId=2 // not allowed
accountEmail="h@hc.com"
accountPassword="12"
accountCity="gha"
console.log(accountPassword);
/*
prefer not to use  var 
because of issue in block scope and functional scope
if js mai koi cheej declare krke chod dete hai  to vo undefined hoti hai 
*/
console.table([accountEmail,accountPassword,accountId,accountCity,accountState]);