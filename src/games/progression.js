import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const startOfProgression = getRandomArbitrary(1, 100);
  const lengthOfProgression = getRandomArbitrary(5, 10);
  const stepOfProgression = getRandomArbitrary(1, 10);
  const progression = getProgression(startOfProgression, lengthOfProgression, stepOfProgression);
  const hiddenIndex = getRandomArbitrary(0, lengthOfProgression - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgressionGame = () => firstGame(rules, generateRound);

export default runProgressionGame;
