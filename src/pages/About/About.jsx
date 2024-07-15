import React from "react";
import "./about.css";
import about from "../../assets/images/bg.jpg";
import { language } from "../../lang/index.jsx";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about__title">
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.header?.about
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.header?.about
            : language?.english?.header?.about}
        </h1>
        <div className="about__box">
          <img src={about} alt="about" />
          <p className="about__desc">
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.aboutPG?.desc1
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.aboutPG?.desc1
            : language?.english?.aboutPG?.desc1}
          </p>
        </div>
        <div className="about_wrap">
          <p className="about__text">
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.aboutPG?.desc2
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.aboutPG?.desc2
            : language?.english?.aboutPG?.desc2}
          </p>
        </div>
      </div>
    </section>
  );
};
