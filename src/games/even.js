import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomArbitrary(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => firstGame(rules, generateRound);

export default runEvenGame;
