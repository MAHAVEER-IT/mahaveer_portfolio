import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const CursorStarsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
    lifespan: number;
    maxLifespan: number;
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: Star[] = [];
    // Update colors based on theme
    const colors = theme === 'light' 
      ? ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'] // Blue/purple for light theme
      : ['#6C63FF', '#2EC4B6', '#FFD700', '#ffffff']; // Original colors for dark theme
    let isActive = false;
    
    // Set canvas to full screen
    const updateCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    // Initial size
    updateCanvasSize();
    
    // Update on resize
    window.addEventListener('resize', updateCanvasSize);
    
    // Only start tracking after first mouse move
    const activateTracking = (e: MouseEvent) => {
      isActive = true;
      window.removeEventListener('mousemove', activateTracking);
      
      // Create initial stars
      createStar(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', activateTracking);
    
    // Track mouse movements
    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return;
      createStar(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create a star
    function createStar(x: number, y: number) {
      // Only create stars with some probability
      if (Math.random() > 0.3 || !ctx || !canvas) return;
      
      const star: Star = {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,  // Random horizontal velocity
        vy: (Math.random() - 0.5) * 2 - 1.5, // Random vertical velocity with upward bias
        size: Math.random() * 3 + 1, // Size between 1-4
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.8,
        lifespan: Math.random() * 30 + 30, // Lifespan between 30-60 frames
        maxLifespan: 60
      };
      
      stars.push(star);
      
      // Limit number of stars for performance
      if (stars.length > 50) {
        stars.shift(); // Remove oldest star
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear canvas with transparent black to create trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        
        // Update physics
        star.x += star.vx;
        star.y += star.vy;
        star.vx *= 0.96; // Horizontal friction
        star.vy = star.vy * 0.96 + 0.05; // Vertical friction + gravity
        star.lifespan--;
        
        // Fade out and scale calculation
        const fadeRatio = star.lifespan / star.maxLifespan;
        star.opacity = fadeRatio * 0.8;
        
        // Remove dead stars
        if (star.lifespan <= 0) {
          stars.splice(i, 1);
          continue;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * (1 + (1 - fadeRatio) * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();
        
        // Add glow effect
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        glow.addColorStop(0, star.color);
        glow.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.globalAlpha = star.opacity * 0.5;
        ctx.fill();
        
        // Reset global alpha
        ctx.globalAlpha = 1;
      }
      
      requestAnimationFrame(animate);
    }
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', activateTracking);
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Add theme dependency
  
  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-50 pointer-events-none ${theme === 'light' ? 'mix-blend-multiply' : 'mix-blend-screen'}`}
    />
  );
};
