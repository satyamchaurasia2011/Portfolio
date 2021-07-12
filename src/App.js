import React, { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects/>
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
