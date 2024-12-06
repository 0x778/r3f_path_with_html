import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import ScreenModel from './componots/ScreenModel'

function App() {

  const Content = useRef()
  return (
    <div ref={Content} className='w-screen h-screen'>
    <Canvas>
      <axesHelper/>
      <color attach="background" args={['#000000']}/>
      <Environment preset='sunset'/>
      <OrbitControls/>
      <ScreenModel portal={Content}/>
    
    </Canvas>
    </div>
  )
}

export default App
