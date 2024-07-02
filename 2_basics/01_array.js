//array

const myArr=[0,1,2,3,4,5]
console.log(typeof myArr);
console.log(myArr[0]);

const myHeros=["shaktiman","Spiderman"]
console.log(myHeros[0])

const myArr2=new Array(1,2,3,4)
console.log(myArr2[1])

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) // push at start
myArr.shift() // pop at start
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(7));

const newArr=myArr.join()
console.log(myArr);
console.log(newArr)
console.log(typeof newArr);

//slice-> just print the element in the range , 
//splice-> it print or saves those elements but remove the element from that array where it has extracted it and it takes a starting index and number of elements from that position

console.log("A ", myArr);
console.log(myArr.slice(0,3));
console.log(myArr);
console.log(myArr.splice(5,3));
console.log(myArr);
