/**
 * The data structure for a question option.
 */
export interface MultipleChoiceOption {
  id: string,
  title: string;
  score: number;
}

/**
 * The data structure for a question.
 */
export interface Question {
  id: number;
  question: string;
  options: MultipleChoiceOption[];
  lastQuestion?: boolean;
}

export interface Quiz {
  id: number;
  minScore: number;
  maxScore: number;
  questions: Question[];
}

/**
 * The test data used to calculate the result.
 */
export interface TestSubmissionRequestArg {
  score: number;
}

/**
 * The validated test result.
 */
export interface TestResultResponse {
  score: number;
  trait: PersonalityTrait;
}

/**
 * The personality traits assessed in this test.
 */
export enum PersonalityTrait {
  Introvert = 'Introvert',
  Both = 'A bit of both 😉',
  Extrovert = 'Extrovert',
}
