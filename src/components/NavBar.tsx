import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="AppNavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/text">Text Format</Link>
        </li>
        <li>
          <a target="_blank" rel="noreferrer noopener" href="https://holonow.github.io/holo-data/schedule.json">
            JSON
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
