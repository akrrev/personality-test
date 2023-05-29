import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from 'components/Question/Question.tsx';
import { useGetQuestionsQuery } from 'redux/api.ts';
import './styles.scss';

export default function Quiz() {
  const { data } = useGetQuestionsQuery();
  const [activeQuestion, setActiveQuestion] = useState<number>(1);
  const [score, setScore] = useState(0);

  // Updates the total score and shows the next question.
  const submitAnswer = (id: number, questionScore: number) => {
    setScore(score + questionScore);
    setActiveQuestion(id);
  }

  const quizCompleted = data && data.length < activeQuestion;
  const title = quizCompleted
    ? `You've answered all questions`
    : (
      <>
        Answer the questions <span className="question-count">({activeQuestion}/{data?.length})</span>
      </>
    );

  return (
    <article className="page">
      <h1 className='heading-2'>
        {title}
      </h1>
        {data && data.map((item) =>
          <Question
            key={item.id}
            id={item.id}
            active={item.id === activeQuestion}
            question={item.question}
            options={item.options}
            lastQuestion={item.lastQuestion}
            onAnswer={(id, questionScore) => submitAnswer(id, questionScore)}
          />
        )}
        {quizCompleted && (
          <>
            <hr/>
            <div className="center-action">
              <Link to={`/result?score=${score}`} className="action result-link">See result</Link>
            </div>
          </>
        )}
    </article>
  )
}
