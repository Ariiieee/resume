/**print my name */
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

firstName.innerText = 'Oluwafunmilayo';
lastName.innerText = 'Dada';

console.log('Oluwafunmilayo', 'Dada');




/* show and close nav */
const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav-toggle')
const closeNav = document.querySelector('.close-menu');

navToggle.addEventListener('click', ()=> {
  navMenu.classList.add('show-menu')
})

closeNav.addEventListener('click', ()=> {
  navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('show-menu'));
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active');

  const navMenu = document.querySelector('.nav__menu');
  navMenu.classList.remove('show-menu')


}

navLink.forEach(n => n.addEventListener('click', linkAction))




