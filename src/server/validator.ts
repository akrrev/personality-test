import { PersonalityTrait } from 'server/types.ts';

/**
 * Calculates the personality trait for a given set of test data.
 * @param {number} score – The test score.
 * @param {number} minScore - The minimum score for the current test.
 * @param {number} maxScore - The maximum score for the current test.
 * @returns {PersonalityTrait | null} The result of the test data or null.
 */
export const calculatePersonalityTrait = (
  score: number,
  minScore: number,
  maxScore: number
): PersonalityTrait | null => {
  const middle = (maxScore - minScore) / 2 + minScore;
  const middleRangeTop = Math.round(middle * 1.1);
  const middleRangeBottom = Math.round(middle * 0.9);

  if (score <= maxScore && score > middleRangeTop) {
    return PersonalityTrait.Extrovert;
  } else if (score <= middleRangeTop && score >= middleRangeBottom) {
    return PersonalityTrait.Both;
  } else if (score < middleRangeBottom && score >= minScore) {
    return PersonalityTrait.Introvert;
  }

  // We couldn't calculate the result based on the provided data.
  return null;
}
