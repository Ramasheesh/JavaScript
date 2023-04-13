let x = [0,1,2,3,5,8,9]
function newArray(x, start, end){
    var temp = x[start]
    x[start] = x[end]
    x[end] = temp;
    if(start+1<end-1){
        newArray(x,start+1,end-1);
    }
}
function printArray(x,size){
    for(let i = 0 ; i<= size;i++){
        console.log(x[i]);
    }
}
console.log("Before this array x->");
printArray(x,6)
newArray(x,0,6)
console.log("After reversed this array x->")
printArray(x,6)