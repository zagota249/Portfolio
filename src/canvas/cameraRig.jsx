import { useFrame } from "@react-three/fiber"
import { useSceneState } from "../store/useSceneStore"
import * as THREE from 'three'

const positions = {
  default: new THREE.Vector3(0, 2.5, 8),
  table: new THREE.Vector3(0, 2, 4),
  screen: new THREE.Vector3(0, 1.8, 2.5),
}

const lookAtTargets = {
  default: new THREE.Vector3(0, 1, 0),
  table: new THREE.Vector3(0, 0.8, 1),
  screen: new THREE.Vector3(0, 1.3, 0),
}

export default function CameraRig() {
  const focus = useSceneState((state) => state.focus)
  const panel = useSceneState((state) => state.panel)
  const currentPage = useSceneState((state) => state.currentPage)

  useFrame((state) => {
    const camera = state.camera
    
    // Determine target based on state
    let targetPosition = positions.default.clone()
    let lookAtTarget = lookAtTargets.default.clone()

    if (panel) {
      // When panel is open, zoom in slightly
      targetPosition = positions.table.clone()
      lookAtTarget = lookAtTargets.table.clone()
    } else if (focus === "table") {
      targetPosition = positions.table.clone()
      lookAtTarget = lookAtTargets.table.clone()
    } else if (focus === "screen") {
      targetPosition = positions.screen.clone()
      lookAtTarget = lookAtTargets.screen.clone()
    } else if (currentPage !== "home") {
      // Different angle for about/contact pages
      targetPosition = new THREE.Vector3(3, 2, 6)
      lookAtTarget = new THREE.Vector3(0, 1, 0)
    }

    // Add subtle floating motion
    const time = state.clock.getElapsedTime()
    targetPosition.y += Math.sin(time * 0.5) * 0.05
    
    // Smooth camera movement
    camera.position.lerp(targetPosition, 0.02)
    
    // Smooth look at
    const currentLookAt = new THREE.Vector3()
    camera.getWorldDirection(currentLookAt)
    currentLookAt.add(camera.position)
    currentLookAt.lerp(lookAtTarget, 0.02)
    camera.lookAt(lookAtTarget)
  })

  return null
}
