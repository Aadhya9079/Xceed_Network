import { useEffect, useState } from "react";
import "./header.css";

import Logo from "../assets/logo.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "About",
    "Our Chapters",
    "Membership",
    "Our Events",
    "Catalogue",
    "Our Community",
    "Our Programs",
  ];

  return (
    <>
      <header className={`xh-header ${isScrolled ? "is-scrolled" : ""}`}>
        {/* Row 1 */}
        <div className="xh-top-row">
          <div className="xh-brand">
            <img src={Logo} alt="Xceed Network" className="xh-logo" />
          </div>

          <div className="xh-right">
            <div className="xh-social">
              <img src={Linkedin} alt="LinkedIn" className="xh-social-icon linkedin" />
              <img src={Facebook} alt="Facebook" className="xh-social-icon facebook"/>
              <img src={Instagram} alt="Instagram" className="xh-social-icon instagram" />
            </div>
            <div className="xh-auth">
              <button className="xh-btn xh-btn--primary">MEMBER'S LOGIN</button>
              <button className="xh-btn xh-btn--accent">JOIN XCEED</button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="xh-inner">
          <nav className="xh-nav" aria-label="Primary">
            {navItems.map((label) => (
              <div className="xh-item" key={label}>
                <button
                  className="xh-linkBtn"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="xh-linkText">{label}</span>
                  {/* Filled black caret */}
                  <svg
                    className="xh-caret"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    aria-hidden="true"
                  >
                    <polygon points="6,9 12,15 18,9" fill="black" />
                  </svg>
                </button>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <div className="xh-header-spacer" />
    </>
  );
}
