import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Code, PanelRight, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Bank Insight',
      description: 'An all-in-one banking app that offers features such as balance check, mini statements, ATM blocking, customer support, loan calculators, nearby ATM/bank locator, currency converter, and expense tracker.',
      longDescription: `Bank Insight is a comprehensive banking application designed to provide users with a seamless banking experience. Key features include:

• Real-time balance checking and mini statement generation
• Secure ATM card management with instant blocking capability
• Interactive loan calculators for various types of loans
• Integrated ATM and bank branch locator with maps
• Live currency converter with support for multiple currencies
• Detailed expense tracking and categorization`,
      liveLink: 'https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR?usp=drive_link',
      codeLink: 'https://github.com/MAHAVEER-IT/bank_inish.git',
      image: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Flutter', 'Firebase', 'currency converter API']
    },
    {
      title: 'Sow&Grow',
      description: 'Developed Sow&Grow, an innovative agriculture application designed to help rural farmers monitor diseases, communicate with veterinarians, and receive vaccination alerts.',
      longDescription: `Sow&Grow is a comprehensive agriculture management application that bridges the gap between farmers and modern agricultural practices. The application features:

• AI-powered disease detection for crops and livestock
• Real-time communication with veterinarians and experts
• Automated vaccination scheduling and reminders
• Voice assistance in multiple local languages
• Weather forecasting and crop planning tools
• Community forum for knowledge sharing
• Offline functionality for rural areas
• GPS-based field mapping and monitoring`,
      liveLink: 'https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144',
      codeLink: 'https://github.com/MAHAVEER-IT/Sow-Grow.git',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Maps API']
    },
    {
      title: 'AI-NoteMate',
      description: 'NoteMate is a MERN stack web app designed for productivity, featuring intelligent note-taking, movable sticky notes, and an AI-driven daily planner with speech-to-text capabilities.',
      longDescription: `AI-NoteMate revolutionizes note-taking and task management with advanced AI integration. Key features include:

• AI-powered note organization and categorization
• Interactive drag-and-drop sticky note board
• Smart daily planner with AI scheduling suggestions
• Voice-to-text note creation
• Real-time collaboration capabilities
• Custom themes and layout options
• Advanced search and filtering
• Automated backup and synchronization
• Integration with calendar applications
• Mobile-responsive design for on-the-go access`,
      liveLink: 'https://note-mate-sage.vercel.app/',
      codeLink: 'https://github.com/MAHAVEER-IT/Note-Mate.git',
      image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'OpenAI']
    },
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dialogContentRef = useRef<HTMLDivElement>(null);

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

  // Handle dialog open/close and scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (selectedProject !== null && !target.closest('.dialog-content')) {
        setSelectedProject(null);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject !== null) {
        setSelectedProject(null);
      }
    };

    // Prevent background scrolling when dialog is open
    const preventBackgroundScroll = (event: TouchEvent | WheelEvent) => {
      if (selectedProject !== null) {
        const target = event.target as HTMLElement;
        const dialogContent = target.closest('.dialog-scrollable-content');
        
        if (!dialogContent) {
          event.preventDefault();
        }
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      document.addEventListener('wheel', preventBackgroundScroll, { passive: false });
      document.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('wheel', preventBackgroundScroll);
      document.removeEventListener('touchmove', preventBackgroundScroll);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  const openDialog = (index: number) => {
    setSelectedProject(index);
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
                  <div className="flex justify-between items-center">
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
                      onClick={() => openDialog(index)}
                      className="flex items-center text-sm font-medium text-[#6C63FF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-opacity-50 rounded px-1 py-1"
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

      {/* Project Details Dialog - Fixed Scrolling */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          onClick={closeDialog}
        >
          <div 
            ref={dialogContentRef}
            className="dialog-content relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl transform transition-all duration-300 ease-out flex flex-col"
            style={{
              maxHeight: 'calc(100vh - 2rem)',
              maxWidth: 'calc(100vw - 2rem)',
              minHeight: '300px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header */}
            <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate pr-4">
                {projects[selectedProject].title}
              </h3>
              <button
                onClick={closeDialog}
                className="flex-shrink-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-opacity-50"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div 
              className="dialog-scrollable-content flex-1 overflow-y-auto"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <div className="prose dark:prose-invert max-w-none mb-6">
                  {projects[selectedProject].longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4">
                  <a
                    href={projects[selectedProject].codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5A52D5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-opacity-50"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={projects[selectedProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#25A093] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:ring-opacity-50"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};