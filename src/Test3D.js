import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


function handleClick1() {
  console.log('Clicked')
}


function handleClick2() {
  console.log('Clicked2')
}


function handleClick3() {
  console.log('Clicked3')
}

export default function Test3D(props) {
  const { nodes, materials } = useGLTF('/test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh onClick={handleClick1} geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0, 2.75, 1.08]} rotation={[0, 0, -Math.PI]} scale={[-1.25, -2.75, -0.07]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[0, 2.33, 0.04]} rotation={[0, 0, -Math.PI]} scale={[-1.06, -2.33, -0.06]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[0, 1.72, -0.91]} rotation={[0, 0, -Math.PI]} scale={[-0.78, -1.72, -0.05]} />
    </group>
  )
}

useGLTF.preload('/test.glb')
