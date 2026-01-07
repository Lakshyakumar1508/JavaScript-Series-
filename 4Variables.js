console.log("Lakshya")

// Const does not change ever
const accountId= 12435  

// Mostly use (let)
let accountEmail="laks@gmail.accountEmail"

// Least use of var  because of issue in block scope and functional scope
var accountPass="1234"

// Not use this types
accountCity="Jaipur"

let accountState;


// accountId=2 not allowed 
console.log(accountId)

accountEmail="hhhh@gmail.com"
accountPass="2222"
accountCity="Mumbai"
console.table([accountEmail,accountPass,accountCity,accountState])