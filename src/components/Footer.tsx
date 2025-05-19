import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 relative">
      <div className="grain-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <a 
              href="#home"
              className="text-xl font-bold gradient-text"
              aria-label="Back to top"
            >
              Mahaveer K
            </a>
          </div>
          
          <div className="flex space-x-6 mb-6">
            <a 
              href="#about" 
              className="text-sm hover:text-[#6C63FF] transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm hover:text-[#6C63FF] transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-sm hover:text-[#6C63FF] transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-sm hover:text-[#6C63FF] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          <p className="text-sm flex items-center">
            © {currentYear} Mahaveer K. All rights reserved. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};