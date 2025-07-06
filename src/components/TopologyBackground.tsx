import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

export const TopologyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating shapes with reduced opacity
    const shapes: THREE.Mesh[] = [];
    const shapesCount = 8; // Reduced count
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0)
    ];

    for (let i = 0; i < shapesCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: 0x6C63FF,
        transparent: true,
        opacity: 0.1, // Much more subtle
        wireframe: true
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.scale.setScalar(Math.random() * 1.5 + 0.5);
      shapes.push(shape);
      scene.add(shape);
    }

    // Create minimal particle system
    const particlesCount = 500; // Reduced count
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 60;
      particlePositions[i + 1] = (Math.random() - 0.5) * 60;
      particlePositions[i + 2] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.02, // Smaller size
      transparent: true,
      opacity: 0.3, // More subtle
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 40;

    // Animation
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Slow rotation for shapes
      shapes.forEach((shape, index) => {
        const speed = 0.0005 + (index * 0.0001);
        shape.rotation.x += speed;
        shape.rotation.y += speed * 1.2;
      });

      // Very slow particle rotation
      particles.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();
    setIsLoading(false);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      
      shapes.forEach(shape => {
        scene.remove(shape);
        shape.geometry.dispose();
        shape.material.dispose();
      });
      
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      scene.remove(ambientLight);
      scene.remove(directionalLight);
      
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-900 transition-opacity duration-1000" />
      )}
    </>
  );
};