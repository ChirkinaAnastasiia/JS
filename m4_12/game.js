'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const INTERFACE_RUS = ['Вы - ', 'Компьютер - ', 'Вы выиграли!',
    'Компьютер выиграл!', 'Ничья!', 'Может ещё раз?', 'Результаты:'];

  const INTERFACE_ENG = ['You - ', 'Computer - ', 'You win!',
    'Computer wins!', 'Draw!', 'One more time?', 'Results:'];

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = (language) => {
    const answersArray = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;

    const interfaceArray = language === 'EN' || language === 'ENG' ?
    INTERFACE_ENG : INTERFACE_RUS;

    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const getPlayerAnswer = (answer) => {
        if (answer === null) {
          return;
        } else {
          answersArray.map(item => {
            if (item.startsWith(answer.toLowerCase()) && answer !== '') {
              answer = item;
            }
          });
        }

        return answer;
      };

      const playerAnswer = getPlayerAnswer(prompt(`${answersArray}?`));
      console.log('playerAnswer: ', playerAnswer);


      const getComputerAnswer = (num) => {
        if (num === 0) {
          return answersArray[0];
        }
        if (num === 1) {
          return answersArray[1];
        }
        if (num === 2) {
          return answersArray[2];
        }
      };

      const computerAnswer = getComputerAnswer(getRandomNumber(0, 2));
      console.log('computerAnswer: ', computerAnswer);


      const play = (player, computer) => {
        if (player === undefined) {
          const end = confirm(interfaceArray[5]);
          if (end) {
            return start();
          } else {
            return alert(`${interfaceArray[6]}\n${interfaceArray[0]}` +
            `${result.player}\n${interfaceArray[1]} ${result.computer}`);
          }
        }

        if (player !== answersArray[0] && player !== answersArray[1] &&
            player !== answersArray[2]) {
          return start();
        }

        if (player === answersArray[0] && computer === answersArray[0] ||
          player === answersArray[1] && computer === answersArray[1] ||
          player === answersArray[2] && computer === answersArray[2]) {
          alert(`${interfaceArray[0]} ${player}\n${interfaceArray[1]}` +
            `${computer}\n${interfaceArray[4]}`);

          return start();
        }

        if (player === answersArray[0] && computer === answersArray[1] ||
          player === answersArray[1] && computer === answersArray[2] ||
          player === answersArray[2] && computer === answersArray[0]) {
          alert(`${interfaceArray[0]} ${player}\n${interfaceArray[1]}` +
            `${computer}\n${interfaceArray[2]}`);

          result.player += 1;
          return start();
        }

        if (player === answersArray[0] && computer === answersArray[2] ||
          player === answersArray[1] && computer === answersArray[0] ||
          player === answersArray[2] && computer === answersArray[1]) {
          alert(`${interfaceArray[0]} ${player}\n${interfaceArray[1]}` +
            `${computer}\n${interfaceArray[3]}`);

          result.computer += 1;
          return start();
        }
      };

      play(playerAnswer, computerAnswer);
    };
  };

  window.rps = game;
})();
