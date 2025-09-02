// src/components/SocialSidebar.jsx
import React from "react";
import "./socialsidebar.css";

import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        href="https://www.linkedin.com/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin-bg"
        title="LinkedIn"
      >
        <img src={Linkedin} alt="LinkedIn" />
      </a>

      <a
        href="https://www.facebook.com/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook-bg"
        title="Facebook"
      >
        <img src={Facebook} alt="Facebook" />
      </a>

      <a
        href="https://www.instagram.com/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram-bg"
        title="Instagram"
      >
        <img src={Instagram} alt="Instagram" />
      </a>

      <a
        href="https://twitter.com/YOUR_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter-bg"
        title="Twitter"
      >
        <img src={Twitter} alt="Twitter" />
      </a>
    </div>
  );
}
