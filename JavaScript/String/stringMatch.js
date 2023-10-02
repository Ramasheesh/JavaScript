let str = "The rain in SPAIN stays mainly in the plain"
console.log(str.match("in"))
console.log(str.match('ain'))
console.log(str.match(/ain/g))//globle matchs
console.log(str.match(/ain/gi))// globale  csae sensitive matchs

