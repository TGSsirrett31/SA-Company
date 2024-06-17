import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AboutPage from './components/aboutPage';
import './App.css';
import ssLogo from './assets/Sa2.png';
import hoverImg from './assets/favicon.png';

function App() {
  const [linksVisible, setLinksVisible] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
    setLogoClicked(true);
    setTimeout(() => {
      setLogoClicked(false);
    }, 500);
  };

  const handleLogoHover = () => {
    setLogoHover(!logoHover);
  };

  return (
    <>
      <div className="background-container">
        <img className='bgImg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon" />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div> 

      <nav className="navbar">
        <div className={`links left ${linksVisible ? 'visible' : ''}`}>
          <a className="nav-item link2" href="#home">Home</a>
          <a className="nav-item link1" href="#about">About</a>
        </div>
        <div className="logo" onClick={toggleLinks}>
          <img src={logoHover ? hoverImg : ssLogo} alt="Logo" className={logoClicked ? 'clicked' : ''} />
        </div>
        <div className={`links right ${linksVisible ? 'visible' : ''}`}>
          <a className="nav-item link3" href="#services">Services</a>
          <a className="nav-item link4" href="#contact">Contact</a>
        </div>
      </nav>

      <div className="section" id="home">
        <LandingPage />
      </div>
      <div className="section" id="about">
        <AboutPage />
      </div>
    </>
  );
}

export default App;