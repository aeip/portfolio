import React from "react";
import Me from "../../img/me3.png";

const Design = () => {
  return (
    <div className="design">
      <div className="contact-card">
        <div className="contact-text">
          <h2>I love designing my apps with Figma and Sketch!</h2>
          <h2>
            Check out Dribbble below{" "}
            <br />
            <br />
            <br />
            <br />
            <a href="https://dribbble.com/smecla" target="_blank"
            rel="noreferrer">https://dribbble.com/smecla</a>
          </h2>
        </div>
        <div className="contact-right">
            <img className="contact-photo" src={Me} alt="Portrait" />
        </div>
      </div>
    </div>
  );
};

export default Design;
