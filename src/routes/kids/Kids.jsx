import React from 'react'
import Nav from '../../layouts/nav/Nav'
import Line from '../../components/line/Line'
import Cards from '../../components/cards/Cards'
import Carusel from '../../layouts/carusel/Carusel'
import User from '../../layouts/user/User'
import Logo from '../../components/logo/Logo'
import Blog from '../../components/blog/Blog'
import Footer from '../../layouts/footer/Footer'
import KidsBanner from '../../pages/kids-banner/KidsBanner'

const Kids = () => {
  return (
    <div>
        <Nav/>
        <KidsBanner/>
        <Line/>
        <Cards/>
        <Carusel/>
        <User/>
        <Logo/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Kids