import { PersonalityTrait } from 'server/types.ts';
import { calculatePersonalityTrait } from 'server/validator.ts';

test('checks that a high score returns extrovert', () => {
  expect(calculatePersonalityTrait(18, 5, 20)).toBe(PersonalityTrait.Extrovert);
})

test('checks that a low score returns introvert', () => {
  expect(calculatePersonalityTrait(8, 5, 20)).toBe(PersonalityTrait.Introvert);
})

test('checks that a middle score returns "a bit of both"', () => {
  expect(calculatePersonalityTrait(12, 5, 20)).toBe(PersonalityTrait.Both);
})

test('checks that the back end returns null if bad data is provided', () => {
  expect(calculatePersonalityTrait(0, 5, 20)).toBe(null);
})
