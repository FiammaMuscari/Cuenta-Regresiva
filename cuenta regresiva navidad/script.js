//funciones para seleccionar el elemento que cambia
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const xMas = '25 Dec 2021'; //constante con el dia de la fecha

function countdown(){  //funcion cuenta regresiva
    const navidadDate = new Date(xMas); //fecha que quiero 
    const currentDate = new Date(); //dia de hoy

    const totalSeconds = (navidadDate - currentDate) / 1000; //diferencia entre ambas fechas

    const days = Math.floor(totalSeconds / 3600 / 24); //dias
    const hours = Math.floor(totalSeconds / 3600) % 24; //horas
    const mins = Math.floor(totalSeconds / 60) % 60; //minutos
    const seconds = Math.floor(totalSeconds) % 60; //segundos

    /*console.log(days, hours, minutes, seconds); verificar en consola */
    //constantes para activar el cambio entre los elementos y las funciones de arriba
    daysEl.innerHTML = formatTime(days); //agregamos format time para que siempre haya 2 cifras (con un cero adelante) cuando el numero sea menor a 10
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

//formato tiempo para agregar cero a numeros menores a 10
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//llamada inicial
countdown();
setInterval(countdown, 1000);

