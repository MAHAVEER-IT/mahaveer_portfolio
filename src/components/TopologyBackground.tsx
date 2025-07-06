import React from 'react';

export const TopologyBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-900">
      {/* Simple clean gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
    </div>
  );
};