import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-[#6C63FF]" />,
      skills: ['JavaScript', 'Java', 'C++', 'Dart']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Server className="w-6 h-6 text-[#2EC4B6]" />,
      skills: ['React', 'Node.js', 'Flutter']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-[#FFD700]" />,
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6 text-[#FF6B6B]" />,
      skills: ['Flutter', 'Android Studio']
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
      id="skills"
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`perspective-container transition-all duration-1000 ease-out transform
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#6C63FF]/10 to-[#2EC4B6]/10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#FFD700]/10 to-[#FF6B6B]/10 rounded-full"></div>
                
                <h3 className="text-xl font-semibold mb-6 flex items-center relative z-10">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>

                <div className="grid grid-cols-1 gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 
                                hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/5 transition-all duration-300 ease-out transform hover:-translate-y-1
                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{ transitionDelay: `${skillIndex * 100 + index * 200 + 300}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#6C63FF] transition-colors duration-300">
                          {skill}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills and Coding Platform Experience */}
        <div className="mt-12 perspective-container">
          <div
            className={`card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden
                      transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Decorative background elements */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#2EC4B6]/10 to-[#6C63FF]/10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-[#FFD700]/10 to-[#FF6B6B]/10 rounded-full"></div>
            
            <h3 className="text-xl font-semibold mb-6 relative z-10">Coding Platform Experience</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { platform: 'Leetcode', problems: '40+' },
                { platform: 'Codechef', problems: '50+' },
                { platform: 'Skillrack', problems: '100+' },
                { platform: 'HackerRank', problems: '100+' }
              ].map((platform, index) => (
                <div
                  key={index}
                  className={`group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#6C63FF] 
                            hover:bg-[#6C63FF]/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150 + 1000}ms` }}
                >
                  <h4 className="font-semibold mb-2 group-hover:text-[#6C63FF] transition-colors duration-300">
                    {platform.platform}
                  </h4>
                  <p className="text-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    Solved {platform.problems} problems
                  </p>
                  <div className="mt-2 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};