import React from 'react';
import '../App.css';

function LandingPage() {
  return (
    <>
      <section className='container'>
        <div className="content">
          <h1>Bienvenidos a <span className='color-changing'>Ss's Company</span></h1>
          <p>Ss's Company es una compañia aún en desarrollo. Esta compañia se va a centrar en el desarrollo front-end, también tendran un sistema para tú pedir lo que quieras y ellos te lo harán</p>
          <a href="#" className='learn-more'>Conocer más</a>
        </div>
      </section> 
    </>
  );
}

export default LandingPage;