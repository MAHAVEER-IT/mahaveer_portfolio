import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Smartphone, Globe, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-[#6C63FF]" />,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'Dart', level: 90 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6 text-[#2EC4B6]" />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database className="w-6 h-6 text-[#FFD700]" />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 90 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6 text-[#FF6B6B]" />,
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Android Studio', level: 80 },
        { name: 'iOS Development', level: 70 },
        { name: 'React Native', level: 65 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6 text-[#9333EA]" />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: <Server className="w-6 h-6 text-[#06B6D4]" />,
      skills: [
        { name: 'Vercel', level: 85 },
        { name: 'Render', level: 80 },
        { name: 'Firebase Hosting', level: 85 },
        { name: 'Google Cloud', level: 70 }
      ]
    }
  ];

  const codingPlatforms = [
    { platform: 'LeetCode', problems: '40+', color: '#FFA116' },
    { platform: 'CodeChef', problems: '50+', color: '#5B4638' },
    { platform: 'SkillRack', problems: '100+', color: '#00A651' },
    { platform: 'HackerRank', problems: '100+', color: '#00EA64' }
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
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                {category.icon}
                <span className="ml-3">{category.title}</span>
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`transition-all duration-700 ease-out transform
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${skillIndex * 100 + index * 150 + 300}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100 + index * 150 + 500}ms`
                        }}
                      ></div>
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
                style={{ transitionDelay: `${index * 150 + 800}ms` }}
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

        {/* Professional Highlights */}
        <div className="mt-16 text-center">
          <div className="professional-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-white">Technical Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#6C63FF] mb-2">5+</div>
                <p className="text-slate-300">Programming Languages</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2EC4B6] mb-2">10+</div>
                <p className="text-slate-300">Frameworks & Tools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">300+</div>
                <p className="text-slate-300">Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};