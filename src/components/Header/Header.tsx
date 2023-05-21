import './styles.scss';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="home-link">Personality Test</Link>
      </div>
    </header>
  );
}
