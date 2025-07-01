import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Home: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
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
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (socialLinksRef.current) observer.observe(socialLinksRef.current);

    return () => {
      if (nameRef.current) observer.unobserve(nameRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (socialLinksRef.current) observer.unobserve(socialLinksRef.current);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="animated-bg w-full h-full opacity-10"></div>
      </div>

      {/* 3D Shapes */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] filter blur-3xl opacity-20 animate-blob top-1/4 -left-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] filter blur-3xl opacity-20 animate-blob animation-delay-2000 bottom-1/4 right-0"></div>
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#4158D0] to-[#3579F6] filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-1/3 left-1/3"></div>

      <div className="grain-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={nameRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            <span className="gradient-text">Mahaveer K</span>
          </h1>
          
          <p 
            ref={titleRef}
            className="text-xl md:text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out"
          >
            Flutter & Full Stack Developer
          </p>
          
          <div 
            ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-600 ease-out mb-12"
          >
            <a 
              href="#projects" 
              className="inline-block bg-[#6C63FF] hover:bg-[#5A52D5] text-white font-medium py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out btn-3d"
              aria-label="View my work"
            >
              View My Work
            </a>
          </div>
          
          <div 
            ref={socialLinksRef}
            className="flex justify-center space-x-6 opacity-0 translate-y-10 transition-all duration-1000 delay-900 ease-out"
          >
            <a 
              href="https://github.com/MAHAVEER-IT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-300 hover:border-[#6C63FF] hover:text-[#6C63FF] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="www.linkedin.com/in/mahaveer-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-300 hover:border-[#6C63FF] hover:text-[#6C63FF] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-gray-300 hover:border-[#6C63FF] hover:text-[#6C63FF] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Portfolio"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="w-8 h-8 text-[#6C63FF]" />
      </a>
    </section>
  );
};