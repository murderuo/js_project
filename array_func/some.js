let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
  if (dizi.some(item=>item>5)){
  return console.log("Beşten büyük bir eleman mevcut.");
  }else return console.log("5'ten büyük eleman mevcut değil.");

}

myFunction(dizi);
