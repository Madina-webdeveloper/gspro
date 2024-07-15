import React from "react";
import "./sertificate.css";
import { language } from "../../lang/index.jsx";

export const Sertificate = () => {
  return (
    <>
      <section className="sertificate">
        <div className="container">
          <h2 className="about__title"> {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.sertificatePG?.title
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.sertificatePG?.title
            : language?.english?.sertificatePG?.title}</h2>
          <p className="sertificate_desc">
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.sertificatePG?.desc
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.sertificatePG?.desc
            : language?.english?.sertificatePG?.desc}
          </p>
        </div>
      </section>
    </>
  );
};
