import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/style.css'

export default function NavBar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <Link className="navbar-brand start" to='start'>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
          <Link className="nav-link active" aria-current="page" to='about'>ABOUT</Link>
          <Link className="nav-link active" aria-current="page" to='portofolio'>PORTFOLIO</Link>
          <Link className="nav-link active" aria-current="page" to='contact'>CONTACT</Link>
      </ul>
    </div>
  </div>
</nav>
 
   
   
   </>
  )
}
