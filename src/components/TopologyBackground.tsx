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
      
      {/* Professional geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #6C63FF 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #2EC4B6 1px, transparent 1px),
            radial-gradient(circle at 75% 25%, #FFD700 1.5px, transparent 1.5px),
            radial-gradient(circle at 25% 75%, #6C63FF 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 80px 80px, 100px 100px, 60px 60px'
        }}></div>
      </div>
      
      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #6C63FF 1px, transparent 1px),
            linear-gradient(180deg, #6C63FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Professional noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent"></div>
      
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
      
      {/* Side vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20"></div>
    </div>
  );
};