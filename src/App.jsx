import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ssLogo from './assets/Sa2.png'
import './App.css'


function App() {
  const [linksVisible, setLinksVisible] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  };

  return (
    <>
<div class="background-container">
    <img className='bgImg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
</div>
    <nav className="navbar">
      <div className={`links left ${linksVisible ? 'visible' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </div>
      <div className="logo" onClick={toggleLinks}>
        <img src={ssLogo} alt="Logo" />
      </div>
      <div className={`links right ${linksVisible ? 'visible' : ''}`}>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </>
  )
}

export default App
