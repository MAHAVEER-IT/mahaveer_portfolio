import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Code, PanelRight } from 'lucide-react';
import { code } from 'three/tsl';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Bank Insight',
      description: 'An all-in-one banking app that offers features such as balance check, mini statements, ATM blocking, customer support, loan calculators, nearby ATM/bank locator, currency converter, and expense tracker.',
      liveLink: 'https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR?usp=drive_link',
      codeLink: 'https://github.com/MAHAVEER-IT/bank_inish.git',
      image: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
      technologies: ['Flutter', 'Firebase', 'currency converter API',]
    },
    {
      title: 'Sow&Grow',
      description: 'Developed Sow&Grow, an innovative agriculture application designed to help rural farmers monitor diseases, communicate with veterinarians, and receive vaccination alerts. Oversaw the development process utilizing Flutter, incorporating features such as voice assistance, AI-driven image recognition, and real-time mapping with support for local languages.',
      liveLink: 'https://drive.google.com/drive/folders/1Wtnws7KfFGfdtW0MnelPB_bsFw71JwVl?usp=drive_link',
      codeLink: 'https://github.com/MAHAVEER-IT/Farmcare_Flutter.git',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Maps API']
    },
    {
      title: 'Note Mate',
      description: 'NoteMate is a MERN stack web app designed for productivity, featuring intelligent note-taking, movable sticky notes, and an AI-driven daily planner with speech-to-text capabilities. It provides organized notes, a visual sticky note board, AI-generated schedules, and personalized reminders, while supporting theme and language preferences for efficient task management.',
      liveLink: 'https://note-mate-sage.vercel.app/',
      codeLink: 'https://github.com/MAHAVEER-IT/Note-Mate.git',
      image: 'https://images.pexels.com/photos/6804605/pexels-photo-6804605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'OpenAI']
    }
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="section-padding relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`perspective-container opacity-0 translate-y-10 transition-all duration-1000 ease-out`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={`card-hover rounded-xl overflow-hidden shadow-xl transition-all duration-500 
                           ${activeProject === index ? 'scale-[1.02]' : 'scale-100'}`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex justify-between">
                    <a
                      href={project.codeLink}
                      className="flex items-center text-sm font-medium text-[#6C63FF] hover:underline"
                      aria-label={`View ${project.title} code on GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      className="flex items-center text-sm font-medium text-[#6C63FF] hover:underline"
                      aria-label={`Visit ${project.title} live website`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>Live Demo</span>
                    </a>
                    <button
                      className="flex items-center text-sm font-medium text-[#6C63FF] hover:underline"
                      aria-label={`View ${project.title} details`}
                    >
                      <PanelRight className="w-4 h-4 mr-1" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};