// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import Header from "./components/header";
import LandingPage from "./components/LandingPage";
import WelcomeSection from "./components/Welcomesection";
import Membership from "./components/Membership";
import Catalogue from "./components/Catalogue";
import Community from "./components/Community";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import ScrollOnTop from "./components/ScrollOnTop";
import Events from "./components/Events"
import Reviews from "./components/reviews"

// Auth Pages
import Login from "./components/Login";
import JoinXceed from "./components/JoinXceed";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* === Homepage layout === */}
        <Route
          path="/"
          element={
            <>
              <main>
                <LandingPage />
                <WelcomeSection />
                <Membership />
                <Catalogue />
                <Community />
                <Reviews/>
                <Connect />
                <Events/>
              </main>

              <Footer />
              <JoinUs />
              <ScrollOnTop threshold={40} scrollTargetSelector=".page-wrapper" />
            </>
          }
        />

        {/* === Auth Pages === */}
        <Route path="/login" element={<Login />} />
        <Route path="/join-xceed" element={<JoinXceed />} />
      </Routes>
    </Router>
  );
}
