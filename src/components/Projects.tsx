import React, { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

interface ProjectsProps {
  onProjectSelect: (project: any) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Bank Insight',
      description: 'An all-in-one banking app that offers features such as balance check, mini statements, ATM blocking, customer support, loan calculators, nearby ATM/bank locator, currency converter, and expense tracker.',
      longDescription: `Bank Inishit is a mobile application developed to streamline access to essential banking services from multiple Indian banks within a single platform. Built using Flutter for the frontend and Firebase for authentication, the app focuses on usability, security, and practical daily banking needs.

Key Features:
Secure Authentication:
User registration and login are handled via Firebase, including email verification to ensure account security.

Multi-bank Integration:
Supports four major banks: SBI, Indian Bank, Union Bank, and KVB. For each bank, users can:

Check account balance and view mini statements.

Block ATM cards and contact customer care directly through the bank’s toll-free number.

Locate nearby ATMs and branches via Google Maps integration.

Loan Calculators:
Dedicated calculators for personal and gold loans, customized to reflect each bank’s specific schemes (based on static data for the year 2024).

Bank Holiday Calendar:
Displays each bank's holiday schedule to help users plan their visits (static data for 2024).

Additional Tools:
Includes a real-time currency converter using an external API, a simple expense tracker to monitor spending, and an IFSC code lookup to retrieve bank branch details.

Note: As this is the first version of the project, some data (like holiday calendars and loan schemes) is static.`,
      liveLink: 'https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR?usp=drive_link',
      codeLink: 'https://github.com/MAHAVEER-IT/bank_inish.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1751300070/ajzfnv0p6bweq3amnlbi.png',
      technologies: ['Flutter', 'Firebase', 'Currency Converter API', 'Google Maps API'],
      features: [
        'Secure login and signup with email verification using Firebase',
        'Support for SBI, Indian Bank, Union Bank, and KVB',
        'Balance check and mini statement for each bank via direct dail',
        'ATM card block and customer care via direct dial',
        'Nearby ATM and branch locator with Google Maps integration',
        'Personal loan and gold loan calculators (static data)',
        'Bank holiday calendar for each bank (static data)',
        'Real-time currency converter with external API',
        'Simple expense tracke',
        'IFSC code lookup for bank branch details'
      ],
      challenges: [
        'Implementing secure authentication while maintaining user-friendly experience',
        'Integrating multiple third-party APIs for real-time data',
        'Designing an intuitive UI that works across different screen sizes',
      ],
      duration: '1 months',
      team: 'Solo Project'
    },
    {
      title: 'Sow&Grow',
      description: 'Developed Sow&Grow, an innovative agriculture application designed to help rural farmers monitor diseases, communicate with veterinarians, and receive vaccination alerts.',
      longDescription: `Sow&Grow is a comprehensive agriculture management application that bridges the gap between farmers and modern agricultural practices. The application was designed specifically for rural farmers who often lack access to immediate veterinary care and modern farming techniques.

The app Use a Gemini AI to identify crop diseases through image recognition, allowing farmers to take immediate action. The communication platform connects farmers directly with certified veterinarians and agricultural experts, providing real-time consultation services.

The vaccination alert system uses a smart scheduling algorithm that considers factors like animal age, breed, local disease patterns, and seasonal requirements to provide personalized vaccination reminders.

Additional features include weather forecasting integration, crop planning tools based on soil conditions and climate data, and a community forum where farmers can share experiences and learn from each other.`,
      liveLink: 'https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144',
      codeLink: 'https://github.com/MAHAVEER-IT/Sow-Grow.git',
      image:'https://res.cloudinary.com/dkn3it92b/image/upload/v1751315583/mhef6jixumwfyltnjukn.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'TensorFlow Lite'],
      features: [
        'AI-powered disease detection for crops and livestock with Gemini-AI(API)',
        'Real-time chat with veterinarians and experts',
        'Automated vaccination scheduling and reminders',
        'Multi-language voice assistance for rural users',
        'Weather forecasting and crop planning tools',
        'Community forum for knowledge sharing',
        'Offline functionality for areas with poor connectivity',
        'GPS-based field mapping and monitoring'
      ],
      challenges: [
        'Designing for users with limited smartphone experience',
        'Ensuring app functionality in areas with poor internet connectivity',
        'Integrating multiple data sources for comprehensive farming insights'
      ],
      duration: '4 months',
      team: 'Team of 3'
    },
    {
      title: 'AI-NoteMate',
      description: 'NoteMate is a MERN stack web app designed for productivity, featuring intelligent note-taking, movable sticky notes, and an AI-driven daily planner with speech-to-text capabilities.',
      longDescription: `AI-NoteMate revolutionizes note-taking and task management with advanced AI integration. The application combines traditional note-taking with modern AI capabilities to create a truly intelligent productivity platform.

The core feature is the AI-powered note organization system that automatically categorizes, tags, and connects related notes. Users can create notes through typing, voice input, or by uploading images that are processed through OCR technology.

The interactive sticky note board allows users to create a visual workspace where notes can be dragged, dropped, and organized spatially. This feature is particularly useful for brainstorming sessions and project planning.

The AI daily planner analyzes user patterns, deadlines, and priorities to suggest optimal scheduling. It can automatically reschedule tasks based on changing priorities and send intelligent reminders.

Real-time collaboration features enable teams to work together on shared note collections, with live editing and commenting capabilities.`,
      liveLink: 'https://note-mate-sage.vercel.app/',
      codeLink: 'https://github.com/MAHAVEER-IT/Note-Mate.git',
      image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Socket.io'],
      features: [
        'AI-powered note organization and categorization',
        'Interactive drag-and-drop sticky note board',
        'Smart daily planner with AI scheduling suggestions',
        'Voice-to-text note creation with high accuracy',
        'Real-time collaboration with live editing',
        'Custom themes and personalized layouts',
        'Advanced search with natural language queries',
        'Automated backup and cloud synchronization',
        'Calendar integration for seamless scheduling',
        'Mobile-responsive design for cross-platform access'
      ],
      challenges: [
        'Implementing real-time collaboration without conflicts',
        'Optimizing AI response times for smooth user experience',
        'Creating an intuitive drag-and-drop interface',
        'Balancing feature richness with application performance'
      ],
      duration: '3 Weeks',
      team: 'Solo Project'
    },
    {
  "title": "Blog App",
  "description": "A simple blog app demonstrating clean architecture and BLoC pattern in Flutter.",
  "longDescription": "This blog app was built primarily to understand and implement the clean architecture and BLoC pattern in Flutter. It allows users to create a blog by uploading an image, adding a title and content, and then publishing it. The data is stored in Firebase Firestore. Other users can like and save posts. Authentication is handled via Firebase, and a one-time login system is implemented using Hive local database.",
  "liveLink": 'https://drive.google.com/drive/folders/1gO-ueeL_Biz7fTrmLjLf0Ol9jJhG76Io?usp=sharing',
  "codeLink": 'https://github.com/MAHAVEER-IT/Blog_Flutter.git',
  "image": 'https://res.cloudinary.com/dkn3it92b/image/upload/v1751316254/wiujsd62cscl3wwvq2c2.png',
  "technologies": [
    "Flutter",
    "Firebase Firestore",
    "Firebase Authentication",
    "Hive",
    "BLoC Pattern",
    "Clean Architecture"
  ],
  "features": [
    "Create and publish blog posts with image, title, and content",
    "Store blogs in Firebase Firestore",
    "User authentication with Firebase Auth",
    "One-time login using Hive local DB",
    "Like blog posts",
    "Save blog posts for later"
  ],
  "challenges": [
    "Implementing clean architecture effectively",
    "Integrating BLoC with real-time Firebase updates",
    "Handling image upload and preview",
    "Managing local storage and one-time login with Hive"
  ],
  "duration": "2 weeks",
  "team": "Solo Project"
},
    {
  "title": "Flutter Weather App",
  "description": "A real-time weather app built using Flutter and OpenWeather API, supporting both location and city search.",
  "longDescription": "This Flutter Weather App offers real-time weather updates by fetching data from the OpenWeather API. It includes features like temperature, humidity, wind speed, and current weather conditions with both location-based and city-name-based weather search. The UI is responsive and modern, designed to work across various screen sizes with gradient backgrounds and weather icons.",
  "liveLink": "https://drive.google.com/drive/folders/1Xr5kTQBnjNTxuM7GS98WjtjeauRPgX_3?usp=drive_link",
  "codeLink": "https://github.com/MAHAVEER-IT/Weather_app.git",
  "image": "https://res.cloudinary.com/dkn3it92b/image/upload/v1751382671/gy96ggt37wcm0rugagkf.png",
  "technologies": [
    "Flutter",
    "Dart",
    "OpenWeather API"
  ],
  "features": [
    "City-based weather search",
    "Location-based weather updates",
    "Current temperature and weather condition display",
    "Min/Max temperature info",
    "Humidity and wind speed monitoring",
    "Local time and date display",
    "Modern, responsive UI with gradient backgrounds"
  ],
  "challenges": [
    "Handling real-time API data updates efficiently",
    "Implementing responsive design for various screen sizes",
    "Managing location permissions and GPS accuracy"
  ],
  "duration": "1 Day",
  "team": "Solo Project"
},


  ];

  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  const openProjectDetail = (index: number) => {
    onProjectSelect(projects[index]);
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
              className={`perspective-container transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
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
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
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
                      onClick={() => openProjectDetail(index)}
                      className="flex items-center text-sm font-medium text-[#6C63FF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-opacity-50 rounded px-1 py-1"
                      aria-label={`View ${project.title} details`}
                    >
                      <Info className="w-4 h-4 mr-1" />
                      <span>More Details</span>
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
