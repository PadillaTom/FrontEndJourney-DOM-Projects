// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Primero: Overlay para white text (::after in CSS). No se puede acceder a los controls.
// Segundo: PLAY PAUSE
// Tercero: un preloader (pantalla de espera mientras carga la pagina principal)

// 2) Play Pause (Controls)
// Vamos al HTML : Buttons Switch, span para play y pause, mas otra para Switch
// Select Btn and Video Container.
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
// Tenemos previamente en CSS .slide (que mueve el tercer span hacia la derecha un 50%)
// Togglearemos on y off dicha class .slide
btn.addEventListener('click', function () {
  if (!btn.classList.contains('slide')) {
    // IF NOT CONTAINS SLIDE
    btn.classList.add('slide');
    video.pause(); // PAUSAMOS VIDEO
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});
//
// 3) Preloader
// Vamos a HTML y lo agregamos arriba del Header.
// es position FIX in CSS, tenemos que ocultarlo una vez que la panalla cargue
// DOMCONTENTLOADED : Se dispara cuando carga la pag, SIN CSS, IMAGES, RESOURCES.
// usaremos LOAD: Se dispara CUANDO TODO CARGUE: CSS, IMAGENES, RESOURCES, ETC.
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader'); // Dicha clase ya esta creada en CSS
});
