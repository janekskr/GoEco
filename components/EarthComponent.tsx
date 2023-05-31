import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls, ContactShadows } from '@react-three/drei';
import World from './World'


const EarthComponent = () => {
    return (
        <div className="w-[70vh] aspect-square hidden md:block">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 70 }}>
                <PerspectiveCamera makeDefault fov={70} position={[0, 0, 5]} />
                <ambientLight color="#aeaeae" intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    // azimuth={[-Math.PI / 6, Math.PI / 6]}
                >
                    <World />
                </PresentationControls>
                <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
            </Canvas>
        </div>
    );
}

export default EarthComponent;