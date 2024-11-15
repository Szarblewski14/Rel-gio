let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

const relogio = setInterval(function time (){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seconds < 10) seconds = '0' + seconds;



    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seconds;

})