let n1 ,n2 ,n3 , res
for(let i = 1 ; i<=6 ; i++){
    n1 = 0,n2 = 1,n3 = 0,res= ""
   for(let j = 1 ; j<=i;j++){
    res  = res+ " " +n1
    n3 = n1  + n2 
    n2 = n1
    n1 = n3

   }
   console.log(res)
}