import React from 'react'
import Nav from '../../layouts/nav/Nav'
import Carusel from '../../layouts/carusel/Carusel'
import User from '../../layouts/user/User'
import Logo from '../../components/logo/Logo'
import Blog from '../../components/blog/Blog'
import Footer from '../../layouts/footer/Footer'

const Produc = () => {
  return (
    <div>
      <Nav/>
      <h1>Single Page</h1>
      <Carusel/>
      <User/>
      <Logo/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Produc