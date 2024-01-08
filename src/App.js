import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
import Services from './components/Services/Services'; 
import Projects from './components/Projects/Projects'; 
import Skills from './components/Skills/Skills'; 
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}


export default App;