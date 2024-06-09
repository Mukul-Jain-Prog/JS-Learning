//  Data types is divided into two types based on memory and accessing - Primitive and Non-Primitive
/* Primitive:
    7types:String,Number,Boolean,null,undefined,Symbol,BigInt
*/
// Javascript is a dynamically typed language , which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
// Example
let str="Mukul"
console.log(typeof str)
str=7
console.log(typeof str)


// Symbols, basically they create a unique number or id
const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);

const bigNumber=122222234444442221n // here n will let it to convert number into bigInt by telling it that it has n digits
console.log(typeof bigNumber)

/* Reference or Non-Primitive:
Array,objects,Functions
*/

const heros=['shaktiman','spiderman','ironman'] // array

let myObj={
    name:"Mukul",
    age:20,
} // object

const myFunc=function(){
    console.log("hello world")
}

console.log(typeof str34) // if there is no variable exist of that name and you are tring to get data type then it will give undefined

console.log(typeof heros)
console.log(typeof myFunc)