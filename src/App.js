import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls, Stage } from '@react-three/drei'
import Test3D from './Test3D.js'
import Three from './component/three'
import "./App.css";

export default function App() {
  return (
    <Canvas id="canvas" performance={{ min: 0.5 }} >

      <Suspense fallback={null}>
        {/* <Stage>
          <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#a2a2a2" />
          <Test3D position={[0, 0, -2]} />
        </Stage> */}
        <Three />
      </Suspense>

    </Canvas>
  )
}
