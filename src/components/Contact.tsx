import React from 'react';
import { Mail, Phone, Map } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export const Contact: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      ref={sectionRef}
      className={`section-padding relative section-with-butterflies transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Get in Touch
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div
            className={`space-y-6 p-8 rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl transition-all duration-1000 ease-out transform hover:scale-[1.02] hover:shadow-[#6C63FF]/20 hover:shadow-2xl
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group p-4 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:border-[#6C63FF]/40 hover:bg-slate-700/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 group-hover:bg-[#6C63FF]/40 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a 
                    href="mailto:mahaveer.k2023it@sece.ac.in" 
                    className="text-white hover:text-[#6C63FF] transition-colors duration-300 font-medium text-sm sm:text-base break-all"
                  >
                    mahaveer.k2023it@sece.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group p-4 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:border-[#2EC4B6]/40 hover:bg-slate-700/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#2EC4B6]/20 border border-[#2EC4B6]/30 group-hover:bg-[#2EC4B6]/40 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-[#2EC4B6]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <a 
                    href="tel:+916374827794" 
                    className="text-white hover:text-[#2EC4B6] transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    +91 6374827794
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group p-4 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:border-[#FFD700]/40 hover:bg-slate-700/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 group-hover:bg-[#FFD700]/40 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                  <Map className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <span className="text-white font-medium text-sm sm:text-base">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Response time info */}
            <div className="mt-8 p-4 rounded-xl bg-slate-700/40 backdrop-blur-lg border border-slate-600/40 hover:border-[#6C63FF]/30 transition-all duration-300">
              <p className="text-sm text-slate-300">
                <span className="text-[#6C63FF] font-medium">Quick Response:</span> I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};