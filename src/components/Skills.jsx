import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
       <div className="container">
            <div className="row">
            <h1 className='mb-4 mt-5'>Experiences</h1>
              <Router>
                <div className="col-md-4">
                  <ul className='companies'>
                      <li><a href='/skills/st'>Smartek21 Pvt Ltd</a></li>
                      <li><a href='/skills/infy'>Infosys Ltd</a></li>
                      <li><a href='/skills/idc'>IDC Technologies Pvt Ltd</a></li>
                      <li><a href='/skills/fispl'>FISPL</a></li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <Routes>
                    <Route path='/st' element={<ST/>}/>
                    <Route path='/infy' element={<INFY/>}/>
                    <Route path='/idc' element={<IDC/>}/>
                    <Route path='/fispl' element={<FISPL/>}/>
                  </Routes>
                </div>
              </Router>
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
