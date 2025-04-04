import React from 'react';
import './Footer.css';




function Footer() {
    return (
      <footer className="footer">
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src="src/assets/images/GitHub_logo.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src="src/assets/images/official-linkedin-logo----17.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;