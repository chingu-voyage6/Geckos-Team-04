import { dogTraining } from './dogTraining';
import { handyman } from './handyman';
import { localMoving } from './localMoving';
import { personalTraining } from './personalTraining';
import { houseCleaning } from './houseCleaning';

export const serviceQuestions = {
  'house-cleaning': houseCleaning,
  'dog-training': dogTraining,
  handyman,
  'local-moving': localMoving,
  'personal-training': personalTraining,
};
