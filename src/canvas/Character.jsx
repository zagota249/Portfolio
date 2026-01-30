import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Realistic Human Character sitting on chair
export default function Character() {
  const groupRef = useRef()
  const headRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    
    // Subtle breathing animation
    if (groupRef.current) {
      groupRef.current.position.y = 0.3 + Math.sin(t * 1.5) * 0.01
    }
    
    // Head looking around naturally
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.3) * 0.15
      headRef.current.rotation.x = Math.sin(t * 0.2) * 0.05
    }
    
    // Typing animation for arms
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 6) * 0.08 - 0.4
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 6 + 1.5) * 0.08 - 0.4
    }
  })

  // Realistic colors
  const skinColor = '#e0b090'
  const hairColor = '#1a1209'
  const shirtColor = '#1e3a5f'
  const pantsColor = '#1a1a2e'

  return (
    <group ref={groupRef} position={[0, 0.3, 2]} rotation={[0, Math.PI, 0]}>
      
      {/* Torso / Body */}
      <mesh position={[0, 0.75, 0]}>
        <capsuleGeometry args={[0.22, 0.45, 12, 24]} />
        <meshStandardMaterial color={shirtColor} roughness={0.8} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 1.4, 0]}>
        {/* Head shape */}
        <mesh>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} />
        </mesh>
        
        {/* Hair */}
        <mesh position={[0, 0.08, -0.02]}>
          <sphereGeometry args={[0.19, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={hairColor} roughness={0.9} />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.06, 0.02, 0.15]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[0.06, 0.02, 0.15]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>

        {/* Eyebrows */}
        <mesh position={[-0.06, 0.06, 0.14]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.04, 0.008, 0.01]} />
          <meshStandardMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.06, 0.06, 0.14]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.04, 0.008, 0.01]} />
          <meshStandardMaterial color={hairColor} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, -0.02, 0.16]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.17, 0, 0]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} />
        </mesh>
        <mesh position={[0.17, 0, 0]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.12, 16]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group position={[-0.32, 0.85, 0]}>
        {/* Shoulder */}
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.8} />
        </mesh>
        {/* Arm */}
        <group ref={leftArmRef}>
          <mesh position={[0, -0.18, 0.12]} rotation={[0.4, 0, 0]}>
            <capsuleGeometry args={[0.045, 0.22, 8, 16]} />
            <meshStandardMaterial color={shirtColor} roughness={0.8} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.32, 0.26]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color={skinColor} roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* Right Arm */}
      <group position={[0.32, 0.85, 0]}>
        {/* Shoulder */}
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.8} />
        </mesh>
        {/* Arm */}
        <group ref={rightArmRef}>
          <mesh position={[0, -0.18, 0.12]} rotation={[0.4, 0, 0]}>
            <capsuleGeometry args={[0.045, 0.22, 8, 16]} />
            <meshStandardMaterial color={shirtColor} roughness={0.8} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.32, 0.26]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color={skinColor} roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* Legs */}
      {/* Left Leg */}
      <mesh position={[-0.1, 0.2, 0.15]} rotation={[0.7, 0, 0]}>
        <capsuleGeometry args={[0.07, 0.28, 8, 16]} />
        <meshStandardMaterial color={pantsColor} roughness={0.7} />
      </mesh>
      
      {/* Right Leg */}
      <mesh position={[0.1, 0.2, 0.15]} rotation={[0.7, 0, 0]}>
        <capsuleGeometry args={[0.07, 0.28, 8, 16]} />
        <meshStandardMaterial color={pantsColor} roughness={0.7} />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.1, -0.05, 0.35]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.14]} />
        <meshStandardMaterial color="#111" roughness={0.5} />
      </mesh>
      <mesh position={[0.1, -0.05, 0.35]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.14]} />
        <meshStandardMaterial color="#111" roughness={0.5} />
      </mesh>

      {/* Shadow under character */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}
