// Colores que usaremos en SIMPLE
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
// 1) Seleccionamos:
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
// 2) Agregamos Evento:
btn.addEventListener('click', function () {
  // Select colors of the Array (entre 0 y 3)
  const randomNumber = getRandom(); // First, HARDCODE el number para ver que funciona
  //Damos dicho Number al BG
  document.body.style.backgroundColor = colors[randomNumber];
  //Damos dicho color al SPAN
  color.textContent = colors[randomNumber];
});
// 3) CB Function para el RandomNumber
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
// Que Sucede?
// Primero --> Seleccionamos los elementos que intervienen.
// Segundo --> Damos vida al boton, con click nos genera un RandomNumber (floor entre 0 y la cantidad en Array)
// Segundo BIS --> Creamos la funcion que nos dará el Numero Random.
// Tercero --> Una vez tenemos el color: Lo usamos como BG y se lo damos a la SPAN
