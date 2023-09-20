import React from 'react'
import img from '../assets/photos/avataaars.svg'
import './style.css'
export default function () {
  return (
    <>
        <div className="start-body">
        <div className="container text-white py-5 mt-5">
            <div className="home d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column text-center'>
                     <img src={img} className='w-75 m-auto mb-5'></img>
                     <h1>START FRAMEWORK</h1>
          <div className='d-flex justify-content-center'>
                      <div className='line me-3'></div>
                     <i class="fa-solid fa-star"></i>
                     <div className='line ms-3'></div>
          </div> 
                <div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>              
                </div>

            </div>
        </div>
        </div>
    </>

    
  )
}
