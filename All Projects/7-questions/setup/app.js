//using selectors inside the element
// traversing the dom
//
// General Concepts
// Por Default los Question-text, Minus-icon
// no se ven (display:none)
// LO que tenemos que hacer es cuando este activa: SHOW TEXT
// display: block o inline o lo que sea necesaria.
// Descomentamos todo del CSS
//
//1) Traversing the DOM:
//Seleccionar los 3 question-btn, loop over them, add event
// making sure the parent gets it
// const buttons = document.querySelectorAll('.question-btn');
// buttons.forEach(function (btn) {
//   btn.addEventListener('click', function (evt) {
//     // console.log(evt.currentTarget.parentElement.parentElement); // Vemos que con el evento seleccionamos el button PARENT.(contiene plus y minuos)
//     const artParentQuestion = evt.currentTarget.parentElement.parentElement;
//     artParentQuestion.classList.toggle('show-text');
//   });
// });
// Cuando tocamos el BTN, quien es el Parent? ARTICLE: QUESTION!
// Entonces cuando encuentre el Parent agregarle la class SHOW TEXT
// ---> evt.currentTarget.parentElement.parentElement) <---
// Doble parentElement para atravesar el dom
// Neceistamos TOGGLE la SHOW TEXT a dicho ARTICLE QUESTION
//
// TRAVERSING DOM::
// Traversamos el DOM,
//seleccionamos los bottons,
//luego de ahi llegmaos a la Parent (article)
// del parent damos toggle.
//
//
//1 BIS ) SELECTORS
const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
  // console.log(question);  // Vemos cada Article Question
  const button = question.querySelector('.question-btn');
  // console.log(button); // Seleccionamos todos los botones.
  button.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});
// SELECTORS:
// Seleccionamos ALL Questions (dentro tienen text y botones)
// Dentro de Question, seleccionamos BTN (para cada articulo)
// A cada boton--> evento : Toggle SHOW TEXT a Question (Parent)

// Funcion que solo mantener abierto un btn:
// Para cada boton: (questions)
// ** Is the second article equal to my first one?
// IF --> Item clickeado(article) !== question (my first one)
// then: Remueve show-text del resto de items
