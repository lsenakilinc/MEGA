import React from "react";
import MeramLogo from "../assets/footerlogo.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <a href="https://www.meram.bel.tr/">
          <img src={MeramLogo} alt="" />
        </a>
        <div className="mainLink">
          <Link to="/">Main</Link>
          <Link to="/menu">Projects</Link>
          <Link to="/about">Mayor</Link>
          <Link to="https://www.meram.bel.tr/iletisim">Contact</Link>
        </div>
      </div>
    </div>
  );
};
