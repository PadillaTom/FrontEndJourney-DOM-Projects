const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// MENU: Normalmente we would get this data externally, using AJAX
// We get data, and display what we want. NOT YET!
// Display info fetched from API, DB, using AJAX ---> BREAD AND BUTTER
//
// 1) Select section center, why? To display info when the page is loaded, Dinamically!
// Para esto we need the PARENT!, to display them inside him.
// const sectionCenter = document.querySelector('.section-center');
// const filterBtns = document.querySelectorAll('.filter-btn');
//
// 2) Listen to the LoadContent event. (when the page loads)
// window.addEventListener('DOMContentLoaded', function () {
//   console.log('Hi'); // Para comprobar que funciona
// });
//
// 3) Que queremos hacer?
// Iterar por cada elemento del Array.
// Cada ARTICLE, contiene un IMG, H4, P, etc. (esta info está tambien en el Array)
// Queremos iterar los elementos del Array, asi tambien la Info de cada Elemento.
// Ademas meter dicha info en el HTML.
// window.addEventListener('DOMContentLoaded', function () {
// let displayMenu = menu.map(function (item) {
// With MAP i can modify each object
// console.log(item); // Muestra cada Object (item).
// return `<h1> ${item.title} </h1>`; // Gracias a MAP podemos return un template literal, con cada propiedad de ITEM
// En vez de return H1 TITLE... Pegamos el ARTICLE HTML!!!!!
//   return `<article class="menu-item">
//         <img src=${item.img} class="photo" alt="${item.title}" />
//         <div class="item-info">
//           <header>
//             <h4>${item.title}</h4>
//             <h4 class="price">${item.price}</h4>
//           </header>
//           <p>
//             ${item.desc}
//           </p>
//         </div>
//       </article>`;
// });
// 4) Then What? We want to display this inside our Section Center
// displayMenu = displayMenu.join(''); // Convertimos todo en un STRING
// console.log(displayMenu); // Muestra Array con Objects inside
//   sectionCenter.innerHTML = displayMenu;
// });
//
// CONCLUSION:
// We looked inside Array, we return the HTML with dynamic info.
// we joined them (each element) into a STR.
// we placed them in the Section-Center with InnerHTML
//
// ----> FACTORING <----
//In order to no repeat ourselves, is better to put everything inside a Function.
// Entonces creamos la DisplayMenuItems que dentro tendra la main function y la invokamos cuando el DOM Load
// window.addEventListener('DOMContentLoaded', function () {
//   displayMenuItems(menu);
// });

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p>
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}
//
// ----> FILTERING <----
// Creamos los buttons en HTML.
// Dentro de un DIV creamos los BTNS y sus clases. ademas de sus textos.
//
// ----> APPLYING FILTERING TO BTNS <----
// Seleccionamos los Filter BTNS y los ponemso sobre la function, donde van las selecciones.
// const filterBtns = document.querySelectorAll('.filter-btn');
// Filter Items.
// filterBtns.forEach(function (btn) {
//   btn.addEventListener('click', function (evt) {
//     console.log(evt.currentTarget.dataset.filtername);
// Debemos ir  al HTML BTN y agregar una propiedad: data-key="value" (ej: data-filtername="all") --> Value must match the ARRAY INFO
// const category = evt.currentTarget.dataset.filtername; // Lo alojamos en un var
// Sabemos que podemos filter la array y alojar datos en una nueva:
// const menuCategory = menu.filter(function (menuItem) {
//   return menuItem;
// });
//   });
// });

//
//
// FUNCTION COMPLETA: GRABING INFO AND FILTERING
// Select
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// Load
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

//
//
// ----> DYNAMIC BUTTONS!!!! <----
// Que pasa si se agrega una nueva categoria?
// Necesitariamos crear botones Dynamicos.
// Cuando se cambie la DATA, necesitamos que los botones sean dinamicos, y se agreguen o saquen a las nuevas categorias
// 1) Get Unique Categories, una de cada una de las que haya
// 2) Return buttons acorde a cada categoria
// 3) Solo  una vez dispuestos, seleccionar los btns.
// COMENTAMOS LOS BTNS EN HTML.

// Queremos Unique Categories. Necesitamos usar REDUCE:
// We have 2 parameters ( function, typeof) --> Usaremos (Function, ["all"])
// menu.reduce (function(){}, Array de STR ["ALL"]);

// Function para ser calleada dentro de window.load
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        // If Values(nuestro array) NO tiene item.category, then Add category to our Array.
        values.push(item.category);
      }
      return values;
    },
    ['all'] // Devolvemos un Array, con valor inicial "all"
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-filtername="${category}">
          ${category}
        </button>`;
    })
    .join('');
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

  // console.log(categories); // Vemos el nuevo array.

  // Filter
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      // console.log(evt.currentTarget.dataset.filtername);
      const category = evt.currentTarget.dataset.filtername;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category); // Devuelve ALL Category inside the ARRAY (for each item) we need to Filter THIS!
        if (menuItem.category === category) {
          // No hay Category ALL. Necesitamos otra IF
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu); // Si category all: Mostramos toda la function , con el menu Array. (all items)
      } else {
        displayMenuItems(menuCategory); // Si no es ALL: Show la Category dentro NEW ARRAY!!!! INCREIBLE
      }
      // console.log(menuCategory); // Nos devuelve TODOS LOS ITEMS DEL ARRAY, queremos un IF.
    });
  });
}
