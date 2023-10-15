import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="column-heading">Explore</h3>
        <ul className="column-list">
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="column-heading">Support</h3>
        <ul className="column-list">
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="column-heading">Stay Connected</h3>
        <div className="social-icons">
          <img src="facebook-icon-url" alt="Facebook" />
          <img src="twitter-icon-url" alt="Twitter" />
          <img src="instagram-icon-url" alt="Instagram" />
        </div>
      </div>
      <div className="footer-bottom">
        <h3 className="footer-heading">DEV@Deakin 2022</h3>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
