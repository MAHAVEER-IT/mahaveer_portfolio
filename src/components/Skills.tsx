import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-[#6C63FF]" />,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Dart', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Server className="w-6 h-6 text-[#2EC4B6]" />,
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'Flutter', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-[#FFD700]" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6 text-[#FF6B6B]" />,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Android Studio', level: 70 },
      ]
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
              <div className="card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm opacity-75">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`progress-bar ${isVisible ? '' : 'w-0'}`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: `width 1.5s ease-out ${skillIndex * 0.2 + 0.5}s`,
                          }}
                        ></div>
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
            className={`card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900
                      transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-xl font-semibold mb-6">Coding Platform Experience</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { platform: 'Leetcode', problems: '40+' },
                { platform: 'Codechef', problems: '50+' },
                { platform: 'Skillrack', problems: '100+' },
                { platform: 'HackerRank', problems: '100+' }
              ].map((platform, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#6C63FF] transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">{platform.platform}</h4>
                  <p className="text-sm opacity-75">Solved {platform.problems} problems</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};