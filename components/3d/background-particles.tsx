// "use client";

// import { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import { Mesh } from "three";
// import { generateSpherePositions } from "@/lib/3d/particles";

// function ParticleField() {
//   const ref = useRef<Mesh>(null);
  
//   // Memoize particle positions to prevent regeneration on each render
//   const positions = useMemo(() => generateSpherePositions(5000, 1.5), []);

//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.rotation.x = state.clock.elapsedTime * 0.05;
//       ref.current.rotation.y = state.clock.elapsedTime * 0.05;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#8b5cf6"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// }

// export default function BackgroundParticles() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <ParticleField />
//       </Canvas>
//     </div>
//   );
// }

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Points as PointsType } from "three"; // Import Points type from three.js
import { generateSpherePositions } from "@/lib/3d/particles";

function ParticleField() {
  const ref = useRef<PointsType>(null); // Change the type of ref to Points

  // Memoize particle positions to prevent regeneration on each render
  const positions = useMemo(() => generateSpherePositions(5000, 1.5), []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
