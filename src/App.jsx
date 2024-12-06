import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {


  return (
    <>
    <Canvas>
      {/* <color attach="background" /> */}
      {/* <orb */}
      
    <mesh>
      <planeGeometry args={[10,10]}/>
      <meshNormalMaterial/>
    </mesh>
    </Canvas>
    </>
  )
}

export default App
