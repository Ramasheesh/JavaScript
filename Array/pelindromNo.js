// const data = [121,22522,464,2524,36531]
// const data1 = [] 
// for(let i = 0; i<(data.length)/2 ;i++){
//     if(data[i] !== data[data.length-1-i]){
//         // console.log(data);
//         data1[data1.length] = data[data.length-1-i]
//     } 
// }
// console.log(data1)

function isPalindrome(str) {
    // loop through the string from both ends
    for(let i = 0, j = str.length - 1; i < j; i++, j--) {
      // if the characters at both ends don't match, return false
      if(str.charAt(i) !== str.charAt(j)) {
        return false;
      }
    }
    
    // if the loop completes without returning false, the string is a palindrome
    return true;
  }
  function isPalindrome(str) {
    let reversedStr = '';
    
    // loop through the string backwards and add each character to the reversed string
    for(let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    
    // compare the original string with the reversed string
    return str === reversedStr;
  }
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
