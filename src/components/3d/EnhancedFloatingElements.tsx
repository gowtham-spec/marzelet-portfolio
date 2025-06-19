import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus, Cone, Cylinder, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: 'sphere' | 'box' | 'octahedron' | 'torus' | 'cone' | 'cylinder' | 'dodecahedron';
  scale?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, speed, shape, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const initialX = position[0];
  const initialZ = position[2];

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced rotation with different axes
      meshRef.current.rotation.x += speed * 0.7;
      meshRef.current.rotation.y += speed * 0.5;
      meshRef.current.rotation.z += speed * 0.3;
      
      // More complex floating motion
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 1.2;
      meshRef.current.position.x = initialX + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.5;
      meshRef.current.position.z = initialZ + Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.3;
      
      // Pulsing scale effect
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * speed * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * pulseScale);
    }
  });

  const getShapeComponent = () => {
    switch (shape) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.4 * scale]} position={position} />;
      case 'box':
        return <Box ref={meshRef} args={[0.6 * scale, 0.6 * scale, 0.6 * scale]} position={position} />;
      case 'octahedron':
        return <Octahedron ref={meshRef} args={[0.5 * scale]} position={position} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.4 * scale, 0.15 * scale, 8, 16]} position={position} />;
      case 'cone':
        return <Cone ref={meshRef} args={[0.4 * scale, 0.8 * scale, 8]} position={position} />;
      case 'cylinder':
        return <Cylinder ref={meshRef} args={[0.3 * scale, 0.3 * scale, 0.6 * scale, 8]} position={position} />;
      case 'dodecahedron':
        return <Dodecahedron ref={meshRef} args={[0.4 * scale]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.4 * scale]} position={position} />;
    }
  };

  return (
    <>
      {getShapeComponent()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.9} 
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </>
  );
};

export const EnhancedFloatingElements: React.FC = () => {
  const shapes = useMemo(() => [
    { position: [-5, 3, -3], color: '#3b82f6', speed: 0.6, shape: 'sphere', scale: 1.4 },
    { position: [5, -2, -2], color: '#8b5cf6', speed: 0.8, shape: 'dodecahedron', scale: 1.0 },
    { position: [-4, -3, 2], color: '#10b981', speed: 0.7, shape: 'octahedron', scale: 1.2 },
    { position: [4, 4, -1], color: '#f59e0b', speed: 0.5, shape: 'torus', scale: 1.3 },
    { position: [0, -4, -4], color: '#ef4444', speed: 0.9, shape: 'cone', scale: 1.1 },
    { position: [-6, 1, 3], color: '#06b6d4', speed: 0.6, shape: 'cylinder', scale: 0.9 },
    { position: [6, 2, -3], color: '#84cc16', speed: 0.8, shape: 'box', scale: 0.8 },
    { position: [2, 5, 2], color: '#f97316', speed: 0.4, shape: 'sphere', scale: 1.0 },
    { position: [-3, 0, -5], color: '#ec4899', speed: 0.7, shape: 'octahedron', scale: 0.7 },
    { position: [3, -1, 4], color: '#8b5cf6', speed: 0.6, shape: 'torus', scale: 0.9 },
    { position: [-2, 6, 0], color: '#06b6d4', speed: 0.5, shape: 'dodecahedron', scale: 0.8 },
    { position: [1, -5, 1], color: '#10b981', speed: 0.8, shape: 'cylinder', scale: 1.0 },
  ] as const, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[15, 15, 15]} intensity={1.2} />
        <pointLight position={[-15, -15, -10]} intensity={1.0} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={0.8} color="#10b981" />
        <directionalLight position={[8, 8, 8]} intensity={0.6} />
        <spotLight 
          position={[8, 8, 8]} 
          angle={0.4} 
          penumbra={0.6} 
          intensity={1.2} 
          color="#3b82f6"
        />
        <spotLight 
          position={[-8, -8, -8]} 
          angle={0.3} 
          penumbra={0.5} 
          intensity={1.0} 
          color="#f59e0b"
        />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};