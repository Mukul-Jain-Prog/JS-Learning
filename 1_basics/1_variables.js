//  for constant , do value doesn't get change
const accountId=568888
/*for changing the value in future we can use var and let, but in var there is scope problem
so don't use var much because of issue in block scope and functional scope.
*/
let accountEmail="jmukul024@gmail.com"
var accountPassword="5432214"
accountCity="Delhi"  // it can be done like this but not used practically
let accountState;// so if we try to print it , then it will give undefined value
// accountId=2
accountEmail="hgac@.com"
accountPassword="8382"
accountCity="Banglore"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])