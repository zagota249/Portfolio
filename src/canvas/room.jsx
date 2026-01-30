import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Table from './table'
import Chair from './Chair'

export default function Room() {
  const gridRef = useRef()
  
  // Generate fixed positions for floating cubes
  const cubePositions = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      x: (i - 2) * 2,
      y: 2 + (i % 3),
      z: -5 + (i % 2),
      delay: i * 0.5
    }))
  }, [])

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.getElapsedTime() * 0.5) % 1
    }
  })

  return (
    <>
      {/* Animated Grid Floor */}
      <group position={[0, 0, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial 
            color="#050505"
            metalness={0.8}
            roughness={0.4}
          />
        </mesh>
        
        {/* Grid Lines */}
        <gridHelper 
          ref={gridRef}
          args={[30, 30, '#00ff88', '#003322']} 
          position={[0, 0.01, 0]}
        />
      </group>

      {/* Back Wall with Glow */}
      <mesh position={[0, 3, -8]} receiveShadow>
        <planeGeometry args={[30, 10]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Decorative Wall Lines */}
      {[-4, -2, 0, 2, 4].map((x, i) => (
        <mesh key={i} position={[x, 3, -7.9]}>
          <boxGeometry args={[0.02, 6, 0.01]} />
          <meshStandardMaterial 
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Floating Name Text - Using default font */}
      <Text
        position={[0, 5, -7]}
        fontSize={0.8}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
      >
        {'< PORTFOLIO />'}
      </Text>

      {/* Side Walls */}
      <mesh position={[-10, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#050505" transparent opacity={0.5} />
      </mesh>
      <mesh position={[10, 3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#050505" transparent opacity={0.5} />
      </mesh>

      {/* Neon Light Strips */}
      <mesh position={[0, 6, -7.5]}>
        <boxGeometry args={[8, 0.1, 0.1]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Table and Chair */}
      <Table />
      <Chair />

      {/* Decorative Floating Cubes */}
      {cubePositions.map((pos, i) => (
        <FloatingCube 
          key={i} 
          position={[pos.x, pos.y, pos.z]} 
          delay={pos.delay}
        />
      ))}
    </>
  )
}

function FloatingCube({ position, delay }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + delay) * 0.3
      ref.current.rotation.x = clock.getElapsedTime() * 0.5
      ref.current.rotation.y = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial 
        color="#00ff88"
        emissive="#00ff88"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  )
}