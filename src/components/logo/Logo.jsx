import React from 'react'
import { Container, Linee } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import "./Logo.scss"

import Logo1 from "../../assets/logo/LogoSvg1.svg"
import Logo2 from "../../assets/logo/LogoSvg2.svg"
import Logo3 from "../../assets/logo/LogoSvg3.svg"

const Logo = () => {
  return (
    <Container>
        <Linee/>
        <div className="swiper-title">
            <h2>Почему вибирают именно  нас ?</h2>
            <Link to="/" className='link'></Link>

        </div>
        <div className="log-wrapper">
            <div className="logo">
                <div className="logoImg">
                    <img src={Logo3} alt="" />
                </div>
                <h2>Маркетплейс</h2>
                <p>Компания Lode X - позволяет людям редактировать свою одежду.</p>
            </div>
            <div className="logo">
                <div className="logoImg">
                    <img src={Logo1} alt="" />
                </div>
                <h2>Маркетплейс</h2>
                <p>Компания Lode X - позволяет людям редактировать свою одежду.</p>
            </div>
            <div className="logo">
                <div className="logoImg">
                    <img src={Logo2} alt="" />
                </div>
                <h2>Маркетплейс</h2>
                <p>Компания Lode X - позволяет людям редактировать свою одежду.</p>
            </div>
            <div className="logo">
                <div className="logoImg">
                    <img src={Logo3} alt="" />
                </div>
                <h2>Маркетплейс</h2>
                <p>Компания Lode X - позволяет людям редактировать свою одежду.</p>
            </div>
        </div>
    </Container>
  )
}

export default Logo