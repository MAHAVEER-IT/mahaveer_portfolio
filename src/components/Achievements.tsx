import React, { useEffect, useRef, useState } from 'react';
import { Award, Check } from 'lucide-react';

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    'Freshothon (Project Expo) – Secured third place',
    'Hackastrom (36-hour Hackathon) – Achieved second place',
    'Tech Trek Hackathon (8-hour Hackathon) – Advanced to the final round',
    'Vultr Cloud Innovate Hackathon by GeeksforGeeks – selected for two rounds'
  ];

  const certifications = [
    'Certification SQL (HackerRank)',
    'Data Structures and Algorithms (Udemy)',
    '5-Day Flutter Bootcamp (LetsUpgrade)'
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
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Achievements
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Achievements */}
          <div
            className={`perspective-container transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="card-hover h-full p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6C63FF] opacity-5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FFD700] opacity-5 rounded-full"></div>
              
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#FFD700] mr-3" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>

              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-700 ease-out transform
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#6C63FF] rounded-full text-white mr-3 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`perspective-container transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="card-hover h-full p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2EC4B6] opacity-5 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#6C63FF] opacity-5 rounded-full"></div>
              
              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-[#2EC4B6] mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M4 10h16" />
                  <path d="M10 14l2 2 4-4" />
                </svg>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <ul className="space-y-4">
                {certifications.map((certification, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-700 ease-out transform
                              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#2EC4B6] rounded-full text-white mr-3 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};