import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import Avatar from "./Avatar"

function CameraController({ speaking }) {
  const { camera } = useThree()

  useFrame(() => {
    const targetZ = speaking ? 3.5 : 5
    camera.position.z += (targetZ - camera.position.z) * 0.03
  })

  return null
}

export default function AvatarScene({ speaking }) {
  return (
    <div style={{ width:"100%", height:"100%" }}>
      <Canvas camera={{ position: [0, 1.8, 4], fov: 45 }}>
        
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-3, 2, 3]} intensity={0.6} color="#00ffff" />

        {/* Camera Animation */}
        <CameraController speaking={speaking} />

        {/* 3D Avatar */}
        <Avatar speaking={speaking} />

        {/* Controls */}
       <OrbitControls
  enableZoom={false}
  enablePan={false}
  enableRotate={false}
/>

        {/* Environment */}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}