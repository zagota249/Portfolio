import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Chair() {
  const chairRef = useRef()

  return (
    <group ref={chairRef} position={[0, 0, 2]} rotation={[0, Math.PI, 0]}>
      {/* Seat */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Seat Cushion */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.45, 0.05, 0.45]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.9, -0.22]} castShadow>
        <boxGeometry args={[0.5, 0.7, 0.08]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Backrest Cushion */}
      <mesh position={[0, 0.9, -0.18]}>
        <boxGeometry args={[0.45, 0.6, 0.05]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Armrests */}
      {[-0.28, 0.28].map((x, i) => (
        <group key={i}>
          {/* Armrest support */}
          <mesh position={[x, 0.65, 0]} castShadow>
            <boxGeometry args={[0.05, 0.3, 0.05]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Armrest pad */}
          <mesh position={[x, 0.8, 0.1]}>
            <boxGeometry args={[0.06, 0.03, 0.25]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.7} />
          </mesh>
        </group>
      ))}

      {/* Chair Base - Star shape */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Chair Legs (5 legs) */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2
        const x = Math.cos(angle) * 0.25
        const z = Math.sin(angle) * 0.25
        return (
          <group key={i}>
            <mesh position={[x * 0.5, 0.08, z * 0.5]} rotation={[0, -angle, Math.PI / 2 - 0.3]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Wheel */}
            <mesh position={[x, 0.03, z]}>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        )
      })}

      {/* Green accent lights on chair */}
      <mesh position={[0, 0.55, 0.26]}>
        <boxGeometry args={[0.4, 0.01, 0.01]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
}