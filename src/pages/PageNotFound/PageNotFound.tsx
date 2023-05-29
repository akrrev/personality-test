import { Link } from 'react-router-dom';
import './styles.scss';

export default function PageNotFound() {
  return (
    <article className='page'>
      <div className='status-code'>404</div>
      <hr/>
      <h1>We're sorry</h1>
      <p className='description'>The requested page could not be found.</p>
      <Link to='/' className='home-link'>Go Back</Link>
      <hr/>
    </article>
  );
}
