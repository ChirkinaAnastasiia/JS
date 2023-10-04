'use strict';

(() => {
  let playerScore = 0;
  let computerScore = 0;

  let playerBalls = 5;
  let computerBalls = 5;

  const gameFigures = ['камень', 'ножницы', 'бумага'];
  let playerPriority = 0;
  let computerPriority = 0;

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

    if (Number.isNaN(+move) || move === '' || !(move.trim()) ||
        +move < 1 || +move > playerBalls) {
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
      alert(`Некорректные данные! ` +
      `У компьютера остался только один шарик, нужно ввести 'odd'.`);

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

    const playerMove = isCorrectPlayerMove(prompt(
        `Ты: ${playerBalls}\nКомпьютер: ${computerBalls}\n` +
        `Загадай число от 1 до ${playerBalls}:`));

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

      alert(`Компьютер угадал! Шарики переходят к компьютеру. ` +
        `У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
      return;
    }

    if (playerMove % 2 === 0 && computerGuess === 1 ||
        playerMove % 2 !== 0 && computerGuess === 2) {
      playerBalls += playerMove;
      computerBalls -= playerMove;

      alert(`Компьютер не угадал! Шарики переходят к тебе. ` +
        `У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
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

    const playerGuess = isCorrectPlayerGuess(prompt(
        `Ты: ${playerBalls}\nКомпьютер: ${computerBalls}\n` +
        `Компьютер загадал число. ` +
        `Твоя очередь угадывать, нужно ввести 'even' или 'odd':`));

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

      alert(`Ты угадал! Шарики переходят к тебе. ` +
        `У тебя осталось: ${playerBalls < 0 ? 0 : playerBalls}.`);
      return;
    }

    if (playerGuess === 'even' && computerMove % 2 !== 0 ||
        playerGuess === 'odd' && computerMove % 2 === 0) {
      playerBalls -= computerMove;
      computerBalls += computerMove;

      alert(`Ты не угадал! Шарики переходят к компьютеру. ` +
        `У тебя осталось: ${playerBalls < 0 ? 0 : playerBalls}.`);
      return;
    }
  };

  // определяем очередность - камень-ножницы-бумага
  const playPriorityGame = () => {
    const getPlayerAnswer = (answer) => {
      if (answer === null) {
        return;
      } else {
        gameFigures.map(item => {
          if (item.startsWith(answer.toLowerCase()) && answer !== '') {
            answer = item;
          }
        });
      }

      return answer;
    };

    const playerAnswer = getPlayerAnswer(prompt(`Камень, ножницы или бумага?`));

    const getComputerAnswer = (num) => {
      if (num === 0) {
        return gameFigures[0];
      }
      if (num === 1) {
        return gameFigures[1];
      }
      if (num === 2) {
        return gameFigures[2];
      }
    };

    const computerAnswer = getComputerAnswer(getRandomNumber(0, 2));

    const play = (player, computer) => {
      if (player === undefined) {
        if (confirm('Закончить игру?')) {
          return alert('Конец игры!');
        } else {
          return playPriorityGame();
        }
      }

      if (player !== gameFigures[0] && player !== gameFigures[1] &&
          player !== gameFigures[2]) {
        alert('Некорректные данные! ' +
          'Нужно ввести "камень", "ножницы" или "бумага"!');

        return playPriorityGame();
      }

      if (player === computer) {
        alert(`Ты: ${player}\nКомпьютер: ${computer}\n` +
          `Ничья! Попробуем ещё раз!`);

        return playPriorityGame();
      }

      if (player === gameFigures[0] && computer === gameFigures[1] ||
        player === gameFigures[1] && computer === gameFigures[2] ||
        player === gameFigures[2] && computer === gameFigures[0]) {
        alert(`Ты: ${player}\nКомпьютер: ${computer}\n` +
          `Ты выиграл! В 3-м раунде ты загадываешь число первым!`);

        playerPriority += 1;
        return;
      }

      if (player === gameFigures[0] && computer === gameFigures[2] ||
        player === gameFigures[1] && computer === gameFigures[0] ||
        player === gameFigures[2] && computer === gameFigures[1]) {
        alert(`Ты: ${player}\nКомпьютер: ${computer}\n` +
          `Компьютер выиграл! В 3-м раунде он загадывает число первым!`);

        computerPriority += 1;
        return;
      }
    };

    play(playerAnswer, computerAnswer);
  };

  // начинаем "марблы"
  const startMarblesGame = () => function start() {
    alert('Начинаем игру "Марблы"!');

    // раунд 1
    alert('Раунд 1.\nТы загадываешь количество шариков. ' +
      'Компьютер пытается отгадать чётное или нечётное число ты загадал. ' +
      'Если он угадывает, то забирает эти шарики себе, если нет - его шарики ' +
      'достаются тебе. Проиграл тот, у кого не осталось шариков.');

    const startRoundOne = () => {
      const playerMove = playerMoveComputerGuess();
      if (playerMove === null) {
        if (confirm('Закончить игру?')) {
          return null;
        }
      }

      if (playerBalls < 1 || computerBalls < 1) {
        areBallsOver();

        return;
      }

      return startRoundOne();
    };

    const roundOne = startRoundOne();

    if (roundOne === null) {
      return alert('Конец игры!');
    }

    // раунд 2
    alert('Раунд 2.\nПравила те же, ' +
      'но вы загадываете и отгадываете по очереди!');

    const startRoundTwo = () => {
      const playerMove = playerMoveComputerGuess();

      let computerMove;

      if (playerMove === null) {
        if (confirm('Закончить игру?')) {
          return null;
        } else {
          return startRoundTwo();
        }
      }

      if (playerBalls < 1 || computerBalls < 1) {
        areBallsOver();

        return;
      } else {
        computerMove = computerMovePlayerGuess();
        while (computerMove === null) {
          if (confirm('Закончить игру?')) {
            return null;
          } else {
            computerMove = computerMovePlayerGuess();
          }
        }
      }

      if (playerBalls < 1 || computerBalls < 1) {
        areBallsOver();

        return;
      }

      return startRoundTwo();
    };

    const roundTwo = startRoundTwo();

    if (roundTwo === null) {
      return alert('Конец игры!');
    }

    // раунд 3
    alert('Раунд 3.\nСначала в "камень-ножницы-бумагу" решим, ' +
      'кто будет первым загадывать число. ' +
      'Затем играем также, как в предыдущем раунде!');

    playPriorityGame();

    const startRoundThree = (player, computer) => {
      if (player === 1) {
        startRoundTwo();

        return;
      }

      if (computer === 1) {
        const computerMove = computerMovePlayerGuess();

        let playerMove;

        if (computerMove === null) {
          if (confirm('Закончить игру?')) {
            return alert('Конец игры!');
          } else {
            return startRoundThree(playerPriority, computerPriority);
          }
        }

        if (playerBalls < 1 || computerBalls < 1) {
          areBallsOver();

          return;
        } else {
          playerMove = playerMoveComputerGuess();
          while (playerMove === null) {
            if (confirm('Закончить игру?')) {
              return alert('Конец игры!');
            } else {
              playerMove = playerMoveComputerGuess();
            }
          }
        }

        if (playerBalls < 1 || computerBalls < 1) {
          areBallsOver();

          return;
        }

        return startRoundThree(playerPriority, computerPriority);
      }
    };

    startRoundThree(playerPriority, computerPriority);

    if (playerScore > computerScore) {
      alert(`Поздравляю! Ты выиграл со счётом ` +
        `${playerScore > computerScore ? playerScore : computerScore} - ` +
        `${playerScore > computerScore ? computerScore : playerScore}!`);
    }

    if (playerScore < computerScore) {
      alert(`Компьютер выиграл со счётом ` +
        `${playerScore < computerScore ? computerScore : playerScore} - ` +
        `${playerScore < computerScore ? playerScore : computerScore}!`);
    }

    if (confirm('Хочешь сыграть ещё?')) {
      playerScore = 0;
      computerScore = 0;

      playerPriority = 0;
      computerPriority = 0;

      start();
    } else {
      alert('До встречи в следующий раз!');
    }
  };

  window.marbles = startMarblesGame;
})();
