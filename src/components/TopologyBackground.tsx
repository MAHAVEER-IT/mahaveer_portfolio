import React, { useEffect, useState } from 'react';
import '../Styles/BackgroundOptimization.css';

export const TopologyBackground: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Defer rendering the background until after main content loads
  useEffect(() => {
    // Use requestIdleCallback if available, or setTimeout as fallback
    const handleLoad = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setIsLoaded(true);
        });
      } else {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden background-container">
      {/* Base gradient background - light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 background-layer"></div>
      
      {/* Static gradient orbs - light theme */}
      {isLoaded && (
        <div className="absolute inset-0">
          {/* Primary gradient orb */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-[#6C63FF]/20 to-[#2EC4B6]/20 rounded-full blur-3xl background-orb background-orb-primary"></div>
          
          {/* Secondary gradient orb */}
          <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-r from-[#2EC4B6]/15 to-[#FFD700]/15 rounded-full blur-3xl background-orb background-orb-secondary"></div>
          
          {/* Reduced number of orbs for better performance */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FFD700]/10 to-[#6C63FF]/10 rounded-full blur-3xl background-orb background-orb-tertiary"></div>
        </div>
      )}
      
      {/* Minimal geometric accents - further reduced opacity for performance */}
      {isLoaded && (
        <div className="absolute inset-0 opacity-[0.01]">
          <div className="absolute inset-0 bg-minimal-dots"></div>
        </div>
      )}
      
      {/* Very subtle vignettes - simplified for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200/20 via-transparent to-slate-200/20"></div>
    </div>
  );
};