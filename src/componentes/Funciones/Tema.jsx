// Tema.jsx
import { useTheme } from "./ThemeContext";

const Tema = () => {
  const { isDark, toggleTheme, themeClass } = useTheme();

  return (
    <div className={`p-3 ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h5>Ejemplo de useState (Tema)</h5>
      <p>El tema actual es: <b>{isDark ? "Oscuro 🌙" : "Claro ☀️"}</b></p>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Cambiar a {isDark ? "Claro" : "Oscuro"}
      </button>
    </div>
  );
};

export default Tema;