import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      {/* Minimal accent dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#6C63FF]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#2EC4B6]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-3/4 w-1.5 h-1.5 bg-[#FFD700]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};