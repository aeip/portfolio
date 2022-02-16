import React from "react";
import Me from "../img/me.png";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavigationBar = (props) => {
    let homeClassName = '';

    // if (props.currentNav === "home") {
    //   homeClassName += ' active';
    //       }
  return (
    <nav className="nav-bar">
        <div className="nav-bar-left">
          <img className="profile-photo" src={Me} alt="Portrait" />
          <h1 id="name">Stasys Meclazcke</h1>
        </div>
      <div className="nav-bar-right">
        <div>
          <NavLink to="/" className="nav-link" onClick={props.setCurrentNav("home")}>
            <AiFillHome className={homeClassName} size={30} color="white" />
          </NavLink>
          {/* <p>home</p> */}
        </div>
        <div>
          <NavLink to="/about" className="nav-link" onClick={props.setCurrentNav("about")}>
            <BsPersonCircle className={homeClassName} size={30} color="white" />
          </NavLink>
          {/* <p>about</p> */}
        </div>
        <div>
          <NavLink to="/projects" className="nav-link" onClick={props.setCurrentNav("projects")}>
            <AiFillCode className={homeClassName} size={30} color="white" />
          </NavLink>
          {/* <p>projects</p> */}
        </div>
        <div>
          <NavLink to="/contact" className="nav-link" onClick={props.setCurrentNav("contact")}>
            <MdEmail className={homeClassName} size={30} color="white" />
          </NavLink>
          {/* <p>contact</p> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
