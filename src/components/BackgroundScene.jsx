import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function ParticlesField() {
  const pointsRef = useRef(null)
  const positions = useMemo(
    () =>
      Float32Array.from({ length: 900 }, (_, index) => {
        const pointIndex = Math.floor(index / 3)
        const axis = index % 3
        const seedA = Math.sin(pointIndex * 12.9898)
        const seedB = Math.cos(pointIndex * 78.233)
        const seedC = Math.sin(pointIndex * 45.164)
        if (axis === 0) return seedA * 9
        if (axis === 1) return seedB * 6
        return seedC * 7
      }),
    [],
  )

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = clock.elapsedTime * 0.04
    pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.08
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#6dd3ff" size={0.045} transparent opacity={0.8} />
    </points>
  )
}

export default function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5833ea_0%,rgba(10,14,35,0.7)_33%,#040816_72%,#02040b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(116,163,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(116,163,255,0.09)_1px,transparent_1px)] bg-[size:90px_90px] opacity-30 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_82%)]" />
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={1.4} />
          <ParticlesField />
        </Canvas>
      </div>
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(69,208,255,0.38),transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-[70vw] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  )
}
