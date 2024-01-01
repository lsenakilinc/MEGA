// src/App.jsx

import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


function App() {
  return (
    <div className="portfolio">
     
      <header className='second'>
        <h1>Leyla Sena Kılınç</h1>
        <p>Computer Engineer</p>
      </header>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      
      
    </div>
  );
}

export default App;
