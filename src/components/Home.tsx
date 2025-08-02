import React from 'react';
import { ArrowDownCircle, Github, Linkedin, ExternalLink, Mail, Code, Smartphone, Globe, FileText } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

export const Home: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading with enhanced styling */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-8xl font-bold mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#2EC4B6] to-[#8b5cf6]">
              Mahaveer K
            </span>
          </h1>
          
          {/* Professional Title */}
          <p 
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 transition-all duration-1000 delay-300 ease-out ${theme === 'light' ? 'text-slate-800' : 'text-white'} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Flutter & Full Stack Developer
          </p>

          {/* Enhanced Professional Description */}
          <p 
            className={`text-lg md:text-xl mb-8 transition-all duration-1000 delay-500 ease-out ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'} max-w-4xl mx-auto leading-relaxed ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
          
            Passionate about creating stunning
            <span className="text-[#2EC4B6] font-semibold">web applications</span> and 
            <span className="text-[#2EC4B6] font-semibold">cross-platform mobile</span> solutions. Specializing in modern software engineering practices.
          </p>

          {/* Quick Skills Showcase */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3b82f6]/20 to-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full backdrop-blur-sm">
              <Smartphone className="w-4 h-4 text-[#3b82f6]" />
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Flutter</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2EC4B6]/20 to-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-full backdrop-blur-sm">
              <Globe className="w-4 h-4 text-[#2EC4B6]" />
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-full backdrop-blur-sm">
              <Code className="w-4 h-4 text-[#8b5cf6]" />
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>JavaScript</span>
            </div>
          </div>
          
          {/* Enhanced Call to Action Buttons */}
          <div 
            className={`mb-16 transition-all duration-1000 delay-900 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-3 py-3 px-6 bg-gradient-to-r from-[#3b82f6] to-[#2EC4B6] rounded-full font-semibold text-base text-white hover:shadow-lg transition-all duration-300"
                aria-label="View my projects"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View My Work</span>
              </a>
              
              <a 
                href="https://drive.google.com/file/d/15OKzAONtc8IMWyx0yEz4Tf8a84qYtK3T/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 py-3 px-6 bg-gradient-to-r from-[#8b5cf6]/90 to-[#a855f7]/90 rounded-full font-semibold text-base text-white hover:shadow-lg hover:from-[#8b5cf6] hover:to-[#a855f7] transition-all duration-300"
                aria-label="Download my resume"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 py-3 px-6 border-2 border-[#3b82f6] text-[#3b82f6] rounded-full font-semibold text-base hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
                aria-label="Get in touch"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
          
          {/* Enhanced Social Links */}
          <div 
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-1100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="https://github.com/MAHAVEER-IT" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${theme === 'light' ? 'bg-slate-200/50 border border-slate-300/50 hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/50 text-slate-700 hover:text-[#3b82f6]' : 'bg-slate-800/30 border border-slate-600/50 hover:bg-[#6C63FF]/20 hover:border-[#6C63FF]/50 text-slate-300 hover:text-white'} transition-all duration-300`}
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mahaveer-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${theme === 'light' ? 'bg-slate-200/50 border border-slate-300/50 hover:bg-[#2EC4B6]/20 hover:border-[#2EC4B6]/50 text-slate-700 hover:text-[#2EC4B6]' : 'bg-slate-800/30 border border-slate-600/50 hover:bg-[#2EC4B6]/20 hover:border-[#2EC4B6]/50 text-slate-300 hover:text-white'} transition-all duration-300`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="mailto:mahaveer.k2023it@sece.ac.in"
              className={`p-4 rounded-full ${theme === 'light' ? 'bg-slate-200/50 border border-slate-300/50 hover:bg-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 text-slate-700 hover:text-[#8b5cf6]' : 'bg-slate-800/30 border border-slate-600/50 hover:bg-[#FFD700]/20 hover:border-[#FFD700]/50 text-slate-300 hover:text-white'} transition-all duration-300`}
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="w-10 h-10 text-[#3b82f6] hover:text-[#2EC4B6] transition-colors duration-300 animate-bounce" />
      </a>
    </section>
  );
};
