import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
