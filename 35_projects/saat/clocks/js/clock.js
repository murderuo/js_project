// let name_area = document.querySelector('#myName');
// name_area.textContent = 'ugur';

function showTime() {
  let user = prompt('Adınız nedir ?:');
  const days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ];
  var hash_date = new Date();

  const hour = hash_date.getHours();
  const minutes = hash_date.getMinutes();
  const seconds = hash_date.getSeconds();
  const day = hash_date.getDay();

  const name_area = document.querySelector('#myName');
  name_area.textContent = user;
  const clock_area = document.querySelector('#saat');
  clock_area.textContent =
    hour + ':' + minutes + ':' + seconds + '  ' + days[day - 1];
}

showTime();
