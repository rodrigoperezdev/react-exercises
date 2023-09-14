import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { ToggleDarkModeButton } from "./ToggleDarkModeButton";
import { Link } from "react-router-dom";

export const Header = ({ children }) => {
  const { containerClasses, isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          isDarkMode
            ? "dark-theme position-absolute w-100"
            : "light-theme position-absolute w-100"
        }
      >
        <nav className="navbar py-3 justify-content-center justify-content-sm-between">
          <div className="col-3 col-sm-1 ms-sm-4 ms-0">
            <Link className="navbar-brand me-0" to="/">
              <img src="images/react.png" width="60" alt="React logo" />
            </Link>
          </div>

          <div className="my-3 my-sm-0">
            <ul className="navbar-nav mr-auto flex-row align-items-center">
              <li className="nav-item active mx-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/rodrigoperezdev/react-exercises"
                  id="github-logo"
                >
                  <img src="../../images/github.svg" alt="Github logo" />
                </a>
              </li>
              <li className="mx-3 me-sm-5 d-flex align-items-center">
                <ToggleDarkModeButton />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={containerClasses}>
        <div className="container-themes">{children}</div>
      </div>
    </>
  );
};
