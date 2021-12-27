//find array recursive

/* incorret test case

1. For input [0,-2,-2] the output was incorrect. The correct output is 1

2. For input [1,2,2,2,3] the output was incorrect. The correct output is 2

3. For input [1,2,2,2,2,2,3] the output was incorrect. The correct output is 4

4. For input [5,5,5,5,5,5,5,7] the output was incorrect. The correct output is 6

5. For input [0,0,0,0] the output was incorrect. The correct output is 3

6. For input [1,2,3,4,5,6,7,7] the output was incorrect. The correct output is 1
*/

function ArrayChallenge(arr) { 
  const say=(ar)=>ar.reduce((a,b)=>
  Object.assign(a,{[b]:(a[b]||0)+1}),{})
  //console.log(say(arr))

  
  let max_value=Math.max(...Object.values(say(arr)))
  //console.log(typeof max_value)
  return max_value>1?max_value:0;

}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));
