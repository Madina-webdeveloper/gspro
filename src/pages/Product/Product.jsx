import React from "react";
import "./product.css";
import onion from "../../assets/images/onion.jpg";
import green from "../../assets/images/green.webp";
import { language } from "../../lang/index.jsx";

export const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <h1 className="about__title">
          {" "}
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.header?.product
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.header?.product
            : language?.english?.header?.product}
        </h1>
        <h2 className="product_box1_title"> {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.productPG?.title1
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.productPG?.title1
            : language?.english?.productPG?.title1}</h2>
        <div className="product_box1 about__box">
          <img src={onion} alt="onion" />
          <p className="product_box1_text about__desc">
          {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.productPG?.desc1
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.productPG?.desc1
            : language?.english?.productPG?.desc1}
          </p>
        </div>
        <h2 className="product_box1_title2 product_box1_title">
        {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.productPG?.titleB
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.productPG?.titleB
            : language?.english?.productPG?.titleB}
        </h2>
        <div className="product_box2 product_box1 about__box">
          <img src={green} alt="onion" />
          <div>
            <h3 className="green">
            {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.productPG?.title2
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.productPG?.title2
            : language?.english?.productPG?.title2}
            </h3>
            <p className="product_box1_text about__desc">
            {localStorage.getItem("lang") === "Russian"
            ? language?.russian?.productPG?.desc2
            : localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.productPG?.desc2
            : language?.english?.productPG?.desc2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
