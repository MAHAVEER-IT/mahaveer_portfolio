import React from 'react';
import { Mail, Phone, Map } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { SectionTitle } from './SectionTitle';
import { useTheme } from '../contexts/ThemeContext';

export const Contact: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();

  return (
    <section
      ref={sectionRef}
      className={`section-padding relative section-with-butterflies transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get in Touch" />

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div
            className={`contact-card space-y-6 p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all duration-1000 ease-out transform hover:scale-[1.02]
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="mb-8">
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Let's Connect</h3>
              <p className={`${theme === 'light' ? 'text-slate-700' : 'text-slate-300'} leading-relaxed`}>
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
            </div>

            <div className="space-y-6">
              <div className={`flex items-center space-x-4 group p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-slate-200/50 border border-slate-300 hover:border-[#3b82f6]/40 hover:bg-slate-200/80' 
                  : 'bg-slate-700/30 border border-slate-600/30 hover:border-[#6C63FF]/40 hover:bg-slate-700/50'
              }`}>
                <div className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-[#3b82f6]/20 border border-[#3b82f6]/30 group-hover:bg-[#3b82f6]/40' 
                    : 'bg-[#6C63FF]/20 border border-[#6C63FF]/30 group-hover:bg-[#6C63FF]/40'
                }`}>
                  <Mail className={`w-6 h-6 ${theme === 'light' ? 'text-[#3b82f6]' : 'text-[#6C63FF]'}`} />
                </div>
                <div className="overflow-hidden">
                  <p className={`text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-1`}>Email</p>
                  <a 
                    href="mailto:mahaveer.k2023it@sece.ac.in" 
                    className={`transition-colors duration-300 font-medium text-sm sm:text-base break-all ${
                      theme === 'light' ? 'text-slate-800 hover:text-[#3b82f6]' : 'text-white hover:text-[#6C63FF]'
                    }`}
                  >
                    mahaveer.k2023it@sece.ac.in
                  </a>
                </div>
              </div>

              <div className={`flex items-center space-x-4 group p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-slate-200/50 border border-slate-300 hover:border-[#2EC4B6]/40 hover:bg-slate-200/80' 
                  : 'bg-slate-700/30 border border-slate-600/30 hover:border-[#2EC4B6]/40 hover:bg-slate-700/50'
              }`}>
                <div className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-[#2EC4B6]/20 border border-[#2EC4B6]/30 group-hover:bg-[#2EC4B6]/40' 
                    : 'bg-[#2EC4B6]/20 border border-[#2EC4B6]/30 group-hover:bg-[#2EC4B6]/40'
                }`}>
                  <Phone className="w-6 h-6 text-[#2EC4B6]" />
                </div>
                <div className="overflow-hidden">
                  <p className={`text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-1`}>Phone</p>
                  <a 
                    href="tel:+916374827794" 
                    className={`transition-colors duration-300 font-medium text-sm sm:text-base ${
                      theme === 'light' ? 'text-slate-800 hover:text-[#2EC4B6]' : 'text-white hover:text-[#2EC4B6]'
                    }`}
                  >
                    +91 6374827794
                  </a>
                </div>
              </div>

              <div className={`flex items-center space-x-4 group p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-slate-200/50 border border-slate-300 hover:border-[#FFD700]/40 hover:bg-slate-200/80' 
                  : 'bg-slate-700/30 border border-slate-600/30 hover:border-[#FFD700]/40 hover:bg-slate-700/50'
              }`}>
                <div className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-[#FFD700]/20 border border-[#FFD700]/30 group-hover:bg-[#FFD700]/40' 
                    : 'bg-[#FFD700]/20 border border-[#FFD700]/30 group-hover:bg-[#FFD700]/40'
                }`}>
                  <Map className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="overflow-hidden">
                  <p className={`text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-1`}>Location</p>
                  <span className={`${theme === 'light' ? 'text-slate-800' : 'text-white'} font-medium text-sm sm:text-base`}>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Response time info */}
            <div className={`mt-8 p-4 rounded-xl backdrop-blur-lg transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-slate-200/60 border border-slate-300/80 hover:border-[#3b82f6]/50' 
                : 'bg-slate-700/40 border border-slate-600/40 hover:border-[#6C63FF]/30'
            }`}>
              <p className={`text-sm ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                <span className={`font-medium ${theme === 'light' ? 'text-[#3b82f6]' : 'text-[#6C63FF]'}`}>Quick Response:</span> I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};