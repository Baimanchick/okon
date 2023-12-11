import React, { useEffect, useState } from "react";
import "../css/navbar.scss";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import logo from "../css/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleNavigationClick = (path) => {
    setActiveItem(path);
    navigate(path);

    // Toggle the checkbox to close the menu
    const checkbox = document.querySelector(".checkbox");
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <>
      {/* width: 999px */}
      <nav className="nav-jsx">
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h2>
                <strong>Gul</strong>shar<strong>kan</strong>
              </h2>
            </div>
            <div className="menu-items">
              <li
                className={`navigation-item ${
                  activeItem === "/" ? "active-1" : ""
                }`}
                onClick={() => handleNavigationClick("/")}
              >
                Главная
              </li>
              <li
                className={`navigation-item ${
                  activeItem === "/project" ? "active-1" : ""
                }`}
                onClick={() => handleNavigationClick("/project")}
              >
                Проекты
              </li>
              <li
                className={`navigation-item ${
                  activeItem === "/about" ? "active-1" : ""
                }`}
                onClick={() => handleNavigationClick("/about")}
              >
                Обо мне
              </li>
              <li
                className={`navigation-item ${
                  activeItem === "/blog" ? "active-1" : ""
                }`}
                onClick={() => handleNavigationClick("/blog")}
              >
                Блог
              </li>
              <li
                className={`navigation-item ${
                  activeItem === "/contact" ? "active-1" : ""
                }`}
                onClick={() => handleNavigationClick("/contact")}
              >
                Контакты
              </li>

              <a
                href="https://www.instagram.com/gulsharkan_kultaeva/"
                className="icon-inst-1"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/megu.tur?locale=ru_RU"
                className="icon-face-1"
                target="_blank"
              >
                <CiFacebook />
              </a>
              <button
                onClick={() => handleNavigationClick("/form")}
                className="form-button"
              >
                Диалог
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/*  */}

      <header className="nav-header">
        <div className="conatiner-navbar">
          <div className="icon-navbar">
            <img src={logo} onClick={() => navigate("/")} />
          </div>

          <ul className="navigation">
            <li
              className={`navigation-item ${
                activeItem === "/" ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem("/");
                navigate("/");
              }}
            >
              Главная
            </li>
            <li
              className={`navigation-item ${
                activeItem === "/project" ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem("/project");
                navigate("/project");
              }}
            >
              Проекты
            </li>
            <li
              className={`navigation-item ${
                activeItem === "/about" ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem("/about");
                navigate("/about");
              }}
            >
              Обо мне
            </li>
            <li
              className={`navigation-item ${
                activeItem === "/blog" ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem("/blog");
                navigate("/blog");
              }}
            >
              Блог
            </li>
            <li
              className={`navigation-item ${
                activeItem === "/contact" ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem("/contact");
                navigate("/contact");
              }}
            >
              Контакты
            </li>
          </ul>

          <div className="social-media">
            <a
              href="https://www.instagram.com/gulsharkan_kultaeva/"
              className="icon-inst"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/megu.tur?locale=ru_RU"
              className="icon-face"
              target="_blank"
            >
              <CiFacebook />
            </a>
            <button onClick={() => navigate("/form")} className="form-button">
              Диалог
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
