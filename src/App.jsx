
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import Header from "./components/header"
import LandingPage from "./components/landingpage"
import WelcomeSection from "./components/Welcomesection";
import Membership from "./components/Membership"
import Catalogue from "./components/Catalogue"
import Community from "./components/Community"
import Connect from "./components/Connect"
import Footer from "./components/footer"
import JoinUs from "./components/JoinUs"
import Events from "./components/Events"
import Reviews from "./components/reviews"
import BecomeMember from "./components/BecomeMember"
import FloatingPopup from "./components/floatingPopup"

// Auth Pages
import Login from "./components/LoginPage"
import JoinXceed from "./components/JoinXceed"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* === Homepage layout === */}
        <Route
          path="/"
          element={
            <>
            <Header />
              <main>
                <LandingPage />
                <WelcomeSection />
                <Membership />
                <Catalogue />
                <Community />
                <Reviews/>
                <BecomeMember/>
                <Connect />
                <Events/>
              </main>

              <Footer />
              <JoinUs />
              <FloatingPopup />
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
