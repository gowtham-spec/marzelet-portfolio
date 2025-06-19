import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      sphereRef.current.rotation.y += 0.02;
    }

    if (octahedronRef.current) {
      octahedronRef.current.position.x = Math.cos(state.clock.elapsedTime * 1.5) * 1.5;
      octahedronRef.current.position.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
      octahedronRef.current.rotation.x += 0.015;
      octahedronRef.current.rotation.z += 0.01;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.008;
      boxRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Box with enhanced materials */}
      <Box ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.7}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </Box>
      
      {/* Rotating Torus with gradient effect */}
      <Torus ref={torusRef} args={[1.5, 0.1, 8, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.8}
          roughness={0.1}
          emissive="#7c3aed"
          emissiveIntensity={0.15}
        />
      </Torus>
      
      {/* Floating Sphere */}
      <Sphere ref={sphereRef} args={[0.3]} position={[2, 0, 0]}>
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.6}
          roughness={0.3}
          emissive="#047857"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Orbiting Octahedron */}
      <Octahedron ref={octahedronRef} args={[0.4]} position={[1.5, 0, 0]}>
        <meshStandardMaterial 
          color="#f59e0b" 
          metalness={0.9}
          roughness={0.1}
          emissive="#d97706"
          emissiveIntensity={0.1}
        />
      </Octahedron>

      {/* Additional floating elements */}
      <Sphere args={[0.15]} position={[-2.5, 1, 0.5]}>
        <meshStandardMaterial 
          color="#ef4444" 
          metalness={0.5}
          roughness={0.4}
          emissive="#dc2626"
          emissiveIntensity={0.1}
        />
      </Sphere>

      <Box args={[0.3, 0.3, 0.3]} position={[0, -2, 1]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.7}
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.1}
        />
      </Box>
    </group>
  );
};

export const FloatingLogo: React.FC = () => {
  return (
    <div className="w-64 h-64 mx-auto">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight 
          position={[5, 5, 5]} 
          angle={0.3} 
          penumbra={0.5} 
          intensity={1} 
          color="#3b82f6"
        />
        <AnimatedLogo />
      </Canvas>
    </div>
  );
};