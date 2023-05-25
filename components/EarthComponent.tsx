import {Suspense} from 'react'
import Earth from './Earth'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const EarthComponent = () => {
  return (
    <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense>
            <Earth />
        </Suspense>
    </Canvas>   
  )
}

export default EarthComponent