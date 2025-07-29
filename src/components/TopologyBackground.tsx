import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
      
      {/* Static gradient orbs */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-[#6C63FF]/15 to-[#2EC4B6]/15 rounded-full blur-3xl"></div>
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-r from-[#2EC4B6]/10 to-[#FFD700]/10 rounded-full blur-3xl"></div>
        
        {/* Tertiary gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FFD700]/8 to-[#6C63FF]/8 rounded-full blur-3xl"></div>
      </div>
      
      {/* Minimal geometric accents - reduced opacity and simplified */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-minimal-dots"></div>
      </div>
      
      {/* Very subtle mesh pattern - reduced opacity */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0 bg-subtle-grid"></div>
      </div>
      
      {/* Removed noise texture for cleaner look */}
      
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent"></div>
      
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
      
      {/* Side vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20"></div>
    </div>
  );
};