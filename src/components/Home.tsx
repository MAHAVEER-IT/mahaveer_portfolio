import React from 'react';
import { ArrowDownCircle, Github, Linkedin, ExternalLink, Mail, Code, Smartphone, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export const Home: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C63FF] via-[#2EC4B6] to-[#FFD700]">
              Mahaveer K
            </span>
          </h1>
          
          {/* Professional Title */}
          <p 
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 transition-all duration-1000 delay-300 ease-out text-white ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Flutter & Full Stack Developer
          </p>

          {/* Enhanced Professional Description */}
          <p 
            className={`text-lg md:text-xl mb-8 transition-all duration-1000 delay-500 ease-out text-slate-300 max-w-4xl mx-auto leading-relaxed ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Passionate about creating innovative mobile applications and web solutions. 
            Specializing in <span className="text-[#6C63FF] font-semibold">Flutter development</span>, 
            <span className="text-[#2EC4B6] font-semibold"> MERN stack</span>, and modern software engineering practices.
          </p>

          {/* Quick Skills Showcase */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6C63FF]/20 to-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full backdrop-blur-sm">
              <Smartphone className="w-4 h-4 text-[#6C63FF]" />
              <span className="text-sm font-medium text-white">Flutter</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2EC4B6]/20 to-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-full backdrop-blur-sm">
              <Globe className="w-4 h-4 text-[#2EC4B6]" />
              <span className="text-sm font-medium text-white">React</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-full backdrop-blur-sm">
              <Code className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white">JavaScript</span>
            </div>
          </div>
          
          {/* Enhanced Call to Action Buttons */}
          <div 
            className={`mb-16 transition-all duration-1000 delay-900 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-3 py-4 px-8 bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] rounded-full font-semibold text-lg text-white hover:shadow-lg transition-all duration-300"
                aria-label="View my projects"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View My Work</span>
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 py-4 px-8 border-2 border-[#6C63FF] text-[#6C63FF] rounded-full font-semibold text-lg hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
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
              className="p-4 rounded-full bg-slate-800/30 border border-slate-600/50 hover:bg-[#6C63FF]/20 hover:border-[#6C63FF]/50 transition-all duration-300 text-slate-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mahaveer-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-800/30 border border-slate-600/50 hover:bg-[#2EC4B6]/20 hover:border-[#2EC4B6]/50 transition-all duration-300 text-slate-300 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="mailto:mahaveer.k2023it@sece.ac.in"
              className="p-4 rounded-full bg-slate-800/30 border border-slate-600/50 hover:bg-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300 text-slate-300 hover:text-white"
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
        <ArrowDownCircle className="w-10 h-10 text-[#6C63FF] hover:text-[#2EC4B6] transition-colors duration-300 animate-bounce" />
      </a>
    </section>
  );
};