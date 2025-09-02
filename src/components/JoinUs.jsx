import React from "react"
import "./joinus.css"
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function JoinUs() {
  return (
    <div className="joinus-wrapper">
      <div className="joinus-button">
        <a href="#join">Join Us</a>
      </div>
      <div className="joinus-socials">
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
          className="social twitter"
          title="X"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  )
}

export default JoinUs
