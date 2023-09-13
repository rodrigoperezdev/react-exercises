import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";

export const ToggleDarkModeButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div className="row">
      <div className="text-end">
        <button
          className={isDarkMode ? "btn btn-light" : "btn btn-dark"}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light ☼" : "Dark ☾"}
        </button>
      </div>
    </div>
  );
};
