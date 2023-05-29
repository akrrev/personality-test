import { Link, useSearchParams } from 'react-router-dom';
import { useGetTestResultQuery } from "../../redux/api.ts";

export default function Result() {
  const [ searchParams ] = useSearchParams();
  const score = searchParams.get('score');
  const { isLoading, isError } = useGetTestResultQuery({ score: Number(score as string) }, {
    skip: !score
  });

  return (
    <article className='page'>
      <h1>You're result is</h1>
      <hr/>
      {isLoading && (
        <p>being calculated...</p>
      )}
      {isError && (
        <>
          <p>We're sorry, but we cannot calculate your result.</p>
          <Link to='/quiz'>Take the quiz again?</Link>
        </>
      )}
    </article>
  );
}
