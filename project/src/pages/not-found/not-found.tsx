import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent:'center'}}>
    <h2>This is not the page you are looking for</h2>
    <h1>404</h1>
    <Link to="/" style={{ textDecoration: 'underline', color: 'blue'}}>go back</Link>
  </div>
);
