import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // or use FaTwitter if needed

const Footer = () => {
  return (
    <footer className="footer">
      {/* Two-Column Layout */}
      <div className="footer-columns">
        {/* Left Column: Logo + Socials */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" />
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/YOUR_ID" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/YOUR_ID" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right Column: About, Help Desk, Contact */}
        <div className="footer-right">
          <div>
            <h3 className="footer-title">About</h3>
            <ul>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#">Pillars of Xceed</a></li>
              <li><a href="#">Xceed Network Team</a></li>
              <li><a href="#">Our Chapters</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Help Desk</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Data Privacy & Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <ul>
              <li className="footer-contact" footer-address>
                <span>📍</span>3964 Rivermark Plaza #113, Santa Clara, CA 95054, USA
              </li>
              <li className="footer-contact">
                <span>📞</span>
                <a href="tel:+919319395333">+91 9319395333</a>
              </li>
              <li className="footer-contact">
                <span>✉️</span>
                <a href="mailto:xceednetwork@gmail.com">xceednetwork@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © 2025 – Xceed Network</p>
      </div>
    </footer>
  );
};

export default Footer;
