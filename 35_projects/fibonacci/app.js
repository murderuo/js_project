const n_value = document.querySelector('#input');
const calculate_button = document.querySelector('#calculate');
const result_area = document.querySelector('#sonuc');

function eventListeners() {
  calculate_button.addEventListener('click', calculate);
}

function create_element_ul(elements) {
  // console.log(elements);
  let item_list = elements.map(item => {
    return create_element_li(item);
  });
  // console.log(item_list.length);
  if (item_list.length === 0) {
    n_value.classList.add('is-invalid');
    result_area.innerHTML = '<ul>Geçersiz giriş</ul>';
  } else {
    n_value.classList.remove('is-invalid');
    result_area.innerHTML = '<ul>' + item_list.join('') + '</ul>';
  }
}
function create_element_li(value) {
  // const li = document.createElement('li');
  // li.innerHTML = value;
  // console.log(li);
  // return `${li.toString()}`;
  return `<li>${value}</li>`;
}
function calculate(e) {
  //   console.log(typeof n_value.value);
  if (n_value.value === '') {
    n_value.classList.add('is-invalid');
    result_area.innerHTML = '<ul>Geçersiz giriş</ul>';
  } else {
    n_value.classList.remove('is-valid');
    let s1 = 0;
    let s2 = 1;
    let result = 0;
    let element = [];
    for (let i = 0; i < Number(n_value.value); i++) {
      s1 = s2;
      s2 = result;
      result = s1 + s2;
      element.push(result);
      // create_element_li(result);
    }
    // console.log(element);
    create_element_ul(element);

    e.preventDefault();
  }
}

eventListeners();
