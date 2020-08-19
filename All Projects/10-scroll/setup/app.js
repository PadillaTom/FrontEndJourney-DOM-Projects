// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// Seleccionamos y damos el Method Date, full year
// Luego Borramos el HTML 2020
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
// Se hara segun la altura de los links
// Seleccionamos nav-toggle (parent del hamburg), links cotnainer, links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// Toggle --> Tenemos la class en CSS ya hecha.
// navToggle.addEventListener('click', function () {
//   linksContainer.classList.toggle('show-links');
// });
//El problema: La altura esta definida HARD CODED 200px.
// Necesitamos tener una altura dynamica!!!! por si hay mas links
// ----> DYNAMIC HEIGHT AND TOGGLE <----
// Usaremos .getBoundingClientRect()
navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);// Tocando la hamburg, vemos una Height 0 (porque los links estan ocultos by default.)
  //
  // Los LINKS tienen su altura, la Parent (LINKS-CONTAINER) NO!. Usaremos la altura de links para definir la altura dinamica del parent
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight);// Nos muestra el total de altura sumando los LINKS
  //
  // Si containerHeight es 0, add dynamically una height
  // si NO , devolverla a 0. (si tiene height)
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
// Una vez que scrolleamos fuera del banner, la navbar será fixed.
// Ademas, agregaremos un BTN para volver al TOP cuando la navbar este fixed.
//Seleccionamos
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
// Usaremos Scroll Event y togglearemos una classe ya Hecha en CSS.
// Idem para el LINK (back to top)
window.addEventListener('scroll', function () {
  //console.log(window.pageYOffset); // Nos muestra en numero, cuanto fue scrolleado.
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 450) {
    toplink.classList.add('show-link');
  } else {
    toplink.classList.remove('show-link');
  }
});
// Pequeño inconveniente: Links funcionan, pero le ERRAN a la page por cierto margen de altura.
// Habria que corregir esto, de manera DYNAMICA.
//
// ********** smooth scroll ************
// Smooth Scroll PRECISO! QUE NO PIFIE LAS SECTIONS!!!
// Usaremos la class SCROLL-LINK
// Seleccionamos ALL:
const scrollLinks = document.querySelectorAll('.scroll-link');
// Evento
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault(); // COMO NAVEGA MAL!, PREVENIMOS ESTO. LOS LINKS NO HARAN NADA QUE NO LES DIGAMOS.
    // Usaremos las ID para encontrar mismos valores dynamicamente.
    const id = evt.currentTarget.getAttribute('href').slice(1); // SLICE:  Extracts STR without modifying original. (slice a partir de index 1 (NO #))
    // console.log(id); // Vemos que me tiran la ID de cada LINK clickeado.
    const element = document.getElementById(id); // Seleccionamos a partir del SLICE
    // CALCULAR ALTURAS:
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav'); //Altura dynamica de la navbar, se incluira en nuestros calculos de altura de la page (section).

    let position = element.offsetTop - navHeight; // Nos devuelve un valor de altura para la seccion clickeada
    // console.log(position); // Vemos donde comienza cada seccion clickeada (Su altura)
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      // 82 = altura Nav (sin abrir)
      position = position + containerHeight; // Sumar Container, Ya que habiamos restado la altura de la NAV + Links
    }
    window.scrollTo({
      left: 0,
      //   top: 100, // 100 para probar como se mueve.
      top: position, // Se mueve a la position.
      // SOLO DEBEMOS MEJORAR LA PUNTERIA! --> VER PUNTERIA
    });
    linksContainer.style.height = 0; // Cerramos la NavBar.
  });
});
//
// PUNTERIA:
// El problema es que la NAVBAR oculta los titulos de cada section.
//
// Solucion 1) NAV IS FIXED  ---> let position = element.offsetTop - navHeight <---
// Soucion 2) NAV NO FIXED ----> Usamos un IF
// if (!fixedNav) {
//   position = position - navHeight;
// } // ESTO VA ANTES DE WINDOW.
// Solucion 3) NAV MOBILE ----> Tenemos que sumar la Altura del Container Ya que habiamos restado la altura de la NAV + Links
// if (navHeight > 82) {
//   // 82 = altura Nav (sin abrir)
//   position = position + containerHeight;
// }
//
//
// CALCULAR ALTURAS:
// const navHeight = navbar.getBoundingClientRect().height;
// const containerHeight = linksContainer.getBoundingClientRect().height;
// const fixedNav = navbar.classList.contains('fixed-nav'); //Altura dynamica de la navbar, se incluira en nuestros calculos de altura de la page (section).
//
