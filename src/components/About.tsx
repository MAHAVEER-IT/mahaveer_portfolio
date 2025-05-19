import React, { useEffect, useRef } from 'react';
import { GraduationCap, User, Phone, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (bioRef.current) observer.observe(bioRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  const education = [
    {
      degree: 'B.Tech',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2023 - 2027',
      details: 'CGPA – 7.85'
    },
    {
      degree: 'HSC',
      institution: 'Palaniyammal Higher Secondary School',
      duration: '2022 - 2023',
      details: '84.6%'
    },
    {
      degree: 'SSLC',
      institution: 'Palaniyammal Higher Secondary School',
      duration: '2021 – 2022',
      details: 'Completed'
    }
  ];

  return (
    <section 
      id="about" 
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Bio */}
          <div 
            ref={bioRef}
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            <div className="perspective-container card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-[#6C63FF]" />
                <span>Personal Info</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg leading-relaxed">
                  I'm a passionate developer and creative problem-solver with a focus on creating
                  impactful digital solutions. Currently pursuing my B.Tech, I specialize in web development,
                  mobile applications, and software engineering.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, participating in
                  hackathons, and contributing to open-source projects.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#6C63FF]" />
                  <span>+91 6374827794</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[#6C63FF]" />
                  <span>mahaveer.k2023it@sece.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div 
            ref={educationRef}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out"
          >
            <div className="perspective-container card-hover p-6 rounded-xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-[#6C63FF]" />
                <span>Education</span>
              </h3>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#6C63FF] before:to-transparent"
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#6C63FF] transform -translate-x-1/2"></div>
                    <h4 className="text-xl font-medium">{item.degree}</h4>
                    <p className="text-sm opacity-75">{item.duration}</p>
                    <p className="mt-1">{item.institution}</p>
                    <p className="text-sm mt-1 opacity-80">{item.details}</p>
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