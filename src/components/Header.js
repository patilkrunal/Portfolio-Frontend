import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";

const getStorageTheme = () => {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [visibilityClass, setVisibilityClass] = useState("");
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleMenu = (value) => {
    setOpenMenu(value);
  };

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    console.log(document.documentElement.className);
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav id="header" className={`navbar navbar-expand-lg ${visibilityClass}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          patilkrunal
        </Link>
        <button
          onClick={() => toggleMenu(!openMenu)}
          className={`navbar-toggler navbar-toggler-right ${
            openMenu ? "" : "collapsed"
          }`}
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            openMenu ? "show" : ""
          }`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item my-auto ml-2">
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
            </li> */}
            <li className="nav-item my-auto ml-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item my-auto ml-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item my-auto ml-2">
              <label className="theme-toggler nav-link">
                <input
                  type="checkbox"
                  className="theme-toggle"
                  onChange={(e) => toggleTheme(e)}
                  checked={theme === "dark"}
                />
                {theme === "dark" ? (
                  <div>
                    <span role="img" aria-label="Sun">
                      🙃
                    </span>
                  </div>
                ) : (
                  <div>
                    <span role="img" aria-label="Moon">
                      🌚
                    </span>
                  </div>
                )}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
