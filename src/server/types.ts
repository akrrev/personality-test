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
