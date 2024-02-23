import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
      
        <a href="https://www.facebook.com/Meram.Belediyesi">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/MeramBelediyesi">
          <InstagramIcon />
        </a>
        <a href="https://www.instagram.com/meram.belediyesi?igsh=MWd0eGJuNWR4Nzg5aw==">
          <XIcon />
        </a>
      </div>
      
    </div>
  );
};
