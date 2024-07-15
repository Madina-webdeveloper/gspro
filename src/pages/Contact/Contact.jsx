import React from "react";
import { language } from "../../lang/index.jsx";
export const Contact = () => {
  return (
    <>
      <section>
        <div className="container home__contact">
          <h2 className="home__contact__title">{localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.contact
                    : language?.english?.header?.contact}</h2>

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
