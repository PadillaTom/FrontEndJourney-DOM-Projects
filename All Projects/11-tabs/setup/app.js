// Tenemos una CARD, con distintas tabs, al clickear cada una mostrara su contenido
// Usaremos la Class ACTIVE para mostrar content
//
// 1) Selections
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
// 2) Event al ABOUT (parent) Usaremos el Event Target para ver que se toca.
about.addEventListener('click', function (evt) {
  //   console.log(evt.target); // Vemos que click al BTN, cada data-id es unica. Lo usaremos
  const btnId = evt.target.dataset.id; // Seleccionamos dicho id
  if (btnId) {
    // SI--> se toca la ID,
    //Remove ACTIVE from all Btns
    btns.forEach(function (btn) {
      // Remove al resto
      btn.classList.remove('active');
      evt.target.classList.add('active'); // Add a la del evento.
    });
    // Hide ALL articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    // Que queremos mostrar? DAR ACTIVE: al que tiene Matching ID (btnId)
    const element = document.getElementById(btnId);
    element.classList.add('active');
  }
});
