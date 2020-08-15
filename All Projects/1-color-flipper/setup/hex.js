// Array que contiene los items para crear el Random
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// 1) Seleccionamos Elementos
const btn = document.querySelector('#btn');
const colors = document.querySelector('.color');
//
// 2) Evento al BTN:
btn.addEventListener('click', function () {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  colors.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
//
// 2 BIS) pensamos el interior de la function_
// let hexColor = '#';
// for (let i = 0; i < 6; i++) {
//   hexColor += hex[0];  // --> First, HARDCODE el value.
// }
// colors.textContent = hexColor;
// document.body.style.backgroundColor = hexColor;
// Que sucede?
// HexColor --> contains # + 6 Array Numbers
// for loop --> Iteramos del 0 al 6 (6 indexes del Array) {Add randomNumber (del array) a HexColor}
// Damos contenido al SPAN y BG color Hex
//
// 3) Generamos Random Number from Array:
function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
