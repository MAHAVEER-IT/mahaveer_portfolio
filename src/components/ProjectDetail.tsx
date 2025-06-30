import React, { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  liveLink: string;
  codeLink: string;
  image: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
  duration?: string;
  team?: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleBackClick = () => {
    setIsVisible(false);
    setTimeout(onBack, 300);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[#6C63FF] hover:text-[#5A52D5] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Project Info */}
            <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.duration && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5A52D5] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#6C63FF] text-[#6C63FF] rounded-lg hover:bg-[#6C63FF] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
                Technologies Used
              </span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-[#6C63FF] hover:text-[#6C63FF]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100 + 700}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className={`transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
                  Project Overview
                </span>
              </h2>
              
              <div className="prose dark:prose-invert max-w-none">
                {project.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features Section */}
            {project.features && (
              <div className={`mt-16 transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-[#6C63FF]" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Section */}
            {project.challenges && (
              <div className={`mt-16 transform transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-6">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border-l-4 border-[#6C63FF]"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-700 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Interested in this project?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Feel free to explore the live demo or check out the source code. I'm always open to discussing the technical details and implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#6C63FF] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#6C63FF] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};