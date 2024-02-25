import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <div className="fullPage">
            <Navbar/>
            <Home/>
            <About/>
            <Skills/> 
            <Projects/>
            <Contact/>
            <footer className='mt-5' style={{ height: '20vh' }} >All Rights are Reserved</footer>
      </div>
    </>
  );
}

export default App;
