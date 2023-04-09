/*
1-string compare
2-upper/lower case
3-trim
4-concatenation
*/ 
let str1 = "I love This"
let str2 = "i Love this"

//compare
// console.log(str1===str2)
//
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())

console.log(str1.toUpperCase === str2.toUpperCase)

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str1.toLowerCase())
console.log(str2.toLowerCase())

let str3 = "   node js    "
console.log(str1+str2)
console.log(str1.concat(),str2,str3)
console.log(str3.trimStart())
console.log(str3.trimEnd())
console.log(str3.trimRight())
console.log(str3.trimLeft())



