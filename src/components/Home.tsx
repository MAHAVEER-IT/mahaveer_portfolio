import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github, Linkedin, ExternalLink, Download, Mail } from 'lucide-react';

export const Home: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      }, 
      { threshold: 0.1 }
    );

    if (nameRef.current) observer.observe(nameRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (socialLinksRef.current) observer.observe(socialLinksRef.current);

    return () => {
      if (nameRef.current) observer.unobserve(nameRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (socialLinksRef.current) observer.unobserve(socialLinksRef.current);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 
            ref={nameRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            <span className="gradient-text">Mahaveer K</span>
          </h1>
          
          {/* Professional Title */}
          <p 
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out text-white"
          >
            Flutter & Full Stack Developer
          </p>

          {/* Professional Description */}
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl mb-12 opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative mobile applications and web solutions. 
            Specializing in Flutter development, MERN stack, and modern software engineering practices.
          </p>
          
          {/* Call to Action Buttons */}
          <div 
            ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="btn-primary inline-flex items-center gap-2 py-4 px-8 rounded-full font-semibold text-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="View my projects"
              >
                <ExternalLink className="w-5 h-5" />
                View My Work
              </a>
              
              <a 
                href="#contact" 
                className="btn-outline inline-flex items-center gap-2 py-4 px-8 rounded-full font-semibold text-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Get in touch"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div 
            ref={socialLinksRef}
            className="flex justify-center space-x-6 opacity-0 translate-y-10 transition-all duration-1000 delay-900 ease-out"
          >
            <a 
              href="https://github.com/MAHAVEER-IT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass-effect-light hover:bg-[#6C63FF]/20 transform hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            <a 
              href="www.linkedin.com/in/mahaveer-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass-effect-light hover:bg-[#6C63FF]/20 transform hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            <a 
              href="mailto:mahaveer.k2023it@sece.ac.in"
              className="group p-4 rounded-full glass-effect-light hover:bg-[#6C63FF]/20 transform hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-white"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Professional Status */}
          <div className="mt-12 flex justify-center">
            <div className="glass-effect-light px-6 py-3 rounded-full">
              <p className="text-sm text-slate-300">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce group"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="w-8 h-8 text-[#6C63FF] group-hover:text-[#2EC4B6] transition-colors duration-300" />
      </a>
    </section>
  );
};