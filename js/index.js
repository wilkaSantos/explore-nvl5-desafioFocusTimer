import { AlertError } from './error.js';
import { Sound } from './songsButtons.js';
import { Controls } from './controls.js';
import { RegressiveCounter } from './stopwatch.js';

const minuteDisplay = document.querySelector('.minuto');
const secondDisplay = document.querySelector('.segundo');

const buttonPlay = document.querySelector('.bt-play');
const buttonStop = document.querySelector('.bt-stop');
const buttonIncrement = document.querySelector('.bt-incremento');
const buttondecrement = document.querySelector('.bt-decrescimo');

const buttonForestSound = document.querySelector('.bt-floresta');
const buttonRainSound = document.querySelector('.bt-chuva');
const buttonCoffeShopSound = document.querySelector('.bt-cafeteria');
const buttonFirePlaceSound = document.querySelector('.bt-lareira');


buttonPlay.addEventListener('click', startCounter);
buttonStop.addEventListener('click', stopCounter);
buttonIncrement.addEventListener('click', addTime);
buttondecrement.addEventListener('click', removeTime);
buttonForestSound.addEventListener('click', forestSound);
buttonRainSound.addEventListener('click', rainSound);
buttonCoffeShopSound.addEventListener('click', coffeShopSound);
buttonFirePlaceSound.addEventListener('click', fireplaceSound);


const controls = Controls({ minuteDisplay });
const counter = RegressiveCounter({ minuteDisplay, secondDisplay });
const buttonSound = Sound({ buttonForestSound, buttonRainSound, buttonCoffeShopSound, buttonFirePlaceSound });


/* = = = =  bottuns Counter = = = = */

function startCounter(){
    if (minuteDisplay.textContent == 0) {
        AlertError.activeAlert();
    } else {
        console.log('Play');
        counter.counter();
    }
}

function stopCounter(){
    console.log('Stop');
    counter.stopCounter();
}

function addTime(){
    controls.moreTime();
    AlertError.desableAlert();
}

function removeTime(){
    if(minuteDisplay.textContent == 0){
        AlertError.activeAlert();
    }else{
        controls.lessTime();
    }    
}

/* = = = =  Buttons Sound  = = = = */

function forestSound(){
    buttonSound.activeSoundForest();
    buttonSound.activeButtonForest();
}

function rainSound(){
    buttonSound.activeSoundRain();
    buttonSound.activeButtonRain();
}

function coffeShopSound(){
    buttonSound.activeSoundCoffeeShop();
    buttonSound.activeButtonCoffeeShop();
}

function fireplaceSound(){
    buttonSound.activeSoundFirePlace();
    buttonSound.activeButtonFire();
}
