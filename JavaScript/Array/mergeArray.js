/*let arr1 = [1,2,3,5]
let  arr2 = [8,4,7]
let mArr = []
function mergedArray(){
for(let i = 0 ; i< arr1.length; i++){
        mArr.push(arr1[i])

    }
for(let j = 0 ; j< arr2.length; j++){
        mArr.push(arr2[j])

}
}
mergedArray(arr1,arr2)
console.log(mArr)

*/

let data1 = [1,2,3,5]
let  data2 = [8,4,7]
let resD = []
for(let i = 0; i<data1.length ; i++){
    data2[data2.length] = data1[i]
}

console.log(data2)
// console.log(data2.sort())


// let arr1 = [1,2,3,5]
// let arr2 = [8,4,7]
// let mArr = []
// for(let i = 0; i<arr1.length ; i++){
//     mArr[mArr.length] = arr1[i];
// };

// for(let i = 0; i<arr2.length ; i++){
//     mArr[mArr.length] = arr2[i];
// };
// console.log(mArr);