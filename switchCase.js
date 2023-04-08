let x = 300
let y = 10

div= x/y
mod = x%y
mul = x*y
add = x +y
sub = x - y

let result  = [div,mod,mul,sub,add]
switch(result){

    case (0):
    //    console.log((x+y))
    result[0]
    break;
    case(1):
    //   console.log((x*y))
    result[1]
    break;
    case(2):
    //    console.log((x/y))
    result[2]
    break;
    case(3):
    //   console.log(x%y)
    result[3]
    break;
    case(4):
    //   console.log(x-y)
    result[4]
    break;
    case(5):
    default:
        console.log("invalid oprations");
}
console.log(result)
console.log(result[3])
console.log(result[4])
console.log(result[0])


