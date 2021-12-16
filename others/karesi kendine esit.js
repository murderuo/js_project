var isSquare = function(n,p){
    var stringNumber=n.toString();
    var result=0;
    
    for (i in stringNumber){
      // console.log(stringNumber[i]);
      var digit=parseInt(stringNumber[i]);
      // console.log("digit:",digit,"p:",p)
      // console.log("i:",i)
      result+=Math.pow(digit,p+i);
      // console.log(result) 
    }

     return result;
    //  console.log(result%n);
         
    } // fix me
  
  console.log(isSquare(89,1));