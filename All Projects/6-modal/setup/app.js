// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// 1) Select
const modalBtn = document.querySelector('.modal-btn');
const modalOver = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// 2) Event para abrir: Le tenemos que poner Open Modal
modalBtn.addEventListener('click', function () {
  //   console.log(modalBtn.classList); // para ver que funcione
  modalOver.classList.toggle('open-modal');
});
// 3) Cerramos boton
closeBtn.addEventListener('click', function () {
  modalOver.classList.remove('open-modal');
});
