let arr1 = [1,2,3]
let arr2 = [4,5,6]
let resArr = ""
function mergeArray(){
   for(let i = 0; i<=arr1.length-1 ; i++){
        resArr += arr1[i];
    }
    for(let j = 0 ; j<= arr2.length-1 ; j++){
        resArr += arr2[j]
    }
    // return resArr
    console.log(resArr)
}
mergeArray(arr1,arr2)
