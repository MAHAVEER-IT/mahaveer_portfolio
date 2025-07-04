import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
                ${scrolled ? 'bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-xl md:text-2xl font-bold gradient-text"
              aria-label="Mahaveer K - Home"
            >
              Mahaveer K
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-200 ease-in-out
                              hover:text-[#6C63FF] relative before:absolute before:bottom-0 
                              before:left-0 before:h-0.5 before:w-0 hover:before:w-full 
                              before:bg-[#6C63FF] before:transition-all before:duration-300 text-white`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-all duration-200 text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
                  ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-4 py-2 space-y-1 pb-5 bg-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block py-3 text-center text-base font-medium hover:text-[#6C63FF] transition-colors duration-200 text-white"
              onClick={handleNavLinkClick}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};