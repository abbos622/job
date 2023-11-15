import React from 'react'
import { Container, Linee } from '../../utils/Utils'
import { Link, NavLink } from 'react-router-dom'
import "./Line.scss"

const Line = () => {
  return (
    <Container>
        <div className="header__menu">
            <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Новинки </NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Популярние </NavLink>
            <button className='nav-btn'>Редактировать </button>
        </div>

        <Linee/>
    </Container>
  
  )
}

export default Line