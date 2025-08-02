import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Base gradient background - light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"></div>
      
      {/* Static gradient orbs - light theme */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-[#6C63FF]/20 to-[#2EC4B6]/20 rounded-full blur-3xl"></div>
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-r from-[#2EC4B6]/15 to-[#FFD700]/15 rounded-full blur-3xl"></div>
        
        {/* Tertiary gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FFD700]/10 to-[#6C63FF]/10 rounded-full blur-3xl"></div>
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
      
      {/* Top vignette - light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200/30 via-transparent to-transparent"></div>
      
      {/* Bottom vignette - light theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-200/20 via-transparent to-transparent"></div>
      
      {/* Side vignettes - light theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200/10 via-transparent to-slate-200/10"></div>
    </div>
  );
};