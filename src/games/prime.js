import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const requirement = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const startGame = () => {
  const question = getRandomArbitrary(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => firstGame(requirement, startGame);
