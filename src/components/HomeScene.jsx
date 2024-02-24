import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


const path = '/statue/marble_bust_01_4k.gltf';
useGLTF.preload(path)

function Statue(props) {
    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.y += 0.001
    })
    const { nodes, materials } = useGLTF(path)
    return (
        <group {...props} dispose={null} scale={3}>
        <mesh ref={meshRef} geometry={nodes.marble_bust_01.geometry} castShadow
        receiveShadow material={materials.marble_bust_01} position={[0, -0.2, 0]} />
        </group>
    )
}

export default function HomeScene() {
  return (
    <>
      <perspectiveCamera />
      <OrbitControls enableZoom={false}/>
      <ambientLight color="yellow" intensity={0.2} />
      <pointLight color="grey" position={[-4, 1, 3]} intensity={5.2} />
      <Statue/>
    </>
  )
}
