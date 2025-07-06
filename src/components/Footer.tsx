import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50"></div>
      
      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Brand section */}
            <div className="text-center md:text-left">
              <a 
                href="#home"
                className="text-2xl font-bold gradient-text inline-block mb-4"
                aria-label="Back to top"
              >
                Mahaveer K
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Flutter & Full Stack Developer passionate about creating innovative digital solutions.
              </p>
            </div>

            {/* Quick links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="text-sm text-slate-300 hover:text-[#6C63FF] transition-all duration-300 hover:translate-y-[-2px] inline-block py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a 
                  href="https://github.com/MAHAVEER-IT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800/50 border border-slate-600/50 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-[#6C63FF] transition-colors duration-300" />
                </a>
                <a 
                  href="www.linkedin.com/in/mahaveer-k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800/50 border border-slate-600/50 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-[#6C63FF] transition-colors duration-300" />
                </a>
                <a 
                  href="mailto:mahaveer.k2023it@sece.ac.in"
                  className="group p-3 rounded-full bg-slate-800/50 border border-slate-600/50 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-slate-300 group-hover:text-[#6C63FF] transition-colors duration-300" />
                </a>
              </div>
              
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 px-4 py-2 bg-[#6C63FF]/20 border border-[#6C63FF]/30 rounded-full text-sm text-[#6C63FF] hover:bg-[#6C63FF]/30 hover:border-[#6C63FF]/50 transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-slate-900 px-6">
                <div className="w-16 h-px bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6]"></div>
              </div>
            </div>
          </div>
          
          {/* Copyright section */}
          <div className="text-center">
            <p className="text-sm flex items-center justify-center text-slate-400 mb-2">
              © {currentYear} Mahaveer K. All rights reserved.
            </p>
            <p className="text-xs flex items-center justify-center text-slate-500">
              Made with 
              <Heart className="w-3 h-3 mx-1 text-red-400 animate-pulse" />
              using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Subtle glow effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent"></div>
    </footer>
  );
};