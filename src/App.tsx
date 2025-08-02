import React, { useState } from 'react';
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
import { ProjectDetail } from './components/ProjectDetail';
import { CursorStarsCanvas } from './components/CursorStarsCanvas';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider>
      {/* Cursor Stars Effect - active on all pages */}
      <CursorStarsCanvas />
      
      {selectedProject ? (
        // Show ONLY the project details page
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToPortfolio}
        />
      ) : (
        // Show the main portfolio
        <div className="relative overflow-hidden">
          <TopologyBackground />
          <Navbar />
          <main className="relative z-10">
            <Home />
            <About />
            <Experience />
            <Projects onProjectSelect={handleProjectSelect} />
            <Skills />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;