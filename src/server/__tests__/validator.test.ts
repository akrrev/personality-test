import { calculatePeronsalityTrait } from 'server/validator.ts';
import { PersonalityTrait } from 'server/mock-data.ts';

test('checks that a valid submission returns a result', () => {
  expect(calculatePeronsalityTrait(18, 5, 20)).toBe(PersonalityTrait.Extrovert);
})

test('that the back end returns null if bad data is provided', () => {
  expect(calculatePeronsalityTrait(0, 5, 20)).toBe(null);
})
