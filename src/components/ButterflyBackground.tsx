import React, { useEffect, useRef } from 'react';

interface Butterfly {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  wingPhase: number;
  color: string;
  opacity: number;
  trail: Array<{ x: number; y: number; opacity: number }>;
}

export const ButterflyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const butterfliesRef = useRef<Butterfly[]>([]);
  const animationRef = useRef<number>();

  const colors = [
    '#FFB3E6', // Soft pink
    '#B3E5FF', // Light blue
    '#E6B3FF', // Lavender
    '#FFE6B3', // Soft yellow
    '#B3FFE6', // Mint green
    '#FFD1B3', // Peach
    '#D1B3FF'  // Light purple
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize butterflies
    const initializeButterflies = () => {
      butterfliesRef.current = [];
      for (let i = 0; i < 7; i++) {
        butterfliesRef.current.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 20 + Math.random() * 30, // 20px to 50px
          speed: 0.3 + Math.random() * 0.7, // Slow, graceful movement
          direction: Math.random() * Math.PI * 2,
          wingPhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.3 + Math.random() * 0.4, // 0.3 to 0.7 opacity
          trail: []
        });
      }
    };

    initializeButterflies();

    // Draw butterfly function
    const drawButterfly = (butterfly: Butterfly) => {
      const { x, y, size, wingPhase, color, opacity } = butterfly;
      
      ctx.save();
      ctx.translate(x, y);
      
      // Create glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 0.8;
      ctx.globalAlpha = opacity;

      // Wing animation (subtle flapping)
      const wingOffset = Math.sin(wingPhase) * 0.3;
      
      // Draw butterfly body
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.05, size * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw wings
      ctx.fillStyle = color;
      
      // Left upper wing
      ctx.save();
      ctx.rotate(wingOffset);
      ctx.beginPath();
      ctx.ellipse(-size * 0.15, -size * 0.2, size * 0.25, size * 0.35, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Right upper wing
      ctx.save();
      ctx.rotate(-wingOffset);
      ctx.beginPath();
      ctx.ellipse(size * 0.15, -size * 0.2, size * 0.25, size * 0.35, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Left lower wing
      ctx.save();
      ctx.rotate(wingOffset * 0.7);
      ctx.beginPath();
      ctx.ellipse(-size * 0.1, size * 0.1, size * 0.15, size * 0.2, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Right lower wing
      ctx.save();
      ctx.rotate(-wingOffset * 0.7);
      ctx.beginPath();
      ctx.ellipse(size * 0.1, size * 0.1, size * 0.15, size * 0.2, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();
    };

    // Draw sparkle trail
    const drawTrail = (butterfly: Butterfly) => {
      butterfly.trail.forEach((point, index) => {
        ctx.save();
        ctx.globalAlpha = point.opacity;
        ctx.fillStyle = butterfly.color;
        ctx.shadowColor = butterfly.color;
        ctx.shadowBlur = 8;
        
        const sparkleSize = (butterfly.size * 0.1) * (point.opacity / 0.5);
        ctx.beginPath();
        ctx.arc(point.x, point.y, sparkleSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Update butterfly position and animation
    const updateButterfly = (butterfly: Butterfly) => {
      // Natural flight pattern with gentle curves
      butterfly.direction += (Math.random() - 0.5) * 0.1;
      butterfly.x += Math.cos(butterfly.direction) * butterfly.speed;
      butterfly.y += Math.sin(butterfly.direction) * butterfly.speed + Math.sin(Date.now() * 0.001 + butterfly.id) * 0.2;

      // Wing animation
      butterfly.wingPhase += 0.15;

      // Add to trail
      if (butterfly.trail.length === 0 || 
          Math.abs(butterfly.trail[butterfly.trail.length - 1].x - butterfly.x) > 5 ||
          Math.abs(butterfly.trail[butterfly.trail.length - 1].y - butterfly.y) > 5) {
        butterfly.trail.push({
          x: butterfly.x,
          y: butterfly.y,
          opacity: 0.5
        });
      }

      // Update trail opacity and remove old points
      butterfly.trail = butterfly.trail.map(point => ({
        ...point,
        opacity: point.opacity * 0.95
      })).filter(point => point.opacity > 0.05);

      // Keep trail length manageable
      if (butterfly.trail.length > 15) {
        butterfly.trail.shift();
      }

      // Wrap around screen edges with smooth transition
      if (butterfly.x < -50) butterfly.x = canvas.width + 50;
      if (butterfly.x > canvas.width + 50) butterfly.x = -50;
      if (butterfly.y < -50) butterfly.y = canvas.height + 50;
      if (butterfly.y > canvas.height + 50) butterfly.y = -50;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      butterfliesRef.current.forEach(butterfly => {
        updateButterfly(butterfly);
        drawTrail(butterfly);
        drawButterfly(butterfly);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-1"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen' // Creates a beautiful luminous effect
      }}
    />
  );
};