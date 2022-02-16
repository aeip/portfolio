import React from "react";
import Me from "../img/me2.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-card">
        <div className="contact-text">
          <h2>Want To Talk?</h2>
          <h2>
            Feel free to send me an email at{" "}
            <br />
            <br />
            <br />
            <br />
            <a href="mailto:stasys.meclazcke@gmail.com">stasys.meclazcke@gmail.com</a>
          </h2>
        </div>
        <div className="contact-right">
            <img className="contact-photo" src={Me} alt="Portrait" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
