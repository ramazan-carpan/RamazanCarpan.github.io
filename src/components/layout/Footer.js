import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <a href="mailto:ramazan.carpan@outlook.com" className="footer__link">
          ramazan.carpan@outlook.com
        </a>
        <span> | </span>
        <a href="tel:+610431561355" className="footer__link">
          +61 0431561355
        </a>
      </div>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://linkedin.com/in/ramazan-carpan-38797b2a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/ramazan-carpan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Ramazan Carpan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
