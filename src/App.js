import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';

import Hero from './components/Hero';
import About from './components/About';
import TestSkills from './components/TestSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Hero/>
        <About/>
        <TestSkills/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
