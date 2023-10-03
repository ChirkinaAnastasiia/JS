'use strict';

(() => {

})();


let playerScore = 0;
let computerScore = 0;

let playerBalls = 5;
let computerBalls = 5;

let playerPriority = 0;
let computerPriority = 1;

// получаем ответ от компьютера
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// проверяем число от игрока
const isCorrectPlayerMove = (move) => {
  if (move === null) {
    return null;
  }

  if (Number.isNaN(+move) || move === '' || !(move.trim()) || +move < 1 || +move > playerBalls) {
  alert(`Некорректные данные! Нужно ввести число от 1 до ${playerBalls}.`);
    return;
  }

  return +move;
};

// проверяем "чёт-нечет" игрока
const isCorrectPlayerGuess = (guess) => {
  if (guess === null) {
    return null;
  }

  if (guess !== 'even' && guess !== 'odd') {
    alert(`Некорректные данные! Нужно ввести 'even' или 'odd'.`);
    return;
  }

  if (computerBalls === 1 && guess === 'even') {
    alert(`Некорректные данные! У компьютера остался только один шарик, нужно ввести 'odd'.`);
    return;
  }

  return guess;
};

// проверяем остаток шариков
const areBallsOver = () => {
  if (playerBalls < 1) {
    computerScore += 1;
    playerBalls = 5;
    computerBalls = 5;
    return alert('Раунд закончен. Компьютер выиграл!');
  }

  if (computerBalls < 1) {
    playerScore += 1;
    playerBalls = 5;
    computerBalls = 5;
    return alert('Раунд закончен. Ты выиграл!');
  }
};

// шаг - игрок делает ход, компьютер угадывает
const playerMoveComputerGuess = () => {
  let computerGuess = getRandomNumber(1, 2);

  if (playerBalls === 1) {
    computerGuess = 1;
  }

  console.log('computerGuess', computerGuess);

  let playerMove = isCorrectPlayerMove(prompt(`Ты: ${playerBalls}\nКомпьютер: ${computerBalls}\nЗагадай число от 1 до ${playerBalls}:`));

  if (playerMove === null) {
    return null;
  }

  if (!playerMove) {
    return playerMoveComputerGuess();
  }
  
  console.log('playerMove', playerMove);

  if (playerMove % 2 === 0 && computerGuess === 2 ||
      playerMove % 2 !== 0 && computerGuess === 1) {
    playerBalls -= playerMove;
    computerBalls += playerMove;
    alert(`Компьютер угадал! Шарики переходят к компьютеру. У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
    return;
  }

  if (playerMove % 2 === 0 && computerGuess === 1 ||
      playerMove % 2 !== 0 && computerGuess === 2) {
    playerBalls += playerMove;
    computerBalls -= playerMove;
    alert(`Компьютер не угадал! Шарики переходят к тебе. У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
    return;
  }
};

// шаг - компьютер делает ход, игрок угадывает 
const computerMovePlayerGuess = () => {
  let computerMove = getRandomNumber(1, computerBalls);
  if (computerBalls === 1) {
    computerMove = 1;
  }
  console.log('computerMove', computerMove);

  let playerGuess = isCorrectPlayerGuess(prompt(`Ты: ${playerBalls}\nКомпьютер: ${computerBalls}\nКомпьютер загадал число. Твоя очередь угадывать, нужно ввести 'even' или 'odd':`));

  if (playerGuess === null) {
    return null;
  }

  if (!playerGuess) {
    return computerMovePlayerGuess();
  }

  if (playerGuess === 'even' && computerMove % 2 === 0 ||
      playerGuess === 'odd' && computerMove % 2 !== 0) {
    playerBalls += computerMove;
    computerBalls -= computerMove;
    alert(`Ты угадал! Шарики переходят к тебе. У тебя осталось: ${playerBalls < 0 ? 0 : playerBalls}.`);
    return;
  }

  if (playerGuess === 'even' && computerMove % 2 !== 0 ||
      playerGuess === 'odd' && computerMove % 2 === 0) {
    playerBalls -= computerMove;
    computerBalls += computerMove;
    alert(`Ты не угадал! Шарики переходят к компьютеру. У тебя осталось: ${playerBalls < 0 ? 0 : playerBalls}.`);
    return;
  }
};

// раунд 1
alert('Раунд 1.\nТы загадываешь количество шариков. Компьютер пытается отгадать чётное или нечётное число ты загадал. Если он угадывает, то забирает эти шарики себе, если нет - его шарики достаются тебе. Проиграл тот, у кого не осталось шариков.');
const startRoundOne = () => {
  let playerMove = playerMoveComputerGuess();
  if (playerMove === null) {
    if (confirm('Закончить игру?')){
      alert('Конец игры!');
      return;
    }
  }

  if (playerBalls < 1 || computerBalls < 1) {
    areBallsOver();
    return;
  } 

  return startRoundOne();
};
const roundOne = startRoundOne();
if (roundOne === undefined) {
  return alert(`Конец игры!`);
}

// раунд 2
alert('Раунд 2.\nПравила те же, но вы загадываете и отгадываете по очереди!');
const startRoundTwo = () => {
  let playerMove = playerMoveComputerGuess();
  let computerMove;

  if (playerMove === null) {
    if (confirm('Закончить игру?')){
      alert('Конец игры!');
      return;
    }
  }

  if (playerBalls < 1 || computerBalls < 1) {
    areBallsOver();
    return;
  } else {
    computerMove = computerMovePlayerGuess();
  }

  if (computerMove === null) {
    if (confirm('Закончить игру?')){
      alert('Конец игры!');
      return;
    }
  }

  return startRoundTwo();
};
const roundTwo = startRoundTwo();
if (roundTwo === undefined) {
  return alert(`Конец игры!`);
}

// раунд 3
alert('Раунд 3.\nСначала в "камень-ножницы-бумага" решим, кто будет первым загадывать число. Затем играем также, как в предыдущем раунде!');
const startRoundThree = (player, computer) => {
  if (player === 1) {
    startRoundTwo();
    return;
  }

  if (computer === 1) {
    let computerMove = computerMovePlayerGuess();
    let playerMove;

    if (computerMove === null) {
      if (confirm('Закончить игру?')){
        alert('Конец игры!');
        return;
      }
    }
  
    if (playerBalls < 1 || computerBalls < 1) {
      areBallsOver();
      return;
    } else {
      playerMove = playerMoveComputerGuess();
    }

    if (playerMove === null) {
      if (confirm('Закончить игру?')){
        alert('Конец игры!');
        return;
      }
    }

    if (playerBalls < 1 || computerBalls < 1) {
      areBallsOver();
      return;
    }
  }

  return startRoundThree(playerPriority, computerPriority);
};
const roundThree = startRoundThree(playerPriority, computerPriority);




console.log('plscore', playerScore);
console.log('cmscore', computerScore);

console.log('plballs', playerBalls);
console.log('cmballs', computerBalls);
