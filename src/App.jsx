
import { useState } from 'react'
// import './App.css'
import Header from './components/header';
import LandingPage from './components/landingpage';
import WelcomeSection from './components/Welcomesection';
import Membership from './components/Membership';
import Catalogue from './components/Catalogue';
import Services from './components/Services';
import Connect from './components/Connect';
import JoinUs from './components/JoinUs';
import Footer from './components/footer';

function App() {

  return (
    
    <>
    <Header/>
    <LandingPage/>
      <WelcomeSection/>
      <Membership/>
      <Catalogue/>
      <Services/>
      <Connect/>
      <Footer/>
      <JoinUs/>
    
      </>
    
  );}