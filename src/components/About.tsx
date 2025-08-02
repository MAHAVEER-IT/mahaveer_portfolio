import React from 'react';
import MyImage from '/me.png'
import { GraduationCap, User, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { SectionTitle } from './SectionTitle';
import '../Styles/About.css';

export const About: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2023 - 2027',
      details: 'CGPA: 7.85',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Palaniyammal Higher Secondary School',
      duration: '2022 - 2023',
      details: 'Percentage: 84.6%',
      status: 'Completed'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Palaniyammal Higher Secondary School',
      duration: '2021 – 2022',
      details: 'Successfully Completed',
      status: 'Completed'
    }
  ];

  return (
    <section 
      id="about" 
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />

        {/* Profile Section with Animations */}
        <div 
          className={`flex justify-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative group">
            {/* Animated Floating Dots */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Right Dot */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#6C63FF] rounded-full animate-bounce-dot-1"></div>
              
              {/* Top Left Dot */}
              <div className="absolute top-8 left-2 w-2 h-2 bg-[#2EC4B6] rounded-full animate-bounce-dot-2"></div>
              
              {/* Bottom Right Dot */}
              <div className="absolute bottom-6 right-2 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-bounce-dot-3"></div>
              
              {/* Bottom Left Dot */}
              <div className="absolute bottom-2 left-6 w-2 h-2 bg-[#6C63FF] rounded-full animate-bounce-dot-4"></div>
              
              {/* Side Dots */}
              <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-[#2EC4B6] rounded-full animate-bounce-dot-5"></div>
              <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-bounce-dot-6"></div>
            </div>

            {/* Pulsing Ring Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#2EC4B6]/20 animate-pulse"></div>
            
            {/* Rotating Border */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
              theme === 'light' ? 'from-[#3b82f6] via-[#2EC4B6] to-[#FFD700]' : 'from-[#6C63FF] via-[#2EC4B6] to-[#FFD700]'
            } p-1 group-hover:p-1.5 transition-all duration-300 animate-spin-slow`}>
              <div className={`w-full h-full rounded-full ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-800'}`}></div>
            </div>
            
            {/* Inner Glow Effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#6C63FF]/10 to-[#2EC4B6]/10 blur-sm animate-pulse-slow"></div>
            
            <div className="relative w-48 h-48 md:w-56 md:h-56 m-1">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ease-out">
                <img
                  src={MyImage}
                  alt="Mahaveer K - Professional Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Image Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <div className="hidden group-hover:block text-xs text-white bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded-md animate-fade-in">
                  Available
                </div>
              </div>
            </div>

            {/* Floating Skills Tags */}
            <div className="absolute -top-6 -left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
              <div className={`backdrop-blur-sm text-xs px-2 py-1 rounded-md shadow-lg animate-bounce-tag-1 ${
                theme === 'light' ? 'bg-[#3b82f6]/90 text-white' : 'bg-[#6C63FF]/90 text-white'
              }`}>
                Flutter
              </div>
            </div>
            
            <div className="absolute -top-4 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 transform translate-y-2 group-hover:translate-y-0">
              <div className={`backdrop-blur-sm text-xs px-2 py-1 rounded-md shadow-lg animate-bounce-tag-2 ${
                theme === 'light' ? 'bg-[#2EC4B6]/90 text-white' : 'bg-[#2EC4B6]/90 text-white'
              }`}>
                Next.js
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-600 transform translate-y-2 group-hover:translate-y-0">
              <div className={`backdrop-blur-sm text-xs px-2 py-1 rounded-md shadow-lg animate-bounce-tag-3 ${
                theme === 'light' ? 'bg-[#FFD700]/90 text-slate-800' : 'bg-[#FFD700]/90 text-slate-800'
              }`}>
                MERN
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Personal Information & Bio */}
          <div 
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="professional-card-animated p-8">
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                <User className={`w-6 h-6 mr-3 ${theme === 'light' ? 'text-[#3b82f6]' : 'text-[#6C63FF]'}`} />
                <span>Professional Profile</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                  I'm a <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>B.Tech Information Technology</strong> student with a passion for developing impactful digital solutions. My technical expertise includes:
                </p>
                
                <div className="pl-4 border-l-2 border-opacity-30 border-blue-500 dark:border-[#6C63FF]">
                  <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                    <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Web Development:</strong> Proficient in building full-stack applications using <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>React</strong> and <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Next.js</strong> on the frontend, with <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Node.js/Express</strong> for backend development.
                  </p>
                  
                  <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                    <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Database Solutions:</strong> Experience with <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>MongoDB</strong> and <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Firebase</strong> for cloud-based data management.
                  </p>
                  
                  <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                    <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Mobile Development:</strong> Strong foundation in <strong className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Flutter</strong> for creating cross-platform, user-centered mobile applications.
                  </p>
                </div>
                
                <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                  My hands-on experience includes API integration, responsive UI design, and delivering clean, maintainable code across various web and mobile projects. I focus on creating intuitive user experiences while ensuring solid technical implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div 
            className={`transition-all duration-1000 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="professional-card-gradient p-8">
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                <GraduationCap className={`w-6 h-6 mr-3 ${theme === 'light' ? 'text-[#3b82f6]' : 'text-[#6C63FF]'}`} />
                <span>Education</span>
              </h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 group"
                  >
                    {/* Timeline line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b ${
                      theme === 'light' ? 'from-[#3b82f6]' : 'from-[#6C63FF]'
                    } to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-0 w-3 h-3 rounded-full ${
                      theme === 'light' ? 'bg-[#3b82f6] shadow-[#3b82f6]/50' : 'bg-[#6C63FF] shadow-[#6C63FF]/50'
                    } transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 shadow-lg`}></div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className={`text-xl font-semibold ${
                          theme === 'light' ? 'text-slate-900 group-hover:text-[#3b82f6]' : 'text-white group-hover:text-[#6C63FF]'
                        } transition-colors duration-300`}>
                          {item.degree}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Current' 
                            ? (theme === 'light' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-green-500/20 text-green-400 border border-green-500/30')
                            : (theme === 'light' ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30')
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <div className={`flex items-center text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-2`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.duration}
                      </div>
                      
                      <p className={`${theme === 'light' ? 'text-slate-700' : 'text-slate-300'} font-medium`}>{item.institution}</p>
                      <p className={`text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};