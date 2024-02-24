import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import HomeScene from './HomeScene';

function Home() {
  return (
    <section id='home' className='home-section'>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-6 mt-6">
                    <h1 className='text-left'>Hello, I am Harish Khangar</h1>
                    <h1 className='text-left'>I am Full Stack Web Developer</h1>
                    <p className='p-text'> I build things for web and I am passionate about computer programming and web designing.</p>
                </div>
                <div className="col-sm-6 mt-2" style={{ height: '60vh' }} >
                    <Canvas camera={{position:[0, 0, 2], fov:60, aspect:1, near:1, far:10}}>
                        <HomeScene />
                    </Canvas>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Home;

