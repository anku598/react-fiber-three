import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { AmbientLight, PlaneGeometry } from 'three'
import { angleToRadians } from '../../utils/angle'

function Three() {
  const orbitControlRef = useRef(null)
  useFrame((state) => {
    if (!!orbitControlRef.current) {
      const { x, y } = state.mouse;
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(30))
      orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
      orbitControlRef.current.update()
    }
  })

  useEffect(() => {
    if (!!orbitControlRef.current) {
      console.log(orbitControlRef.current)
    }
  }, [orbitControlRef.current])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 5]} />
      <OrbitControls ref={orbitControlRef} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(80)} />
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
        <meshStandardMaterial color="#fff"></meshStandardMaterial>
      </mesh>

      <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
        <planeBufferGeometry args={[5, 5]} />
        <meshStandardMaterial color="red"></meshStandardMaterial>
      </mesh>
      <ambientLight args={["#3bc0e3", 5]} />

    </>
  )
}

export default Three