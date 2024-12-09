import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('nav-open', !isNavOpen); // Add/remove nav-open to/from <body>
  };

  const closeNavigation = () => {
    setIsNavOpen(false); // Close navigation menu
    document.body.classList.remove('nav-open'); // Remove nav-open class from <body>
  };

  return (
    <header>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNavigation}
      >
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <HashLink smooth to="/" className="nav__link" onClick={closeNavigation}>
              Home
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink smooth to="/#services" className="nav__link" onClick={closeNavigation}>
              My Services
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink smooth to="/#about" className="nav__link" onClick={closeNavigation}>
              About Me
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink smooth to="/#work" className="nav__link" onClick={closeNavigation}>
              My Work
            </HashLink>
          </li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
