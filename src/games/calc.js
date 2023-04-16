import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const requirement = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculateOperations = (randomOperator, firstOperand, secondOperand) => {
  let result = 0;
  switch (randomOperator) {
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '+':
      result = firstOperand + secondOperand;
      break;
    default:
      result = firstOperand - secondOperand;
      break;
  }
  return String(result);
};
const startGame = () => {
  const randomOperator = operators[getRandomArbitrary(0, 3)];
  const firstOperand = getRandomArbitrary(0, 10);
  const secondOperand = getRandomArbitrary(0, 10);
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const answer = calculateOperations(randomOperator, firstOperand, secondOperand);
  return [question, answer];
};
export default () => firstGame(requirement, startGame);
