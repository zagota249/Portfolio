import { Text, Float, Html } from '@react-three/drei'

// 3D Text Component
export function Text3D({ children, color = 'white', size = 1, ...props }) {
  return (
    <Text
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
      {...props}
    >
      {children}
    </Text>
  )
}

// Floating 3D Text
export function FloatingText({ children, color = 'white', size = 1, ...props }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        fontSize={size}
        color={color}
        anchorX="center"
        anchorY="middle"
        {...props}
      >
        {children}
      </Text>
    </Float>
  )
}

// HTML content inside 3D scene
export function HtmlContent({ children, ...props }) {
  return (
    <Html
      transform
      occlude
      style={{
        transition: 'all 0.2s',
        opacity: 1,
        transform: 'scale(1)',
      }}
      {...props}
    >
      {children}
    </Html>
  )
}
