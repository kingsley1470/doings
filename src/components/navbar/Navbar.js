import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span className="navbar-time">{currentTime.toLocaleTimeString()}</span>;
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
      <ul
        ref={menuRef}
        className={`navbar-list ${isExpanded ? 'navbar-expanded' : ''}`}
      >
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/members" className="navbar-link">
            Members
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
      <Time />
    </nav>
  );
}

export default Navbar;
