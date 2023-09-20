import React from 'react'
import '../About/style.css'

export default function About() {
  return (
    <>
    <div className="about d-flex align-items-center">
    <div className="container mt-5 py-5 text-white ">
        <div className='text-center'>
            <h1 className='fw-bolder' >ABOUT COMPONENT</h1>
          <div className='d-flex justify-content-center'>
                      <div className='line me-3'></div>
                     <i class="fa-solid fa-star"></i>
                     <div className='line ms-3'></div>
          </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
    </div>
    </div>
    </>
  )
}
