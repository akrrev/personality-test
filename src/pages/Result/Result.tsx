import { Link, useSearchParams } from 'react-router-dom';
import { useGetTestResultQuery } from 'redux/api.ts';
import './styles.scss';

export default function Result() {
  const [ searchParams ] = useSearchParams();
  const score = searchParams.get('score');
  const { data, isLoading, isError } = useGetTestResultQuery({ score: Number(score as string) }, {
    skip: !score
  });

  return (
    <article className='page'>
      <h1>Your result is</h1>
      <hr/>
      <div className='result-content'>
        {isLoading && (
          <p className='loading'>being calculated...</p>
        )}
        {data && (
          <p className='result'>{data.trait}</p>
        )}
        {isError && (
          <div className='error-wrapper'>
            <p>
              We're sorry, but we cannot calculate your result.
            </p>
            <Link to='/quiz'>Take the quiz again?</Link>
          </div>
        )}
      </div>
      <hr/>
    </article>
  );
}
