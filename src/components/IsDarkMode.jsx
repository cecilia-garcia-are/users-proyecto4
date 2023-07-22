import { useEffect, useState } from "react";
import './styles/IsDarkMode.css'


const IsDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Estado inicial DarkMode del localStorage
    const initialMode = localStorage.getItem("darkMode");
    // Si existe, retornar DarkMode
    // Si no existe, retornar LigthMode como valor inicial
    return initialMode ? JSON.parse(initialMode) : false;
  });

  // Se encuentra el estado actual en localStorage cada que cambie
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default IsDarkMode;