// Kuracağınız yapı tamamen size kalmış. Birkaç tane püf noktamız var.

// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.
// Bonus

// Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.

/// FAZLA VAKTİM OLMADIĞI İÇİN LOCALSTROGE İŞİNE GİRMEDİM.
const input_value = document.querySelector('#txtTaskName');
const add_button = document.querySelector('#btnAddNewTask');
const task_list_area = document.querySelector('#task-list');
const hepsini_sil_button = document.querySelector('#btnDeleteAll');
// const sil_button = document.querySelector('.fas fa-times');
const toast_box = document.querySelector('.toast-body');

const toast_message = msg => {
  return `${msg}`;
};

function event_listeners() {
  add_button.addEventListener('click', ekle);
  task_list_area.addEventListener('click', durum_degistir_veya_sil);
  // task_list_area.addEventListener('click',)
  hepsini_sil_button.addEventListener('click', hepsini_sil);
}

function ekle(e) {
  // console.log(input_value.value);
  if (input_value.value === '') {
    toast_box.innerHTML = toast_message('Eklenemedi,boş olamaz..');
  } else {
    //create li
    const dom_li_element = document.createElement('li');
    dom_li_element.className = 'list-group-item list-group-item-secondary';
    dom_li_element.style.backgroundColor = 'red';
    dom_li_element.textContent = input_value.value;
    //create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    //create a checkbox for li object
    const cb = document.createElement('a');
    cb.className = 'float-left';
    cb.setAttribute('href', '#');
    cb.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

    // cb.setAttribute('value', '');

    //add a to li
    dom_li_element.appendChild(a);
    dom_li_element.appendChild(cb);
    // console.log(dom_li_element);
    //add li to app list
    task_list_area.appendChild(dom_li_element);
    // localStorage.setItem(input_value, dom_li_element);
    input_value.value = '';
    toast_box.innerHTML = toast_message('Eklendi');
    e.preventDefault();
  }
}

function durum_degistir_veya_sil(e) {
  if (e.target.className === 'fas fa-times') {
    e.target.parentElement.parentElement.remove();
    toast_box.innerHTML = toast_message('Silindi.');
    // console.log(e);
  } else if (e.target.className === 'fa fa-check') {
    // let text = e.target.parentElement.parentElement.textContent;
    // console.log(text);
    if (
      e.target.parentElement.parentElement.style.textDecoration ===
      'line-through'
    ) {
      e.target.parentElement.parentElement.style.textDecoration = 'none';
      e.target.parentElement.parentElement.style.backgroundColor = 'red';
      toast_box.innerHTML = toast_message('Yapılmadı olarak işaretlendi..');
    } else {
      e.target.parentElement.parentElement.style.textDecoration =
        'line-through';
      e.target.parentElement.parentElement.style.backgroundColor = 'green';
      toast_box.innerHTML = toast_message('Yapıldı.');
    }
  }
  e.preventDefault();
}

function hepsini_sil(e) {
  task_list_area.innerHTML = '<ul id="task-list" class="list-group"></ul>';
  // localStorage.clear();
  toast_box.innerHTML = toast_message('HEPSİ SİLİNDİ...');
  e.preventDefault();
}

event_listeners();
