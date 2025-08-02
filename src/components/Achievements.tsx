import React from 'react';
import { Award, Trophy, AlignCenterVertical as Certificate, Target } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { SectionTitle } from './SectionTitle';
import '../Styles/Achievements.css';

export const Achievements: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const achievements = [
    {
      title: 'Freshothon (Project Expo)',
      result: 'Third Place',
      description: 'Secured third place in college project exhibition',
      icon: <Trophy className="w-5 h-5 text-[#FFD700]" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Hackastrom (36-hour Hackathon)',
      result: 'Second Place',
      description: 'Achieved second place in intensive 36-hour hackathon',
      icon: <Award className="w-5 h-5 text-[#C0C0C0]" />,
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Tech Trek Hackathon',
      result: 'Finalist',
      description: 'Advanced to final round in 8-hour hackathon',
      icon: <Target className="w-5 h-5 text-[#CD7F32]" />,
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Vultr Cloud Innovate Hackathon',
      result: 'Selected for Two Rounds',
      description: 'Selected for multiple rounds in GeeksforGeeks hackathon',
      icon: <Award className="w-5 h-5 text-[#6C63FF]" />,
      color: 'from-purple-500 to-blue-500'
    }
  ];

  const certifications = [
    {
      title: 'SQL Certification',
      issuer: 'HackerRank',
      description: 'Proficiency in SQL database management',
      icon: <Certificate className="w-5 h-5 text-[#00EA64]" />
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Udemy',
      description: 'Fundamental programming concepts course',
      icon: <Certificate className="w-5 h-5 text-[#A435F0]" />
    },
    {
      title: '5-Day Flutter Bootcamp',
      issuer: 'LetsUpgrade',
      description: 'Intensive Flutter development training',
      icon: <Certificate className="w-5 h-5 text-[#02569B]" />
    }
  ];

  return (
    <section
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements & Certifications" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div
            className={`transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="achievement-card p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-[#FFD700] mr-2" />
                <h3 className="text-lg font-semibold text-black/70">Competition Achievements</h3>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`achievement-item group p-3 rounded-lg border border-slate-600 hover:border-[#6C63FF]/50 
                              transition-all duration-300 hover:bg-[#6C63FF]/5 transform hover:-translate-y-1
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="icon-container p-1.5 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-[#6C63FF]/20 group-hover:to-[#2EC4B6]/20 transition-all duration-300">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-black/60 mb-0.5 group-hover:text-[#6C63FF] transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-1.5 bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.result}
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="certification-card p-6">
              <div className="flex items-center mb-6">
                <Certificate className="w-7 h-7 text-[#2EC4B6] mr-3" />
                <h3 className="text-xl font-semibold text-black/70">Professional Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className={`certification-item group p-4 rounded-xl border border-slate-600 hover:border-[#2EC4B6]/50 
                              transition-all duration-300 hover:bg-[#2EC4B6]/5 transform hover:-translate-y-1
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-container p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-[#2EC4B6]/20 group-hover:to-[#6C63FF]/20 transition-all duration-300">
                        {certification.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-black/60 mb-1 group-hover:text-[#2EC4B6] transition-colors duration-300">
                          {certification.title}
                        </h4>
                        <p className="text-[#2EC4B6] font-medium text-sm mb-2">
                          {certification.issuer}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {certification.description}
                        </p>
                      </div>
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