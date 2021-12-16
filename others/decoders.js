/*
girilen string içerisindeki karaktetin alfabedeki bir sonraki karakterini getirir,
eğer bu karakter sesli harf ise büyük harfe çevrilir. bunların dışındaki karakterler ise olduğu gibi geri döner.
*/


function codec(strParam){
  const alp_string="abcdefghijklmnopqrstuvwxyz";
  const vowels="aeiou"
  let new_str=""
  for(let i=0;i<strParam.length;i++){
    if (alp_string.includes(strParam[i])){
      if(strParam[i]==="a"){new_str+="a"}else{
        let ltr_index=alp_string.indexOf(strParam[i]);
        if(vowels.includes(alp_string[ltr_index+1])){
          new_str+=alp_string[ltr_index+1].toUpperCase()
        }else{new_str+=alp_string[ltr_index+1]}
      }
    }else{
      new_str+=strParam[i]
    }
  } 
  return new_str
  
}

let result=codec("hello world*3")
console.log(result)
