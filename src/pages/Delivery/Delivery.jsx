import React from "react";
import man from "../../assets/images/man.jpg";
import "./delivery.css"
import { language } from "../../lang/index.jsx";
export const Delivery = () => {
  return (
    <>
      <section className="delivery">
        <div className="container">
          <h2 className="delivery_title about__title">   {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.delivery
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.delivery
                    : language?.english?.header?.delivery}</h2>

          <div className="delivery_box about__box">
            <img src={man} alt="man" />

            <p className="delivery__desc about__desc">
            {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.deliveryDesc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.deliveryDesc
                    : language?.english?.deliveryDesc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
