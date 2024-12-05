import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div>
      <a href="mailto:ramazan.carpan@outlook.com" className="footer__link">
        ramazan.carpan@outlook.com
      </a>
      </div>
      <div>
      <a href="tel:+610431561355" className="footer__link">
        +61 0431561355
      </a>
      </div>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li class="social-list__item">
            <a class="social-list__link" href="http://instagram.com">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li class="social-list__item">
            <a class="social-list__link" href="https://twitter.com">
                <i class="fab fa-twitter"></i>
            </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
