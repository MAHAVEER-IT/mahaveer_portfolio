import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {/* Clean professional background */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Minimal subtle pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #6C63FF 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
    </div>
  );
};