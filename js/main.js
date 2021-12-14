'use strict';

// NOS TRAEMOS LOS ELEMENTOS HTML
const selectedElement = document.querySelector('.js_selected');
const randomResult = document.querySelector('.js_random_result');
const inputPlay = document.querySelector('.js_button');

const playerResult = document.querySelector('.js_playerResult');
const computerResult = document.querySelector('.js_computerResult');


// DEFINIMOS LAS

// Función que generará un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

function changeOptionsGame(resultVariable) {

    const valueEl = selectedElement.value;

    if (valueEl === resultVariable) {
        randomResult.innerHTML = 'Empate';

        } else if (valueEl === 'piedra') {

            if (resultVariable === 'tijera') {
                randomResult.innerHTML = '¡Has ganado!';
            } else if (resultVariable === 'papel') {
                randomResult.innerHTML = '¡Has perdido!';
            }

        } else if (valueEl === 'papel') {

            if (resultVariable === 'papel') {
                randomResult.innerHTML = 'Empate';
            } else if (resultVariable === 'tijera'){
                randomResult.innerHTML = '¡Has perdido!';
            }

        } else if (valueEl === 'tijera') {
            
            if (resultVariable === 'piedra') {
                randomResult.innerHTML = '¡Has ganado!'
            } else if ( resultVariable ==='papel') {
                randomResult.innerHTML = '¡Has ganado!'
            }
        }
    
    }

function randomNumEl() {
    // Generamos número aleatorio
    const randomNum = getRandomNumber(10);

    let computerSelection;

    if (randomNum < 3) {
    computerSelection = 'piedra';
    } else if (randomNum >= 6) {
        computerSelection = 'papel';
    } else {
        computerSelection = 'tijera';
    }

    return computerSelection;
}
   

function handleClickUpdate(event) {
    event.preventDefault();
    let resultVariable = randomNumEl();
    changeOptionsGame(resultVariable);
}

// CREAMOS EL EVENTO LISTENER
inputPlay.addEventListener('click', handleClickUpdate);