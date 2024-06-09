console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)


console.log("2">1)
console.log("02">1)

console.log(null>0);
console.log(null==0);
console.log(null>=0); // it will give true, here null convert to zero

// here undefined will give false
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);
console.log(undefined<0);

// strict check "===" basically it checks value and data type too but for only "==", it automatically convert into preferred type and then compare , so basically check values
console.log("2"===2)
console.log("2"==2)