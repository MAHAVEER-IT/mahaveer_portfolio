import React from 'react';
import { Code, Database, Server, Smartphone, Globe, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export const Skills: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-[#6C63FF]" />,
      skills: ['C++', 'Dart', 'JavaScript', 'REST API']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6 text-[#9333EA]" />,
      skills: ['VS Code', 'Android Studio', 'Postman']
    },
    {
      title: 'Framework/Library',
      icon: <Globe className="w-6 h-6 text-[#2EC4B6]" />,
      skills: ['Flutter', 'React', 'NodeJS']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6 text-[#FFD700]" />,
      skills: ['Firebase', 'MongoDB', 'MySQL']
    },
    {
      title: 'Architecture',
      icon: <Server className="w-6 h-6 text-[#06B6D4]" />,
      skills: ['BLoC (Business Logic Component)', 'Clean Architecture']
    },
    {
      title: 'CI/CD',
      icon: <Smartphone className="w-6 h-6 text-[#FF6B6B]" />,
      skills: ['GitHub']
    },
    {
      title: 'Core',
      icon: <Code className="w-6 h-6 text-[#FFD700]" />,
      skills: ['Data Structures and Algorithms', 'OS']
    }
  ];

  const codingPlatforms = [
    { platform: 'LeetCode', problems: '40+', color: '#FFA116' },
    { platform: 'CodeChef', problems: '50+', color: '#5B4638' },
    { platform: 'SkillRack', problems: '100+', color: '#00A651' },
    { platform: 'HackerRank', problems: '100+', color: '#00EA64' }
  ];

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center section-title">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`professional-card p-6 transition-all duration-1000 ease-out transform
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                {category.icon}
                <span className="ml-3">{category.title}</span>
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`transition-all duration-700 ease-out transform
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ animationDelay: `${skillIndex * 100 + index * 150 + 300}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] rounded-full mr-3"></div>
                      <span className="font-medium text-slate-200">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="professional-card p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
            Coding Platform Experience
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingPlatforms.map((platform, index) => (
              <div
                key={index}
                className={`group p-6 border border-slate-600 rounded-xl hover:border-[#6C63FF] 
                          hover:bg-[#6C63FF]/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg text-center
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 150 + 800}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.platform.charAt(0)}
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-[#6C63FF] transition-colors duration-300 text-white">
                  {platform.platform}
                </h4>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  Solved {platform.problems} problems
                </p>
                <div className="mt-4 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"
                    style={{ backgroundColor: platform.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};