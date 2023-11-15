import React from 'react'
import Nav from '../../layouts/nav/Nav'
import Banner from '../../components/baner/Banner'
import Line from '../../components/line/Line'
import Cards from '../../components/cards/Cards'
import Carusel from '../../layouts/carusel/Carusel'
import User from '../../layouts/user/User'
import Logo from '../../components/logo/Logo'
import Blog from '../../components/blog/Blog'
import Footer from '../../layouts/footer/Footer'


const Home = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
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

export default Home