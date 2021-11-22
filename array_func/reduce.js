let dizi = [2,3,4];


function indirgeyici (akumulator, sayi) {
    return akumulator * sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = dizi.reduce(indirgeyici,1);

console.log(sonuc1);
