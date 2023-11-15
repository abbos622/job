import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './home/Home'
import About from './about/About'
import Produc from './produc/Produc'
import Women from './women/Women'
import Kids from './kids/Kids'

const RouteControler = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='women' element={<Women/>}></Route>
        <Route path='kids' element={<Kids/>}></Route>
        <Route path='about' element={<About/>}/>
        <Route path='produc' element={<Produc/>}/>
    </Routes>
  )
}

export default RouteControler