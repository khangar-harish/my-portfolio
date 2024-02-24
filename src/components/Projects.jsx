
// export default function Projects() {
//     return (
//         <>
//          <section id='about' className='projects-section'>
//             <div className="container my-5" >
//                 <div className="row experience">
//                 <h1 className='mb-4 mt-5'>Projects</h1>
//                 <div class="card">
//                 <div class="card-header">
//                     Smartek21 Pvt Ltd
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">Special title treatment</h5>
//                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//             </section>
//         </>

//     )
// }

import React from 'react'


export default function About() {
  return (
    <section id='about' className='about-section'>
        <div className="container my-5" >
            <div className="row d-flex justify-content-around">
                <div className="col-sm-6 image-container">
                     <img src="/Harish.jpeg" alt="My Image" className="image"/>
                </div>
                <div className="col-sm-6">
                    <p className='p-text '>Hello, I am Harish Khangar.</p>

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

