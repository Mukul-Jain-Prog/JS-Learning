// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

// let myCreateDate=new Date(2023,2,23)
// let myCreateDate=new Date(2023,2,23,5,4)
let myCreateDate=new Date("2023-01-23")
console.log(myCreateDate.   toLocaleString())
let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(newDate.getMonth()+1);// as month start index from 0

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}
));
