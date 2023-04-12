let data = [10,2,57,35,7,56,5,8,9] //remove 35 in this array
let ele = 35


for(let i = 0; i<=data.length-1;i++){
   
   console.log(i)
    if(data[i] === ele){

    // console.log("hello");
    data.splice(i,1)
    console.log(data);
    // break
    // continue
    return
    }
   
}
// data.length=data.length+1

// console.log(data);
