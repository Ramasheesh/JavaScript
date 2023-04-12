let data = [10,2,55,65,24,21]
let neEl = 100;
let pos = 2;
for(let i = 0 ; i<=data.length-1 ;i++){
    if(i==pos){
        data[data.length] = data[pos]
        data[pos] = neEl;

    }
}
// data.length = data.length+1
console.log("inserted Data-> "+data);

