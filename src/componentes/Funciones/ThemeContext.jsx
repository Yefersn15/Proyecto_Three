// ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Cambiar a true para que el tema oscuro sea el base
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
    // Invertir la lógica: oscuro es base, claro es bg-primary
    themeClass: isDark ? "bg-dark text-white" : "bg-primary text-white"
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};