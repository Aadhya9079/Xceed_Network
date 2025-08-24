import { useEffect, useState } from "react";
import "./header.css";

import Logo from "../assets/logo.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", sub: ["Who We Are", "Vision", "Team"] },
    { label: "Our Chapters", sub: ["Chapter 1", "Chapter 2", "Chapter 3"] },
    { label: "Membership", sub: ["Plans", "Pricing", "FAQ"] },
    { label: "Our Events", sub: ["Workshops", "Seminars", "Meetups"] },
    { label: "Catalogue", sub: ["Digital Tools", "Resources", "Templates"] },
    { label: "Our Community", sub: ["Members", "Success Stories"] },
    { label: "Our Programs", sub: ["Training", "Accelerators"] },
  ];

  return (
    <>
      <header className={`xh-header ${isScrolled ? "is-scrolled" : ""}`}>
        {/* Row 1 */}
        <div className="xh-top-row">
          <div className="xh-brand">
            <a href="/" className="xh-logo-link">
            <img src={Logo} alt="Xceed Network" className="xh-logo" />
            </a>
            {/* Optional tagline (like footer) */}
  {/* <span className="xh-tagline">Empowering Entrepreneurs</span> */}
          </div>

          <div className="xh-right">
            {/* Socials */}
            <div className="xh-social">
  <a href="https://www.linkedin.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
    <img src={Linkedin} alt="LinkedIn" className="xh-social-icon linkedin" />
  </a>
  <a href="https://www.facebook.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
    <img src={Facebook} alt="Facebook" className="xh-social-icon facebook"/>
  </a>
  <a href="https://www.instagram.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
    <img src={Instagram} alt="Instagram" className="xh-social-icon instagram" />
  </a>
  <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
    <img src={Twitter} alt="Twitter" className="xh-social-icon twitter" />
  </a>
</div>


            {/* Auth */}
            <div className="xh-auth">
              <a href="/login">
              <button className="xh-btn xh-btn--primary">MEMBER'S LOGIN</button>
              </a>
              <a href="/join-xceed"><button className="xh-btn xh-btn--accent">JOIN XCEED</button>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="xh-inner">
          <nav className="xh-nav" aria-label="Primary">
            {navItems.map((item) => (
              <div className="xh-item" key={item.label}>
                <button className="xh-linkBtn" type="button">
                  <span className="xh-linkText">{item.label}</span>
                  <svg
                    className="xh-caret"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                  >
                    <polygon points="6,9 12,15 18,9" fill="black" />
                  </svg>
                </button>

                {/* Dropdown Submenu (shown on hover via CSS) */}
                <ul className="xh-submenu">
                  {item.sub.map((sub, i) => (
                    <li key={i}>
                      <a href="#" className="xh-subLink">{sub}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <div className="xh-header-spacer" />
    </>
  );
}
