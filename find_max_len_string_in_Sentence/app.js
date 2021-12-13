const input = document.querySelector('#input');
const find_buton = document.querySelector('#button');
const sonuc_div = document.querySelector('#sonuc');

function eventListener() {
  find_buton.addEventListener('click', bul);
}

function bul(e) {
  const value = input.value.replace(/[?,.!:;<>/\\"']/g, ' ');

  let sentence_arr = value.split(' ');
  let max_len = 0;
  let str;
  sentence_arr.forEach(item => {
    if (item.length > max_len) {
      max_len = item.length;
      str = item;
    }
  });

  sonuc.innerHTML = 'Kelime uzunluğu:' + str.length + ' Kelime:' + str;

  e.preventDefault();
}

eventListener();
