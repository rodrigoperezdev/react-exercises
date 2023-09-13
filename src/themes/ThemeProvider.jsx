import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const containerClasses = [
    "container-fluid",
    "text-start",
    "py-0",
    "px-3",
    "px-md-5",
    "main-container",
    isDarkMode ? "dark-theme" : "light-theme",
  ].join(" ");

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, containerClasses }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
