var countBits = function(n) {
    // Program Me
    if (n<0){return false}else{
        var str_bit=n.toString(2);
        var counts=0;
        for (var i=0;i<str_bit.length;i++){
            if (str_bit[i]=="1"){
                counts++
            }
        };
    };
    return counts
  };

  var digits=countBits(7);
  console.log(digits);
// countBits(4);
// var n=7
// var str_bit=n.toString(2);
// console.log(str_bit);

// console.log('test')