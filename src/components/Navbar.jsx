import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import logoBar from "../assets/images/gsplogo.png";
import { Link, NavLink } from "react-router-dom";
import { lang, language, setSelectionsLang } from "../lang/index.jsx";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/">
              <img src={logo} alt="logo" className="title" />
              <img src={logoBar} alt="logo" className="logo" />
            </Link>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/about">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.about
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.about
                    : language?.english?.header?.about}
                </NavLink>
              </li>
              <li>
                <NavLink to="/product">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.product
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.product
                    : language?.english?.header?.product}
                </NavLink>
              </li>
              <li>
                <NavLink to="/sertificate">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.sertificate
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.sertificate
                    : language?.english?.header?.sertificate}
                </NavLink>
              </li>
              <li>
                <NavLink to="/delivery">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.delivery
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.delivery
                    : language?.english?.header?.delivery}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.contact
                    : language?.english?.header?.contact}
                </NavLink>
              </li>
              <select
                className="nav__select"
                onChange={(e) => {
                  setSelectionsLang(e?.target?.value);
                }}
              >
                <option
                  value={
                    localStorage.getItem("lang") === lang.english
                      ? lang.english
                      : localStorage.getItem("lang") === lang.russian
                      ? lang.russian
                      : lang.uzbek
                  }
                >
                  {localStorage.getItem("lang") === lang.english
                    ? lang.english
                    : localStorage.getItem("lang") === lang.russian
                    ? lang.russian
                    : lang.uzbek}
                </option>
                <option
                  value={
                    localStorage.getItem("lang") !== lang.russian
                      ? lang.russian
                      : localStorage.getItem("lang") === lang.english
                      ? lang.english
                      : lang.uzbek
                  }
                >
                  {localStorage.getItem("lang") !== lang.russian
                    ? lang.russian
                    : localStorage.getItem("lang") === lang.english
                    ? lang.english
                    : lang.uzbek}
                </option>

                <option
                  value={
                    localStorage.getItem("lang") !== lang.english
                      ? lang.english
                      : lang.russian
                  }
                >
                  {localStorage.getItem("lang") !== lang.english
                    ? lang.english
                    : lang.uzbek}
                </option>
              </select>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
