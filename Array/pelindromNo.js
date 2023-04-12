let original = [1241,212,12321]
for(let i = 0 ; i<original.length/2;i++){
  if(original[i] == original[original.length-1-i]){
    console.log("ture",original[i]);
  }
    else{
      console.log("false");
    }
}


// // let original2 = [121,323,1254]
// function palindromNum(check){
//   let reverse = 0
//   let  original2 = [121,323,1254]
//   while(original2 > 0){
//     let rem = rem % 10;
//       reverse = reverse * 10 + rem;
//       original2 = original2/10;
//   }
//   if(original2 == reverse){
//     console.log(original2[i])
//   }else{
//     return
//   }
// }
// for(let i  = 0 ; i < original2.length; i++){
 
//   check(original2[i])
// }









// function pln(str){
//   let reverseStr = ''
//   for(let i = str.length-1 ;i>=0 ; i--){
//     reverseStr += str[i] 
//   }
//   return str === reverseStr;
// }
// console.log(pln("dad"));

