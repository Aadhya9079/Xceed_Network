import { useState } from 'react'
// import './App.css'
import LandingPage from './components/landingpage';
import WelcomeSection from './components/Welcomesection';
import Membership from './components/Membership';
import Catalogue from './components/Catalogue';
import Services from './components/Services';
import Connect from './components/Connect';
import JoinUs from './components/JoinUs';
function App() {

  return (
    
    <>
    

    <LandingPage/>
      <WelcomeSection/>
      <Membership/>
      <Catalogue/>
      <Services/>
      <Connect/>
      <JoinUs/>
    
      </>
    
  );
}

export default App;
