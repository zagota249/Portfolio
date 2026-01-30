import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Lights() {
  const spotLightRef = useRef()
  const movingLightRef = useRef()

  useFrame(({ clock }) => {
    if (movingLightRef.current) {
      movingLightRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 3
      movingLightRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.5) * 3
    }
  })

  return (
    <>
      {/* Ambient Light - Very low for dark atmosphere */}
      <ambientLight intensity={0.1} />

      {/* Main Green Spotlight */}
      <spotLight
        ref={spotLightRef}
        position={[0, 8, 5]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#00ff88"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Moving accent light */}
      <pointLight
        ref={movingLightRef}
        position={[0, 4, 0]}
        intensity={0.5}
        color="#00ff88"
        distance={10}
      />

      {/* Rim lights for character */}
      <pointLight
        position={[-3, 3, 3]}
        intensity={0.3}
        color="#004422"
        distance={8}
      />
      <pointLight
        position={[3, 3, 3]}
        intensity={0.3}
        color="#004422"
        distance={8}
      />

      {/* Table spotlight */}
      <spotLight
        position={[0, 4, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={1}
        color="#00ff88"
        target-position={[0, 0.8, 1]}
      />

      {/* Background accent */}
      <pointLight
        position={[0, 5, -7]}
        intensity={1}
        color="#00ff88"
        distance={15}
      />

      {/* Floor reflection light */}
      <rectAreaLight
        position={[0, 0.1, 2]}
        width={5}
        height={5}
        intensity={0.3}
        color="#00ff88"
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  )
}
