import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaUsers } from 'react-icons/fa';
import './footer.css';

const Footer = ()=> {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us at rawmetal77@gmail.com</p>
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
        <p>&copy; 2023 Kingsley Nwachukwu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
