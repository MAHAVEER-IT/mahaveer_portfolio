import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number; // Add delay option to stagger animations
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', once = true, delay = 0 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use RAF for smoother state updates
  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      if (delay) {
        // Use setTimeout with delay if specified to stagger animations
        setTimeout(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        }, delay);
      } else {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }
      
      // Disconnect observer if we only want to trigger once
      if (once && ref.current && observer.current) {
        observer.current.unobserve(ref.current);
      }
    } else if (!once) {
      requestAnimationFrame(() => {
        setIsVisible(false);
      });
    }
  }, [once, delay]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use passive option for better performance
    const options = {
      threshold,
      rootMargin,
    };

    // Create observer with optimized options
    observer.current = new IntersectionObserver(callback, options);
    
    // Add a slight delay before observing to avoid layout thrashing
    const timer = setTimeout(() => {
      if (observer.current && element) {
        observer.current.observe(element);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer.current && element) {
        observer.current.unobserve(element);
        observer.current.disconnect();
      }
    };
  }, [callback, threshold, rootMargin]);

  return { ref, isVisible };
};