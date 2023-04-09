// find position by using 
// 1- indexOf
// 2-lastIndexOf

let st1 = "abcdefghi"
// console.log(st1.indexOf('f')) //searching word in this string like (h)

console.log(st1.indexOf('f'))
console.log(st1.indexOf('z'))

let st2 = "i like game play the game rdftgyh"
let st3 = "i like play the game"

console.log(st2.indexOf("game"))
console.log(st3.indexOf("game"))

let pos = st2.indexOf('game')
console.log(st2.indexOf("game",pos+1))

//last index of
console.log("the last index is: "+st2.lastIndexOf('game'))


