import React, { useState, useEffect } from "react"
import "./loginPage.css"

export default function LoginPage() {
  const [slideIndex, setSlideIndex] = useState(0)

  const slides = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4121/4121793.png",
      title: "Passwordless sign-in",
      text: "Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/10302/10302971.png",
      title: "MFA for all accounts",
      text: "Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.",
    },
  ]

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="login-page">
      <div className="login-wrapper">
        {/* Left section */}
        <div className="login-left">
          <h2>Sign in</h2>
          <p className="sub-text">to Xceed Network</p>

          <form className="login-form">
            <input
              type="text"
              placeholder="Email address or mobile number"
            />
            <button type="submit">Next</button>
          </form>

          <p className="or-text">Sign in using</p>
          <div className="social-icons">
            <button><i className="fa-brands fa-apple"></i></button>
            <button><i className="fa-brands fa-google"></i></button>
            <button><i className="fa-brands fa-yahoo"></i></button>
            <button><i className="fa-brands fa-facebook-f"></i></button>
            <button><i className="fa-brands fa-linkedin-in"></i></button>
            <button><i className="fa-brands fa-twitter"></i></button>
            <button><i className="fa-brands fa-microsoft"></i></button>
          </div>
        </div>

        {/* Right section (slideshow) */}
        <div className="login-right">
          <img src={slides[slideIndex].img} alt="illustration" />
          <h3>{slides[slideIndex].title}</h3>
          <p>{slides[slideIndex].text}</p>
          <a href="#" className="learn-more">Learn more</a>

          <div className="slide-dots">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === slideIndex ? "active" : ""}`}
                onClick={() => setSlideIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}