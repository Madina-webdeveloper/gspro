import React from "react";
import "./footer.css";
import { Link, NavLink } from "react-router-dom";
import logoBar from "../assets/images/gsplogo.png";
import LOGO from "../assets/images/logo.png";
import { language } from "../lang/index.jsx";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container ">
          <div className="footer">
            <div className="footer_left">
              <Link className="footer_left_title">
                <img src={LOGO} alt="logo" className="title" />
                <img src={logoBar} alt="logo" className="logo" />
              </Link>
              <p className="footer_text">
                &copy; {new Date().getFullYear()} Copyright: GREAT SOATOBOD
                PRODUCTION
              </p>
            </div>
            <div className="footer_right">
              <ul className="footer_right_socials">
                {" "}
                <h4 className="footer_right_des_title">{localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.contact
                    : language?.english?.footer?.contact}</h4>
                <li>
                  <a
                    href="tel:+998909305500"
                    className="footer_right_socials_link"
                  >
                    +998909305500
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@gspro.uz"
                    className="footer_right_socials_link"
                  >
                    info@gspro.uz
                  </a>
                </li>
              </ul>
              <ul className="footer_right_des">
                <h4 className="footer_right_des_title">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.informations
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.informations
                    : language?.english?.footer?.informations}
                </h4>
                <li className="footer_right_des_li">
                  <NavLink to="/about" className="footer_right_des_li_link">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.about
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.about
                    : language?.english?.footer?.about}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/product" className="footer_right_des_li_link">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.product
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.product
                    : language?.english?.footer?.product}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink
                    to="/sertificate"
                    className="footer_right_des_li_link"
                  >
                 {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.sertificate
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.sertificate
                    : language?.english?.footer?.sertificate}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/delivery" className="footer_right_des_li_link">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.delivery
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.delivery
                    : language?.english?.footer?.delivery}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/contact" className="footer_right_des_li_link">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.contact
                    : language?.english?.footer?.contact}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
