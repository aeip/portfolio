import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Mustang from "../img/mustang.jpg";
import Mustang2 from "../img/mustang2.jpg";
import Corvette from "../img/corvette.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="external">
        <div>
          <a
            href="https://www.linkedin.com/in/smecla/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="linkedin" size={50} />
          </a>
        </div>
        <div>
          <a href="https://github.com/aeip/" target="_blank" rel="noreferrer">
            <FaGithubSquare className="github" size={50} />
          </a>
        </div>
      </div>
      <h3>
          Hi, I'm Stasys. I am a 24 year old software engineer who has graduated
          from General Assembly's 12 week Software Engineering Immersive
          program. I've been programming since I was 15; developing basic
          websites, games, and iOS apps in Objective-C. Soon after, I started
          learning Swift to make an iOS app about myself for Apple's WWDC
          scholarship opportunity. I received a scholarship, attended WWDC, and
          became addicted to coding ever since. I then started doing freelance
          work for websites and apps using new technologies with every project.
          This is where I gained most of my experience because every month I
          would have a new project and idea to work on that served totally
          different purposes. I then decided to attend General Assembly to get
          some more experience on my portfolio before going after a software
          engineering position. I'm interested in working at a company now so
          that I can continue learning about software engineering with even
          bolder ideas and products.
        </h3>
      <h1>i also like cars...</h1>
      <div className="carShow">
        <div className="car-card">
          <div className="car-image">
            <Carousel>
              <div>
                <img className="car-photo" src={Mustang} alt="Mustang" />
              </div>
              <div>
                <img className="car-photo" src={Mustang2} alt="Mustang" />
              </div>
            </Carousel>
          </div>
          <div className="car-text">
            <h2>2017 Mustang GT Premium FBO</h2>
            <ul>
              <li>
                <b>ENGINE</b> 5.0 liter V8
              </li>
              <li>
                <b>HP</b> 550 (on E85)
              </li>
              <li>
                <b>TQ</b> 420 lb-ft
              </li>
              <li>
                <b>TOP SPEED</b> 185 MPH
              </li>
              <li>
                <b>CURB WEIGHT</b> 3600 lbs
              </li>
            </ul>
          </div>
        </div>
        <div className="car-card">
          <div className="car-image">
            <Carousel>
              <div>
                <img className="car-photo" src={Corvette} alt="Corvette" />
              </div>
              <div>
                <img className="car-photo" src={Mustang2} alt="Mustang" />
              </div>
            </Carousel>
          </div>
          <div className="car-text">
            <h2>2009 Chevrolet Corvette Z06</h2>
            <ul>
              <li>
                <b>ENGINE</b> 7.0 liter V8
              </li>
              <li>
                <b>HP</b> 505 (on 93)
              </li>
              <li>
                <b>TQ</b> 470 lb-ft
              </li>
              <li>
                <b>TOP SPEED</b> 199 MPH
              </li>
              <li>
                <b>CURB WEIGHT</b> 3150 lbs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
