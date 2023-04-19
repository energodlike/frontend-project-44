import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdOperation = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return gcdOperation(secondNumber, firstNumber % secondNumber);
};

const generateRound = () => {
  const firstNumber = getRandomArbitrary(1, 100);
  const secondNumber = getRandomArbitrary(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcdOperation(firstNumber, secondNumber));
  return [question, answer];
};

const runGcdGame = () => firstGame(rules, generateRound);

export default runGcdGame;
