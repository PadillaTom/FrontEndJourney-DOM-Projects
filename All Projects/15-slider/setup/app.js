// Slider de Imagenes "Carrousel"
// Al principio y al fin, esconderemos  NEXT y PREV buttons
// Aplicaremos unas CLASSES ya hechas en CSS
// Sabemos que 100% = una imagen, la quinta imagen será entonces: 500%.
//
// Select
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// Ponemos las SLIDES una al lado de la otra, en line
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`; // A cada ".slide" le camos un LEFT : %
});

// Navegará sumando y restando 100%s. Segun imagen deseada.
let counter = 0;
nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});
//
//  ----> Funcion que suma o resta los 100%s.

function carousel() {
  // **** ROTADOR DE IMAGENES ****
  //   if (counter === slides.length) {
  //     // SI SE LLEGA AL LARGO DE LAS IMAGENES:
  //     counter = 0; // Volvemos a 0 (imagen inicial)
  //   }
  //   if (counter < 0) {
  //     // SI SE LLEGA A COUNTER NEGATIVO
  //     counter = slides.length - 1; // -1: Last item de las imagenes
  //   }
  //
  // **** BOTONES ESCONDIDOS (no rotar imagenes) ****
  if (counter < slides.length - 1) {
    // SI NO se llega a la ultima imagen
    nextBtn.style.display = 'block'; // Mostramos NEXT
  } else {
    nextBtn.style.display = 'none'; // NO MOSRTAMOS
  }
  if (counter > 0) {
    // SI NO es la priemr imagen
    prevBtn.style.display = 'block'; // MOSTRAMOS PREV
  } else {
    prevBtn.style.display = ' none'; // NO MOSTRAMOS
  }

  // Funcion principal, carousel.
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
//
// Esconder Botones
prevBtn.style.display = 'none';
