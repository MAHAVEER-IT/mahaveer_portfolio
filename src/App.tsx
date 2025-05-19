import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TopologyBackground } from './components/TopologyBackground';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative overflow-hidden">
        <TopologyBackground />
        <Navbar />
        <main className="relative z-10">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;