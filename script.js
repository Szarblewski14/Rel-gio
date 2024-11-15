let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

//new page 

let minutosNew = document.querySelector('#minutosNew')
let segundosNew = document.querySelector('#segundosNew')
let milesimos = document.querySelector('#milesimos')

let inicar = document.querySelector('#go')
let parar = document.querySelector('#stop')
let continuar = document.querySelector('#continuar')
let reiniciar = document.querySelector('#reiniciar')

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

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



inicar.addEventListener('click', startTime)
parar.addEventListener('click', pauseTimer)
continuar.addEventListener('click', continuarTimer)
reiniciar.addEventListener('click', resetTimer)

function startTime(){

    interval = setInterval (() => {

        if(!isPaused) {

            milliseconds += 10;

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutosNew.textContent = formatTime(minutes)
            segundosNew.textContent = formatTime(seconds)
            milesimos.textContent = formatMilliseconds(milliseconds)
        }

    },10)

    inicar.style.display = 'none';
    parar.style.display = 'block';
}

parar.style.display = 'none'
continuar.style.display = 'none'


function pauseTimer(){
    isPaused = true
    parar.style.display = 'none';
    continuar.style.display = 'block';
}

function continuarTimer (){
    isPaused = false
    parar.style.display = 'block'
    continuar.style.display = 'none'
}

function resetTimer (){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutosNew.textContent = '00'
    segundosNew.textContent = '00'
    milesimos.textContent = '000'

    inicar.style.display = 'block'
    continuar.style.display = 'none'
    parar.style.display = 'none'
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}




function newPage (){
    window.location = 'new.html';
}

function voltarHtml (){
    window.location = 'index.html';
}

