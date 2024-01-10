import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          scroll.scrollToTop({ smooth: true });
          break;
        case 'ArrowDown':
          scroll.scrollToBottom({ smooth: true });
          break;
        case 'ArrowLeft':
          navigateToAdjacentSection(-1);
          break;
        case 'ArrowRight':
          navigateToAdjacentSection(1);
          break;
        default:
          break;
      }
    };

    const navigateToAdjacentSection = (direction) => {
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
      const currentSectionIndex = sections.indexOf(window.location.hash.substring(1));
      const nextSectionIndex = (currentSectionIndex + direction + sections.length) % sections.length;
      const nextSection = sections[nextSectionIndex];

      // Utilisez scroller.scrollTo pour effectuer le défilement doux vers la nouvelle section
      scroller.scrollTo(nextSection, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });

      // Mettez à jour manuellement l'emplacement pour correspondre à la nouvelle section
      window.location.href = `#${nextSection}`;
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

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
