let arr = [5,6,1,3,7,9,0];
for(let i = 0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr.length ; j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        // if(!arr[j]>arr[j+1]){
        //     return arr[j]
        // }
    }
}
console.log(arr)