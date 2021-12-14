const h1 = document.querySelector('h1');
const buton = document.querySelector('.btn');
const show_code = document.querySelector('#show_code');
h1.innerText = 'Background flipper'.toUpperCase();
h1.style.textAlign = 'center';
// h1.style.backgroundColor = 'red';

function eventListeners() {
  buton.addEventListener('click', degistir);
}
function randomgetir() {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  for (i in hex.slice(0, 6)) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  //   const random_color = Math.floor(Math.random() * 15);
  //   let color = `#${hex[randomgetir()]}${hex[randomgetir()]}`;
  return color;
}
function degistir(renk) {
  renk = randomgetir();
  //   const random_color = Math.floor(Math.random() * 10);
  //   console.info(renk);
  document.body.style.backgroundColor = renk;
  show_code.innerText = renk;
}

eventListeners();
