import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <article>
      <h1>Are your personality traits "Introvert" or "Extrovert"?</h1>
      <div className="center-action">
        <Link to="/quiz" className="action">Take the quiz</Link>
      </div>
    </article>
  );
}
