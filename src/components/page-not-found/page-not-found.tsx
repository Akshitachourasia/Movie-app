
import { Link } from "react-router-dom";
import "./page-not-found.scss";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="error-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
