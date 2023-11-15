import React from 'react'
import { Container, Linee } from '../../utils/Utils'
import userImg from "../../assets/userImg.png"
import { Link } from 'react-router-dom'
import "./User.scss"

import { FaStar } from "react-icons/fa";


const User = () => {
  return (
    <Container>
        <Linee/>
        <div className="swiper-title">
        <h2>Популярные бренды</h2>
        <Link to="/" className='link'>Все бренды</Link>
        </div>

        <div className="user__cards">
            <div className="user__card">
                <img src={userImg} alt="" />
                <h3>Имя Фамилия</h3>
                <div className="star">
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                </div>
            </div>
            <div className="user__card">
                <img src={userImg} alt="" />
                <h3>Имя Фамилия</h3>
                <div className="star">
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                </div>
            </div>
            <div className="user__card">
                <img src={userImg} alt="" />
                <h3>Имя Фамилия</h3>
                <div className="star">
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                </div>
            </div>
            <div className="user__card">
                <img src={userImg} alt="" />
                <h3>Имя Фамилия</h3>
                <div className="star">
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                    <div>{<FaStar/>}</div>
                </div>
            </div>
           
        </div>
    </Container>
  )
}

export default User