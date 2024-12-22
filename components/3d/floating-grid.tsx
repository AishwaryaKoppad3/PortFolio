"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function CubeGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const cubes = useRef<THREE.Mesh[]>([]);

  // Create a 4x4x4 grid of cubes
  const positions = [];
  const size = 4;
  const spacing = 1.5;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        positions.push([
          (x - size / 2) * spacing,
          (y - size / 2) * spacing,
          (z - size / 2) * spacing,
        ]);
      }
    }
  }

  useFrame((state) => {
    if (!groupRef.current) return;

    // Rotate the entire grid
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;

    // Animate individual cubes
    cubes.current.forEach((cube, i) => {
      const time = state.clock.elapsedTime;
      cube.scale.setScalar(
        1 + Math.sin(time * 2 + i) * 0.1
      );
      cube.rotation.x = time * 0.2 + i * 0.1;
      cube.rotation.z = time * 0.1 + i * 0.1;
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          ref={(el) => (cubes.current[i] = el as THREE.Mesh)}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL(i * 0.01, 0.8, 0.5)}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FloatingGrid() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CubeGrid />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}