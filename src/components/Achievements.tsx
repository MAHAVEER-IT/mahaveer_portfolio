import React, { useEffect, useRef, useState } from 'react';
import { Award, Trophy, AlignCenterVertical as Certificate, Target } from 'lucide-react';

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    {
      title: 'Freshothon (Project Expo)',
      result: 'Third Place',
      description: 'Secured third place in the college project exhibition showcasing innovative solutions',
      icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Hackastrom (36-hour Hackathon)',
      result: 'Second Place',
      description: 'Achieved second place in intensive 36-hour hackathon with innovative project development',
      icon: <Award className="w-6 h-6 text-[#C0C0C0]" />,
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Tech Trek Hackathon',
      result: 'Finalist',
      description: 'Advanced to the final round in 8-hour hackathon demonstrating technical excellence',
      icon: <Target className="w-6 h-6 text-[#CD7F32]" />,
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Vultr Cloud Innovate Hackathon',
      result: 'Selected for Two Rounds',
      description: 'Selected for multiple rounds in GeeksforGeeks cloud innovation hackathon',
      icon: <Award className="w-6 h-6 text-[#6C63FF]" />,
      color: 'from-purple-500 to-blue-500'
    }
  ];

  const certifications = [
    {
      title: 'SQL Certification',
      issuer: 'HackerRank',
      description: 'Demonstrated proficiency in SQL database management and queries',
      icon: <Certificate className="w-6 h-6 text-[#00EA64]" />
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Udemy',
      description: 'Comprehensive course covering fundamental programming concepts',
      icon: <Certificate className="w-6 h-6 text-[#A435F0]" />
    },
    {
      title: '5-Day Flutter Bootcamp',
      issuer: 'LetsUpgrade',
      description: 'Intensive Flutter development training and hands-on project building',
      icon: <Certificate className="w-6 h-6 text-[#02569B]" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center section-title">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div
            className={`transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="professional-card p-8">
              <div className="flex items-center mb-8">
                <Trophy className="w-8 h-8 text-[#FFD700] mr-3" />
                <h3 className="text-2xl font-semibold text-white">Competition Achievements</h3>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl border border-slate-600 hover:border-[#6C63FF]/50 
                              transition-all duration-300 hover:bg-[#6C63FF]/5 transform hover:-translate-y-1
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-[#6C63FF]/20 group-hover:to-[#2EC4B6]/20 transition-all duration-300">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#6C63FF] transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.result}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
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
            <div className="professional-card p-8">
              <div className="flex items-center mb-8">
                <Certificate className="w-8 h-8 text-[#2EC4B6] mr-3" />
                <h3 className="text-2xl font-semibold text-white">Professional Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl border border-slate-600 hover:border-[#2EC4B6]/50 
                              transition-all duration-300 hover:bg-[#2EC4B6]/5 transform hover:-translate-y-1
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-[#2EC4B6]/20 group-hover:to-[#6C63FF]/20 transition-all duration-300">
                        {certification.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#2EC4B6] transition-colors duration-300">
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

        {/* Achievement Summary */}
        <div className="mt-16">
          <div className="professional-card p-8 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-white">Recognition Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">4</div>
                <p className="text-slate-300">Competition Awards</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2EC4B6] mb-2">3</div>
                <p className="text-slate-300">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6C63FF] mb-2">2</div>
                <p className="text-slate-300">Hackathon Wins</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B6B] mb-2">1</div>
                <p className="text-slate-300">Project Expo Win</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};