let data = [10,2,57,35,7,56] //remove 35 in this array
let ele = 35
for(let i = 0; i<=data.length;i++){
   if(data[i]==ele){
    data[i] = data[i+1];
    if(data[i] == data[i+1]){
            
        }
   }
}
// data.length = data.length-1
console.log(data)