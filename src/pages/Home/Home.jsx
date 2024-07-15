import React from "react";
import "./home.css";
import logoGSP from "../../assets/images/gsplogo.png";
import qop from "../../assets/images/qop (1).png";
import oq from "../../assets/images/oqQop.jpg";
import setka from "../../assets/images/setka.jpg";
import { language } from "../../lang/index.jsx";

export const Home = () => {
  return (
    <>
      {" "}
      <section className="hero">
        <div className="container ">
          <div className="hero_wrap">
            <h1 className="hero_wrap__title">GREAT SOATOBOD PRODUCTION</h1>
            <p className="hero_wrap__desc">
              {" "}
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.heroSC?.desc
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.heroSC?.desc
                : language?.english?.homePG?.heroSC?.desc}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container about">
          <h2 className="about_title">
            {" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.header?.about
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.about
              : language?.english?.header?.about}
          </h2>
          <div className="about_wrap">
            <img src={logoGSP} alt="logo" />
            <p className="about_desc">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.aboutDesc
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.aboutDesc
                : language?.english?.homePG?.aboutDesc}
            </p>
          </div>
        </div>
      </section>
      <section className="product">
        <div className="container product_wrap">
          <h2 className="product_title">
            {" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.header?.product
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.product
              : language?.english?.header?.product}
          </h2>
          <div className="product_wrap_box">
            <div className="card">
              {" "}
              <img src={setka} alt="setka" />
            </div>
            <div className="card">
              {" "}
              <img src={qop} alt="setka" />
            </div>
            <div className="card">
              {" "}
              <img src={oq} alt="setka" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container home__contact">
          <h2 className="home__contact__title">
            {" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.header?.contact
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.contact
              : language?.english?.header?.contact}
          </h2>

          <form className="home__contact__form">
          <input
       
              placeholder={
                localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.contactSC?.name
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.contactSC?.name
                  : language?.english?.homePG?.contactSC?.name
              }
              className="booking_sec_form_input"
            />
            <input
              type="number"
         
              placeholder={
                localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.contactSC?.number
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.contactSC?.number
                  : language?.english?.homePG?.contactSC?.number
              }
              className="booking_sec_form_input"
            />
            <input
           
              type="email"
              placeholder={
                localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.contactSC?.email
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.contactSC?.email
                  : language?.english?.homePG?.contactSC?.email
              }
              className="booking_sec_form_input"
            />

            <button className="booking_sec_form_btn" type="submit">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.contactSC?.btn
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.contactSC?.btn
                : language?.english?.homePG?.contactSC?.btn}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
