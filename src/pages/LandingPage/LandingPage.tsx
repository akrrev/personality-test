import { Link } from 'react-router-dom';
import { useGetQuestionsQuery } from '../../redux/api.ts';

export default function LandingPage() {
  const { isSuccess, isLoading } = useGetQuestionsQuery(undefined);

  return (
    <article className="page">
      <h1>Are your personality traits "Introvert" or "Extrovert"?</h1>
      <div className="center-action">
        {isLoading && (
          <div className="action">Loading quiz...</div>
        )}
        {!isLoading && isSuccess && (
          <Link to="/quiz" className="action">Take the quiz</Link>
        )}
      </div>
    </article>
  );
}
