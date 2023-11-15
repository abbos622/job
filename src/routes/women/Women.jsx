import React from 'react'
import Nav from '../../layouts/nav/Nav'
import Line from '../../components/line/Line'
import Carusel from '../../layouts/carusel/Carusel'
import User from '../../layouts/user/User'
import Logo from '../../components/logo/Logo'
import Blog from '../../components/blog/Blog'
import Footer from '../../layouts/footer/Footer'
import WomenBanner from '../../pages/women-banner/WomenBanner'
import WomenCards from '../../pages/women-cards/WomenCards'

const Women = () => {
  return (
    <div>
        <Nav/>
        <WomenBanner/>
        <Line/>
        <WomenCards/>
        <Carusel/>
        <User/>
        <Logo/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Women