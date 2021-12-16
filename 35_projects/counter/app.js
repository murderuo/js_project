const arttir = document.querySelector('.increase');
const azalt = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const value_area = document.querySelector('#value');
// let span_value = value_area.innerText;
let counter = 0;

function eventListeners() {
  arttir.addEventListener('click', arttir_func);
  azalt.addEventListener('click', azalt_func);
  reset.addEventListener('click', reset_func);
  span_value.addEventListener('change', check_status);
}

function arttir_func() {
  counter += 1;
  //   console.log(counter);
  value.innerHTML = counter;

  //   let val = value_area.innerText;
  //   console.log(val);
}

function azalt_func() {
  counter -= 1;
  value.innerHTML = counter;
}

function reset_func() {
  counter = 0;
  value.innerHTML = counter;
}

function check_status() {
  let val = value_area.innerText;
  console.log(val);
}
eventListeners();
