// Reviews en fromato Array of Objects:
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// Normally this data we woud get it by AJAX and HTTP Request, this is getting our data Locally.
// 1) Seleccionamos
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// 2) Starting Item: que accederá al Array
let currentItem = 0;
// HardCode the initial Value, luego lo haremos por orden o random.
//
// 3) Load Initial Item
window.addEventListener('DOMContentLoaded', function () {
  // console.log('shake');
  // const item = reviews[currentItem]; // Aqui establecemos que el Index del array será Current Item
  // console.log(item);
  // img.src = item.img;
  // author.textContent = item.name;
  // job.textContent = item.job;
  // info.textContent = item.text;
  showPerson(currentItem);
});
// Cuando el documento es Loaded sucede X cosa (log para probar)
// Los valores de las CLasses los sacamos del Array, usando el parametro ".name, .img, .job, .text"
// Usamos esta function para comprobar que funciona! VER ITEM 4)
//
// 4) Mostraremos los Datos de manera mas sencilla, Usando una Function.
// ShowPerson: Practicamos las CB Function
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// Show Person: Si superamos el index 4, usamos un IF
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// Boton Random hecho por mi:
randomBtn.addEventListener('click', function () {
  currentItem = getRandom();
  showPerson(currentItem);
});
function getRandom() {
  return Math.floor(Math.random() * reviews.length);
}
// CONCLUSION: USAMOS UN TEXTCONTENT PARA REESCRIBIR LOS TEXTOS, AGARRANDO LA INFO DEL OBJETO DENTRO DEL ARRAY
//(USANDO .KEY)
