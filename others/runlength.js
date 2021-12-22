/*
Run Length
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
Examples
Input: "aabbcde"
Output: 2a2b1c1d1e
Input: "wwwbbbw"
Output: 3w3b1w
*/

function RunLength(str) { 
  let str_arr=str.split("")
  const say_bakalim=(arr)=>arr.reduce((a,b)=>
  Object.assign(a,{[b]:(a[b]||0)+1}),{})
  const result_obj=say_bakalim(str_arr)
  console.log(result_obj)
  let result_str=""
  for(v in result_obj){
    result_str+=`${result_obj[v]}${v}`
  }


  return result_str; 

}
   
// keep this function call here 
console.log(RunLength(readline()));
