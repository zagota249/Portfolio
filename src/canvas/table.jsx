import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Drawer from './drawer'
import { useSceneState } from '../store/useSceneStore'

export default function Table() {
  const setFocus = useSceneState((s) => s.setFocus)
  const monitorRef = useRef()
  const screenGlowRef = useRef()

  // Fixed code line widths
  const codeLineWidths = useMemo(() => [0.45, 0.35, 0.5, 0.3, 0.4], [])

  useFrame(({ clock }) => {
    if (screenGlowRef.current) {
      screenGlowRef.current.material.emissiveIntensity = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Table Top - Glass with green edge glow */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow onClick={(e) => { e.stopPropagation(); console.log('Table clicked!'); setFocus('table'); }}>
        <boxGeometry args={[3, 0.08, 1.5]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Table Edge Glow */}
      <mesh position={[0, 0.76, 0]}>
        <boxGeometry args={[3.02, 0.02, 1.52]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Table Legs */}
      {[[-1.3, 0.375, -0.6], [1.3, 0.375, -0.6], [-1.3, 0.375, 0.6], [1.3, 0.375, 0.6]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.75]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Monitor */}
      <group ref={monitorRef} position={[0, 1.3, -0.3]}>
        {/* Monitor Frame */}
        <mesh castShadow>
          <boxGeometry args={[1.2, 0.7, 0.05]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Monitor Screen */}
        <mesh ref={screenGlowRef} position={[0, 0, 0.03]}>
          <boxGeometry args={[1.1, 0.6, 0.01]} />
          <meshStandardMaterial 
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Code Lines on Screen */}
        {[0.2, 0.1, 0, -0.1, -0.2].map((y, i) => (
          <mesh key={i} position={[-0.3 + (i % 2) * 0.1, y, 0.035]}>
            <boxGeometry args={[codeLineWidths[i], 0.03, 0.001]} />
            <meshBasicMaterial color="#003322" />
          </mesh>
        ))}

        {/* Monitor Stand */}
        <mesh position={[0, -0.45, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.55, 0.1]}>
          <boxGeometry args={[0.3, 0.02, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Keyboard */}
      <mesh position={[0, 0.8, 0.3]} castShadow>
        <boxGeometry args={[0.5, 0.02, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Keyboard Glow */}
      <mesh position={[0, 0.82, 0.3]}>
        <boxGeometry args={[0.48, 0.005, 0.18]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.4, 0.8, 0.35]} castShadow>
        <capsuleGeometry args={[0.025, 0.04, 8, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Drawers with Labels - Floating buttons above desk for easy clicking */}
      <Drawer position={[-1, 1.2, 0.5]} type="Skills" label="SKILLS" />
      <Drawer position={[1, 1.2, 0.5]} type="Education" label="EDUCATION" />

      {/* Desk Lamp */}
      <group position={[-1.2, 0.8, -0.4]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.1, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, 0]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4]} />
          <meshStandardMaterial color="#333333" metalness={0.8} />
        </mesh>
        <mesh position={[0.1, 0.35, 0.1]}>
          <coneGeometry args={[0.08, 0.12, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} />
        </mesh>
        <pointLight position={[0.1, 0.3, 0.1]} intensity={0.5} color="#00ff88" distance={2} />
      </group>

      {/* Coffee Mug */}
      <group position={[1.1, 0.85, 0.2]}>
        <mesh>
          <cylinderGeometry args={[0.04, 0.035, 0.08, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.05, 0, 0]}>
          <torusGeometry args={[0.025, 0.008, 8, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>
    </group>
  )
}
