import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #6C63FF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #2EC4B6 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Subtle animated gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6C63FF]/10 to-[#2EC4B6]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#2EC4B6]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};