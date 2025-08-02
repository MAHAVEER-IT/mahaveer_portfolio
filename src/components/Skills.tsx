import React from 'react';
import { Code, Database, Server, Smartphone, Globe, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { SectionTitle } from './SectionTitle';

export const Skills: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-[#3b82f6]" />,
      skills: ['C++', 'Dart', 'JavaScript', 'REST API']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6 text-[#8b5cf6]" />,
      skills: ['VS Code', 'Android Studio', 'Postman']
    },
    {
      title: 'Framework/Library',
      icon: <Globe className="w-6 h-6 text-[#2EC4B6]" />,
      skills: ['Flutter', 'React', 'Node.js','Next.js']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6 text-[#a855f7]" />,
      skills: ['Firebase', 'MongoDB', 'MySQL']
    },
    {
      title: 'Architecture',
      icon: <Server className="w-6 h-6 text-[#06B6D4]" />,
      skills: ['BLoC (Business Logic Component)', 'Clean Architecture']
    },
    {
      title: 'CI/CD',
      icon: <Smartphone className="w-6 h-6 text-[#f43f5e]" />,
      skills: ['GitHub']
    },
    {
      title: 'Core',
      icon: <Code className="w-6 h-6 text-[#6366f1]" />,
      skills: ['Data Structures and Algorithms', 'OS']
    }
  ];

  const codingPlatforms = [
    { platform: 'LeetCode', problems: '90+', color: '#FFA116' },
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
        <SectionTitle title="Technical Skills" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`professional-card p-6 transition-all duration-1000 ease-out transform
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
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
                      <div className="w-2 h-2 bg-gradient-to-r from-[#3b82f6] to-[#2EC4B6] rounded-full mr-3"></div>
                      <span className={`font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="professional-card p-8">
          <h3 className={`text-2xl font-semibold mb-8 text-center ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
            Coding Platform Experience
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingPlatforms.map((platform, index) => (
              <div
                key={index}
                className={`group p-6 border ${theme === 'light' ? 'border-slate-300' : 'border-slate-600'} rounded-xl 
                          hover:border-[#3b82f6] hover:bg-[#3b82f6]/5 transition-all duration-300 
                          transform hover:-translate-y-2 hover:shadow-lg text-center
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 150 + 800}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.platform.charAt(0)}
                </div>
                <h4 className={`font-semibold mb-2 group-hover:text-[#3b82f6] transition-colors duration-300 
                              ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                  {platform.platform}
                </h4>
                <p className={`text-sm ${theme === 'light' ? 'text-slate-600 group-hover:text-slate-700' : 'text-slate-400 group-hover:text-slate-300'} 
                            transition-colors duration-300`}>
                  Solved {platform.problems} problems
                </p>
                <div className={`mt-4 w-full h-1 ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-700'} rounded-full overflow-hidden`}>
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
