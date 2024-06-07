// let score="33"
// let score="33abc"
// let score=null
// let score=undefined
let score=true
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber)); 
// if it is  not a number then it will give NaN(not a number)
//  if it is a null then it will give 0 as value
// "33"=> 33
// "33abc" or undefined or only a string => NaN
// true=>1;false=0
// NUll=>0
console.log(valueInNumber);
console.log(score);

let isLoggedIn="ksk";
// 1=>true;0=>false;
// Not empty string("hitesh")=>true' empty string("")=>false;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)