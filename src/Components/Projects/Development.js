import React from "react";
import App1 from "../../img/app1.png";
import App2 from "../../img/app2.png";
import App3 from "../../img/app3.png";
import App4 from "../../img/app4.png";
import App5 from "../../img/app5.png";
import App6 from "../../img/app6.png";

const Development = () => {
  return (
    <div className="development">
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App5} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>Aquan (Game)</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>GameKit</li>
              <li>GameCenter</li>
              <li>In-App Purchases</li>
              <li>AdMob</li>
            </ul>
          </div>
          <a href="">Coming Soon</a>
        </div>
      </div>
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App6} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>TCL</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>SwiftUI</li>
              <li>Firebase DB</li>
              <li>Firebase Auth</li>
            </ul>
          </div>
          <a href="">Coming Soon</a>
        </div>
      </div>
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App1} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>Login / Register</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>SwiftUI</li>
              <li>Xcode</li>
            </ul>
          </div>
          <a
            href="https://github.com/aeip/iOS-Playgrounds/blob/main/iOS%20Playground/Views/LoginRegister.swift"
            target="_blank"
            rel="noreferrer"
          >
            Preview Code
          </a>
        </div>
      </div>
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App2} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>Profile</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>SwiftUI</li>
              <li>Xcode</li>
            </ul>
          </div>
          <a
            href="https://github.com/aeip/iOS-Playgrounds/blob/main/iOS%20Playground/Views/Profile.swift"
            target="_blank"
            rel="noreferrer"
          >
            Preview Code
          </a>
        </div>
      </div>
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App3} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>Music Player</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>SwiftUI</li>
              <li>Xcode</li>
            </ul>
          </div>
          <a
            href="https://github.com/aeip/iOS-Playgrounds/blob/main/iOS%20Playground/Views/Profile.swift"
            target="_blank"
            rel="noreferrer"
          >
            Preview Code
          </a>
        </div>
      </div>
      <div className="dev-card">
        <div className="dev-card-img">
          <img className="dev-photo" src={App4} alt="iOS App" />
        </div>
        <div className="dev-card-text">
          <div className="dev-card-text-top">
            <h2>Product Page</h2>
            <h4>Technologies Used</h4>
            <ul>
              <li>SwiftUI</li>
              <li>Xcode</li>
            </ul>
          </div>
          <a
            href="https://github.com/aeip/iOS-Playgrounds/blob/main/iOS%20Playground/Views/ProductPage.swift"
            target="_blank"
            rel="noreferrer"
          >
            Preview Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Development;
