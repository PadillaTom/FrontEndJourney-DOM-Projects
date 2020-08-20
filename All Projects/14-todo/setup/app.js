// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
//
// edit option Variables que usaremos Luego:
let editElement;
let editFlag = false; // Como no la usamos al principio, la usamos False by default
let editID = '';
//
// ****** EVENT LISTENERS **********
// Submit Form -->
form.addEventListener('submit', addItem); // La func se Llama ADDITEM
//
// ****** FUNCTIONS **********
// AddItem Function (FORM)
function addItem(e) {
  e.preventDefault(); // Evitamos enviar el formulario a un servidor
  //   console.log(grocery.value); // Pedimos el VALUE del INPUT
  const value = grocery.value;
  // ESTO ES PARA TENER UN VALOR DE ID con cada SUBMIT. NO SE USA
  const id = new Date().getTime().toString();
  //   console.log(id); // Ver dicho ID
  //
  // IF PARA: Add, Edit, No Values Added
  if (value && !editFlag) {
    // Value NOT empty, NOT EDITING
    console.log('Adding Items'); // Para probar
  } else if (value && editFlag) {
    // Value NOT empty, EDITING
    console.log('editing'); // Probando
  } else {
    // console.log('Empty Value'); // Probando
    //Previamente tenemos Classes hechas en CSS (danger / success)
    // alert.textContent = 'Empty Value';
    // alert.classList.add('alert-danger');
    // Mas Facil pasar una Funcion!
    displayAlert('Oops, Insert an Item Please', 'danger');
  }
}
//
// Function de ALERT Danger and Success
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // Remove alert : En cuanto tiempo? 1000ms 1s.
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
