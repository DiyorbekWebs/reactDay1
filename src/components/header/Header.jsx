import React from "react";
import "../../App.css";
import { HeroImg } from "../../assets";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h1>Portfolio Creator</h1>
          </div>
          <ul className="list">
            <li className="item">About</li>
            <li className="item">Services</li>
            <li className="item">Projects</li>
            <li className="item">Blog</li>
            <li className="item">Book a call</li>
          </ul>
        </nav>
        <div className="hero">
          <div className="wrapper">
            <div className="texts">
              <h1 className="text1">I design products</h1>
              <h1 className="text2">that delight and inspire people.</h1>
            </div>
            <p className="pargaraf">
              Hi! I’m Jake, a product designer based in Berlin. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <div className="btns">
              <a className="btn1 btn" href="/">
                Book a call
              </a>
              <a className="btn2 btn" href="/">
                Download CV
              </a>
            </div>
          </div>
          <img src={HeroImg} className="hero-img" alt="hero__img"/>
        </div>
      </div>
    </>
  );
};

export default Header;
