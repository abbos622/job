import React from 'react'
import { Container, Linee } from '../../utils/Utils'

import "./Footer.scss"
import { Link } from 'react-router-dom'

import { FaInstagram,FaFacebook} from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
        <Linee/>

        <Container>
            <div className="footer-wrapper">
                <ul>
                    <li className='footer-item'>Категории</li>
                    <li><Link to="/" className='footer-link'>Мужское </Link></li>
                    <li><Link to="/" className='footer-link'>Женское  </Link></li>
                    <li><Link to="/" className='footer-link'>Детское  </Link></li>
                </ul>
                <ul>
                    <li className='footer-item'>О нас</li>
                    <li><Link to="/" className='footer-link'>Контакты </Link></li>
                    <li><Link to="/" className='footer-link'>О компании  </Link></li>
                    <li><Link to="/" className='footer-link'>Правила пользования   </Link></li>
                </ul>
                <ul>
                    <li className='footer-item'>Мой аккаунт</li>
                    <li><Link to="/" className='footer-link'>Войти </Link></li>
                    <li><Link to="/" className='footer-link'>Заказы </Link></li>
                    <li><Link to="/" className='footer-link'>Список желаний </Link></li>
                </ul>
                <ul>
                    <li className='footer-item'>+998 ( 99 ) 280 75 76</li>
                    <li><Link to="/" className='footer-link'>example@gmail.com </Link></li>
                    <li><Link to="/" className='footer-link'>example@mail.ru  </Link></li>
                </ul>
            </div>
        </Container>
    </footer>
  )
}

export default Footer