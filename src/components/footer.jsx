import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* About */}
        <div>
          <h3 className="footer-title">About</h3>
          <ul>
            <li><a href="#">Mission & Vision</a></li>
            <li><a href="#">Pillars of Xceed</a></li>
            <li><a href="#">Xceed Network Team</a></li>
            <li><a href="#">Our Chapters</a></li>
          </ul>
        </div>

        {/* Help Desk */}
        <div>
          <h3 className="footer-title">Help Desk</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Data Privacy & Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <ul>
            <li className="footer-contact"><span>📍</span>3964 Rivermark Plaza #113, Santa Clara, CA 95054, USA</li>
            <li className="footer-contact"><span>📞</span>+1 408-567-0700</li>
            <li className="footer-contact"><span>✉️</span>global@tie.org</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#">in</a>
          <a href="#">f</a>
          <a href="#">X</a>
        </div>
        <p>Copyright © 2025 – Xceed Network</p>
      </div>
    </footer>
  );
};

export default Footer;
