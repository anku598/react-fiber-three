// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function CoLogo(props) {
//   const { nodes, materials } = useGLTF('COdesign.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Extrude2.geometry} material={nodes.Extrude2.material} />
//       <mesh geometry={nodes.Extrude.geometry} material={materials['Mat.2']}>
//         <mesh geometry={nodes.Rounding_1.geometry} material={materials['Mat.2']} position={[-13.21, 0.34, -0.19]}>
//           <mesh geometry={nodes.Cap_1.geometry} material={materials['Mat.2']} />
//         </mesh>
//         <mesh geometry={nodes.Rounding_2.geometry} material={materials['Mat.2']} position={[-13.21, 0.34, -0.19]}>
//           <mesh geometry={nodes.Cap_2.geometry} material={materials['Mat.2']} />
//         </mesh>
//       </mesh>
//     </group>
//   )
// }

// useGLTF.preload('/COdesign.gltf')


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CoLogo(props) {
  const { nodes, materials } = useGLTF('/COdesign_02.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Extrude2.geometry} material={nodes.Extrude2.material} />
      <mesh geometry={nodes.Extrude.geometry} material={materials['Mat.2']} position={[-6.6, 0.17, -0.09]} />
    </group>
  )
}

useGLTF.preload('/COdesign_02.gltf')
