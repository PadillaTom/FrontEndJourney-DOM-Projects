// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Conceptos Generales de NavBar:
// Height of Links: Se modificará when click btn.
// Conviene saber de antemano la altura que tendrán los Links (10rem)
// Tendremos una class .links{height: 0rem;} y otra .show-links {height: 10rem}
// Lo quen haremos es Toggle between classes. Para poner y sacar altura.

// 1) Seleccionamos
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
//
// 2) Event de practica: Modo Largo, Contais Add Remove
// navToggle.addEventListener('click', function () {
//   //   console.log(links.classList); // log para ver las classes dentro
//   if (links.classList.contains('show-links')) {
//     links.classList.remove('show-links');
//   } else {
//     links.classList.add('show-links');
//   }
// });
//
// 3) TOGGLE!!!!!!
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
// IMPORTANTISIMO: EN CSS --> CUANDO USEMOS MEDIA QUERY PARA BIGGER SIZE SCREENS
// DAR UNA ALTURA A LINKS DE AUTO
// .LINKS{ HEIGHT: AUTO }
// SINO MANTENDRAN LOS 10REM DADOS EN SHOWLINKS
