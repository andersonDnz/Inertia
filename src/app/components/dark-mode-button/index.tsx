
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={darkMode} />
        <span className="slider"></span>
      </label>
      <p>Dark Mode</p>
    </div>
  );
};

export default DarkModeToggle;
