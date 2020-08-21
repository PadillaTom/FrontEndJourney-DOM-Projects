// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
//
// EDIT option Variables que usaremos Luego:
let editElement;
let editFlag = false; // Como no la usamos al principio, la usamos False by default
let editID = '';
//
// ****** EVENT LISTENERS **********
// Submit Form -->
form.addEventListener('submit', addItem); // La func se Llama ADDITEM
// Clear Items -->
clearBtn.addEventListener('click', clearItems);
//
// Delete Individual Item --> Its Dynamic. So i need to acces the Dynamic Class
// Edit Individual Item --> Its Dynamic.  So i need to acces the Dynamic Class
//
// Load Items
window.addEventListener('DOMContentLoaded', setupItems);
// ****** FUNCTIONS **********
// ---> AddItem Function (FORM) --->
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
    // console.log('Adding Items'); // Para probar
    const element = document.createElement('article'); // Creamos Elemento donde alojar el ADD item
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id'); // Creamos un atributo al nuevo Article creado arriba
    attr.value = id;
    element.setAttributeNode(attr); // Ponemos dicho attribute
    element.innerHTML = `<p class="title">${value}</p>
                       <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    // ---> Delete BTN SELECTION --->
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    // Agregamos el Child
    list.appendChild(element);
    // Alerta green
    displayAlert('Item Added to the List', 'success');
    // Mostrar la Class de CSS que permite ver (show-container)
    container.classList.add('show-container');
    // ADD TO LOCAL STORAGE:
    addToLocalStorage(id, value);
    // BACK TO DEFAULT
    setBackToDefault();
  } else if (value && editFlag) {
    // Value NOT empty, EDITING
    // Queremos agarrar el INPUT y mandarlo al Article
    editElement.innerHTML = value;
    displayAlert('Item Changed', 'success');
    //LOCAL STORAGE EDIT:
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    // console.log('Empty Value'); // Probando
    // Previamente tenemos Classes hechas en CSS (danger / success)
    // alert.textContent = 'Empty Value';
    // alert.classList.add('alert-danger');
    // Mas Facil pasar una Funcion!
    displayAlert('Oops, Insert an Item Please', 'danger');
  }
}
//
// ---> Function de ALERT Danger and Success --->
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // Remove alert : En cuanto tiempo? 1000ms 1s.
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
//
// ---> ClearItems --->
function clearItems() {
  const items = document.querySelectorAll('.grocery-item'); // Seleccionamos todos los Items Added
  console.log(items);
  if (items.length > 0) {
    // Si HAY items (>0)
    items.forEach(function (item) {
      // Para cada uno de ellos
      list.removeChild(item); // Removerlo
    });
  }
  // Sacamos la CSS Class (Show-container):
  container.classList.remove('show-container');
  // Alert:
  displayAlert('List is Empty', 'danger');
  // LOCAL STORAGE remove
  localStorage.removeItem('list');
}
// ---> Set Back to Default --->
// Todo vuelve al valor inicial (Borrar la barra de input, normalmente queda lo ultimo escrito.)
function setBackToDefault() {
  // console.log('set Back to Default'); // Para ver en la consola que cuando add un item , se imprime algo.
  grocery.value = ''; // Input
  editFlag = false; // Para el IF
  editID = ''; //
  submitBtn.textContent = 'submit'; // Cada vez que suceda un evento, vuelve a decir Submit
}
//
// ---> Delete Individual Item --->
function deleteItem(e) {
  // Una vez que clickeemos el boton, queremos eliminar la Parent del item.
  // console.log('item Deleted');
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id; // Seleccionamos el ID
  // console.log(element); // Parent = Grocery-Item
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('Item Removed', 'danger');
  setBackToDefault();
  // LOCAL STORAGE REMOVE
  removeFromLocalStorage(id);
}
// ---> Edit Individual Item --->
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // Mismo Target que DELETE
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'Edit';
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  // console.log('added to local storage');
  const groceryList = { id, value }; // Asociamos el ID con Value en un OBJETO
  // console.log(groceryList); // Mostramos
  let items = localStorage.getItem('list') // PODRIAMOS USAR LA FUNC GETLOCALSTORAGE
    ? JSON.parse(localStorage.getItem('list'))
    : []; //Pedimos Item del LOCAL STORAGE usando TERNARY
  // TERNARY: SI HAY ITEMS: MOSTRAR, SINO ITEMS= EMPTY
  console.log(items);
  items.push(groceryList);
  localStorage.setItem('list', JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  // Queremos acceder al ID de cada Item
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      // Filtramos los items que NO match ID.
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
  // Editamos a partir de ID y su Value
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}
// Function de Get Local Storage, super rapida:
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
//
//*****COMO USAR LA LOCAL STORAGE****
//--->  Local Storage API: // Set Item // Get Item // Remove Item // Save as Strings
// localStorage.setItem('orange', JSON.stringify(['item', 'item2']));
// const oranges = JSON.parse(localStorage.getItem('orange'));
// console.log(oranges); // Vemos los valores pedidos de la Local Storage
// localStorage.removeItem("orange");
//
//
// ****** SETUP ITEMS **********
//// Tomar los Datos de la Local Storage y mostrarlos una vez cargada la page.
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add('show-container');
  }
}
// Creamos una function que contenga todo lo de ADDITEM para pasarla dentro del setup items
// Sería como crear de vuelta la lista con los dachos ya creados.
// FUNCTION
function createListItem(id, value) {
  // Value NOT empty, NOT EDITING
  // console.log('Adding Items'); // Para probar
  const element = document.createElement('article'); // Creamos Elemento donde alojar el ADD item
  element.classList.add('grocery-item');
  const attr = document.createAttribute('data-id'); // Creamos un atributo al nuevo Article creado arriba
  attr.value = id;
  element.setAttributeNode(attr); // Ponemos dicho attribute
  element.innerHTML = `<p class="title">${value}</p>
                       <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  // ---> Delete BTN SELECTION --->
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  // Agregamos el Child
  list.appendChild(element);
}
