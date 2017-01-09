import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';

const App = ({ children }) =>
    <div>
        <h1>CH Test Project</h1>
        { children }
        <footer className={footer}>
          <Link to="/">Filterable Table</Link>
          <Link to="/about">About</Link>
          <Link to="/new/1">New Route</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
