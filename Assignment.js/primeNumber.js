// var num = 7
// for(var i = 2 ; i <=num ; i++){
//     if(i==num){
//         console.log(num,"prime number")
//     }
//     else if(num%i==0)
//         {
//             console.log(num,"Not a prime number",i)
//             return
//         }
// }

// for (var counter = 1; counter <= 10; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i==0 && i!=counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }



let a  = 100
for(let c = 2; c<=a ; c++){
    for(let b = 2; b <= c ;b++){
        if(c==b )
            console.log(c);
        else if(c%b==0)
            break
        
    }
}