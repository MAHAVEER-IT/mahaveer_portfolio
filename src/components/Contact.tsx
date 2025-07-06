import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, Map, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
  message: boolean;
}

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
    // Clear any previous status messages
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: !formState.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email),
      message: !formState.message.trim()
    };
    
    setFormErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields correctly.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Check if EmailJS environment variables are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: simulate email sending for demo purposes
        console.log('EmailJS not configured. Simulating email send...');
        console.log('Form data:', formState);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! (Demo mode - EmailJS not configured)'
        });
        
        // Reset form after success
        setFormState({
          name: '',
          email: '',
          message: ''
        });
        
        return;
      }

      // Use EmailJS if properly configured
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        to_name: 'Mahaveer K',
        message: formState.message,
        reply_to: formState.email
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form after success
      setFormState({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

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

  // Initialize EmailJS only if environment variables are available
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-padding relative section-with-butterflies transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[#6C63FF] after:to-[#2EC4B6]">
            Get in Touch
          </span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`space-y-6 p-8 rounded-xl card-transparent shadow-xl transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 group-hover:bg-[#6C63FF]/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a 
                    href="mailto:mahaveer.k2023it@sece.ac.in" 
                    className="text-white hover:text-[#6C63FF] transition-colors duration-300 font-medium"
                  >
                    mahaveer.k2023it@sece.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-[#2EC4B6]/20 border border-[#2EC4B6]/30 group-hover:bg-[#2EC4B6]/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#2EC4B6]" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <a 
                    href="tel:+916374827794" 
                    className="text-white hover:text-[#2EC4B6] transition-colors duration-300 font-medium"
                  >
                    +91 6374827794
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 group-hover:bg-[#FFD700]/30 transition-all duration-300">
                  <Map className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <span className="text-white font-medium">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Response time info */}
            <div className="mt-8 p-4 rounded-lg bg-slate-700/50 border border-slate-600/50">
              <p className="text-sm text-slate-300">
                <span className="text-[#6C63FF] font-medium">Quick Response:</span> I typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 p-8 rounded-xl card-transparent shadow-xl transition-all duration-1000 ease-out transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              <p className="text-slate-400 text-sm mt-2">Fill out the form below and I'll get back to you soon.</p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 ${
                  formErrors.name 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-slate-600/50 focus:border-[#6C63FF] hover:border-slate-500/70'
                } focus:ring-2 focus:ring-[#6C63FF]/20 outline-none text-white placeholder-slate-400`}
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Name is required
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 ${
                  formErrors.email 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-slate-600/50 focus:border-[#6C63FF] hover:border-slate-500/70'
                } focus:ring-2 focus:ring-[#6C63FF]/20 outline-none text-white placeholder-slate-400`}
              />
              {formErrors.email && (
                <p className="text-red-400 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                className={`w-full p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 ${
                  formErrors.message 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-slate-600/50 focus:border-[#6C63FF] hover:border-slate-500/70'
                } focus:ring-2 focus:ring-[#6C63FF]/20 outline-none resize-none text-white placeholder-slate-400`}
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Message is required
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] text-white font-semibold flex items-center justify-center space-x-2 hover:from-[#5A52D5] hover:to-[#26A69A] transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`flex items-start space-x-3 p-4 rounded-lg border transition-all duration-300 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm leading-relaxed">{submitStatus.message}</p>
              </div>
            )}

            {/* EmailJS Setup Notice */}
            {!import.meta.env.VITE_EMAILJS_SERVICE_ID && (
              <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <p className="text-blue-400 text-xs">
                  <strong>Note:</strong> EmailJS is not configured. The form will work in demo mode. 
                  To enable real email sending, configure EmailJS environment variables.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};