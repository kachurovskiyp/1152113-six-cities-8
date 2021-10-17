import { BrowserRouter, Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <h2 style={{textAlign: 'center'}}>404 Not found</h2>
      <p style={{textAlign: 'center'}}>
        Page not found.
        <br/>
        <br/>
        <BrowserRouter>
          <Link to="/">Go to main page</Link>
        </BrowserRouter>
      </p>
    </div>
  );
}

export default NotFound;
