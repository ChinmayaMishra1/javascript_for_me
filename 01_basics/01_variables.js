const accountId = 14453// can't be changed as stated 
let accountEmail = "chinmayamishraofficial@gmail.com"
var accountPassword = "123456789"//never use it as it causes scope problems that it can also go beyond scopes    always use "let"
accountCity = "Jajpur" // very bad practise don't use this 
let accountState ;// will be undefined at this stage

// accountId=2

accountEmail="hbn@gmail.com"
accountPassword= 142536
accountCity="Angul"

console.log(accountCity);
console.table([accountEmail,accountPassword,accountId,accountCity,accountState]);// in this way we can get these things in the format of a table with index