import React, { useRef }  from 'react'
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Float } from '@react-three/drei';
import { TextureLoader } from 'three';

export default function ProfileScene() {

    const imagePath = '/Harish.jpeg';
    // const boxRef = useRef();
    const texture = new TextureLoader().load(imagePath);
    // useFrame(() => {
    //     boxRef.current.rotation.x += 0.001;
    //     //boxRef.current.rotation.y += 0.01;
    // });

  return (
    <>
        <perspectiveCamera />
        <OrbitControls enableZoom={false}/>
        <ambientLight color="white" intensity={0.2} />
        <pointLight color="grey" position={[-4, 1, 3]} intensity={5.2} />
        <Float rotationIntensity={2.5} rotateOnAxis={2.8} >
            <Box position={[0, 0, 0]}  scale={[1, 1, 1]}>
                <meshStandardMaterial map={texture}/>
            </Box>
        </Float>
    </>
  )
}
