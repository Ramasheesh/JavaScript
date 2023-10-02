//leetcode: 2619. Array Prototype Last
Array.prototype.last = function(){
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length -1];
    }
};

const arr1 = [1,2,3,48,7,9];
const arr2 = [];
console.log(arr1.last());
console.log(arr2.last());
