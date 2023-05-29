import { useState } from 'react';
import { MultipleChoiceOption, Question } from 'server/types.ts';
import './styles.scss';

type QuestionItem = Question & {
  active: boolean;
  onAnswer: (id: number, score: number) => void;
}

export default function Question({
  id,
  active,
  question,
  options,
  onAnswer,
}: QuestionItem) {
  const [selectedOption, setSelectedOption] = useState<MultipleChoiceOption | null>(null);

  return (
    <section className={`${!active ? 'hidden' : ''} question`}>

      <hr/>
      <h2 className="question-title">{question}</h2>
      <hr/>
      {options.map((option, index) => {
        const activeOption = selectedOption && selectedOption.id === option.id;
        return (
          <button
            key={option.id}
            className={`${activeOption ? 'selected' : '' } question-option`}
            onClick={() => setSelectedOption(option)}>{index + 1} – {option.title}
          </button>
        );
      })}
      <div className="center-action">
        <button
          disabled={!selectedOption}
          onClick={() => onAnswer(id + 1, selectedOption?.score || 0)}
          className="question-submit"
        >
          Submit answer
        </button>
      </div>
    </section>
  );
}
