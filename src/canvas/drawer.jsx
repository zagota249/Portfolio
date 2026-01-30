import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { useSceneState } from '../store/useSceneStore'

export default function Drawer({ position, type, label }) {
  const openPanel = useSceneState((s) => s.openPanel)
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 2) * 0.05
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    console.log('Drawer clicked!', type)
    openPanel(type)
  }

  return (
    <group position={position} ref={groupRef}>
      <group 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
        onClick={handleClick}
      >
        {/* Main Interactive Box - Large and clickable */}
        <mesh castShadow scale={hovered ? 1.1 : 1}>
          <boxGeometry args={[0.8, 0.3, 0.15]} />
          <meshStandardMaterial 
            color={hovered ? "#003322" : "#0a0a0a"}
            metalness={0.8}
            roughness={0.2}
            emissive="#00ff88"
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>

        {/* Glowing border */}
        <mesh position={[0, 0, 0.076]} scale={hovered ? 1.1 : 1}>
          <boxGeometry args={[0.82, 0.32, 0.01]} />
          <meshStandardMaterial 
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={hovered ? 3 : 1}
            transparent
            opacity={hovered ? 0.8 : 0.5}
          />
        </mesh>

        {/* Label Text - Larger */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.1}
          color={hovered ? "#00ff88" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
          font={undefined}
        >
          {label}
        </Text>
      </group>
    </group>
  )
}