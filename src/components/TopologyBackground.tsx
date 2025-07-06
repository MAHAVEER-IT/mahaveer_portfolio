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

    // Create floating shapes
    const shapes: THREE.Mesh[] = [];
    const shapesCount = 15;
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0)
    ];

    for (let i = 0; i < shapesCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: theme === 'dark' ? 0x6C63FF : 0x2EC4B6,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.scale.setScalar(Math.random() * 2 + 1);
      shapes.push(shape);
      scene.add(shape);
    }

    // Create particle system
    const particlesCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 50;
      particlePositions[i + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: theme === 'dark' ? 0xFFFFFF : 0x000000,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 30;

    // Animation
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((shape, index) => {
        const speed = 0.001 + (index * 0.0002);
        shape.rotation.x += speed;
        shape.rotation.y += speed * 1.5;
        
        // Add floating motion
        const time = Date.now() * 0.001;
        const offset = Math.sin(time + index) * 0.1;
        shape.position.y += offset * 0.01;
      });

      // Rotate particles
      particles.rotation.y += 0.0002;
      
      // Add wave effect to particles
      const positions = particles.geometry.attributes.position.array;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        const distance = Math.sqrt(x * x + z * z);
        positions[i + 1] += Math.sin(distance + time) * 0.01;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;

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

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      shapes.forEach((shape) => {
        shape.rotation.x += mouseY * 0.001;
        shape.rotation.y += mouseX * 0.001;
      });

      particles.rotation.x += mouseY * 0.0002;
      particles.rotation.y += mouseX * 0.0002;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-opacity duration-1000" />
      )}
    </>
  );
};