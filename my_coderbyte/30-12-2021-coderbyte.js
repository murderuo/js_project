//ex.1

/*

AB Check
Have the function ABCheck(str) take the str parameter being passed and return the string true 
if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
Examples
Input: "after badly"
Output: false
Input: "Laura sobs"
Output: true
bzzza



*/

let str = 'after badly';
console.log(str['a']);
function check(s) {
  const str_arr = s.split('');
  console.log(str_arr);
  let status = false;
  for (i in str_arr) {
    console.log(`${str_arr[i]},${i},${str_arr[Number(i) + 4]}`);
    // console.log()/
    if (str_arr[i] === 'a') {
      if (str_arr[Number(i) + 4] === 'b') {
        status = true;
      } else {
        status = false;
      }
    }
  }
  return status;
}

console.log(check(str));

//#####################################################################
//ex.2

/*
Distinct List
Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. 
For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
Examples
Input: new int[] {0,-2,-2,5,5,5}
Output: 3
Input: new int[] {100,2,101,4}
Output: 0
*/

const num_arr = [0, -2, -2, 5, 5, 5];
let counter = 0;
let temp = 0;
let max_temp = 0;
num_arr.forEach(i => {
  console.log('i degeri:', i);
  num_arr.forEach(j => {
    console.log('j degeri:', j);
    if (i === j) {
      counter++;
    }
  });
  console.log('counter degeri:', counter);
  temp = counter;
  if (temp > max_temp) {
    max_temp = temp;
  }
  console.log('temp degeri:', temp);
  counter = 0;
  // if (counter===1){counter=0}
});
console.log(max_temp - 1);

//########################################################################
//ex.3
/*
Calculator
Have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. 
For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. 
There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. 
The string will contain the operators: +, -, /, *, (, and ). 
If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. 
So divide then multiply, and for the second one multiply, divide, then add. 
The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot.

Examples
Input: "6*(4/2)+3*1"
Output: 15
Input: "6/3-1"
Output: 1
*/
