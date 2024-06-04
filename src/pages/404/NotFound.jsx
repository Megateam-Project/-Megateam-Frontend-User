import "./style.css"; 
import { Link } from 'react-router-dom';
export function NotFound() {

  return (
    <div id="notfound">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900"
        rel="stylesheet"
      />

      <div className="notfound">
        <div className="notfound-404">
            <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
}