let n = 5;
let c=0;
let n1 = 0 , n2= 1
for(let i = 0 ; i<=n ; i++){
    c = c + n1
    c = n1 + n2 
    n1 = n2
    n2 = c
    console.log(c)
}
