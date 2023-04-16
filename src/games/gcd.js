import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const requirement = 'Find the greatest common divisor of given numbers.';
let tempCount = 0;
const gcdOperation = (firstNumber, secondNumber) => {
  while (secondNumber !== 0) {
    tempCount = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = tempCount;
  }
  return String(firstNumber);
};
const startGame = () => {
  const firstNumber = getRandomArbitrary(1, 100);
  const secondNumber = getRandomArbitrary(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcdOperation(firstNumber, secondNumber);
  return [question, answer];
};

export default () => firstGame(requirement, startGame);