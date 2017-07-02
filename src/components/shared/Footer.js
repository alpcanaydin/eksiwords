import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <nav className="Footer-menu">
      <a
        href="https://github.com/alpcanaydin/eksiwords"
        className="Footer-menu__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        kaynağı görüntüle
      </a>

      <a
        href="https://twitter.com/alpcanaydin"
        className="Footer-menu__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        @alpcanaydin
      </a>

      <a
        href="https://twitter.com/echojanz"
        className="Footer-menu__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        @echojanz
      </a>
    </nav>
  </footer>
);

export default Footer;
