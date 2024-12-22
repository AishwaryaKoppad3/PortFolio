"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 0.1, 1.5]} />
      <meshStandardMaterial color="#333" />
      <mesh position={[0, 0.1, -0.7]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </mesh>
  );
}

export default function FloatingLaptop() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Laptop />
      </Canvas>
    </div>
  );
}