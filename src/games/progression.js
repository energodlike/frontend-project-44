import firstGame from '../index.js';
import getRandomArbitrary from '../getRandomArbitrary.js';

const requirement = 'What number is missing in the progression?';
const getProgression = () => {
  let progressionValue = getRandomArbitrary(1, 100);
  const riseOfProgression = getRandomArbitrary(1, 5);
  const quantityOfNumbers = 10;
  const result = [];
  for (let i = 0; i < quantityOfNumbers; i += 1) {
    result.push(progressionValue);
    progressionValue += riseOfProgression;
  }
  return result;
};
const progressionGame = () => {
  const progression = getProgression();
  const hiddenNumber = getRandomArbitrary(1, 10);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
export default () => firstGame(requirement, progressionGame);
