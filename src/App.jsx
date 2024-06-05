import { useState } from 'react'
import ssLogo from './assets/Sa2.png'
import './App.css'

function App() {
  const [linksVisible, setLinksVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [logoClicked, setLogoClicked] = useState(false); // Nuevo estado para controlar si se hizo clic en el logo

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
    setLogoClicked(true); // Establecemos el estado del clic en el logo como verdadero cuando se hace clic en él
    setTimeout(() => {
      setLogoClicked(false); // Restablecemos el estado del clic en el logo como falso después de un tiempo
    }, 500); // Ajusta este valor para que coincida con la duración de la transición de los enlaces
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
   <div className="background-container">
        <img className='bgImg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
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
          <img src={ssLogo} alt="Logo" className={logoClicked ? 'clicked' : ''} />
        </div>
        <div className={`links right ${linksVisible ? 'visible' : ''}`}>
          <a className="nav-item link3" href="#services">Services</a>
          <a className="nav-item link4" href="#contact">Contact</a>
        </div>
      </nav>

      <h1>Hi</h1>  
            <p>Buenas</p>
    </>
  )
}

export default App
