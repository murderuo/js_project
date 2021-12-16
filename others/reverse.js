function FirstReverse(str) { 
  let str_arr=str.split(" ");
  let sente=[]
  str_arr.forEach((item)=>{
    sente.push(item.split("").reverse().join(""))
    

       
  })
str=sente.reverse().join(" ")
  return   str

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
