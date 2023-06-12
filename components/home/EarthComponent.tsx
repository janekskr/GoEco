import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, ContactShadows, useGLTF, Preload } from '@react-three/drei';

const Earth = () => {
    const earth = useGLTF('/3d/world.gltf')

    return <primitive object={earth.scene} scale={1.5} />   
}


const EarthComponent = () => {
    return (
        <div className="md:w-[60%] w-[90%] aspect-square">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 70 }}>
                <PerspectiveCamera makeDefault fov={70} position={[0, 0, 5]} />
                <ambientLight color="#aeaeae" intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                />
                <Earth />
                <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
                <Preload all />
            </Canvas>
        </div>
    );
}

export default EarthComponent;