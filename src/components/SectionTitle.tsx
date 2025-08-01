import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { theme } = useTheme();
  
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
      theme === 'light' 
        ? 'text-slate-800 relative after:content-[""] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#3b82f6] after:to-[#2EC4B6] after:rounded-full'
        : 'text-white relative after:content-[""] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6] after:rounded-full'
    }`}>
      {title}
    </h2>
  );
};
