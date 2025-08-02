/* App level performance optimizations */
import React, { useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

interface DeferredContentProps {
  children: React.ReactNode;
  delay?: number;
}

export const usePerformanceOptimizations = () => {
  useEffect(() => {
    // Detect passive event support
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function() { 
          supportsPassive = true;
          return true;
        }
      });
      // @ts-ignore - test for passive support
      window.addEventListener('testPassive', () => {}, opts);
      // @ts-ignore - remove test listener
      window.removeEventListener('testPassive', () => {}, opts);
    } catch (e) {}
    
    const wheelOpt = supportsPassive ? { passive: true } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    
    // Throttle scroll events to reduce layout thrashing
    let scrollTimeout: number | null = null;
    let lastScrollY = 0;
    const scrollThreshold = 50; // px
    
    const handleScroll = () => {
      if (scrollTimeout) {
        // Skip this event if we're throttling
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      // Only process scroll events if we've moved by more than the threshold
      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        lastScrollY = currentScrollY;
        
        // Add 'is-scrolling' class to body during scroll
        document.body.classList.add('is-scrolling');
        
        // Set a timeout to remove it
        if (scrollTimeout) {
          window.clearTimeout(scrollTimeout);
        }
      }
      
      // Throttle
      scrollTimeout = window.setTimeout(() => {
        scrollTimeout = null;
        document.body.classList.remove('is-scrolling');
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll, wheelOpt);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, []);
  
  return null;
};

// Optimized image loading component
export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = 'lazy' 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${className || ''}`}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
    />
  );
};

// Add a component to defer non-critical content
export const DeferredContent: React.FC<DeferredContentProps> = ({ 
  children, 
  delay = 300 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!isVisible) {
    return <div className="deferred-content-placeholder" />;
  }
  
  return <React.Fragment>{children}</React.Fragment>;
};
