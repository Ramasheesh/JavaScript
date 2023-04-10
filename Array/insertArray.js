let data = [10,2,55,65,24,21]
let neEl = 100;
let pos = 2;
for(let i = data.length;i>=0 ;i--){
    if(i==pos){
        data.length = data.length+1

        data[i+1] = data[i]
        data.length[i] = data.length+1
        data[pos]= neEl;
        console.log(data)
    }
}
// data.length = data.length+1
console.log(data);