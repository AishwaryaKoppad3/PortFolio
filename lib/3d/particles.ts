import * as random from "maath/random";

export function generateSpherePositions(count: number, radius: number): Float32Array {
  // Generate positions and ensure they're valid
  const positions = random.inSphere(new Float32Array(count * 3), { radius });
  
  // Validate positions
  for (let i = 0; i < positions.length; i++) {
    if (isNaN(positions[i])) {
      positions[i] = 0;
    }
  }
  
  return positions;
}