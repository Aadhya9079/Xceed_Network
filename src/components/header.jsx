import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const textStyle = {
    fontSize: "12px",
    color: "#061651",
    lineHeight: "1.5",
    textAlign: "center",
  };

  const fadeStyle = {
    opacity: 0,
    animation: "fadeIn 0.8s forwards",
    padding: "2px 0",
  };

  return (
    <header className="w-full bg-white shadow">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Logo + Text + Buttons in center */}
       <div className="flex items-center gap-[450px]">
  {/* Logo + Text */}
  <div className="flex items-center gap-2 py-1">
    <img src={Logo} alt="Logo" className="w-[90px] h-auto" />
    <h6
      style={textStyle}
      className="flex flex-col items-start space-y-1"
    >
      {step >= 1 && <div style={fadeStyle}>CONNECT</div>}
      {step >= 2 && <div style={fadeStyle}>GROW</div>}
      {step >= 3 && <div style={fadeStyle}>SUCCEED</div>}
    </h6>
  </div>

  {/* Buttons */}
  <div className="flex items-center gap-4">
    <button className="bg-[#061651] text-white px-6 py-2 rounded-full font-bold">
      LOGIN
    </button>
    <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-bold">
      REGISTER
    </button>
  </div>
</div>

       <ul className="nav nav-underline flex gap-4 justify-center">
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      About
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Our Chapters
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Membership
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Our Events
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Catalogue
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Our Community
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black hover:text-[#061651]" href="#">
      Our Programs
    </a>
  </li>
</ul>
      </div>
    </header>
  );
};

export default Header;
