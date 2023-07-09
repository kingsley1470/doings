import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeSwitch = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    const darkMode = !darkModeEnabled;
    setDarkModeEnabled(darkMode);
    if (darkMode) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark-mode');
    // Additional logic for enabling dark mode
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark-mode');
    // Additional logic for disabling dark mode
  };

  return (
    <div className="dark-mode-switch">
      <button
        id="darkModeSwitch"
        className={`mode-icon ${darkModeEnabled ? 'dark' : 'light'}`}
        onClick={toggleDarkMode}
      >
        {darkModeEnabled ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default DarkModeSwitch;
