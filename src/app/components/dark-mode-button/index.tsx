
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    // Adicione lógica para alternar entre os estilos de modo claro e escuro aqui
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
