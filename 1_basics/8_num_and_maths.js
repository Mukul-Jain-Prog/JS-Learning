const score=400
console.log(score)
const balance=new Number(4400)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum=1126.8966
console.log(otherNum.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++ Maths +++++++++++++ 

console.log(Math.PI)
// Gives absolute value + -> + , - -> +
console.log(Math.abs(-3));
console.log(Math.round(34.3))
console.log(Math.round(34.8))

console.log(Math.floor(4.6))
console.log(Math.floor(4.2))

console.log(Math.ceil(4.6))
console.log(Math.ceil(4.2))
console.log(Math.min(5,3,2,1));
console.log(Math.max(5,3,2,1));

console.log(Math.sqrt(36));

// random by default  gives between  0 and 1 at random
console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.random() * (max-min+ 1)+min)