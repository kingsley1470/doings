import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <h1>My Component</h1>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      {/* Rest of your component */}
    </div>
  );
};

export default MyComponent;
