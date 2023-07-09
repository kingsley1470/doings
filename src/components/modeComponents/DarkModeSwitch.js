import React, { useState } from 'react';
import Switch from 'react-switch';

const DarkModeSwitch = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleChange = (checked) => {
    setDarkModeEnabled(checked);
    if (checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark-mode');
    // Additional logic for enabling dark mode

    // Example logic: Update specific elements' styles for dark mode
    const elementsToModify = document.querySelectorAll('.dark-mode-element');
    elementsToModify.forEach((element) => {
      element.style.backgroundColor = '#333';
      element.style.color = '#fff';
    });

    
    document.documentElement.style.setProperty('--primary-color', '#ffffff');
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark-mode');
    //  logic for disabling dark mode

    //  Reset specific elements' styles to default for light mode
    const elementsToModify = document.querySelectorAll('.dark-mode-element');
    elementsToModify.forEach((element) => {
      element.style.backgroundColor = '';
      element.style.color = '';
    });

    //  Reset CSS variables to default for light mode
    document.documentElement.style.setProperty('--primary-color', '#000000');
  };

  return (
    <div>
      <label htmlFor="darkModeSwitch"></label>
      <Switch
        id="darkModeSwitch"
        onChange={handleChange}
        checked={darkModeEnabled}
      />
    </div>
  );
};

export default DarkModeSwitch;
