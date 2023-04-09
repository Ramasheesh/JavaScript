// 1-substr:-length
//2-substring:-index

let str1 = "your order number: DEZ 0293 2093"

console.log("1-"+str1.substr(0,4))
console.log("2-"+str1.substr(11,6))
let st2 = "order number"
console.log("3-"+str1.substr(str1.indexOf(st2)+st2.length))

console.log("4-"+str1.substring(0,3))
