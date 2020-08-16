// Basics SIDEBAR:
// Por default escondemos la sidear : translate (-100%)
//Para mostrar, togglearemos una class de translate  -100%
// a otra class de translate 0.
//
// 1) Seleccionamos
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
//
// 2) Event modo largo: contains, add, remove
// toggleBtn.addEventListener('click', function () {
//   if (sidebar.classList.contains('show-sidebar')) {
//     sidebar.classList.remove('show-sidebar');
//   } else {
//     sidebar.classList.add('show-sidebar');
//   }
// });
//
// 3) Modo Toggle!
toggleBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
// 4) Close Btn: Queremos que al click  remueva la SHOWSIDEBAR
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
//
// CONCLUSION : LAS SIDEBAR SE MANEJAN CON TRANSLATE -100% AL 0.
// CLOSE BUTTON REMUEVE LA CLASS DE SHOWSIDEBAR
