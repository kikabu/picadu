//созд переменную кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//созд переменную в которую ложим меню
let menu = document.querySelector('.sidebar');
//отслеж клик по кнопке и запускаем функцию
menuToggle.addEventListener('click', function(event){
  //отменяем стандартное певедение ссылки
  event.preventDefault();
  //вешаем клас на меню когда кликнули по ссылке
  menu.classList.toggle('visible');
})