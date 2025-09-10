import { useEffect, useState } from "react"
import "./header.css"

import Logo from "../assets/logo.png"
import Instagram from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"
import Linkedin from "../assets/linkedin.png"
import Twitter from "../assets/twitter.png"
import { sub } from "framer-motion/client"
import HeaderImage from "../assets/headerImage2.jpeg"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { label: "About Us", sub: ["Who We Are","Vision & Mission", "The Xceed Story", "Leadership Team", "Impact & Reach"] },
    { label: "Our Programs", sub: ["XC-Connect", "XC-Edge", "XC-Digital", "XC-Rise", "XC-Campus", "XC-HerRise", "XC-Capital", "XC-Honor", "XC-Synergy"] },
    { label: "Membership", sub: ["Why Join Xceed?", "Member Benefits", "Plans & Pricing", "Success Stories"] },
    { label: "Events", sub: ["Upcoming Events", "	Past Highlights", "Webinars & Workshops", "	Annual Xceed Summit"]},
    { label: "Community", sub: ["Member Directory", "Xceed Chapters(City-Wise)", "The Power of the Xceed Community", "Testimonials"] },
    { label: "Collaborate", sub: ["Influencer Partner Program", "Community Partnerships", "Corporate & Association Collaborations", "	Media & PR Partners"] },
    { label: "Resources", sub: ["Blog & Insights", "Startup Guides", "Mentorship Resources", "FAQs"] },
    {label: "Contact"},
  ]

  return (
    <>
      <header className={`xh-header ${isScrolled ? "is-scrolled" : ""}`}>
        {/* Row 1 */}
        <div className="xh-top-row">
          <div className="xh-brand">
            <div><a href="/" className="xh-logo-link">
              <img src={Logo} alt="Xceed Network" className="xh-logo" />
            </a></div>
            <div className = "paragraph">
              <img src = {HeaderImage} alt="headerImage" className = "headerImage"></img></div> 
          </div>

          <div className="xh-right">
            {/* Socials */}
            <div className="xh-social">
              <a href="http://www.linkedin.com/in/pooja-arora-179159377" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="xh-social-icon linkedin" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578327130803" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="xh-social-icon facebook"/>
              </a>
              <a href="https://www.instagram.com/xceednetwork/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="xh-social-icon instagram" />
              </a>
              <a href="https://x.com/xceednetwork" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="xh-social-icon twitter" />
              </a>
            </div>

            {/* Auth */}
            <div className="xh-auth">
              <a href="/login">
                <button className="xh-btn xh-btn--primary">MEMBER'S LOGIN</button>
              </a>
              <a href="/join-xceed">
                <button className="xh-btn xh-btn--accent">JOIN XCEED</button>
              </a>
            </div>

            {/* Hamburger */}
            <button
              className={`xh-hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Row 2 - nav */}
        <div className={`xh-inner ${menuOpen ? "open" : ""}`}>
          <nav className="xh-nav" aria-label="Primary">
            {navItems.map((item, index) => (
              <div className="xh-item" key={item.label}>
                {item.sub ? (
                  <>
                    <button
                      className="xh-linkBtn"
                      type="button"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === index ? null : index)
                      }
                    >
                      <span className="xh-linkText">{item.label}</span>
                      <svg
                        className={`xh-caret ${activeDropdown === index ? "rotated" : ""}`}
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                      >
                        <polygon points="6,9 12,15 18,9" fill="white" />
                      </svg>
                    </button>
                    <ul
                      className={`xh-submenu ${activeDropdown === index ? "open" : ""}`}
                    >
                      {item.sub.map((sub, i) => (
                        <li key={i}>
                          <a href="#" className="xh-subLink">{sub}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href="#" className="xh-linkText">{item.label}</a>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      <div className="xh-header-spacer" />
    </>
  )
}