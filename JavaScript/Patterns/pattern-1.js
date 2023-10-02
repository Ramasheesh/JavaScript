/*let  n=5 ;
let row = 1;
while(row <= n){
    console.log("*");
    console.log(" ")
    row =row +1;
}
*/

let  n=5 ;
let row = 1;
let string = ""
while(row <= n){
    //
    let col = 1;
    while(col <= n){
        string +="*"
        col++;
    }
    string +="\n"
    row++;
}
console.log(string)