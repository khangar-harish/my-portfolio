
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
    <section id='project' className='project-section'>
        <div className="container my-5" >
            <div className="row d-flex justify-content-around">
                <div className="col-md-8 pr-box">
                    Project1
                </div>
                <div className="col-md-8 pr-box">
                    Project2
                </div>
            </div>
        </div>
    </section>
  )
}

