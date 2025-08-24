import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap styles
import Header from "./components/header.jsx";
import LandingPage from "./components/landingpage.jsx";
import WelcomeSection from "./components/Welcomesection.jsx";
import Membership from "./components/Membership.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Services from "./components/Services.jsx";
import Connect from "./components/Connect.jsx";
import JoinUs from "./components/JoinUs.jsx";
import Footer from "./components/footer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Header/>
    <LandingPage />
    <WelcomeSection/>
    <Membership/>
    <Catalogue/>
    <Services/>
    <Connect/>
    <Footer/>
    <JoinUs/>
  </StrictMode>
);
