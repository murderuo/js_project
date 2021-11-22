const dizi = [2,5,8,11,15,17];
let yeni_dizi=[];
dizi.filter(item=>item>10?yeni_dizi.push(item*5):false);

console.log(yeni_dizi);
