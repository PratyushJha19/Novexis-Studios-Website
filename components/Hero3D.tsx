
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, OrbitControls, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// NeuralCore uses the Sphere component from drei which is a typed React component to avoid mesh/sphereGeometry errors
const NeuralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.x = time * 0.1;
        meshRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#0070F3"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

// Particles uses the Points and PointMaterial components from drei to avoid points/bufferAttribute errors
const Particles = () => {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial size={0.02} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </Points>
  );
};

// Hero3D uses useMemo for lights and primitive components to avoid intrinsic element errors (ambientLight, pointLight)
const Hero3D = () => {
  const ambientLight = useMemo(() => new THREE.AmbientLight(0xffffff, 0.5), []);
  const blueLight = useMemo(() => new THREE.PointLight(0x0070F3, 1), []);
  const purpleLight = useMemo(() => new THREE.PointLight(0x8B5CF6, 1), []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Fixed: Replaced intrinsic elements with primitives to avoid JSX type errors in restricted environments */}
        <primitive object={ambientLight} />
        <primitive object={blueLight} position={[10, 10, 10]} />
        <primitive object={purpleLight} position={[-10, -10, -10]} />
        <NeuralCore />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
