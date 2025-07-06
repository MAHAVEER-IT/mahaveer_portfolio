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
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(1, 0)
    ];

    for (let i = 0; i < shapesCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.6, 0.7, 0.6),
        transparent: true,
        opacity: 0.3,
        wireframe: Math.random() > 0.5
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.scale.setScalar(Math.random() * 2 + 0.5);
      shapes.push(shape);
      scene.add(shape);
    }

    // Create particle system
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleColors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 100;
      particlePositions[i + 1] = (Math.random() - 0.5) * 100;
      particlePositions[i + 2] = (Math.random() - 0.5) * 100;

      const color = new THREE.Color().setHSL(Math.random() * 0.3 + 0.6, 0.8, 0.7);
      particleColors[i] = color.r;
      particleColors[i + 1] = color.g;
      particleColors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < particlesCount; i++) {
      const x1 = particlePositions[i * 3];
      const y1 = particlePositions[i * 3 + 1];
      const z1 = particlePositions[i * 3 + 2];

      for (let j = i + 1; j < particlesCount; j++) {
        const x2 = particlePositions[j * 3];
        const y2 = particlePositions[j * 3 + 1];
        const z2 = particlePositions[j * 3 + 2];

        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

        if (distance < 15) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
          
          const color = new THREE.Color().setHSL(0.6, 0.5, 0.5);
          lineColors.push(color.r, color.g, color.b, color.r, color.g, color.b);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.2,
      vertexColors: true
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x6C63FF, 1, 100);
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 50;

    // Animation
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((shape, index) => {
        const speed = 0.001 + (index * 0.0002);
        shape.rotation.x += speed;
        shape.rotation.y += speed * 1.5;
        shape.rotation.z += speed * 0.5;
      });

      // Rotate particle system
      particles.rotation.y += 0.0005;
      lines.rotation.y += 0.0005;

      // Move point light
      const time = Date.now() * 0.001;
      pointLight.position.x = Math.sin(time) * 30;
      pointLight.position.z = Math.cos(time) * 30 + 20;

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
      scene.remove(lines);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      
      scene.remove(ambientLight);
      scene.remove(directionalLight);
      scene.remove(pointLight);
      
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