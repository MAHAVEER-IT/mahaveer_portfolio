import { useState, useEffect } from 'react';
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
import { usePerformanceOptimizations } from './utils/performanceOptimizations';
import './App.css';
import './Styles/PerformanceStyles.css';
import './Styles/BackgroundOptimization.css';
import './Styles/ScrollPerformance.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Apply performance optimizations
  usePerformanceOptimizations();
  
  // Mark the app as loaded once initial render is complete
  useEffect(() => {
    // Use requestAnimationFrame to defer this after browser paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsLoaded(true);
        // Add loaded class to body for CSS optimizations
        document.body.classList.add('app-loaded');
      }, 100);
    });
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider>
      {/* Cursor Stars Effect - active on all pages */}
      {isLoaded && <CursorStarsCanvas />}
      
      {selectedProject ? (
        // Show ONLY the project details page
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToPortfolio}
        />
      ) : (
        // Show the main portfolio
        <div className={`relative overflow-hidden ${isLoaded ? 'app-loaded' : 'app-loading'}`}>
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