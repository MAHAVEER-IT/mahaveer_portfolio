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

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 30;
    const density = 1;

    for (let x = -size; x <= size; x += density) {
      for (let y = -size; y <= size; y += density) {
        vertices.push(x, y, Math.sin((x + y) * 0.2) * 2);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: theme === 'dark' ? 0x6C63FF : 0x2EC4B6,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    // Create points
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Position camera
    camera.position.z = 30;

    // Animation
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      points.rotation.x += 0.001;
      points.rotation.y += 0.002;

      const positions = points.geometry.attributes.position.array;
      const time = Date.now() * 0.0002;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] = Math.sin((positions[i] + positions[i + 1] + time) * 0.2) * 2;
      }

      points.geometry.attributes.position.needsUpdate = true;

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
      scene.remove(points);
      geometry.dispose();
      material.dispose();
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