import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
      <div className='fluid-container space'></div>
       <div className="container my-5">
            <div className="row">
                <div className="col-md-4 mt-6">
                <Router>
                  <ul className='companies'>
                      <li><a href='/skills/st'>Smartek21 Pvt Ltd</a></li>
                      <li><a href='/skills/infy'>Infosys Ltd</a></li>
                      <li><a href='/skills/idc'>IDC Technologies Pvt Ltd</a></li>
                      <li><a href='/skills/fispl'>FISPL</a></li>
                  </ul>
                  <Routes>
                    <Route path='/st' element={<ST/>}/>
                    <Route path='/infy' element={<INFY/>}/>
                    <Route path='/idc' element={<IDC/>}/>
                    <Route path='/fispl' element={<FISPL/>}/>
                  </Routes>
                  </Router>
                </div>
                <div className="col-md-8 box mt-2">
                This is a box.
                </div>

            </div>
        </div>
    </section>
  )
}



function ST() {
  return (
    <div>
      <h1>ST21</h1>
    </div>
  )
}
function INFY() {
  return (
    <div>
      <h1>INFOSYS</h1>
    </div>
  )
}
function IDC() {
  return (
    <div>
      <h1>IDC Technologies</h1>
    </div>
  )
}
function FISPL() {
  return (
    <div>
      <h1>FINITELY INFINITE</h1>
    </div>
  )
}
