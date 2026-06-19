import { useGLTF, Float } from "@react-three/drei"

export default function Avatar({ speaking }) {
  const model = useGLTF("/avatar/scene.gltf")

  return (
    <Float
      speed={speaking ? 3 : 1.2}
  rotationIntensity={speaking ? 0.7 : 0.2}
  floatIntensity={speaking ? 1.2 : 0.5}
    >
      <primitive
        object={model.scene}
        scale={0.6}
        position={[0.3, -0.4, 0]}
  rotation={[0, -Math.PI/2, 0]}
      />
    </Float>
  )
}