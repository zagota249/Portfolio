import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import Room from './room';
import Lights from './Lights';
import CameraRig from './cameraRig';
import Character from './Character';
import ParticleField from './ParticleField';

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00ff88" wireframe />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas 
      camera={{ position: [0, 3, 7], fov: 50 }}
      style={{ background: "linear-gradient(180deg, #000000 0%, #0a1a0a 100%)" }}
      shadows
      dpr={[1, 2]}
    >
      <Suspense fallback={<Loader />}>
        <fog attach="fog" args={['#000000', 10, 40]} />
        
        <Lights />
        <CameraRig />
        
        {/* Main Room with Table */}
        <Room />
        
        {/* Animated Character sitting on chair */}
        <Character />
        
        {/* Particle Effects */}
        <ParticleField />
        
        {/* Green Sparkles */}
        <Sparkles 
          count={100}
          scale={15}
          size={2}
          speed={0.4}
          color="#00ff88"
        />
        
        {/* Stars Background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={3}
          maxDistance={20}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Suspense>
    </Canvas>
  )
}