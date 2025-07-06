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
      const templateParams = {
        from_name: formState.name,
        reply_to: formState.email,
        message: formState.message,
        to_name: 'Mahaveer K'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-full py-20 flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Get in Touch</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={infoRef}
            className="space-y-6 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                mahaveer.k2023it@sece.ac.in
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +91 6374827794
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Map className="w-6 h-6 text-primary" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border ${
                  formErrors.name ? 'border-red-500' : 'border-transparent'
                } focus:border-primary focus:ring-1 focus:ring-primary outline-none`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Name is required
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border ${
                  formErrors.email ? 'border-red-500' : 'border-transparent'
                } focus:border-primary focus:ring-1 focus:ring-primary outline-none`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Please enter a valid email
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border ${
                  formErrors.message ? 'border-red-500' : 'border-transparent'
                } focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Message is required
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 rounded-lg bg-primary text-white font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus.type && (
              <div
                className={`flex items-center space-x-2 p-3 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};