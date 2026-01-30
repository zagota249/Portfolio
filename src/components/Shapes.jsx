import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Rotating Box - Automatically rotates
export function RotatingBox({ color = 'orange', speed = 0.01, ...props }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed
      meshRef.current.rotation.y += speed
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Rotating Sphere
export function RotatingSphere({ color = 'hotpink', speed = 0.01, ...props }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Torus (Donut shape)
export function Torus({ color = 'cyan', ...props }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Floating animation component
export function FloatingObject({ children, floatIntensity = 1, speed = 1 }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * speed) * 0.3 * floatIntensity
    }
  })

  return <group ref={groupRef}>{children}</group>
}
