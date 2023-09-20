import React from 'react'
import '../Footer/style.css'

export default function Footer() {
  return (
    <>
    <footer className=''>
        <div className="container text-white py-5">
            <div className="row py-3 text-center py-5">
                <div className="col-md-4">
                    <div className=''>
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=''>
                            <h3>AROUND THE WEB</h3>
                            <div className='icons d-flex gap-2 justify-content-center'>
                            <a href='https://www.facebook.com/' target='_blank'><i className="fa-brands fa-facebook fs-5 rounded-circle p-2"></i></a>
                            <a href='https://twitter.com/' target='_blank'><i className="fa-brands fa-twitter fs-5 rounded-circle p-2"></i></a>
                            <a href='https://search.yahoo.com/search?fr=mcafee&type=E210US91105G0&p=linkedin' target='_blank'><i className="fa-brands fa-linkedin fs-5 rounded-circle p-2"></i></a>
                            <a href='https://www.youtube.com/' target='_blank'><i className="fa-brands fa-youtube fs-5 rounded-circle p-2"></i></a>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=''>
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='copywrite py-3'>
            <p className='text-white text-center mb-1'>Copyright © Your Website 2021</p>

        </div>






    </footer>
    </>
  )
}
