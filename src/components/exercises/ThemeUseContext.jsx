import { ThemeContext } from "../../themes/ThemeProvider";
import { useContext } from "react";

export const ThemeUseContext = () => {
  const { isDarkMode, setIsDarkMode, theme } = useContext(ThemeContext);

  const containerClasses = [
    "container-fluid",
    "text-start",
    "p-5",
    isDarkMode ? "dark-theme" : "light-theme",
  ].join(" ");

  return (
    <div className={containerClasses}>
      <div id="container-themes">
        <div className="row">
          <div className="mb-5 text-end">
            <button
              className={isDarkMode ? "btn btn-light" : "btn btn-dark"}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? "Light ☼" : "Dark ☾"}
            </button>
          </div>
        </div>
        <div className="row">
          <h1 className="text-center">Theme changer with useContext</h1>
        </div>
        <div className="row mt-4">
          <p>
            Using the React hook '<strong>useContext</strong>' you can access to
            different elements, properties or data from a component without
            having to pass props through every level.
          </p>
          <p>
            It is very useful when you have data that is needed through various
            levels or components.
          </p>
          <p>
            You just need the hook <strong>useContext</strong> to create the
            context, <strong>the Provider </strong>
            component which wraps around a group of components that need to
            access the data usually used in the highest level of your{" "}
            <strong>React app</strong>. To access that data use the '
            <strong>useContext</strong>' hook.
          </p>
          <p>
            Read more:{" "}
            <a href="https://es.react.dev/reference/react/useContext">
              https://es.react.dev/reference/react/useContext
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
