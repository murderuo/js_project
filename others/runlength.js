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
  let result_str=""
  for(v in say_bakalim(str_arr)){
    result_str+=`${say_bakalim(str_arr)[v]}${v}`
  }


  return result_str; 

}
//eksik 
// keep this function call here 
console.log(RunLength(readline()));

/*
1. For input "mouses" the output was incorrect. The correct output is 1m1o1u1s1e1s

2. For input "yesssssnomaybe" the output was incorrect. The correct output is 1y1e5s1n1o1m1a1y1b1e

3. For input "zzzaaappeefffffffmfgg" the output was incorrect. The correct output is 3z3a2p2e7f1m1f2g
*/
