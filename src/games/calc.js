import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomArbitrary(0, operators.length - 1)];
};

const calculateOperations = (firstOperand, secondOperand, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return `${firstOperand + secondOperand}`;
    case '-':
      return `${firstOperand - secondOperand}`;
    case '*':
      return `${firstOperand * secondOperand}`;
    default:
      throw new Error(`Unknown operator: '${randomOperator}'`);
  }
};

const generateRound = () => {
  const randomOperator = getRandomOperator();
  const firstOperand = getRandomArbitrary(0, 10);
  const secondOperand = getRandomArbitrary(0, 10);
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const answer = calculateOperations(firstOperand, secondOperand, randomOperator);
  return [question, answer];
};

const runCalcgame = () => firstGame(rules, generateRound);

export default runCalcgame;
