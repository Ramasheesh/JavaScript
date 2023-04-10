let str = "How are you doing today?"
console.log(str.split(" "))//with space

const st = str.split(" ")
let word = st[3]
console.log(word)//return the word by indexing

console.log(str.split(" ",3))// limit the parameter