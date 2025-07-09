import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export const Experience: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      id="experience" 
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Experience
          </span>
        </h2>

        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="perspective-container card-hover p-8 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Experience Card Top Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6C63FF] to-[#2EC4B6] opacity-10 rounded-bl-full"></div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Company Logo Placeholder */}
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#6C63FF] to-[#2EC4B6] rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
                <h4 className="text-xl font-semibold text-[#6C63FF] mb-3">Better Tomorrow</h4>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 opacity-75" />
                    <span>Jan 2025 – Mar 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 opacity-75" />
                    <span>Remote</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-base">
                  <p>
                    During my MERN stack internship at Better Tomorrow, I developed NextStop, a travel management web application.
                  </p>
                  <p>
                    The application includes separate pages for administrators to manage listings and bookings, as well as for users to explore
                    destinations and track their trips.
                  </p>
                  <p>
                    I deployed the application using Vercel for the frontend and Render.com for the backend.
                  </p>
                </div>
                
                {/* Certificate Link */}
                <div className="mt-4 mb-6">
                  <a 
                    href="https://drive.google.com/file/d/1DRmCEyK_xqKQaILls4RcqBg9it3JWzYU/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6C63FF]/20 to-[#2EC4B6]/20 border border-[#6C63FF]/30 rounded-full text-sm font-medium text-white hover:from-[#6C63FF]/30 hover:to-[#2EC4B6]/30 hover:border-[#6C63FF]/50 transition-all duration-300 backdrop-blur-sm"
                    aria-label="View MERN Stack Developer Certificate"
                  >
                    <Award className="w-4 h-4 text-[#FFD700]" />
                    <span>View Certificate</span>
                  </a>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel', 'Render'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};