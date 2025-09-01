import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // if your version doesn't have this, use FaTwitter from "react-icons/fa"

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
            <li className="footer-contact">
              <span>📍</span>3964 Rivermark Plaza #113, Santa Clara, CA 95054, USA
            </li>
            <li className="footer-contact">
              <span>📞</span>
              <a href="tel:+14085670700">+91 9319395333</a>
            </li>
            <li className="footer-contact">
              <span>✉️</span>
              <a href="mailto:global@tie.org">Xceednetwork@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-socials">
          {/* Replace YOUR_ID / YOUR_HANDLE with your real profiles */}
          <a
            href="https://www.linkedin.com/company/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social linkedin"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.facebook.com/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social facebook"
            title="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="social x"
            title="X"
          >
            <FaXTwitter />
          </a>
        </div>

        <p>Copyright © 2025 – Xceed Network</p>
      </div>
    </footer>
  );
};

export default Footer;
