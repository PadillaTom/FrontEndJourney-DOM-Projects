// Tenemos el HTML y CSS hechos:
// 1) Creamos un Contador Inicial
let count = 0;
// 2) Seleccionamos Value y Botones
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// console.log(btns); // Nos tira NodeList, no acepta todos los ArrayMethods.
// 3) Creamos la function para CLICK de cada boton
btns.forEach(function (item) {
  //   console.log(item); // Corroboramos, nos imprime cada BTN por separado
  item.addEventListener('click', function (evt) {
    // console.log(evt.currentTarget.classList); // Vemos las clases que CONTIENE
    // Creamos var para alojar valores:
    const styles = evt.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--; //Decrease el Count
    } else if (styles.contains('increase')) {
      count++; // Increase el Count
    } else {
      count = 0; // Back to 0
    }
    //Damos Color:
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count == 0) {
      value.style.color = 'black';
    }
    //Cambiamos el TEXTO:
    value.textContent = count;
  });
});
