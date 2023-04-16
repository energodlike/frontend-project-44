import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const isEven = (num) => num % 2 === 0;

const requirement = 'Answer "yes" if number is even, otherwise answer "no".';

const evenGame = () => {
  const question = getRandomArbitrary(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => firstGame(requirement, evenGame);
