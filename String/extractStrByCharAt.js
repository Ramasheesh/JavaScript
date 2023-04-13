

// 1-charAt
// 2-str[]

let st= "present"
console.log(st.charAt(0))
// console.log(st.charAt(1))
// console.log(st.charAt(5))

let st2 = "future"
console.log("2-"+st2[1])
console.log("2-"+st2[st2.length-1])

for(let i = 0 ; i <= st2.length-1;i++){
    console.log("3:-> "+st2[i])
}


let st3 = "classmate"
let temp = ""
for(let j = 0 ; j<= st3.length-1 ; j++){
    temp = st3[j] + temp
}
console.log(temp)