/**
 * The data structure for a question option.
 */
interface QuestionOption {
  title: string;
  value: number;
}

/**
 * The data structure for a question.
 */
export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}
