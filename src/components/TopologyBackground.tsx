import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

export const TopologyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with fog for depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(theme === 'dark' ? 0x0f172a : 0xf8fafc, 0.002);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create star field
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      const radius = Math.random() * 100 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;

      starPositions[i] = radius * Math.sin(theta) * Math.cos(phi);
      starPositions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      starPositions[i + 2] = radius * Math.cos(theta);
      
      starSizes[i / 3] = Math.random() * 2 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(theme === 'dark' ? 0xffffff : 0x000000) }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        varying float vSize;
        
        void main() {
          vSize = size;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vSize;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
          gl_FragColor = vec4(color, alpha * (vSize * 0.5));
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create nebula clouds
    const nebulaCount = 8;
    const nebulae: THREE.Mesh[] = [];

    for (let i = 0; i < nebulaCount; i++) {
      const nebulaGeometry = new THREE.IcosahedronGeometry(Math.random() * 20 + 10, 2);
      const nebulaMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(theme === 'dark' ? 0x6C63FF : 0x2EC4B6),
        transparent: true,
        opacity: 0.15,
        wireframe: true
      });

      const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
      nebula.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      nebula.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      nebulae.push(nebula);
      scene.add(nebula);
    }

    // Create energy particles
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleVelocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = Math.random() * 50 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;

      particlePositions[i] = radius * Math.sin(theta) * Math.cos(phi);
      particlePositions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      particlePositions[i + 2] = radius * Math.cos(theta);

      particleVelocities[i] = (Math.random() - 0.5) * 0.05;
      particleVelocities[i + 1] = (Math.random() - 0.5) * 0.05;
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.05;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: theme === 'dark' ? 0x6C63FF : 0x2EC4B6,
      size: 0.2,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 100;

    // Animation
    let frame: number;
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Update star shader time
      starMaterial.uniforms.time.value += 0.005;

      // Rotate nebulae
      nebulae.forEach((nebula, index) => {
        nebula.rotation.x += 0.001 * (index + 1);
        nebula.rotation.y += 0.002 * (index + 1);
      });

      // Update particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += particleVelocities[i];
        positions[i + 1] += particleVelocities[i + 1];
        positions[i + 2] += particleVelocities[i + 2];

        // Boundary check and reset
        if (Math.abs(positions[i]) > 50) particleVelocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 50) particleVelocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 50) particleVelocities[i + 2] *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Camera movement based on mouse position
      camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 2;
      mouseY = (event.clientY - windowHalfY) * 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    setIsLoading(false);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);

      nebulae.forEach(nebula => {
        scene.remove(nebula);
        nebula.geometry.dispose();
        (nebula.material as THREE.Material).dispose();
      });

      scene.remove(stars);
      starGeometry.dispose();
      starMaterial.dispose();

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