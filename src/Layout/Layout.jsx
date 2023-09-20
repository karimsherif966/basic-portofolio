import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Start from '../Start/Start'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
