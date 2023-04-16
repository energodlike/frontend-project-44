import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const requirement = 'Find the greatest common divisor of given numbers.';
const gcdOperation = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return String(gcdOperation(secondNumber, firstNumber % secondNumber));
};
const gcdGame = () => {
  const firstNumber = getRandomArbitrary(1, 100);
  const secondNumber = getRandomArbitrary(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcdOperation(firstNumber, secondNumber);
  return [question, answer];
};

export default () => firstGame(requirement, gcdGame);
