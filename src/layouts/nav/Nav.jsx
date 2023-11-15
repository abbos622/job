import React from 'react';
import "./Nav.scss";
import {Link, NavLink} from "react-router-dom";

import logo from "../../assets/navbarLogo.svg";
import like from "../../assets/navLike.svg";
import contac from "../../assets/navContac.svg";
import { Container } from '../../utils/Utils'

const Nav = () => {
  return (
    <>
      <nav>
        <Container>
          <div className="nav__wrapper">
            <img src={logo} alt="" />
            <ul className="nav__list">
              <li className='nav__item'>
                <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Мужское</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to="/women" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Женское</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to="/kids" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Детские </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Безопасная Сделка</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Правило Пользование</NavLink>
              </li>
            </ul>

            <div className="nav-contec">
              <Link to="/"><img src={like} alt="" /></Link>  
              <Link to="/"><img src={contac} alt="" /></Link>  
            </div> 

            <button className='nav-btn'>Contact Us</button>
          </div>
        </Container>
      </nav>

      <input type="text" className="search" placeholder='Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... ' />
    </>
  )
}

export default Nav