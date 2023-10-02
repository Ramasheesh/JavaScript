let data1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let data2 = []
let even = []
for(let i = 0 ; i<data1.length; i++){
    if(!(data1[i]%2==0)){
        data2[data2.length] = data1[i]
        
    }
    //else{
    //     data2[data2.length] = data1[i]
    // }
}
console.log(data2)