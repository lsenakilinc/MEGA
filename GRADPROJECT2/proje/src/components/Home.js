

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home-main.jpg";
import BannerImage8 from "../assets/about-img.18bf2ff46b4677d35ae4.jpg";

import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <div
        className="mainPage"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <div className="order">
          <p>We work for Meram</p>
          <p>with humility, sincerity and diligence</p>
          
        </div>
      </div>
     
    </div>
  );
};
