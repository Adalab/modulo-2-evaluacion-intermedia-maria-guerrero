'use strict';


// TRAEMOS LOS ELEMENTOS HTML QUE VAMOS A UTILIZAR Y LES ASIGNAMOS UNA VARIABLE //
const selectOption = document.querySelector('.js_select');
const inputButton = document.querySelector('.js_input_button');
const lestPlay = document.querySelector('.js_lets_play');
const inputButtonReset = document.querySelector('.js_input_buttonReset');

const playerScore = document.querySelector('.js_player_score');
const pcScore = document.querySelector('.js_computer_score');

let player = 0;
let computer = 0;


// CREAMOS LAS FUNCIONES //

// Función que generará un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

// Función que generará el resultado del usuario y del PC en función del valor
function changeOptionsGame(computerValue) {

    // Creamos la variable del valor del usuario
    const playerValue = selectOption.value;

    if(playerValue  === computerValue) {
        lestPlay.innerHTML = 'Empate';

        } else if(playerValue === 'rock') {

            if(computerValue === 'scissors') {
                lestPlay.innerHTML = '¡Has ganado!';
                player++;
            } else if(computerValue === 'paper') {
                lestPlay.innerHTML = '¡Has perdido!';
                computer++;
            }

        } else if(playerValue === 'paper') {

            if(computerValue === 'scissors') {
                lestPlay.innerHTML = '¡Has perdido!'
                computer++;
            } else if(computerValue === 'rock') {
                lestPlay.innerHTML = '¡Has ganado!';
                player++;
            }

        } else if(playerValue === 'scissors') {

            if(computerValue === 'rock') {
                lestPlay.innerHTML = '¡Has perdido!';
                computer++;
            } else if(computerValue === 'paper') {
                lestPlay.innerHTML = '¡Has ganado!';
                player++;
            }
        }
    // Dentro de la función generamos el resultado de 'Jugador' y 'Ordenador'
    playerScore.innerHTML = 'Jugador:  ' + player;
    pcScore.innerHTML = 'Ordenador:  ' + computer;
}

// Función donde decimos qué elegirá el ordenador según el número aleatorio
function randomMove() {

    const randomNum = getRandomNumber(10);

    let computerSelection;

   if(randomNum < 3) {
    computerSelection = 'rock';
   } else if(randomNum >= 6) {
        computerSelection = 'paper';
   } else {
        computerSelection = 'scissors';
   }

   return computerSelection;
}

// Función para cuando el juego llegue a 10 movimientos, finalizar
function tenMovements() {

    let totalMovements = player + computer;

    if(totalMovements <= 9) {
        inputButtonReset.classList.add('hidden2');
        inputButton.classList.add('buttonStyles');
    } else {
        inputButtonReset.classList.remove('hidden2');
        inputButton.classList.add('hidden1');
    }

}

// Contenedor de funciones donde se ejecutarán todas
function handleClickUpdate(event) {
    event.preventDefault();
    let computerValue = randomMove(); // <-- Creamos una variable que contenga la función randomMove(), y así poder usarla en la función changeOptionsGame.
    changeOptionsGame(computerValue); // <-- A la función changeOptionsGame le asignamos el parámetro de la variable computerValue, el cual contiene la función randomMove.
    tenMovements();
}


// CREAMOS EL EVENTO //
inputButton.addEventListener('click', handleClickUpdate);