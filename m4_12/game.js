'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const game = (language) => {
    const answersArray = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;
  
    const result = {
      player: 0,
      computer: 0,
    };
  
    return function start() {
      const getPlayerAnswer = (answer) => {
        if (answer === null) {
          const end = confirm('Ещё?');
          if (end) {
            return start(language);
          } else {
          return alert(`Результат:\nВы - ${result.player}\nКомпьютер - ${result.computer}`);
          }
    
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
      // console.log('playerAnswer: ', playerAnswer);
    
    
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
      // console.log('computerAnswer: ', computerAnswer);
    
    
      const play = (player, computer) => {
        if (player !== answersArray[0] && player !== answersArray[1] && player !== answersArray[2]) {
          return start(language);
        }
    
        if (player === answersArray[0] && computer === answersArray[0] ||
          player === answersArray[1] && computer === answersArray[1] ||
          player === answersArray[2] && computer === answersArray[2]) {
          alert(`Вы: ${player}\nКомпьютер: ${computer}\nНичья!`);
          return start(language);
        }
    
        if (player === answersArray[0] && computer === answersArray[1] ||
          player === answersArray[1] && computer === answersArray[2] ||
          player === answersArray[2] && computer === answersArray[0]) {
          alert(`Вы: ${player}\nКомпьютер: ${computer}\nВы выиграли!`);
          result.player += 1;
          return start(language);
        }
    
        if (player === answersArray[0] && computer === answersArray[2] ||
          player === answersArray[1] && computer === answersArray[0] ||
          player === answersArray[2] && computer === answersArray[1]) {
          alert(`Вы: ${player}\nКомпьютер: ${computer}\nВы проиграли!`);
          result.computer += 1;
          return start(language);
        }
      };

      play(playerAnswer, computerAnswer);
    };
  };
  
  window.RPS = game;
})();