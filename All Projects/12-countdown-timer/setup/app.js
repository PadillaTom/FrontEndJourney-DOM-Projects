const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// 1) Seleccionamos
const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//
// **ESTO ES AL FINAL, OTRO VIDEO**
// Hacer la DATE DYNAMIC!!!!!
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//
// 2) Show Date HARD CODED!!!!
// new Date (Year, Month (0 index), Date, Hours(24hs), etc)
// -----> // HARD CODED : // let futureDate = new Date(2025, 9, 26, 23, 59, 59);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 00, 00, 0); //La suma de numeros es para poner un contador a contar SIEMPRE.
// console.log(futureDate); // Para corroborar
// Debemos Seleccionar item por item de Date, así funciona.
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();
// Months es especial: Aqui usariamos el Array Para obtener el NOMBRE DEL MONTH
let month = futureDate.getMonth();
month = months[month - 1]; // Con el -1 obtenemos el MES correspondiente al NUMERO
// Date y Days (similar month)
const date = futureDate.getDate();
const weekDay = weekdays[futureDate.getDay()]; //  DAY --> Tira numero del dia de semana Index 0(sunday)
// !!!! Dynamic GIEVAWAY !!!!
giveaway.textContent = `Ends On ---> ${year}, ${month} ${weekDay} ${date} at ${hours}:${mins}:${secs}`;
//
//
// Future Time in MS
const futureTime = futureDate.getTime();
// console.log(futureTime);
// Para hacer un COUNTDOWN necesitamos: Ms para Future Date y Current Date.
// Restaremos el futuro con el current y tranformamos a Days, hours, etc
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t); // Ver el X factor a convertir
  // Values in MS:
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // Calculos --->
  // **DIAS RESTATNES**
  let daysLeft = t / oneDay;
  // console.log(daysLeft); //Comprobamos y hace falta FLOOR
  daysLeft = Math.floor(daysLeft);
  // console.log(daysLeft); // NUMERO REDONDO
  //
  // **HORAS RESTANTES**
  // Modulus = Necesitamos ver las Horas Restantes (sin incluir los dias ya escritos)
  // Para esto usamos MODULO, Tiempo total % DaysLeft = Horas restantes, descontando los dias ya pasados.
  let hoursLeft = Math.floor((t % oneDay) / oneHour); // A esto hay que Floor!
  // console.log(hoursLeft); // Corroboramos
  //
  // **MINS RESTANTES**
  let minsLeft = Math.floor((t % oneHour) / oneMin); // Modulus nos muestra lo restante una vez descontadas las horas
  // console.log(minsLeft);
  let secsLeft = Math.floor((t % oneMin) / 1000);
  //
  // UNA VEZ HECHO: Set Values en Array para disponerlos como ITEMS
  const values = [daysLeft, hoursLeft, minsLeft, secsLeft];
  // Si el valor es 0? ej: 0 dias, 20hs, etc.
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  // Los mostramos como ITEMS
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class="expired"> Giveaway ENDED! </h4>`;
  }
}

// HACEMOS EL COUNTDOWN!!!!!
let countdown = setInterval(getRemainingTime, 1000);

// INVOKAMOS
getRemainingTime();

// 1s = 1000ms
// 1m = 60s
// 1h = 60m
// 1day = 24hs
