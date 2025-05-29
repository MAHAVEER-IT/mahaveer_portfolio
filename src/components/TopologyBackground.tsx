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

    // Create star particles
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: theme === 'dark' ? 0xffffff : 0x000000,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    // Generate random star positions
    const starVertices = [];
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Create nebula effect
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: theme === 'dark' ? 0x6C63FF : 0x2EC4B6,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });

    const nebulaVertices = [];
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 20;
      const x = Math.cos(theta) * radius;
      const y = (Math.random() - 0.5) * 10;
      const z = Math.sin(theta) * radius;
      nebulaVertices.push(x, y, z);
    }

    nebulaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nebulaVertices, 3));
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Position camera
    camera.position.z = 30;

    // Animation
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate star field slowly
      starField.rotation.y += 0.0002;
      starField.rotation.x += 0.0001;

      // Rotate nebula
      nebula.rotation.y += 0.0005;
      
      // Create pulsing effect for nebula
      const time = Date.now() * 0.001;
      nebulaMaterial.opacity = 0.4 + Math.sin(time) * 0.2;
      
      // Make some stars twinkle
      const positions = starField.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const offset = Math.sin(time + i) * 0.1;
        positions[i + 2] += offset;
      }
      starField.geometry.attributes.position.needsUpdate = true;

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
      scene.remove(starField);
      scene.remove(nebula);
      starGeometry.dispose();
      nebulaGeometry.dispose();
      starMaterial.dispose();
      nebulaMaterial.dispose();
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
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-opacity duration-1000" />
      )}
    </>
  );
};