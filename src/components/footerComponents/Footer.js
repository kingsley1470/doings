import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaUsers } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us at info@example.com</p>
        <div className="footer-links">
          <a href="/">
            <FaHome />
          </a>
          <a href="/members">
            <FaUsers />
          </a>
          <a href="/about">
            <FaInfoCircle />
          </a>
          <a href="/contact">
            <FaEnvelope />
          </a>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
