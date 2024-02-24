import React from 'react'
import { Canvas } from '@react-three/fiber';
import ProfileScene from './ProfileScene';


export default function About() {
  return (
    <section id='about' className='about-section'>
        <div className="container my-5" >
            <div className="row flex-wrap align-content-center">
                <div className="col-sm-6 mt-4" style={{ height: '60vh' }}>
                    <Canvas camera={{position:[0, 0, 2], fov:60, aspect:1, near:1, far:10}}>
                        <ProfileScene/>
                    </Canvas>
                </div>
                <div className="col-sm-6 mt-4">
                    <p className='p-text mt-5'>Hello, I am Harish Khangar.</p>

                    <p className='p-text'>Creating dynamic and compelling websites is my passion. Having expertise in both front-end and back-end development, I aim to provide high-quality and user-friendly experiences.
                    From designing visually appealing user interfaces with HTML, CSS, and JavaScript to deploying robust server-side functionality with technologies such as Java, Node.js, and Express, I strive to build seamless and effective web applications.</p>

                    {/* <p className='p-text'>I am efficient at integrating APIs and third-party services to improve the functionality and interactivity of web applications. In addition, I am familiar with version control systems such as Git and have experience deploying websites to cloud platforms such as Heroku and AWS.
                    I am eager to collaborate on new initiatives and contribute to the expansion of your company.</p> */}
                </div>
            </div>
        </div>
    </section>
  )
}
