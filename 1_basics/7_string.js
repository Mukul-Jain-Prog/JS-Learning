const name="Mukul "
const repocount=50
console.log(name+repocount+" value ")
// backtick can be used by pressing the key below the esc key
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName=new String("My-name-is-Mukul")
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.charAt(4))
console.log(gameName.indexOf('u'))

// in substring method even if you give negative value it will take it as 0 by default but in slice we can use negative value
console.log(gameName.slice(0,4))
console.log(gameName.slice(-15,4))
const new1str=gameName.substring(0,12)
console.log(new1str)
const newstr=gameName.split('-');
console.log(newstr)


const str1="    mukul         "
console.log(str1)
console.log(str1.trim())
const url="https://mukul.com/mukul%20jain"
console.log(url.replace("%20","-"))
console.log(url.includes("mukul"))
console.log(url.includes("king"))

