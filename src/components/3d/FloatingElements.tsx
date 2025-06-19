import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: 'sphere' | 'box' | 'octahedron' | 'torus' | 'cone';
  scale?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, speed, shape, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.5;
      meshRef.current.rotation.y += speed * 0.3;
      meshRef.current.rotation.z += speed * 0.2;
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  const getShapeComponent = () => {
    switch (shape) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.3 * scale]} position={position} />;
      case 'box':
        return <Box ref={meshRef} args={[0.5 * scale, 0.5 * scale, 0.5 * scale]} position={position} />;
      case 'octahedron':
        return <Octahedron ref={meshRef} args={[0.4 * scale]} position={position} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.3 * scale, 0.1 * scale, 8, 16]} position={position} />;
      case 'cone':
        return <Cone ref={meshRef} args={[0.3 * scale, 0.6 * scale, 8]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.3 * scale]} position={position} />;
    }
  };

  return (
    <>
      {getShapeComponent()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8} 
        metalness={0.6}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </>
  );
};

export const FloatingElements: React.FC = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2], color: '#3b82f6', speed: 0.8, shape: 'sphere', scale: 1.2 },
    { position: [4, -1, -1], color: '#8b5cf6', speed: 1.2, shape: 'box', scale: 0.8 },
    { position: [-3, -2, 1], color: '#10b981', speed: 1.0, shape: 'octahedron', scale: 1.0 },
    { position: [3, 3, 0], color: '#f59e0b', speed: 0.6, shape: 'torus', scale: 1.1 },
    { position: [0, -3, -3], color: '#ef4444', speed: 1.4, shape: 'cone', scale: 0.9 },
    { position: [-5, 0, 2], color: '#06b6d4', speed: 0.9, shape: 'sphere', scale: 0.7 },
    { position: [5, 1, -2], color: '#84cc16', speed: 1.1, shape: 'box', scale: 0.6 },
    { position: [1, 4, 1], color: '#f97316', speed: 0.7, shape: 'octahedron', scale: 0.8 },
  ] as const, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#8b5cf6" />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};