import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar'


const Layout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Layout