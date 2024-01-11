
import React, { useState } from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="bg-stone-200 mr-10  w-20 h-10 rounded-full">
      <button type='submit' className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark-mode-toggle cursor-pointer  transition-transform duration-slow transform ${darkMode ? 'translate-x-1/1' : 'translate-x-full bg-stone-700 text-white'
        }`} onClick={handleToggle}>
        {darkMode ? (<FaRegMoon />) : (<FaSun />)}
      </button>
    </div>
  );
};

export default DarkModeToggle;