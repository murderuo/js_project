function Palindrome(str) { 
  let clean_str=str.replace(/\s/g,"").split("")
  return clean_str.reverse().join("")==str.replace(/\s/g,"").split("").join("")?true:false
  

}
   
// keep this function call here 
console.log(Palindrome(readline()));


