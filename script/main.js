const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.navbar');
const close = document.querySelector('.close-btn');

menuBurger.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.add('is-open');
});

close.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.remove('is-open');
})